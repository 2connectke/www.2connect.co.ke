import { Link } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Camera, Expand } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';
import JoinCta from '@/components/site/join-cta';
import PageHero from '@/components/site/page-hero';
import { gallery } from '@/data/site';
import Lightbox from './partials/Lightbox';

const EASE = [0.16, 1, 0.3, 1] as const;

// Mosaic on large screens. Photos are laid out in groups of five that fill three
// rows exactly (one big feature, then 5 + 5, then 6 + 6). A shorter final group
// gets even widths so there are never gaps.
const groupSpans = [
    'lg:col-span-7 lg:row-span-2 sm:col-span-2 sm:row-span-2',
    'lg:col-span-5',
    'lg:col-span-5',
    'lg:col-span-6',
    'lg:col-span-6',
];
const remainderSpans: Record<number, string> = {
    1: 'lg:col-span-12 sm:col-span-2',
    2: 'lg:col-span-6',
    3: 'lg:col-span-4',
    4: 'lg:col-span-6',
};

function spanFor(index: number, total: number) {
    const groupStart = index - (index % 5);
    const remaining = total - groupStart;

    return remaining >= 5 ? groupSpans[index % 5] : remainderSpans[remaining];
}

export default function Gallery() {
    const categories = useMemo(
        () => ['All', ...Array.from(new Set(gallery.map((item) => item.category)))],
        [],
    );
    const [category, setCategory] = useState('All');
    const [open, setOpen] = useState<number | null>(null);

    const items = useMemo(
        () =>
            category === 'All'
                ? gallery
                : gallery.filter((item) => item.category === category),
        [category],
    );

    const close = useCallback(() => setOpen(null), []);

    return (
        <>

            <PageHero
                label="Gallery"
                title={['Small acts,', 'big mtaa energy.']}
                intro={
                    <>
                        Cleanups, workshops, trainings and meetups. This is
                        what it looks like when young Kenyans show up for each
                        other. <span className="font-semibold text-ink">#MtaaNiWetu</span>
                    </>
                }
            >
                <div className="flex flex-wrap gap-2" role="group" aria-label="Filter photos">
                    {categories.map((name) => (
                        <button
                            key={name}
                            type="button"
                            onClick={() => setCategory(name)}
                            aria-pressed={category === name}
                            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                                category === name
                                    ? 'bg-ink text-white'
                                    : 'border border-ink/15 text-ink/70 hover:border-ink hover:text-ink'
                            }`}
                        >
                            {name}
                        </button>
                    ))}
                </div>
            </PageHero>

            <section className="bg-paper pb-28 sm:pb-36">
                <div className="px-3 sm:px-5">
                    <motion.ul
                        layout
                        className="grid auto-rows-[340px] grid-cols-1 gap-3 sm:grid-cols-2 lg:auto-rows-[320px] lg:grid-cols-12"
                    >
                        <AnimatePresence mode="popLayout">
                            {items.map((item, index) => (
                                <motion.li
                                    layout
                                    key={item.src}
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.7, ease: EASE, delay: index * 0.04 }}
                                    className={spanFor(index, items.length)}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpen(index)}
                                        className="group relative block h-full w-full overflow-hidden rounded-[28px] bg-sand text-left outline-none focus-visible:ring-4 focus-visible:ring-sun"
                                    >
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out-expo group-hover:scale-105"
                                        />
                                        <span className="absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-paper text-ink opacity-0 transition-all duration-500 ease-out-expo group-hover:opacity-100 group-focus-visible:opacity-100">
                                            <Expand size={18} />
                                        </span>
                                        <span className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-2xl bg-paper px-4 py-3 text-ink">
                                            <span className="block text-[0.7rem] font-semibold tracking-[0.18em] text-ink/60 uppercase">
                                                {item.category} · {item.place}
                                            </span>
                                            <span className="mt-1 block font-display text-lg leading-tight font-bold tracking-tight">
                                                {item.title}
                                            </span>
                                        </span>
                                    </button>
                                </motion.li>
                            ))}

                            {/* Invite people to add their own moments */}
                            <motion.li
                                layout
                                key="share"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.7, ease: EASE }}
                                className="sm:col-span-2 lg:col-span-12"
                            >
                                <Link
                                    href="/contact"
                                    className="group flex h-full flex-col justify-between gap-6 rounded-[28px] bg-sun-soft p-8 text-ink transition-colors duration-500 hover:bg-sun sm:p-10 lg:flex-row lg:items-center"
                                >
                                    <div className="flex items-start gap-5">
                                        <span className="grid size-14 shrink-0 place-items-center rounded-full bg-ink text-sun">
                                            <Camera size={22} />
                                        </span>
                                        <div>
                                            <h2 className="font-display text-[clamp(1.8rem,3.4vw,3rem)] leading-none font-bold tracking-[-0.03em]">
                                                Were you there? Send us your photos.
                                            </h2>
                                            <p className="mt-3 max-w-xl text-body group-hover:text-ink">
                                                Tag us with #MtaaNiWetu or send them our way, and
                                                your moment could end up right here.
                                            </p>
                                        </div>
                                    </div>
                                    <span className="inline-flex items-center gap-3 self-start rounded-full bg-ink py-1.5 pr-1.5 pl-6 font-semibold whitespace-nowrap text-white lg:self-auto">
                                        Share your photos
                                        <span className="grid size-10 place-items-center rounded-full bg-sun text-ink">
                                            <ArrowUpRight size={18} />
                                        </span>
                                    </span>
                                </Link>
                            </motion.li>
                        </AnimatePresence>
                    </motion.ul>
                </div>
            </section>

            <Lightbox items={items} index={open} onClose={close} onChange={setOpen} />

            <JoinCta
                title={['Your next photo', 'could be here.']}
                body="Every picture on this page started with someone deciding to show up. Come to the next one, bring a friend, and let’s make some memories that matter."
            />
        </>
    );
}
