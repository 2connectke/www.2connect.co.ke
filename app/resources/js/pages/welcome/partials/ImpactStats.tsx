import Counter from "./Counter";

const impactMetrics = [
    { target: 500, label: 'Opportunities' },
    { target: 100, label: 'Campus Clubs' },
    { target: 2000, label: 'Hours Served' },
    { target: 2000, label: 'Communities Reached' },
];

const ImpactNode = ({ metric, index }: { metric: typeof impactMetrics[0], index: number }) => {
    return (
        <div className="text-center relative">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary mb-2">
                <Counter target={metric.target} />+
            </div>
            <p className="text-sm sm:text-base text-brand-medium font-medium">
                {metric.label}
            </p>
        </div>
    );
};

const ImpactStats = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    {impactMetrics.map((metric, i) => (
                        <div key={i} className={i >= 2 ? "pt-8 md:pt-0" : "pb-8 md:pb-0"}>
                            <div className={i > 0 ? "md:pl-8 lg:pl-12" : ""}>
                                <ImpactNode metric={metric} index={i} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactStats;
