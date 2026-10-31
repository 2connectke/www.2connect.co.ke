/**
 * First step of `npm run build`. Fetches the published articles from the
 * 2Connect articles Google Sheet (its Apps Script web app, see
 * scripts/apps-script/) and writes public/articles.json, which Vite copies
 * into dist/ for the app and scripts/prerender.mjs turns into one HTML page
 * per article.
 *
 * Environment:
 *   ARTICLES_URL  The Apps Script web app URL. When unset (local work, GitHub
 *                 checks) an existing public/articles.json is kept, or an
 *                 empty list is written. When set, any error fails the build
 *                 so the live site keeps its last good version.
 */
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { Marked } from 'marked';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'public/articles.json');
const images = path.join(root, 'public/assets/images');

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const REQUIRED = [
    'slug',
    'title',
    'excerpt',
    'category',
    'author',
    'cover',
    'coverAlt',
    'publishedAt',
    'markdown',
];

const escapeHtml = (value) =>
    String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

const markdown = new Marked({ gfm: true });
markdown.use({
    walkTokens(token) {
        // The article title is the page's only h1, so a Doc's headings start at h2.
        if (token.type === 'heading') {
            token.depth = Math.min(token.depth + 1, 6);
        }

        // Only web, mail, phone and on-site links; never javascript: and the like.
        if (
            token.type === 'link' &&
            !/^(https?:|mailto:|tel:|\/(?!\/)|#)/i.test(token.href)
        ) {
            token.href = '#';
        }
    },
    renderer: {
        // Anyone who can edit the sheet's Docs writes this page: raw HTML shows as text.
        html: ({ text }) => escapeHtml(text),
        // shortcut: Doc images are dropped (Google exports them as huge base64 blobs);
        // photos go in public/assets/images. Add an image upload step if writers need inline photos.
        image: () => '',
    },
});

/** Article Markdown to safe HTML. */
export function toHtml(source) {
    return markdown
        .parse(source)
        .replace(/<p>\s*<\/p>\n?/g, '')
        .trim();
}

/** Problems with one article from the sheet, empty when it can be published. */
export function problemsWith(article, coverExists) {
    const problems = REQUIRED.filter(
        (field) => typeof article[field] !== 'string' || !article[field].trim(),
    ).map((field) => `${field} is missing`);

    if (article.slug && !SLUG.test(article.slug)) {
        problems.push(
            `slug "${article.slug}" must be lowercase-words-like-this`,
        );
    }

    for (const field of ['publishedAt', 'updatedAt']) {
        if (article[field] && !DATE.test(article[field])) {
            problems.push(`${field} "${article[field]}" must be YYYY-MM-DD`);
        }
    }

    if (article.cover && !coverExists(article.cover)) {
        problems.push(
            `cover "${article.cover}" is not in public/assets/images`,
        );
    }

    return problems;
}

/** Validates the web app's articles and shapes them for the site, newest first. */
export function prepare(articles, coverExists) {
    const problems = articles.flatMap((article, index) =>
        problemsWith(article, coverExists).map(
            (problem) =>
                `${article.title || `Article ${index + 1}`}: ${problem}`,
        ),
    );
    const slugs = articles.map((article) => article.slug);
    const duplicates = slugs.filter(
        (slug, index) => slugs.indexOf(slug) !== index,
    );

    duplicates.forEach((slug) =>
        problems.push(`slug "${slug}" is used by more than one article`),
    );

    if (problems.length) {
        throw new Error(
            `Articles cannot be published:\n- ${problems.join('\n- ')}`,
        );
    }

    return articles
        .map((article) => ({
            slug: article.slug,
            title: article.title.trim(),
            excerpt: article.excerpt.trim(),
            category: article.category.trim(),
            author: article.author.trim(),
            cover: `/assets/images/${article.cover}`,
            coverAlt: article.coverAlt.trim(),
            publishedAt: article.publishedAt,
            updatedAt: article.updatedAt || article.publishedAt,
            // About 200 words a minute, the usual reading speed.
            minutes: Math.max(
                1,
                Math.round(article.markdown.split(/\s+/).length / 200),
            ),
            html: toHtml(article.markdown),
        }))
        .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

async function main() {
    const url = process.env.ARTICLES_URL;

    if (!url) {
        if (!fs.existsSync(output)) {
            fs.writeFileSync(output, '[]\n');
        }

        console.log(
            'ARTICLES_URL is not set; using public/articles.json as is.',
        );

        return;
    }

    const response = await fetch(url, { redirect: 'follow' });

    if (!response.ok) {
        throw new Error(`Articles web app answered ${response.status}.`);
    }

    const data = await response.json();

    if (data.error) {
        throw new Error(`Articles web app: ${data.error}`);
    }

    if (!Array.isArray(data.articles)) {
        throw new Error('Articles web app sent no "articles" list.');
    }

    const articles = prepare(
        data.articles,
        (file) =>
            // Only a bare file name, so a cover can never point outside the images folder.
            /^[\w.-]+$/.test(file) && fs.existsSync(path.join(images, file)),
    );

    fs.writeFileSync(output, `${JSON.stringify(articles)}\n`);
    console.log(
        `${articles.length} article(s) written to public/articles.json.`,
    );
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
    main().catch((error) => {
        console.error(error.message);
        process.exit(1);
    });
}
