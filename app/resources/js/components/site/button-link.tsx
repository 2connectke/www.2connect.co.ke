import { Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const variants = {
    sun: {
        base: 'bg-sun text-ink hover:bg-white',
        dot: 'bg-ink text-white',
    },
    ink: {
        base: 'bg-ink text-white hover:bg-navy',
        dot: 'bg-sun text-ink',
    },
    light: {
        base: 'bg-white text-ink hover:bg-sun',
        dot: 'bg-ink text-white',
    },
    outline: {
        base: 'border border-ink/15 text-ink hover:border-ink hover:bg-ink hover:text-white',
        dot: 'bg-ink text-white group-hover:bg-sun group-hover:text-ink',
    },
    'outline-light': {
        base: 'border border-white/25 text-white hover:border-white hover:bg-white hover:text-ink',
        dot: 'bg-white text-ink group-hover:bg-ink group-hover:text-white',
    },
};

interface ButtonLinkProps {
    href: string;
    children: ReactNode;
    variant?: keyof typeof variants;
    className?: string;
    external?: boolean;
    onClick?: () => void;
}

/** Pill CTA with a sliding arrow — the primary action style across the site. */
export default function ButtonLink({
    href,
    children,
    variant = 'sun',
    className,
    external,
    onClick,
}: ButtonLinkProps) {
    const style = variants[variant];
    const classes = cn(
        'group inline-flex items-center gap-4 rounded-full py-1.5 pr-1.5 pl-6 text-[0.95rem] font-semibold whitespace-nowrap transition-colors duration-500 ease-out-expo',
        style.base,
        className,
    );

    const content = (
        <>
            <span>{children}</span>
            <span
                className={cn(
                    'relative grid size-10 place-items-center overflow-hidden rounded-full transition-colors duration-500',
                    style.dot,
                )}
            >
                <ArrowUpRight
                    size={18}
                    className="transition-transform duration-500 ease-out-expo group-hover:translate-x-6 group-hover:-translate-y-6"
                />
                <ArrowUpRight
                    size={18}
                    className="absolute -translate-x-6 translate-y-6 transition-transform duration-500 ease-out-expo group-hover:translate-x-0 group-hover:translate-y-0"
                />
            </span>
        </>
    );

    if (external) {
        return (
            <a href={href} className={classes} onClick={onClick}>
                {content}
            </a>
        );
    }

    return (
        <Link href={href} className={classes} onClick={onClick}>
            {content}
        </Link>
    );
}
