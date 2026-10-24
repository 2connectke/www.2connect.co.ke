import { MotionConfig } from 'framer-motion';
import * as React from 'react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import SmoothScroll from '@/components/site/smooth-scroll';

export default function PublicLayout({
    children,
    footer = true,
}: {
    children: React.ReactNode;
    footer?: boolean;
}) {
    return (
        <MotionConfig reducedMotion="user">
            <SmoothScroll />
            <div className="min-h-screen overflow-x-clip bg-paper font-sans text-ink antialiased">
                <Navbar />
                <main>{children}</main>
                {footer && <Footer />}
            </div>
        </MotionConfig>
    );
}
