import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Handshake, HeartHandshake, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import OverlapMark from '@/components/site/overlap-mark';
import FormField from './FormField';

const EASE = [0.16, 1, 0.3, 1] as const;

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    organization: string;
    message: string;
}

const emptyForm: ContactFormData = {
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
};

const formTypeOptions = [
    {
        value: 'general',
        label: 'Just asking',
        description: 'Questions about what we do',
        icon: MessageCircle,
    },
    {
        value: 'volunteer',
        label: 'Volunteer',
        description: 'I want to get involved',
        icon: HeartHandshake,
    },
    {
        value: 'partner',
        label: 'Partnership',
        description: 'My organisation needs people',
        icon: Handshake,
    },
];

const messageCopy: Record<string, { label: string; placeholder: string }> = {
    general: { label: 'Your message', placeholder: 'What would you like to know?' },
    volunteer: {
        label: 'What you are into',
        placeholder: 'Tell us what you are good at, what you care about and when you are free',
    },
    partner: {
        label: 'What you need',
        placeholder: 'Tell us about your organisation and the kind of help you are looking for',
    },
};

const ContactForm = () => {
    const [formType, setFormType] = useState('general');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState<ContactFormData>(emptyForm);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log({ formType, ...formData });
        setIsSuccess(true);
        setIsSubmitting(false);

        // Reset after showing success
        setTimeout(() => {
            setFormData(emptyForm);
            setFormType('general');
            setIsSuccess(false);
        }, 6000);
    };

    const copy = messageCopy[formType];

    return (
        <div className="relative overflow-hidden rounded-[32px] bg-white p-6 ring-1 ring-ink/10 sm:p-10 lg:p-12">
            <AnimatePresence mode="wait" initial={false}>
                {isSuccess ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.7, ease: EASE }}
                        className="flex min-h-[560px] flex-col items-center justify-center text-center"
                        role="status"
                        aria-live="polite"
                    >
                        <div className="w-full max-w-[300px]">
                            <OverlapMark delay={0.1} />
                        </div>
                        <h3 className="mt-8 text-display-md text-ink">
                            You’re connected.
                        </h3>
                        <p className="mt-4 max-w-sm text-lg leading-relaxed text-body">
                            Asante
                            {formData.name ? `, ${formData.name.split(' ')[0]}` : ''}!
                            Your message is in. Someone from the team will get
                            back to you within one working day.
                        </p>
                        <span className="mt-6 rounded-full bg-azure-soft px-4 py-2 font-display text-sm font-semibold text-azure-deep">
                            #TuConnect
                        </span>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.7, ease: EASE }}
                    >
                        <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">
                            Say hello
                        </h2>
                        <p className="mt-2 text-body">
                            Fields marked <span className="text-sun-deep">*</span>{' '}
                            are required.
                        </p>

                        <fieldset className="mt-10">
                            <legend className="px-1 pb-3 text-sm font-semibold text-ink">
                                What brings you here?
                            </legend>
                            <div className="grid gap-3 sm:grid-cols-3">
                                {formTypeOptions.map((option) => {
                                    const selected = formType === option.value;

                                    return (
                                        <label
                                            key={option.value}
                                            className={`relative flex cursor-pointer items-center gap-4 rounded-2xl border-2 p-4 sm:flex-col sm:items-start sm:gap-3 transition-all duration-500 ease-out-expo has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-azure/30 ${
                                                selected
                                                    ? 'border-ink bg-ink text-white'
                                                    : 'border-ink/10 bg-paper text-ink hover:border-ink/30'
                                            }`}
                                        >
                                            <input
                                                type="radio"
                                                name="formType"
                                                value={option.value}
                                                checked={selected}
                                                onChange={() => setFormType(option.value)}
                                                className="sr-only"
                                            />
                                            <span
                                                className={`grid size-9 shrink-0 place-items-center rounded-full transition-colors duration-500 ${
                                                    selected
                                                        ? 'bg-sun text-ink'
                                                        : 'bg-white text-ink'
                                                }`}
                                            >
                                                <option.icon size={17} />
                                            </span>
                                            <span>
                                                <span className="block text-[0.95rem] font-semibold">
                                                    {option.label}
                                                </span>
                                                <span
                                                    className={`mt-0.5 block text-xs ${
                                                        selected ? 'text-white/65' : 'text-body'
                                                    }`}
                                                >
                                                    {option.description}
                                                </span>
                                            </span>
                                        </label>
                                    );
                                })}
                            </div>
                        </fieldset>

                        <div className="mt-8 grid gap-6 sm:grid-cols-2">
                            <FormField
                                label="Full name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                autoComplete="name"
                                placeholder="Wanjiku Kamau"
                            />
                            <FormField
                                label="Email address"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                autoComplete="email"
                                placeholder="you@example.com"
                            />
                            <FormField
                                label="Phone number"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                autoComplete="tel"
                                placeholder="+254 7XX XXX XXX"
                            />
                            <AnimatePresence initial={false}>
                                {formType === 'partner' && (
                                    <motion.div
                                        key="organization"
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 12 }}
                                        transition={{ duration: 0.5, ease: EASE }}
                                    >
                                        <FormField
                                            label="Organisation name"
                                            name="organization"
                                            value={formData.organization}
                                            onChange={handleChange}
                                            required
                                            autoComplete="organization"
                                            placeholder="Your company or NGO"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="mt-6">
                            <FormField
                                label={copy.label}
                                name="message"
                                type="textarea"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder={copy.placeholder}
                            />
                        </div>

                        <div className="mt-10 flex flex-col-reverse gap-5 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-sm text-body">
                                We reply within one working day.
                            </p>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group inline-flex items-center justify-between gap-4 rounded-full bg-sun py-1.5 pr-1.5 pl-7 text-[0.95rem] font-semibold whitespace-nowrap text-ink transition-colors duration-500 ease-out-expo hover:bg-ink hover:text-white focus-visible:ring-4 focus-visible:ring-sun/40 focus-visible:outline-none disabled:cursor-wait disabled:opacity-70"
                            >
                                <span>{isSubmitting ? 'Sending' : 'Send message'}</span>
                                <span className="relative grid size-11 place-items-center overflow-hidden rounded-full bg-ink text-white transition-colors duration-500 group-hover:bg-sun group-hover:text-ink">
                                    {isSubmitting ? (
                                        <span className="size-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                    ) : (
                                        <>
                                            <ArrowUpRight
                                                size={18}
                                                className="transition-transform duration-500 ease-out-expo group-hover:translate-x-6 group-hover:-translate-y-6"
                                            />
                                            <ArrowUpRight
                                                size={18}
                                                className="absolute -translate-x-6 translate-y-6 transition-transform duration-500 ease-out-expo group-hover:translate-x-0 group-hover:translate-y-0"
                                            />
                                        </>
                                    )}
                                </span>
                            </button>
                        </div>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ContactForm;
