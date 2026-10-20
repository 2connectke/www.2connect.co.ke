import { Link } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import ButtonLink from '@/components/site/button-link';
import Eyebrow from '@/components/site/eyebrow';
import { Reveal, RevealLines } from '@/components/site/reveal';
import { pillars } from '@/data/site';

const EASE = [0.16, 1, 0.3, 1] as const;

const Pillars = () => {
    const [active, setActive] = useState(0);

    return (
        <section className="relative bg-paper py-28 sm:py-36">
            <div className="container-wide">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-7">
                        <Eyebrow>What we offer</Eyebrow>
                        <RevealLines
                            className="mt-6 text-display-lg text-ink"
                            lines={['Four pillars.', 'One connected journey.']}
                        />
                    </div>
                    <Reveal className="lg:col-span-5" delay={0.2}>
                        <p className="max-w-md text-lg leading-relaxed text-body">
                            Everything we do works both ways. Communities get
                            real help, and you get real growth. Serve, grow,
                            repeat. Pamoja.
                        </p>
                        <ButtonLink href="/services" variant="outline" className="mt-8">
                            Explore programmes
                        </ButtonLink>
                    </Reveal>
                </div>
            </div>

            {/* Expanding panels — full bleed on desktop */}
            <Reveal className="mt-16 px-3 sm:mt-20 sm:px-5" y={60}>
                <div className="flex flex-col gap-3 lg:h-[680px] lg:flex-row">
                    {pillars.map((pillar, index) => {
                        const isActive = active === index;

                        return (
                            <article
                                key={pillar.title}
                                onMouseEnter={() => setActive(index)}
                                onFocus={() => setActive(index)}
                                onClick={() => setActive(index)}
                                tabIndex={0}
                                className={`group relative min-h-[460px] cursor-pointer overflow-hidden rounded-[28px] bg-ink text-white outline-none transition-[flex-grow] duration-1000 ease-out-expo focus-visible:ring-4 focus-visible:ring-sun lg:min-h-0 ${
                                    isActive ? 'lg:flex-[3.2]' : 'lg:flex-[1]'
                                }`}
                            >
                                <img
                                    src={pillar.image}
                                    alt=""
                                    style={{ objectPosition: pillar.imagePosition }}
                                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-out-expo ${
                                        isActive
                                            ? 'scale-100 opacity-100'
                                            : 'scale-110 opacity-100 lg:opacity-45 lg:grayscale'
                                    }`}
                                />
                                <div className="absolute inset-0 bg-ink/55" />

                                <div className="relative flex h-full flex-col justify-between p-7 sm:p-9">
                                    <div className="flex items-start justify-between">
                                        <span className="font-display text-sm font-semibold tracking-wider text-white/70">
                                            {pillar.number}
                                        </span>
                                        <span
                                            className={`grid size-12 place-items-center rounded-full transition-all duration-700 ease-out-expo ${
                                                isActive
                                                    ? 'rotate-0 bg-sun text-ink'
                                                    : 'bg-white/10 text-white lg:-rotate-45'
                                            }`}
                                        >
                                            <ArrowUpRight size={20} />
                                        </span>
                                    </div>

                                    <div>
                                        <h3
                                            className={`font-display leading-[0.95] font-bold tracking-[-0.035em] transition-all duration-700 ease-out-expo ${
                                                isActive
                                                    ? 'text-[clamp(2.2rem,3.6vw,3.6rem)]'
                                                    : 'text-[clamp(2.2rem,3.6vw,3.6rem)] lg:text-2xl'
                                            }`}
                                        >
                                            {pillar.title}
                                        </h3>

                                        {/* Mobile always shows copy; desktop reveals on the active panel */}
                                        <div className="mt-5 max-w-lg lg:hidden">
                                            <p className="text-lg font-medium text-sun">
                                                {pillar.short}
                                            </p>
                                            <p className="mt-3 leading-relaxed text-white/75">
                                                {pillar.description}
                                            </p>
                                        </div>

                                        <AnimatePresence initial={false}>
                                            {isActive && (
                                                <motion.div
                                                    key="copy"
                                                    initial={{ opacity: 0, y: 24 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 12 }}
                                                    transition={{
                                                        duration: 0.7,
                                                        ease: EASE,
                                                        delay: 0.25,
                                                    }}
                                                    className="mt-5 hidden max-w-lg lg:block"
                                                >
                                                    <p className="text-xl font-medium text-sun">
                                                        {pillar.short}
                                                    </p>
                                                    <p className="mt-3 leading-relaxed text-white/75">
                                                        {pillar.description}
                                                    </p>
                                                    <Link
                                                        href="/services"
                                                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/30 underline-offset-8 transition-colors hover:decoration-sun"
                                                    >
                                                        Learn more
                                                    </Link>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </Reveal>
        </section>
    );
};

export default Pillars;
