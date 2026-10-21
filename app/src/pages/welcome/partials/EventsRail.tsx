import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react';
import { useRef } from 'react';
import ButtonLink from '@/components/site/button-link';
import Eyebrow from '@/components/site/eyebrow';
import { Reveal, RevealLines } from '@/components/site/reveal';
import { events } from '@/data/site';
import { Link } from '@/lib/router';

const EventsRail = () => {
    const railRef = useRef<HTMLDivElement>(null);

    const scrollBy = (direction: 1 | -1) => {
        const rail = railRef.current;

        if (!rail) {
            return;
        }

        const card = rail.querySelector('article');
        const step = card ? card.clientWidth + 20 : rail.clientWidth * 0.8;
        rail.scrollBy({ left: direction * step, behavior: 'smooth' });
    };

    return (
        <section className="relative overflow-hidden bg-paper py-28 sm:py-36">
            <div className="container-wide flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                    <Eyebrow>
                        Come for the cause, stay for the connections.
                    </Eyebrow>
                    <RevealLines
                        className="mt-6 text-display-lg text-ink"
                        lines={['Kuja kama stranger,', 'toka kama family.']}
                    />
                </div>
                <Reveal delay={0.15} className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => scrollBy(-1)}
                        aria-label="Previous events"
                        className="grid size-14 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink hover:text-white"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button
                        type="button"
                        onClick={() => scrollBy(1)}
                        aria-label="Next events"
                        className="grid size-14 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink hover:text-white"
                    >
                        <ArrowRight size={20} />
                    </button>
                    <ButtonLink href="/events" variant="ink" className="ml-2">
                        All events
                    </ButtonLink>
                </Reveal>
            </div>

            <Reveal y={60} className="mt-14 sm:mt-16">
                <div
                    ref={railRef}
                    data-lenis-prevent-wheel
                    className="flex snap-x snap-mandatory scroll-px-[clamp(1rem,4vw,4rem)] gap-5 overflow-x-auto scroll-smooth px-[clamp(1rem,4vw,4rem)] pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {events.map((event) => (
                        <article
                            key={event.id}
                            className="group w-[82vw] shrink-0 snap-start sm:w-[440px]"
                        >
                            <Link href="/events" className="block">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-ink">
                                    <img
                                        src={event.image}
                                        style={{
                                            objectPosition: event.imagePosition,
                                        }}
                                        alt={event.title}
                                        className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out-expo group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-ink/40" />

                                    <div className="absolute top-5 left-5 rounded-2xl bg-paper px-4 py-3 text-center leading-none text-ink">
                                        <div className="font-display text-3xl font-bold tracking-tight">
                                            {event.day}
                                        </div>
                                        <div className="mt-1 text-xs font-semibold tracking-[0.2em] uppercase">
                                            {event.month}
                                        </div>
                                    </div>
                                    <span className="absolute top-5 right-5 rounded-full bg-ink/55 px-3 py-1.5 text-xs font-semibold tracking-wide text-white">
                                        {event.category}
                                    </span>

                                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                                        <h3 className="font-display text-[1.75rem] leading-[1.05] font-bold tracking-tight">
                                            {event.title}
                                        </h3>
                                        <p className="mt-3 flex items-center gap-2 text-sm text-white/75">
                                            <MapPin
                                                size={15}
                                                className="text-sun"
                                            />
                                            {event.location}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </Reveal>
        </section>
    );
};

export default EventsRail;
