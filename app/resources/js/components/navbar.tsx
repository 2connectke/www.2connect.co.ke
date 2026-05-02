import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

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

    return (
        <div
            className={`fixed top-0 right-0 left-0 z-[1000] transition-[padding] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                isScrolled ? 'px-3 pt-3 sm:px-5' : 'p-0'
            }`}
        >
            <nav
                className={`mx-auto bg-white/95 backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
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

                    <div
                        className="z-[1001] flex cursor-pointer flex-col gap-1.5 md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
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
                    </div>

                    <ul
                        className={
                            isOpen
                                ? 'fixed inset-0 z-[1000] flex list-none flex-col items-center justify-center gap-8 bg-white'
                                : 'hidden list-none items-center gap-1 md:flex'
                        }
                    >
                        <li>
                            <Link
                                href="/"
                                className={linkClasses('/')}
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className={linkClasses('/about')}
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services"
                                className={linkClasses('/services')}
                                onClick={() => setIsOpen(false)}
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/events"
                                className={linkClasses('/events')}
                                onClick={() => setIsOpen(false)}
                            >
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className={linkClasses('/contact')}
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="md:ml-3">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full border-2 border-brand-primary bg-brand-primary px-5 py-2.5 text-[0.85rem] font-bold tracking-wider text-white uppercase transition-all duration-300 hover:bg-white hover:text-brand-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Connected
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
