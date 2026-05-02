import { motion } from 'framer-motion';
import {
    ArrowRight,
    HeartPulse,
    Network,
    ShieldCheck,
    Sparkles,
    Workflow,
} from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.8, ease: 'easeOut' as const },
};

const staggerContainer = {
    initial: {},
    whileInView: {
        transition: {
            staggerChildren: 0.15,
        },
    },
    viewport: { once: true, margin: '-50px' },
};

const Differentiators = () => {
    const differentiators = [
        {
            icon: Workflow,
            label: 'Pathway',
            title: 'Structured Volunteer Journeys',
            description:
                'Every volunteer moves through a guided experience: discovery, preparation, placement, reflection, and growth.',
        },
        {
            icon: HeartPulse,
            label: 'Care',
            title: 'Youth-Centered Wellness',
            description:
                'We design service around the whole person, with support systems that protect energy, dignity, and wellbeing.',
        },
        {
            icon: Network,
            label: 'Match',
            title: 'Talent-to-Impact Pipeline',
            description:
                'Young people are matched to real needs where their skills can grow while communities receive reliable support.',
        },
        {
            icon: ShieldCheck,
            label: 'Trust',
            title: '2CFP Training Model',
            description:
                'Our preparation model gives partners volunteers who are values-led, ready to serve, and easier to deploy.',
        },
    ];

    return (
        <section className="relative overflow-hidden bg-white px-4 pt-16 pb-24 sm:px-[5%] sm:pt-20 sm:pb-32">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
                <motion.div
                    className="lg:sticky lg:top-28 lg:self-start"
                    {...fadeInUp}
                >
                    <span className="mb-4 inline-flex items-center gap-3 text-[0.78rem] font-bold tracking-[0.22em] text-brand-primary uppercase">
                        <span className="h-px w-10 bg-brand-accent"></span>
                        Our approach
                    </span>
                    <h2 className="text-4xl leading-[1.05] font-black tracking-tight text-brand-dark sm:text-5xl md:text-6xl">
                        What makes us different is the system behind the
                        service.
                    </h2>
                    <p className="mt-6 max-w-xl text-lg leading-[1.85] text-brand-medium">
                        2Connect is not simply listing opportunities. We are
                        building a youth-led infrastructure where preparation,
                        care, matching, and partner trust work together.
                    </p>

                    <div className="mt-7 overflow-hidden rounded-[8px] bg-brand-dark text-white shadow-brand-lg">
                        <div className="grid grid-cols-[0.85fr_1fr]">
                            <img
                                src="/assets/images/education.jpg"
                                alt="Young people learning through 2Connect programs"
                                className="h-full min-h-[190px] w-full object-cover"
                            />
                            <div className="flex flex-col justify-between p-5">
                                <Sparkles
                                    className="text-brand-accent"
                                    size={26}
                                    strokeWidth={1.6}
                                />
                                <p className="mt-8 text-lg leading-tight font-bold">
                                    Designed for both sides of impact.
                                </p>
                                <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold tracking-[0.14em] text-white/75 uppercase">
                                    <span>Volunteer</span>
                                    <span className="text-brand-accent">+</span>
                                    <span>Community</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="grid gap-3 lg:pt-1"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                >
                    {differentiators.map((item, index) => (
                        <motion.div
                            key={item.title}
                            className="group grid gap-4 rounded-[8px] border border-brand-border bg-[#f8fafc] p-4 shadow-brand transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/40 hover:bg-white hover:shadow-brand-lg sm:grid-cols-[92px_1fr] sm:p-5"
                            variants={fadeInUp}
                        >
                            <div className="flex items-start justify-between sm:block">
                                <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-white text-brand-primary shadow-brand">
                                    <item.icon size={24} strokeWidth={1.6} />
                                </div>
                                <span className="text-3xl leading-none font-black text-brand-primary/10 sm:mt-5 sm:block">
                                    0{index + 1}
                                </span>
                            </div>
                            <div>
                                <span className="text-xs font-black tracking-[0.2em] text-brand-accent uppercase">
                                    {item.label}
                                </span>
                                <h3 className="mt-1.5 text-xl leading-tight font-black text-brand-dark">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-[0.9rem] leading-relaxed text-brand-medium">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        className="rounded-[8px] border border-brand-primary/20 bg-white p-5 shadow-brand"
                        variants={fadeInUp}
                    >
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h3 className="text-xl font-black text-brand-dark">
                                    Digital-first, relationship-centered.
                                </h3>
                                <p className="mt-2 max-w-2xl text-[0.92rem] leading-relaxed text-brand-medium">
                                    Technology helps us coordinate, but the
                                    experience stays human: guided journeys,
                                    responsible placement, and feedback loops
                                    that improve every engagement.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Differentiators;
