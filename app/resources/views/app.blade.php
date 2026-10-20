@php($seo = \App\Support\Seo::for(request()))
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#0b1236">

        {{-- SEO: rendered on the server so search engines and link previews never depend on JavaScript --}}
        <meta name="description" content="{{ $seo['description'] }}">
        <meta name="robots" content="{{ $seo['robots'] }}">
        <link rel="canonical" href="{{ $seo['url'] }}">

        <meta property="og:type" content="website">
        <meta property="og:site_name" content="{{ $seo['siteName'] }}">
        <meta property="og:locale" content="{{ $seo['locale'] }}">
        <meta property="og:title" content="{{ $seo['fullTitle'] }}">
        <meta property="og:description" content="{{ $seo['description'] }}">
        <meta property="og:url" content="{{ $seo['url'] }}">
        <meta property="og:image" content="{{ $seo['image'] }}">
        <meta property="og:image:secure_url" content="{{ $seo['image'] }}">
        <meta property="og:image:type" content="image/png">
        <meta property="og:image:width" content="{{ $seo['imageWidth'] }}">
        <meta property="og:image:height" content="{{ $seo['imageHeight'] }}">
        <meta property="og:image:alt" content="{{ $seo['imageAlt'] }}">

        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="{{ $seo['fullTitle'] }}">
        <meta name="twitter:description" content="{{ $seo['description'] }}">
        <meta name="twitter:image" content="{{ $seo['image'] }}">
        <meta name="twitter:image:alt" content="{{ $seo['imageAlt'] }}">

        @if ($seo['jsonLd'])
            <script type="application/ld+json">{!! json_encode($seo['jsonLd'], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_HEX_TAG) !!}</script>
        @endif

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: #fbf8f3;
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <link rel="icon" href="/favicon.ico" sizes="48x48">
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">
        <link rel="manifest" href="/site.webmanifest">

        <link rel="preconnect" href="https://fonts.bunny.net" crossorigin>
        <link href="https://fonts.bunny.net/css?family=bricolage-grotesque:400,500,600,700,800|instrument-sans:400,500,600,700" rel="stylesheet" />

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        <x-inertia::head>
            <title>{{ $seo['fullTitle'] }}</title>
        </x-inertia::head>
    </head>
    <body class="font-sans antialiased">
        <x-inertia::app />
    </body>
</html>
