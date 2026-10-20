<?php

beforeEach(function () {
    config(['app.url' => 'https://www.2connect.co.ke']);
});

// Datasets are built before the app boots, so read the config file directly.
dataset('pages', fn () => array_map(
    fn (array $page) => [$page],
    (require __DIR__.'/../../config/seo.php')['pages'],
));

it('renders search and sharing tags on the server for every page', function (array $page) {
    $this->get($page['path'])
        ->assertOk()
        ->assertSee('<meta name="description" content="'.e($page['description']).'">', false)
        ->assertSee('<link rel="canonical" href="https://www.2connect.co.ke'.($page['path'] === '/' ? '/' : $page['path']).'">', false)
        ->assertSee('<meta property="og:image" content="https://www.2connect.co.ke/og/2connect-og.png">', false)
        ->assertSee('<meta name="twitter:card" content="summary_large_image">', false)
        ->assertSee('application/ld+json', false);
})->with('pages');

it('keeps titles and descriptions within search result limits', function (array $page) {
    expect(mb_strlen($page['title'].' · 2Connect'))->toBeLessThanOrEqual(62)
        ->and(mb_strlen($page['description']))->toBeLessThanOrEqual(160);
})->with('pages');

it('ships a share image at the size social platforms expect', function () {
    [$width, $height] = getimagesize(public_path(config('seo.image.path')));

    expect([$width, $height])->toBe([1200, 630]);
});

it('lists every page in the sitemap', function () {
    $response = $this->get('/sitemap.xml')->assertOk()->assertHeader('Content-Type', 'application/xml');

    foreach (config('seo.pages') as $page) {
        $response->assertSee('<loc>https://www.2connect.co.ke'.($page['path'] === '/' ? '/' : $page['path']).'</loc>', false);
    }
});

it('keeps non production sites out of search results', function () {
    $this->get('/robots.txt')->assertOk()->assertSee('Disallow: /');
    $this->get('/')->assertSee('<meta name="robots" content="noindex, nofollow">', false);
});

it('opens the production site to search engines', function () {
    app()->detectEnvironment(fn () => 'production');

    $this->get('/robots.txt')
        ->assertOk()
        ->assertSee('Allow: /')
        ->assertSee('Sitemap: https://www.2connect.co.ke/sitemap.xml');
    $this->get('/')->assertSee('index, follow', false);
});

it('redirects pages that do not exist yet to contact', function (string $path) {
    $this->get($path)->assertRedirect('/contact')->assertStatus(301);
})->with(['/volunteer', '/partner']);
