# Epik Advisory — Website

> Deal Advisory · Restructuring · Fractional CFO

A single-page HTML website for **Epik Advisory**, an institutional financial advisory firm offering services from fractional CFO to SEC reporting and M&A diligence.

---

## File Structure

```
epik-advisory-website/
├── index.html              # Main website (all 5 pages, fully self-contained)
├── assets/
│   ├── logo-full.png       # Primary logo (gold 3D text + cream compass)
│   ├── logo-compass.png    # Compass rose standalone (used as hero background)
│   ├── logo-full-v2.png    # Logo variation 2
│   ├── logo-full-v3.png    # Logo variation 3
│   ├── logo-original.png   # Original source logo
│   ├── logo-v2.png         # EpikAdvisory02 source
│   ├── logo-v3.png         # EpikAdvisory03 source
│   └── founder.jpg         # Founder portrait (About page)
└── README.md
```

---

## Pages

| Page | Description |
|------|-------------|
| **Home** | Hero, services overview, situations, outcomes, contact form |
| **Services** | Tabbed service detail — Deal Advisory, Liquidity, Fractional CFO, Restructuring |
| **Situations** | 6 client scenarios with numbered editorial layout |
| **About** | Founder bio, credentials, philosophy |
| **Contact** | Engagement form with all required fields |

---

## How to Upload to GitHub

### Option A — GitHub.com drag-and-drop (no terminal needed)

1. Go to [github.com](https://github.com) and sign in
2. Click **"New repository"** (green button, top right)
3. Name it: `epik-advisory-website`
4. Set visibility to **Public** (required for free GitHub Pages hosting)
5. Click **"Create repository"**
6. On the next screen click **"uploading an existing file"**
7. **Drag and drop** `index.html`, `README.md`, and the entire `assets/` folder
8. Scroll down → click **"Commit changes"**

---

## How to Host Free with GitHub Pages (live URL)

After uploading:

1. In your repo, click the **Settings** tab
2. In the left sidebar, click **Pages**
3. Under "Branch", select `main` → `/ (root)` → click **Save**
4. Wait ~60 seconds
5. Your live site will be at:

```
https://YOUR-GITHUB-USERNAME.github.io/epik-advisory-website/
```

Share that URL with clients, investors, or anyone you want to see the site.

---

## Option B — Terminal / Git CLI

```bash
# 1. Create repo on github.com first, then:
git clone https://github.com/YOUR-USERNAME/epik-advisory-website.git
cd epik-advisory-website

# 2. Copy all files from the downloaded zip into this folder, then:
git add .
git commit -m "Initial Epik Advisory website"
git push origin main
```

---

## Customization

- **Brand colors** — defined at the top of `index.html` in the `const C = { ... }` block
- **Fonts** — Libre Baskerville (serif headings) + Jost (labels) loaded from Google Fonts
- **Logo** — swap `assets/logo-full.png` with an updated version using the same filename; no code changes needed
- **Copy** — all text is in the React component functions inside `index.html`; search for the section you want to edit

---

## Tech Stack

- Plain HTML + React 18 (loaded via CDN — no build tools, no npm, no framework)
- Google Fonts
- No backend, no database — deploys as a pure static site

---

*Epik Advisory · Built April 2026 · TRUSTED. PROVEN. EPIK.*
