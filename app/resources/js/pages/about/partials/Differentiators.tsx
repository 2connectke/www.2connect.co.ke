import { motion } from 'framer-motion';
import { Zap, Heart, TrendingUp, Shield } from 'lucide-react';

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

const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
};

const Differentiators = () => {
    const differentiators = [
        {
            icon: Zap,
            title: "Structured Volunteer Journeys",
            description: "Purpose-driven pathways that transform volunteering into career-building experiences"
        },
        {
            icon: Heart,
            title: "Youth-Centered Wellness",
            description: "Mental health support and wellbeing resources integrated into every engagement"
        },
        {
            icon: TrendingUp,
            title: "Talent-to-Impact Pipeline",
            description: "Connecting skills development with real community needs"
        },
        {
            icon: Shield,
            title: "2CFP Training Model",
            description: "Deployment-ready volunteers through our certified training framework"
        }
    ];

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-[5%] bg-white">
            <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
                <motion.span className="inline-block text-[0.85rem] font-bold uppercase tracking-[0.2em] text-[#1e90ff] mb-3" {...fadeInUp}>Our Approach</motion.span>
                <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight tracking-tight" {...fadeInUp} transition={{ delay: 0.1 }}>
                    What Makes Us <span className="text-[#1e90ff]">Different</span>
                </motion.h2>
            </div>

            <motion.div
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
            >
                {differentiators.map((item, index) => (
                    <motion.div
                        key={index}
                        className="relative bg-white border border-[#e5e7eb] rounded-3xl p-8 overflow-hidden transition-all duration-400 flex flex-col justify-between shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:-translate-y-1.5 hover:shadow-[0_20px_25px_-5px_rgba(30,144,255,0.1)] group"
                        variants={scaleIn}
                    >
                        <div>
                            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#1e90ff] mb-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">
                                <item.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[#1a1a1a]">{item.title}</h3>
                            <p className="text-[#4a4a4a] text-[0.95rem] leading-relaxed">{item.description}</p>
                        </div>
                        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/10 to-transparent rotate-45 opacity-0 group-hover:animate-[shine_0.6s_ease-in-out]"></div>
                    </motion.div>
                ))}

                {/* Additional bento items */}
                <motion.div className="lg:col-span-2 bg-[#1a1a1a] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden group shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:-translate-y-1.5 transition-all duration-400" variants={scaleIn}>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4">Digital-First, Youth-Led Ecosystem</h3>
                        <p className="opacity-80 mb-8 leading-relaxed">Technology-powered platform connecting volunteers with opportunities through seamless digital experiences</p>
                        <div className="flex gap-3 flex-wrap">
                            {['Mobile App', 'Web Platform', 'AI Matching'].map(tech => (
                                <span key={tech} className="bg-white/10 px-4 py-2 rounded-full text-sm border border-white/20">{tech}</span>
                            ))}
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e90ff]/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                </motion.div>

                <motion.div className="lg:col-span-2 bg-white border border-[#e5e7eb] rounded-3xl p-8 sm:p-12 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:-translate-y-1.5 transition-all duration-400 overflow-hidden group" variants={scaleIn}>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a]">Dual Impact Design</h3>
                        <p className="text-[#4a4a4a] mb-8 leading-relaxed">Every program creates value for both the community and the volunteer—ensuring sustainable, mutual growth</p>
                        <div className="flex items-center gap-4">
                            <div className="bg-[#1e90ff]/10 text-[#1e90ff] px-6 py-4 rounded-xl font-bold text-sm">Community</div>
                            <div className="text-[#6b7280] font-bold">⟷</div>
                            <div className="bg-[#D3AF37]/10 text-[#D3AF37] px-6 py-4 rounded-xl font-bold text-sm">Volunteer</div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Differentiators;
