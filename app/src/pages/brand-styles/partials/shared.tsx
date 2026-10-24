import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy } from 'lucide-react';
import { createContext, useContext, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import Eyebrow from '@/components/site/eyebrow';
import { RevealLines } from '@/components/site/reveal';
import { cn } from '@/lib/utils';

const EASE = [0.16, 1, 0.3, 1] as const;

type CopyFn = (value: string) => void;

const CopyContext = createContext<CopyFn>(() => {});

/** Copies with the Clipboard API, falling back to a hidden textarea. */
async function writeClipboard(value: string) {
    try {
        await navigator.clipboard.writeText(value);
    } catch {
        const area = document.createElement('textarea');
        area.value = value;
        area.setAttribute('readonly', '');
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        area.remove();
    }
}

/** Gives every copy button on the page one shared "Copied" toast. */
export function CopyProvider({ children }: { children: ReactNode }) {
    const [copied, setCopied] = useState<string | null>(null);
    const timer = useRef<number | undefined>(undefined);

    const copy: CopyFn = (value) => {
        void writeClipboard(value).then(() => {
            setCopied(value);
            window.clearTimeout(timer.current);
            timer.current = window.setTimeout(() => setCopied(null), 1800);
        });
    };

    return (
        <CopyContext value={copy}>
            {children}
            <p className="sr-only" aria-live="polite">
                {copied ? `Copied ${copied}` : ''}
            </p>
            <AnimatePresence>
                {copied && (
                    <motion.div
                        key={copied}
                        initial={{ opacity: 0, y: 16, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.5, ease: EASE }}
                        className="fixed bottom-6 left-1/2 z-[1100] flex max-w-[90vw] -translate-x-1/2 items-center gap-3 rounded-full bg-ink py-2 pr-5 pl-2 text-sm font-semibold text-white shadow-[0_20px_40px_-20px_rgba(11,18,54,0.6)]"
                        aria-hidden
                    >
                        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-sun text-ink">
                            <Check size={16} />
                        </span>
                        <span className="truncate">
                            Copied{' '}
                            <span className="font-mono font-normal text-sun">
                                {copied}
                            </span>
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </CopyContext>
    );
}

export const useCopy = () => useContext(CopyContext);

/** A labelled value that copies itself when clicked. */
export function CopyChip({
    label,
    value,
    className,
}: {
    label: string;
    value: string;
    className?: string;
}) {
    const copy = useCopy();

    return (
        <button
            type="button"
            onClick={() => copy(value)}
            title={`Copy ${value}`}
            className={cn(
                'group flex w-full cursor-copy items-center gap-3 rounded-xl px-3 py-2 text-left transition-colors duration-300 hover:bg-paper focus-visible:ring-2 focus-visible:ring-azure focus-visible:outline-none',
                className,
            )}
        >
            <span className="w-16 shrink-0 text-[0.68rem] font-semibold tracking-[0.16em] text-ink/45 uppercase">
                {label}
            </span>
            <span className="min-w-0 flex-1 truncate font-mono text-[0.8rem] text-ink">
                {value}
            </span>
            <Copy
                size={14}
                className="shrink-0 text-ink/30 transition-colors group-hover:text-ink"
            />
        </button>
    );
}

/** A code snippet with a copy button. */
export function Snippet({
    code,
    tone = 'light',
    className,
}: {
    code: string;
    tone?: 'light' | 'dark';
    className?: string;
}) {
    const copy = useCopy();

    return (
        <div
            className={cn(
                'group relative rounded-2xl font-mono text-[0.8rem] leading-relaxed',
                tone === 'light'
                    ? 'bg-paper text-ink ring-1 ring-ink/10'
                    : 'bg-white/5 text-white/85 ring-1 ring-white/10',
                className,
            )}
        >
            <pre className="overflow-x-auto px-4 py-3 pr-14 whitespace-pre-wrap">
                {code}
            </pre>
            <button
                type="button"
                onClick={() => copy(code)}
                aria-label="Copy code"
                className={cn(
                    'absolute top-2 right-2 grid size-8 cursor-copy place-items-center rounded-full transition-colors duration-300',
                    tone === 'light'
                        ? 'bg-white text-ink ring-1 ring-ink/10 hover:bg-sun'
                        : 'bg-white/10 text-white hover:bg-sun hover:text-ink',
                )}
            >
                <Copy size={14} />
            </button>
        </div>
    );
}

const tones = {
    paper: 'bg-paper text-ink',
    white: 'bg-white text-ink',
    sand: 'bg-sand text-ink',
    ink: 'bg-ink text-white',
};

/** One chapter of the guide, laid out like every other section on the site. */
export function Section({
    id,
    number,
    eyebrow,
    title,
    intro,
    tone = 'paper',
    children,
}: {
    id: string;
    number: string;
    eyebrow: string;
    title: ReactNode[];
    intro?: ReactNode;
    tone?: keyof typeof tones;
    children: ReactNode;
}) {
    const dark = tone === 'ink';

    return (
        <section
            id={id}
            className={cn('scroll-mt-20 py-28 sm:py-36', tones[tone])}
        >
            <div className="container-wide">
                <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-7">
                        <Eyebrow tone={dark ? 'light' : 'dark'}>
                            {number} · {eyebrow}
                        </Eyebrow>
                        <RevealLines
                            className="mt-6 text-display-md"
                            lines={title}
                        />
                    </div>
                    {intro && (
                        <div
                            className={cn(
                                'text-lg leading-relaxed lg:col-span-5 lg:pb-1',
                                dark ? 'text-white/65' : 'text-body',
                            )}
                        >
                            {intro}
                        </div>
                    )}
                </div>
                <div className="mt-14 sm:mt-20">{children}</div>
            </div>
        </section>
    );
}

/** Small "Do" or "Don't" card. */
export function Rule({
    kind,
    children,
}: {
    kind: 'do' | 'dont';
    children: ReactNode;
}) {
    return (
        <div
            className={cn(
                'rounded-[22px] p-5 text-[0.95rem] leading-relaxed',
                kind === 'do'
                    ? 'bg-azure-soft text-ink'
                    : 'bg-sun-soft text-ink',
            )}
        >
            <span
                className={cn(
                    'mb-2 inline-block rounded-full px-3 py-1 text-[0.68rem] font-bold tracking-[0.16em] uppercase',
                    kind === 'do'
                        ? 'bg-azure-deep text-white'
                        : 'bg-ink text-white',
                )}
            >
                {kind === 'do' ? 'Do' : 'Don’t'}
            </span>
            <p>{children}</p>
        </div>
    );
}
