import { Search, X } from 'lucide-react';

interface EventFiltersProps {
    query: string;
    onQueryChange: (value: string) => void;
    categories: string[];
    category: string;
    onCategoryChange: (value: string) => void;
}

/** Search box and category chips. The page does the filtering. */
const EventFilters = ({
    query,
    onQueryChange,
    categories,
    category,
    onCategoryChange,
}: EventFiltersProps) => {
    return (
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <label className="group relative flex w-full items-center lg:max-w-md">
                <Search
                    size={20}
                    className="pointer-events-none absolute left-5 text-ink/40 transition-colors group-focus-within:text-ink"
                />
                <input
                    type="search"
                    value={query}
                    onChange={(e) => onQueryChange(e.target.value)}
                    placeholder="Search by event or place"
                    aria-label="Search events"
                    className="h-14 w-full rounded-full border border-ink/15 bg-white pr-12 pl-13 text-ink placeholder:text-ink/40 outline-none transition-colors focus:border-ink focus:bg-white [&::-webkit-search-cancel-button]:hidden"
                />
                {query && (
                    <button
                        type="button"
                        onClick={() => onQueryChange('')}
                        aria-label="Clear search"
                        className="absolute right-3 grid size-8 place-items-center rounded-full text-ink/50 hover:bg-ink/5 hover:text-ink"
                    >
                        <X size={16} />
                    </button>
                )}
            </label>

            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
                {['All', ...categories].map((item) => {
                    const active = category === item;

                    return (
                        <button
                            key={item}
                            type="button"
                            onClick={() => onCategoryChange(item)}
                            aria-pressed={active}
                            className={`h-11 rounded-full px-5 text-sm font-semibold transition-colors duration-300 ${
                                active
                                    ? 'bg-ink text-white'
                                    : 'border border-ink/15 text-ink/70 hover:border-ink hover:text-ink'
                            }`}
                        >
                            {item}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default EventFilters;
