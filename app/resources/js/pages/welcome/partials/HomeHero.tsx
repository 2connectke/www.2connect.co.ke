import { motion } from 'framer-motion';
import ButtonLink from '@/components/site/button-link';
import Eyebrow from '@/components/site/eyebrow';
import Marquee from '@/components/site/marquee';
import OverlapMark from '@/components/site/overlap-mark';
import { RevealLines } from '@/components/site/reveal';
import { hashtags } from '@/data/site';

const EASE = [0.16, 1, 0.3, 1] as const;

const HomeHero = () => {
    return (
        <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-paper pt-28">
            <div className="relative container-wide grid flex-1 items-center gap-x-10 gap-y-14 py-10 lg:grid-cols-12">
                <div className="lg:col-span-6">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: EASE }}
                    >
                        <Eyebrow>Kenya inakuita. Pick up.</Eyebrow>
                    </motion.div>

                    <RevealLines
                        as="h1"
                        immediate
                        delay={0.15}
                        className="mt-7 text-display-xl whitespace-nowrap text-ink lg:text-[clamp(4rem,6.6vw,8rem)]"
                        lines={[
                            <>
                                Your <span className="text-sun-deep">action.</span>
                            </>,
                            <>
                                Your <span className="text-azure-deep">impact.</span>
                            </>,
                        ]}
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: EASE, delay: 0.6 }}
                        className="mt-8 max-w-xl text-lg leading-relaxed text-body sm:text-xl"
                    >
                        You’ve got skills, energy and big ideas. Kenya needs all
                        of it. We connect you to volunteering that actually
                        matters, train you up, look out for you, and help you
                        grow into the leader you’re already becoming.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: EASE, delay: 0.75 }}
                        className="mt-10 flex flex-wrap items-center gap-3"
                    >
                        <ButtonLink href="/contact">Start volunteering</ButtonLink>
                        <ButtonLink href="/contact" variant="outline">
                            Partner with us
                        </ButtonLink>
                    </motion.div>
                </div>

                {/* Placed like a photograph: solid, larger, and fixed in place */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
                    className="mx-auto w-full max-w-[760px] lg:col-span-6"
                >
                    <OverlapMark
                        still
                        images={[
                            '/assets/images/2connect-gathering-01.jpg',
                            '/assets/images/2connect-hike-02.jpg',
                        ]}
                    />
                </motion.div>
            </div>

            <div className="relative border-y border-ink/10 bg-paper py-5">
                <Marquee
                    items={hashtags}
                    itemClassName="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl"
                />
            </div>
        </section>
    );
};

export default HomeHero;
