import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Navbar() {
    const { url } = usePage();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path: string) => {
        if (path === '/') return url === '/';
        return url.startsWith(path);
    };

    const linkClasses = (path: string) => {
        const base = "no-underline font-medium text-[0.95rem] transition-colors duration-200 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-brand-primary after:transition-[width] after:duration-300 hover:after:width-full";
        const state = isActive(path)
            ? "text-brand-primary after:width-full"
            : "text-brand-medium hover:text-brand-primary after:width-0";
        return `${base} ${state}`;
    };

    return (
        <nav className="flex items-center justify-between py-4 px-8 md:px-16 bg-white border-b border-brand-border sticky top-0 z-[1000]">
            <div className="flex items-center">
                <Link href="/">
                    <img src="/assets/images/connect_logo.png" alt="2Connect" className="h-10 w-auto" />
                </Link>
            </div>

            {/* Hamburger for mobile */}
            <div className="flex md:hidden flex-col cursor-pointer gap-1.5 z-[1000]" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                <div className={`w-6 h-0.5 bg-brand-dark rounded-sm transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-brand-dark rounded-sm transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-brand-dark rounded-sm transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>

            <ul className={`${isOpen ? 'flex flex-col fixed inset-0 bg-white z-[999] items-center justify-center gap-8' : 'hidden md:flex items-center gap-10 list-none'}`}>
                <li><Link href="/" className={linkClasses('/')} onClick={() => setIsOpen(false)}>Home</Link></li>
                <li><Link href="/about" className={linkClasses('/about')} onClick={() => setIsOpen(false)}>About</Link></li>
                <li><Link href="/services" className={linkClasses('/services')} onClick={() => setIsOpen(false)}>Services</Link></li>
                <li><Link href="/events" className={linkClasses('/events')} onClick={() => setIsOpen(false)}>Events</Link></li>
                <li><Link href="/contact" className={linkClasses('/contact')} onClick={() => setIsOpen(false)}>Contact</Link></li>
                <li>
                    <Link href="/contact" className="px-6 py-2.5 bg-brand-primary text-white !rounded-md font-semibold text-[0.85rem] uppercase tracking-wider transition-all duration-300 border-2 border-brand-primary hover:bg-transparent hover:text-brand-primary" onClick={() => setIsOpen(false)}>
                        Get Connected
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
