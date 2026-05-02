import { Link } from '@inertiajs/react';
import ImpactStats from './ImpactStats';

const storyPoints = [
    'We prepare young people for meaningful service, not one-off volunteering.',
    'We connect community needs with people who are trained, supported, and ready.',
    'We turn participation into growth: skills, wellbeing, networks, and purpose.',
];

const imageTiles = [
    {
        src: '/assets/images/SI2CONNECT.jpg',
        alt: '2Connect volunteers gathered at a community activity',
        className:
            'col-start-1 col-end-8 row-start-1 row-end-8 rounded-tl-[56px] rounded-br-[56px]',
    },
    {
        src: '/assets/images/community.jpg',
        alt: 'Young people serving in the community',
        className:
            'col-start-8 col-end-13 row-start-1 row-end-5 rounded-tr-[44px]',
    },
    {
        src: '/assets/images/education.jpg',
        alt: 'Education volunteering moment',
        className:
            'col-start-8 col-end-13 row-start-5 row-end-9 rounded-br-[44px]',
    },
    {
        src: '/assets/images/environment.jpg',
        alt: 'Environmental action with young volunteers',
        className:
            'col-start-1 col-end-6 row-start-8 row-end-13 rounded-bl-[44px]',
    },
];

const WhoWeAre = () => {
    return (
        <>
            <section className="relative overflow-hidden bg-[#f8fafc] px-4 pt-28 pb-16 sm:px-6 sm:pt-36 sm:pb-20 md:px-16 md:pt-48 md:pb-24">
                <div className="absolute inset-x-0 top-0 h-36 bg-white"></div>
                <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            <div className="absolute -top-5 -left-5 hidden h-24 w-24 border-t-2 border-l-2 border-brand-accent/70 sm:block"></div>
                            <div className="grid h-[510px] grid-cols-12 grid-rows-12 gap-3 sm:h-[640px] sm:gap-4 lg:h-[590px]">
                                {imageTiles.map((tile) => (
                                    <div
                                        key={tile.src}
                                        className={`group relative overflow-hidden bg-white shadow-brand-lg ring-1 ring-white/80 ${tile.className}`}
                                    >
                                        <img
                                            src={tile.src}
                                            alt={tile.alt}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-brand-dark/20 via-transparent to-transparent"></div>
                                    </div>
                                ))}
                                <div className="col-start-6 col-end-13 row-start-9 row-end-13 flex flex-col justify-between rounded-[8px] border border-brand-border bg-white p-5 shadow-brand sm:p-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex items-center">
                                            <img src="/assets/images/connect_logo.png" alt="2Connect" className="h-10 w-auto" />
                                        </div>
                                        <span className="text-right text-[0.68rem] leading-tight font-black tracking-[0.24em] text-brand-accent uppercase">
                                            People
                                            <br />
                                            Purpose
                                        </span>
                                    </div>
                                    <p className="mt-5 max-w-[260px] text-base leading-snug font-bold text-brand-dark">
                                        A community where service becomes
                                        growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 max-w-[620px] lg:order-2">
                        <span className="mb-4 inline-flex items-center gap-3 text-[0.78rem] font-bold tracking-[0.22em] text-brand-primary uppercase">
                            <span className="h-px w-10 bg-brand-accent"></span>
                            Who we are
                        </span>
                        <h2 className="text-4xl leading-[1.05] font-black tracking-tight text-brand-dark sm:text-5xl md:text-6xl">
                            A living network for young people who want their
                            service to matter.
                        </h2>
                        <p className="mt-6 text-lg leading-[1.85] text-brand-medium">
                            2Connect brings together youth, community
                            organizations, and structured support so
                            volunteering becomes more than showing up. It
                            becomes preparation, belonging, and measurable
                            impact.
                        </p>

                        <div className="mt-8 grid gap-3">
                            {storyPoints.map((point, index) => (
                                <div
                                    key={point}
                                    className="flex gap-4 rounded-[8px] border border-brand-border bg-white/80 p-4 shadow-brand"
                                >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary text-sm font-black text-white">
                                        {index + 1}
                                    </span>
                                    <p className="text-[0.95rem] leading-relaxed text-brand-medium">
                                        {point}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/about"
                            className="mt-8 inline-flex items-center rounded-[8px] border-2 border-brand-primary bg-brand-primary px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-brand-primary sm:text-base"
                        >
                            Learn more
                            <span className="ml-3">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Impact Stats Section */}
            <ImpactStats />
        </>
    );
};

export default WhoWeAre;
