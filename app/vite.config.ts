import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

/**
 * `npm run build` writes the site to dist/; scripts/prerender.mjs then turns
 * index.html into one HTML file per page for Cloudflare Pages.
 */
export default defineConfig({
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    plugins: [
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        tailwindcss(),
    ],
    build: {
        assetsDir: 'build/assets',
        manifest: true,
    },
});
