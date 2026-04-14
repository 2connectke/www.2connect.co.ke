import { useEffect, useRef, Dispatch, SetStateAction } from "react";
import HeroSection from "@/components/HeroSection";

const heroImages = [
    "/assets/images/community.jpg",
    "/assets/images/education.jpg",
    "/assets/images/environment.jpg",
    "/assets/images/healthcare.jpg",
];

interface WelcomeHeroProps {
    currentSlide: number;
    setCurrentSlide: Dispatch<SetStateAction<number>>;
}

const WelcomeHero = ({ currentSlide, setCurrentSlide }: WelcomeHeroProps) => {
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
        <HeroSection
            title={
                <div className="flex flex-col items-center gap-4">
                    <img
                        src="/assets/images/connect_logo.png"
                        alt="Connect Logo"
                        className="h-16 md:h-20 lg:h-24 w-auto"
                    />

                    <span>
                        Your <span className="text-brand-primary font-extrabold">Action</span>.{" "}
                        Your <span className="text-brand-primary font-extrabold">Impact</span>.
                    </span>
                </div>
            }
            subtitle="Connect with meaningful volunteer opportunities. Build skills. Transform communities."
            backgroundImages={heroImages}
            currentSlide={currentSlide}
            slideshow={true}
            height="large"
            showOverlay={true}
            overlayOpacity="bg-black/40"
            animated={true}
        />
    );
};

export default WelcomeHero;
