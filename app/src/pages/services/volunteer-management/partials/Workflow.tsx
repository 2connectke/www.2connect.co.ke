import { ArrowRight } from 'lucide-react';
import Eyebrow from '@/components/site/eyebrow';
import { Reveal, RevealLines } from '@/components/site/reveal';

const steps = [
    {
        title: 'Volunteer',
        description:
            'Signs up once, with their skills, county and the days they are free.',
    },
    {
        title: 'Assignment',
        description:
            'Gets placed on your project, with a lead who knows they are coming.',
    },
    {
        title: 'Activity',
        description:
            'Turns up to the event or shift and checks in at the door.',
    },
    {
        title: 'Task',
        description: 'Gets clear jobs to do. Not just “help out wherever”.',
    },
    {
        title: 'Evidence',
        description:
            'Shares proof of the work: a photo, a count, a signed sheet.',
    },
    {
        title: 'Verification',
        description:
            'A supervisor checks it and signs it off. Only then does it count.',
    },
    {
        title: 'Outcome',
        description:
            'Verified hours and results add up into a report you can trust.',
    },
];

/** The chain every hour moves through, from sign-up to a result you can show. */
const Workflow = () => (
    <section id="how" className="relative bg-ink py-28 text-white sm:py-36">
        <div className="container-wide">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-7">
                    <Eyebrow tone="light">How it works</Eyebrow>
                    <RevealLines
                        className="mt-6 text-display-lg"
                        lines={[
                            'Seven steps.',
                            <span key="s" className="text-sun">
                                Every one on record.
                            </span>,
                        ]}
                    />
                </div>
                <Reveal className="lg:col-span-5" delay={0.15}>
                    <p className="max-w-md text-lg leading-relaxed text-white/70">
                        Each step leaves a trace, so at the end you know exactly
                        who volunteered, what they did and whether it was
                        checked. No chasing, no guessing.
                    </p>
                </Reveal>
            </div>

            <ol className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((step, index) => (
                    <Reveal
                        as="li"
                        key={step.title}
                        delay={index * 0.06}
                        className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-ink-soft p-7 lg:min-h-60"
                    >
                        <div className="flex items-center justify-between">
                            <span className="font-display text-sm font-semibold text-sun tabular-nums">
                                0{index + 1}
                            </span>
                            {index < steps.length - 1 && (
                                <ArrowRight
                                    size={18}
                                    className="text-white/30"
                                    aria-hidden
                                />
                            )}
                        </div>
                        <div className="mt-10">
                            <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">
                                {step.title}
                            </h3>
                            <p className="mt-3 leading-relaxed text-white/60">
                                {step.description}
                            </p>
                        </div>
                    </Reveal>
                ))}
                <Reveal
                    as="li"
                    delay={steps.length * 0.06}
                    className="flex items-end rounded-[28px] bg-sun p-7 text-ink lg:min-h-60"
                >
                    <p className="font-display text-2xl leading-tight font-bold tracking-[-0.02em]">
                        Submitted is not the same as done.
                    </p>
                </Reveal>
            </ol>
        </div>
    </section>
);

export default Workflow;
