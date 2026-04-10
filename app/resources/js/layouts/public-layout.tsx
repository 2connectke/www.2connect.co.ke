import * as React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}
