import { Lock } from 'lucide-react';

/**
 * Closes the internal guide in place of the public footer, so the notice is
 * the very last thing on the page.
 */
const ProprietaryNotice = () => (
    <footer className="bg-ink text-white">
        <div className="container-wide flex flex-col gap-8 py-16 sm:flex-row sm:items-center sm:justify-between sm:py-20">
            <div className="flex max-w-3xl items-start gap-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-sun text-ink">
                    <Lock size={20} />
                </span>
                <div>
                    <p className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
                        Internal use only
                    </p>
                    <p className="mt-2 font-display text-xl leading-snug font-semibold tracking-tight sm:text-2xl">
                        This page and its contents are the property of 2Connect
                        and shall not be used or shared with the public.
                    </p>
                </div>
            </div>
            <p className="shrink-0 text-sm text-white/50">
                © {new Date().getFullYear()} 2Connect · Nairobi, Kenya
            </p>
        </div>
    </footer>
);

export default ProprietaryNotice;
