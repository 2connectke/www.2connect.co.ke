import { router } from '@inertiajs/react';
import Lenis from 'lenis';
import { useEffect } from 'react';

/** Inertia-aware smooth scrolling. Skipped entirely for reduced-motion users. */
export default function SmoothScroll() {
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
        let frame = requestAnimationFrame(function raf(time) {
            lenis.raf(time);
            frame = requestAnimationFrame(raf);
        });

        const removeListener = router.on('navigate', () => {
            lenis.scrollTo(0, { immediate: true });
        });

        return () => {
            removeListener();
            cancelAnimationFrame(frame);
            lenis.destroy();
        };
    }, []);

    return null;
}
