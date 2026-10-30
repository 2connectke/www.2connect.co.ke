import { useState } from 'react';
import JoinCta from '@/components/site/join-cta';
import PageHero from '@/components/site/page-hero';
import { opportunities } from '@/data/site';
import { anything, fits } from '@/lib/matching';
import type { Preferences } from '@/lib/matching';
import HowItWorks from './partials/HowItWorks';
import MatchForm from './partials/MatchForm';
import MatchResults from './partials/MatchResults';

export default function VolunteerMatching() {
    const [preferences, setPreferences] = useState(anything);
    const matches = opportunities.filter((opportunity) =>
        fits(opportunity, preferences),
    );

    const showMatches = (next: Preferences) => {
        setPreferences(next);
        document.getElementById('matches')?.scrollIntoView();
    };

    return (
        <>
            <PageHero
                label="Volunteer matching"
                parent={{ href: '/services', label: 'What we do' }}
                title={[
                    'Your skills.',
                    <>
                        Your <span className="text-sun-deep">cause.</span>
                    </>,
                ]}
                intro="Tell us what you are good at, what you care about and when you are free. We point you to volunteer work that needs exactly that, so your energy goes where it counts."
                image="/assets/images/2connect-portrait-01.jpg"
                imageAlt="A smiling 2Connect volunteer"
                imagePosition="center 30%"
            />
            <HowItWorks />
            <MatchForm
                onMatch={showMatches}
                onClear={() => setPreferences(anything)}
            />
            <MatchResults
                matches={matches}
                filtered={Object.values(preferences).some(Boolean)}
            />
            <JoinCta
                title={['Not sure yet?', 'Tuko na wewe.']}
                body="Tell us what you are good at and what you care about. We will help you find where you fit, even if it is not on this page."
            />
        </>
    );
}
