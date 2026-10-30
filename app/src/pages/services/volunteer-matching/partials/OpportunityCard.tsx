import { Clock3, MapPin } from 'lucide-react';
import ButtonLink from '@/components/site/button-link';
import { Reveal } from '@/components/site/reveal';
import type { Opportunity } from '@/data/site';

/** One example opportunity: photo, what it is, where and when, and who it suits. */
const OpportunityCard = ({
    opportunity,
    delay,
}: {
    opportunity: Opportunity;
    delay: number;
}) => (
    <Reveal
        as="li"
        delay={delay}
        className="overflow-hidden rounded-4xl bg-white ring-1 ring-ink/10"
    >
        <div className="relative">
            <img
                src={opportunity.image}
                alt=""
                className="h-56 w-full object-cover"
                loading="lazy"
            />
            <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink">
                Example
            </span>
        </div>

        <div className="p-7 sm:p-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-azure-deep uppercase">
                {opportunity.cause}
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.02em] text-ink">
                {opportunity.title}
            </h3>
            <p className="mt-3 leading-relaxed text-body">
                {opportunity.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm text-body">
                <span className="inline-flex items-center gap-2">
                    <MapPin size={16} className="text-sun-deep" aria-hidden />
                    {opportunity.location}
                </span>
                <span className="inline-flex items-center gap-2">
                    <Clock3 size={16} className="text-sun-deep" aria-hidden />
                    {opportunity.availability}
                </span>
            </div>

            <p className="mt-5 border-t border-ink/10 pt-5 text-sm leading-relaxed text-body">
                <strong className="text-ink">Good for:</strong>{' '}
                {opportunity.skills.join(', ')}
            </p>

            <ButtonLink href="/contact" variant="outline" className="mt-7">
                Ask us about this
            </ButtonLink>
        </div>
    </Reveal>
);

export default OpportunityCard;
