/**
 * Minimal client-side router for the site's six pages: in-app links,
 * the current URL, and a "navigate" event other components can listen to.
 * The page loading itself lives in main.tsx.
 */
import { useSyncExternalStore } from 'react';
import type { AnchorHTMLAttributes, MouseEvent } from 'react';
import seo from '@/data/seo.json';

type Visit = (url: string) => void;

const listeners = new Set<() => void>();
let visitHandler: Visit = (url) => window.location.assign(url);

const currentUrl = () => window.location.pathname + window.location.search;

/** Run a callback after every in-app navigation. Returns an unsubscribe function. */
export function onNavigate(callback: () => void) {
    listeners.add(callback);

    return () => {
        listeners.delete(callback);
    };
}

export function notifyNavigate() {
    listeners.forEach((callback) => callback());
}

export function visit(url: string) {
    visitHandler(url);
}

/** Used by main.tsx to take over in-app navigation. */
export function setVisitHandler(handler: Visit) {
    visitHandler = handler;
}

/** The current path and query string, e.g. "/about". */
export function useUrl() {
    return useSyncExternalStore(onNavigate, currentUrl, currentUrl);
}

export type PageName = keyof typeof seo.pages;

/** Page name for a path, from data/seo.json. */
export function pageNameFor(path: string): PageName | undefined {
    return (Object.keys(seo.pages) as PageName[]).find(
        (name) => seo.pages[name].path === path,
    );
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/** An <a> that navigates in-app for internal links, like a normal link otherwise. */
export function Link({ href, onClick, target, children, ...rest }: LinkProps) {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        onClick?.(event);

        const isInternal = href.startsWith('/') && !href.startsWith('//');
        const isModified =
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey ||
            event.button !== 0;

        if (
            event.defaultPrevented ||
            !isInternal ||
            isModified ||
            (target && target !== '_self')
        ) {
            return;
        }

        event.preventDefault();
        visit(href);
    };

    return (
        <a href={href} target={target} onClick={handleClick} {...rest}>
            {children}
        </a>
    );
}
