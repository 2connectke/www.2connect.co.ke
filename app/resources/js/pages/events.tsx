import * as React from 'react';
import { Head, Link } from "@inertiajs/react";
import "../../css/events.css";

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
    <div className="events-page">
      <Head title="Our Events | 2Connect" />
      
      {/* HERO */}
      <section className="events-hero">
        <h1>Our Events</h1>
        <p>
          Discover upcoming opportunities to learn, volunteer, and create impact
          with 2Connect.
        </p>
      </section>

      {/* EVENTS LIST */}
      <section className="events-list">
        {events.map((event, index) => (
          <div className="event-row" key={index}>
            <img src={event.image} alt={event.title} />

            <div className="event-info">
              <h3>{event.title}</h3>
              <p className="event-meta">📅 {event.date}</p>
              <p className="event-meta">📍 {event.location}</p>
              <p className="event-desc">{event.description}</p>

              <Link
                href={`/events/register/${index}`}
                className="learn-more-btn"
              >
                Register
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
