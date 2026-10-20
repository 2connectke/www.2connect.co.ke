<?php

namespace App\Support;

use Illuminate\Http\Request;

/**
 * Resolves search and social sharing metadata for the current page from
 * config/seo.php. Used by the Blade layout (so crawlers that don't run
 * JavaScript always see it) and shared with the frontend for page titles.
 */
class Seo
{
    public static function for(Request $request): array
    {
        $config = config('seo');
        $name = $request->route()?->getName();
        $page = $config['pages'][$name] ?? null;
        $base = rtrim(config('app.url'), '/');

        $title = $page['title'] ?? $config['tagline'];
        $path = $page['path'] ?? '/'.ltrim($request->path(), '/');

        return [
            'title' => $title,
            'fullTitle' => $title.' · '.$config['site_name'],
            'description' => $page['description'] ?? $config['organization']['description'],
            'url' => $base.($path === '/' ? '/' : $path),
            'image' => $base.$config['image']['path'],
            'imageWidth' => $config['image']['width'],
            'imageHeight' => $config['image']['height'],
            'imageAlt' => $config['image']['alt'],
            'siteName' => $config['site_name'],
            'locale' => $config['locale'],
            'robots' => self::indexable()
                ? 'index, follow, max-image-preview:large, max-snippet:-1'
                : 'noindex, nofollow',
            'jsonLd' => $page ? self::jsonLd($name, $page, $base) : null,
        ];
    }

    /** Only the production site should be indexed; staging and local stay hidden. */
    public static function indexable(): bool
    {
        return app()->isProduction();
    }

    /** Absolute URLs of every public page, for the sitemap. */
    public static function urls(): array
    {
        $base = rtrim(config('app.url'), '/');

        return collect(config('seo.pages'))
            ->map(fn (array $page) => $base.($page['path'] === '/' ? '/' : $page['path']))
            ->values()
            ->all();
    }

    private static function jsonLd(string $name, array $page, string $base): array
    {
        $config = config('seo');
        $org = $config['organization'];
        $url = $base.($page['path'] === '/' ? '/' : $page['path']);

        $organization = array_filter([
            '@type' => 'NGO',
            '@id' => $base.'/#organization',
            'name' => $org['name'],
            'url' => $base.'/',
            'logo' => $base.'/icon-512.png',
            'image' => $base.$config['image']['path'],
            'description' => $org['description'],
            'slogan' => $config['tagline'],
            'email' => $org['email'],
            'telephone' => $org['telephone'],
            'foundingDate' => $org['founding_date'],
            'areaServed' => ['@type' => 'Country', 'name' => 'Kenya'],
            'address' => [
                '@type' => 'PostalAddress',
                'addressLocality' => $org['locality'],
                'addressCountry' => $org['country'],
            ],
            'founder' => [
                '@type' => 'Person',
                'name' => $org['founder']['name'],
                'jobTitle' => $org['founder']['job_title'],
                'sameAs' => $org['founder']['same_as'],
            ],
            'sameAs' => $org['same_as'] ?: null,
        ]);

        $graph = [
            $organization,
            [
                '@type' => 'WebSite',
                '@id' => $base.'/#website',
                'url' => $base.'/',
                'name' => $config['site_name'],
                'inLanguage' => 'en-KE',
                'publisher' => ['@id' => $base.'/#organization'],
            ],
            [
                '@type' => $page['schema'],
                '@id' => $url.'#webpage',
                'url' => $url,
                'name' => $page['title'].' · '.$config['site_name'],
                'description' => $page['description'],
                'inLanguage' => 'en-KE',
                'isPartOf' => ['@id' => $base.'/#website'],
                'about' => ['@id' => $base.'/#organization'],
                'primaryImageOfPage' => $base.$config['image']['path'],
            ],
        ];

        if ($name !== 'home') {
            $graph[] = [
                '@type' => 'BreadcrumbList',
                'itemListElement' => [
                    ['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => $base.'/'],
                    ['@type' => 'ListItem', 'position' => 2, 'name' => $page['label'] ?? $page['title'], 'item' => $url],
                ],
            ];
        }

        return ['@context' => 'https://schema.org', '@graph' => $graph];
    }
}
