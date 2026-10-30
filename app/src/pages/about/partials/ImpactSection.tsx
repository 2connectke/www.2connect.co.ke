import { Building2, Users } from 'lucide-react';
import Eyebrow from '@/components/site/eyebrow';
import { Reveal, RevealLines } from '@/components/site/reveal';

const sides = [
    {
        icon: Users,
        label: 'Side one',
        title: 'Young people',
        description:
            'Looking for purpose, experience, a network, and a safe way into work that matters.',
        className: 'bg-sun text-ink',
        iconClass: 'bg-ink text-sun',
    },
    {
        icon: Building2,
        label: 'Side two',
        title: 'Organisations',
        description:
            'Looking for people who care, show up on time and serve with heart, week after week.',
        className: 'bg-azure-deep text-white',
        iconClass: 'bg-white text-azure-deep',
    },
];

const bridgeSteps = [
    {
        title: 'Listen first',
        description:
            'We find out what partners and communities really need before anyone is placed.',
    },
    {
        title: 'Prepare the people',
        description:
            'Volunteers get orientation, structure and the confidence to walk in ready.',
    },
    {
        title: 'Keep showing up',
        description:
            'After every engagement we check in, reflect together and open the next door.',
    },
];

const ImpactSection = () => {
    return (
        <section className="relative overflow-hidden bg-paper py-28 sm:py-36">
            <div className="container-wide">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-7">
                        <Eyebrow>Our impact</Eyebrow>
                        <RevealLines
                            className="mt-6 text-display-lg text-ink"
                            lines={['Bridging the gap', 'with care and trust.']}
                        />
                    </div>
                    <Reveal className="lg:col-span-5" delay={0.15}>
                        <p className="max-w-md text-lg leading-relaxed text-body">
                            We turn youth energy into help communities can count
                            on, and we make sure the young people giving it are
                            ready, supported and still growing.
                        </p>
                    </Reveal>
                </div>

                {/* The bridge: two sides, one navy overlap */}
                <div className="relative mt-16 grid gap-4 lg:grid-cols-2 lg:gap-0">
                    {sides.map((side, index) => (
                        <Reveal
                            key={side.title}
                            delay={index * 0.1}
                            className={`relative overflow-hidden rounded-4xl p-8 sm:p-12 ${side.className} ${
                                index === 0
                                    ? 'lg:rounded-r-none lg:pr-28'
                                    : 'lg:rounded-l-none lg:pl-28'
                            }`}
                        >
                            <span
                                className={`grid size-14 place-items-center rounded-full ${side.iconClass}`}
                            >
                                <side.icon size={26} strokeWidth={1.7} />
                            </span>
                            <span className="mt-10 block text-xs font-semibold tracking-[0.22em] uppercase opacity-70">
                                {side.label}
                            </span>
                            <h3 className="mt-2 text-display-md">
                                {side.title}
                            </h3>
                            <p className="mt-5 max-w-sm text-lg leading-relaxed opacity-85">
                                {side.description}
                            </p>
                        </Reveal>
                    ))}

                    <div className="pointer-events-none absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                        <Reveal y={0} delay={0.3}>
                            <div className="grid size-36 place-items-center rounded-full bg-navy shadow-[0_30px_80px_-20px_rgba(11,18,54,0.7)] ring-[10px] ring-paper">
                                <svg viewBox="0 0 72 72" className="size-10">
                                    <path
                                        d="M36 0 C40 28 44 32 72 36 C44 40 40 44 36 72 C32 44 28 40 0 36 C28 32 32 28 36 0 Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </Reveal>
                    </div>
                </div>

                <div className="mt-16 grid border-t border-ink/10 md:grid-cols-3">
                    {bridgeSteps.map((step, index) => (
                        <Reveal
                            key={step.title}
                            delay={index * 0.08}
                            className={`border-ink/10 py-10 md:pr-10 ${
                                index > 0
                                    ? 'border-t md:border-t-0 md:border-l md:pl-10'
                                    : ''
                            }`}
                        >
                            <span className="font-display text-sm font-semibold text-sun-deep tabular-nums">
                                0{index + 1}
                            </span>
                            <h4 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink">
                                {step.title}
                            </h4>
                            <p className="mt-3 leading-relaxed text-body">
                                {step.description}
                            </p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
