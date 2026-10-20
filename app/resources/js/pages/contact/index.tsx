import { Reveal } from '@/components/site/reveal';
import ContactFaq from './partials/ContactFaq';
import ContactForm from './partials/ContactForm';
import ContactHero from './partials/ContactHero';
import ContactInfo from './partials/ContactInfo';

export default function Contact() {
    return (
        <>
            <ContactHero />

            <section className="relative bg-paper pb-28 sm:pb-36">
                <div className="container-wide grid items-start gap-16 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:sticky lg:top-32 lg:col-span-5">
                        <ContactInfo />
                    </div>
                    <Reveal className="lg:col-span-7" y={48}>
                        <ContactForm />
                    </Reveal>
                </div>
            </section>

            <ContactFaq />
        </>
    );
}
