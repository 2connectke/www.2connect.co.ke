import { Reveal } from '@/components/site/reveal';
import { Rule, Section, Snippet } from './shared';

const Imagery = () => (
    <Section
        id="imagery"
        number="10"
        eyebrow="Imagery"
        tone="white"
        title={['Real people,', 'real moments.']}
        intro={
            <p>
                Every photo on the site is a real 2Connect moment shared by the
                team. Photos carry the warmth that colours alone can’t.
            </p>
        }
    >
        <div className="grid items-end gap-5 sm:grid-cols-12">
            <Reveal className="sm:col-span-5">
                <div className="aspect-[4/5] overflow-hidden rounded-[32px]">
                    <img
                        src="/assets/images/2connect-portrait-03.jpg"
                        alt="A 2Connect member at a community meetup"
                        loading="lazy"
                        className="h-full w-full object-cover object-[center_20%]"
                    />
                </div>
                <p className="mt-3 text-sm text-body">
                    Portrait frame ·{' '}
                    <code className="font-mono">rounded-[32px]</code>
                </p>
            </Reveal>
            <Reveal delay={0.08} className="sm:col-span-3">
                <div className="aspect-square overflow-hidden rounded-full border-[10px] border-paper shadow-[0_30px_60px_-30px_rgba(11,18,54,0.5)]">
                    <img
                        src="/assets/images/2connect-portrait-02.jpg"
                        alt="A smiling 2Connect member"
                        loading="lazy"
                        className="h-full w-full object-cover object-[center_25%]"
                    />
                </div>
                <p className="mt-3 text-sm text-body">
                    Circle with a paper ring, layered over others
                </p>
            </Reveal>
            <Reveal delay={0.16} className="sm:col-span-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[32px]">
                    <img
                        src="/assets/images/2connect-gathering-01.jpg"
                        alt="2Connect members at an outdoor gathering"
                        loading="lazy"
                        className="h-full w-full object-cover"
                    />
                    <span className="absolute bottom-4 left-4 rounded-[22px] bg-azure-deep px-4 py-3 font-display text-base leading-tight font-semibold text-white shadow-[0_20px_40px_-20px_rgba(11,18,54,0.5)]">
                        Tuko pamoja.
                    </span>
                </div>
                <p className="mt-3 text-sm text-body">
                    Landscape with a speech bubble
                </p>
            </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
                <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">
                    Adding a photo
                </h3>
                <ol className="mt-4 list-inside list-decimal space-y-2 leading-relaxed text-body">
                    <li>Use a real 2Connect photo, with permission.</li>
                    <li>
                        Resize to 2000px on the long side at most and strip
                        location and camera data.
                    </li>
                    <li>
                        Name it by category and number, then save it in{' '}
                        <code className="font-mono text-ink">
                            public/assets/images/
                        </code>
                        .
                    </li>
                    <li>
                        Set{' '}
                        <code className="font-mono text-ink">
                            object-position
                        </code>{' '}
                        so faces stay in frame on every screen.
                    </li>
                </ol>
                <Snippet
                    className="mt-5"
                    code={`2connect-<category>-<nn>.jpg\n\nfounder · outreach · gathering · hike · meetup · portrait`}
                />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
                <Rule kind="do">
                    Show young people doing things together: serving, learning,
                    laughing. Candid beats posed.
                </Rule>
                <Rule kind="do">
                    Write alt text that says who and what, like “A 2Connect
                    volunteer painting a school wall”.
                </Rule>
                <Rule kind="dont">
                    Use stock photos or AI-generated images. Ever. If we don’t
                    have the photo, we use the overlap mark instead.
                </Rule>
                <Rule kind="dont">
                    Add filters, heavy overlays or text baked into photos.
                </Rule>
            </div>
        </div>
    </Section>
);

export default Imagery;
