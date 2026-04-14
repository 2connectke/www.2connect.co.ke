import EventCard from "./EventCard";

interface EventsListProps {
    events: Array<{
        title: string;
        date: string;
        location: string;
        image: string;
        description: string;
    }>;
}

const EventsList = ({ events }: EventsListProps) => {
    return (
        <div className="max-w-[1100px] mx-auto py-20 px-5 flex flex-col gap-10">
            {events.map((event, index) => (
                <EventCard key={index} event={event} index={index} />
            ))}
        </div>
    );
};

export default EventsList;
