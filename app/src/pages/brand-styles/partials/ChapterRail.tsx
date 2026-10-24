import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { chapters } from './BrandHero';

/**
 * Floating chapter navigation, shown once the hero is scrolled past. Desktop
 * gets a numbered rail on the right (hover or focus a number to see its
 * chapter); smaller screens get a single back-to-top button.
 */
const ChapterRail = () => {
    const [visible, setVisible] = useState(false);
    const [active, setActive] = useState<string | null>(null);

    useEffect(() => {
        const update = () =>
            setVisible(window.scrollY > window.innerHeight * 0.6);

        update();
        window.addEventListener('scroll', update, { passive: true });

        return () => window.removeEventListener('scroll', update);
    }, []);

    // The active chapter is the one crossing the middle of the screen.
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { rootMargin: '-50% 0px -50% 0px' },
        );

        chapters.forEach(({ id }) => {
            const section = document.getElementById(id);

            if (section) {
                observer.observe(section);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <nav
                aria-label="Jump to chapter"
                className={cn(
                    'fixed top-1/2 right-3 z-[900] hidden -translate-y-1/2 transition-[opacity,translate] duration-700 ease-out-expo lg:block',
                    !visible && 'pointer-events-none translate-x-4 opacity-0',
                )}
            >
                <ol className="flex list-none flex-col gap-2.5">
                    {chapters.map((chapter, index) => {
                        const isActive = active === chapter.id;

                        return (
                            <li key={chapter.id}>
                                <a
                                    href={`#${chapter.id}`}
                                    aria-current={
                                        isActive ? 'location' : undefined
                                    }
                                    tabIndex={visible ? undefined : -1}
                                    className={cn(
                                        'group relative grid size-11 place-items-center rounded-full border font-display text-sm font-bold shadow-[0_10px_25px_-12px_rgba(11,18,54,0.45)] transition-colors duration-500 ease-out-expo',
                                        isActive
                                            ? 'border-sun bg-ink text-white'
                                            : 'border-ink/10 bg-paper text-ink hover:border-ink hover:bg-ink hover:text-white focus-visible:border-ink focus-visible:bg-ink focus-visible:text-white',
                                    )}
                                >
                                    {index + 1}
                                    <span className="pointer-events-none absolute top-1/2 right-full mr-3 translate-x-2 -translate-y-1/2 rounded-full bg-ink px-3.5 py-2 font-sans text-sm font-medium whitespace-nowrap text-white opacity-0 shadow-[0_10px_25px_-12px_rgba(11,18,54,0.45)] transition-[opacity,translate] duration-500 ease-out-expo group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
                                        {chapter.label}
                                    </span>
                                </a>
                            </li>
                        );
                    })}
                </ol>
            </nav>

            <a
                href="#top"
                aria-label="Back to top"
                tabIndex={visible ? undefined : -1}
                className={cn(
                    'fixed right-4 bottom-4 z-[900] grid size-12 place-items-center rounded-full bg-sun text-ink shadow-[0_15px_35px_-15px_rgba(11,18,54,0.55)] transition-[opacity,translate,background-color] duration-700 ease-out-expo hover:bg-sun-deep lg:hidden',
                    !visible && 'pointer-events-none translate-y-4 opacity-0',
                )}
            >
                <ArrowUp size={20} />
            </a>
        </>
    );
};

export default ChapterRail;
