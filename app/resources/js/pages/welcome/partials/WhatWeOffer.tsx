import { useState } from "react";
import { Link } from '@inertiajs/react';

const offeringsData = [
    {
        step: '01',
        icon: 'fa-hands-helping',
        title: 'Volunteer Matching',
        desc: 'AI-powered matching connects you with opportunities that align with your skills and passions.',
        image: '/assets/images/community.jpg',
        longDesc: 'Our advanced matching algorithm analyzes your profile, skills, and interests to suggest the most relevant volunteer opportunities. Whether you are into tech, social work, or environmental conservation, we ensure your contribution makes the maximum impact where it matters most.'
    },
    {
        step: '02',
        icon: 'fa-heartbeat',
        title: 'Free Wellness Support',
        desc: 'Access wellness resources and peer support to maintain your mental health while volunteering.',
        image: '/assets/images/healthcare.jpg',
        longDesc: 'Volunteering can be emotionally demanding. We provide dedicated mental health resources, anonymous peer support groups, and professional counseling sessions for our volunteers. Taking care of yourself is the first step to taking care of others.'
    },
    {
        step: '03',
        icon: 'fa-certificate',
        title: 'Volunteer Training',
        desc: 'Level up your skills with free training programs designed to enhance your impact.',
        image: '/assets/images/education.jpg',
        longDesc: 'Gain practical experience and industry-recognized certifications. Our training programs cover everything from project management to crisis intervention, ensuring you are equipped with the tools necessary to lead and execute successful community projects.'
    },
    {
        step: '04',
        icon: 'fa-university',
        title: 'Internships',
        desc: 'Lead the movement on your campus and gain leadership experience through our programs.',
        image: '/assets/images/environment.jpg',
        longDesc: 'Our internship program bridges the gap between academic learning and real-world impact. As a 2Connect intern, you will lead regional chapters, manage large-scale events, and work directly with our partner NGOs to drive systemic change across Kenya.'
    }
];

const WhatWeOffer = () => {
    const [currentNode, setCurrentNode] = useState(0);
    const totalNodes = offeringsData.length;

    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20 items-start">
                    {/* Left Side: Content List */}
                    <div className="w-full lg:w-[40%] space-y-6 sm:space-y-8">
                        <div>
                            <h2 className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.75rem] font-extrabold text-[#1a1a1a] leading-tight flex items-center gap-1 mb-6 sm:mb-8">
                                What We<span className="text-[#1e90ff]">Offer</span>
                            </h2>
                            <p className="text-base sm:text-lg text-[#4a4a4a] mb-6 sm:mb-8 leading-relaxed max-w-[450px] transition-all duration-300 group-hover:translate-x-1">
                                Your journey to making an impact starts here. Explore our four pillars of volunteer engagement.
                            </p>
                        </div>

                        <div className="space-y-1 relative">
                            {/* Vertical Progress Indicator */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e5e7eb] rounded-full z-0">
                                <div
                                    className="absolute top-0 left-0 w-full bg-[#1e90ff] rounded-full transition-all duration-700 ease-in-out"
                                    style={{
                                        height: `${((currentNode + 1) / totalNodes) * 100}%`,
                                        maxHeight: '100%'
                                    }}
                                ></div>
                            </div>

                            {offeringsData.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`pl-6 sm:pl-8 md:pl-10 relative cursor-pointer group transition-all duration-300 ${currentNode === idx ? 'border-l-[4px] border-[#1e90ff]' : 'border-l-[4px] border-transparent'}`}
                                    onMouseEnter={() => setCurrentNode(idx)}
                                    onClick={() => setCurrentNode(idx)}
                                >
                                    <div className="flex items-center gap-2 mb-3 sm:mb-4 transition-all duration-300 group-hover:translate-x-1">
                                        <span className={`text-[0.75rem] sm:text-[0.85rem] font-black uppercase tracking-[2px] ${currentNode === idx ? 'text-[#1e90ff]' : 'text-[#6b7280]'}`}>
                                            <i className={`fas ${item.icon} mr-1 sm:mr-2 text-xs sm:text-sm`}></i> {item.title}
                                        </span>
                                    </div>
                                    <p className="text-sm sm:text-base md:text-lg text-[#4a4a4a] mb-6 sm:mb-8 leading-relaxed max-w-[450px] transition-all duration-300 group-hover:translate-x-1">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Dynamic Image Display */}
                    <div className="w-full lg:w-[60%] relative group">
                        <div className="relative aspect-video lg:aspect-auto lg:h-[550px] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden shadow-[0_20px_25px_-5px_rgba(30,144,255,0.1)] bg-[#f8fafc] border-4 border-white transition-all duration-500">
                            {offeringsData.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${currentNode === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                                    {/* Floating Description Card */}
                                    <div className={`absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6 bg-white/90 backdrop-blur-md p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-700 delay-200 transform ${currentNode === idx ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                        <p className="text-[#4a4a4a] text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] leading-relaxed italic">
                                            "{item.longDesc}"
                                        </p>
                                        <div className="mt-3 sm:mt-4 flex items-center gap-3">
                                            <div className="w-8 sm:w-10 h-1 bg-[#1e90ff] rounded-full"></div>
                                            <Link href="/services" className="text-[#1e90ff] text-xs sm:text-sm font-bold hover:gap-2 transition-all inline-flex items-center gap-1.5">
                                                Dive Deeper <i className="fas fa-arrow-right text-[8px] sm:text-[10px]"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Decorative Background Elements */}
                        <div className="absolute -z-10 -top-6 -right-6 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-[#1e90ff]/10 rounded-full blur-3xl"></div>
                        <div className="absolute -z-10 -bottom-8 sm:-bottom-10 -left-6 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-[#1e90ff]/5 rounded-full blur-[80px]"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeOffer;
