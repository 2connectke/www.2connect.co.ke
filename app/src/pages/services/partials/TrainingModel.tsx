import { motion } from 'framer-motion';
import Eyebrow from '@/components/site/eyebrow';
import { Reveal, RevealLines } from '@/components/site/reveal';
import { journey } from '@/data/site';

const accents = [
    'bg-sun text-ink',
    'bg-azure text-white',
    'bg-sun text-ink',
    'bg-azure text-white',
    'bg-navy text-white',
];

/** The 2CFP model: the five steps every volunteer moves through. */
const TrainingModel = () => {
    return (
        <section className="relative overflow-hidden bg-sand py-28 sm:py-36">
            <div className="relative container-wide">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-7">
                        <Eyebrow>The 2CFP model</Eyebrow>
                        <RevealLines
                            className="mt-6 text-display-lg text-ink"
                            lines={['Ready before', 'you show up.']}
                        />
                    </div>
                    <Reveal className="lg:col-span-5" delay={0.15}>
                        <p className="max-w-md text-lg leading-relaxed text-body">
                            Nobody gets thrown in the deep end. You get trained,
                            you get a team, and someone checks on you after.
                            Partners get people who are ready from day one.
                        </p>
                    </Reveal>
                </div>

                <Reveal delay={0.1}>
                    <p className="mt-14 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 font-display text-lg font-semibold tracking-[-0.01em] text-ink">
                        <span className="size-2.5 rounded-full bg-sun" />
                        Impact without burnout.
                    </p>
                </Reveal>

                <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                    {journey.map((step, index) => (
                        <Reveal as="li" key={step.title} delay={index * 0.08}>
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="flex h-full flex-col justify-between rounded-[28px] border border-ink/10 bg-white/70 p-7 transition-colors hover:border-ink/20 hover:bg-white lg:min-h-[300px]"
                            >
                                <span
                                    className={`grid size-12 place-items-center rounded-full font-display text-lg font-bold ${accents[index]}`}
                                >
                                    {index + 1}
                                </span>
                                <div className="mt-8 lg:mt-12">
                                    <h3 className="font-display text-3xl font-bold tracking-tight text-ink">
                                        {step.title}
                                    </h3>
                                    <p className="mt-3 leading-relaxed text-body">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        </Reveal>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default TrainingModel;
