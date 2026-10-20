import PageHero from '@/components/site/page-hero';

const AboutHero = () => {
    return (
        <PageHero
            label="About"
            title={[
                'More than',
                <>
                    a <span className="text-sun-deep">platform.</span>
                </>,
            ]}
            intro={
                <p>
                    We’re a community. On one side, young people with energy,
                    skills and something to prove. On the other, organisations
                    that need people who will actually show up. We bring you
                    together, and we stay with you both.
                </p>
            }
            image="/assets/images/2connect-outreach-02.jpg"
            imageAlt="2Connect volunteers together on a community visit"
            imagePosition="center 18%"
        />
    );
};

export default AboutHero;
