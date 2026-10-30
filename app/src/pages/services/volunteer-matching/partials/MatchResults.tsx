import ButtonLink from '@/components/site/button-link';
import Eyebrow from '@/components/site/eyebrow';
import type { Opportunity } from '@/data/site';
import { MATCH_FORM_ID } from './MatchForm';
import OpportunityCard from './OpportunityCard';

interface MatchResultsProps {
    matches: Opportunity[];
    /** Whether any preference is set, to title the list. */
    filtered: boolean;
}

/** The matching opportunities, or a way out when none fit. */
const MatchResults = ({ matches, filtered }: MatchResultsProps) => (
    <section id="matches" className="scroll-mt-24 bg-paper py-28 sm:py-36">
        <div className="container-wide">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-7">
                    <div role="status">
                        <Eyebrow>
                            {matches.length} example{' '}
                            {matches.length === 1 ? 'match' : 'matches'}
                        </Eyebrow>
                    </div>
                    <h2 className="mt-6 text-display-md text-ink">
                        {filtered ? 'Your matches.' : 'Open to everyone.'}
                    </h2>
                </div>
                <p className="max-w-md text-lg leading-relaxed text-body lg:col-span-5">
                    These are examples while we build our listings. Tell us
                    which one sounds like you and we will match you with the
                    real thing.
                </p>
            </div>

            {matches.length > 0 ? (
                <ul className="mt-16 grid gap-6 md:grid-cols-2">
                    {matches.map((opportunity, index) => (
                        <OpportunityCard
                            key={opportunity.title}
                            opportunity={opportunity}
                            delay={index * 0.08}
                        />
                    ))}
                </ul>
            ) : (
                <div className="mt-16 rounded-4xl bg-white p-8 ring-1 ring-ink/10 sm:p-12">
                    <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">
                        Nothing fits all of that yet.
                    </h3>
                    <p className="mt-3 max-w-2xl leading-relaxed text-body">
                        Try a different cause or place, or tell us what you are
                        after and we will look for you.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <button
                            type="reset"
                            form={MATCH_FORM_ID}
                            className="rounded-full border border-ink/15 px-6 py-3.5 text-[0.95rem] font-semibold text-ink transition-colors duration-500 ease-out-expo hover:border-ink hover:bg-ink hover:text-white"
                        >
                            Clear my preferences
                        </button>
                        <ButtonLink href="/contact" variant="ink">
                            Tell us what you want
                        </ButtonLink>
                    </div>
                </div>
            )}
        </div>
    </section>
);

export default MatchResults;
