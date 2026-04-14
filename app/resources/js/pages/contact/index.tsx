// Contact/index.tsx
import { Head } from "@inertiajs/react";
import ContactHero from "./partials/ContactHero";
import ContactInfo from "./partials/ContactInfo";
import ContactForm from "./partials/ContactForm";

export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white font-sans text-slate-800">
            <Head title="Contact Us | 2Connect" />

            {/* Hero Section - Full width, atmospheric */}
            <ContactHero />

            {/* Main Content - Two column layout */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-5 gap-12 items-start">

                    {/* Left Column: Contact Info & Context (2/5 width) */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="prose prose-slate">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                Let's Start a Conversation
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Whether you're looking to volunteer, partner with us, or just want to learn more about our work, we're here to help.
                            </p>
                        </div>

                        <ContactInfo />
                    </div>

                    {/* Right Column: Form (3/5 width) */}
                    <div className="lg:col-span-3">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
