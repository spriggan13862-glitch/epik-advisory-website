#!/usr/bin/env node
/*
 * Auto-generates sitemap.xml for epik-advisory.com.
 * Runs automatically on every GitHub Pages deploy (see .github/workflows/static.yml).
 *
 * How it works:
 *   - Scans every .html file in the repo root.
 *   - Skips non-indexed pages (404, drafts) and anything with <meta name="robots" content="noindex">.
 *   - Reads each file's <link rel="canonical"> as the URL (falls back to the filename).
 *   - Uses the file's last git commit date as <lastmod> when available, else today.
 *   - Assigns priority/changefreq by page type (home > core pages > articles > legal).
 *
 * To add a new article: just commit the new .html file. The sitemap updates itself.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BASE = 'https://epik-advisory.com';
const ROOT = __dirname;

// Pages that should never appear in the sitemap.
const EXCLUDE = new Set(['404.html', 'google-verification.html']);

// Core navigation pages get higher priority + more frequent crawl.
const CORE = {
  'index.html':        { priority: '1.0', changefreq: 'monthly' },
  'capabilities.html': { priority: '0.9', changefreq: 'monthly' },
  'about.html':        { priority: '0.8', changefreq: 'monthly' },
  'insights.html':     { priority: '0.8', changefreq: 'weekly'  },
  'contact.html':      { priority: '0.7', changefreq: 'monthly' },
};
const LEGAL = new Set(['privacy.html', 'terms.html']);

function gitDate(file) {
  try {
    const d = execSync(`git log -1 --format=%cs -- "${file}"`, { cwd: ROOT })
      .toString().trim();
    return d || todayISO();
  } catch (_) {
    return todayISO();
  }
}
function todayISO() { return new Date().toISOString().slice(0, 10); }

function canonicalOf(html, file) {
  const m = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  if (m) return m[1];
  return file === 'index.html' ? `${BASE}/` : `${BASE}/${file}`;
}

const files = fs.readdirSync(ROOT)
  .filter(f => f.endsWith('.html') && !EXCLUDE.has(f));

const entries = [];
for (const file of files) {
  const html = fs.readFileSync(path.join(ROOT, file), 'utf8');
  if (/<meta[^>]+name=["']robots["'][^>]+noindex/i.test(html)) continue;

  const loc = canonicalOf(html, file);
  const lastmod = gitDate(file);
  let meta;
  if (CORE[file]) meta = CORE[file];
  else if (LEGAL.has(file)) meta = { priority: '0.3', changefreq: 'yearly' };
  else meta = { priority: '0.6', changefreq: 'yearly' }; // articles

  // Sort key: core order first, then articles by date desc, legal last.
  const order = CORE[file] ? Object.keys(CORE).indexOf(file)
              : LEGAL.has(file) ? 900
              : 100;
  entries.push({ loc, lastmod, ...meta, order });
}

// core (by defined order) → articles (newest first) → legal
entries.sort((a, b) => {
  if (a.order !== b.order) return a.order - b.order;
  return b.lastmod.localeCompare(a.lastmod);
});

const body = entries.map(e =>
`  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml);
console.log(`sitemap.xml written with ${entries.length} URLs.`);
