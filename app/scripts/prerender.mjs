/**
 * Second half of `npm run build`. Vite has written dist/index.html; this
 * turns it into one HTML file per page, each with its own title, search
 * and sharing tags and structured data, so link previews and crawlers
 * never depend on JavaScript. Also writes sitemap.xml, robots.txt and
 * 404.html. Page text lives in src/data/seo.json.
 *
 * Environment:
 *   SITE_URL           Live address, default https://2connect.co.ke
 *   PRODUCTION_BRANCH  Branch whose deploys search engines may index, default main.
 *                      Cloudflare preview deploys of other branches get noindex.
 */
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const seo = JSON.parse(
    fs.readFileSync(path.join(root, 'src/data/seo.json'), 'utf8'),
);
const manifest = JSON.parse(
    fs.readFileSync(path.join(dist, '.vite/manifest.json'), 'utf8'),
);
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

const base = (process.env.SITE_URL || 'https://2connect.co.ke').replace(
    /\/+$/,
    '',
);
const branch = process.env.CF_PAGES_BRANCH;
const indexable =
    !branch || branch === (process.env.PRODUCTION_BRANCH || 'main');

// Page name to its folder in src/pages/, as in src/main.tsx.
const components = {
    home: 'welcome',
    about: 'about',
    services: 'services',
    events: 'events',
    gallery: 'gallery',
    contact: 'contact',
};

const META_SLOT =
    /<!-- page-meta: scripts\/prerender\.mjs writes each page's search and sharing tags here -->\n/;
const TITLE = '<title>2Connect</title>';

if (!META_SLOT.test(template) || !template.includes(TITLE)) {
    throw new Error(
        'index.html is missing the page-meta comment or <title>2Connect</title> that prerender.mjs fills in.',
    );
}

const escape = (value) =>
    String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

const urlFor = (pagePath) => base + (pagePath === '/' ? '/' : pagePath);

/** Schema.org data for search engines: the organisation, the site and this page. */
function jsonLd(name, page) {
    const org = seo.organization;
    const url = urlFor(page.path);
    const organization = Object.fromEntries(
        Object.entries({
            '@type': 'NGO',
            '@id': `${base}/#organization`,
            name: org.name,
            url: `${base}/`,
            logo: `${base}/icon-512.png`,
            image: base + seo.image.path,
            description: org.description,
            slogan: seo.tagline,
            email: org.email,
            telephone: org.telephone,
            foundingDate: org.founding_date,
            areaServed: { '@type': 'Country', name: 'Kenya' },
            address: {
                '@type': 'PostalAddress',
                addressLocality: org.locality,
                addressCountry: org.country,
            },
            founder: {
                '@type': 'Person',
                name: org.founder.name,
                jobTitle: org.founder.job_title,
                sameAs: org.founder.same_as,
            },
            sameAs: org.same_as.length ? org.same_as : null,
        }).filter(([, value]) => value !== null),
    );

    const graph = [
        organization,
        {
            '@type': 'WebSite',
            '@id': `${base}/#website`,
            url: `${base}/`,
            name: seo.site_name,
            inLanguage: 'en-KE',
            publisher: { '@id': `${base}/#organization` },
        },
        {
            '@type': page.schema,
            '@id': `${url}#webpage`,
            url,
            name: `${page.title} · ${seo.site_name}`,
            description: page.description,
            inLanguage: 'en-KE',
            isPartOf: { '@id': `${base}/#website` },
            about: { '@id': `${base}/#organization` },
            primaryImageOfPage: base + seo.image.path,
        },
    ];

    if (name !== 'home') {
        graph.push({
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: `${base}/`,
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: page.label ?? page.title,
                    item: url,
                },
            ],
        });
    }

    // Escape < and > so the JSON can never close the <script> tag early.
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': graph,
    })
        .replace(/</g, '\\u003C')
        .replace(/>/g, '\\u003E');
}

function metaTags(name, page, title) {
    const url = urlFor(page.path);
    const image = base + seo.image.path;
    const robots = indexable
        ? 'index, follow, max-image-preview:large, max-snippet:-1'
        : 'noindex, nofollow';

    return `<meta name="description" content="${escape(page.description)}">
        <meta name="robots" content="${robots}">
        <link rel="canonical" href="${escape(url)}">

        <meta property="og:type" content="website">
        <meta property="og:site_name" content="${escape(seo.site_name)}">
        <meta property="og:locale" content="${escape(seo.locale)}">
        <meta property="og:title" content="${escape(title)}">
        <meta property="og:description" content="${escape(page.description)}">
        <meta property="og:url" content="${escape(url)}">
        <meta property="og:image" content="${escape(image)}">
        <meta property="og:image:secure_url" content="${escape(image)}">
        <meta property="og:image:type" content="image/png">
        <meta property="og:image:width" content="${seo.image.width}">
        <meta property="og:image:height" content="${seo.image.height}">
        <meta property="og:image:alt" content="${escape(seo.image.alt)}">

        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="${escape(title)}">
        <meta name="twitter:description" content="${escape(page.description)}">
        <meta name="twitter:image" content="${escape(image)}">
        <meta name="twitter:image:alt" content="${escape(seo.image.alt)}">

        <script type="application/ld+json">${jsonLd(name, page)}</script>
`;
}

/** Every JS chunk a manifest entry needs, skipping ones already in `seen`. */
function chunksFor(key, seen) {
    if (seen.has(key)) {
        return [];
    }

    seen.add(key);
    const chunk = manifest[key];

    return [
        ...(chunk.imports ?? []).flatMap((dep) => chunksFor(dep, seen)),
        `/${chunk.file}`,
    ];
}

/** Preload the page's own code so it doesn't wait for the main bundle first. */
function pagePreloads(name) {
    const seen = new Set();
    chunksFor('index.html', seen);

    return chunksFor(`src/pages/${components[name]}/index.tsx`, seen)
        .map(
            (href) =>
                `<link rel="modulepreload" crossorigin href="${href}">\n        `,
        )
        .join('');
}

const write = (file, contents) =>
    fs.writeFileSync(path.join(dist, file), contents);

// Pages. /about is served from about.html, which Cloudflare Pages maps without the extension.
for (const [name, page] of Object.entries(seo.pages)) {
    const title = `${page.title} · ${seo.site_name}`;
    const html = template
        .replace(META_SLOT, metaTags(name, page, title))
        .replace(TITLE, `${pagePreloads(name)}<title>${escape(title)}</title>`);

    write(
        page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`,
        html,
    );
}

// Not found page: the site's styles, no app code. Cloudflare Pages serves it with a 404 status.
write(
    '404.html',
    template
        .replace(META_SLOT, '<meta name="robots" content="noindex">\n')
        .replace(/\s*<script type="module"[^>]*><\/script>/g, '')
        .replace(/\s*<link rel="modulepreload"[^>]*>/g, '')
        .replace(TITLE, `<title>Page not found · ${seo.site_name}</title>`)
        .replace(
            '<div id="app"></div>',
            `<main class="grid min-h-screen place-items-center bg-paper px-6 text-center text-ink">
            <div>
                <p class="text-sm font-semibold tracking-[0.2em] text-sun-deep uppercase">404</p>
                <h1 class="mt-4 font-display text-5xl font-bold tracking-tight">Page not found</h1>
                <p class="mt-4 text-lg text-body">The page you are looking for does not exist.</p>
                <a href="/" class="mt-8 inline-flex rounded-full bg-ink px-6 py-3 font-semibold text-white">Back to home</a>
            </div>
        </main>`,
        ),
);

const urls = Object.values(seo.pages)
    .map((page) => `    <url><loc>${escape(urlFor(page.path))}</loc></url>`)
    .join('\n');
write(
    'sitemap.xml',
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

write(
    'robots.txt',
    (indexable
        ? ['User-agent: *', 'Allow: /', '', `Sitemap: ${base}/sitemap.xml`]
        : [
              '# Not the live site, so keep it out of search results.',
              'User-agent: *',
              'Disallow: /',
          ]
    ).join('\n') + '\n',
);

fs.rmSync(path.join(dist, '.vite'), { recursive: true, force: true });

console.log(
    `Pages written to dist/ for ${base} (${indexable ? 'indexable' : 'noindex'}).`,
);
