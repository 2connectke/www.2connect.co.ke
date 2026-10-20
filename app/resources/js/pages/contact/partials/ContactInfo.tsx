import { ArrowUpRight } from 'lucide-react';
import Eyebrow from '@/components/site/eyebrow';
import { Reveal } from '@/components/site/reveal';
import { contact, socials } from '@/data/site';

const details = [
    { label: 'Email us', value: contact.email, href: `mailto:${contact.email}` },
    { label: 'Call or WhatsApp', value: contact.phone, href: contact.phoneHref },
    { label: 'Find us', value: contact.location, href: null },
    { label: 'Office hours', value: contact.hours, href: null },
];

const ContactInfo = () => {
    return (
        <div>
            <Eyebrow>Reach us directly</Eyebrow>

            <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
                {details.map((item, index) => (
                    <Reveal key={item.label} delay={index * 0.06} className="py-6">
                        <dt className="text-sm text-body">{item.label}</dt>
                        <dd className="mt-2">
                            {item.href ? (
                                <a
                                    href={item.href}
                                    className="group inline-flex items-center gap-3 font-display text-[clamp(1.5rem,2.4vw,2.25rem)] leading-tight font-semibold tracking-[-0.03em] break-all text-ink"
                                >
                                    <span className="relative pb-1">
                                        {item.value}
                                        <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-sun transition-transform duration-700 ease-out-expo group-hover:scale-x-100" />
                                    </span>
                                    <ArrowUpRight className="shrink-0 text-sun-deep transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>
                            ) : (
                                <span className="font-display text-[clamp(1.5rem,2.4vw,2.25rem)] leading-tight font-semibold tracking-[-0.03em] text-ink">
                                    {item.value}
                                </span>
                            )}
                        </dd>
                    </Reveal>
                ))}
            </dl>

            <Reveal delay={0.3} className="mt-10">
                <p className="text-sm text-body">Or slide into our DMs</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                    {socials.map((social) => (
                        <li key={social.label}>
                            <a
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
                            >
                                {social.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </Reveal>
        </div>
    );
};

export default ContactInfo;
