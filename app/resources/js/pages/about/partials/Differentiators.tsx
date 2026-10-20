import { HeartPulse, Network, ShieldCheck, Workflow } from 'lucide-react';
import Eyebrow from '@/components/site/eyebrow';
import { Reveal, RevealLines } from '@/components/site/reveal';

const differentiators = [
    {
        icon: Workflow,
        label: 'Pathway',
        title: 'A journey, not a one day gig',
        description:
            'You find what you care about, get prepared, serve, reflect and grow. Someone has your back at every step.',
        accent: 'bg-sun text-ink',
    },
    {
        icon: HeartPulse,
        label: 'Care',
        title: 'Wellness comes first',
        description:
            'We look after the whole you. Your energy, your dignity and your mental health matter as much as the work.',
        accent: 'bg-azure text-white',
    },
    {
        icon: Network,
        label: 'Match',
        title: 'Your skills, where they count',
        description:
            'We match what you’re good at to what a community actually needs. You grow, and they get help they can count on.',
        accent: 'bg-navy text-white',
    },
    {
        icon: ShieldCheck,
        label: 'Trust',
        title: 'Trained through 2CFP',
        description:
            'Our 2CFP training means partners get volunteers who are ready, reliable and know exactly why they’re there.',
        accent: 'bg-ink text-sun',
    },
];

const Differentiators = () => {
    return (
        <section className="relative bg-sand py-28 sm:py-36">
            <div className="container-wide grid gap-14 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-5">
                    <div className="lg:sticky lg:top-32">
                        <Eyebrow>Our approach</Eyebrow>
                        <RevealLines
                            className="mt-6 text-display-md text-ink"
                            lines={[
                                'It’s not just',
                                'the opportunity.',
                                <span key="s" className="text-azure-deep">
                                    It’s the whole
                                </span>,
                                'journey.',
                            ]}
                        />
                        <Reveal delay={0.15}>
                            <p className="mt-8 max-w-md text-lg leading-relaxed text-body">
                                Anyone can post an opportunity online. We do the
                                work around it. We prepare you, match you well,
                                look out for your wellbeing and keep partners in
                                the loop, so it works for everyone.
                            </p>
                            <p className="mt-8 max-w-md border-t border-ink/10 pt-6 font-display text-xl font-semibold tracking-tight text-ink">
                                Online first, people always.
                                <span className="mt-2 block font-sans text-base font-normal tracking-normal text-body">
                                    Tech helps us stay organised. The experience
                                    stays human.
                                </span>
                            </p>
                        </Reveal>
                    </div>
                </div>

                <div className="grid gap-4 lg:col-span-7">
                    {differentiators.map((item, index) => (
                        <Reveal key={item.title} delay={index * 0.06}>
                            <article className="group relative grid gap-6 overflow-hidden rounded-[28px] bg-paper p-7 transition-[transform,box-shadow] duration-700 ease-out-expo hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(11,18,54,0.35)] sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-10">
                                <div className="flex items-start justify-between sm:flex-col sm:justify-start sm:gap-8">
                                    <span
                                        className={`grid size-14 place-items-center rounded-full transition-transform duration-700 ease-out-expo group-hover:rotate-[-10deg] group-hover:scale-110 ${item.accent}`}
                                    >
                                        <item.icon size={24} strokeWidth={1.7} />
                                    </span>
                                    <span className="font-display text-sm font-semibold text-ink/30 tabular-nums">
                                        0{index + 1}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-xs font-semibold tracking-[0.22em] text-ink/50 uppercase">
                                        {item.label}
                                    </span>
                                    <h3 className="mt-2 font-display text-[clamp(1.6rem,2.4vw,2.25rem)] leading-[1.05] font-bold tracking-[-0.03em] text-ink">
                                        {item.title}
                                    </h3>
                                    <p className="mt-4 max-w-lg leading-relaxed text-body">
                                        {item.description}
                                    </p>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Differentiators;
