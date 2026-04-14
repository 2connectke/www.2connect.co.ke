import { useState } from "react";
import { Link } from '@inertiajs/react';

const eventData = [
    {
        image: '/assets/images/community.jpg',
        tag: 'Environment',
        title: 'Community Clean-Up',
        year: '2026',
    },
    {
        image: '/assets/images/education.jpg',
        tag: 'Health',
        title: 'Wellness Workshop',
        year: '2026',
    },
    {
        image: '/assets/images/environment.jpg',
        tag: 'Training',
        title: 'Leadership Training',
        year: '2026',
    },
    {
        image: '/assets/images/healthcare.jpg',
        tag: 'Community',
        title: 'Community Outreach',
        year: '2026',
    },
    {
        image: '/assets/images/SI2CONNECT.jpg',
        tag: 'Networking',
        title: 'Volunteer Meetup',
        year: '2026',
    },
];

const UpcomingEvents = () => {
    const [eventCurrent, setEventCurrent] = useState(0);

    const nextEvent = () => setEventCurrent((prev) => (prev + 1) % eventData.length);
    const prevEvent = () => setEventCurrent((prev) => (prev - 1 + eventData.length) % eventData.length);
    const goToEvent = (i: number) => setEventCurrent(i);

    return (
        <section className="relative bg-[#f8fafc] py-16 sm:py-20 md:py-20 px-4 sm:px-6 md:px-16 overflow-hidden">
            {/* Decorative blur */}
            <div className="absolute -top-24 -left-24 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#1e90ff]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#1e90ff]/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <span className="text-[#1e90ff] font-semibold uppercase tracking-[2px] text-xs sm:text-sm">
                        Community Activities
                    </span>
                    <h2 className="text-[2rem] sm:text-[2.2rem] md:text-[3rem] font-extrabold text-[#1a1a1a] mt-2 sm:mt-3">
                        Upcoming Events
                    </h2>
                    <p className="text-[#4a4a4a] max-w-xl mx-auto mt-3 sm:mt-4 text-sm sm:text-base px-4">
                        Discover volunteer opportunities, training sessions, and
                        community initiatives happening soon.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-6xl mx-auto">
                    <div className="overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[28px] shadow-2xl bg-white">
                        <div
                            className="flex transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
                            style={{ transform: `translateX(-${eventCurrent * 100}%)` }}
                        >
                            {eventData.map((event, i) => (
                                <div key={i} className="min-w-full flex flex-col md:grid md:grid-cols-[1.2fr_1fr]">
                                    {/* Image Side */}
                                    <div className="relative h-[250px] sm:h-[300px] md:h-[480px] overflow-hidden">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

                                        {/* Date Badge */}
                                        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/90 backdrop-blur px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl shadow-md text-center">
                                            <div className="text-base sm:text-lg font-bold text-[#1a1a1a]">17</div>
                                            <div className="text-[10px] sm:text-xs uppercase text-[#6b7280]">Jan</div>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="flex flex-col justify-center p-6 sm:p-8 md:p-14">
                                        <span className="inline-block text-xs sm:text-sm font-semibold text-[#1e90ff] bg-[#1e90ff]/10 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full w-fit mb-4 sm:mb-5">
                                            {event.tag}
                                        </span>
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-3 sm:mb-4">
                                            {event.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-[#4a4a4a] mb-6 sm:mb-8 leading-relaxed">
                                            Join volunteers and community members as we
                                            work together to create meaningful change
                                            and strengthen our local communities.
                                        </p>
                                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                                            <Link
                                                href="/events"
                                                className="text-center px-5 sm:px-7 py-2.5 sm:py-3.5 bg-[#1e90ff] text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm sm:text-base"
                                            >
                                                Register Now
                                            </Link>
                                            <Link
                                                href="/events"
                                                className="text-center sm:text-left text-[#1e90ff] font-semibold hover:underline text-sm sm:text-base"
                                            >
                                                Learn More →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center px-3 sm:px-4 md:px-6 pointer-events-none">
                            <button
                                onClick={prevEvent}
                                className="pointer-events-auto w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full bg-[#1e90ff] shadow-xl flex items-center justify-center text-white transition-all duration-300 border border-[#e5e7eb]/20 group"
                            >
                                <i className="fas fa-chevron-left transition-transform group-hover:-translate-x-0.5 text-xs sm:text-sm md:text-base"></i>
                            </button>
                            <button
                                onClick={nextEvent}
                                className="pointer-events-auto w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full bg-[#1e90ff] shadow-xl flex items-center justify-center text-white transition-all duration-300 border border-[#e5e7eb]/20 group"
                            >
                                <i className="fas fa-chevron-right transition-transform group-hover:translate-x-0.5 text-xs sm:text-sm md:text-base"></i>
                            </button>
                        </div>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
                        {eventData.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goToEvent(i)}
                                className={`transition-all duration-300 rounded-full ${eventCurrent === i
                                    ? 'w-6 sm:w-8 h-1.5 sm:h-2 bg-[#1e90ff]'
                                    : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
