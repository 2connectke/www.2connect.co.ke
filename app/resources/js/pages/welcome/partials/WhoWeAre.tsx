import { Link } from '@inertiajs/react';

const WhoWeAre = () => {
    return (
        <section className="pt-32 sm:pt-40 md:pt-56 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-16 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center">
                <div className="max-w-[520px] py-4 sm:py-6 md:py-10 px-4 sm:px-0">
                    <h2 className="text-[2rem] sm:text-[2.3rem] md:text-[3rem] font-extrabold leading-tight mb-4 text-[#1a1a1a] tracking-tight">
                        <span className="text-[#1e90ff] text-[2.5rem] sm:text-[2.8rem] md:text-[3.3rem] font-black">W</span>ho we are
                    </h2>
                    <h3 className="text-xl sm:text-2xl text-[#4a4a4a] font-bold mb-3 sm:mb-4">A Movement of Young Changemakers</h3>
                    <p className="text-base sm:text-lg text-[#4a4a4a] mb-6 sm:mb-8 leading-relaxed">
                        2Connect is more than a volunteer platform, it's a community. Based in Kenya, we connect passionate young people across the nation to meaningful opportunities that drive positive change.
                    </p>
                    <Link href="/about" className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-[#1e90ff] text-white font-semibold rounded-lg hover:bg-transparent hover:text-[#1e90ff] border-2 border-[#1e90ff] transition-all duration-300 text-sm sm:text-base">
                        Learn More &nbsp;→
                    </Link>
                </div>

                <div className="relative w-full mt-12 sm:mt-16 md:mt-0">
                    {/* Large Screens - Rotated diamond layout */}
                    <div className="hidden md:block relative h-[520px]">
                        <div className="absolute aspect-square overflow-hidden rotate-45 border-[6px] border-white bg-[#f8fafc] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] transition-all duration-500 hover:rotate-45 hover:scale-105 hover:z-10 hover:shadow-[0_20px_25px_-5px_rgba(30,144,255,0.1)] w-[55%] top-[15%] left-[35%] z-[5] group">
                            <img src="/assets/images/SI2CONNECT.jpg" alt="Impact" className="min-w-[150%] min-h-[150%] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div className="absolute aspect-square overflow-hidden rotate-45 border-[6px] border-white bg-[#f8fafc] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] transition-all duration-500 hover:rotate-45 hover:scale-105 hover:z-10 hover:shadow-[0_20px_25px_-5px_rgba(30,144,255,0.1)] w-[35%] top-[-5%] left-[10%] z-[4] group">
                            <img src="/assets/images/community.jpg" alt="Community" className="min-w-[150%] min-h-[150%] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div className="absolute aspect-square overflow-hidden rotate-45 border-[6px] border-white bg-[#f8fafc] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] transition-all duration-500 hover:rotate-45 hover:scale-105 hover:z-10 hover:shadow-[0_20px_25px_-5px_rgba(30,144,255,0.1)] w-[32%] top-[45%] left-[0%] z-[3] group">
                            <img src="/assets/images/education.jpg" alt="Education" className="min-w-[150%] min-h-[150%] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div className="absolute aspect-square overflow-hidden rotate-45 border-[6px] border-white bg-[#f8fafc] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] transition-all duration-500 hover:rotate-45 hover:scale-105 hover:z-10 hover:shadow-[0_20px_25px_-5px_rgba(30,144,255,0.1)] w-[30%] top-[60%] left-[50%] z-[2] group">
                            <img src="/assets/images/environment.jpg" alt="Environment" className="min-w-[150%] min-h-[150%] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div className="absolute aspect-square overflow-hidden rotate-45 border-[6px] border-white bg-[#f8fafc] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] transition-all duration-500 hover:rotate-45 hover:scale-105 hover:z-10 hover:shadow-[0_20px_25px_-5px_rgba(30,144,255,0.1)] w-[28%] top-[10%] left-[80%] z-[1] group">
                            <img src="/assets/images/healthcare.jpg" alt="Health" className="min-w-[150%] min-h-[150%] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div className="absolute w-[15%] aspect-square bg-[#1e90ff] rotate-45 top-[40%] left-[50%] z-[6] shadow-md"></div>
                    </div>

                    {/* Mobile/Tablet - Square grid layout */}
                    <div className="md:hidden">
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <div className="aspect-square overflow-hidden rounded-2xl shadow-lg group">
                                <img src="/assets/images/SI2CONNECT.jpg" alt="Impact" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="aspect-square overflow-hidden rounded-2xl shadow-lg group">
                                <img src="/assets/images/community.jpg" alt="Community" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <div className="aspect-square overflow-hidden rounded-2xl shadow-lg group">
                                <img src="/assets/images/education.jpg" alt="Education" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="aspect-square overflow-hidden rounded-2xl shadow-lg group">
                                <img src="/assets/images/environment.jpg" alt="Environment" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-1/2 aspect-square overflow-hidden rounded-2xl shadow-lg group">
                                <img src="/assets/images/healthcare.jpg" alt="Health" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
