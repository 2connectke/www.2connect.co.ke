import HeroSection from "@/components/HeroSection";

const ServicesHero = () => {
    return (
        <HeroSection
            title="Our Services"
            height="small"
            showWatermark={true}
            watermarkText="Our Services"
            showBreadcrumb={true}
            breadcrumbItems={[
                { label: "Home", href: "/" },
                { label: "Services", isActive: true }
            ]}
            backgroundColor="from-[#0a3d62] to-[#092f4a]"
        />
    );
};

export default ServicesHero;
