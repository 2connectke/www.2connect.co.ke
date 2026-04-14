import { Link } from "@inertiajs/react";

interface EventCardProps {
    event: {
        title: string;
        date: string;
        location: string;
        image: string;
        description: string;
    };
    index: number;
}

const EventCard = ({ event, index }: EventCardProps) => {
    return (
        <div className="bg-white grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 rounded-[22px] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(211,175,55,0.35)]">
            {/* Image */}
            <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover min-h-[250px] md:min-h-0"
            />

            {/* Content */}
            <div className="p-6 sm:p-8 md:p-9">
                <h3 className="text-xl sm:text-2xl md:text-[1.6rem] font-bold mb-2.5 text-[#1a1a1a]">
                    {event.title}
                </h3>

                <p className="text-sm sm:text-base text-[#4a4a4a] mb-1.5">
                    📅 {event.date}
                </p>

                <p className="text-sm sm:text-base text-[#4a4a4a] mb-1.5">
                    📍 {event.location}
                </p>

                <p className="text-[#4a4a4a] my-4 sm:my-5 md:my-[18px] mb-6 sm:mb-[25px] leading-relaxed">
                    {event.description}
                </p>

                <Link
                    href={`/events/register/${index}`}
                    className="inline-block px-6 py-2.5 sm:px-7 sm:py-3 bg-[#1e90ff] text-white font-semibold rounded-lg transition-all duration-300 hover:bg-[#1e90ff]/90 hover:-translate-y-0.5 hover:shadow-md"
                >
                    Register
                </Link>
            </div>
        </div>
    );
};

export default EventCard;
