import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Brand from '@/components/site/brand';
import SocialIcons from '@/components/site/social-icons';
import { contact, hashtags, socials } from '@/data/site';
import { Link } from '@/lib/router';

const columns = [
    {
        title: 'Explore',
        links: [
            { label: 'Home', href: '/' },
            { label: 'About us', href: '/about' },
            { label: 'What we do', href: '/services' },
            { label: 'Events', href: '/events' },
            { label: 'Gallery', href: '/gallery' },
        ],
    },
    {
        title: 'Programs',
        links: [
            { label: 'Volunteer Matching', href: '/services' },
            { label: 'Connect+ Wellness', href: '/services' },
            { label: 'Training Academy', href: '/services' },
            { label: 'Internships', href: '/services' },
        ],
    },
    {
        title: 'Get involved',
        links: [
            { label: 'Volunteer', href: '/contact' },
            { label: 'Partner with us', href: '/contact' },
            { label: 'Start a campus club', href: '/contact' },
            { label: 'Contact', href: '/contact' },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-ink text-white">
            <div className="relative container-wide pt-20 pb-10 sm:pt-28">
                <div className="grid gap-16 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                        <Brand tone="light" />
                        <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-white/60">
                            Young Kenyans doing good, getting ready, and growing
                            together. Tujenge connections ambazo zinajenga
                            Kenya.
                        </p>

                        <a
                            href={`mailto:${contact.email}`}
                            className="group mt-10 inline-flex items-center gap-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl"
                        >
                            <span className="relative pb-1">
                                {contact.email}
                                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-sun transition-transform duration-700 ease-out-expo group-hover:scale-x-100" />
                            </span>
                            <ArrowUpRight className="text-sun transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-white/50">
                            <a
                                href={contact.phoneHref}
                                className="hover:text-white"
                            >
                                {contact.phone}
                            </a>
                            <span>{contact.location}</span>
                        </div>
                        <SocialIcons
                            className="mt-8"
                            tone="light"
                            links={socials.map(({ network, href }) => ({
                                network,
                                href,
                            }))}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
                        {columns.map((column) => (
                            <div key={column.title}>
                                <h4 className="mb-5 text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
                                    {column.title}
                                </h4>
                                <ul className="space-y-3">
                                    {column.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-[0.95rem] text-white/75 transition-colors hover:text-sun"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Oversized wordmark */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    aria-hidden
                    className="mt-20 -mb-[0.12em] flex justify-center font-display leading-[0.8] font-bold tracking-[-0.06em] select-none"
                >
                    <span className="pb-[0.06em] text-[clamp(4.5rem,19vw,19rem)] text-ink-soft">
                        2Connect
                    </span>
                </motion.div>

                <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
                    <p>
                        © {new Date().getFullYear()} 2Connect. Your action. Your
                        impact.
                    </p>
                    <ul className="flex flex-wrap gap-x-5 gap-y-2">
                        {hashtags.map((tag) => (
                            <li key={tag} className="font-medium text-white/60">
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
