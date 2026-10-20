import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';
import ButtonLink from '@/components/site/button-link';
import Eyebrow from '@/components/site/eyebrow';
import { Reveal } from '@/components/site/reveal';

const sides = [
    {
        key: 'youth',
        eyebrow: 'For young people',
        title: 'Your energy ina place hapa.',
        points: [
            'Opportunities that fit your skills and what you care about',
            'Free training, certificates and wellness support',
            'A network that grows with you, on campus and beyond',
        ],
        cta: 'Start volunteering',
        className: 'bg-sun text-ink',
        check: 'bg-ink text-sun',
        button: 'ink' as const,
        tone: 'dark' as const,
    },
    {
        key: 'orgs',
        eyebrow: 'For organisations',
        title: 'Meet the people building Kenya.',
        points: [
            'Committed people who care, prepared through our 2CFP training',
            'Reliable help for your programmes, events and outreach',
            'Honest feedback after every project, so it keeps getting better',
        ],
        cta: 'Partner with us',
        className: 'bg-azure-deep text-white',
        check: 'bg-white text-azure-deep',
        button: 'light' as const,
        tone: 'light' as const,
    },
];

/** The two sides 2Connect bridges, with the navy overlap at the seam. */
const Bridge = () => {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <section className="relative flex flex-col lg:min-h-[86vh] lg:flex-row">
            {sides.map((side) => (
                <div
                    key={side.key}
                    onMouseEnter={() => setHovered(side.key)}
                    onMouseLeave={() => setHovered(null)}
                    className={`relative flex items-center overflow-hidden transition-[flex-grow] duration-1000 ease-out-expo lg:flex-1 ${side.className} ${
                        hovered === side.key ? 'lg:flex-[1.18]' : ''
                    }`}
                >
                    <div
                        className={`w-full px-[clamp(1.25rem,5vw,6rem)] py-24 sm:py-28 ${
                            side.key === 'youth' ? 'lg:pr-32' : 'lg:pl-32'
                        }`}
                    >
                        <Reveal>
                            <Eyebrow tone={side.tone}>{side.eyebrow}</Eyebrow>
                            <h2 className="mt-6 max-w-[12ch] text-display-md">
                                {side.title}
                            </h2>
                        </Reveal>
                        <ul className="mt-10 max-w-md space-y-4">
                            {side.points.map((point, index) => (
                                <Reveal
                                    as="li"
                                    key={point}
                                    delay={0.1 + index * 0.08}
                                    className="flex items-start gap-3 text-[1.05rem] leading-snug"
                                >
                                    <span
                                        className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full ${side.check}`}
                                    >
                                        <Check size={14} strokeWidth={3} />
                                    </span>
                                    <span className="opacity-90">{point}</span>
                                </Reveal>
                            ))}
                        </ul>
                        <Reveal delay={0.35}>
                            <ButtonLink href="/contact" variant={side.button} className="mt-12">
                                {side.cta}
                            </ButtonLink>
                        </Reveal>
                    </div>
                </div>
            ))}

            {/* The overlap at the seam */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                <div className="relative grid size-44 place-items-center rounded-full bg-navy text-white shadow-[0_30px_80px_-20px_rgba(11,18,54,0.7)] xl:size-52">
                    <motion.svg
                        viewBox="0 0 200 200"
                        className="absolute inset-0 size-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    >
                        <defs>
                            <path
                                id="bridge-ring"
                                d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
                            />
                        </defs>
                        <text className="fill-white/70 text-[12px] font-semibold uppercase">
                            <textPath
                                href="#bridge-ring"
                                textLength={490}
                                lengthAdjust="spacing"
                            >
                                Prepared · Matched · Supported · Connected ·
                            </textPath>
                        </text>
                    </motion.svg>
                    <svg viewBox="0 0 72 72" className="size-12">
                        <path
                            d="M36 0 C40 28 44 32 72 36 C44 40 40 44 36 72 C32 44 28 40 0 36 C28 32 32 28 36 0 Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Bridge;
