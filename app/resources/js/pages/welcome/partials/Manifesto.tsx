import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { useRef } from 'react';
import CountUp from '@/components/site/count-up';
import Eyebrow from '@/components/site/eyebrow';
import { Reveal } from '@/components/site/reveal';
import { stats } from '@/data/site';

const manifesto =
    'Kenya is full of young people with talent and nowhere to plug it in. Organisations need hands they can count on. We *connect* the two, get you ready properly, and stay with you as you *grow.*';

const words = manifesto.split(' ');

function Word({
    word,
    index,
    progress,
}: {
    word: string;
    index: number;
    progress: MotionValue<number>;
}) {
    const start = index / words.length;
    const end = start + 1 / words.length;
    const opacity = useTransform(progress, [start, end], [0.14, 1]);
    const highlight = word.startsWith('*');
    const text = word.replaceAll('*', '');

    return (
        <motion.span
            style={{ opacity }}
            className={`mr-[0.25em] inline-block ${highlight ? 'text-sun' : ''}`}
        >
            {text}
        </motion.span>
    );
}

const Manifesto = () => {
    const ref = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 0.85', 'end 0.45'],
    });

    return (
        <section className="relative overflow-hidden bg-ink py-28 text-white sm:py-40">

            <div className="relative container-wide">
                <Eyebrow tone="light">Si talk, ni action.</Eyebrow>

                <p
                    ref={ref}
                    className="mt-10 max-w-[18ch] font-display text-[clamp(2.2rem,5.4vw,5.6rem)] leading-[1.02] font-semibold tracking-[-0.035em] sm:max-w-[22ch]"
                >
                    {words.map((word, index) => (
                        <Word
                            key={index}
                            word={word}
                            index={index}
                            progress={scrollYProgress}
                        />
                    ))}
                </p>

                <div className="mt-24 grid grid-cols-2 border-t border-white/10 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <Reveal
                            key={stat.label}
                            delay={index * 0.08}
                            className={`border-white/10 py-10 pr-6 ${
                                index % 2 === 1 ? 'border-l pl-6 lg:pl-10' : ''
                            } ${index === 2 ? 'lg:border-l lg:pl-10' : ''} ${
                                index >= 2 ? 'border-t lg:border-t-0' : ''
                            }`}
                        >
                            <div className="font-display text-[clamp(2.8rem,5.5vw,5rem)] leading-none font-bold tracking-[-0.04em]">
                                <CountUp value={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="mt-4 text-sm tracking-wide text-white/55">
                                {stat.label}
                            </p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Manifesto;
