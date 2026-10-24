import { Lock } from 'lucide-react';
import PageHero from '@/components/site/page-hero';

export const chapters = [
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'colour', label: 'Colour' },
    { id: 'typography', label: 'Typography' },
    { id: 'spacing', label: 'Spacing & layout' },
    { id: 'hierarchy', label: 'Hierarchy' },
    { id: 'shape', label: 'Shape & depth' },
    { id: 'components', label: 'Components' },
    { id: 'motion', label: 'Motion' },
    { id: 'voice', label: 'Voice' },
    { id: 'imagery', label: 'Imagery' },
];

const BrandHero = () => (
    <PageHero
        label="Brand styles"
        title={[
            'Brand',
            <span key="s" className="text-azure-deep">
                styles.
            </span>,
        ]}
        intro={
            <>
                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white uppercase">
                    <Lock size={13} className="text-sun" />
                    Internal · team only
                </span>
                <p>
                    How 2Connect looks, sounds and moves. Everything here is
                    taken from the live site, so if you build with it, your work
                    will feel like ours. Click any colour or code to copy it.
                </p>
            </>
        }
    >
        <nav aria-label="Chapters" className="flex flex-wrap gap-2">
            {chapters.map((chapter, index) => (
                <a
                    key={chapter.id}
                    href={`#${chapter.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition-colors duration-500 ease-out-expo hover:border-ink hover:bg-ink hover:text-white"
                >
                    <span className="font-display text-xs font-bold text-sun-deep">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    {chapter.label}
                </a>
            ))}
        </nav>
    </PageHero>
);

export default BrandHero;
