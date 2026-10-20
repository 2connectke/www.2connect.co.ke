import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, MapPin, X } from 'lucide-react';
import { useEffect } from 'react';
import type { GalleryItem } from '@/data/site';

const EASE = [0.16, 1, 0.3, 1] as const;

interface LightboxProps {
    items: GalleryItem[];
    index: number | null;
    onClose: () => void;
    onChange: (index: number) => void;
}

/** Full screen photo viewer. Arrow keys move between photos, Escape closes. */
export default function Lightbox({
    items,
    index,
    onClose,
    onChange,
}: LightboxProps) {
    const isOpen = index !== null;
    const item = index !== null ? items[index] : null;

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const step = (direction: number) =>
            onChange(((index ?? 0) + direction + items.length) % items.length);

        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            } else if (event.key === 'ArrowRight') {
                step(1);
            } else if (event.key === 'ArrowLeft') {
                step(-1);
            }
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [isOpen, index, items.length, onChange, onClose]);

    const go = (direction: number) =>
        onChange(((index ?? 0) + direction + items.length) % items.length);

    return (
        <AnimatePresence>
            {item && (
                <motion.div
                    data-lenis-prevent
                    role="dialog"
                    aria-modal="true"
                    aria-label={item.title}
                    className="fixed inset-0 z-[1100] flex flex-col bg-ink text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="flex items-center justify-between px-[clamp(1rem,4vw,4rem)] py-5">
                        <span className="text-sm text-white/60 tabular-nums">
                            {(index ?? 0) + 1} / {items.length}
                        </span>
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close gallery"
                            className="grid size-12 place-items-center rounded-full bg-white text-ink transition-colors hover:bg-sun"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="relative flex min-h-0 flex-1 items-center justify-center px-[clamp(1rem,4vw,4rem)]">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={item.src}
                                src={item.src}
                                alt={item.title}
                                className="max-h-full max-w-full rounded-[20px] object-contain"
                                initial={{ opacity: 0, scale: 0.97 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.97 }}
                                transition={{ duration: 0.5, ease: EASE }}
                            />
                        </AnimatePresence>

                        {items.length > 1 && (
                            <>
                                <button
                                    type="button"
                                    onClick={() => go(-1)}
                                    aria-label="Previous photo"
                                    className="absolute left-[clamp(1rem,4vw,4rem)] grid size-12 place-items-center rounded-full bg-white/10 transition-colors hover:bg-sun hover:text-ink sm:size-14"
                                >
                                    <ArrowLeft size={20} />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => go(1)}
                                    aria-label="Next photo"
                                    className="absolute right-[clamp(1rem,4vw,4rem)] grid size-12 place-items-center rounded-full bg-white/10 transition-colors hover:bg-sun hover:text-ink sm:size-14"
                                >
                                    <ArrowRight size={20} />
                                </button>
                            </>
                        )}
                    </div>

                    <div className="px-[clamp(1rem,4vw,4rem)] py-6 sm:py-8">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <span className="text-xs font-semibold tracking-[0.2em] text-sun uppercase">
                                    {item.category}
                                </span>
                                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                                    {item.title}
                                </h2>
                                <p className="mt-2 max-w-xl text-white/70">
                                    {item.caption}
                                </p>
                            </div>
                            <p className="flex items-center gap-2 text-sm text-white/60">
                                <MapPin size={15} className="text-sun" />
                                {item.place}
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
