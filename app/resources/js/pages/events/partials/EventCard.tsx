import { Link } from "@inertiajs/react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

interface Event {
    id: number;
    title: string;
    date: string;
    time?: string;
    location: string;
    organizer?: string;
    image: string;
    price?: string | null;
    badge?: string | null;
}

interface EventCardProps {
    event: Event;
    index: number;
}

const EventCard = ({ event, index }: EventCardProps) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Price Badge */}
                {event.price && (
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                        <span className="text-[#e63946] font-bold text-sm">{event.badge || 'KES'}</span>
                        <span className="text-slate-800 font-bold text-sm ml-1">{event.price}</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="font-bold text-slate-800 text-lg mb-4 line-clamp-2 leading-snug group-hover:text-[#1e90ff] transition-colors">
                    {event.title}
                </h3>

                {/* Event Meta */}
                <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-slate-600 text-sm">
                        <Calendar className="w-4 h-4 text-[#1e90ff]" />
                        <span>{event.date}</span>
                        {event.time && <span className="text-slate-400">• {event.time}</span>}
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 text-sm">
                        <MapPin className="w-4 h-4 text-[#1e90ff]" />
                        <span className="line-clamp-1">{event.location}</span>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="relative group/tooltip">
                        <img
                            src="/assets/images/connect_logo.png"
                            alt="2Connect"
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            Organized by 2Connect
                        </div>
                    </div>

                    <Link
                        href={`/events/register/${event.id || index}`}
                        className="group/btn flex items-center gap-2 px-5 py-2 border-2 border-[#1e90ff] text-[#1e90ff] rounded-lg font-semibold text-sm hover:bg-[#1e90ff] hover:text-white transition-all duration-300"
                    >
                        Register
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
