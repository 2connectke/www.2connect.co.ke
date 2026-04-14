import { Head } from "@inertiajs/react";
import ContactInfo from "./partials/ContactInfo";
import ContactForm from "./partials/ContactForm";

export default function Contact() {
    return (
        <div className="max-w-[1200px] mx-auto py-12 px-4 font-['Helvetica','Arial',sans-serif] text-[#333] bg-[#f9f9f9] min-h-screen">
            <Head title="Contact Us | 2Connect" />

            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl mb-2 text-[#1a73e8] font-bold">
                Contact Us
            </h1>

            <p className="text-center text-base sm:text-lg mb-10 text-[#555] max-w-2xl mx-auto">
                Have a question, want to volunteer, or interested in partnering with us?
                We'd love to hear from you.
            </p>

            <div className="flex gap-8 flex-wrap justify-center md:flex-nowrap">
                <ContactInfo />
                <ContactForm />
            </div>
        </div>
    );
}
