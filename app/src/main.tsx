/**
 * App entry: loads the page for the current URL inside the shared layout,
 * then handles in-app navigation, back/forward and tab titles.
 */
import { StrictMode, useEffect, useState } from 'react';
import type { ComponentType } from 'react';
import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';
import './app.css';
import seo from '@/data/seo.json';
import { initializeTheme } from '@/hooks/use-appearance';
import PublicLayout from '@/layouts/public-layout';
import { notifyNavigate, pageNameFor, setVisitHandler } from '@/lib/router';
import type { PageName } from '@/lib/router';

type Page = ComponentType;

// Page name (from data/seo.json) to its folder in pages/.
const components: Record<PageName, string> = {
    home: 'welcome',
    about: 'about',
    services: 'services',
    volunteerMatching: 'services/volunteer-matching',
    volunteerManagement: 'services/volunteer-management',
    events: 'events',
    gallery: 'gallery',
    articles: 'articles',
    contact: 'contact',
    brand: 'brand-styles',
};

const modules = import.meta.glob<{ default: Page }>('./pages/**/index.tsx');

// Mirrors public/_redirects, for in-app links and the dev server.
const redirects: Record<string, string> = {
    '/volunteer': '/contact',
    '/partner': '/contact',
};

async function load(path: string): Promise<Page | null> {
    const name = pageNameFor(path);
    const loader = name && modules[`./pages/${components[name]}/index.tsx`];

    return loader ? (await loader()).default : null;
}

let show: (page: Page, url: string) => void = () => {};

// Path and query of the page on screen, so a change to only the #hash (an
// in-page link) is left to the browser instead of reloading the page.
let shownUrl = '';

function App({ initial, url }: { initial: Page; url: string }) {
    const [state, setState] = useState({ page: initial, url });

    useEffect(() => {
        show = (page, nextUrl) => setState({ page, url: nextUrl });
    }, []);

    const Current = state.page;
    const name = pageNameFor(state.url.split('?')[0]);
    // Internal pages close with their own notice instead of the public footer.
    const isPrivate = !!name && 'private' in seo.pages[name];

    return (
        <PublicLayout footer={!isPrivate}>
            <Current key={state.url} />
        </PublicLayout>
    );
}

async function navigate(url: string, restoreScroll: number | null = null) {
    const target = new URL(url, window.location.origin);
    const path = redirects[target.pathname] ?? target.pathname;
    const page = await load(path);

    if (!page) {
        window.location.assign(url);

        return;
    }

    const next = path + target.search;
    shownUrl = next;

    if (restoreScroll === null) {
        history.pushState({ scroll: 0 }, '', next);
    }

    flushSync(() => show(page, next));
    document.title = `${seo.pages[pageNameFor(path)!].title} · ${seo.site_name}`;
    window.scrollTo(0, 0);
    notifyNavigate();

    // Back and forward return to where the reader was.
    if (restoreScroll) {
        window.scrollTo(0, restoreScroll);
    }
}

// Remember each history entry's scroll position so back/forward can restore it.
let saveTimer: number | undefined;
window.addEventListener(
    'scroll',
    () => {
        window.clearTimeout(saveTimer);
        saveTimer = window.setTimeout(() => {
            history.replaceState(
                { ...history.state, scroll: window.scrollY },
                '',
            );
        }, 150);
    },
    { passive: true },
);

setVisitHandler((url) => {
    void navigate(url);
});

window.addEventListener('popstate', (event) => {
    if (window.location.pathname + window.location.search === shownUrl) {
        return;
    }

    void navigate(window.location.href, event.state?.scroll ?? 0);
});

async function boot() {
    const path =
        redirects[window.location.pathname] ?? window.location.pathname;
    const page = await load(path);

    if (!page) {
        return;
    }

    document.title = `${seo.pages[pageNameFor(path)!].title} · ${seo.site_name}`;
    history.scrollRestoration = 'manual';
    shownUrl = path + window.location.search;
    history.replaceState({ scroll: 0 }, '', shownUrl + window.location.hash);
    const root = createRoot(document.getElementById('app')!);
    flushSync(() =>
        root.render(
            <StrictMode>
                <App initial={page} url={path + window.location.search} />
            </StrictMode>,
        ),
    );

    // A link to "#section" opened fresh: the browser looked for the section
    // before it was rendered, so jump there once the fonts (which change
    // the page's height) have loaded.
    if (window.location.hash) {
        const id = decodeURIComponent(window.location.hash.slice(1));

        void document.fonts.ready.then(() =>
            document.getElementById(id)?.scrollIntoView(),
        );
    }
}

void boot();

// Apply light / dark mode on load.
initializeTheme();
