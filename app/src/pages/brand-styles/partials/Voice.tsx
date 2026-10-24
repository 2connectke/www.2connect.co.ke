import { Reveal } from '@/components/site/reveal';
import { hashtags } from '@/data/site';
import { CopyChip, Section } from './shared';

const traits = [
    {
        title: 'Like a friend from your mtaa',
        body: 'Talk to one person, as “you”. Warm, direct, a little playful. Never preachy, never corporate.',
    },
    {
        title: 'Kenyan, in small doses',
        body: 'A Swahili or Sheng phrase gives the voice its home. One per section is plenty, and the meaning should be clear from the English around it.',
    },
    {
        title: 'Short and plain',
        body: 'Short sentences, everyday words. “Help” not “facilitate”. If a sentence needs reading twice, rewrite it.',
    },
    {
        title: 'Action first',
        body: 'Lead with what people can do. Buttons say what happens: “Start volunteering”, not “Submit”.',
    },
];

const examples = [
    {
        do: 'You’ve got skills, energy and big ideas. Kenya needs all of it.',
        dont: '2Connect leverages youth potential to facilitate community impact.',
    },
    {
        do: 'Someone from the team will get back to you within one working day.',
        dont: 'Your enquiry has been received and will be processed in due course.',
    },
    {
        do: 'Show up. Tuko na wewe.',
        dont: 'JOIN US TODAY!!!',
    },
];

const glossary = [
    ['Tuko pamoja', 'We’re in this together'],
    ['Tuko na wewe', 'We’ve got your back'],
    ['Karibu', 'Welcome'],
    ['Asante', 'Thank you'],
    ['Tuonane', 'See you soon'],
    ['Mtaa', 'Neighbourhood, your hood'],
    ['Kenya inakuita', 'Kenya is calling you'],
    ['Si talk, ni action', 'Less talk, more action'],
    ['Vijana', 'Young people'],
    ['Mbogi', 'Crew, squad'],
    ['Comrades', 'University students'],
];

const Voice = () => (
    <Section
        id="voice"
        number="09"
        eyebrow="Voice"
        tone="ink"
        title={[
            'Sound like',
            <span key="a" className="text-sun">
                the mtaa.
            </span>,
        ]}
        intro={
            <p>
                The words are as much a part of the brand as the colours. We
                speak to young Kenyans the way they speak to each other.
            </p>
        }
    >
        <div className="grid gap-px overflow-hidden rounded-[32px] bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {traits.map((trait, index) => (
                <Reveal
                    key={trait.title}
                    delay={index * 0.06}
                    className="bg-ink p-8"
                >
                    <h3 className="font-display text-xl font-bold tracking-[-0.02em]">
                        {trait.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-white/65">
                        {trait.body}
                    </p>
                </Reveal>
            ))}
        </div>

        <div className="mt-16 space-y-3">
            {examples.map((example) => (
                <div key={example.do} className="grid gap-3 md:grid-cols-2">
                    <p className="rounded-[22px] bg-azure-deep p-6 font-display text-xl leading-snug font-semibold">
                        <span className="mb-2 block font-sans text-[0.68rem] font-bold tracking-[0.16em] text-white/70 uppercase">
                            Say
                        </span>
                        {example.do}
                    </p>
                    <p className="rounded-[22px] bg-white/5 p-6 text-lg leading-snug text-white/50">
                        <span className="mb-2 block text-[0.68rem] font-bold tracking-[0.16em] text-sun uppercase">
                            Not
                        </span>
                        <span className="line-through decoration-sun/60">
                            {example.dont}
                        </span>
                    </p>
                </div>
            ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
                <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">
                    Phrases we use
                </h3>
                <dl className="mt-6 grid gap-x-8 sm:grid-cols-2">
                    {glossary.map(([phrase, meaning]) => (
                        <div
                            key={phrase}
                            className="flex items-baseline justify-between gap-4 border-b border-white/10 py-3"
                        >
                            <dt className="font-display text-lg font-semibold text-sun">
                                {phrase}
                            </dt>
                            <dd className="text-right text-sm text-white/60">
                                {meaning}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
            <div className="lg:col-span-5">
                <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">
                    Hashtags
                </h3>
                <p className="mt-2 text-white/60">
                    Click to copy. #TuConnect is the main one.
                </p>
                <div className="mt-6 rounded-[22px] bg-white p-2">
                    {hashtags.map((tag) => (
                        <CopyChip key={tag} label="Tag" value={tag} />
                    ))}
                </div>
            </div>
        </div>
    </Section>
);

export default Voice;
