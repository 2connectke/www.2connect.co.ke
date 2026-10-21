import { Calendar, Clock, MapPin } from 'lucide-react';
import ButtonLink from '@/components/site/button-link';
import { Reveal } from '@/components/site/reveal';
import type { SiteEvent } from '@/data/site';

/** Lead event: a solid ink panel beside a full height photo. */
const FeaturedEvent = ({ event }: { event: SiteEvent }) => {
    return (
        <Reveal y={60} className="px-3 sm:px-5">
            <article className="group grid overflow-hidden rounded-[32px] bg-ink text-white lg:min-h-[640px] lg:grid-cols-12">
                <div className="relative aspect-[4/3] overflow-hidden lg:order-2 lg:col-span-7 lg:aspect-auto">
                    <img
                        src={event.image}
                        style={{ objectPosition: event.imagePosition }}
                        alt={event.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out-expo group-hover:scale-105"
                    />
                    <span className="absolute top-5 left-5 rounded-full bg-sun px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-ink uppercase sm:top-7 sm:left-7">
                        Featured
                    </span>
                </div>

                <div className="flex flex-col justify-between gap-10 p-7 sm:p-12 lg:col-span-5 lg:p-14">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide">
                            {event.category}
                        </span>
                        <span className="rounded-full bg-azure px-4 py-1.5 text-xs font-semibold tracking-wide">
                            #ShowUpKE
                        </span>
                    </div>

                    <div>
                        <div className="flex items-end gap-4">
                            <span className="font-display text-[clamp(5rem,9vw,8rem)] leading-[0.8] font-bold tracking-[-0.05em] text-sun">
                                {event.day}
                            </span>
                            <span className="pb-2 text-sm font-semibold tracking-[0.25em] text-white/70 uppercase">
                                {event.month}
                            </span>
                        </div>
                        <h2 className="mt-6 text-display-md">{event.title}</h2>
                        <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75">
                            {event.description}
                        </p>

                        <ul className="mt-8 flex flex-col gap-3 text-sm text-white/80">
                            <li className="flex items-center gap-2">
                                <Calendar size={16} className="text-sun" />
                                {event.date}
                            </li>
                            {event.time && (
                                <li className="flex items-center gap-2">
                                    <Clock size={16} className="text-sun" />
                                    {event.time}
                                </li>
                            )}
                            <li className="flex items-center gap-2">
                                <MapPin size={16} className="text-sun" />
                                {event.location}
                            </li>
                        </ul>

                        <ButtonLink href="/contact" className="mt-10">
                            Save my spot
                        </ButtonLink>
                    </div>
                </div>
            </article>
        </Reveal>
    );
};

export default FeaturedEvent;
