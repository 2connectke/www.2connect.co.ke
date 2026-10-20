import Eyebrow from '@/components/site/eyebrow';
import { Reveal, RevealLines } from '@/components/site/reveal';
import { SocialGlyph } from '@/components/site/social-icons';

const linkedin = 'https://www.linkedin.com/in/wanjiru-kevin/';

const letter = [
    'Walk into any mtaa and you’ll meet young people with real fire. Yet so many are stuck tarmacking, degree at home, while every entry level job asks for experience nobody will give them a chance to get.',
    'Meanwhile, organisations doing great work struggle to find people who are prepared, reliable and ready to stay. And the ones who give the most are often running on empty.',
    '2Connect exists to open that door. We prepare you, match you where your skills count, look after you while you serve, and make sure every hour builds your future.',
];

const FounderNote = () => {
    return (
        <section className="relative overflow-hidden bg-sand py-28 sm:py-36">
            <div className="container-wide grid gap-16 lg:grid-cols-12 lg:items-stretch lg:gap-12">
                {/* Photo: right on desktop, first on mobile. Stretches to the letter's height. */}
                <Reveal
                    y={40}
                    className="relative mx-auto mb-6 w-full max-w-md lg:order-2 lg:col-span-5 lg:mb-0 lg:max-w-none"
                >
                    <div className="absolute -right-4 -bottom-4 size-full rounded-[32px] bg-sun sm:-right-6 sm:-bottom-6" />
                    <div className="relative aspect-square overflow-hidden rounded-[32px] bg-ink lg:aspect-auto lg:h-full">
                        <img
                            src="/assets/images/2connect-founder.jpg"
                            alt="Kevin Wanjiru, founder of 2Connect, speaking at a community event"
                            className="h-full w-full object-cover object-top"
                        />
                    </div>
                    <div className="absolute bottom-6 left-6 rounded-2xl bg-ink px-5 py-4 text-white sm:left-8">
                        <div className="font-display text-xl leading-none font-bold tracking-tight">
                            Wanjiru Kevin
                        </div>
                        <div className="mt-1.5 text-xs font-semibold tracking-[0.18em] text-sun uppercase">
                            CEO &amp; Founder
                        </div>
                    </div>
                </Reveal>

                {/* The letter */}
                <div className="flex flex-col lg:order-1 lg:col-span-7 lg:pr-10">
                    <Eyebrow>A word from our founder</Eyebrow>
                    <RevealLines
                        className="mt-6 text-display-lg text-ink"
                        lines={[
                            'Kenya doesn’t lack talent.',
                            <span key="d" className="text-azure-deep">
                                It lacks doors.
                            </span>,
                        ]}
                    />

                    <div className="mt-10 flex max-w-2xl flex-col gap-5 lg:mb-10">
                        {letter.map((paragraph, index) => (
                            <Reveal key={index} delay={index * 0.05}>
                                <p className="text-lg leading-relaxed text-body">
                                    {paragraph}
                                </p>
                            </Reveal>
                        ))}
                        <Reveal delay={0.15}>
                            <p className="font-display text-2xl leading-snug font-semibold tracking-tight text-ink">
                                Your energy has a place here. Let’s build this,
                                pamoja.
                            </p>
                        </Reveal>
                    </div>

                    <Reveal delay={0.1} className="mt-10 max-w-2xl border-t border-ink/10 pt-8 lg:mt-auto">
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <div className="font-display text-4xl leading-none font-bold tracking-[-0.03em] text-ink">
                                    Wanjiru Kevin
                                </div>
                                <div className="mt-2 text-sm text-body">
                                    CEO &amp; Founder, 2Connect
                                </div>
                            </div>
                            <a
                                href={linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center gap-3 self-start rounded-full border border-ink/15 py-1.5 pr-5 pl-1.5 text-sm font-semibold text-ink transition-colors duration-500 hover:border-ink hover:bg-ink hover:text-white sm:self-auto"
                            >
                                <span className="grid size-9 place-items-center rounded-full bg-ink text-white transition-colors duration-500 group-hover:bg-sun group-hover:text-ink">
                                    <SocialGlyph network="linkedin" className="size-3.5" />
                                </span>
                                Follow Kevin on LinkedIn
                            </a>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default FounderNote;
