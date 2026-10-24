import { Reveal } from '@/components/site/reveal';
import { useCopy, Rule, Section, Snippet } from './shared';

const steps = [
    { token: '1', px: 4, use: 'Icon to label' },
    { token: '2', px: 8, use: 'Chip gaps' },
    { token: '3', px: 12, use: 'Button groups' },
    { token: '4', px: 16, use: 'Inside small cards' },
    { token: '6', px: 24, use: 'Eyebrow → headline' },
    { token: '8', px: 32, use: 'Headline → lead' },
    { token: '10', px: 40, use: 'Lead → buttons, card padding' },
    { token: '16', px: 64, use: 'Between big blocks' },
    { token: '20', px: 80, use: 'Section header → content' },
    { token: '28', px: 112, use: 'Section padding, mobile' },
    { token: '36', px: 144, use: 'Section padding, desktop' },
];

const layouts = [
    { name: 'Hero', split: [8, 4], note: 'Headline 8 · intro 4' },
    { name: 'Story', split: [6, 6], note: 'Photos 6 · text 6' },
    { name: 'Feature', split: [7, 5], note: 'Content 7 · art 5' },
    { name: 'Contact', split: [5, 7], note: 'Info 5 · form 7' },
];

function SpacingStep({ token, px, use }: (typeof steps)[number]) {
    const copy = useCopy();

    return (
        <button
            type="button"
            onClick={() => copy(`${token} (${px}px)`)}
            className="group grid w-full cursor-copy grid-cols-[3.5rem_1fr] items-center gap-4 rounded-xl px-2 py-2 text-left transition-colors hover:bg-white sm:grid-cols-[3.5rem_10rem_1fr]"
        >
            <span className="font-mono text-sm text-ink">{token}</span>
            <span className="hidden text-sm text-body sm:block">
                {px}px · {use}
            </span>
            <span className="flex items-center gap-3">
                <span
                    className="h-4 rounded-full bg-sun transition-colors group-hover:bg-azure"
                    style={{ width: `${(px / 144) * 100}%`, minWidth: 4 }}
                />
                <span className="text-xs text-body sm:hidden">{px}px</span>
            </span>
        </button>
    );
}

const Spacing = () => (
    <Section
        id="spacing"
        number="04"
        eyebrow="Spacing & layout"
        tone="sand"
        title={['Room to', 'breathe.']}
        intro={
            <p>
                We use Tailwind’s 4px scale and lean generous. When in doubt,
                add space: sections are tall, headlines get air, and nothing
                touches the edge of the screen.
            </p>
        }
    >
        <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
                <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">
                    Spacing scale
                </h3>
                <p className="mt-2 text-body">
                    Tailwind steps (1 = 4px). Click to copy.
                </p>
                <div className="mt-6">
                    {steps.map((step) => (
                        <SpacingStep key={step.token} {...step} />
                    ))}
                </div>
            </div>
            <div className="space-y-5 lg:col-span-5">
                <div className="rounded-[28px] bg-white p-7">
                    <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">
                        Container
                    </h3>
                    <p className="mt-2 text-body">
                        Every section’s content sits in{' '}
                        <code className="font-mono text-ink">
                            container-wide
                        </code>
                        : up to 1520px wide, with side padding that grows from
                        16px on phones to 64px on big screens.
                    </p>
                    <Snippet
                        className="mt-5"
                        code={`<section className="bg-paper py-28 sm:py-36">\n  <div className="container-wide">…</div>\n</section>`}
                    />
                </div>
                <div className="rounded-[28px] bg-white p-7">
                    <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">
                        Rhythm
                    </h3>
                    <ul className="mt-3 space-y-2 text-body">
                        <li>
                            <strong className="text-ink">Sections:</strong>{' '}
                            <code className="font-mono">py-28 sm:py-36</code>
                        </li>
                        <li>
                            <strong className="text-ink">Page tops:</strong>{' '}
                            <code className="font-mono">pt-32 sm:pt-40</code>{' '}
                            (clears the floating navbar)
                        </li>
                        <li>
                            <strong className="text-ink">Grid gaps:</strong>{' '}
                            <code className="font-mono">gap-10</code> to{' '}
                            <code className="font-mono">gap-16</code>
                        </li>
                        <li>
                            <strong className="text-ink">Cards:</strong>{' '}
                            <code className="font-mono">p-6 sm:p-10</code>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="mt-20">
            <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">
                12-column grid
            </h3>
            <p className="mt-2 max-w-xl text-body">
                On large screens sections split on a 12-column grid. On phones
                everything stacks into one column, in reading order.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {layouts.map((layout, index) => (
                    <Reveal
                        key={layout.name}
                        delay={index * 0.06}
                        className="rounded-[22px] bg-white p-5"
                    >
                        <div className="flex items-baseline justify-between">
                            <span className="font-display text-lg font-bold text-ink">
                                {layout.name}
                            </span>
                            <span className="text-sm text-body">
                                {layout.note}
                            </span>
                        </div>
                        <div className="mt-4 grid grid-cols-12 gap-1.5">
                            {layout.split.map((span, part) => (
                                <div
                                    key={part}
                                    className={`h-16 rounded-xl ${part === 0 ? 'bg-ink' : 'bg-azure-soft'}`}
                                    style={{ gridColumn: `span ${span}` }}
                                />
                            ))}
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
            <Rule kind="do">
                Keep the same rhythm on every page so moving between pages feels
                calm.
            </Rule>
            <Rule kind="dont">
                Squeeze sections to fit more in. Split them, or cut words.
            </Rule>
        </div>
    </Section>
);

export default Spacing;
