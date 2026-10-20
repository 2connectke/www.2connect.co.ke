import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';

/** Logo mark + live-type wordmark, so it stays crisp and can flip to white on dark. */
export default function Brand({
    tone = 'dark',
    className,
    onClick,
}: {
    tone?: 'dark' | 'light';
    className?: string;
    onClick?: () => void;
}) {
    return (
        <Link
            href="/"
            aria-label="2Connect home"
            onClick={onClick}
            className={cn('group inline-flex items-center gap-2.5', className)}
        >
            <img
                src="/assets/images/connect_logo.png"
                alt=""
                className="h-9 w-auto transition-transform duration-700 ease-out-expo group-hover:rotate-[-8deg] group-hover:scale-105"
            />
            <span
                className={cn(
                    'font-display text-[1.35rem] leading-none font-bold tracking-[-0.03em]',
                    tone === 'dark' ? 'text-ink' : 'text-white',
                )}
            >
                2Connect
            </span>
        </Link>
    );
}
