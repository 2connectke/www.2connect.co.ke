import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Eyebrow from '@/components/site/eyebrow';
import { Reveal, RevealLines } from '@/components/site/reveal';
import { journey } from '@/data/site';

const Journey = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 0.8', 'end 0.55'],
    });
    const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });
    const clipX = useTransform(
        progress,
        (v) => `inset(0 ${100 - v * 100}% 0 0)`,
    );
    const clipY = useTransform(
        progress,
        (v) => `inset(0 0 ${100 - v * 100}% 0)`,
    );

    return (
        <section className="relative overflow-hidden bg-sand py-28 sm:py-36">
            <div className="container-wide">
                <div className="mx-auto max-w-3xl text-center">
                    <Eyebrow>Volunteer leo, lead kesho.</Eyebrow>
                    <RevealLines
                        className="mt-6 text-display-lg text-ink"
                        lines={['From first hello', 'to lifelong leader.']}
                    />
                    <Reveal delay={0.2}>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-body">
                            We don’t just drop you somewhere and disappear. You
                            go through a proper journey with us, so every hour
                            you give is also an hour you grow.
                        </p>
                    </Reveal>
                </div>

                <div ref={ref} className="relative mt-20 sm:mt-28">
                    {/* Connecting line: horizontal on desktop, vertical on mobile */}
                    <div className="absolute top-7 right-[10%] left-[10%] hidden h-[3px] lg:block">
                        <div className="absolute inset-0 border-t-[3px] border-dotted border-ink/20" />
                        <motion.div
                            style={{ clipPath: clipX }}
                            className="absolute inset-0 border-t-[3px] border-dotted border-navy"
                        />
                    </div>
                    <div className="absolute top-0 bottom-0 left-7 w-[3px] lg:hidden">
                        <div className="absolute inset-0 border-l-[3px] border-dotted border-ink/20" />
                        <motion.div
                            style={{ clipPath: clipY }}
                            className="absolute inset-0 border-l-[3px] border-dotted border-navy"
                        />
                    </div>

                    <ol className="relative grid gap-12 lg:grid-cols-5 lg:gap-6">
                        {journey.map((step, index) => (
                            <Reveal
                                as="li"
                                key={step.title}
                                delay={index * 0.1}
                                className="flex gap-6 lg:flex-col lg:items-center lg:text-center"
                            >
                                <span
                                    className={`relative grid size-14 shrink-0 place-items-center rounded-full font-display text-lg font-bold shadow-[0_10px_30px_-10px_rgba(11,18,54,0.4)] ring-8 ring-sand ${
                                        index % 2 === 0
                                            ? 'bg-sun text-ink'
                                            : 'bg-azure text-white'
                                    } ${index === journey.length - 1 ? '!bg-navy !text-white' : ''}`}
                                >
                                    {index + 1}
                                </span>
                                <div className="lg:mt-8">
                                    <h3 className="font-display text-3xl font-bold tracking-tight text-ink">
                                        {step.title}
                                    </h3>
                                    <p className="mt-3 max-w-xs leading-relaxed text-body lg:mx-auto">
                                        {step.description}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default Journey;
