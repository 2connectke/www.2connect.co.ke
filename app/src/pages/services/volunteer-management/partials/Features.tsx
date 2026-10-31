import {
    BadgeCheck,
    ChartColumn,
    Clock,
    LockKeyhole,
    QrCode,
    UsersRound,
} from 'lucide-react';
import Eyebrow from '@/components/site/eyebrow';
import { Reveal, RevealLines } from '@/components/site/reveal';

const features = [
    {
        icon: Clock,
        title: 'Hours that hold up',
        description:
            'Hours come from confirmed check-in and check-out, worked out for you. Nobody types in a number.',
        accent: 'bg-sun text-ink',
    },
    {
        icon: QrCode,
        title: 'Scan in, or sign in by hand',
        description:
            'Volunteers scan a QR code at the door. No smartphone or no bundles? The supervisor checks them in by hand.',
        accent: 'bg-azure text-white',
    },
    {
        icon: BadgeCheck,
        title: 'Checked before it counts',
        description:
            'A task is only complete once a supervisor has seen the evidence and signed it off.',
        accent: 'bg-navy text-white',
    },
    {
        icon: UsersRound,
        title: 'Everyone sees what they need',
        description:
            'Leads, supervisors and volunteers each get their own view. Your organisation’s data stays yours.',
        accent: 'bg-ink text-sun',
    },
    {
        icon: LockKeyhole,
        title: 'Safe from day one',
        description:
            'Onboarding steps like a Certificate of Good Conduct before anyone works with children. Sensitive records stay locked, and every change is logged.',
        accent: 'bg-sun text-ink',
    },
    {
        icon: ChartColumn,
        title: 'Know what to do next',
        description:
            'See who keeps coming back, which skills you are short of and which projects need more hands, with a suggested next step.',
        accent: 'bg-azure text-white',
    },
];

/** What the platform does, one card per job it takes off your plate. */
const Features = () => (
    <section className="bg-sand py-28 sm:py-36">
        <div className="container-wide">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-7">
                    <Eyebrow>What you get</Eyebrow>
                    <RevealLines
                        className="mt-6 text-display-lg text-ink"
                        lines={['Less admin.', 'More impact.']}
                    />
                </div>
                <Reveal className="lg:col-span-5" delay={0.15}>
                    <p className="max-w-md text-lg leading-relaxed text-body">
                        Built for how volunteering actually works here, from a
                        Saturday cleanup in the mtaa to a three-month campus
                        attachment.
                    </p>
                </Reveal>
            </div>

            <ul className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                    <Reveal
                        as="li"
                        key={feature.title}
                        delay={index * 0.06}
                        className="rounded-[28px] bg-paper p-8"
                    >
                        <span
                            className={`grid size-14 place-items-center rounded-full ${feature.accent}`}
                        >
                            <feature.icon size={24} strokeWidth={1.75} />
                        </span>
                        <h3 className="mt-8 font-display text-2xl font-bold tracking-[-0.02em] text-ink">
                            {feature.title}
                        </h3>
                        <p className="mt-3 leading-relaxed text-body">
                            {feature.description}
                        </p>
                    </Reveal>
                ))}
            </ul>
        </div>
    </section>
);

export default Features;
