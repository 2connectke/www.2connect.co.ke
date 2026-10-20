import { MotionConfig } from 'framer-motion';
import * as React from 'react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import SmoothScroll from '@/components/site/smooth-scroll';

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <MotionConfig reducedMotion="user">
            <SmoothScroll />
            <div className="min-h-screen overflow-x-clip bg-paper font-sans text-ink antialiased">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </div>
        </MotionConfig>
    );
}
