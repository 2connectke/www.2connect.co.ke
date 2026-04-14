import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

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

const TeamSection = () => {
    const teamMembers = [
        {
            name: "Kevin Wanjiru",
            role: "CEO & Founder",
            image: "/assets/images/kevc.jpeg",
            quote: "Bridging passion with purpose to transform Kenya's youth potential into community impact.",
            color: "#1e90ff"
        },
        {
            name: "Stephanie Kimitei",
            role: "Operations Lead",
            image: "/assets/images/stephc.jpeg",
            quote: "Behind every seamless operation is the quiet force that makes it all possible.",
            color: "#1e90ff"
        },
        {
            name: "Evelyne Munguti",
            role: "Chief Technology Officer",
            image: "/assets/images/everc.jpeg",
            quote: "Building the digital infrastructure that powers youth-led transformation.",
            color: "#1e90ff"
        },
        {
            name: "Ivy Mbaiya",
            role: "Events Coordinator",
            image: "/assets/images/ivyc.jpeg",
            quote: "Creating moments that connect people and spark lasting change.",
            color: "#1e90ff"
        },
        {
            name: "Esther Ndung'u",
            role: "Communications & Brand Lead",
            image: "/assets/images/essiec.jpeg",
            quote: "Storytelling that amplifies impact and inspires action.",
            color: "#1e90ff"
        },
        {
            name: "Nyambura",
            role: "Social Media Manager",
            image: "/assets/images/nyac.jpeg",
            quote: "Turning digital conversations into real-world movements.",
            color: "#1e90ff",
            position: "object-center"
        }
    ];

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-[5%] bg-white">
            <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-12">
                <motion.span className="inline-block text-[0.85rem] font-bold uppercase tracking-[0.2em] text-[#1e90ff] mb-3" {...fadeInUp}>The People</motion.span>
                <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight tracking-tight mb-4" {...fadeInUp} transition={{ delay: 0.1 }}>
                    Meet Our Team
                </motion.h2>
                <motion.p className="text-lg text-[#4a4a4a] mt-3 max-w-2xl mx-auto" {...fadeInUp} transition={{ delay: 0.2 }}>
                    The passionate individuals behind the mission
                </motion.p>
            </div>

            <motion.div
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
            >
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] transition-all duration-400 group hover:-translate-y-2 hover:shadow-[0_20px_25px_-5px_rgba(30,144,255,0.1)]"
                        variants={fadeInUp}
                    >
                        <div className="relative h-80 overflow-hidden">
                            <img src={member.image} alt={member.name} className={`w-full h-full object-cover transition-transform duration-600 group-hover:scale-110 ${member.position || 'object-top'}`} />
                            <div className="absolute inset-0 flex flex-col justify-center p-8 opacity-0 group-hover:opacity-95 transition-all duration-400 bg-blue-50/95">
                                <Quote size={24} className="mb-4" style={{ color: member.color }} />
                                <p className="text-base italic leading-relaxed" style={{ color: member.color }}>{member.quote}</p>
                            </div>
                        </div>
                        <div className="p-8 relative">
                            <h3 className="text-xl font-bold mb-1 text-[#1a1a1a]">{member.name}</h3>
                            <p className="text-[0.875rem] font-bold text-[#6b7280] uppercase tracking-wider">{member.role}</p>
                            <div className="absolute bottom-0 left-0 right-0 h-1 transition-all" style={{ background: member.color }}></div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default TeamSection;
