import { ArrowUpRight, Calendar, MapPin } from 'lucide-react';
import type { SiteEvent } from '@/data/site';
import { Link } from '@/lib/router';

const EventCard = ({ event }: { event: SiteEvent }) => {
    return (
        <article className="group flex h-full flex-col">
            <Link href="/contact" className="flex h-full flex-col">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] bg-ink">
                    <img
                        src={event.image}
                        alt={event.title}
                        className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out-expo group-hover:scale-110"
                    />
                    <div className="absolute top-5 left-5 rounded-2xl bg-paper px-4 py-3 text-center leading-none text-ink">
                        <div className="font-display text-3xl font-bold tracking-tight">
                            {event.day}
                        </div>
                        <div className="mt-1 text-xs font-semibold tracking-[0.2em] uppercase">
                            {event.month}
                        </div>
                    </div>
                    <span className="absolute top-5 right-5 rounded-full bg-ink px-3 py-1.5 text-xs font-semibold tracking-wide text-white">
                        {event.category}
                    </span>
                    <span className="absolute right-5 bottom-5 grid size-12 translate-y-3 place-items-center rounded-full bg-sun text-ink opacity-0 transition-all duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight size={20} />
                    </span>
                </div>

                <div className="flex flex-1 flex-col pt-6">
                    <h3 className="font-display text-[1.75rem] leading-[1.05] font-bold tracking-tight text-ink">
                        {event.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-body">
                        {event.description}
                    </p>
                    <div className="mt-auto flex flex-col gap-2 pt-5 text-sm text-body sm:flex-row sm:flex-wrap sm:gap-x-6">
                        <span className="flex items-center gap-2">
                            <Calendar size={15} className="text-sun-deep" />
                            {event.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <MapPin size={15} className="text-sun-deep" />
                            {event.location}
                        </span>
                    </div>
                </div>
            </Link>
        </article>
    );
};

export default EventCard;
