import { ArrowDown } from 'lucide-react';
import type { SubmitEvent } from 'react';
import Eyebrow from '@/components/site/eyebrow';
import { Reveal, RevealLines } from '@/components/site/reveal';
import { causes, locations } from '@/data/site';
import type { Preferences } from '@/lib/matching';
import SelectField, { fieldClasses } from './SelectField';

/** Lets a reset button elsewhere on the page clear this form. */
export const MATCH_FORM_ID = 'match-form';

interface MatchFormProps {
    onMatch: (preferences: Preferences) => void;
    onClear: () => void;
}

/** Preferences form. Results change only when it is submitted or reset. */
const MatchForm = ({ onMatch, onClear }: MatchFormProps) => {
    const submit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        onMatch(
            Object.fromEntries(
                new FormData(event.currentTarget),
            ) as unknown as Preferences,
        );
    };

    return (
        <section id="match" className="scroll-mt-24 bg-white py-28 sm:py-36">
            <div className="container-wide grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-4">
                    <Eyebrow>Your preferences</Eyebrow>
                    <RevealLines
                        className="mt-6 text-display-md text-ink"
                        lines={['What do you', 'want to do?']}
                    />
                    <Reveal delay={0.15}>
                        <p className="mt-6 leading-relaxed text-body">
                            Fill in as much or as little as you like. Leave a
                            field blank and we will not filter on it.
                        </p>
                    </Reveal>
                </div>

                <Reveal className="lg:col-span-8" delay={0.1}>
                    <form
                        id={MATCH_FORM_ID}
                        onSubmit={submit}
                        onReset={onClear}
                        className="rounded-4xl bg-paper/60 p-6 ring-1 ring-ink/10 sm:p-10"
                    >
                        <div className="grid gap-6 sm:grid-cols-2">
                            <label className="block text-sm font-semibold text-ink sm:col-span-2">
                                Skills or experience
                                <input
                                    type="text"
                                    name="skills"
                                    placeholder="e.g. teaching, design, event planning"
                                    aria-describedby="skills-hint"
                                    className={fieldClasses}
                                />
                                <span
                                    id="skills-hint"
                                    className="mt-2 block font-normal text-body"
                                >
                                    Separate them with commas. Skills you want
                                    to learn count too.
                                </span>
                            </label>

                            <SelectField
                                label="Cause you care about"
                                name="cause"
                                anyLabel="Any cause"
                                options={causes}
                            />
                            <SelectField
                                label="Where you are"
                                name="location"
                                anyLabel="Anywhere"
                                options={locations}
                            />
                            <SelectField
                                label="When you are free"
                                name="availability"
                                anyLabel="Any time"
                                options={['Weekdays', 'Weekends']}
                            />
                            <SelectField
                                label="In person or remote"
                                name="format"
                                anyLabel="Either works"
                                options={['In person', 'Remote']}
                            />
                        </div>

                        <button
                            type="submit"
                            className="group mt-10 inline-flex items-center justify-between gap-4 rounded-full bg-ink py-1.5 pr-1.5 pl-7 text-[0.95rem] font-semibold whitespace-nowrap text-white transition-colors duration-500 ease-out-expo hover:bg-navy focus-visible:ring-4 focus-visible:ring-sun/40 focus-visible:outline-none"
                        >
                            <span>Show my matches</span>
                            <span className="grid size-11 place-items-center rounded-full bg-sun text-ink">
                                <ArrowDown
                                    size={18}
                                    className="transition-transform duration-500 ease-out-expo group-hover:translate-y-0.5"
                                />
                            </span>
                        </button>
                    </form>
                </Reveal>
            </div>
        </section>
    );
};

export default MatchForm;
