

import { useState } from 'react';
import {
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    Clock3,
    Heart,
    MapPin,
    Sparkles,
    Users,
} from 'lucide-react';
import PageHero from '@/components/site/page-hero';
import JoinCta from '@/components/site/join-cta';
import { Link } from '@/lib/router';

const causes = [
    'Education',
    'Environment',
    'Youth empowerment',
    'Community development',
    'Health and wellbeing',
];

const opportunities = [
    {
        title: 'Community Learning Support',
        organisation: 'Example opportunity',
        category: 'Education',
        location: 'Nairobi',
        format: 'In person',
        commitment: 'Weekends',
        skills: 'Communication, mentoring, teaching',
        description:
            'Support learning activities and help young people build confidence and practical skills.',
        image: '/assets/images/2connect-outreach-01.jpg',
    },
    {
        title: 'Community Clean-up Initiative',
        organisation: 'Example opportunity',
        category: 'Environment',
        location: 'Nairobi',
        format: 'In person',
        commitment: 'Weekends',
        skills: 'Teamwork, organisation, community outreach',
        description:
            'Take part in community-led activities that encourage cleaner, healthier public spaces.',
        image: '/assets/images/2connect-outreach-02.jpg',
    },
    {
        title: 'Youth Events Volunteer',
        organisation: 'Example opportunity',
        category: 'Youth empowerment',
        location: 'Kiambu',
        format: 'In person',
        commitment: 'Flexible',
        skills: 'Communication, event planning, teamwork',
        description:
            'Help coordinate youth activities, welcome participants and create a positive community experience.',
        image: '/assets/images/2connect-meetup-09.jpg',
    },
    {
        title: 'Remote Digital Skills Support',
        organisation: 'Example opportunity',
        category: 'Community development',
        location: 'Remote',
        format: 'Remote',
        commitment: 'Flexible',
        skills: 'Technology, research, communication',
        description:
            'Use your digital skills to support community projects and help share useful information.',
        image: '/assets/images/2connect-meetup-04.jpg',
    },
];

export default function VolunteerMatching() {
    const [skills, setSkills] = useState('');
    const [cause, setCause] = useState('');
    const [county, setCounty] = useState('Any location');
    const [availability, setAvailability] = useState('Flexible');
    const [format, setFormat] = useState('Any format');
    const [hasSearched, setHasSearched] = useState(false);

    const matches = opportunities.filter((opportunity) => {
        const causeMatches =
            !cause || opportunity.category === cause;

        const formatMatches =
            format === 'Any format' || opportunity.format === format;

        const locationMatches =
            county === 'Any location' ||
            opportunity.location === county ||
            opportunity.location === 'Remote';

        const availabilityMatches =
            availability === 'Flexible' ||
            opportunity.commitment === availability ||
            opportunity.commitment === 'Flexible';

        return (
            causeMatches &&
            formatMatches &&
            locationMatches &&
            availabilityMatches
        );
    });

    function findMatches(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setHasSearched(true);

        document.getElementById('matching-results')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    return (
        <>
            <PageHero
                label="Volunteer Matching"
                title={[
                    'Your skills.',
                    <>
                        Your <span className="text-sun-deep">impact.</span>
                    </>,
                ]}
                intro="Find meaningful ways to contribute to your community. Explore opportunities that fit your interests, skills and availability and take the first step towards making a difference."
                image="/assets/images/2connect-outreach-01.jpg"
                imageAlt="2CONNECT community outreach"
                imagePosition="center 30%"
            />

            {/* INTRODUCTION */}
            <section className="bg-paper py-16 sm:py-20">
                <div className="container-wide">
                    <Link
                        href="/services"
                        className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-ink/70 transition hover:text-ink"
                    >
                        <ArrowLeft size={16} />
                        Back to What We Do
                    </Link>

                    <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
                        <div className="lg:col-span-7">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sun-deep">
                                Find your place
                            </p>
                            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                                The right opportunity starts with you.
                            </h2>
                        </div>

                        <p className="text-lg leading-relaxed text-body lg:col-span-5">
                            You do not need years of experience to make a
                            difference. Whether you enjoy teaching, organising
                            events, using technology or bringing people
                            together, there are many ways to contribute.
                            Start with what matters to you.
                        </p>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="bg-white py-20 sm:py-24">
                <div className="container-wide">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sun-deep">
                            Simple steps, meaningful impact
                        </p>
                        <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
                            How it works
                        </h2>
                        <p className="mt-4 leading-relaxed text-body">
                            Start with your interests, discover possibilities
                            and take the next step towards getting involved.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {[
                            {
                                number: '01',
                                icon: Users,
                                title: 'Tell us about yourself',
                                description:
                                    'Share your skills, the causes you care about, your location and when you are available.',
                            },
                            {
                                number: '02',
                                icon: Sparkles,
                                title: 'Explore opportunities',
                                description:
                                    'Review opportunities that fit your preferences and learn what each role involves.',
                            },
                            {
                                number: '03',
                                icon: Heart,
                                title: 'Make your move',
                                description:
                                    'Choose an opportunity, contact the team and follow the application instructions.',
                            },
                        ].map((step) => (
                            <article
                                key={step.number}
                                className="rounded-2xl border border-ink/10 bg-paper p-7 sm:p-8"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-display text-3xl font-bold text-sun-deep">
                                        {step.number}
                                    </span>
                                    <step.icon
                                        size={26}
                                        strokeWidth={1.7}
                                        className="text-sun-deep"
                                    />
                                </div>
                                <h3 className="mt-7 font-display text-xl font-bold text-ink">
                                    {step.title}
                                </h3>
                                <p className="mt-3 leading-relaxed text-body">
                                    {step.description}
                                </p>
                            </article>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={() =>
                            document.getElementById('volunteer-profile')
                                ?.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start',
                                })
                        }
                        className="mt-9 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 font-semibold text-white transition hover:bg-ink/80"
                    >
                        Find My Match
                        <ArrowDown size={17} />
                    </button>
                </div>
            </section>

            {/* VOLUNTEER PREFERENCES */}
            <section
                id="volunteer-profile"
                className="scroll-mt-8 bg-paper py-20 sm:py-24"
            >
                <div className="container-wide grid gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sun-deep">
                            Your next step
                        </p>
                        <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
                            What kind of impact would you like to make?
                        </h2>
                        <p className="mt-5 leading-relaxed text-body">
                            Tell us what works for you. Use your preferences
                            to explore the example opportunities below.
                        </p>

                        <div className="mt-8 overflow-hidden rounded-2xl">
                            <img
                                src="/assets/images/2connect-meetup-09.jpg"
                                alt="2CONNECT community members connecting"
                                className="h-64 w-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        <form
                            onSubmit={findMatches}
                            className="rounded-3xl border border-ink/10 bg-white p-6 sm:p-9"
                        >
                            <div className="mb-8">
                                <h3 className="font-display text-2xl font-bold text-ink">
                                    Your volunteer preferences
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-body">
                                    Complete the fields below to narrow down
                                    the opportunities shown.
                                </p>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <label className="block text-sm font-semibold text-ink sm:col-span-2">
                                    Skills or experience
                                    <input
                                        type="text"
                                        value={skills}
                                        onChange={(event) =>
                                            setSkills(event.target.value)
                                        }
                                        placeholder="e.g. teaching, design, coding"
                                        className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 font-normal outline-none transition placeholder:text-ink/40 focus:border-sun-deep focus:ring-2 focus:ring-sun/40"
                                    />
                                    <span className="mt-2 block font-normal text-body">
                                        Include skills you have or would like
                                        to develop.
                                    </span>
                                </label>

                                <label className="block text-sm font-semibold text-ink">
                                    Cause you care about
                                    <select
                                        value={cause}
                                        onChange={(event) =>
                                            setCause(event.target.value)
                                        }
                                        className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 font-normal outline-none focus:border-sun-deep focus:ring-2 focus:ring-sun/40"
                                    >
                                        <option value="">All causes</option>
                                        {causes.map((item) => (
                                            <option key={item} value={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                </label>

                                <label className="block text-sm font-semibold text-ink">
                                    Preferred county or location
                                    <select
                                        value={county}
                                        onChange={(event) =>
                                            setCounty(event.target.value)
                                        }
                                        className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 font-normal outline-none focus:border-sun-deep focus:ring-2 focus:ring-sun/40"
                                    >
                                        <option>Any location</option>
                                        <option>Nairobi</option>
                                        <option>Kiambu</option>
                                        <option>Mombasa</option>
                                        <option>Kisumu</option>
                                        <option>Nakuru</option>
                                    </select>
                                </label>

                                <label className="block text-sm font-semibold text-ink">
                                    Availability
                                    <select
                                        value={availability}
                                        onChange={(event) =>
                                            setAvailability(event.target.value)
                                        }
                                        className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 font-normal outline-none focus:border-sun-deep focus:ring-2 focus:ring-sun/40"
                                    >
                                        <option>Flexible</option>
                                        <option>Weekdays</option>
                                        <option>Weekends</option>
                                    </select>
                                </label>

                                <label className="block text-sm font-semibold text-ink">
                                    Preferred format
                                    <select
                                        value={format}
                                        onChange={(event) =>
                                            setFormat(event.target.value)
                                        }
                                        className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 font-normal outline-none focus:border-sun-deep focus:ring-2 focus:ring-sun/40"
                                    >
                                        <option>Any format</option>
                                        <option>In person</option>
                                        <option>Remote</option>
                                    </select>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink px-6 py-4 font-semibold text-white transition hover:bg-ink/80 sm:w-auto"
                            >
                                Explore matching opportunities
                                <ArrowRight size={18} />
                            </button>

                        </form>
                    </div>
                </div>
            </section>

            {/* OPPORTUNITY RESULTS */}
            <section
                id="matching-results"
                className="scroll-mt-8 bg-white py-20 sm:py-24"
            >
                <div className="container-wide">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                        <div className="max-w-2xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sun-deep">
                                Discover what is possible
                            </p>
                            <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
                                {hasSearched
                                    ? 'Opportunities for you'
                                    : 'Explore opportunities'}
                            </h2>
                            
                        </div>

                        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-paper px-4 py-2 text-sm font-semibold text-ink">
                            <Sparkles size={16} className="text-sun-deep" />
                            {matches.length} example{' '}
                            {matches.length === 1
                                ? 'opportunity'
                                : 'opportunities'}
                        </span>
                    </div>

                    {matches.length > 0 ? (
                        <div className="mt-10 grid gap-6 md:grid-cols-2">
                            {matches.map((opportunity) => (
                                <article
                                    key={opportunity.title}
                                    className="overflow-hidden rounded-2xl border border-ink/10 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="relative">
                                        <img
                                            src={opportunity.image}
                                            alt="Community activity representing an example volunteer opportunity"
                                            className="h-56 w-full object-cover"
                                            loading="lazy"
                                        />
                                        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink">
                                            {opportunity.organisation}
                                        </span>
                                    </div>

                                    <div className="p-6 sm:p-7">
                                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-sun-deep">
                                            {opportunity.category}
                                        </span>
                                        <h3 className="mt-3 font-display text-2xl font-bold text-ink">
                                            {opportunity.title}
                                        </h3>
                                        <p className="mt-3 leading-relaxed text-body">
                                            {opportunity.description}
                                        </p>

                                        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm text-body">
                                            <span className="inline-flex items-center gap-2">
                                                <MapPin
                                                    size={16}
                                                    className="text-sun-deep"
                                                />
                                                {opportunity.location}
                                            </span>
                                            <span className="inline-flex items-center gap-2">
                                                <Clock3
                                                    size={16}
                                                    className="text-sun-deep"
                                                />
                                                {opportunity.commitment}
                                            </span>
                                        </div>

                                        <p className="mt-4 border-t border-ink/10 pt-4 text-sm leading-relaxed text-body">
                                            <strong className="text-ink">
                                                Useful skills:
                                            </strong>{' '}
                                            {opportunity.skills}
                                        </p>

                                        <Link
                                            href="/contact"
                                            className="mt-6 inline-flex items-center gap-2 font-semibold text-ink transition hover:text-sun-deep"
                                        >
                                            Ask about opportunities
                                            <ArrowRight size={17} />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="mt-10 rounded-2xl border border-ink/10 bg-paper p-8 sm:p-12">
                            <h3 className="font-display text-2xl font-bold text-ink">
                                No examples match every preference yet.
                            </h3>
                            <p className="mt-3 max-w-2xl leading-relaxed text-body">
                                Try choosing a different cause, location or
                                format. Real opportunities can be added as
                                2CONNECT's listings become available.
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    setCause('');
                                    setCounty('Any location');
                                    setAvailability('Flexible');
                                    setFormat('Any format');
                                    setHasSearched(false);
                                }}
                                className="mt-6 rounded-full border border-ink/20 px-5 py-3 font-semibold text-ink transition hover:bg-white"
                            >
                                Reset preferences
                            </button>
                        </div>
                    )}

                </div>
            </section>

            {/* FINAL CALL TO ACTION */}
            <section className="bg-ink py-20 text-white sm:py-24">
                <div className="container-wide grid gap-10 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sun">
                            Your community needs you
                        </p>
                        <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold sm:text-5xl">
                            Small actions can create meaningful change.
                        </h2>
                        <p className="mt-5 max-w-2xl leading-relaxed text-white/70">
                            Bring your ideas, your skills and your willingness
                            to learn. Take the first step towards contributing
                            to something bigger than yourself.
                        </p>
                    </div>
                    <div className="lg:col-span-4 lg:justify-self-end">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 rounded-full bg-sun px-6 py-4 font-semibold text-ink transition hover:bg-white"
                        >
                            Connect with 2CONNECT
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            <JoinCta
                title={['Make your', 'impact count.']}
                body="You bring your time, your skills and your willingness to help. Together, we can turn them into meaningful change."
            />
        </>
    );
}
