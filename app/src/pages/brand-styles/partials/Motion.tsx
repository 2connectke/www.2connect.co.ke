import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
import { useState } from 'react';
import { Rule, Section, Snippet } from './shared';

const EASE = [0.16, 1, 0.3, 1] as const;

const durations = [
    { ms: 300, use: 'Small hovers: links, nav pills, fields' },
    { ms: 500, use: 'Buttons and colour changes' },
    { ms: 700, use: 'Navbar, underlines, logo tilt' },
    { ms: 900, use: 'Reveal on scroll' },
    { ms: 1100, use: 'Headline lines rising' },
];

const patterns = [
    {
        name: 'Reveal',
        note: 'Fades in and lifts 32px the first time it scrolls into view.',
        code: '<Reveal delay={0.1}>…</Reveal>',
    },
    {
        name: 'RevealLines',
        note: 'Headline lines rise out of a mask, 0.09s apart.',
        code: '<RevealLines lines={["More than", "volunteering."]} />',
    },
    {
        name: 'Parallax',
        note: 'Photos drift slower than the page with useScroll, never more than about 10%.',
        code: "useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])",
    },
    {
        name: 'CountUp',
        note: 'Numbers count up once when they appear.',
        code: '<CountUp value={500} suffix="+" />',
    },
];

/** The ease-out-expo curve, drawn. */
function Curve() {
    return (
        <svg viewBox="0 0 100 100" className="w-full" aria-hidden>
            <rect width="100" height="100" rx="10" fill="#fbf8f3" />
            <path
                d="M 10 90 C 22.8 10, 34 10, 90 10"
                fill="none"
                stroke="#fe9717"
                strokeWidth="3"
                strokeLinecap="round"
            />
            <path
                d="M 10 90 L 90 10"
                fill="none"
                stroke="#0b1236"
                strokeOpacity="0.15"
                strokeWidth="1.5"
                strokeDasharray="3 3"
            />
            <circle cx="10" cy="90" r="3" fill="#0098e3" />
            <circle cx="90" cy="10" r="3" fill="#0098e3" />
        </svg>
    );
}

const Motion = () => {
    const [run, setRun] = useState(0);

    return (
        <Section
            id="motion"
            number="08"
            eyebrow="Motion"
            tone="paper"
            title={['Glide,', 'never bounce.']}
            intro={
                <p>
                    One easing curve for everything: fast out of the gate, a
                    long gentle landing. It makes the site feel confident and
                    unhurried. Reduced-motion settings switch it all off.
                </p>
            }
        >
            <div className="grid gap-5 lg:grid-cols-12">
                <div className="rounded-4xl bg-white p-8 ring-1 ring-ink/10 lg:col-span-5">
                    <div className="mx-auto max-w-[260px]">
                        <Curve />
                    </div>
                    <p className="mt-6 font-display text-xl font-bold text-ink">
                        ease-out-expo
                    </p>
                    <Snippet
                        className="mt-4"
                        code={`cubic-bezier(0.16, 1, 0.3, 1)\n\n// Tailwind\nease-out-expo\n\n// Framer Motion\nconst EASE = [0.16, 1, 0.3, 1] as const;`}
                    />
                </div>

                <div className="flex flex-col gap-5 lg:col-span-7">
                    <div className="rounded-4xl bg-ink p-8 text-white">
                        <div className="flex items-center justify-between">
                            <p className="font-display text-xl font-bold">
                                See the difference
                            </p>
                            <button
                                type="button"
                                onClick={() => setRun((n) => n + 1)}
                                className="inline-flex items-center gap-2 rounded-full bg-sun px-4 py-2 text-sm font-semibold text-ink transition-colors duration-500 hover:bg-white"
                            >
                                <RotateCcw size={14} /> Replay
                            </button>
                        </div>
                        {[
                            { label: 'Ours', ease: EASE, colour: 'bg-sun' },
                            {
                                label: 'Linear',
                                ease: 'linear' as const,
                                colour: 'bg-white/30',
                            },
                        ].map((row) => (
                            <div key={row.label} className="mt-6">
                                <p className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
                                    {row.label}
                                </p>
                                <div className="relative mt-2 h-10 rounded-full bg-white/5">
                                    <motion.span
                                        key={run}
                                        className={`absolute top-1 left-1 size-8 rounded-full ${row.colour}`}
                                        initial={{ left: '0%' }}
                                        animate={{
                                            left: 'calc(100% - 2.5rem)',
                                        }}
                                        transition={{
                                            duration: 1.4,
                                            ease: row.ease,
                                            delay: 0.2,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-4xl bg-white p-8 ring-1 ring-ink/10">
                        <p className="font-display text-xl font-bold text-ink">
                            Durations
                        </p>
                        <ul className="mt-4 space-y-3">
                            {durations.map((item) => (
                                <li
                                    key={item.ms}
                                    className="grid grid-cols-[4.5rem_1fr] items-center gap-4"
                                >
                                    <span className="font-mono text-sm text-ink">
                                        {item.ms}ms
                                    </span>
                                    <span className="text-sm text-body">
                                        {item.use}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {patterns.map((pattern) => (
                    <div
                        key={pattern.name}
                        className="rounded-[28px] bg-white p-6 ring-1 ring-ink/10"
                    >
                        <p className="font-display text-lg font-bold text-ink">
                            {pattern.name}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-body">
                            {pattern.note}
                        </p>
                        <Snippet code={pattern.code} className="mt-4" />
                    </div>
                ))}
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
                <Rule kind="do">
                    Animate opacity and position only, and let each thing
                    animate once. The page should settle, not keep moving.
                </Rule>
                <Rule kind="dont">
                    Use springs, bounces, or durations under 300ms for anything
                    bigger than a hover.
                </Rule>
            </div>
        </Section>
    );
};

export default Motion;
