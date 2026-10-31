import ButtonLink from '@/components/site/button-link';
import JoinCta from '@/components/site/join-cta';
import PageHero from '@/components/site/page-hero';
import { Reveal } from '@/components/site/reveal';
import type { Article } from '@/lib/articles';
import ArticleCard from './ArticleCard';
import Notice from './Notice';

/** The newest story wide, then the rest in a grid. */
const ArticleList = ({
    articles,
    failed,
}: {
    articles: Article[] | null;
    failed: boolean;
}) => {
    const [newest, ...rest] = articles ?? [];

    return (
        <>
            <PageHero
                label="Articles"
                title={[
                    'Stories from',
                    <>
                        the <span className="text-sun-deep">mtaa.</span>
                    </>,
                ]}
                intro="What our volunteers, campus clubs and partners are doing, learning and building. Real people, real work, told by the people who were there."
            />

            <section className="bg-paper pb-28 sm:pb-36">
                <div className="container-wide">
                    {failed && (
                        <Notice title="Stories did not load.">
                            Check your connection and refresh the page.
                        </Notice>
                    )}
                    {!failed && !articles && (
                        <p role="status" className="text-lg text-body">
                            Loading stories…
                        </p>
                    )}
                    {articles?.length === 0 && (
                        <Notice title="First stories are on the way.">
                            <span className="block">
                                Until then, come meet the people behind them.
                            </span>
                            <span className="mt-6 block">
                                <ButtonLink href="/events" variant="ink">
                                    See upcoming events
                                </ButtonLink>
                            </span>
                        </Notice>
                    )}
                    {newest && (
                        <Reveal>
                            <ArticleCard article={newest} featured />
                        </Reveal>
                    )}
                    {rest.length > 0 && (
                        <ul className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {rest.map((article, index) => (
                                <Reveal
                                    as="li"
                                    key={article.slug}
                                    delay={(index % 3) * 0.06}
                                >
                                    <ArticleCard article={article} />
                                </Reveal>
                            ))}
                        </ul>
                    )}
                </div>
            </section>

            <JoinCta
                title={['Got a story?', 'Tuambie.']}
                body="Volunteered with us, run a campus club or partnered on a project? We would love to tell your story. Get in touch and we will help you write it."
            />
        </>
    );
};

export default ArticleList;
