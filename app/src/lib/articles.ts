import { useEffect, useState } from 'react';

/** One published article, as scripts/articles.mjs writes it to /articles.json. */
export interface Article {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    cover: string;
    coverAlt: string;
    /** YYYY-MM-DD */
    publishedAt: string;
    updatedAt: string;
    minutes: number;
    /** Built from the article's Google Doc and made safe at build time. */
    html: string;
}

let request: Promise<Article[]> | undefined;

/** Published articles, fetched once per visit. A failed fetch is retried next time. */
function loadArticles() {
    request ??= fetch('/articles.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`articles.json: ${response.status}`);
            }

            return response.json() as Promise<Article[]>;
        })
        .catch((error: unknown) => {
            request = undefined;

            throw error;
        });

    return request;
}

/** The article list: null while loading, or `failed` when it could not load. */
export function useArticles() {
    const [state, setState] = useState<{
        articles: Article[] | null;
        failed: boolean;
    }>({ articles: null, failed: false });

    useEffect(() => {
        let active = true;

        loadArticles().then(
            (articles) => active && setState({ articles, failed: false }),
            () => active && setState({ articles: null, failed: true }),
        );

        return () => {
            active = false;
        };
    }, []);

    return state;
}

/** "2 Nov 2026", read as a calendar day so time zones never shift it. */
export const formatDay = (day: string) =>
    new Date(`${day}T12:00:00`).toLocaleDateString('en-KE', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
