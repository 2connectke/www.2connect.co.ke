import { animate, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const format = new Intl.NumberFormat('en-KE');

/** Counts from zero to `value` the first time it scrolls into view. */
export default function CountUp({
    value,
    suffix = '',
    duration = 2.2,
}: {
    value: number;
    suffix?: string;
    duration?: number;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: '-40px' });
    const reduce = useReducedMotion();
    const [display, setDisplay] = useState(reduce ? value : 0);

    useEffect(() => {
        if (!inView || reduce) {
            return;
        }

        const controls = animate(0, value, {
            duration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (latest) => setDisplay(Math.round(latest)),
        });

        return () => controls.stop();
    }, [inView, reduce, value, duration]);

    return (
        <span ref={ref} className="tabular-nums">
            {format.format(display)}
            {suffix}
        </span>
    );
}
