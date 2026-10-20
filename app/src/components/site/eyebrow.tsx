import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/** Small uppercase label with the brand's two-dot "connection" mark. */
export default function Eyebrow({
    children,
    className,
    tone = 'dark',
}: {
    children: ReactNode;
    className?: string;
    tone?: 'dark' | 'light';
}) {
    return (
        <span
            className={cn(
                'inline-flex items-center gap-3 text-[0.75rem] font-semibold tracking-[0.22em] uppercase',
                tone === 'dark' ? 'text-ink/70' : 'text-white/70',
                className,
            )}
        >
            <span className="relative flex h-2.5 w-[18px] shrink-0">
                <span className="absolute left-0 size-2.5 rounded-full bg-sun" />
                <span className="absolute right-0 size-2.5 rounded-full bg-azure" />
            </span>
            {children}
        </span>
    );
}
