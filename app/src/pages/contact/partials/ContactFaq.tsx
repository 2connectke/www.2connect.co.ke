import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import Eyebrow from '@/components/site/eyebrow';
import { Reveal, RevealLines } from '@/components/site/reveal';

const EASE = [0.16, 1, 0.3, 1] as const;

const faqs = [
    {
        question: 'Who can volunteer with 2Connect?',
        answer: 'Any young person who wants their time to mean something. Still on campus, freshly graduated, working, or figuring things out, you are welcome. We match you with volunteer opportunities that fit your skills, your interests and your schedule.',
    },
    {
        question: 'Do I need experience before I start?',
        answer: 'Not at all. That is literally why we exist. Our 2CFP training gets you oriented, teaches you the practical stuff and keeps support close, so you walk in confident and walk out with experience you can talk about in any interview.',
    },
    {
        question: 'What support is there while I volunteer?',
        answer: 'Pumzika, ongea, tuko na wewe. Helping others can drain you, so wellness is part of the deal. You get wellness resources, anonymous peer groups, professional guidance when you need it, and a check in after every activity.',
    },
    {
        question: 'How do I start a 2Connect club on my campus?',
        answer: 'Your campus. Your chapter. Your legacy. Pick the Volunteer option in the form and tell us your institution. Our campus team will walk you through setting up your chapter and the internship opportunities that come with it.',
    },
    {
        question: 'How can our organisation partner with you?',
        answer: 'Pick Partnership in the form and tell us what you do and what you need. We listen first, then bring you prepared, reliable volunteers, and we stay in touch after every activity so the next one goes even better.',
    },
];

const ContactFaq = () => {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="bg-sand py-28 sm:py-36">
            <div className="container-wide grid gap-14 lg:grid-cols-12">
                <div className="lg:col-span-5">
                    <Eyebrow>Good to know</Eyebrow>
                    <RevealLines
                        className="mt-6 text-display-lg text-ink"
                        lines={['Questions,', 'answered.']}
                    />
                    <Reveal delay={0.15}>
                        <p className="mt-6 max-w-sm text-lg leading-relaxed text-body">
                            The things people ask us most. Still curious? Just
                            send us a message.
                        </p>
                        <p className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 font-display text-lg font-semibold tracking-[-0.01em] text-ink">
                            <span className="size-2.5 rounded-full bg-azure" />
                            Strong together. Safe together.
                        </p>
                    </Reveal>
                </div>

                <Reveal className="lg:col-span-7" delay={0.1}>
                    <ul className="border-t border-ink/15">
                        {faqs.map((faq, index) => {
                            const isOpen = open === index;
                            const id = `faq-${index}`;

                            return (
                                <li
                                    key={faq.question}
                                    className="border-b border-ink/15"
                                >
                                    <h3>
                                        <button
                                            type="button"
                                            aria-expanded={isOpen}
                                            aria-controls={id}
                                            onClick={() =>
                                                setOpen(isOpen ? null : index)
                                            }
                                            className="group flex w-full items-center justify-between gap-6 py-7 text-left"
                                        >
                                            <span className="font-display text-xl leading-snug font-semibold tracking-[-0.02em] text-ink sm:text-2xl">
                                                {faq.question}
                                            </span>
                                            <span
                                                className={`grid size-11 shrink-0 place-items-center rounded-full transition-all duration-500 ease-out-expo ${
                                                    isOpen
                                                        ? 'rotate-45 bg-ink text-white'
                                                        : 'bg-white text-ink group-hover:bg-sun'
                                                }`}
                                            >
                                                <Plus size={18} />
                                            </span>
                                        </button>
                                    </h3>
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                id={id}
                                                key="answer"
                                                initial={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    height: 'auto',
                                                    opacity: 1,
                                                }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{
                                                    duration: 0.6,
                                                    ease: EASE,
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <p className="max-w-2xl pb-8 text-lg leading-relaxed text-body">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </li>
                            );
                        })}
                    </ul>
                </Reveal>
            </div>
        </section>
    );
};

export default ContactFaq;
