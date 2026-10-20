import ButtonLink from './button-link';
import Eyebrow from './eyebrow';
import OverlapMark from './overlap-mark';
import { Reveal, RevealLines } from './reveal';

/**
 * Closing call to action shared by every page. Sits on a light azure shade so it
 * reads as its own moment instead of blending into the ink footer below.
 */
export default function JoinCta({
    title = ['Show up.', 'Tuko na wewe.'],
    body = 'Want to volunteer, bring your organisation on board, or start a club on your campus? There’s a place for you here, and people ready to walk with you.',
}: {
    title?: string[];
    body?: string;
}) {
    return (
        <section className="relative overflow-hidden bg-azure-soft py-28 text-ink sm:py-36">
            <div className="relative container-wide grid items-center gap-16 lg:grid-cols-12">
                <div className="lg:col-span-7">
                    <Eyebrow>Join the movement</Eyebrow>
                    <RevealLines className="mt-6 text-display-lg" lines={title} />
                    <Reveal delay={0.2}>
                        <p className="mt-8 max-w-lg text-lg leading-relaxed text-body">
                            {body}
                        </p>
                        <div className="mt-10 flex flex-wrap gap-3">
                            <ButtonLink href="/contact" variant="ink">
                                Join as a volunteer
                            </ButtonLink>
                            <ButtonLink href="/contact" variant="outline">
                                Partner with us
                            </ButtonLink>
                        </div>
                    </Reveal>
                </div>
                <div className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
                    <OverlapMark tone="light" ring="#e3f3fc" delay={0.2} />
                </div>
            </div>
        </section>
    );
}
