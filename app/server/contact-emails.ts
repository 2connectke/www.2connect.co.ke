/**
 * Emails sent by functions/api/contact.ts, styled after the website: paper
 * background, sun and azure accents, real 2Connect photos, rounded cards.
 *
 * Email clients are not browsers, so everything is tables and inline styles.
 * The web fonts load in Apple Mail and iOS; Gmail and Outlook fall back to
 * Helvetica or Arial. Images live in public/assets/email/ on the live site.
 */
import { contact } from '../src/data/site';

export type EnquiryType = 'general' | 'volunteer' | 'partner';

export interface Enquiry {
    type: EnquiryType;
    name: string;
    email: string;
    phone: string;
    organization: string;
    message: string;
}

const SITE_URL = 'https://2connect.co.ke';
const ASSETS = `${SITE_URL}/assets/email`;

const NOT_YOU =
    'If you did not contact 2Connect, you can safely ignore this email.';

const color = {
    sun: '#fe9717',
    sunSoft: '#fff1de',
    azure: '#0098e3',
    azureDeep: '#0077c2',
    azureSoft: '#e3f3fc',
    navy: '#143584',
    ink: '#0b1236',
    paper: '#fbf8f3',
    sand: '#f3ede3',
    line: '#e7e0d4',
    body: '#4b5170',
};

const DISPLAY = `'Bricolage Grotesque','Helvetica Neue',Helvetica,Arial,sans-serif`;
const SANS = `'Instrument Sans','Helvetica Neue',Helvetica,Arial,sans-serif`;

const escape = (value: string) =>
    value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

const paragraphs = (value: string) =>
    escape(value)
        .split(/\n{2,}/)
        .map(
            (part) =>
                `<p style="margin:0 0 14px">${part.replace(/\n/g, '<br>')}</p>`,
        )
        .join('');

/** A small round dot, the confetti from the logo. */
const dot = (fill: string, size: number, gap = 6) =>
    `<span style="display:inline-block;width:${size}px;height:${size}px;border-radius:50%;background:${fill};margin:0 ${gap}px;vertical-align:middle"></span>`;

/** The pill button used across the site. */
interface ButtonStyle {
    fill?: string;
    text?: string;
    border?: string;
}

const button = (
    href: string,
    label: string,
    { fill = color.sun, text = color.ink, border = fill }: ButtonStyle = {},
) =>
    `<a href="${escape(href)}" style="display:inline-block;padding:14px 26px;border-radius:999px;background:${fill};border:2px solid ${border};color:${text};font-family:${SANS};font-size:15px;font-weight:700;text-decoration:none;line-height:1">${escape(label)}&nbsp;&nbsp;&#8599;</a>`;

const eyebrow = (label: string) =>
    `<p style="margin:0 0 14px;font-family:${SANS};font-size:12px;font-weight:700;letter-spacing:2.4px;text-transform:uppercase;color:${color.ink}">${dot(color.sun, 9, 0)}${dot(color.azure, 9, 0)}&nbsp;&nbsp;${escape(label)}</p>`;

/** Wraps a card in the shared 2Connect page: confetti, logo and footer. */
function page({
    title,
    preheader,
    card,
    footer,
    notYou,
}: {
    title: string;
    preheader: string;
    card: string;
    footer: string;
    /** Adds the "did not contact us? ignore this" line, for visitor emails. */
    notYou: boolean;
}) {
    return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light only">
<meta name="supported-color-schemes" content="light only">
<title>${escape(title)}</title>
<link href="https://fonts.bunny.net/css?family=bricolage-grotesque:700,800|instrument-sans:400,600,700&display=swap" rel="stylesheet">
<style>
  body { margin:0; padding:0; -webkit-text-size-adjust:100%; }
  a { color:${color.azureDeep}; }
  @media (max-width:620px) {
    .px { padding-left:24px !important; padding-right:24px !important; }
    .h1 { font-size:34px !important; line-height:38px !important; }
    .stack { display:block !important; width:100% !important; }
    .hide-sm { display:none !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:${color.paper}">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">${escape(preheader)}${'&#8204;&nbsp;'.repeat(60)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${color.paper}">
<tr><td align="center" style="padding:28px 12px 40px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px">

<tr><td align="center" style="padding:0 0 6px;line-height:0">${dot(color.sun, 10)}${dot(color.azure, 6)}${dot(color.navy, 7)}${dot(color.sun, 5)}${dot(color.azure, 9)}</td></tr>
<tr><td align="center" style="padding:12px 0 22px">
<a href="${SITE_URL}" style="text-decoration:none"><img src="${ASSETS}/2connect-logo.png" width="52" height="40" alt="" style="vertical-align:middle;border:0">&nbsp;<span style="font-family:${DISPLAY};font-size:24px;font-weight:800;letter-spacing:-0.8px;color:${color.ink};vertical-align:middle">2Connect</span></a>
</td></tr>

<tr><td style="background:#ffffff;border-radius:28px;overflow:hidden;border:1px solid ${color.line}">${card}</td></tr>

${footer}

${notYou ? `<tr><td align="center" class="px" style="padding:24px 40px 0;font-family:${SANS};font-size:12px;line-height:18px;color:${color.body}">${escape(NOT_YOU)}</td></tr>` : ''}
</table>
</td></tr>
</table>
</body>
</html>`;
}

/** The dark sign-off band, like the footer of the website. */
const brandFooter = `<tr><td style="padding:16px 0 0">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${color.ink};border-radius:28px">
<tr><td class="px" style="padding:34px 40px 30px">
<p style="margin:0;font-family:${DISPLAY};font-size:28px;line-height:32px;font-weight:800;letter-spacing:-1px;color:#ffffff">More than volunteering.<br><span style="color:${color.azure}">A movement.</span></p>
<p style="margin:18px 0 22px"><span style="display:inline-block;padding:9px 18px;border-radius:999px;background:${color.sun};font-family:${SANS};font-size:14px;font-weight:700;color:${color.ink}">Your action. Your impact.</span></p>
<p style="margin:0;font-family:${SANS};font-size:13px;line-height:22px;color:#c9cde0">
<a href="mailto:${contact.email}" style="color:#ffffff;text-decoration:none">${contact.email}</a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="${contact.phoneHref}" style="color:#ffffff;text-decoration:none">${contact.phone}</a><br>
${contact.location}&nbsp;&nbsp;·&nbsp;&nbsp;<a href="${SITE_URL}" style="color:${color.sun};text-decoration:none;font-weight:700">2connect.co.ke</a>
</p>
</td></tr>
</table>
</td></tr>`;

interface ConfirmationCopy {
    subject: string;
    eyebrow: string;
    headline: [string, string];
    lines: string[];
    photo: { file: string; alt: string };
    finalStep: [string, string];
    cta: { label: string; href: string };
}

const confirmationCopy: Record<EnquiryType, ConfirmationCopy> = {
    general: {
        subject: 'We got your message',
        eyebrow: 'Message received',
        headline: ['Your message', 'is in.'],
        lines: [
            'Thanks for reaching out to 2Connect. Your question is with the team, and someone will get back to you within one working day.',
        ],
        photo: {
            file: '2connect-gathering-01.jpg',
            alt: '2Connect members at an outdoor gathering',
        },
        finalStep: [
            'Anything else?',
            'Just reply to this email. It comes straight to the team.',
        ],
        cta: { label: 'See what we do', href: `${SITE_URL}/services` },
    },
    volunteer: {
        subject: 'Thanks for wanting to volunteer',
        eyebrow: 'Kenya inakuita, pick up',
        headline: ['Karibu to', 'the movement.'],
        lines: [
            'Thanks for wanting to give your time and skills. Someone from the team will reach out within one working day to talk about what you are into and find an opportunity that fits.',
            'If you think of anything else, like when you are free or a cause close to your heart, just reply to this email.',
        ],
        photo: {
            file: '2connect-outreach-01.jpg',
            alt: 'A 2Connect volunteer painting a school wall',
        },
        finalStep: [
            'We match you',
            'We find an opportunity that fits your skills, your causes and your time.',
        ],
        cta: { label: 'Explore our programmes', href: `${SITE_URL}/services` },
    },
    partner: {
        subject: 'Thanks for reaching out about a partnership',
        eyebrow: 'Partnership enquiry',
        headline: ['Let’s build', 'something together.'],
        lines: [
            'Thanks for thinking of 2Connect for your organisation. Someone from our partnerships team will get in touch within one working day to understand what you need and how we can help.',
            'If you have anything that would help us prepare, like dates, locations or the number of people you need, just reply to this email.',
        ],
        photo: {
            file: '2connect-meetup-06.jpg',
            alt: '2Connect members around a table at a meetup',
        },
        finalStep: [
            'We plan together',
            'We work out the people, places and dates your project needs.',
        ],
        cta: { label: 'See how we work', href: `${SITE_URL}/about` },
    },
};

/**
 * A first name safe to repeat back: letters, apostrophes and hyphens only, so
 * the greeting cannot carry a link or a pitch.
 */
function greetingName(name: string) {
    const first = name.split(/\s+/)[0];

    return /^[\p{L}'’-]{1,30}$/u.test(first) ? first : '';
}

const stepColors = [
    { fill: color.sun, text: color.ink },
    { fill: color.azure, text: '#ffffff' },
    { fill: color.navy, text: '#ffffff' },
];

const steps = (items: [string, string][]) =>
    items
        .map(
            ([title, detail], i) => `<tr>
<td width="44" valign="top" style="padding:0 0 18px"><span style="display:inline-block;width:32px;height:32px;line-height:32px;border-radius:50%;background:${stepColors[i].fill};color:${stepColors[i].text};font-family:${DISPLAY};font-size:15px;font-weight:800;text-align:center">${i + 1}</span></td>
<td valign="top" style="padding:4px 0 18px;font-family:${SANS};font-size:15px;line-height:22px;color:${color.body}"><strong style="color:${color.ink}">${escape(title)}</strong><br>${escape(detail)}</td>
</tr>`,
        )
        .join('');

/**
 * The "we received your message" email sent to the visitor. It never repeats
 * what they wrote: anyone can type any address into the form, so echoing the
 * message would let strangers use our domain to deliver their text.
 */
export function confirmationEmail(enquiry: Enquiry) {
    const copy = confirmationCopy[enquiry.type];
    const firstName = greetingName(enquiry.name);
    const greeting = firstName ? `Asante, ${firstName}!` : 'Asante!';
    const nextSteps: [string, string][] = [
        ['We read it', 'A real person on the team reads every message.'],
        [
            'We reach out',
            `Expect to hear from us within one working day (${contact.hours.replace(/^Monday to Friday/, 'Mon to Fri')}).`,
        ],
        copy.finalStep,
    ];

    const card = `
<img src="${ASSETS}/${copy.photo.file}" width="600" alt="${escape(copy.photo.alt)}" style="display:block;width:100%;max-width:600px;height:auto;border:0;border-radius:28px 28px 0 0">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${color.sand}">
<tr>
<td width="96" class="hide-sm" style="padding:18px 0 18px 40px" valign="middle"><img src="${ASSETS}/2connect-portrait-02.jpg" width="64" height="64" alt="" style="display:block;border-radius:50%;border:4px solid #ffffff"></td>
<td class="px" style="padding:18px 40px 18px 12px" valign="middle"><span style="display:inline-block;padding:12px 18px;border-radius:20px 20px 20px 6px;background:${color.azureDeep};font-family:${DISPLAY};font-size:16px;line-height:21px;font-weight:700;color:#ffffff">From campus to community, tuko pamoja.</span></td>
</tr>
</table>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr><td class="px" style="padding:38px 48px 8px">
${eyebrow(copy.eyebrow)}
<h1 class="h1" style="margin:0 0 22px;font-family:${DISPLAY};font-size:44px;line-height:46px;font-weight:800;letter-spacing:-1.6px;color:${color.ink}">${escape(copy.headline[0])}<br><span style="color:${color.azureDeep}">${escape(copy.headline[1])}</span></h1>
<p style="margin:0 0 14px;font-family:${DISPLAY};font-size:20px;font-weight:700;color:${color.ink}">${escape(greeting)}</p>
${copy.lines.map((line) => `<p style="margin:0 0 14px;font-family:${SANS};font-size:16px;line-height:26px;color:${color.body}">${escape(line)}</p>`).join('')}
</td></tr>

<tr><td class="px" style="padding:14px 48px 6px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${color.paper};border-radius:22px">
<tr><td style="padding:26px 26px 10px">
<p style="margin:0 0 18px;font-family:${DISPLAY};font-size:19px;font-weight:800;letter-spacing:-0.4px;color:${color.ink}">What happens next</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${steps(nextSteps)}</table>
</td></tr>
</table>
</td></tr>

<tr><td class="px" style="padding:30px 48px 10px">${button(copy.cta.href, copy.cta.label)}</td></tr>

<tr><td class="px" style="padding:26px 48px 40px">
<p style="margin:0;font-family:${SANS};font-size:16px;line-height:24px;color:${color.body}">Tuonane,<br><strong style="font-family:${DISPLAY};color:${color.ink}">The 2Connect team</strong></p>
<p style="margin:14px 0 0"><span style="display:inline-block;padding:8px 16px;border-radius:999px;background:${color.azureSoft};font-family:${DISPLAY};font-size:14px;font-weight:700;color:${color.azureDeep}">#TuConnect</span></p>
</td></tr>
</table>`;

    const html = page({
        title: copy.subject,
        preheader: copy.lines[0],
        card,
        footer: brandFooter,
        notYou: true,
    });

    const text = [
        greeting,
        ...copy.lines,
        `What happens next:\n${nextSteps.map(([title, detail], i) => `${i + 1}. ${title}: ${detail}`).join('\n')}`,
        `${copy.cta.label}: ${copy.cta.href}`,
        'Tuonane,\nThe 2Connect team\n#TuConnect',
        `${contact.email} · ${contact.phone} · ${SITE_URL}`,
        NOT_YOU,
    ].join('\n\n');

    return { subject: copy.subject, html, text };
}

const teamStyle: Record<
    EnquiryType,
    { title: string; band: string; ink: string; chip: string }
> = {
    general: {
        title: 'Question',
        band: color.azureSoft,
        ink: color.azureDeep,
        chip: color.azure,
    },
    volunteer: {
        title: 'Volunteer',
        band: color.sunSoft,
        ink: color.ink,
        chip: color.sun,
    },
    partner: {
        title: 'Partnership',
        band: '#e4e9f6',
        ink: color.navy,
        chip: color.navy,
    },
};

/** The notification sent to the team inbox. Reply-To is the visitor. */
export function teamNotificationEmail(enquiry: Enquiry) {
    const style = teamStyle[enquiry.type];
    const firstName = enquiry.name.split(/\s+/)[0];
    const who = enquiry.organization
        ? `${enquiry.name} (${enquiry.organization})`
        : enquiry.name;
    const subject = `${style.title}: ${who}`;
    const headline = {
        general: `${enquiry.name} has a question`,
        volunteer: `${enquiry.name} wants to volunteer`,
        partner: `${enquiry.organization || enquiry.name} wants to partner`,
    }[enquiry.type];

    const rows: [string, string][] = [
        ['Name', escape(enquiry.name)],
        [
            'Email',
            `<a href="mailto:${escape(enquiry.email)}" style="color:${color.azureDeep}">${escape(enquiry.email)}</a>`,
        ],
        [
            'Phone',
            enquiry.phone
                ? `<a href="tel:${escape(enquiry.phone.replace(/[^\d+]/g, ''))}" style="color:${color.azureDeep}">${escape(enquiry.phone)}</a>`
                : '<span style="color:#9a9fb5">Not given</span>',
        ],
    ];

    if (enquiry.organization) {
        rows.push(['Organisation', escape(enquiry.organization)]);
    }

    const replyHref = `mailto:${enquiry.email}?subject=${encodeURIComponent(`Re: your message to 2Connect`)}`;
    const callButton = enquiry.phone
        ? `&nbsp;&nbsp;${button(`tel:${enquiry.phone.replace(/[^\d+]/g, '')}`, 'Call', { fill: '#ffffff', text: color.ink, border: color.ink })}`
        : '';

    const card = `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${style.band};border-radius:28px 28px 0 0">
<tr><td class="px" style="padding:32px 40px 28px">
<p style="margin:0 0 14px"><span style="display:inline-block;padding:6px 14px;border-radius:999px;background:${style.chip};font-family:${SANS};font-size:12px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;color:${enquiry.type === 'volunteer' ? color.ink : '#ffffff'}">New · ${style.title}</span></p>
<h1 class="h1" style="margin:0;font-family:${DISPLAY};font-size:34px;line-height:38px;font-weight:800;letter-spacing:-1.2px;color:${style.ink}">${escape(headline)}</h1>
</td></tr>
</table>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr><td class="px" style="padding:28px 40px 6px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-family:${SANS};font-size:15px;line-height:22px">${rows
        .map(
            ([label, value]) =>
                `<tr><td width="120" valign="top" style="padding:9px 0;border-bottom:1px solid ${color.line};color:${color.body}">${label}</td><td valign="top" style="padding:9px 0;border-bottom:1px solid ${color.line};color:${color.ink};font-weight:600">${value}</td></tr>`,
        )
        .join('')}</table>
</td></tr>

<tr><td class="px" style="padding:22px 40px 6px">
<p style="margin:0 0 10px;font-family:${DISPLAY};font-size:17px;font-weight:800;color:${color.ink}">Their message</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${color.paper};border-radius:18px;border-left:5px solid ${style.chip}">
<tr><td style="padding:18px 22px 6px;font-family:${SANS};font-size:15px;line-height:24px;color:${color.ink}">${paragraphs(enquiry.message)}</td></tr>
</table>
</td></tr>

<tr><td class="px" style="padding:26px 40px 12px">${button(replyHref, `Reply to ${firstName}`)}${callButton}</td></tr>

<tr><td class="px" style="padding:12px 40px 34px;font-family:${SANS};font-size:13px;line-height:20px;color:${color.body}">Hitting reply in your inbox also answers ${escape(firstName)} directly. They have been sent a confirmation saying we will be in touch within one working day. It is also saved in Airtable.</td></tr>
</table>`;

    const html = page({
        title: subject,
        preheader: `New ${style.title.toLowerCase()} message from ${who}`,
        card,
        footer: '',
        notYou: false,
    });

    const text = [
        `New ${style.title.toLowerCase()} message from the website`,
        [
            `Name: ${enquiry.name}`,
            `Email: ${enquiry.email}`,
            `Phone: ${enquiry.phone || 'Not given'}`,
            enquiry.organization && `Organisation: ${enquiry.organization}`,
        ]
            .filter(Boolean)
            .join('\n'),
        enquiry.message,
        `Hit reply to answer ${enquiry.name} directly.`,
    ].join('\n\n');

    return { subject, html, text };
}
