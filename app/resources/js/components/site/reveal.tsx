import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const EASE = [0.16, 1, 0.3, 1] as const;

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    y?: number;
    as?: 'div' | 'li' | 'p' | 'span';
}

/** Fades and lifts its children into place the first time they scroll into view. */
export function Reveal({
    children,
    className,
    delay = 0,
    y = 32,
    as = 'div',
}: RevealProps) {
    const Component = motion[as];

    return (
        <Component
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: EASE, delay }}
        >
            {children}
        </Component>
    );
}

interface RevealLinesProps {
    lines: ReactNode[];
    className?: string;
    lineClassName?: string;
    delay?: number;
    /** Animate on mount instead of on scroll (for heroes above the fold). */
    immediate?: boolean;
    as?: 'h1' | 'h2' | 'h3' | 'p';
}

/** Masked line-by-line headline reveal. */
export function RevealLines({
    lines,
    className,
    lineClassName,
    delay = 0,
    immediate = false,
    as = 'h2',
}: RevealLinesProps) {
    const Tag = as;
    const trigger = immediate
        ? { animate: 'shown' }
        : {
              whileInView: 'shown',
              viewport: { once: true, margin: '-60px' },
          };

    return (
        <Tag className={className}>
            <motion.span
                className="block"
                initial="hidden"
                {...trigger}
                transition={{ staggerChildren: 0.09, delayChildren: delay }}
            >
                {lines.map((line, index) => (
                    <span
                        key={index}
                        className={cn(
                            'block overflow-hidden pb-[0.08em]',
                            lineClassName,
                        )}
                    >
                        <motion.span
                            className="block"
                            variants={{
                                hidden: { y: '105%' },
                                shown: {
                                    y: '0%',
                                    transition: { duration: 1.1, ease: EASE },
                                },
                            }}
                        >
                            {line}
                        </motion.span>
                        {/* Keeps words apart for search engines and screen readers */}
                        {index < lines.length - 1 && ' '}
                    </span>
                ))}
            </motion.span>
        </Tag>
    );
}
