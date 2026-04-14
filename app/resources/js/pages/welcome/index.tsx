import { Head } from '@inertiajs/react';
import { useState } from 'react';
import HeroSection from './partials/HeroSection';
import WhoWeAre from './partials/WhoWeAre';
import WhatWeOffer from './partials/WhatWeOffer';
import UpcomingEvents from './partials/UpcomingEvents';
import CTASection from './partials/CTASection';

export default function Welcome() {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <>
            <Head title="Home | 2Connect" />
            <HeroSection currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
            <WhoWeAre />
            <WhatWeOffer />
            <UpcomingEvents />
            <CTASection />
        </>
    );
}
