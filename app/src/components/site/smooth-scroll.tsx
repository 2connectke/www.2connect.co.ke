import Lenis from 'lenis';
import { useEffect } from 'react';
import { onNavigate } from '@/lib/router';

/** Smooth scrolling that jumps to the top on page change. Skipped entirely for reduced-motion users. */
export default function SmoothScroll() {
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        // anchors: in-page "#section" links glide there, stopping below the navbar.
        const lenis = new Lenis({
            duration: 1.15,
            smoothWheel: true,
            anchors: { offset: -80 },
        });
        let frame = requestAnimationFrame(function raf(time) {
            lenis.raf(time);
            frame = requestAnimationFrame(raf);
        });

        const removeListener = onNavigate(() => {
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
