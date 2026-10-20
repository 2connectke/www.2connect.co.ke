import JoinCta from '@/components/site/join-cta';
import Bridge from './partials/Bridge';
import EventsRail from './partials/EventsRail';
import HomeHero from './partials/HomeHero';
import Journey from './partials/Journey';
import Manifesto from './partials/Manifesto';
import Pillars from './partials/Pillars';

export default function Welcome() {
    return (
        <>
            <HomeHero />
            <Manifesto />
            <Pillars />
            <Journey />
            <Bridge />
            <EventsRail />
            <JoinCta />
        </>
    );
}
