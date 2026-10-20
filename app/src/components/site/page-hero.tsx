import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { ReactNode } from 'react';
import { Link } from '@/lib/router';
import Eyebrow from './eyebrow';
import { RevealLines } from './reveal';

const EASE = [0.16, 1, 0.3, 1] as const;

interface PageHeroProps {
    /** Breadcrumb label for the current page. */
    label: string;
    /** Headline, one entry per line. */
    title: ReactNode[];
    intro?: ReactNode;
    /** Full bleed photo band under the headline. */
    image?: string;
    imageAlt?: string;
    /** CSS object-position for the photo, to keep faces in frame. */
    imagePosition?: string;
    children?: ReactNode;
}

/** Shared hero for inner pages: oversized headline, intro, and a parallax photo band. */
export default function PageHero({
    label,
    title,
    intro,
    image,
    imageAlt = '',
    imagePosition = 'center',
    children,
}: PageHeroProps) {
    const bandRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: bandRef,
        offset: ['start end', 'end start'],
    });
    const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

    return (
        <section className="relative overflow-hidden bg-paper pt-32 sm:pt-40">
            <div className="relative container-wide">
                <motion.nav
                    aria-label="Breadcrumb"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: EASE }}
                    className="mb-8 flex items-center gap-3"
                >
                    <Eyebrow>
                        <Link
                            href="/"
                            className="transition-colors hover:text-ink"
                        >
                            Home
                        </Link>
                        <span className="text-ink/30">/</span>
                        <span className="text-ink">{label}</span>
                    </Eyebrow>
                </motion.nav>

                <div className="grid items-end gap-10 lg:grid-cols-12">
                    <RevealLines
                        as="h1"
                        immediate
                        delay={0.1}
                        lines={title}
                        className="text-display-xl text-ink lg:col-span-8"
                    />
                    {intro && (
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: EASE, delay: 0.5 }}
                            className="text-lg leading-relaxed text-body lg:col-span-4 lg:pb-3"
                        >
                            {intro}
                        </motion.div>
                    )}
                </div>

                {children && (
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: EASE, delay: 0.7 }}
                        className="mt-12"
                    >
                        {children}
                    </motion.div>
                )}
            </div>

            {image ? (
                <motion.div
                    ref={bandRef}
                    initial={{ clipPath: 'inset(18% 6% 0% 6% round 32px)' }}
                    animate={{ clipPath: 'inset(0% 0% 0% 0% round 0px)' }}
                    transition={{ duration: 1.6, ease: EASE, delay: 0.4 }}
                    className="relative mt-16 h-[52vh] min-h-[340px] overflow-hidden sm:mt-20 md:h-[68vh]"
                >
                    <motion.img
                        src={image}
                        alt={imageAlt}
                        style={{ y: imageY, objectPosition: imagePosition }}
                        className="absolute inset-x-0 -top-[12%] h-[124%] w-full object-cover"
                    />
                </motion.div>
            ) : (
                <div className="h-20 sm:h-28" />
            )}
        </section>
    );
}
