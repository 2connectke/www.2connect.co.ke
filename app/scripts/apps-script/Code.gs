/**
 * 2Connect articles. Paste into Extensions > Apps Script of the
 * "2Connect articles" Google Sheet (with appsscript.json beside it).
 * Setup steps are in the repo README, under "Articles".
 *
 * - The "2Connect" menu sets up the sheet, checks every row and publishes.
 * - Editing a row fills in its slug and dates, and refuses to mark a row
 *   Published until it is complete.
 * - doGet() is the web app the site's build reads: only Published rows,
 *   each with its Google Doc exported as Markdown. Drafts never leave Google.
 * - "Publish to live site" starts the GitLab pipeline, which rebuilds and
 *   deploys 2connect.co.ke with the latest articles (about 3 to 5 minutes).
 *
 *** AppsScript***
 * Deployment ID - AKfycbzEOuqGubXea1UqKCuDR1E4LFDh8wvOHZtDlIqqP3fU8V1-Gb_dNaPS26qvJwQodQHjlg
 * Deployment web app url - https://script.google.com/macros/s/AKfycbzEOuqGubXea1UqKCuDR1E4LFDh8wvOHZtDlIqqP3fU8V1-Gb_dNaPS26qvJwQodQHjlg/exec
 * Script properties (Project Settings > Script properties):
 *   GITLAB_TRIGGER_TOKEN  Pipeline trigger token of gitlab.com/2connect1/2connect_main.
 *   GITLAB_PROJECT_ID     That project's number (GitLab project page > ⋮ > Copy project ID).
 */

const SHEET_NAME = 'Articles';
const TIME_ZONE = 'Africa/Nairobi';

const COLUMNS = [
    'slug',
    'status',
    'title',
    'excerpt',
    'category',
    'author',
    'cover',
    'cover_alt',
    'doc_url',
    'published_at',
    'updated_at',
];
const REQUIRED = [
    'title',
    'excerpt',
    'category',
    'author',
    'cover',
    'cover_alt',
    'doc_url',
];
const STATUSES = ['Draft', 'Published'];
const CATEGORIES = [
    'Volunteer stories',
    'Wellness',
    'Training',
    'Campus life',
    'Partners',
    'News',
];
// Site photos follow 2connect-<category>-<nn>.jpg and live in the repo's public/assets/images.
const COVER = /^2connect-[a-z]+-\d{2}\.jpg$/;

function onOpen() {
    SpreadsheetApp.getUi()
        .createMenu('2Connect')
        .addItem('Check articles', 'checkArticles')
        .addItem('Publish to live site', 'publish')
        .addSeparator()
        .addItem('Set up sheet', 'setUp')
        .addToUi();
}

/** Creates the Articles tab with its headers, dropdowns and frozen header row. */
function setUp() {
    const book = SpreadsheetApp.getActive();
    const sheet =
        book.getSheetByName(SHEET_NAME) || book.insertSheet(SHEET_NAME);
    const rows = sheet.getMaxRows() - 1;
    const list = (values) =>
        SpreadsheetApp.newDataValidation()
            .requireValueInList(values, true)
            .setAllowInvalid(false)
            .build();

    sheet
        .getRange(1, 1, 1, COLUMNS.length)
        .setValues([COLUMNS])
        .setFontWeight('bold');
    sheet.setFrozenRows(1);
    sheet.getRange(2, col('status'), rows).setDataValidation(list(STATUSES));
    sheet
        .getRange(2, col('category'), rows)
        .setDataValidation(list(CATEGORIES));
    sheet
        .getRange(2, col('published_at'), rows, 2)
        .setNumberFormat('yyyy-mm-dd');
    sheet
        .getRange(2, col('slug'), rows)
        .setNote(
            'Filled in from the title. Do not change it once published: it is the article’s web address.',
        );
}

/** Slug, dates and the Published gate, on every edit of an article row. */
function onEdit(e) {
    const sheet = e.range.getSheet();

    if (sheet.getName() !== SHEET_NAME || e.range.getRow() < 2) {
        return;
    }

    for (let row = e.range.getRow(); row <= e.range.getLastRow(); row++) {
        const article = read(sheet, row);

        if (!article.title) {
            continue;
        }

        if (!article.slug) {
            sheet
                .getRange(row, col('slug'))
                .setValue(uniqueSlug(sheet, article.title));
        }

        sheet.getRange(row, col('updated_at')).setValue(new Date());

        if (article.status === 'Published') {
            const problems = problemsWith(article);

            if (problems.length) {
                sheet.getRange(row, col('status')).setValue('Draft');
                SpreadsheetApp.getActive().toast(
                    problems.join('\n'),
                    `Row ${row} stays a draft`,
                    10,
                );
            } else if (!article.published_at) {
                sheet.getRange(row, col('published_at')).setValue(new Date());
            }
        }
    }
}

/** Menu: lists every problem in Published rows, or says all is well. */
function checkArticles() {
    const problems = allProblems();

    SpreadsheetApp.getUi().alert(
        problems.length
            ? `Fix these before publishing:\n\n${problems.join('\n')}`
            : 'Every published article is ready.',
    );

    return problems;
}

/** Menu: rebuilds and deploys the live site with the current Published rows. */
function publish() {
    const ui = SpreadsheetApp.getUi();

    if (checkArticles().length) {
        return;
    }

    const properties = PropertiesService.getScriptProperties();
    const token = properties.getProperty('GITLAB_TRIGGER_TOKEN');
    // The number, not "2connect1/2connect_main": UrlFetchApp rejects the encoded slash.
    const project = properties.getProperty('GITLAB_PROJECT_ID');

    if (!token || !/^\d+$/.test(project || '')) {
        ui.alert(
            'Publishing is not set up yet: add GITLAB_TRIGGER_TOKEN and GITLAB_PROJECT_ID (a number) under Project Settings > Script properties.',
        );

        return;
    }

    const confirm = ui.alert(
        'Publish to 2connect.co.ke?',
        'Every Published article goes live in about 3 to 5 minutes.',
        ui.ButtonSet.OK_CANCEL,
    );

    if (confirm !== ui.Button.OK) {
        return;
    }

    const response = UrlFetchApp.fetch(
        `https://gitlab.com/api/v4/projects/${project}/trigger/pipeline`,
        {
            method: 'post',
            payload: { token, ref: 'main' },
            muteHttpExceptions: true,
        },
    );

    if (response.getResponseCode() !== 201) {
        ui.alert(
            `Publishing failed (${response.getResponseCode()}): ${response.getContentText().slice(0, 300)}\n\nAsk the web team to check the GitLab trigger token and project ID.`,
        );

        return;
    }

    ui.alert(
        `Publishing started. Follow it here:\n${JSON.parse(response.getContentText()).web_url}`,
    );
}

/** Web app read by the site's build (scripts/articles.mjs). */
function doGet() {
    try {
        const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME);
        const problems = allProblems();

        if (problems.length) {
            throw new Error(problems.join('; '));
        }

        const articles = rows(sheet)
            .filter((article) => article.status === 'Published')
            .map((article) => ({
                slug: article.slug,
                title: article.title,
                excerpt: article.excerpt,
                category: article.category,
                author: article.author,
                cover: article.cover,
                coverAlt: article.cover_alt,
                publishedAt: day(article.published_at),
                updatedAt: day(article.updated_at),
                markdown: docMarkdown(article.doc_url, article.title),
            }));

        return json({ articles });
    } catch (error) {
        return json({ error: error.message });
    }
}

function json(data) {
    return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
        ContentService.MimeType.JSON,
    );
}

/** The Google Doc as Markdown, read with the script owner's access. */
function docMarkdown(url, title) {
    const id = (String(url).match(/\/d\/([\w-]{20,})/) || [])[1];

    if (!id) {
        throw new Error(`"${title}" has no valid Google Doc link`);
    }

    const response = UrlFetchApp.fetch(
        `https://www.googleapis.com/drive/v3/files/${id}/export?mimeType=text/markdown`,
        {
            headers: { Authorization: `Bearer ${ScriptApp.getOAuthToken()}` },
            muteHttpExceptions: true,
        },
    );

    if (response.getResponseCode() !== 200) {
        throw new Error(
            `The Doc for "${title}" could not be read (${response.getResponseCode()}): ${googleReason(response)}`,
        );
    }

    return response.getContentText();
}

function allProblems() {
    const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME);

    if (!sheet) {
        return [
            `There is no "${SHEET_NAME}" tab. Run 2Connect > Set up sheet.`,
        ];
    }

    const all = rows(sheet);
    const problems = all
        .filter((article) => article.status === 'Published')
        .flatMap((article) =>
            problemsWith(article).map(
                (problem) => `Row ${article.row}: ${problem}`,
            ),
        );
    const slugs = all.map((article) => article.slug).filter(Boolean);

    slugs
        .filter((slug, index) => slugs.indexOf(slug) !== index)
        .forEach((slug) => problems.push(`The slug "${slug}" is used twice`));

    return problems;
}

function problemsWith(article) {
    const problems = REQUIRED.filter((field) => !article[field]).map(
        (field) => `${field.replace('_', ' ')} is empty`,
    );

    if (article.cover && !COVER.test(article.cover)) {
        problems.push(
            `cover should be a site photo name like 2connect-outreach-01.jpg`,
        );
    }

    if (article.excerpt && article.excerpt.length > 200) {
        problems.push('excerpt is longer than 200 characters');
    }

    return problems;
}

function rows(sheet) {
    const last = sheet.getLastRow();

    return last < 2
        ? []
        : sheet
              .getRange(2, 1, last - 1, COLUMNS.length)
              .getValues()
              .map((values, index) => toArticle(values, index + 2))
              .filter((article) => article.title);
}

function read(sheet, row) {
    return toArticle(
        sheet.getRange(row, 1, 1, COLUMNS.length).getValues()[0],
        row,
    );
}

function toArticle(values, row) {
    const article = { row };

    COLUMNS.forEach((name, index) => {
        const value = values[index];
        article[name] = value instanceof Date ? value : String(value).trim();
    });

    return article;
}

function uniqueSlug(sheet, title) {
    const base =
        title
            .toLowerCase()
            .normalize('NFD')
            .replace(/[̀-ͯ]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
            .slice(0, 60)
            .replace(/-+$/, '') || 'article';
    const taken = rows(sheet).map((article) => article.slug);
    let slug = base;

    for (let n = 2; taken.includes(slug); n++) {
        slug = `${base}-${n}`;
    }

    return slug;
}

function day(value) {
    return value instanceof Date
        ? Utilities.formatDate(value, TIME_ZONE, 'yyyy-MM-dd')
        : '';
}

function col(name) {
    return COLUMNS.indexOf(name) + 1;
}

/** Google's own reason for a failed API call, e.g. no access or the Drive API being off. */
function googleReason(response) {
    try {
        return JSON.parse(response.getContentText()).error.message;
    } catch {
        return response.getContentText().slice(0, 200);
    }
}
