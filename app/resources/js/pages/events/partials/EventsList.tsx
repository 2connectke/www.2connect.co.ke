import EventCard from "./EventCard";

interface EventsListProps {
    events: Array<{
        id: number;
        title: string;
        date: string;
        time?: string;
        location: string;
        organizer?: string;
        image: string;
        price?: string | null;
        badge?: string | null;
        description?: string;
    }>;
}

const EventsList = ({ events }: EventsListProps) => {
    // Separate featured events (first two) and regular events
    const featuredEvents = events.slice(0, 2);
    const regularEvents = events.slice(2);

    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
            {/* Featured Events Section */}
            {featuredEvents.length > 0 && (
                <>
                    <div className="text-center mb-12">
                        <span className="text-brand-accent font-medium text-lg block mb-2">
                            Upcoming Events
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                            Featured Events
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-16">
                        {featuredEvents.map((event, index) => (
                            <EventCard key={event.id} event={event} index={index} />
                        ))}
                    </div>
                </>
            )}

            {/* All Events Section */}
            {regularEvents.length > 0 && (
                <>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                            All Events
                        </h2>
                        <p className="text-slate-600 mt-2">
                            Discover more opportunities to learn, volunteer, and create impact
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {regularEvents.map((event, index) => (
                            <EventCard key={event.id} event={event} index={index + 2} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default EventsList;
