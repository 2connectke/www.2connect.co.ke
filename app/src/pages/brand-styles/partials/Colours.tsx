import { Check, Copy } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';
import { cn } from '@/lib/utils';
import {
    balance,
    contrast,
    grade,
    hex,
    legacyTokens,
    pairings,
    palette,
    rgb,
    textOn,
} from '../data';
import type { Colour } from '../data';
import { CopyChip, Rule, Section, useCopy } from './shared';

function ColourCard({ colour }: { colour: Colour }) {
    const copy = useCopy();
    const value = hex(colour.token);
    const ink = textOn(value);

    return (
        <div className="overflow-hidden rounded-[28px] bg-white ring-1 ring-ink/10">
            <button
                type="button"
                onClick={() => copy(value.toUpperCase())}
                title={`Copy ${value.toUpperCase()}`}
                className={cn(
                    'group relative flex aspect-[5/3] w-full cursor-copy flex-col justify-between p-5 text-left focus-visible:ring-4 focus-visible:ring-azure focus-visible:outline-none focus-visible:ring-inset',
                    colour.token === 'white' && 'border-b border-line',
                )}
                style={{ background: value, color: ink }}
            >
                <span className="font-display text-2xl font-bold tracking-[-0.02em]">
                    {colour.name}
                </span>
                <span className="flex items-end justify-between">
                    <span className="font-mono text-sm opacity-80">
                        {value.toUpperCase()}
                    </span>
                    <span
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                        style={{
                            background: ink,
                            color: value,
                        }}
                    >
                        <Copy size={12} /> Copy
                    </span>
                </span>
            </button>
            <div className="p-3">
                <p className="px-3 pt-1 pb-3 text-sm leading-relaxed text-body">
                    {colour.role}
                </p>
                <CopyChip label="Hex" value={value.toUpperCase()} />
                <CopyChip label="RGB" value={`rgb(${rgb(value).join(', ')})`} />
                <CopyChip label="Tailwind" value={`bg-${colour.token}`} />
                <CopyChip label="CSS" value={`var(--color-${colour.token})`} />
            </div>
        </div>
    );
}

const Colours = () => (
    <Section
        id="colour"
        number="02"
        eyebrow="Colour"
        title={[
            'Sun meets',
            <span key="a" className="text-azure-deep">
                azure.
            </span>,
        ]}
        intro={
            <p>
                Click a swatch to copy its hex, or any row to copy that format.
                Every value here is read from{' '}
                <code className="rounded bg-sand px-1.5 py-0.5 font-mono text-[0.85em] text-ink">
                    app.css
                </code>
                , so it always matches the live site.
            </p>
        }
    >
        <div className="space-y-20">
            {palette.map((group) => (
                <div key={group.group}>
                    <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                        <h3 className="font-display text-3xl font-bold tracking-[-0.03em] text-ink">
                            {group.group}
                        </h3>
                        <p className="max-w-md text-body">{group.intro}</p>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {group.colours.map((colour, index) => (
                            <Reveal key={colour.token} delay={index * 0.05}>
                                <ColourCard colour={colour} />
                            </Reveal>
                        ))}
                    </div>
                </div>
            ))}

            <div>
                <h3 className="font-display text-3xl font-bold tracking-[-0.03em] text-ink">
                    Balance
                </h3>
                <p className="mt-2 max-w-xl text-body">
                    A rough guide for a full page: mostly paper and ink, with
                    sun and azure as the spark. If a layout feels loud, there is
                    probably too much sun.
                </p>
                <div className="mt-8 flex h-24 overflow-hidden rounded-[22px] ring-1 ring-ink/10">
                    {balance.map((part) => (
                        <div
                            key={part.token}
                            className="flex items-end p-3 text-xs font-semibold"
                            style={{
                                flexGrow: part.share,
                                flexBasis: 0,
                                background: hex(part.token),
                                color: textOn(hex(part.token)),
                            }}
                        >
                            <span className="hidden sm:inline">
                                {part.token} {part.share}%
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-display text-3xl font-bold tracking-[-0.03em] text-ink">
                    Contrast
                </h3>
                <p className="mt-2 max-w-2xl text-body">
                    Checked live against WCAG 2.1. Normal text needs 4.5:1 (AA);
                    big headlines need 3:1. Pairings marked “Decoration only”
                    must never carry words people need to read.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {pairings.map(([text, background, use]) => {
                        const ratio = contrast(hex(text), hex(background));
                        const level = grade(ratio);
                        const pass = ratio >= 4.5;
                        const large = ratio >= 3 && !pass;

                        return (
                            <div
                                key={`${text}-${background}`}
                                className="flex items-center gap-4 rounded-[22px] bg-white p-3 ring-1 ring-ink/10"
                            >
                                <span
                                    className="grid size-16 shrink-0 place-items-center rounded-2xl font-display text-2xl font-bold"
                                    style={{
                                        background: hex(background),
                                        color: hex(text),
                                        boxShadow:
                                            background === 'white' ||
                                            background === 'paper'
                                                ? 'inset 0 0 0 1px #e7e0d4'
                                                : undefined,
                                    }}
                                >
                                    Aa
                                </span>
                                <span className="min-w-0 flex-1">
                                    <span className="block truncate text-sm font-semibold text-ink">
                                        {text} on {background}
                                    </span>
                                    <span className="block truncate text-xs text-body">
                                        {use}
                                    </span>
                                </span>
                                <span className="shrink-0 text-right">
                                    <span className="block font-display text-lg font-bold text-ink tabular-nums">
                                        {ratio.toFixed(2)}
                                    </span>
                                    <span
                                        className={cn(
                                            'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.65rem] font-bold tracking-wide uppercase',
                                            pass
                                                ? 'bg-azure-soft text-azure-deep'
                                                : large
                                                  ? 'bg-sun-soft text-ink'
                                                  : 'bg-ink text-white',
                                        )}
                                    >
                                        {pass && <Check size={10} />}
                                        {level}
                                    </span>
                                </span>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    <Rule kind="do">
                        Use azure deep, not azure, for blue text and links on
                        light backgrounds. Azure only passes for big display
                        words.
                    </Rule>
                    <Rule kind="dont">
                        Put white text on sun. Sun buttons always take ink text.
                    </Rule>
                    <Rule kind="dont">
                        Use sun or sun deep for text on paper or white. Known
                        issue: the home hero’s “action.” uses sun deep on paper
                        (2.7:1) and should move to ink or a sun highlight.
                    </Rule>
                </div>
            </div>

            <details className="group rounded-[22px] bg-sand p-6">
                <summary className="cursor-pointer list-none font-display text-xl font-bold text-ink">
                    <span className="mr-2 inline-block transition-transform group-open:rotate-90">
                        ›
                    </span>
                    Legacy tokens: do not use
                </summary>
                <p className="mt-3 max-w-2xl text-body">
                    These are still defined in app.css from the original starter
                    kit, but nothing on the site uses them. Don’t use them in
                    new work; they’re due to be removed.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                    {legacyTokens.map((token) => (
                        <li
                            key={token}
                            className="rounded-full bg-white px-3 py-1.5 font-mono text-xs text-body line-through decoration-ink/30"
                        >
                            {token}
                        </li>
                    ))}
                </ul>
            </details>
        </div>
    </Section>
);

export default Colours;
