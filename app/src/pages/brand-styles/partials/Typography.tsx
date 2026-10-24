import Eyebrow from '@/components/site/eyebrow';
import { Reveal } from '@/components/site/reveal';
import { Rule, Section, Snippet } from './shared';

const families = [
    {
        name: 'Bricolage Grotesque',
        role: 'Display',
        use: 'Headlines, big numbers, stickers and quotes: anything that should feel like a voice.',
        weights: '400 to 800 (mostly 600 and 700)',
        token: 'font-display',
        className: 'font-display',
        tone: 'bg-ink text-white',
    },
    {
        name: 'Instrument Sans',
        role: 'Text',
        use: 'Paragraphs, labels, navigation, forms. Everything people read for a while.',
        weights: '400 to 700',
        token: 'font-sans',
        className: 'font-sans',
        tone: 'bg-sun-soft text-ink',
    },
];

const scale = [
    {
        name: 'Display XL',
        token: 'text-display-xl',
        spec: '52 → 152px · line 0.9 · tracking −4.5% · bold',
        use: 'Page heroes. One per page.',
        sample: 'Pick up.',
        className: 'text-display-xl',
    },
    {
        name: 'Display LG',
        token: 'text-display-lg',
        spec: '40 → 96px · line 0.95 · tracking −4% · bold',
        use: 'Section headlines.',
        sample: 'Tuko pamoja.',
        className: 'text-display-lg',
    },
    {
        name: 'Display MD',
        token: 'text-display-md',
        spec: '32 → 64px · line 1 · tracking −3.5% · bold',
        use: 'Chapter titles, success messages.',
        sample: 'You’re connected.',
        className: 'text-display-md',
    },
    {
        name: 'Heading',
        token: 'font-display text-3xl font-bold tracking-[-0.03em] sm:text-4xl',
        spec: '30 → 36px · bold · tracking −3%',
        use: 'Card and form titles.',
        sample: 'Say hello',
        className:
            'font-display text-3xl font-bold tracking-[-0.03em] sm:text-4xl',
    },
    {
        name: 'Quote',
        token: 'font-display text-2xl leading-snug font-semibold tracking-tight',
        spec: '24 → 27px · semibold · with a 3px sun rule',
        use: 'Pull quotes and bubbles.',
        sample: 'Volunteering isn’t a one day thing.',
        className:
            'font-display text-2xl leading-snug font-semibold tracking-tight',
    },
    {
        name: 'Lead',
        token: 'text-lg leading-relaxed text-body sm:text-xl',
        spec: '18 → 20px · line 1.625 · body colour',
        use: 'The first paragraph under a headline.',
        sample: 'You’ve got skills, energy and big ideas. Kenya needs all of it.',
        className: 'text-lg leading-relaxed text-body sm:text-xl',
    },
    {
        name: 'Body',
        token: 'leading-relaxed text-body',
        spec: '16px · line 1.625 · max 36rem wide',
        use: 'Everything else people read.',
        sample: 'We connect you to service that actually matters, help you pick up real skills along the way, and introduce you to people who can open the next door for you.',
        className: 'max-w-xl leading-relaxed text-body',
    },
    {
        name: 'Small',
        token: 'text-sm text-body',
        spec: '14px · labels, captions, meta',
        use: 'Fine print and helper text.',
        sample: 'We reply within one working day.',
        className: 'text-sm text-body',
    },
];

const Typography = () => (
    <Section
        id="typography"
        number="03"
        eyebrow="Typography"
        tone="white"
        title={['Two voices,', 'one message.']}
        intro={
            <p>
                A characterful grotesque for what we shout, a clear sans for
                what we explain. Both load from Bunny Fonts, a privacy-friendly
                mirror of Google Fonts, with system fonts as fallback.
            </p>
        }
    >
        <div className="grid gap-5 lg:grid-cols-2">
            {families.map((family, index) => (
                <Reveal
                    key={family.name}
                    delay={index * 0.08}
                    className={`relative overflow-hidden rounded-[32px] p-8 sm:p-10 ${family.tone}`}
                >
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase opacity-60">
                        {family.role} · {family.token}
                    </p>
                    <p
                        className={`mt-6 text-[clamp(5rem,12vw,9rem)] leading-[0.85] font-bold tracking-[-0.05em] ${family.className}`}
                    >
                        Aa
                    </p>
                    <h3
                        className={`mt-6 text-3xl font-bold tracking-[-0.02em] ${family.className}`}
                    >
                        {family.name}
                    </h3>
                    <p className="mt-2 max-w-md opacity-75">{family.use}</p>
                    <p
                        className={`mt-6 text-lg break-all opacity-80 ${family.className}`}
                    >
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ
                        <br />
                        abcdefghijklmnopqrstuvwxyz 0123456789 #&?!
                    </p>
                    <p className="mt-6 text-sm font-semibold opacity-60">
                        Weights loaded: {family.weights}
                    </p>
                </Reveal>
            ))}
        </div>

        <div className="mt-20">
            <h3 className="font-display text-3xl font-bold tracking-[-0.03em] text-ink">
                Type scale
            </h3>
            <p className="mt-2 max-w-xl text-body">
                Display sizes scale fluidly with the screen. Copy the classes
                exactly; the tight tracking is what makes them ours.
            </p>
            <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
                {scale.map((style) => (
                    <div
                        key={style.name}
                        className="grid gap-6 py-10 lg:grid-cols-12 lg:items-center"
                    >
                        <div className="lg:col-span-4">
                            <p className="font-display text-lg font-bold text-ink">
                                {style.name}
                            </p>
                            <p className="mt-1 text-sm text-body">
                                {style.spec}
                            </p>
                            <p className="mt-1 text-sm text-body">
                                {style.use}
                            </p>
                            <Snippet code={style.token} className="mt-4" />
                        </div>
                        <div className="min-w-0 text-ink lg:col-span-8">
                            <p className={style.className}>{style.sample}</p>
                        </div>
                    </div>
                ))}
                <div className="grid gap-6 py-10 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-4">
                        <p className="font-display text-lg font-bold text-ink">
                            Eyebrow
                        </p>
                        <p className="mt-1 text-sm text-body">
                            12px · semibold · uppercase · tracking 22% · with
                            the two-dot mark
                        </p>
                        <p className="mt-1 text-sm text-body">
                            Above every section headline.
                        </p>
                        <Snippet
                            code="<Eyebrow>Our story</Eyebrow>"
                            className="mt-4"
                        />
                    </div>
                    <div className="lg:col-span-8">
                        <Eyebrow>Kenya inakuita. Pick up.</Eyebrow>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
            <Rule kind="do">
                Break headlines into short, deliberate lines, and colour at most
                one word or phrase (sun deep, azure deep, or sun on ink).
            </Rule>
            <Rule kind="do">
                Use sentence case everywhere. Only eyebrows are uppercase.
            </Rule>
            <Rule kind="dont">
                Set body text in Bricolage, or stretch paragraphs wider than
                about 36rem (<code className="font-mono">max-w-xl</code>).
            </Rule>
        </div>
    </Section>
);

export default Typography;
