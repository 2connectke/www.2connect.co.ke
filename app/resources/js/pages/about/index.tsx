import { Head } from '@inertiajs/react';
import HeroSection from './partials/HeroSection';
import OurStory from './partials/OurStory';
import PurposeCards from './partials/PurposeCards';
import Differentiators from './partials/Differentiators';
import ImpactSection from './partials/ImpactSection';
import TeamSection from './partials/TeamSection';
import CTASection from './partials/CTASection';

export default function About() {
    return (
        <div className="w-full overflow-x-hidden font-sans bg-[#f8fafc] text-[#1a1a1a] leading-relaxed">
            <Head title="About Us | 2Connect" />
            <HeroSection />
            <OurStory />
            <PurposeCards />
            <Differentiators />
            <ImpactSection />
            <TeamSection />
            <CTASection />
        </div>
    );
}
