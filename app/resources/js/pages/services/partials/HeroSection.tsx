import { router } from "@inertiajs/react";

const HeroSection = () => {
    return (
        <section className="relative py-[120px] px-[8%] text-center bg-gradient-to-b from-[#0a3d62] to-[#092f4a] text-white overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
                    Our Services
                </h1>

                <div className="breadcrumb flex items-center justify-center gap-2 text-sm sm:text-base opacity-90">
                    <span
                        onClick={() => router.visit("/")}
                        className="cursor-pointer hover:text-[#D3AF37] transition-colors duration-300"
                    >
                        Home
                    </span>
                    <span className="dot">•</span>
                    <span className="active text-[#D3AF37]">Services</span>
                </div>

                {/* Background watermark text */}
                <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] sm:text-[10rem] md:text-[12rem] font-black text-white/5 whitespace-nowrap pointer-events-none select-none">
                    Our Services
                </h2>
            </div>
        </section>
    );
};

export default HeroSection;
