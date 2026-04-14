import { Link } from '@inertiajs/react';

const CTASection = () => {
    return (
        <section className="bg-[#1e90ff] py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-16 text-center">
            <div className="max-w-[700px] mx-auto text-white px-4 sm:px-0">
                <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold mb-3 sm:mb-4">Join the Movement</h2>
                <p className="text-base sm:text-lg md:text-xl opacity-95 mb-8 sm:mb-10 leading-relaxed">
                    Whether you want to volunteer, partner with us, or lead change on your campus — there is a place for you at 2Connect.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                    <Link href="/volunteer" className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-[#1e90ff] no-underline rounded-lg font-bold transition-all duration-300 border-2 border-white hover:bg-transparent hover:text-white hover:-translate-y-0.5 text-sm sm:text-base">
                        Join as a Volunteer
                    </Link>
                    <Link href="/partner" className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent text-white no-underline rounded-lg font-bold border-2 border-white/50 transition-all duration-300 hover:bg-white hover:text-[#1e90ff] hover:border-white text-sm sm:text-base">
                        Partner With Us
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
