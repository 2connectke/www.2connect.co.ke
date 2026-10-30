import { HeartHandshake, Search, UserRound } from 'lucide-react';
import ButtonLink from '@/components/site/button-link';
import Eyebrow from '@/components/site/eyebrow';
import { Reveal, RevealLines } from '@/components/site/reveal';

const steps = [
    {
        icon: UserRound,
        title: 'Tell us about you',
        description:
            'What you are good at, what you care about, where you are and when you are free.',
    },
    {
        icon: Search,
        title: 'See what fits',
        description:
            'We show you the work that needs exactly that, and what each one asks of you.',
    },
    {
        icon: HeartHandshake,
        title: 'Show up',
        description:
            'Pick one and talk to us. We connect you with the team and check in once you start.',
    },
];

/** Three numbered steps, then a jump down to the matching form. */
const HowItWorks = () => (
    <section className="bg-paper py-28 sm:py-36">
        <div className="container-wide">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-7">
                    <Eyebrow>How it works</Eyebrow>
                    <RevealLines
                        className="mt-6 text-display-lg text-ink"
                        lines={['Three steps.', 'Then you show up.']}
                    />
                </div>
                <Reveal className="lg:col-span-5" delay={0.15}>
                    <p className="max-w-md text-lg leading-relaxed text-body">
                        You do not need years of experience. If you can teach,
                        organise, design, lift a bag of rubbish or make people
                        feel welcome, there is a place for you.
                    </p>
                </Reveal>
            </div>

            <ol className="mt-16 grid gap-4 md:grid-cols-3">
                {steps.map((step, index) => (
                    <Reveal
                        as="li"
                        key={step.title}
                        delay={index * 0.08}
                        className="rounded-[28px] bg-white p-8 ring-1 ring-ink/10"
                    >
                        <div className="flex items-center justify-between">
                            <span className="font-display text-3xl font-bold text-sun-deep">
                                0{index + 1}
                            </span>
                            <span className="grid size-14 place-items-center rounded-full bg-sun-soft text-sun-deep">
                                <step.icon size={24} strokeWidth={1.75} />
                            </span>
                        </div>
                        <h3 className="mt-8 font-display text-2xl font-bold tracking-[-0.02em] text-ink">
                            {step.title}
                        </h3>
                        <p className="mt-3 leading-relaxed text-body">
                            {step.description}
                        </p>
                    </Reveal>
                ))}
            </ol>

            <Reveal className="mt-12">
                <ButtonLink href="#match" variant="ink">
                    Find my match
                </ButtonLink>
            </Reveal>
        </div>
    </section>
);

export default HowItWorks;
