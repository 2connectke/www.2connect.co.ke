import { useEffect, useRef, Dispatch, SetStateAction } from "react";
import ImpactStats from "./ImpactStats";

const heroImages = [
    "/assets/images/community.jpg",
    "/assets/images/education.jpg",
    "/assets/images/environment.jpg",
    "/assets/images/healthcare.jpg",
];

interface HeroSectionProps {
    currentSlide: number;
    setCurrentSlide: Dispatch<SetStateAction<number>>;
}

const HeroSection = ({ currentSlide, setCurrentSlide }: HeroSectionProps) => {
    const heroTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        heroTimerRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 4000);

        return () => {
            if (heroTimerRef.current) clearInterval(heroTimerRef.current);
        };
    }, [setCurrentSlide]);

    const changeSlide = (index: number) => {
        setCurrentSlide(index);

        if (heroTimerRef.current) clearInterval(heroTimerRef.current);

        heroTimerRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 4000);
    };

    return (
        <section
            className="relative h-[75vh] sm:h-[80vh] md:h-[85vh] min-h-125 sm:min-h-137.5 md:min-h-150 bg-cover bg-center flex items-center justify-center transition-[background-image] duration-600ms ease-in-out"
            style={{ backgroundImage: `url(${heroImages[currentSlide]})` }}
        >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 text-center max-w-200 px-4 sm:px-6 md:px-8 text-white">
                <h1 className="text-2xl sm:text-3xl md:text-[3.5rem] font-bold mb-4 sm:mb-6 leading-[1.2] tracking-tight">Your <span className="text-brand-primary font-extrabold">Action</span>. Your <span className="text-brand-primary font-extrabold">Impact</span>.
                </h1>
                <p className="text-sm sm:text-base md:text-xl leading-relaxed opacity-95 max-w-150 mx-auto px-2">
                    Connect with meaningful volunteer opportunities. Build skills. Transform communities.
                </p>
            </div>
            <ImpactStats />
        </section>
    );
};

export default HeroSection;
