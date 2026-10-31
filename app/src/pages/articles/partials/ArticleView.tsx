import { useEffect } from 'react';
import ButtonLink from '@/components/site/button-link';
import Eyebrow from '@/components/site/eyebrow';
import JoinCta from '@/components/site/join-cta';
import { Reveal } from '@/components/site/reveal';
import seo from '@/data/seo.json';
import { formatDay } from '@/lib/articles';
import type { Article } from '@/lib/articles';
import { Link } from '@/lib/router';
import ArticleCard from './ArticleCard';
import Notice from './Notice';

/** One article: header, cover photo, the text, then more stories. */
const ArticleView = ({
    slug,
    articles,
    failed,
}: {
    slug: string;
    articles: Article[] | null;
    failed: boolean;
}) => {
    const article = articles?.find((item) => item.slug === slug);
    const more = (articles ?? [])
        .filter((item) => item.slug !== slug)
        .slice(0, 3);

    useEffect(() => {
        if (article) {
            document.title = `${article.title} · ${seo.site_name}`;
        }
    }, [article]);

    if (!article) {
        return (
            <section className="bg-paper pt-32 pb-28 sm:pt-40 sm:pb-36">
                <div className="container-wide">
                    {failed && (
                        <Notice title="This story did not load.">
                            Check your connection and refresh the page.
                        </Notice>
                    )}
                    {!failed && !articles && (
                        <p role="status" className="text-lg text-body">
                            Loading story…
                        </p>
                    )}
                    {articles && (
                        <Notice title="This story is not here.">
                            <span className="block">
                                It may have moved or been taken down.
                            </span>
                            <span className="mt-6 block">
                                <ButtonLink href="/articles" variant="ink">
                                    See all stories
                                </ButtonLink>
                            </span>
                        </Notice>
                    )}
                </div>
            </section>
        );
    }

    const updated =
        article.updatedAt !== article.publishedAt &&
        `, updated ${formatDay(article.updatedAt)}`;

    return (
        <>
            <article className="bg-paper pt-32 pb-28 sm:pt-40 sm:pb-36">
                <header className="container-wide">
                    <nav aria-label="Breadcrumb">
                        <Eyebrow>
                            <Link
                                href="/"
                                className="transition-colors hover:text-ink"
                            >
                                Home
                            </Link>
                            <span className="text-ink/30">/</span>
                            <Link
                                href="/articles"
                                className="transition-colors hover:text-ink"
                            >
                                Articles
                            </Link>
                            <span className="text-ink/30">/</span>
                            <span className="text-ink">{article.category}</span>
                        </Eyebrow>
                    </nav>
                    <h1 className="mt-8 max-w-[18ch] text-display-md text-ink">
                        {article.title}
                    </h1>
                    <p className="mt-6 max-w-2xl text-xl leading-relaxed text-body">
                        {article.excerpt}
                    </p>
                    <p className="mt-6 text-sm text-body">
                        By{' '}
                        <span className="font-semibold text-ink">
                            {article.author}
                        </span>{' '}
                        ·{' '}
                        <time dateTime={article.publishedAt}>
                            {formatDay(article.publishedAt)}
                        </time>
                        {updated} · {article.minutes} min read
                    </p>
                </header>

                <Reveal className="container-wide mt-12 sm:mt-16">
                    <img
                        src={article.cover}
                        alt={article.coverAlt}
                        className="aspect-[16/9] w-full rounded-4xl bg-ink object-cover"
                    />
                </Reveal>

                <div
                    className="container-wide prose-article mt-12 max-w-[72ch] sm:mt-16"
                    // Built from our own sheet and made safe in scripts/articles.mjs.
                    dangerouslySetInnerHTML={{ __html: article.html }}
                />
            </article>

            {more.length > 0 && (
                <section className="bg-sand py-28 sm:py-36">
                    <div className="container-wide">
                        <Eyebrow>Keep reading</Eyebrow>
                        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {more.map((item, index) => (
                                <Reveal
                                    as="li"
                                    key={item.slug}
                                    delay={index * 0.06}
                                >
                                    <ArticleCard article={item} />
                                </Reveal>
                            ))}
                        </ul>
                    </div>
                </section>
            )}

            <JoinCta />
        </>
    );
};

export default ArticleView;
