import ButtonLink from '@/components/site/button-link';
import JoinCta from '@/components/site/join-cta';
import PageHero from '@/components/site/page-hero';
import BothSides from './partials/BothSides';
import Features from './partials/Features';
import TheMess from './partials/TheMess';
import Workflow from './partials/Workflow';

export default function VolunteerManagement() {
    return (
        <>
            <PageHero
                label="Volunteer management"
                parent={{ href: '/services', label: 'What we do' }}
                title={[
                    'Know who',
                    <>
                        showed <span className="text-sun-deep">up.</span>
                    </>,
                ]}
                intro="One place for NGOs, community groups and campus clubs to bring volunteers on board, send them where they are needed, check the work and count every verified hour."
                image="/assets/images/2connect-outreach-01.jpg"
                imageAlt="2Connect volunteers sweeping a school compound together"
            >
                <div className="flex flex-wrap items-center gap-3">
                    <ButtonLink href="/contact" variant="ink">
                        Get early access
                    </ButtonLink>
                    <ButtonLink href="#how" variant="outline">
                        See how it works
                    </ButtonLink>
                </div>
            </PageHero>
            <TheMess />
            <Workflow />
            <Features />
            <BothSides />
            <JoinCta
                title={['Bring your team', 'on board.']}
                body="Run an NGO, a community group or a campus club with volunteers to keep track of? Tell us about it. We are opening the platform to partner organisations first, and we will set you up ourselves."
            />
        </>
    );
}
