import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-16 sm:py-20 px-4 sm:px-[5%] relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-linear-to-br from-brand-primary to-brand-dark"></div>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-size-[40px_40px]"></div>
            </div>

            <motion.div
                className="relative z-10 max-w-3xl mx-auto text-center text-white"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">Join the Movement</h2>
                <p className="text-xl text-white/80 mb-10 leading-relaxed">Whether you want to volunteer, partner with us, or lead change on your campus—there is a place for you at 2Connect.</p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <Link href="/volunteer" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1e90ff] rounded-full font-bold shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:bg-white/90">
                        <span>Join as Volunteer</span>
                        <ArrowRight size={20} />
                    </Link>
                    <Link href="/partner" className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white rounded-full font-bold border-2 border-white/30 transition-all hover:bg-white/10 hover:border-white/50 hover:-translate-y-1">
                        <span>Partner With Us</span>
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default CTASection;
