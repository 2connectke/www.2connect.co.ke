import { Check } from 'lucide-react';
import Eyebrow from '@/components/site/eyebrow';
import { Reveal, RevealLines } from '@/components/site/reveal';

const sides = [
    {
        label: 'For your organisation',
        title: 'Run it from one place.',
        points: [
            'One searchable list of every volunteer, with what they are good at',
            'Opportunities, applications and placements, side by side',
            'Events, shifts and tasks your supervisors can actually follow',
            'Reports for your board and donors, backed by verified hours',
        ],
        className: 'bg-ink text-white',
        tick: 'bg-sun text-ink',
        body: 'text-white/70',
    },
    {
        label: 'For your volunteers',
        title: 'Proof they can carry.',
        points: [
            'A record of verified hours to show an employer or attachment supervisor',
            'Certificates and recognition for training and service',
            'Clear tasks, and someone who checks in after',
            'Their details seen only by the people who need them',
        ],
        className: 'bg-sun-soft text-ink',
        tick: 'bg-ink text-white',
        body: 'text-body',
    },
];

/** What the organisation gets, and what the volunteer gets. Both have to win. */
const BothSides = () => (
    <section className="bg-paper py-28 sm:py-36">
        <div className="container-wide">
            <Eyebrow>Both sides win</Eyebrow>
            <RevealLines
                className="mt-6 text-display-lg text-ink"
                lines={['Your team gets order.', 'Volunteers get credit.']}
            />

            <div className="mt-16 grid gap-4 lg:grid-cols-2">
                {sides.map((side, index) => (
                    <Reveal
                        key={side.label}
                        delay={index * 0.1}
                        className={`rounded-4xl p-8 sm:p-12 ${side.className}`}
                    >
                        <p className="text-[0.75rem] font-semibold tracking-[0.22em] uppercase opacity-70">
                            {side.label}
                        </p>
                        <h3 className="mt-4 font-display text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
                            {side.title}
                        </h3>
                        <ul className="mt-8 grid gap-4">
                            {side.points.map((point) => (
                                <li key={point} className="flex gap-4">
                                    <span
                                        className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full ${side.tick}`}
                                    >
                                        <Check size={14} strokeWidth={2.5} />
                                    </span>
                                    <span
                                        className={`leading-relaxed ${side.body}`}
                                    >
                                        {point}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default BothSides;
