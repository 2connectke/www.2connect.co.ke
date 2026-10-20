<?php

use App\Support\Seo;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome/index')->name('home');
Route::inertia('/about', 'about/index')->name('about');
Route::inertia('/events', 'events/index')->name('events');
Route::inertia('/gallery', 'gallery/index')->name('gallery');
Route::inertia('/services', 'services/index')->name('services');
Route::inertia('/contact', 'contact/index')->name('contact');

// These pages don't exist yet; send people to the contact form instead of a broken page.
Route::permanentRedirect('/volunteer', '/contact');
Route::permanentRedirect('/partner', '/contact');

Route::get('/sitemap.xml', function () {
    $urls = collect(Seo::urls())
        ->map(fn (string $url) => '    <url><loc>'.e($url).'</loc></url>')
        ->implode("\n");

    $xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"
        ."<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n{$urls}\n</urlset>\n";

    return response($xml, 200, ['Content-Type' => 'application/xml']);
})->name('sitemap');

Route::get('/robots.txt', function () {
    $lines = Seo::indexable()
        ? ['User-agent: *', 'Allow: /', '', 'Sitemap: '.rtrim(config('app.url'), '/').'/sitemap.xml']
        : ['# Not the live site, so keep it out of search results.', 'User-agent: *', 'Disallow: /'];

    return response(implode("\n", $lines)."\n", 200, ['Content-Type' => 'text/plain']);
})->name('robots');
