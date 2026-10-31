import { useArticles } from '@/lib/articles';
import { useUrl } from '@/lib/router';
import ArticleList from './partials/ArticleList';
import ArticleView from './partials/ArticleView';

/** /articles lists every story; /articles/<slug> shows one. */
export default function Articles() {
    const slug = useUrl()
        .split('?')[0]
        .replace(/^\/articles\/?/, '');
    const { articles, failed } = useArticles();

    return slug ? (
        <ArticleView slug={slug} articles={articles} failed={failed} />
    ) : (
        <ArticleList articles={articles} failed={failed} />
    );
}
