import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Eyebrow from '@/components/site/eyebrow';
import { Reveal, RevealLines } from '@/components/site/reveal';

const OurStory = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const backY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
    const frontY = useTransform(scrollYProgress, [0, 1], ['-6%', '14%']);

    return (
        <section className="relative overflow-hidden bg-paper py-28 sm:py-36">
            <div className="container-wide grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
                {/* Layered photo composition */}
                <div ref={ref} className="relative lg:col-span-6">
                    <motion.div
                        style={{ y: backY }}
                        className="relative ml-auto aspect-[4/5] w-[78%] overflow-hidden rounded-[32px] bg-ink"
                    >
                        <img
                            src="/assets/images/2connect-hike-03.jpg"
                            alt="2Connect members on a group hike"
                            className="h-full w-full object-cover"
                        />
                    </motion.div>
                    <motion.div
                        style={{ y: frontY }}
                        className="absolute bottom-[-6%] left-0 aspect-square w-[46%] overflow-hidden rounded-full border-[10px] border-paper bg-ink shadow-[0_30px_60px_-30px_rgba(11,18,54,0.5)]"
                    >
                        <img
                            src="/assets/images/2connect-portrait-02.jpg"
                            alt="A smiling 2Connect member"
                            className="h-full w-full object-cover"
                        />
                    </motion.div>
                    <Reveal
                        delay={0.45}
                        className="absolute right-0 bottom-[6%] max-w-[15rem] rounded-[22px] bg-azure-deep px-5 py-4 font-display text-lg leading-tight font-semibold tracking-tight text-white shadow-[0_20px_40px_-20px_rgba(11,18,54,0.5)] sm:max-w-[17rem] sm:text-xl"
                    >
                        From campus to community, tuko pamoja.
                    </Reveal>
                    <Reveal
                        delay={0.3}
                        className="absolute top-8 left-[8%] rounded-[24px] bg-sun px-6 py-5 text-ink shadow-[0_20px_40px_-20px_rgba(11,18,54,0.5)]"
                    >
                        <div className="text-xs font-semibold tracking-[0.2em] uppercase">
                            Since
                        </div>
                        <div className="font-display text-5xl leading-none font-bold tracking-[-0.04em]">
                            2020
                        </div>
                    </Reveal>
                </div>

                <div className="lg:col-span-6 lg:pl-8">
                    <Eyebrow>Our story</Eyebrow>
                    <RevealLines
                        className="mt-6 text-display-lg text-ink"
                        lines={[
                            'More than',
                            'volunteering.',
                            <span key="m" className="text-azure-deep">
                                A movement.
                            </span>,
                        ]}
                    />
                    <Reveal delay={0.15}>
                        <p className="mt-8 max-w-xl text-lg leading-relaxed text-body">
                            2Connect started with a simple idea. Young people in
                            Kenya have the energy, the ideas and the heart.
                            What’s usually missing is a door to walk through.
                        </p>
                        <p className="mt-5 max-w-xl text-lg leading-relaxed text-body">
                            So we built one. We connect you to service that
                            actually matters, help you pick up real skills along
                            the way, and introduce you to people who can open the
                            next door for you. Your mtaa wins, and so do you.
                        </p>
                    </Reveal>
                    <Reveal delay={0.25}>
                        <blockquote className="relative mt-10 max-w-xl border-l-[3px] border-sun pl-6">
                            <p className="font-display text-2xl leading-snug font-semibold tracking-tight text-ink sm:text-[1.7rem]">
                                “Volunteering isn’t a one day thing. It’s a
                                journey that grows your skills, your wellbeing,
                                your network and your place in your community.”
                            </p>
                        </blockquote>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
