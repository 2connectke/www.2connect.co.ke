import { motion } from 'framer-motion';
import { Sparkles, Quote } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" as const }
};

const staggerContainer = {
    initial: {},
    whileInView: {
        transition: {
            staggerChildren: 0.15
        }
    },
    viewport: { once: true, margin: "-50px" }
};

const OurStory = () => {
    return (
        <section className="py-16 sm:py-20 px-4 sm:px-[5%] bg-white">
            <div className="max-w-350 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                <motion.div
                    className="relative"
                    {...fadeInUp}
                >
                    <div className="relative rounded-3xl overflow-hidden shadow-xl">
                        <img src="/assets/images/SI2CONNECT.jpg" alt="2Connect volunteers in action" className="w-full h-full object-cover block" />
                        <div className="absolute inset-0 border-[3px] border-brand-primary rounded-3xl translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5 -z-10"></div>
                    </div>
                    <div className="absolute -bottom-5 -right-2 sm:-right-5 bg-white p-3 sm:p-4 rounded-xl shadow-lg flex items-center gap-3 font-bold text-brand-dark z-10">
                        <Sparkles size={24} className="text-brand-accent" />
                        <span className="text-sm sm:text-base">Since 2020</span>
                    </div>
                </motion.div>

                <motion.div
                    className="flex flex-col gap-6"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                >
                    <motion.span className="text-[0.85rem] font-bold uppercase tracking-[0.2em] text-brand-primary" variants={fadeInUp}>Our Story</motion.span>
                    <motion.h2 className="flex flex-col gap-1 sm:gap-2" variants={fadeInUp}>
                        <span className="text-xl sm:text-2xl font-medium text-brand-medium">More Than Volunteering—</span>
                        <span className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-dark leading-tight">A Movement</span>
                    </motion.h2>
                    <motion.p className="text-lg text-brand-medium leading-[1.8]" variants={fadeInUp}>
                        2Connect is a youth-driven volunteering and engagement platform designed to connect
                        young people to meaningful service, career pathways, and community-led social impact.
                    </motion.p>
                    <motion.p className="text-lg text-brand-medium leading-[1.8]" variants={fadeInUp}>
                        We bring people together through purpose-driven volunteering, digital engagement,
                        and relationship-centered experiences that transform both communities and the young
                        people who serve within them.
                    </motion.p>
                    <motion.div className="bg-brand-bg-light p-6 sm:p-8 rounded-xl border-l-[6px] border-brand-primary mt-4" variants={fadeInUp}>
                        <Quote size={32} className="text-brand-primary mb-4 opacity-40" />
                        <p className="text-lg italic text-brand-dark leading-[1.6]">Volunteering is not a one-off activity. It is a structured journey that builds
                            skills, wellbeing, networks, and long-term civic particPress space to playipation.</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default OurStory;
