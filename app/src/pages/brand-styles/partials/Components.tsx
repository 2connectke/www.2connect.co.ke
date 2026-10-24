import type { ReactNode } from 'react';
import ButtonLink from '@/components/site/button-link';
import Eyebrow from '@/components/site/eyebrow';
import Marquee from '@/components/site/marquee';
import OverlapMark from '@/components/site/overlap-mark';
import { hashtags } from '@/data/site';
import { cn } from '@/lib/utils';
import { Section, Snippet } from './shared';

function Demo({
    title,
    note,
    code,
    dark = false,
    compact = false,
    className,
    children,
}: {
    title: string;
    note: string;
    code: string;
    dark?: boolean;
    /** Skip the minimum height, for wide demos like the marquee. */
    compact?: boolean;
    className?: string;
    children: ReactNode;
}) {
    return (
        <div
            className={cn(
                'flex flex-col rounded-[32px] p-6 sm:p-8',
                dark ? 'bg-ink text-white' : 'bg-white ring-1 ring-ink/10',
                className,
            )}
        >
            <div
                className={cn(
                    'flex flex-1 flex-wrap items-center gap-3',
                    compact ? 'min-h-0' : 'min-h-40',
                )}
            >
                {children}
            </div>
            <p className="mt-6 font-display text-lg font-bold">{title}</p>
            <p
                className={cn(
                    'mt-1 text-sm leading-relaxed',
                    dark ? 'text-white/60' : 'text-body',
                )}
            >
                {note}
            </p>
            <Snippet
                code={code}
                tone={dark ? 'dark' : 'light'}
                className="mt-4"
            />
        </div>
    );
}

const Components = () => (
    <Section
        id="components"
        number="07"
        eyebrow="Components"
        title={['Built once,', 'used everywhere.']}
        intro={
            <p>
                These are the real components from{' '}
                <code className="font-mono text-ink">src/components/site</code>,
                rendered live. Reuse them rather than rebuilding them, so a fix
                in one place fixes every page.
            </p>
        }
    >
        <div className="grid gap-5 lg:grid-cols-2">
            <Demo
                title="ButtonLink: sun, ink, outline"
                note="Pill with a sliding arrow. Sun is the main action, ink a strong second, outline a quiet one."
                code={`<ButtonLink href="/contact">Start volunteering</ButtonLink>\n<ButtonLink href="/contact" variant="ink">…</ButtonLink>\n<ButtonLink href="/contact" variant="outline">…</ButtonLink>`}
            >
                <ButtonLink href="#components" external>
                    Start volunteering
                </ButtonLink>
                <ButtonLink href="#components" external variant="ink">
                    Join as a volunteer
                </ButtonLink>
                <ButtonLink href="#components" external variant="outline">
                    Partner with us
                </ButtonLink>
            </Demo>
            <Demo
                dark
                title="ButtonLink on ink: sun, light, outline-light"
                note="On dark sections, swap to the light variants."
                code={`<ButtonLink href="/contact" variant="light">…</ButtonLink>\n<ButtonLink href="/contact" variant="outline-light">…</ButtonLink>`}
            >
                <ButtonLink href="#components" external>
                    Get involved
                </ButtonLink>
                <ButtonLink href="#components" external variant="light">
                    Our story
                </ButtonLink>
                <ButtonLink href="#components" external variant="outline-light">
                    See events
                </ButtonLink>
            </Demo>
            <Demo
                title="Eyebrow"
                note="Above every headline. The two dots are sun and azure: the brand in miniature."
                code={`<Eyebrow>Our story</Eyebrow>\n<Eyebrow tone="light">Si talk, ni action.</Eyebrow>`}
            >
                <Eyebrow>Our story</Eyebrow>
                <span className="rounded-full bg-ink px-4 py-2">
                    <Eyebrow tone="light">Si talk, ni action.</Eyebrow>
                </span>
            </Demo>
            <Demo
                title="Stickers and bubbles"
                note="Small floating labels over photos. Speech bubbles are azure deep; facts are sun."
                code={`<div className="rounded-[22px] bg-azure-deep px-5 py-4 font-display text-lg font-semibold tracking-tight text-white shadow-[0_20px_40px_-20px_rgba(11,18,54,0.5)]">From campus to community, tuko pamoja.</div>`}
            >
                <span className="max-w-[15rem] rounded-[22px] bg-azure-deep px-5 py-4 font-display text-lg leading-tight font-semibold tracking-tight text-white shadow-[0_20px_40px_-20px_rgba(11,18,54,0.5)]">
                    From campus to community, tuko pamoja.
                </span>
                <span className="rounded-[24px] bg-sun px-6 py-5 text-ink shadow-[0_20px_40px_-20px_rgba(11,18,54,0.5)]">
                    <span className="block text-xs font-semibold tracking-[0.2em] uppercase">
                        Since
                    </span>
                    <span className="block font-display text-5xl leading-none font-bold tracking-[-0.04em]">
                        2023
                    </span>
                </span>
                <span className="rounded-full bg-azure-soft px-4 py-2 font-display text-sm font-semibold text-azure-deep">
                    #TuConnect
                </span>
            </Demo>
            <Demo
                compact
                className="lg:col-span-2"
                title="Marquee"
                note="Hashtags ticking past, separated by the two dots. Pauses on hover and stops for reduced motion."
                code={`<Marquee items={hashtags} itemClassName="font-display text-xl font-semibold tracking-tight" />`}
            >
                <div className="-mx-6 w-[calc(100%+3rem)] border-y border-ink/10 py-4 sm:-mx-8 sm:w-[calc(100%+4rem)]">
                    <Marquee
                        items={hashtags}
                        itemClassName="font-display text-xl font-semibold tracking-tight text-ink"
                    />
                </div>
            </Demo>
            <Demo
                className="lg:col-span-2"
                title="OverlapMark"
                note="The signature. Two circles glide together and the navy lens becomes the connection. Use it once per page at most; pass two photos to fill the circles."
                code={`<OverlapMark />\n<OverlapMark still images={['/assets/images/a.jpg', '/assets/images/b.jpg']} />`}
            >
                <div className="mx-auto grid w-full max-w-3xl gap-8 sm:grid-cols-2">
                    <OverlapMark ring="#ffffff" />
                    <OverlapMark
                        still
                        ring="#ffffff"
                        images={[
                            '/assets/images/2connect-outreach-02.jpg',
                            '/assets/images/2connect-portrait-01.jpg',
                        ]}
                    />
                </div>
            </Demo>
        </div>
    </Section>
);

export default Components;
