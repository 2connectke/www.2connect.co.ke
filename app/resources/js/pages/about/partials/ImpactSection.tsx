import { motion } from 'framer-motion';
import { Building2, CheckCircle2, Handshake, Users } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.8, ease: 'easeOut' as const },
};

const ImpactSection = () => {
    const bridgeSteps = [
        {
            title: 'Listen to the need',
            description:
                'We understand what partners and communities actually require before placing people into the work.',
        },
        {
            title: 'Prepare the people',
            description:
                'Volunteers receive structure, orientation, and confidence before they enter service environments.',
        },
        {
            title: 'Support the work',
            description:
                'The journey continues through feedback, reflection, and stronger pathways after each engagement.',
        },
    ];

    return (
        <section className="relative overflow-hidden bg-[#f8fafc] px-4 pt-20 pb-16 sm:px-[5%] sm:pt-24 sm:pb-20">
            <div className="relative mx-auto max-w-7xl">
                <motion.div
                    className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
                    {...fadeInUp}
                >
                    <div>
                        <span className="mb-4 inline-flex items-center gap-3 text-[0.78rem] font-bold tracking-[0.22em] text-brand-primary uppercase">
                            <span className="h-px w-10 bg-brand-accent"></span>
                            Our impact
                        </span>
                        <h2 className="text-4xl leading-[1.05] font-black tracking-tight text-brand-dark sm:text-5xl md:text-6xl">
                            Bridging the gap with care, structure, and trust.
                        </h2>
                        <p className="mt-6 text-lg leading-[1.85] text-brand-medium">
                            We mobilise youth energy into service that
                            communities can rely on, while making sure young
                            people are prepared, supported, and empowered to
                            keep growing.
                        </p>
                    </div>

                    <div className="relative overflow-hidden rounded-[8px] bg-brand-dark shadow-brand-lg">
                        <img
                            src="/assets/images/community.jpg"
                            alt="2Connect community engagement"
                            className="h-[360px] w-full object-cover opacity-80 sm:h-[420px]"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-brand-dark/45 to-transparent"></div>
                        <div className="absolute right-0 bottom-0 left-0 p-6 text-white sm:p-8">
                            <p className="max-w-xl text-2xl leading-tight font-black">
                                A bridge is only useful when both sides can move
                                across it with confidence.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
                    <motion.div
                        className="rounded-[8px] border border-brand-border bg-white p-6 shadow-brand sm:p-8"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                                <Users size={30} />
                            </div>
                            <div>
                                <span className="text-xs font-black tracking-[0.2em] text-brand-accent uppercase">
                                    Side one
                                </span>
                                <h3 className="text-2xl font-black text-brand-dark">
                                    Young people
                                </h3>
                            </div>
                        </div>
                        <p className="mt-5 leading-relaxed text-brand-medium">
                            Seeking purpose, experience, networks, and a safe
                            path into meaningful contribution.
                        </p>
                    </motion.div>

                    <motion.div
                        className="relative flex min-h-28 items-center justify-center lg:min-h-full"
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <div className="absolute h-full w-px bg-linear-to-b from-brand-primary to-brand-accent lg:h-px lg:w-40"></div>
                        <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-white bg-brand-primary text-white shadow-brand-lg">
                            <Handshake size={34} strokeWidth={1.6} />
                        </div>
                    </motion.div>

                    <motion.div
                        className="rounded-[8px] border border-brand-border bg-white p-6 shadow-brand sm:p-8"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent">
                                <Building2 size={30} />
                            </div>
                            <div>
                                <span className="text-xs font-black tracking-[0.2em] text-brand-primary uppercase">
                                    Side two
                                </span>
                                <h3 className="text-2xl font-black text-brand-dark">
                                    Organizations
                                </h3>
                            </div>
                        </div>
                        <p className="mt-5 leading-relaxed text-brand-medium">
                            Looking for committed, values-driven volunteers who
                            can serve with clarity and consistency.
                        </p>
                    </motion.div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                    {bridgeSteps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            className="rounded-[8px] border border-brand-border bg-white p-6 shadow-brand"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: index * 0.08 }}
                        >
                            <div className="mb-5 flex items-center justify-between">
                                <CheckCircle2
                                    className="text-brand-primary"
                                    size={26}
                                />
                                <span className="text-sm font-black text-brand-primary/30">
                                    0{index + 1}
                                </span>
                            </div>
                            <h4 className="text-xl font-black text-brand-dark">
                                {step.title}
                            </h4>
                            <p className="mt-3 text-[0.95rem] leading-relaxed text-brand-medium">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
