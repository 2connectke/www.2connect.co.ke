import {
    animate,
    motion,
    useInView,
    useMotionValue,
    useReducedMotion,
    useTransform,
} from 'framer-motion';
import { useEffect, useId, useRef } from 'react';
import { cn } from '@/lib/utils';

const EASE = [0.16, 1, 0.3, 1] as const;

// Geometry (viewBox 600 × 440). Circles meet at the centre line x = 300.
const R = 168;
const CY = 250;
const REST_A = 214;
const REST_B = 386;
const SPREAD = 96;

const confetti = [
    { cx: 64, cy: 300, r: 9, fill: 'var(--color-sun)' },
    { cx: 40, cy: 220, r: 5, fill: 'var(--color-azure)' },
    { cx: 92, cy: 392, r: 6, fill: 'var(--color-navy)' },
    { cx: 538, cy: 330, r: 9, fill: 'var(--color-azure)' },
    { cx: 566, cy: 246, r: 5, fill: 'var(--color-sun)' },
    { cx: 512, cy: 410, r: 6, fill: 'var(--color-sun)' },
    { cx: 300, cy: 30, r: 7, fill: 'var(--color-sun)' },
];

interface OverlapMarkProps {
    className?: string;
    /** Photos clipped into the left and right circles. Omit for flat colour. */
    images?: [string, string];
    /** Delay (s) before the circles glide together. */
    delay?: number;
    tone?: 'light' | 'dark';
    /** Colour of the separating ring; match it to the background behind the mark. */
    ring?: string;
    /** Render already connected, with no motion at all (like a placed image). */
    still?: boolean;
}

/**
 * The 2Connect signature: two circles — two people, two worlds — glide together
 * and the navy lens where they overlap becomes the connection.
 */
export default function OverlapMark({
    className,
    images,
    delay = 0.3,
    tone = 'light',
    ring: ringColor,
    still = false,
}: OverlapMarkProps) {
    const uid = useId().replace(/:/g, '');
    const ref = useRef<SVGSVGElement>(null);
    const inView = useInView(ref, { once: true, margin: '-40px' });
    const reduce = useReducedMotion() || still;

    // 0 = apart, 1 = connected
    const progress = useMotionValue(reduce ? 1 : 0);
    const cxA = useTransform(progress, [0, 1], [REST_A - SPREAD, REST_A]);
    const cxB = useTransform(progress, [0, 1], [REST_B + SPREAD, REST_B]);
    const imgAx = useTransform(cxA, (v) => v - R);
    const imgBx = useTransform(cxB, (v) => v - R);
    const lensOpacity = useTransform(progress, [0.35, 1], [0, 1]);
    const arc = useTransform(progress, [0, 1], [0, 1]);

    useEffect(() => {
        if (!inView || reduce) {
            return;
        }

        const controls = animate(progress, 1, {
            duration: 1.8,
            ease: EASE,
            delay,
        });

        return () => controls.stop();
    }, [inView, reduce, delay, progress]);

    const ring = ringColor ?? (tone === 'light' ? '#fbf8f3' : '#0b1236');

    return (
        <svg
            ref={ref}
            viewBox="0 0 600 440"
            className={cn('h-auto w-full overflow-visible', className)}
            role="img"
            aria-label="Two circles meeting, the 2Connect mark"
        >
            <defs>
                <clipPath id={`a-${uid}`}>
                    <motion.circle cx={cxA} cy={CY} r={R} />
                </clipPath>
                <clipPath id={`b-${uid}`}>
                    <motion.circle cx={cxB} cy={CY} r={R} />
                </clipPath>
                <mask id={`arc-${uid}`}>
                    <motion.path
                        d="M 120 120 Q 300 -20 480 120"
                        fill="none"
                        stroke="white"
                        strokeWidth="16"
                        style={{ pathLength: arc }}
                    />
                </mask>
            </defs>

            {/* Dotted arc — the line that connects them in the logo */}
            <path
                d="M 120 120 Q 300 -20 480 120"
                fill="none"
                stroke="var(--color-navy)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="0 16"
                mask={`url(#arc-${uid})`}
                opacity={tone === 'light' ? 0.9 : 0.8}
                className={tone === 'dark' ? 'stroke-white' : ''}
            />

            {confetti.map((dot, index) => (
                <motion.circle
                    key={index}
                    {...dot}
                    initial={reduce ? false : { scale: 0, opacity: 0 }}
                    animate={inView || reduce ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                        delay: delay + 0.8 + index * 0.07,
                        duration: 0.8,
                        ease: EASE,
                    }}
                    style={{ transformOrigin: `${dot.cx}px ${dot.cy}px` }}
                />
            ))}

            {/* Left circle — warm sun */}
            <motion.circle cx={cxA} cy={CY} r={R} fill="var(--color-sun)" />
            {images && (
                <motion.image
                    href={images[0]}
                    x={imgAx}
                    y={CY - R}
                    width={R * 2}
                    height={R * 2}
                    preserveAspectRatio="xMidYMid slice"
                    clipPath={`url(#a-${uid})`}
                />
            )}

            {/* Right circle — open sky */}
            <motion.circle cx={cxB} cy={CY} r={R} fill="var(--color-azure)" />
            {images && (
                <motion.image
                    href={images[1]}
                    x={imgBx}
                    y={CY - R}
                    width={R * 2}
                    height={R * 2}
                    preserveAspectRatio="xMidYMin slice"
                    clipPath={`url(#b-${uid})`}
                />
            )}

            {/* The overlap — where connection happens */}
            <motion.g style={{ opacity: lensOpacity }}>
                <g clipPath={`url(#a-${uid})`}>
                    <motion.circle
                        cx={cxB}
                        cy={CY}
                        r={R}
                        fill="var(--color-navy)"
                        stroke={ring}
                        strokeWidth="10"
                    />
                </g>
                <motion.circle
                    cx={cxA}
                    cy={CY}
                    r={R}
                    fill="none"
                    stroke={ring}
                    strokeWidth="5"
                    clipPath={`url(#b-${uid})`}
                />
                {/* Four-point spark, from the stars in the logo's speech bubbles */}
                <path
                    d="M300 214 C304 240 310 246 336 250 C310 254 304 260 300 286 C296 260 290 254 264 250 C290 246 296 240 300 214 Z"
                    fill="white"
                />
            </motion.g>
        </svg>
    );
}
