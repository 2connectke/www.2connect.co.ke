import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import Eyebrow from '@/components/site/eyebrow';
import JoinCta from '@/components/site/join-cta';
import PageHero from '@/components/site/page-hero';
import { events } from '@/data/site';
import EventCard from './partials/EventCard';
import EventFilters from './partials/EventFilters';
import FeaturedEvent from './partials/FeaturedEvent';

const EASE = [0.16, 1, 0.3, 1] as const;

const categories = Array.from(new Set(events.map((event) => event.category)));

export default function Events() {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('All');

    const filtered = useMemo(() => {
        const needle = query.trim().toLowerCase();

        return events.filter((event) => {
            const matchesCategory =
                category === 'All' || event.category === category;
            const matchesQuery =
                !needle ||
                [event.title, event.location, event.category, event.description]
                    .join(' ')
                    .toLowerCase()
                    .includes(needle);

            return matchesCategory && matchesQuery;
        });
    }, [query, category]);

    const [featured, ...rest] = filtered;

    const reset = () => {
        setQuery('');
        setCategory('All');
    };

    return (
        <>
            <PageHero
                label="Events"
                title={[
                    'Your weekend,',
                    <span className="text-azure-deep">sorted.</span>,
                ]}
                intro="Same energy, same mission, new friends. Cleanups, workshops, trainings and meetups where you get your hands dirty and meet people who care like you do."
            >
                <EventFilters
                    query={query}
                    onQueryChange={setQuery}
                    categories={categories}
                    category={category}
                    onCategoryChange={setCategory}
                />
            </PageHero>

            <section className="bg-sand py-20 sm:py-28">
                <AnimatePresence mode="wait">
                    {featured ? (
                        <motion.div
                            key={`${category}-${query}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5, ease: EASE }}
                        >
                            <FeaturedEvent event={featured} />

                            {rest.length > 0 && (
                                <div className="container-wide mt-24 sm:mt-28">
                                    <div className="flex items-end justify-between gap-6 border-b border-ink/10 pb-8">
                                        <div>
                                            <Eyebrow>More to join</Eyebrow>
                                            <h2 className="mt-5 text-display-md text-ink">
                                                Coming up
                                            </h2>
                                            <p className="mt-3 font-display text-lg font-semibold text-sun-deep">
                                                Kuja ujuane na wasee wa vision.
                                            </p>
                                        </div>
                                        <span className="shrink-0 font-display text-lg font-semibold whitespace-nowrap text-ink/50">
                                            {rest.length}{' '}
                                            {rest.length === 1
                                                ? 'event'
                                                : 'events'}
                                        </span>
                                    </div>

                                    <div className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2">
                                        {rest.map((event, index) => (
                                            <motion.div
                                                key={event.id}
                                                initial={{ opacity: 0, y: 40 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                viewport={{
                                                    once: true,
                                                    margin: '-60px',
                                                }}
                                                transition={{
                                                    duration: 0.9,
                                                    ease: EASE,
                                                    delay: (index % 2) * 0.08,
                                                }}
                                            >
                                                <EventCard event={event} />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: EASE }}
                            className="container-wide"
                        >
                            <div className="flex flex-col items-center rounded-[32px] bg-paper px-6 py-24 text-center">
                                <span className="relative flex h-10 w-16">
                                    <span className="absolute left-0 size-10 rounded-full bg-sun" />
                                    <span className="absolute right-0 size-10 rounded-full bg-azure" />
                                </span>
                                <h2 className="mt-8 font-display text-3xl font-bold tracking-tight text-ink">
                                    Nothing here yet.
                                </h2>
                                <p className="mt-3 max-w-md text-body">
                                    Try a different word or category. We add new
                                    things to do all the time, so check back
                                    soon.
                                </p>
                                <button
                                    type="button"
                                    onClick={reset}
                                    className="mt-8 h-12 rounded-full bg-ink px-6 text-sm font-semibold text-white transition-colors hover:bg-navy"
                                >
                                    Clear filters
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            <JoinCta
                title={['Got a cause?', 'Bring it here.']}
                body="Running something in your community and need people who will actually show up? Partner with us and we will bring the hands, the energy and the follow through."
            />
        </>
    );
}
