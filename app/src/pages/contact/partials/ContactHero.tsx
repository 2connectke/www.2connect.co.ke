import PageHero from '@/components/site/page-hero';

const ContactHero = () => {
    return (
        <PageHero
            label="Contact"
            title={[
                'Let’s get',
                <span className="text-azure-deep">connected.</span>,
            ]}
            intro="Want to volunteer, bring your organisation on board or start a club on your campus? Tell us a bit about you. A real person on the team reads every message."
        />
    );
};

export default ContactHero;
