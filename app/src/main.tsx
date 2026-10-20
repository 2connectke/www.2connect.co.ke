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
    events: 'events',
    gallery: 'gallery',
    contact: 'contact',
};

const modules = import.meta.glob<{ default: Page }>('./pages/*/index.tsx');

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

function App({ initial, url }: { initial: Page; url: string }) {
    const [state, setState] = useState({ page: initial, url });

    useEffect(() => {
        show = (page, nextUrl) => setState({ page, url: nextUrl });
    }, []);

    const Current = state.page;

    return (
        <PublicLayout>
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
    history.replaceState({ scroll: 0 }, '', path + window.location.search);
    createRoot(document.getElementById('app')!).render(
        <StrictMode>
            <App initial={page} url={path + window.location.search} />
        </StrictMode>,
    );
}

void boot();

// Apply light / dark mode on load.
initializeTheme();
