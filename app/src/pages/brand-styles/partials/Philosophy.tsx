import OverlapMark from '@/components/site/overlap-mark';
import { Reveal } from '@/components/site/reveal';
import { values } from '@/data/site';
import { Section } from './shared';

const principles = [
    {
        title: 'Two become one',
        body: 'Everything starts from the logo: two circles, two people, two worlds, meeting in a navy overlap. You see it in the overlap mark, in the sun and azure dots before every eyebrow, and between every hashtag in the marquee.',
        dot: 'bg-sun',
    },
    {
        title: 'Warm, not corporate',
        body: 'Pages sit on paper, not white. Copy speaks like a friend from your mtaa, with a little Swahili and Sheng. We sound like a movement, not an institution.',
        dot: 'bg-azure',
    },
    {
        title: 'Big, confident type',
        body: 'Headlines are oversized, tightly tracked and broken into deliberate lines. One word in a headline may carry colour. Everything else stays calm so the message lands.',
        dot: 'bg-navy',
    },
    {
        title: 'Real people only',
        body: 'Every photo is a real 2Connect moment. No stock photos, no AI images. Faces stay in frame, and photos get generous rounded corners or circles.',
        dot: 'bg-sun',
    },
    {
        title: 'Motion with patience',
        body: 'Things glide in, they never bounce. One easing curve, unhurried durations, and every animation switches off for people who ask for reduced motion.',
        dot: 'bg-azure',
    },
    {
        title: 'Open to everyone',
        body: 'Text passes contrast checks, the site works without JavaScript, and nothing depends on hover alone. If someone can’t use it, it isn’t finished.',
        dot: 'bg-navy',
    },
];

const Philosophy = () => (
    <Section
        id="philosophy"
        number="01"
        eyebrow="Design philosophy"
        tone="ink"
        title={[
            'Si talk,',
            <span key="a" className="text-sun">
                ni action.
            </span>,
        ]}
        intro={
            <p>
                2Connect connects young Kenyans with the communities that need
                them. The design does the same: two colours, two typefaces and
                two kinds of surface, always meeting in the middle.
            </p>
        }
    >
        <div className="grid gap-px overflow-hidden rounded-[32px] bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, index) => (
                <Reveal
                    key={principle.title}
                    delay={index * 0.06}
                    className="bg-ink p-8 sm:p-10"
                >
                    <span className="flex items-center gap-3">
                        <span
                            className={`size-3 rounded-full ${principle.dot}`}
                        />
                        <span className="font-display text-sm font-bold text-white/40">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-bold tracking-[-0.02em]">
                        {principle.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-white/65">
                        {principle.body}
                    </p>
                </Reveal>
            ))}
        </div>

        <div className="mt-20 grid items-center gap-14 lg:grid-cols-12">
            <div className="mx-auto w-full max-w-sm lg:col-span-4">
                <OverlapMark tone="dark" />
            </div>
            <div className="lg:col-span-8">
                <p className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
                    Tagline
                </p>
                <p className="mt-3 font-display text-[clamp(2.2rem,4.6vw,4.2rem)] leading-none font-bold tracking-[-0.04em]">
                    Your <span className="text-sun">action.</span> Your{' '}
                    <span className="text-azure">impact.</span>
                </p>
                <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2">
                    <div>
                        <p className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
                            Mission
                        </p>
                        <p className="mt-3 leading-relaxed text-white/80">
                            To give young people the opportunities, skills and
                            support to make change that lasts, right where they
                            live.
                        </p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
                            Vision
                        </p>
                        <p className="mt-3 leading-relaxed text-white/80">
                            A connected generation of young leaders who care
                            about people, building a better Kenya and a better
                            world.
                        </p>
                    </div>
                </div>
                <ul className="mt-8 flex flex-wrap gap-2">
                    {values.map((value) => (
                        <li
                            key={value}
                            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80"
                        >
                            {value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </Section>
);

export default Philosophy;
