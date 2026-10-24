import ButtonLink from '@/components/site/button-link';
import Eyebrow from '@/components/site/eyebrow';
import { Section, Snippet } from './shared';

const levels = [
    {
        n: '1',
        name: 'Eyebrow',
        note: 'Says what this is. Short, uppercase, with the two dots.',
    },
    {
        n: '2',
        name: 'Headline',
        note: 'The one thing to remember. Biggest, darkest, at most one coloured word.',
    },
    {
        n: '3',
        name: 'Lead',
        note: 'Explains in a sentence or two. Body colour, relaxed line height.',
    },
    {
        n: '4',
        name: 'Actions',
        note: 'One sun button for the main action, an outline for the second. Never three.',
    },
];

const Gap = ({ label }: { label: string }) => (
    <span className="my-1 flex items-center gap-2 font-mono text-[0.7rem] text-azure-deep">
        <span className="h-px w-6 bg-azure" />
        {label}
    </span>
);

const Hierarchy = () => (
    <Section
        id="hierarchy"
        number="05"
        eyebrow="Hierarchy"
        title={['One thing', 'at a time.']}
        intro={
            <p>
                Every section follows the same order, so readers always know
                where to look: what it is, what it means, why it matters, what
                to do next.
            </p>
        }
    >
        <div className="grid gap-12 lg:grid-cols-12">
            <div className="rounded-[32px] bg-white p-8 ring-1 ring-ink/10 sm:p-12 lg:col-span-7">
                <Eyebrow>Join the movement</Eyebrow>
                <Gap label="mt-6" />
                <h3 className="text-display-md text-ink">
                    Show up.
                    <br />
                    <span className="text-azure-deep">Tuko na wewe.</span>
                </h3>
                <Gap label="mt-8" />
                <p className="max-w-lg text-lg leading-relaxed text-body">
                    Want to volunteer or bring your organisation on board?
                    There’s a place for you here.
                </p>
                <Gap label="mt-10" />
                <div className="flex flex-wrap gap-3">
                    <ButtonLink href="#hierarchy" external>
                        Join as a volunteer
                    </ButtonLink>
                    <ButtonLink href="#hierarchy" external variant="outline">
                        Partner with us
                    </ButtonLink>
                </div>
            </div>
            <ol className="space-y-6 lg:col-span-5">
                {levels.map((level) => (
                    <li key={level.n} className="flex gap-5">
                        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ink font-display font-bold text-white">
                            {level.n}
                        </span>
                        <span>
                            <span className="block font-display text-xl font-bold text-ink">
                                {level.name}
                            </span>
                            <span className="mt-1 block leading-relaxed text-body">
                                {level.note}
                            </span>
                        </span>
                    </li>
                ))}
                <li>
                    <Snippet
                        code={`<Eyebrow>Join the movement</Eyebrow>\n<RevealLines className="mt-6 text-display-lg" lines={[…]} />\n<p className="mt-8 max-w-lg text-lg leading-relaxed text-body">…</p>\n<div className="mt-10 flex flex-wrap gap-3">…</div>`}
                    />
                </li>
            </ol>
        </div>
    </Section>
);

export default Hierarchy;
