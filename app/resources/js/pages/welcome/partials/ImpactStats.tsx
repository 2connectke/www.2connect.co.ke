import Counter from "./Counter";

const impactMetrics = [
    { target: 500, label: 'Opportunities', updates: ['Active now', 'Just added: 3', 'Trending'] },
    { target: 100, label: 'Campus Clubs', updates: ['Growing', '+2 this week', 'Expanding'] },
    { target: 2000, label: 'Hours Served', updates: ['Today: 156', '+12 hours', 'This week: 1,089'] },
    { target: 2000, label: 'Communities Reached', updates: ['This week: 23', '+5 today', 'Reaching new areas'] },
];

const ImpactNode = ({ metric, index }: { metric: typeof impactMetrics[0], index: number }) => {
    return (
        <div
            className="group relative bg-white/90 backdrop-blur-md border border-brand-border rounded-2xl px-4 sm:px-6 py-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            style={{ animationDelay: `${(index + 1) * 0.08}s` }}
        >
            <div className="text-[2.5rem] sm:text-[3rem] font-extrabold text-brand-primary tracking-tight leading-none mb-4">
                <Counter target={metric.target} />
                <span className="text-brand-dark">+</span>
            </div>
            <div className="w-10 h- bg-brand-primary/40 mx-auto mb-4 group-hover:w-16 transition-all"></div>
            <p className="text-[0.8rem] sm:text-[0.85rem] font-semibold uppercase tracking-[1.5px] text-brand-medium">
                {metric.label}
            </p>
        </div>
    );
};

const ImpactStats = () => {
    return (
        <div className="absolute left-0 right-0 bottom-0 translate-y-[30%] sm:translate-y-[40%] md:translate-y-1/2 px-4 sm:px-6 md:px-8 z-30 hidden sm:block lg:block">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {impactMetrics.map((metric, i) => (
                        <ImpactNode key={i} metric={metric} index={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImpactStats;
