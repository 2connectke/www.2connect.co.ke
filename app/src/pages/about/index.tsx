import JoinCta from '@/components/site/join-cta';
import AboutHero from './partials/AboutHero';
import Differentiators from './partials/Differentiators';
import FounderNote from './partials/FounderNote';
import ImpactSection from './partials/ImpactSection';
import OurStory from './partials/OurStory';
import PurposeCards from './partials/PurposeCards';

export default function About() {
    return (
        <>
            <AboutHero />
            <OurStory />
            <PurposeCards />
            <Differentiators />
            <ImpactSection />
            <FounderNote />
            <JoinCta
                title={['Impact haina', 'age limit.']}
                body="Serve, lead on your campus, or bring your organisation along. Whichever door you take, there’s a seat for you and people ready to walk with you."
            />
        </>
    );
}
