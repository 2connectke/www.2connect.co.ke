import assert from 'node:assert/strict';
import { test } from 'node:test';
import { prepare, problemsWith, toHtml } from './articles.mjs';

const article = {
    slug: 'first-cleanup',
    title: 'Our first cleanup',
    excerpt: 'How it went.',
    category: 'Volunteer stories',
    author: '2Connect team',
    cover: '2connect-outreach-01.jpg',
    coverAlt: 'Volunteers sweeping a school compound',
    publishedAt: '2026-11-02',
    markdown: '# Morning\n\nWe met at **8**.',
};
const always = () => true;

test('toHtml shows raw HTML as text and blocks script links', () => {
    const html = toHtml(
        '<script>alert(1)</script>\n\n[bad](javascript:alert(1)) [ok](https://2connect.co.ke)',
    );

    assert.ok(!html.includes('<script>'));
    assert.ok(html.includes('&lt;script&gt;'));
    assert.ok(html.includes('href="#"'));
    assert.ok(html.includes('href="https://2connect.co.ke"'));
});

test('toHtml drops Doc images and starts headings at h2', () => {
    const html = toHtml(
        '# Title\n\n![][image1]\n\n[image1]: <data:image/png;base64,AAAA>',
    );

    assert.equal(html, '<h2>Title</h2>');
});

test('problemsWith flags missing fields, bad slugs, dates and covers', () => {
    assert.deepEqual(problemsWith(article, always), []);
    assert.deepEqual(
        problemsWith(
            {
                ...article,
                slug: 'Bad Slug',
                publishedAt: '2/11/2026',
                excerpt: '',
            },
            () => false,
        ),
        [
            'excerpt is missing',
            'slug "Bad Slug" must be lowercase-words-like-this',
            'publishedAt "2/11/2026" must be YYYY-MM-DD',
            'cover "2connect-outreach-01.jpg" is not in public/assets/images',
        ],
    );
});

test('prepare rejects duplicate slugs and sorts newest first', () => {
    assert.throws(() => prepare([article, article], always), /more than one/);

    const older = { ...article, slug: 'older', publishedAt: '2026-01-01' };
    const result = prepare([older, article], always);

    assert.deepEqual(
        result.map((item) => item.slug),
        ['first-cleanup', 'older'],
    );
    assert.equal(result[0].cover, '/assets/images/2connect-outreach-01.jpg');
    assert.equal(result[0].updatedAt, '2026-11-02');
});
