import { Head } from "@inertiajs/react";
import EventsHero from "./partials/EventsHero";
import EventsList from "./partials/EventsList";

export default function Events() {
    const events = [
        {
            id: 1,
            title: "Community Clean-Up Drive",
            date: "Sat, 18 Oct 2025",
            time: "10:00 AM - 6:00 PM",
            location: "Ihit Coworking, Dennis Pritt",
            organizer: "2Connect",
            image: "/assets/images/community.jpg",
            price: null,
            badge: null
        },
        {
            id: 2,
            title: "Youth Mental Wellness Workshop",
            date: "Fri, 25 Jul 2025",
            time: "9:00 AM - 5:00 PM",
            location: "TuWork CoWorking Nairobi - Lavington",
            organizer: "2Connect",
            image: "/assets/images/education.jpg",
            price: null,
            badge: null
        },
        {
            id: 3,
            title: "Campus Leadership Training",
            date: "April 20, 2026",
            location: "University of Nairobi",
            organizer: "2Connect",
            image: "/assets/images/environment.jpg",
            description: "Training for campus ambassadors on leadership, project planning, and community impact."
        },
        {
            id: 4,
            title: "Healthcare Outreach Program",
            date: "May 12, 2026",
            location: "Kiambu County",
            organizer: "2Connect",
            image: "/assets/images/healthcare.jpg",
            description: "Supporting local clinics through health education, outreach, and volunteer support."
        },
        {
            id: 5,
            title: "2Connect Community Meetup",
            date: "June 5, 2026",
            location: "Nakuru, Kenya",
            organizer: "2Connect",
            image: "/assets/images/SI2CONNECT.jpg",
            description: "A networking and learning meetup for volunteers, partners, and community leaders."
        }
    ];

    return (
        <div className="min-h-screen bg-[#f8f5ff]">
            <Head title="Our Events | 2Connect" />
            <EventsHero />
            <EventsList events={events} />
        </div>
    );
}
