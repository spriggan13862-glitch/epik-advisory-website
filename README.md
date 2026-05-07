# Epik Advisory — Website

A fully self-contained HTML website for Epik Advisory. Built with HTML, CSS, and JavaScript — no frameworks required for deployment.

---

## 📁 File Structure

```
/
├── Epik Advisory.html          ← Main website (edit this)
├── epik-tweaks.jsx             ← Tweaks panel config (edit for live controls)
├── tweaks-panel.jsx            ← Tweaks panel component (do not edit)
├── Epik Advisory - Content Sheet.csv  ← All editable content values
├── uploads/                    ← All images used by the site
│   ├── EpikAdvisory02.png      ← Main logo
│   ├── 5HG2TK2.jpg             ← Hero slide 1
│   ├── G2EE8LS.jpg             ← Hero slide 2
│   ├── VTKJNY3.jpg             ← Hero slide 3
│   ├── Y5YV9AMa.jpg            ← Capabilities: Fractional CFO
│   ├── 58MLGG3a.jpg            ← Capabilities: SEC & GAAP
│   ├── GEWZQW7.jpg             ← Capabilities: Transaction
│   ├── MXAVSHL.jpg             ← Capabilities: Cross-Border
│   ├── UBNG9AEk.jpg            ← Testimonial 1
│   ├── UBNG9AEc.jpg            ← Testimonial 2
│   ├── UBNG9AEm.jpg            ← Testimonial 3
│   ├── CE5V9V8.jpg             ← Insights thumbnail
│   ├── 7TGLLJF.jpg             ← About: main photo
│   └── 33GGVVa.jpg             ← About: secondary photo
└── README.md                   ← This file
```

---

## 🚀 Uploading to GitHub Pages (Free Hosting)

### Step 1 — Create a GitHub Account
Go to [github.com](https://github.com) and sign up for free.

### Step 2 — Create a New Repository
1. Click the **+** icon → **New repository**
2. Name it: `epikconsulting` (or `epikadvisory`)
3. Set to **Public**
4. Click **Create repository**

### Step 3 — Upload Your Files
1. In your new repo, click **Add file → Upload files**
2. Drag and drop ALL files from this project folder:
   - `Epik Advisory.html`
   - `epik-tweaks.jsx`
   - `tweaks-panel.jsx`
   - The entire `uploads/` folder
3. In the commit message box type: `Initial upload`
4. Click **Commit changes**

### Step 4 — Rename main HTML to index.html
GitHub Pages serves `index.html` as the homepage.
1. Click on `Epik Advisory.html` in your repo
2. Click the pencil (edit) icon
3. Change the filename at the top to `index.html`
4. Scroll down and click **Commit changes**

### Step 5 — Enable GitHub Pages
1. Go to **Settings** tab in your repo
2. Scroll to **Pages** in the left sidebar
3. Under **Source**, select `Deploy from a branch`
4. Under **Branch**, select `main` and `/ (root)`
5. Click **Save**
6. Wait ~2 minutes, then your site is live at:
   `https://YOUR-USERNAME.github.io/epikconsulting/`

---

## ✏️ How to Update Content Without Claude

### Option A — Edit the HTML directly on GitHub (easiest)
1. Go to your GitHub repo
2. Click `index.html`
3. Click the **pencil icon** (Edit this file)
4. Use **Ctrl+F** to find the text you want to change
5. Edit it directly
6. Click **Commit changes**
7. Site updates in ~30 seconds

### Option B — Edit the CSV content sheet
Open `Epik Advisory - Content Sheet.csv` in Excel or Google Sheets. Use it as a reference for what text goes where in the HTML, then make the changes in the HTML file.

### Common edits:
| What to change | How to find it in HTML |
|---|---|
| Hero headline | Search: `Cross-Border Finance` |
| Hero subheading | Search: `Trusted CFO & SEC advisory` |
| Email address | Search: `epikinvestments@outlook.com` |
| Phone number | Search: `+800-3374-4676` |
| Testimonial names | Search: `David Thompson` / `Sarah Manning` |
| Footer copyright | Search: `© 2026` |
| Capabilities text | Search: `Fractional CFO Advisory` |

### Replacing images:
1. Upload new image to `uploads/` folder on GitHub
2. Find the old image filename in `index.html` (e.g. `7TGLLJF.jpg`)
3. Replace it with your new filename

---

## 🔤 Adding a Custom Domain (e.g. epikconsulting.com)
1. Buy a domain from Namecheap, GoDaddy, or Cloudflare
2. In GitHub Pages settings, enter your custom domain
3. In your domain provider, add a CNAME record pointing to:
   `YOUR-USERNAME.github.io`
4. Wait up to 24 hours for DNS to propagate

---

## 🎨 Tweaks Panel
The **Tweaks** button (visible in the design tool) controls:
- Accent color, nav color, section backgrounds
- Hero text, overlay darkness, height
- Ticker style and speed
- Font family, button radius
- Section padding, topbar visibility

Changes made in the Tweaks panel are saved automatically to `epik-tweaks.jsx`.

---

## 📞 Support
For major redesigns or new pages, use Claude Sonnet (not Haiku) for best results.
For simple text edits, use the GitHub editor directly — no Claude needed.
