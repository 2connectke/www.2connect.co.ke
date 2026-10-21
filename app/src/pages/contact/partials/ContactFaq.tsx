import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import Eyebrow from '@/components/site/eyebrow';
import { Reveal, RevealLines } from '@/components/site/reveal';
import faqs from '@/data/faq.json';

const EASE = [0.16, 1, 0.3, 1] as const;

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
