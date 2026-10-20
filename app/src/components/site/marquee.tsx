import { Fragment } from 'react';
import { cn } from '@/lib/utils';

/** Endless horizontal ticker. Items are rendered twice so the loop is seamless. */
export default function Marquee({
    items,
    className,
    itemClassName,
    duration = 40,
}: {
    items: string[];
    className?: string;
    itemClassName?: string;
    duration?: number;
}) {
    const row = (hidden: boolean) => (
        <div
            className="flex shrink-0 items-center"
            aria-hidden={hidden || undefined}
        >
            {items.map((item, index) => (
                <Fragment key={`${item}-${index}`}>
                    <span className={cn('px-6 md:px-10', itemClassName)}>
                        {item}
                    </span>
                    <span className="relative flex h-3 w-6 shrink-0">
                        <span className="absolute left-0 size-3 rounded-full bg-sun" />
                        <span className="absolute right-0 size-3 rounded-full bg-azure" />
                    </span>
                </Fragment>
            ))}
        </div>
    );

    return (
        <div className={cn('flex overflow-hidden', className)}>
            <div
                className="flex w-max animate-marquee hover:[animation-play-state:paused]"
                style={
                    {
                        '--marquee-duration': `${duration}s`,
                    } as React.CSSProperties
                }
            >
                {row(false)}
                {row(true)}
            </div>
        </div>
    );
}
