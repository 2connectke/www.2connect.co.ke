import { useEffect, useRef } from 'react';

interface TurnstileApi {
    render: (
        element: HTMLElement,
        options: {
            sitekey: string;
            appearance?: 'always' | 'execute' | 'interaction-only';
            callback: (token: string) => void;
            'expired-callback': () => void;
            'error-callback': () => void;
        },
    ) => string;
    reset: (widgetId: string) => void;
    remove: (widgetId: string) => void;
}

declare global {
    interface Window {
        turnstile?: TurnstileApi;
    }
}

const SCRIPT_URL =
    'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

let scriptPromise: Promise<TurnstileApi> | null = null;

/** Loads Cloudflare's script once, however many widgets ask for it. */
function loadTurnstile() {
    scriptPromise ??= new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = SCRIPT_URL;
        script.async = true;
        script.onload = () =>
            window.turnstile
                ? resolve(window.turnstile)
                : reject(new Error('Turnstile did not load'));
        script.onerror = () => {
            scriptPromise = null;
            reject(new Error('Turnstile did not load'));
        };
        document.head.appendChild(script);
    });

    return scriptPromise;
}

interface TurnstileProps {
    siteKey: string;
    /** Receives a fresh token, or null once it expires or fails. */
    onToken: (token: string | null) => void;
    /** Change this number to get a new token, e.g. after a failed send. */
    resetSignal: number;
}

/**
 * Cloudflare Turnstile spam check. Invisible for most visitors; it only shows
 * a checkbox when Cloudflare is unsure.
 */
const Turnstile = ({ siteKey, onToken, resetSignal }: TurnstileProps) => {
    const container = useRef<HTMLDivElement>(null);
    const widget = useRef<{ api: TurnstileApi; id: string } | null>(null);
    const tokenHandler = useRef(onToken);

    useEffect(() => {
        tokenHandler.current = onToken;
    });

    useEffect(() => {
        let cancelled = false;

        loadTurnstile()
            .then((api) => {
                if (cancelled || !container.current) {
                    return;
                }

                const id = api.render(container.current, {
                    sitekey: siteKey,
                    appearance: 'interaction-only',
                    callback: (token) => tokenHandler.current(token),
                    'expired-callback': () => tokenHandler.current(null),
                    'error-callback': () => tokenHandler.current(null),
                });
                widget.current = { api, id };
            })
            .catch(() => tokenHandler.current(null));

        return () => {
            cancelled = true;

            if (widget.current) {
                widget.current.api.remove(widget.current.id);
                widget.current = null;
            }
        };
    }, [siteKey]);

    useEffect(() => {
        if (resetSignal && widget.current) {
            tokenHandler.current(null);
            widget.current.api.reset(widget.current.id);
        }
    }, [resetSignal]);

    return <div ref={container} className="empty:hidden" />;
};

export default Turnstile;
