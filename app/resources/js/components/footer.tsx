import * as React from 'react';
import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-white py-16 px-8 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-12">
                {/* Brand */}
                <div className="footer-brand">
                    <img src="/assets/images/co.png" alt="2Connect" className="h-9 w-auto mb-4 brightness-0 invert opacity-90" />
                    <p className="text-[#94a3b8] leading-relaxed mb-6 text-[0.95rem]">Building a movement of young Kenyan changemakers. Your action, your impact. Join thousands of volunteers transforming communities across Kenya.</p>
                    <div className="flex gap-4">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white no-underline transition-all duration-300 hover:bg-brand-primary hover:-translate-y-1" aria-label="Instagram">
                            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white no-underline transition-all duration-300 hover:bg-brand-primary hover:-translate-y-1" aria-label="Twitter / X">
                            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white no-underline transition-all duration-300 hover:bg-brand-primary hover:-translate-y-1" aria-label="LinkedIn">
                            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white no-underline transition-all duration-300 hover:bg-brand-primary hover:-translate-y-1" aria-label="Facebook">
                            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h4 className="text-base font-semibold mb-6 text-white">Quick Links</h4>
                    <ul className="list-none p-0 m-0">
                        <li className="mb-3"><Link href="/" className="text-[#94a3b8] no-underline text-[0.9rem] transition-colors duration-200 hover:text-brand-primary">Home</Link></li>
                        <li className="mb-3"><Link href="/events" className="text-[#94a3b8] no-underline text-[0.9rem] transition-colors duration-200 hover:text-brand-primary">Events</Link></li>
                        <li className="mb-3"><Link href="/about" className="text-[#94a3b8] no-underline text-[0.9rem] transition-colors duration-200 hover:text-brand-primary">About</Link></li>
                        <li className="mb-3"><Link href="/contact" className="text-[#94a3b8] no-underline text-[0.9rem] transition-colors duration-200 hover:text-brand-primary">Contact</Link></li>
                    </ul>
                </div>

                {/* Programs */}
                <div className="footer-links">
                    <h4 className="text-base font-semibold mb-6 text-white">Programs</h4>
                    <ul className="list-none p-0 m-0">
                        <li className="mb-3"><Link href="/services" className="text-[#94a3b8] no-underline text-[0.9rem] transition-colors duration-200 hover:text-brand-primary">Volunteer Matching</Link></li>
                        <li className="mb-3"><Link href="/services" className="text-[#94a3b8] no-underline text-[0.9rem] transition-colors duration-200 hover:text-brand-primary">Connect+</Link></li>
                        <li className="mb-3"><Link href="/services" className="text-[#94a3b8] no-underline text-[0.9rem] transition-colors duration-200 hover:text-brand-primary">Internships / Attachments</Link></li>
                        <li className="mb-3"><Link href="/services" className="text-[#94a3b8] no-underline text-[0.9rem] transition-colors duration-200 hover:text-brand-primary">Training Academy</Link></li>
                    </ul>
                </div>

                {/* Support */}
                <div className="footer-links">
                    <h4 className="text-base font-semibold mb-6 text-white">Support</h4>
                    <ul className="list-none p-0 m-0">
                        <li className="mb-3"><Link href="/contact" className="text-[#94a3b8] no-underline text-[0.9rem] transition-colors duration-200 hover:text-brand-primary">Contact Us</Link></li>
                        <li className="mb-3"><Link href="/contact" className="text-[#94a3b8] no-underline text-[0.9rem] transition-colors duration-200 hover:text-brand-primary">FAQ</Link></li>
                        <li className="mb-3"><a href="mailto:2connectke@gmail.com" className="text-[#94a3b8] no-underline text-[0.9rem] transition-colors duration-200 hover:text-brand-primary">Email Us</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[#64748b] text-[0.85rem] gap-4 md:gap-8">
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                    <span className="flex items-center gap-2">✉️ 2connectke@gmail.com</span>
                    <span className="flex items-center gap-2">📞 +254 111 646 177</span>
                    <span className="flex items-center gap-2">📍 Nairobi, Kenya</span>
                </div>
                <div>© 2026 2Connect. All rights reserved.</div>
            </div>
        </footer>
    );
}
