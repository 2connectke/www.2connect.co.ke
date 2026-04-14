import { motion } from 'framer-motion';
import { Users, Globe } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" as const }
};

const ImpactSection = () => {
    return (
        <section className="py-16 sm:py-20 px-4 sm:px-[5%] bg-gradient-to-b from-white to-[#f8fafc]">
            <div className="max-w-7xl mx-auto">
                <motion.div className="text-center mb-10 sm:mb-12" {...fadeInUp}>
                    <span className="inline-block text-[0.85rem] font-bold uppercase tracking-[0.2em] text-[#1e90ff] mb-3">Our Impact</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight tracking-tight mb-4">Bridging the Gap</h2>
                    <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto mt-4 leading-[1.8]">
                        We exist to mobilise youth energy into impactful service while ensuring that
                        young people are supported, prepared, and empowered to grow.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 my-16 relative">
                    <motion.div
                        className="flex-1 w-full max-w-[400px]"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-white rounded-3xl p-10 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] text-center relative transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_25px_-5px_rgba(30,144,255,0.1)]">
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#1e90ff] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">01</span>
                            <div className="w-20 h-20 bg-[#f8fafc] rounded-full flex items-center justify-center mx-auto mb-6 text-[#1e90ff]">
                                <Users size={40} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[#1a1a1a]">Young People</h3>
                            <p className="text-[#4a4a4a] text-[0.95rem] leading-relaxed">Seeking purpose, experience, and opportunity to make a difference</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex-none lg:flex-1 w-0.5 h-24 lg:w-full lg:h-[3px] bg-gradient-to-r from-[#1e90ff] to-[#D3AF37] relative origin-center"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-3 rounded-full font-bold text-[#1e90ff] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border border-[#e5e7eb] whitespace-nowrap z-10 lg:rotate-0 -rotate-90">
                            <span>2Connect</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex-1 w-full max-w-[400px]"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-white rounded-3xl p-10 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] text-center relative transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_25px_-5px_rgba(30,144,255,0.1)]">
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#1e90ff] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">02</span>
                            <div className="w-20 h-20 bg-[#f8fafc] rounded-full flex items-center justify-center mx-auto mb-6 text-[#1e90ff]">
                                <Globe size={40} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[#1a1a1a]">Organizations</h3>
                            <p className="text-[#4a4a4a] text-[0.95rem] leading-relaxed">In need of committed, skilled, and values-driven volunteers</p>
                        </div>
                    </motion.div>
                </div>

                <motion.p
                    className="text-center text-xl text-[#1a1a1a] max-w-2xl mx-auto mt-16 italic font-medium opacity-80 leading-relaxed"
                    {...fadeInUp}
                    transition={{ delay: 0.4 }}
                >
                    Our work ensures that service creates value for communities while also
                    strengthening the people who serve.
                </motion.p>
            </div>
        </section>
    );
};

export default ImpactSection;
