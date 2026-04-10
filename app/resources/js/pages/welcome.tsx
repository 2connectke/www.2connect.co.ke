import { Head, Link } from '@inertiajs/react';
import { useEffect, useRef, useState } from "react";

const heroImages = [
    '/assets/images/community.jpg',
    '/assets/images/education.jpg',
    '/assets/images/environment.jpg',
    '/assets/images/healthcare.jpg',
];

const eventData = [
    {
        image: '/assets/images/community.jpg',
        tag: 'Environment',
        title: 'Community Clean-Up',
        year: '2026',
    },
    {
        image: '/assets/images/education.jpg',
        tag: 'Health',
        title: 'Wellness Workshop',
        year: '2026',
    },
    {
        image: '/assets/images/environment.jpg',
        tag: 'Training',
        title: 'Leadership Training',
        year: '2026',
    },
    {
        image: '/assets/images/healthcare.jpg',
        tag: 'Community',
        title: 'Community Outreach',
        year: '2026',
    },
    {
        image: '/assets/images/SI2CONNECT.jpg',
        tag: 'Networking',
        title: 'Volunteer Meetup',
        year: '2026',
    },
];

const impactMetrics = [
    { target: 500, label: 'Opportunities', updates: ['Active now', 'Just added: 3', 'Trending'] },
    { target: 100, label: 'Campus Clubs', updates: ['Growing', '+2 this week', 'Expanding'] },
    { target: 2000, label: 'Hours Served', updates: ['Today: 156', '+12 hours', 'This week: 1,089'] },
    { target: 2000, label: 'Communities Reached', updates: ['This week: 23', '+5 today', 'Reaching new areas'] },
];

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

const Counter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!hasStarted) return;

        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [hasStarted, target, duration]);

    return <span ref={countRef}>{count}</span>;
};

const ImpactNode = ({ metric, index }: { metric: typeof impactMetrics[0], index: number }) => {

    return (
        <div
            className="group relative bg-white/90 backdrop-blur-md border border-brand-border rounded-2xl px-4 sm:px-6 py-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            style={{ animationDelay: `${(index + 1) * 0.08}s` }}
        >

            {/* Number */}
            <div className="text-[2.5rem] sm:text-[3rem] font-extrabold text-brand-primary tracking-tight leading-none mb-4">
                <Counter target={metric.target} />
                <span className="text-brand-dark">+</span>
            </div>

            {/* Divider */}
            <div className="w-10 h-[2px] bg-brand-primary/40 mx-auto mb-4 group-hover:w-16 transition-all"></div>

            {/* Label */}
            <p className="text-[0.8rem] sm:text-[0.85rem] font-semibold uppercase tracking-[1.5px] text-brand-medium">
                {metric.label}
            </p>

        </div>
    );
};

export default function Welcome() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentNode, setCurrentNode] = useState(0);
    const [eventCurrent, setEventCurrent] = useState(0);
    const heroTimerRef = useRef<NodeJS.Timeout | null>(null);

    const totalNodes = offeringsData.length;

    // Hero auto-advance
    useEffect(() => {
        heroTimerRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => {
            if (heroTimerRef.current) clearInterval(heroTimerRef.current);
        };
    }, []);

    const changeSlide = (index: number) => {
        setCurrentSlide(index);
        if (heroTimerRef.current) clearInterval(heroTimerRef.current);
        heroTimerRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 4000);
    };

    const nextEvent = () => setEventCurrent((prev) => (prev + 1) % eventData.length);
    const prevEvent = () => setEventCurrent((prev) => (prev - 1 + eventData.length) % eventData.length);
    const goToEvent = (i: number) => setEventCurrent(i);

    return (
        <>
            <Head title="Home | 2Connect" />

            {/* Hero Section */}
            <section
                className="relative h-[75vh] sm:h-[80vh] md:h-[85vh] min-h-[500px] sm:min-h-[550px] md:min-h-[600px] bg-cover bg-center flex items-center justify-center transition-[background-image] duration-[600ms] ease-in-out"
                style={{ backgroundImage: `url(${heroImages[currentSlide]})` }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 text-center max-w-[800px] px-4 sm:px-6 md:px-8 text-white">
                    <h1 className="text-2xl sm:text-3xl md:text-[3.5rem] font-bold mb-4 sm:mb-6 leading-[1.2] tracking-tight">
                        Your <span className="text-brand-primary font-extrabold">Action</span>. Your <span className="text-brand-primary font-extrabold">Impact</span>.
                    </h1>
                    <p className="text-sm sm:text-base md:text-xl leading-relaxed opacity-95 max-w-[600px] mx-auto px-2">
                        Connect with meaningful volunteer opportunities. Build skills. Transform communities.
                    </p>
                </div>

                {/* Impact Stats - Hidden on medium screens (md), visible on small and large screens */}
                <div className="absolute left-0 right-0 bottom-0 translate-y-[30%] sm:translate-y-[40%] md:translate-y-1/2 px-4 sm:px-6 md:px-8 z-30 hidden sm:block lg:block">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                            {impactMetrics.map((metric, i) => (
                                <ImpactNode key={i} metric={metric} index={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            {/* Who We Are */}
            <section className="pt-32 sm:pt-40 md:pt-56 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-16 bg-brand-bg-light">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center">
                    <div className="max-w-[520px] py-4 sm:py-6 md:py-10 px-4 sm:px-0">
                        <h2 className="text-[2rem] sm:text-[2.3rem] md:text-[3rem] font-extrabold leading-tight mb-4 text-brand-dark tracking-tight">
                            <span className="text-brand-primary text-[2.5rem] sm:text-[2.8rem] md:text-[3.3rem] font-black">W</span>ho we are
                        </h2>
                        <h3 className="text-xl sm:text-2xl text-brand-medium font-bold mb-3 sm:mb-4">A Movement of Young Changemakers</h3>
                        <p className="text-base sm:text-lg text-brand-medium mb-6 sm:mb-8 leading-relaxed">
                            2Connect is more than a volunteer platform, it's a community. Based in Kenya, we connect passionate young people across the nation to meaningful opportunities that drive positive change.
                        </p>
                        <Link href="/about" className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-transparent hover:text-brand-primary border-2 border-brand-primary transition-all duration-300 text-sm sm:text-base">
                            Learn More &nbsp;→
                        </Link>
                    </div>

                    {/* Responsive Image Grid - Different layouts for different screen sizes */}
                    <div className="relative w-full mt-12 sm:mt-16 md:mt-0">

                        {/* Large Screens (md and above) - Original rotated diamond layout */}
                        <div className="hidden md:block relative h-[520px]">
                            <div className="absolute aspect-square overflow-hidden rotate-45 border-[6px] border-white bg-brand-bg-light shadow-brand transition-all duration-500 hover:rotate-45 hover:scale-105 hover:z-10 hover:shadow-brand-lg w-[55%] top-[15%] left-[35%] z-[5] group">
                                <img src="/assets/images/SI2CONNECT.jpg" alt="Impact" className="min-w-[150%] min-h-[150%] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="absolute aspect-square overflow-hidden rotate-45 border-[6px] border-white bg-brand-bg-light shadow-brand transition-all duration-500 hover:rotate-45 hover:scale-105 hover:z-10 hover:shadow-brand-lg w-[35%] top-[-5%] left-[10%] z-[4] group">
                                <img src="/assets/images/community.jpg" alt="Community" className="min-w-[150%] min-h-[150%] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="absolute aspect-square overflow-hidden rotate-45 border-[6px] border-white bg-brand-bg-light shadow-brand transition-all duration-500 hover:rotate-45 hover:scale-105 hover:z-10 hover:shadow-brand-lg w-[32%] top-[45%] left-[0%] z-[3] group">
                                <img src="/assets/images/education.jpg" alt="Education" className="min-w-[150%] min-h-[150%] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="absolute aspect-square overflow-hidden rotate-45 border-[6px] border-white bg-brand-bg-light shadow-brand transition-all duration-500 hover:rotate-45 hover:scale-105 hover:z-10 hover:shadow-brand-lg w-[30%] top-[60%] left-[50%] z-[2] group">
                                <img src="/assets/images/environment.jpg" alt="Environment" className="min-w-[150%] min-h-[150%] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="absolute aspect-square overflow-hidden rotate-45 border-[6px] border-white bg-brand-bg-light shadow-brand transition-all duration-500 hover:rotate-45 hover:scale-105 hover:z-10 hover:shadow-brand-lg w-[28%] top-[10%] left-[80%] z-[1] group">
                                <img src="/assets/images/healthcare.jpg" alt="Health" className="min-w-[150%] min-h-[150%] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="absolute w-[15%] aspect-square bg-brand-primary rotate-45 top-[40%] left-[50%] z-[6] shadow-md"></div>
                        </div>

                        {/* Medium and Small Screens (below md) - Square grid layout */}
                        <div className="md:hidden">
                            {/* First Row - 2 squares */}
                            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg group">
                                    <img src="/assets/images/SI2CONNECT.jpg" alt="Impact" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg group">
                                    <img src="/assets/images/community.jpg" alt="Community" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                            </div>

                            {/* Second Row - 2 squares */}
                            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg group">
                                    <img src="/assets/images/education.jpg" alt="Education" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg group">
                                    <img src="/assets/images/environment.jpg" alt="Environment" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                            </div>

                            {/* Third Row - 1 square centered (for the 5th image) */}
                            <div className="flex justify-center">
                                <div className="w-1/2 aspect-square overflow-hidden rounded-2xl shadow-lg group">
                                    <img src="/assets/images/healthcare.jpg" alt="Health" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20 items-start">

                        {/* Left Side: Content List */}
                        <div className="w-full lg:w-[40%] space-y-6 sm:space-y-8">
                            <div>
                                <h2 className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.75rem] font-extrabold text-brand-dark leading-tight flex items-center gap-1 mb-6 sm:mb-8">
                                    What We<span className="text-brand-primary">Offer</span>
                                </h2>
                                <p className="text-base sm:text-lg text-brand-medium mb-6 sm:mb-8 leading-relaxed max-w-[450px] transition-all duration-300 group-hover:translate-x-1">
                                    Your journey to making an impact starts here. Explore our four pillars of volunteer engagement.
                                </p>
                            </div>

                            <div className="space-y-1 relative">
                                {/* Vertical Progress Indicator */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-border rounded-full z-0">
                                    <div
                                        className="absolute top-0 left-0 w-full bg-brand-primary rounded-full transition-all duration-700 ease-in-out"
                                        style={{
                                            height: `${((currentNode + 1) / totalNodes) * 100}%`,
                                            maxHeight: '100%'
                                        }}
                                    ></div>
                                </div>

                                {offeringsData.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`pl-6 sm:pl-8 md:pl-10 relative cursor-pointer group transition-all duration-300 ${currentNode === idx ? 'border-l-[4px] border-brand-primary' : 'border-l-[4px] border-transparent'}`}
                                        onMouseEnter={() => setCurrentNode(idx)}
                                        onClick={() => setCurrentNode(idx)}
                                    >
                                        <div className="flex items-center gap-2 mb-3 sm:mb-4 transition-all duration-300 group-hover:translate-x-1">
                                            <span className={`text-[0.75rem] sm:text-[0.85rem] font-black uppercase tracking-[2px] ${currentNode === idx ? 'text-brand-primary' : 'text-brand-light'}`}>
                                                <i className={`fas ${item.icon} mr-1 sm:mr-2 text-xs sm:text-sm`}></i> {item.title}
                                            </span>
                                        </div>
                                        <p className="text-sm sm:text-base md:text-lg text-brand-medium mb-6 sm:mb-8 leading-relaxed max-w-[450px] transition-all duration-300 group-hover:translate-x-1">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Dynamic Image Display */}
                        <div className="w-full lg:w-[60%] relative group">
                            <div className="relative aspect-video lg:aspect-auto lg:h-[550px] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden shadow-brand-lg bg-brand-bg-light border-4 border-white transition-all duration-500">
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
                                            <p className="text-brand-medium text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] leading-relaxed italic">
                                                "{item.longDesc}"
                                            </p>
                                            <div className="mt-3 sm:mt-4 flex items-center gap-3">
                                                <div className="w-8 sm:w-10 h-1 bg-brand-primary rounded-full"></div>
                                                <Link href="/services" className="text-brand-primary text-xs sm:text-sm font-bold hover:gap-2 transition-all inline-flex items-center gap-1.5">
                                                    Dive Deeper <i className="fas fa-arrow-right text-[8px] sm:text-[10px]"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative Background Element */}
                            <div className="absolute -z-10 -top-6 -right-6 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-brand-primary/10 rounded-full blur-3xl"></div>
                            <div className="absolute -z-10 -bottom-8 sm:-bottom-10 -left-6 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-brand-primary/5 rounded-full blur-[80px]"></div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="relative bg-brand-bg-light py-16 sm:py-20 md:py-20 px-4 sm:px-6 md:px-16 overflow-hidden">

                {/* Decorative blur */}
                <div className="absolute -top-24 -left-24 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-brand-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-brand-primary/10 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto relative">

                    {/* Section Header */}
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <span className="text-brand-primary font-semibold uppercase tracking-[2px] text-xs sm:text-sm">
                            Community Activities
                        </span>

                        <h2 className="text-[2rem] sm:text-[2.2rem] md:text-[3rem] font-extrabold text-brand-dark mt-2 sm:mt-3">
                            Upcoming Events
                        </h2>

                        <p className="text-brand-medium max-w-xl mx-auto mt-3 sm:mt-4 text-sm sm:text-base px-4">
                            Discover volunteer opportunities, training sessions, and
                            community initiatives happening soon.
                        </p>
                    </div>

                    {/* Carousel Container */}
                    <div className="relative max-w-6xl mx-auto">

                        <div className="overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[28px] shadow-2xl bg-white">

                            <div
                                className="flex transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
                                style={{ transform: `translateX(-${eventCurrent * 100}%)` }}
                            >

                                {eventData.map((event, i) => (
                                    <div
                                        key={i}
                                        className="min-w-full flex flex-col md:grid md:grid-cols-[1.2fr_1fr]"
                                    >

                                        {/* Image Side */}
                                        <div className="relative h-[250px] sm:h-[300px] md:h-[480px] overflow-hidden">

                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                className="w-full h-full object-cover"
                                            />

                                            {/* Gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

                                            {/* Date Badge */}
                                            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/90 backdrop-blur px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl shadow-md text-center">
                                                <div className="text-base sm:text-lg font-bold text-brand-dark">17</div>
                                                <div className="text-[10px] sm:text-xs uppercase text-brand-light">Jan</div>
                                            </div>

                                        </div>

                                        {/* Content Side */}
                                        <div className="flex flex-col justify-center p-6 sm:p-8 md:p-14">

                                            <span className="inline-block text-xs sm:text-sm font-semibold text-brand-primary bg-brand-primary/10 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full w-fit mb-4 sm:mb-5">
                                                {event.tag}
                                            </span>

                                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-dark mb-3 sm:mb-4">
                                                {event.title}
                                            </h3>

                                            <p className="text-sm sm:text-base text-brand-medium mb-6 sm:mb-8 leading-relaxed">
                                                Join volunteers and community members as we
                                                work together to create meaningful change
                                                and strengthen our local communities.
                                            </p>

                                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">

                                                <Link
                                                    href="/events"
                                                    className="text-center px-5 sm:px-7 py-2.5 sm:py-3.5 bg-brand-primary text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm sm:text-base"
                                                >
                                                    Register Now
                                                </Link>

                                                <Link
                                                    href="/events"
                                                    className="text-center sm:text-left text-brand-primary font-semibold hover:underline text-sm sm:text-base"
                                                >
                                                    Learn More →
                                                </Link>

                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Buttons */}
                            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center px-3 sm:px-4 md:px-6 pointer-events-none">
                                <button
                                    onClick={prevEvent}
                                    className="pointer-events-auto w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full bg-brand-primary shadow-xl flex items-center justify-center text-white transition-all duration-300 border border-brand-border/20 group"
                                >
                                    <i className="fas fa-chevron-left transition-transform group-hover:-translate-x-0.5 text-xs sm:text-sm md:text-base"></i>
                                </button>

                                <button
                                    onClick={nextEvent}
                                    className="pointer-events-auto w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full bg-brand-primary shadow-xl flex items-center justify-center text-white transition-all duration-300 border border-brand-border/20 group"
                                >
                                    <i className="fas fa-chevron-right transition-transform group-hover:translate-x-0.5 text-xs sm:text-sm md:text-base"></i>
                                </button>
                            </div>

                        </div>

                        {/* Indicators */}
                        <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
                            {eventData.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goToEvent(i)}
                                    className={`transition-all duration-300 rounded-full ${eventCurrent === i
                                        ? 'w-6 sm:w-8 h-1.5 sm:h-2 bg-brand-primary'
                                        : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>

                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-brand-primary py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-16 text-center">
                <div className="max-w-[700px] mx-auto text-white px-4 sm:px-0">
                    <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold mb-3 sm:mb-4">Join the Movement</h2>
                    <p className="text-base sm:text-lg md:text-xl opacity-95 mb-8 sm:mb-10 leading-relaxed">
                        Whether you want to volunteer, partner with us, or lead change on your campus — there is a place for you at 2Connect.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                        <Link href="/volunteer" className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-brand-primary no-underline rounded-lg font-bold transition-all duration-300 border-2 border-white hover:bg-transparent hover:text-white hover:-translate-y-0.5 text-sm sm:text-base">
                            Join as a Volunteer
                        </Link>
                        <Link href="/partner" className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent text-white no-underline rounded-lg font-bold border-2 border-white/50 transition-all duration-300 hover:bg-white hover:text-brand-primary hover:border-white text-sm sm:text-base">
                            Partner With Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}