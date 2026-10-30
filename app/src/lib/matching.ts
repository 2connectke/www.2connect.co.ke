/**
 * Volunteer matching: which opportunities fit the preferences someone
 * filled in on /services/volunteer-matching.
 */
import type { Opportunity } from '@/data/site';

/** Form values. An empty string means "any". */
export interface Preferences {
    skills: string;
    cause: string;
    location: string;
    availability: string;
    format: string;
}

export const anything: Preferences = {
    skills: '',
    cause: '',
    location: '',
    availability: '',
    format: '',
};

/** Whether an opportunity meets every preference that is filled in. */
export function fits(opportunity: Opportunity, preferences: Preferences) {
    const terms = preferences.skills
        .toLowerCase()
        .split(',')
        .map((term) => term.trim())
        .filter(Boolean);

    return (
        (!preferences.cause || opportunity.cause === preferences.cause) &&
        (!preferences.format || opportunity.format === preferences.format) &&
        (!preferences.location ||
            opportunity.location === preferences.location ||
            opportunity.format === 'Remote') &&
        (!preferences.availability ||
            opportunity.availability === preferences.availability ||
            opportunity.availability === 'Flexible') &&
        (!terms.length ||
            terms.some((term) =>
                opportunity.skills.some((skill) => skill.includes(term)),
            ))
    );
}
