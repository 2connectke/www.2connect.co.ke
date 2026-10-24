/**
 * POST /api/contact: the contact form's endpoint, a Cloudflare Pages Function.
 *
 * 1. Checks the Turnstile token, so bots cannot use us to email strangers.
 * 2. Saves the message as a row in Airtable (our record of every enquiry).
 * 3. Emails the team, with Reply-To set to the sender.
 * 4. Emails the sender a confirmation tailored to why they wrote.
 *
 * The request succeeds when the message reached us by at least one route
 * (Airtable or the team email). The confirmation email is best effort.
 *
 * Secrets and settings are listed in app/.dev.vars.example.
 */
import {
    confirmationEmail,
    teamNotificationEmail,
} from '../../server/contact-emails';
import type { Enquiry, EnquiryType } from '../../server/contact-emails';

interface Env {
    AIRTABLE_TOKEN?: string;
    AIRTABLE_BASE_ID?: string;
    AIRTABLE_TABLE?: string;
    RESEND_API_KEY?: string;
    MAIL_FROM?: string;
    TEAM_INBOX?: string;
    TURNSTILE_SECRET_KEY?: string;
}

interface PagesContext {
    request: Request;
    env: Env;
    waitUntil: (promise: Promise<unknown>) => void;
}

const enquiryTypes: EnquiryType[] = ['general', 'volunteer', 'partner'];

const limits = {
    name: 120,
    email: 254,
    phone: 40,
    organization: 160,
    message: 5000,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body: unknown, status = 200) =>
    Response.json(body, {
        status,
        headers: { 'Cache-Control': 'no-store' },
    });

const text = (value: unknown, max: number) =>
    typeof value === 'string' ? value.trim().slice(0, max) : '';

/** For fields that end up in subject lines: no line breaks. */
const line = (value: unknown, max: number) =>
    text(value, max).replace(/\s+/g, ' ');

/** Returns the cleaned enquiry, or an error message for the visitor. */
function parseEnquiry(body: Record<string, unknown>): Enquiry | string {
    const type = body.formType as EnquiryType;
    const enquiry: Enquiry = {
        type: enquiryTypes.includes(type) ? type : 'general',
        name: line(body.name, limits.name),
        email: line(body.email, limits.email).toLowerCase(),
        phone: line(body.phone, limits.phone),
        organization:
            type === 'partner'
                ? line(body.organization, limits.organization)
                : '',
        message: text(body.message, limits.message),
    };

    if (!enquiry.name) {
        return 'Please tell us your name.';
    }

    if (!EMAIL_PATTERN.test(enquiry.email)) {
        return 'That email address does not look right.';
    }

    if (enquiry.type === 'partner' && !enquiry.organization) {
        return 'Please tell us the name of your organisation.';
    }

    if (!enquiry.message) {
        return 'Please write a short message.';
    }

    return enquiry;
}

async function verifyTurnstile(
    secret: string,
    token: unknown,
    ip: string | null,
): Promise<boolean> {
    if (typeof token !== 'string' || !token) {
        return false;
    }

    const form = new FormData();
    form.append('secret', secret);
    form.append('response', token);

    if (ip) {
        form.append('remoteip', ip);
    }

    const response = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        { method: 'POST', body: form },
    );
    const result = (await response.json()) as { success?: boolean };

    return result.success === true;
}

const typeLabels: Record<EnquiryType, string> = {
    general: 'General',
    volunteer: 'Volunteer',
    partner: 'Partnership',
};

async function saveToAirtable(env: Env, enquiry: Enquiry) {
    if (!env.AIRTABLE_TOKEN || !env.AIRTABLE_BASE_ID) {
        throw new Error('Airtable is not configured');
    }

    // Accepts the bare ID or a pasted URL path like appXXX/tblXXX/viwXXX.
    const base =
        env.AIRTABLE_BASE_ID.match(/app[A-Za-z0-9]+/)?.[0] ??
        env.AIRTABLE_BASE_ID;
    const table = encodeURIComponent(env.AIRTABLE_TABLE || 'Messages');
    const response = await fetch(
        `https://api.airtable.com/v0/${base}/${table}`,
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${env.AIRTABLE_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // Creates missing single-select options instead of failing.
                typecast: true,
                fields: {
                    Name: enquiry.name,
                    Email: enquiry.email,
                    Phone: enquiry.phone,
                    Organisation: enquiry.organization,
                    Type: typeLabels[enquiry.type],
                    Message: enquiry.message,
                    Status: 'New',
                },
            }),
        },
    );

    if (!response.ok) {
        throw new Error(
            `Airtable ${response.status}: ${await response.text()}`,
        );
    }
}

interface Email {
    to: string;
    subject: string;
    html: string;
    text: string;
    replyTo?: string;
}

async function sendEmail(env: Env, email: Email) {
    if (!env.RESEND_API_KEY || !env.MAIL_FROM) {
        throw new Error('Resend is not configured');
    }

    const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from: env.MAIL_FROM,
            to: [email.to],
            subject: email.subject,
            html: email.html,
            text: email.text,
            reply_to: email.replyTo,
        }),
    });

    if (!response.ok) {
        throw new Error(`Resend ${response.status}: ${await response.text()}`);
    }
}

export async function onRequestPost({ request, env, waitUntil }: PagesContext) {
    let body: Record<string, unknown>;

    try {
        body = await request.json();
    } catch {
        return json({ error: 'We could not read that message.' }, 400);
    }

    // Hidden field that people never see; bots tend to fill it in. Pretend
    // it worked so they move on.
    if (text(body.website, 200)) {
        return json({ ok: true });
    }

    const enquiry = parseEnquiry(body);

    if (typeof enquiry === 'string') {
        return json({ error: enquiry }, 422);
    }

    // Fail closed: without the secret, only local development may skip the
    // bot check, so a missing setting can never open the form to spam.
    if (!env.TURNSTILE_SECRET_KEY) {
        const { hostname } = new URL(request.url);

        if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
            console.error('contact: TURNSTILE_SECRET_KEY is not set');

            return json(
                {
                    error: 'The form is not available right now. Please email us instead.',
                },
                503,
            );
        }
    } else {
        const human = await verifyTurnstile(
            env.TURNSTILE_SECRET_KEY,
            body.turnstileToken,
            request.headers.get('CF-Connecting-IP'),
        );

        if (!human) {
            return json(
                {
                    error: 'We could not confirm you are human. Please try again.',
                },
                403,
            );
        }
    }

    const teamInbox = env.TEAM_INBOX || '2connectke@gmail.com';
    const [saved, notified] = await Promise.allSettled([
        saveToAirtable(env, enquiry),
        sendEmail(env, {
            to: teamInbox,
            replyTo: enquiry.email,
            ...teamNotificationEmail(enquiry),
        }),
    ]);

    for (const result of [saved, notified]) {
        if (result.status === 'rejected') {
            console.error('contact:', result.reason);
        }
    }

    if (saved.status === 'rejected' && notified.status === 'rejected') {
        return json(
            {
                error: `Something went wrong on our side. Please email us at ${teamInbox}.`,
            },
            502,
        );
    }

    // The visitor does not need to wait for their own confirmation email.
    waitUntil(
        sendEmail(env, {
            to: enquiry.email,
            replyTo: teamInbox,
            ...confirmationEmail(enquiry),
        }).catch((error) => console.error('contact confirmation:', error)),
    );

    return json({ ok: true });
}
