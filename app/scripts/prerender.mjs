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
 *
 * Pages marked "private" in seo.json (the internal brand guide) are always
 * noindex, carry no sharing tags or structured data, and are left out of the
 * sitemap and of every page's plain HTML menu.
 */
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const readJson = (file) =>
    JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
const seo = readJson('src/data/seo.json');
const faqs = readJson('src/data/faq.json');
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
    volunteerMatching: 'services/volunteer-matching',
    volunteerManagement: 'services/volunteer-management',
    events: 'events',
    gallery: 'gallery',
    contact: 'contact',
    brand: 'brand-styles',
};

const publicPages = Object.values(seo.pages).filter((page) => !page.private);

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
            alternateName: seo.alternate_names,
            url: `${base}/`,
            logo: {
                '@type': 'ImageObject',
                url: `${base}/icon-512.png`,
                width: 512,
                height: 512,
            },
            image: base + seo.image.path,
            description: org.description,
            slogan: seo.tagline,
            email: org.email,
            telephone: org.telephone,
            foundingDate: org.founding_date,
            foundingLocation: {
                '@type': 'Place',
                name: `${org.locality}, Kenya`,
            },
            areaServed: { '@type': 'Country', name: 'Kenya' },
            address: {
                '@type': 'PostalAddress',
                addressLocality: org.locality,
                addressCountry: org.country,
            },
            contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'volunteer and partnership enquiries',
                email: org.email,
                telephone: org.telephone,
                areaServed: org.country,
                availableLanguage: ['English', 'Swahili'],
            },
            founder: {
                '@type': 'Person',
                name: org.founder.name,
                jobTitle: org.founder.job_title,
                image: base + org.founder.image,
                sameAs: org.founder.same_as,
            },
            knowsAbout: seo.knows_about,
            keywords: seo.keywords.join(', '),
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Volunteer programmes',
                itemListElement: seo.programmes.map((programme) => ({
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: programme.name,
                        description: programme.description,
                        provider: { '@id': `${base}/#organization` },
                        areaServed: { '@type': 'Country', name: 'Kenya' },
                        audience: {
                            '@type': 'PeopleAudience',
                            audienceType: 'Young people and students',
                        },
                    },
                })),
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
            alternateName: seo.alternate_names,
            description: seo.description,
            inLanguage: seo.language,
            publisher: { '@id': `${base}/#organization` },
        },
        {
            '@type': page.schema,
            '@id': `${url}#webpage`,
            url,
            name: `${page.title} · ${seo.site_name}`,
            description: page.description,
            inLanguage: seo.language,
            isPartOf: { '@id': `${base}/#website` },
            about: { '@id': `${base}/#organization` },
            primaryImageOfPage: {
                '@type': 'ImageObject',
                url: base + seo.image.path,
                width: seo.image.width,
                height: seo.image.height,
                caption: seo.image.alt,
            },
            ...(name !== 'home' && {
                breadcrumb: { '@id': `${url}#breadcrumb` },
            }),
        },
    ];

    if (name === 'contact') {
        graph.push({
            '@type': 'FAQPage',
            '@id': `${url}#faq`,
            url,
            inLanguage: seo.language,
            mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
        });
    }

    if (name !== 'home') {
        // Home, any parent page (What we do for /services/...), then this page.
        const trail = [
            ...publicPages.filter(
                (other) =>
                    other.path !== '/' &&
                    page.path.startsWith(`${other.path}/`),
            ),
            page,
        ];

        graph.push({
            '@type': 'BreadcrumbList',
            '@id': `${url}#breadcrumb`,
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: `${base}/`,
                },
                ...trail.map((crumb, index) => ({
                    '@type': 'ListItem',
                    position: index + 2,
                    name: crumb.label ?? crumb.title,
                    item: urlFor(crumb.path),
                })),
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
    if (page.private) {
        return `<meta name="description" content="${escape(page.description)}">
        <meta name="robots" content="noindex, nofollow, noarchive">
`;
    }

    const url = urlFor(page.path);
    const image = base + seo.image.path;
    const robots = indexable
        ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        : 'noindex, nofollow';
    // Search results get the precise description; link previews get a
    // livelier one written for people scrolling a feed.
    const social = page.social_description ?? page.description;

    return `<meta name="description" content="${escape(page.description)}">
        <meta name="robots" content="${robots}">
        <link rel="canonical" href="${escape(url)}">
        <link rel="alternate" hreflang="${escape(seo.language)}" href="${escape(url)}">
        <link rel="alternate" hreflang="x-default" href="${escape(url)}">
        <meta name="application-name" content="${escape(seo.site_name)}">
        <meta name="apple-mobile-web-app-title" content="${escape(seo.site_name)}">
        <meta name="geo.region" content="${escape(seo.organization.country)}">
        <meta name="geo.placename" content="${escape(seo.organization.locality)}">

        <meta property="og:type" content="website">
        <meta property="og:site_name" content="${escape(seo.site_name)}">
        <meta property="og:locale" content="${escape(seo.locale)}">
        <meta property="og:title" content="${escape(title)}">
        <meta property="og:description" content="${escape(social)}">
        <meta property="og:url" content="${escape(url)}">
        <meta property="og:image" content="${escape(image)}">
        <meta property="og:image:secure_url" content="${escape(image)}">
        <meta property="og:image:type" content="image/jpeg">
        <meta property="og:image:width" content="${seo.image.width}">
        <meta property="og:image:height" content="${seo.image.height}">
        <meta property="og:image:alt" content="${escape(seo.image.alt)}">

        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="${escape(title)}">
        <meta name="twitter:description" content="${escape(social)}">
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

/**
 * Plain HTML version of the page for browsers and crawlers that don't run
 * JavaScript: what the page is about, links to every page and how to reach us.
 */
function fallback(name, page) {
    if (page.private) {
        return `<noscript>
            <p style="max-width:42rem;margin:0 auto;padding:2rem 1.5rem;font-family:system-ui,sans-serif;color:#0b1236">This internal page needs JavaScript. It and its contents are the property of 2Connect and shall not be used or shared with the public.</p>
        </noscript>`;
    }

    const org = seo.organization;
    const nav = publicPages
        .map(
            (other) =>
                `<li><a href="${escape(other.path)}">${escape(other.label ?? 'Home')}</a></li>`,
        )
        .join('');
    let extra = '';

    if (name === 'services' || name === 'home') {
        extra = `<h2>What we do</h2><ul>${seo.programmes
            .map(
                (programme) =>
                    `<li><strong>${escape(programme.name)}</strong>: ${escape(programme.description)}</li>`,
            )
            .join('')}</ul>`;
    } else if (name === 'contact') {
        extra = `<h2>Questions, answered</h2>${faqs
            .map(
                (faq) =>
                    `<h3>${escape(faq.question)}</h3><p>${escape(faq.answer)}</p>`,
            )
            .join('')}`;
    }

    return `<noscript>
            <div style="max-width:42rem;margin:0 auto;padding:2rem 1.5rem;font-family:system-ui,sans-serif;color:#0b1236;line-height:1.6">
                <nav aria-label="Main"><ul>${nav}</ul></nav>
                <main>
                    <h1>${escape(page.title)}</h1>
                    <p>${escape(page.description)}</p>
                    <p>${escape(seo.description)}</p>
                    ${extra}
                </main>
                <footer>
                    <p>${escape(seo.site_name)}, ${escape(org.locality)}, Kenya. Email <a href="mailto:${escape(org.email)}">${escape(org.email)}</a> or call <a href="tel:${escape(org.telephone)}">${escape(org.telephone)}</a>.</p>
                </footer>
            </div>
        </noscript>`;
}

// Nested pages (/services/volunteer-matching) need their folder first.
const write = (file, contents) => {
    fs.mkdirSync(path.dirname(path.join(dist, file)), { recursive: true });
    fs.writeFileSync(path.join(dist, file), contents);
};

// Pages. /about is served from about.html, which Cloudflare Pages maps without the extension.
for (const [name, page] of Object.entries(seo.pages)) {
    const title = `${page.title} · ${seo.site_name}`;
    const html = template
        .replace(META_SLOT, metaTags(name, page, title))
        .replace(TITLE, `${pagePreloads(name)}<title>${escape(title)}</title>`)
        .replace(
            '<div id="app"></div>',
            `<div id="app"></div>\n        ${fallback(name, page)}`,
        );

    write(
        page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`,
        html,
    );
}

// Share tags for links to pages that don't exist, so even a mistyped link
// still previews as 2Connect rather than a blank card.
const siteImage = base + seo.image.path;
const siteTitle = `${seo.site_name} · ${seo.tagline}`;
const notFoundMeta = `<meta name="robots" content="noindex">
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="${escape(seo.site_name)}">
        <meta property="og:locale" content="${escape(seo.locale)}">
        <meta property="og:title" content="${escape(siteTitle)}">
        <meta property="og:description" content="${escape(seo.description)}">
        <meta property="og:url" content="${escape(`${base}/`)}">
        <meta property="og:image" content="${escape(siteImage)}">
        <meta property="og:image:secure_url" content="${escape(siteImage)}">
        <meta property="og:image:type" content="image/jpeg">
        <meta property="og:image:width" content="${seo.image.width}">
        <meta property="og:image:height" content="${seo.image.height}">
        <meta property="og:image:alt" content="${escape(seo.image.alt)}">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="${escape(siteTitle)}">
        <meta name="twitter:description" content="${escape(seo.description)}">
        <meta name="twitter:image" content="${escape(siteImage)}">
        <meta name="twitter:image:alt" content="${escape(seo.image.alt)}">
`;

// Not found page: the site's styles, no app code. Cloudflare Pages serves it with a 404 status.
write(
    '404.html',
    template
        .replace(META_SLOT, notFoundMeta)
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

const urls = publicPages
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
