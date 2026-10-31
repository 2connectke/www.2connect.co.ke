import Eyebrow from '@/components/site/eyebrow';
import { Reveal, RevealLines } from '@/components/site/reveal';

const moments = [
    'Forty people said yes on the WhatsApp group. Twelve showed up.',
    'The sign-in sheet got rained on, and so did the hours on it.',
    'Your donor wants hours served and results. You have a good guess.',
    'A student needs attachment hours signed. Nobody remembers what they did.',
];

/** The problem, in the words of the people who live it. */
const TheMess = () => (
    <section className="bg-paper py-28 sm:py-36">
        <div className="container-wide grid gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
                <Eyebrow>Sound familiar?</Eyebrow>
                <RevealLines
                    className="mt-6 text-display-lg text-ink"
                    lines={['Good work.', 'No proof.']}
                />
                <Reveal delay={0.15}>
                    <p className="mt-8 max-w-md text-lg leading-relaxed text-body">
                        Most community groups run their volunteers on a WhatsApp
                        group, a spreadsheet and memory. It works, until someone
                        asks for proof.
                    </p>
                </Reveal>
            </div>

            <ul className="grid gap-4 lg:col-span-7">
                {moments.map((moment, index) => (
                    <Reveal
                        as="li"
                        key={moment}
                        delay={index * 0.06}
                        className="flex items-start gap-6 rounded-[28px] bg-white p-7 ring-1 ring-ink/10 sm:p-8"
                    >
                        <span className="font-display text-sm font-semibold text-ink/30 tabular-nums">
                            0{index + 1}
                        </span>
                        <p className="font-display text-xl leading-snug font-semibold tracking-[-0.01em] text-ink sm:text-2xl">
                            {moment}
                        </p>
                    </Reveal>
                ))}
            </ul>
        </div>
    </section>
);

export default TheMess;
