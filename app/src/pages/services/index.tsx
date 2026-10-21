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
                intro="2Connect connects young people with volunteer opportunities in their communities, then trains and supports them every step of the way. Here is everything we do, and how you can get involved."
                image="/assets/images/2connect-gathering-01.jpg"
                imageAlt="2Connect volunteers together at a community gathering"
                imagePosition="center 70%"
            />
            <ServicesList />
            <TrainingModel />
            <JoinCta
                title={['Find your', 'spot.']}
                body="From lecture hall to real world impact. Not sure which programme fits you? That is fine. Tell us what you care about and we will help you find the right opportunity to serve."
            />
        </>
    );
}
