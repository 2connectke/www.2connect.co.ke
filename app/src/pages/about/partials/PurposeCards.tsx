import Eyebrow from '@/components/site/eyebrow';
import { Reveal, RevealLines } from '@/components/site/reveal';

const statements = [
    {
        label: 'Our mission',
        text: 'To give young people the opportunities, skills and support to make change that lasts, right where they live.',
        dot: 'bg-sun',
    },
    {
        label: 'Our vision',
        text: 'A connected generation of young leaders who care about people, building a better Kenya and a better world.',
        dot: 'bg-azure',
    },
];

const values = [
    {
        name: 'Purpose driven innovation',
        detail: 'When the old way isn’t working for our communities, we try a new one.',
    },
    {
        name: 'Collaboration',
        detail: 'Nothing big gets done alone. We build with you, not for you.',
    },
    {
        name: 'Integrity',
        detail: 'We say what we do and we do what we say. Always in the open.',
    },
    {
        name: 'Empowerment',
        detail: 'Every young person gets the tools, and the trust, to lead.',
    },
    {
        name: 'Sustainability',
        detail: 'We build things that keep going long after the event photos are posted.',
    },
];

const PurposeCards = () => {
    return (
        <section className="relative overflow-hidden bg-ink py-28 text-white sm:py-36">
            <div className="relative container-wide">
                <Eyebrow tone="light">Why we exist</Eyebrow>
                <RevealLines
                    className="mt-6 text-display-lg"
                    lines={[
                        'Purpose',
                        <span key="v" className="text-sun">
                            ndio vibe.
                        </span>,
                    ]}
                />

                <div className="mt-16 grid divide-y divide-white/10 overflow-hidden rounded-[32px] border border-white/10 bg-ink-soft lg:grid-cols-2 lg:divide-x lg:divide-y-0">
                    {statements.map((item, index) => (
                        <Reveal
                            key={item.label}
                            delay={index * 0.1}
                            className="p-8 sm:p-12 lg:p-14"
                        >
                            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-white/60 uppercase">
                                <span
                                    className={`size-2.5 rounded-full ${item.dot}`}
                                />
                                {item.label}
                            </div>
                            <p className="mt-8 font-display text-[clamp(1.75rem,2.8vw,2.75rem)] leading-[1.1] font-semibold tracking-[-0.03em]">
                                {item.text}
                            </p>
                        </Reveal>
                    ))}
                </div>

                <div className="mt-20 grid gap-10 lg:grid-cols-12">
                    <Reveal className="lg:col-span-4">
                        <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-white/60 uppercase">
                            <span className="size-2.5 rounded-full bg-white" />
                            Our values
                        </div>
                        <p className="mt-6 max-w-sm text-lg leading-relaxed text-white/60">
                            Five things we hold on to in every programme, every
                            partnership and every placement.
                        </p>
                    </Reveal>
                    <ol className="lg:col-span-8">
                        {values.map((value, index) => (
                            <Reveal
                                as="li"
                                key={value.name}
                                delay={index * 0.06}
                                className="group flex items-baseline gap-6 border-t border-white/10 py-6 last:border-b sm:gap-10"
                            >
                                <span className="w-8 shrink-0 text-sm font-semibold text-white/40 tabular-nums">
                                    0{index + 1}
                                </span>
                                <span className="flex flex-1 flex-col gap-3 transition-transform duration-700 ease-out-expo group-hover:translate-x-3 md:flex-row md:items-baseline md:justify-between md:gap-10">
                                    <span className="font-display text-[clamp(1.9rem,4vw,3.5rem)] leading-none font-bold tracking-[-0.035em] transition-colors duration-700 group-hover:text-sun">
                                        {value.name}
                                    </span>
                                    <span className="max-w-xs text-[0.95rem] leading-relaxed text-white/55">
                                        {value.detail}
                                    </span>
                                </span>
                            </Reveal>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default PurposeCards;
