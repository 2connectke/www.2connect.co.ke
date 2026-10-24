/**
 * Data for the internal brand guide. Colour values are read from app.css at
 * build time, so this page can never drift from the real palette: change a
 * colour there and the guide (and its contrast checks) follow.
 */
import css from '@/app.css?raw';

const hexes: Record<string, string> = Object.fromEntries(
    [...css.matchAll(/--color-([a-z-]+):\s*(#[0-9a-f]{6});/gi)].map(
        ([, name, hex]) => [name, hex.toLowerCase()],
    ),
);

hexes.white = '#ffffff';

export const hex = (token: string) => hexes[token] ?? '#000000';

export interface Colour {
    token: string;
    name: string;
    role: string;
}

export const palette: { group: string; intro: string; colours: Colour[] }[] = [
    {
        group: 'Core',
        intro: 'Sampled from the logo. Sun and azure are the two dots; navy is where they meet.',
        colours: [
            {
                token: 'sun',
                name: 'Sun',
                role: 'Our energy. Primary buttons, highlights, the first dot.',
            },
            {
                token: 'azure',
                name: 'Azure',
                role: 'Our calm. The second dot, accents and links on dark.',
            },
            {
                token: 'navy',
                name: 'Navy',
                role: 'Depth. The overlap where the two circles meet.',
            },
            {
                token: 'ink',
                name: 'Ink',
                role: 'Headlines and dark sections. We never use pure black.',
            },
        ],
    },
    {
        group: 'Tints and shades',
        intro: 'Deeper versions carry text; soft versions make calm panels.',
        colours: [
            {
                token: 'sun-deep',
                name: 'Sun deep',
                role: 'Orange accent words in big headlines, required marks.',
            },
            {
                token: 'sun-soft',
                name: 'Sun soft',
                role: 'Warm panels, notices and badges.',
            },
            {
                token: 'azure-deep',
                name: 'Azure deep',
                role: 'Blue text on light backgrounds, speech bubbles.',
            },
            {
                token: 'azure-soft',
                name: 'Azure soft',
                role: 'The Join band, chips like #TuConnect.',
            },
            {
                token: 'ink-soft',
                name: 'Ink soft',
                role: 'Quiet shapes on ink, like the giant footer wordmark.',
            },
        ],
    },
    {
        group: 'Neutrals',
        intro: 'Warm, paper-like neutrals keep the site friendly instead of clinical.',
        colours: [
            {
                token: 'paper',
                name: 'Paper',
                role: 'The page background. Warm, never stark white.',
            },
            {
                token: 'sand',
                name: 'Sand',
                role: 'Second background, hover fills on paper.',
            },
            {
                token: 'white',
                name: 'White',
                role: 'Cards and forms that sit on paper; text on ink.',
            },
            {
                token: 'line',
                name: 'Line',
                role: 'Hairlines and borders on light surfaces.',
            },
            {
                token: 'body',
                name: 'Body',
                role: 'Paragraph text on light backgrounds.',
            },
        ],
    },
];

/** Rough share of a typical page, as guidance for new layouts. */
export const balance = [
    { token: 'paper', share: 38 },
    { token: 'white', share: 14 },
    { token: 'ink', share: 24 },
    { token: 'sun', share: 11 },
    { token: 'azure', share: 7 },
    { token: 'azure-soft', share: 3 },
    { token: 'navy', share: 3 },
];

export function rgb(value: string) {
    const n = parseInt(value.slice(1), 16);

    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function luminance(value: string) {
    const [r, g, b] = rgb(value).map((channel) => {
        const c = channel / 255;

        return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    });

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** WCAG contrast ratio between two colours. */
export function contrast(a: string, b: string) {
    const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);

    return (light + 0.05) / (dark + 0.05);
}

/** Ink or white, whichever reads better on the given colour. */
export const textOn = (background: string) =>
    contrast(background, hex('ink')) >= contrast(background, '#ffffff')
        ? hex('ink')
        : '#ffffff';

export const grade = (ratio: number) =>
    ratio >= 7
        ? 'AAA'
        : ratio >= 4.5
          ? 'AA'
          : ratio >= 3
            ? 'Large text only'
            : 'Decoration only';

/** Text colour on background, with what it is used for on the site. */
export const pairings: [string, string, string][] = [
    ['ink', 'paper', 'Headlines and most text'],
    ['body', 'paper', 'Paragraphs'],
    ['white', 'ink', 'Text on dark sections'],
    ['sun', 'ink', 'Highlight words on dark'],
    ['azure', 'ink', 'Accents on dark'],
    ['ink', 'sun', 'Text on sun buttons'],
    ['white', 'navy', 'Text on navy'],
    ['azure-deep', 'white', 'Blue text and links on light'],
    ['white', 'azure-deep', 'Speech bubbles'],
    ['ink', 'azure-soft', 'Join band, chips'],
    ['azure', 'white', 'Big blue display words only'],
    ['sun-deep', 'paper', 'Orange headline accents'],
    ['white', 'sun', 'Never'],
];

/** Tokens still defined in app.css that no part of the site uses. */
export const legacyTokens = [
    'brand-primary',
    'brand-accent',
    'brand-dark',
    'brand-medium',
    'brand-light',
    'brand-bg-light',
    'brand-border',
    'brand-primary-light',
    'brand-primary-medium',
    'shadow-brand',
    'shadow-brand-lg',
    'background / foreground / primary / card … (shadcn defaults)',
];
