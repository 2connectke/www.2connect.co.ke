import type { ReactNode } from 'react';

/** A calm, centred message for empty, missing and failed states. */
const Notice = ({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) => (
    <div className="rounded-4xl bg-sand p-10 sm:p-14">
        <p className="font-display text-3xl font-bold tracking-[-0.02em] text-ink">
            {title}
        </p>
        <div className="mt-3 max-w-lg text-lg leading-relaxed text-body">
            {children}
        </div>
    </div>
);

export default Notice;
