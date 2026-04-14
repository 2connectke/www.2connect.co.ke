import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a192f] via-[#1e3a8a] to-[#1e90ff]">
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[60%] bg-[#D3AF37]/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[50%] bg-white/5 blur-[100px] rounded-full"></div>

            <div className="relative z-10 text-center max-w-[900px] px-4 sm:px-6 md:px-8 text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-black leading-tight tracking-tight">
                        We Are <span className="text-[#D3AF37]">2Connect</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90 max-w-[700px] mx-auto font-medium">
                        Building bridges between passionate young people and meaningful impact across Kenya
                    </p>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D3AF37]/30 to-transparent"></div>
        </section>
    );
};

export default HeroSection;
