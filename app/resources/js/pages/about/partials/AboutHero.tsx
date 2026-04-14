import HeroSection from "@/components/HeroSection";

const AboutHero = () => {
    return (
        <HeroSection
            title="About Us"
            height="small"
            showWatermark={true}
            watermarkText="About Us"
            showBreadcrumb={true}
            breadcrumbItems={[
                { label: "Home", href: "/" },
                { label: "About", isActive: true }
            ]}
            backgroundColor="from-[#0a3d62] to-[#092f4a]"
        />
    );
};

export default AboutHero;
