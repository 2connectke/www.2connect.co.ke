import JoinCta from '@/components/site/join-cta';
import PageHero from '@/components/site/page-hero';
import ServicesList from './partials/ServicesList';
import TrainingModel from './partials/TrainingModel';

export default function Services() {
    return (
        <>
            <PageHero
                label="What we do"
                title={[
                    'Serve. Learn.',
                    <>
                        Get <span className="text-sun-deep">ready.</span>
                    </>,
                ]}
                intro="Looking for experience that counts, skills you can use and people who get you? Here is everything we do, and how you can get in."
                image="/assets/images/2connect-outreach-01.jpg"
                imageAlt="A 2Connect volunteer cleaning up a school compound"
            />
            <ServicesList />
            <TrainingModel />
            <JoinCta
                title={['Find your', 'spot.']}
                body="From lecture hall to real world impact. Not sure which programme fits you? That is fine. Tell us what you care about and we will help you find your place."
            />
        </>
    );
}
