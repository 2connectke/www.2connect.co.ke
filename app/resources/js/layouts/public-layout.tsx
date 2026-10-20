import { Head, usePage } from '@inertiajs/react';
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
    // Titles come from config/seo.php so the server tags and the tab title never drift apart.
    const { seo } = usePage<{ seo?: { title: string } }>().props;

    return (
        <MotionConfig reducedMotion="user">
            {seo && <Head title={seo.title} />}
            <SmoothScroll />
            <div className="min-h-screen overflow-x-clip bg-paper font-sans text-ink antialiased">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </div>
        </MotionConfig>
    );
}
