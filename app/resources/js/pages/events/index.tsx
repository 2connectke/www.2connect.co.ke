import { Head } from "@inertiajs/react";
import HeroSection from "./partials/HeroSection";
import EventsList from "./partials/EventsList";

export default function Events() {
    const events = [
        {
            title: "Community Clean-Up Drive",
            date: "March 15, 2026",
            location: "Nairobi, Kenya",
            image: "/assets/images/community.jpg",
            description:
                "Join volunteers across Nairobi as we clean public spaces and promote environmental responsibility.",
        },
        {
            title: "Youth Mental Wellness Workshop",
            date: "April 2, 2026",
            location: "Online",
            image: "/assets/images/education.jpg",
            description:
                "An interactive session focused on mental health awareness and self-care for young changemakers.",
        },
        {
            title: "Campus Leadership Training",
            date: "April 20, 2026",
            location: "University of Nairobi",
            image: "/assets/images/environment.jpg",
            description:
                "Training for campus ambassadors on leadership, project planning, and community impact.",
        },
        {
            title: "Healthcare Outreach Program",
            date: "May 12, 2026",
            location: "Kiambu County",
            image: "/assets/images/healthcare.jpg",
            description:
                "Supporting local clinics through health education, outreach, and volunteer support.",
        },
        {
            title: "2Connect Community Meetup",
            date: "June 5, 2026",
            location: "Nakuru, Kenya",
            image: "/assets/images/SI2CONNECT.jpg",
            description:
                "A networking and learning meetup for volunteers, partners, and community leaders.",
        },
    ];

    return (
        <div className="bg-[#f0f8ff] min-h-screen">
            <Head title="Our Events | 2Connect" />
            <HeroSection />
            <EventsList events={events} />
        </div>
    );
}
