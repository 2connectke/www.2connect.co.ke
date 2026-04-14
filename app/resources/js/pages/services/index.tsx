import { Head } from "@inertiajs/react";
import HeroSection from "./partials/HeroSection";
import ServicesGrid from "./partials/ServicesGrid";

export default function Services() {
    return (
        <>
            <Head title="Our Services | 2Connect" />
            <HeroSection />
            <section className="py-[100px] px-[8%] bg-[#f0f8ff]">
                <ServicesGrid />
            </section>
        </>
    );
}
