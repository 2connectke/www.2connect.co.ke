import { Head } from "@inertiajs/react";
import ServicesHero from "./partials/ServicesHero";
import ServicesGrid from "./partials/ServicesGrid";

export default function Services() {
    return (
        <>
            <Head title="Our Services | 2Connect" />
            <ServicesHero />
            <section className="py-[100px] px-[8%] bg-[#f0f8ff]">
                <ServicesGrid />
            </section>
        </>
    );
}
