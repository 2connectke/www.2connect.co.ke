import { Link, usePage } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Brand from '@/components/site/brand';
import ButtonLink from '@/components/site/button-link';
import { contact } from '@/data/site';

const EASE = [0.16, 1, 0.3, 1] as const;

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'What we do' },
    { href: '/events', label: 'Events' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const { url } = usePage();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const updateScrollState = () => {
            setIsScrolled(window.scrollY > 24);
        };

        updateScrollState();
        window.addEventListener('scroll', updateScrollState, { passive: true });

        return () => window.removeEventListener('scroll', updateScrollState);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const isActive = (path: string) => {
        if (path === '/') {
            return url === '/';
        }

        return url.startsWith(path);
    };

    return (
        <header
            className={`fixed inset-x-0 top-0 z-[1000] transition-[padding] duration-700 ease-out-expo ${
                isScrolled ? 'px-3 pt-3 sm:px-5' : 'p-0'
            }`}
        >
            <nav
                className={`relative z-[1002] mx-auto border transition-all duration-700 ease-out-expo ${
                    isScrolled
                        ? 'max-w-6xl rounded-full border-ink/10 bg-paper shadow-[0_20px_50px_-20px_rgba(11,18,54,0.25)]'
                        : 'max-w-full rounded-none border-transparent bg-transparent'
                } ${isOpen ? '!border-transparent !bg-transparent !shadow-none' : ''}`}
            >
                <div
                    className={`flex items-center justify-between transition-all duration-700 ease-out-expo ${
                        isScrolled
                            ? 'py-2 pr-2 pl-5'
                            : 'px-[clamp(1rem,4vw,4rem)] py-5'
                    }`}
                >
                    <Brand
                        tone={isOpen ? 'light' : 'dark'}
                        onClick={() => setIsOpen(false)}
                    />

                    <ul className="hidden list-none items-center gap-1 lg:flex">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`relative isolate inline-flex h-10 items-center rounded-full px-4 text-[0.92rem] font-medium transition-colors duration-300 ${
                                        isActive(item.href)
                                            ? 'text-ink'
                                            : 'text-ink/60 hover:text-ink'
                                    }`}
                                >
                                    {isActive(item.href) && (
                                        <motion.span
                                            layoutId="nav-active"
                                            className="absolute inset-0 -z-10 rounded-full bg-ink/[0.06]"
                                            transition={{ duration: 0.6, ease: EASE }}
                                        />
                                    )}
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-2">
                        <ButtonLink
                            href="/contact"
                            className="hidden py-1 pl-5 text-sm sm:inline-flex [&>span:last-child]:size-8"
                        >
                            Get connected
                        </ButtonLink>

                        <button
                            className={`relative z-[1003] grid size-11 cursor-pointer place-items-center rounded-full transition-colors duration-500 lg:hidden ${
                                isOpen ? 'bg-white text-ink' : 'bg-ink text-white'
                            }`}
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isOpen}
                            type="button"
                        >
                            <span
                                className={`absolute h-[1.5px] w-5 rounded-full bg-current transition-transform duration-500 ease-out-expo ${
                                    isOpen ? 'rotate-45' : '-translate-y-[4px]'
                                }`}
                            />
                            <span
                                className={`absolute h-[1.5px] w-5 rounded-full bg-current transition-transform duration-500 ease-out-expo ${
                                    isOpen ? '-rotate-45' : 'translate-y-[4px]'
                                }`}
                            />
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-[1001] overflow-hidden bg-ink text-white lg:hidden"
                        initial={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
                        animate={{ clipPath: 'circle(150% at calc(100% - 2.5rem) 2.5rem)' }}
                        exit={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
                        transition={{ duration: 0.8, ease: EASE }}
                    >

                        <div className="relative flex h-full flex-col justify-between px-6 pt-28 pb-10">
                            <ul className="flex list-none flex-col gap-1">
                                {navItems.map((item, index) => (
                                    <li key={item.href} className="overflow-hidden">
                                        <motion.div
                                            initial={{ y: '110%' }}
                                            animate={{ y: '0%' }}
                                            transition={{
                                                duration: 0.8,
                                                ease: EASE,
                                                delay: 0.15 + index * 0.06,
                                            }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className={`flex items-baseline gap-4 font-display text-[clamp(2.6rem,12vw,4.5rem)] leading-[1.05] font-bold tracking-[-0.04em] ${
                                                    isActive(item.href)
                                                        ? 'text-sun'
                                                        : 'text-white'
                                                }`}
                                            >
                                                <span className="font-sans text-xs font-medium tracking-normal text-white/40">
                                                    0{index + 1}
                                                </span>
                                                {item.label}
                                            </Link>
                                        </motion.div>
                                    </li>
                                ))}
                            </ul>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
                                className="space-y-6"
                            >
                                <ButtonLink
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Get connected
                                </ButtonLink>
                                <div className="space-y-1 text-sm text-white/60">
                                    <a href={`mailto:${contact.email}`} className="block">
                                        {contact.email}
                                    </a>
                                    <a href={contact.phoneHref} className="block">
                                        {contact.phone}
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
