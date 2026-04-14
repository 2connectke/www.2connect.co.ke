const HeroSection = () => {
    return (
        <section
            className="py-[100px] px-5 text-center bg-gradient-to-r from-black/55 to-black/55 bg-[url('/assets/images/community.jpg')] bg-center bg-cover bg-no-repeat text-white"
        >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
                Our Events
            </h1>
            <p className="max-w-[700px] mx-auto text-base sm:text-lg leading-relaxed">
                Discover upcoming opportunities to learn, volunteer, and create impact
                with 2Connect.
            </p>
        </section>
    );
};

export default HeroSection;
