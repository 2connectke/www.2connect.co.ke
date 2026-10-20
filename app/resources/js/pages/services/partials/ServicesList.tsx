import { Link } from '@inertiajs/react';
import {
    ArrowUpRight,
    GraduationCap,
    Handshake,
    HeartPulse,
    Megaphone,
    School,
    Users,
} from 'lucide-react';
import Eyebrow from '@/components/site/eyebrow';
import { Reveal, RevealLines } from '@/components/site/reveal';

const services = [
    {
        icon: Users,
        title: 'Volunteer Matching',
        tagline: 'The right person, in the right place.',
        description:
            'Tell us what you are good at and what you care about. We find you work that needs exactly that, at times that fit your life, so you spend your energy where it counts.',
        image: '/assets/images/2connect-outreach-01.jpg',
    },
    {
        icon: HeartPulse,
        title: 'Connect+ Wellness',
        tagline: 'Hata wanaosaidia wanahitaji msaada.',
        description:
            'Free wellness sessions, peer groups and safe spaces to talk. Showing up for others is heavy sometimes, and you should never carry it alone.',
        image: '/assets/images/2connect-meetup-02.jpg',
    },
    {
        icon: GraduationCap,
        title: 'Volunteer Training Academy',
        tagline: 'Skills you can put on your CV, and actually use.',
        description:
            'Practical, certified training in leadership, running projects and working with communities. The kind of experience employers keep asking you for.',
        image: '/assets/images/2connect-gathering-01.jpg',
    },
    {
        icon: School,
        title: 'Internships and Attachments',
        tagline: 'Usimalize campus bila story ya impact.',
        description:
            'Start or lead a 2Connect club on your campus, run a regional chapter and work side by side with partner organisations before you even graduate.',
        image: '/assets/images/2connect-portrait-01.jpg',
    },
    {
        icon: Handshake,
        title: 'NGO and Community Partnerships',
        tagline: 'People who show up, ready to work.',
        description:
            'We team up with NGOs and grassroots groups who need reliable hands. We send prepared volunteers, stay close to the work and keep checking in.',
        image: '/assets/images/2connect-outreach-02.jpg',
    },
    {
        icon: Megaphone,
        title: 'Impact Campaigns',
        tagline: 'Our streets, our problems, our fix.',
        description:
            'Cleanups, awareness drives and campaigns led by young people, taking on the real problems we see in our neighbourhoods every day.',
        image: '/assets/images/2connect-hike-01.jpg',
    },
];

/** Editorial numbered rows. Hovering a row opens a photo and flips it to ink. */
const ServicesList = () => {
    return (
        <section className="relative bg-paper py-28 sm:py-36">
            <div className="container-wide">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-7">
                        <Eyebrow>Six ways in</Eyebrow>
                        <RevealLines
                            className="mt-6 text-display-lg text-ink"
                            lines={['Pick your', 'way in.']}
                        />
                    </div>
                    <Reveal className="lg:col-span-5" delay={0.15}>
                        <p className="max-w-md text-lg leading-relaxed text-body">
                            Every programme works both ways. The community gets
                            real help, and you walk away with skills, friends and
                            a story worth telling.
                        </p>
                    </Reveal>
                </div>
            </div>

            <ul className="mt-16 border-t border-ink/10 sm:mt-20">
                {services.map((service, index) => (
                    <Reveal as="li" key={service.title} delay={index * 0.05}>
                        <Link
                            href="/contact"
                            className="group relative block overflow-hidden border-b border-ink/10 transition-colors duration-700 ease-out-expo hover:bg-ink hover:text-white"
                        >
                            <div className="container-wide grid items-center gap-6 py-10 md:grid-cols-12 md:gap-8 md:py-12">
                                <div className="flex items-center gap-5 md:col-span-5">
                                    <span className="font-display text-sm font-semibold tracking-wider text-ink/40 transition-colors group-hover:text-sun">
                                        0{index + 1}
                                    </span>
                                    <h3 className="font-display text-[clamp(1.9rem,3.4vw,3.25rem)] leading-[1] font-bold tracking-[-0.035em]">
                                        {service.title}
                                    </h3>
                                </div>

                                <div className="max-w-xl md:col-span-4">
                                    <p className="font-display text-lg leading-snug font-semibold tracking-[-0.01em] text-sun-deep transition-colors group-hover:text-sun">
                                        {service.tagline}
                                    </p>
                                    <p className="mt-2 leading-relaxed text-body transition-colors group-hover:text-white/70">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between gap-4 md:col-span-3 md:justify-end">
                                    <div className="relative hidden h-24 w-0 overflow-hidden rounded-2xl transition-[width] duration-700 ease-out-expo group-hover:w-40 lg:block">
                                        <img
                                            src={service.image}
                                            alt=""
                                            className="absolute inset-0 h-full w-40 max-w-none scale-110 object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-100"
                                        />
                                    </div>
                                    <span className="grid size-14 shrink-0 place-items-center rounded-full bg-sun-soft text-sun-deep transition-colors duration-500 group-hover:bg-white/10 group-hover:text-sun">
                                        <service.icon size={24} strokeWidth={1.75} />
                                    </span>
                                    <span className="grid size-14 shrink-0 place-items-center rounded-full border border-ink/15 transition-all duration-500 group-hover:rotate-45 group-hover:border-sun group-hover:bg-sun group-hover:text-ink">
                                        <ArrowUpRight size={20} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </Reveal>
                ))}
            </ul>
        </section>
    );
};

export default ServicesList;
