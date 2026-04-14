import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" as const }
};

const PurposeCards = () => {
    const cards = [
        {
            title: "Mission",
            content: "To empower young people with opportunities, skills, and support to create positive and lasting change in their communities.",
            gradient: "from-blue-500 to-blue-400"
        },
        {
            title: "Vision",
            content: "A connected generation of socially conscious leaders transforming Kenya and the world.",
            gradient: "from-blue-600 to-blue-500"
        },
        {
            title: "Values",
            content: ["Purpose-Driven Innovation", "Collaboration", "Integrity", "Empowerment", "Sustainability"],
            gradient: "from-blue-700 to-blue-600",
            isList: true
        }
    ];

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-[5%] bg-gradient-to-b from-[#f8fafc] to-white">
            <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
                <motion.span
                    className="inline-block text-[0.85rem] font-bold uppercase tracking-[0.2em] text-[#1e90ff] mb-3"
                    {...fadeInUp}
                >
                    Why We Exist
                </motion.span>
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight tracking-tight mb-4"
                    {...fadeInUp}
                    transition={{ delay: 0.1 }}
                >
                    Our Purpose
                </motion.h2>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-400 group hover:-translate-y-2 hover:shadow-[0_20px_25px_-5px_rgba(30,144,255,0.1)]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.6 }}
                    >
                        <div className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-full group-hover:opacity-[0.05] bg-gradient-to-r ${card.gradient}`}></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6 text-[#1a1a1a]">{card.title}</h3>
                            {card.isList ? (
                                <ul className="flex flex-col gap-3 list-none p-0">
                                    {card.content.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[#4a4a4a] text-[0.95rem]">
                                            <span className="w-2 h-2 bg-[#1e90ff] rounded-full shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-[#4a4a4a] leading-relaxed">{card.content}</p>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PurposeCards;
