import { Reveal } from '@/components/site/reveal';
import { cn } from '@/lib/utils';
import { Section, Snippet } from './shared';

const radii = [
    {
        token: 'rounded-full',
        name: 'Pill',
        use: 'Buttons, chips, avatars, dots. The most used shape on the site.',
        shape: 'rounded-full aspect-[2/1]',
    },
    {
        token: 'rounded-[32px]',
        name: '32px',
        use: 'Photos, big cards and panels.',
        shape: 'rounded-[32px] aspect-square',
    },
    {
        token: 'rounded-[28px]',
        name: '28px',
        use: 'Medium cards and email cards.',
        shape: 'rounded-[28px] aspect-square',
    },
    {
        token: 'rounded-[22px]',
        name: '22–24px',
        use: 'Floating stickers and speech bubbles.',
        shape: 'rounded-[22px] aspect-square',
    },
    {
        token: 'rounded-2xl',
        name: '16px',
        use: 'Form options, small tiles, code blocks.',
        shape: 'rounded-2xl aspect-square',
    },
];

const shadows = [
    {
        name: 'Float',
        token: 'shadow-[0_20px_40px_-20px_rgba(11,18,54,0.5)]',
        use: 'Stickers and bubbles over photos.',
    },
    {
        name: 'Lift',
        token: 'shadow-[0_30px_60px_-30px_rgba(11,18,54,0.5)]',
        use: 'Round photos layered over others.',
    },
    {
        name: 'Deep',
        token: 'shadow-[0_30px_80px_-20px_rgba(11,18,54,0.7)]',
        use: 'Large photo cards on dark sections.',
    },
];

const Shape = () => (
    <Section
        id="shape"
        number="06"
        eyebrow="Shape & depth"
        tone="white"
        title={['Soft edges,', 'soft shadows.']}
        intro={
            <p>
                Nothing on the site has a sharp corner. Shadows are long, low
                and tinted with ink rather than grey, and only appear when
                something floats over something else.
            </p>
        }
    >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {radii.map((radius, index) => (
                <Reveal
                    key={radius.token}
                    delay={index * 0.05}
                    className="rounded-[28px] bg-paper p-5"
                >
                    <div className="grid h-36 place-items-center">
                        <div
                            className={cn(
                                'w-24',
                                radius.shape,
                                index % 2 ? 'bg-azure' : 'bg-sun',
                            )}
                        />
                    </div>
                    <p className="mt-4 font-display text-lg font-bold text-ink">
                        {radius.name}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-body">
                        {radius.use}
                    </p>
                    <Snippet code={radius.token} className="mt-4" />
                </Reveal>
            ))}
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {shadows.map((shadow) => (
                <div key={shadow.name} className="rounded-[28px] bg-sand p-8">
                    <div className="grid h-40 place-items-center">
                        <div
                            className={cn(
                                'rounded-[22px] bg-white px-6 py-4 font-display text-lg font-bold text-ink',
                                shadow.token,
                            )}
                        >
                            {shadow.name}
                        </div>
                    </div>
                    <p className="mt-4 text-sm text-body">{shadow.use}</p>
                    <Snippet code={shadow.token} className="mt-3" />
                </div>
            ))}
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
            <div className="rounded-[28px] border border-ink/10 p-7">
                <p className="font-display text-lg font-bold text-ink">
                    Hairline on light
                </p>
                <Snippet code="border border-ink/10" className="mt-4" />
            </div>
            <div className="rounded-[28px] border border-white/10 bg-ink p-7 text-white">
                <p className="font-display text-lg font-bold">
                    Hairline on ink
                </p>
                <Snippet
                    code="border border-white/10"
                    tone="dark"
                    className="mt-4"
                />
            </div>
            <div className="rounded-[28px] bg-white p-7 ring-1 ring-ink/10">
                <p className="font-display text-lg font-bold text-ink">
                    Card outline
                </p>
                <Snippet code="bg-white ring-1 ring-ink/10" className="mt-4" />
            </div>
        </div>
    </Section>
);

export default Shape;
