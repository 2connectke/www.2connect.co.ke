import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/events', label: 'Events' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const { url } = usePage();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const updateScrollState = () => {
            setIsScrolled(window.scrollY > 16);
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

    const linkClasses = (path: string) => {
        const base =
            "relative inline-flex h-9 items-center px-4 text-[0.95rem] font-medium no-underline transition-colors duration-200 after:absolute after:right-4 after:-bottom-0.5 after:left-4 after:h-0.5 after:rounded-full after:bg-[#0b2f5b] after:transition-transform after:duration-300 after:content-[''] hover:text-brand-dark hover:after:scale-x-100";
        const state = isActive(path)
            ? 'text-brand-dark after:scale-x-100'
            : 'text-brand-medium after:scale-x-0';

        return `${base} ${state}`;
    };

    const mobileLinkClasses = (path: string) => {
        const base =
            "relative text-3xl font-black text-brand-dark no-underline transition-colors duration-200 after:absolute after:right-0 after:-bottom-2 after:left-0 after:h-0.5 after:rounded-full after:bg-[#0b2f5b] after:transition-transform after:duration-300 after:content-['']";
        const state = isActive(path)
            ? 'after:scale-x-100'
            : 'text-brand-medium after:scale-x-0';

        return `${base} ${state}`;
    };

    return (
        <div
            className={`fixed top-0 right-0 left-0 z-[1000] transition-[padding] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                isScrolled ? 'px-3 pt-3 sm:px-5' : 'p-0'
            }`}
        >
            <nav
                className={`relative z-[1002] mx-auto bg-white/95 backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isScrolled
                        ? 'max-w-7xl rounded-[18px] border border-brand-border/70 shadow-[0_18px_45px_rgba(26,26,26,0.08)]'
                        : 'max-w-full rounded-none border-b border-brand-border shadow-sm'
                }`}
            >
                <div
                    className={`flex items-center justify-between px-4 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] sm:px-6 md:px-8 ${
                        isScrolled ? 'py-3' : 'py-4'
                    }`}
                >
                    <div className="flex items-center">
                        <Link href="/" aria-label="2Connect home">
                            <img
                                src="/assets/images/connect_logo.png"
                                alt="2Connect"
                                className={`w-auto transition-all duration-300 ${
                                    isScrolled ? 'h-9' : 'h-10'
                                }`}
                            />
                        </Link>
                    </div>

                    <button
                        className="z-[1003] flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                        type="button"
                    >
                        <div
                            className={`h-0.5 w-6 rounded-sm bg-brand-dark transition-all duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`}
                        ></div>
                        <div
                            className={`h-0.5 w-6 rounded-sm bg-brand-dark transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
                        ></div>
                        <div
                            className={`h-0.5 w-6 rounded-sm bg-brand-dark transition-all duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}
                        ></div>
                    </button>

                    <ul className="hidden list-none items-center gap-1 md:flex">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={linkClasses(item.href)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li className="md:ml-3">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full border-2 border-brand-primary bg-brand-primary px-5 py-2.5 text-[0.85rem] font-bold tracking-wider text-white uppercase transition-all duration-300 hover:bg-white hover:text-brand-primary"
                            >
                                Get Connected
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div
                className={`fixed inset-0 z-[1001] bg-white transition-all duration-300 md:hidden ${
                    isOpen
                        ? 'pointer-events-auto translate-y-0 opacity-100'
                        : 'pointer-events-none -translate-y-4 opacity-0'
                }`}
                aria-hidden={!isOpen}
            >
                <div className="flex min-h-screen flex-col items-center justify-center px-6 pt-28 pb-10">
                    <ul className="flex list-none flex-col items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={mobileLinkClasses(item.href)}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="/contact"
                        className="mt-10 inline-flex items-center justify-center rounded-full border-2 border-brand-primary bg-brand-primary px-8 py-3.5 text-sm font-bold tracking-[0.18em] text-white uppercase transition-all duration-300 hover:bg-white hover:text-brand-primary"
                        onClick={() => setIsOpen(false)}
                    >
                        Get Connected
                    </Link>
                </div>
            </div>
        </div>
    );
}
