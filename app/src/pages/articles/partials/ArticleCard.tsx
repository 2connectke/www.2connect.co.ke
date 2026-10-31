import { ArrowUpRight } from 'lucide-react';
import { formatDay } from '@/lib/articles';
import type { Article } from '@/lib/articles';
import { Link } from '@/lib/router';
import { cn } from '@/lib/utils';

/** Photo, category, title and excerpt. `featured` lays it out wide for the newest story. */
const ArticleCard = ({
    article,
    featured = false,
}: {
    article: Article;
    featured?: boolean;
}) => (
    <Link
        href={`/articles/${article.slug}`}
        className={cn(
            'group grid h-full overflow-hidden rounded-[28px] bg-white ring-1 ring-ink/10 transition-[transform,box-shadow] duration-700 ease-out-expo hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(11,18,54,0.35)]',
            featured && 'lg:grid-cols-2',
        )}
    >
        <div
            className={cn(
                'relative aspect-[16/10] overflow-hidden bg-ink',
                featured && 'lg:aspect-auto lg:min-h-[420px]',
            )}
        >
            <img
                src={article.cover}
                alt={article.coverAlt}
                loading={featured ? 'eager' : 'lazy'}
                className="absolute inset-0 size-full object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-105"
            />
        </div>
        <div
            className={cn(
                'flex flex-col p-7 sm:p-8',
                featured && 'lg:justify-center lg:p-12',
            )}
        >
            <span className="w-fit rounded-full bg-sun-soft px-3 py-1 text-xs font-semibold tracking-[0.12em] text-sun-deep uppercase">
                {article.category}
            </span>
            <h3
                className={cn(
                    'mt-5 font-display font-bold tracking-[-0.02em] text-ink',
                    featured ? 'text-3xl sm:text-4xl' : 'text-2xl',
                )}
            >
                {article.title}
            </h3>
            <p className="mt-3 leading-relaxed text-body">{article.excerpt}</p>
            <div className="mt-auto flex items-center justify-between gap-4 pt-8 text-sm text-body">
                <span>
                    {formatDay(article.publishedAt)} · {article.minutes} min
                    read
                </span>
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-ink/15 text-ink transition-all duration-500 group-hover:rotate-45 group-hover:border-sun group-hover:bg-sun">
                    <ArrowUpRight size={18} />
                </span>
            </div>
        </div>
    </Link>
);

export default ArticleCard;
