# Epik Advisory — Website

A complete multi-page professional website for Epik Advisory. Built with clean HTML, CSS, and JavaScript — no frameworks, no build tools. Works on GitHub Pages out of the box.

---

## 📁 File Structure (upload ALL of these)

```
/
├── index.html              ← Homepage
├── capabilities.html       ← Capabilities (4 service pages)
├── about.html              ← About / Founder
├── insights.html           ← Insights / Blog index
├── contact.html            ← Contact form
├── style.css               ← Shared styles (used by all pages)
└── assets/                 ← All images
    ├── logo.png            ← Epik Advisory logo (no background)
    ├── hero-1.jpg          ← Hero slideshow image 1
    ├── hero-2.jpg          ← Hero slideshow image 2
    ├── hero-3.jpg          ← Hero slideshow image 3
    ├── cap-cfo.jpg         ← Capabilities: Fractional CFO
    ├── cap-sec.jpg         ← Capabilities: SEC & GAAP
    ├── cap-transaction.jpg ← Capabilities: Transaction
    ├── cap-crossborder.jpg ← Capabilities: Cross-Border
    ├── testi-1.jpg         ← Testimonial portrait 1
    ├── testi-2.jpg         ← Testimonial portrait 2
    ├── testi-3.jpg         ← Testimonial portrait 3
    ├── insight-thumb.jpg   ← Insights thumbnail
    ├── founder-1.jpg       ← About: main photo
    └── founder-2.jpg       ← About: secondary photo
```

---

## 🚀 How to Upload to GitHub Pages (Step by Step)

### Step 1 — Create a GitHub account
Go to [github.com](https://github.com) and sign up (free).

### Step 2 — Create a new repository
1. Click **+** → **New repository**
2. Name: `epikconsulting` (or anything you like)
3. Set to **Public**
4. Click **Create repository**

### Step 3 — Upload ALL files
1. In your new repo, click **Add file → Upload files**
2. **Drag and drop the entire `site/` folder contents** — all HTML files, style.css, and the `assets/` folder
3. GitHub must see this structure at the root level:
   ```
   index.html
   capabilities.html
   about.html
   insights.html
   contact.html
   style.css
   assets/logo.png
   assets/hero-1.jpg
   ... etc
   ```
4. Commit message: `Initial site upload`
5. Click **Commit changes**

### Step 4 — Enable GitHub Pages
1. Go to **Settings** tab in your repo
2. Click **Pages** in the left sidebar
3. Under **Source**: select `Deploy from a branch`
4. Under **Branch**: select `main`, folder `/ (root)`
5. Click **Save**
6. Wait ~2 minutes. Your site is live at:
   `https://YOUR-USERNAME.github.io/REPO-NAME/`

---

## ✏️ How to Update Content (No Code Knowledge Required)

### Edit any text — GitHub web editor
1. Go to your GitHub repo
2. Click the file you want to edit (e.g. `index.html`)
3. Click the **pencil icon** (Edit this file)
4. Press **Ctrl+F** to find the text you want to change
5. Edit it directly
6. Click **Commit changes**
7. Site updates in ~30 seconds ✓

### Common edits quick-reference:
| What to change | Open this file | Search for |
|---|---|---|
| Hero headline | index.html | `Cross-Border Finance` |
| Hero subheading | index.html | `Trusted CFO & SEC` |
| Phone number | Any file | `+800-3374-4676` |
| Email address | Any file | `epikinvestments@outlook.com` |
| Stats (30+, $2B+) | index.html | `stat-num` |
| Testimonial quotes | index.html | `testi-card` |
| Capabilities descriptions | capabilities.html | service name |
| Founder quote | about.html | `founder-quote` |
| Copyright year | Any file | `© 2026` |

### Swap an image:
1. Upload new image to `assets/` folder on GitHub
2. Find old image filename in HTML (e.g. `founder-1.jpg`)
3. Replace with new filename

---

## 📬 Setting Up the Contact Form (5 minutes, free)

The contact form on `contact.html` needs a backend to send emails.

1. Go to [formspree.io](https://formspree.io) and sign up (free)
2. Create a new form — you'll get a form ID like `xpzgkwrb`
3. In `contact.html`, find this line:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Replace `YOUR_FORM_ID` with your actual ID:
   ```html
   <form action="https://formspree.io/f/xpzgkwrb" method="POST">
   ```
5. Commit the change. Done — form submissions go straight to your email.

---

## 🔤 Adding a Custom Domain (epikconsulting.com)

1. Buy domain at [Cloudflare](https://www.cloudflare.com/products/registrar/) (~$10/year, cheapest)
2. In GitHub Pages settings → enter your custom domain
3. In Cloudflare DNS, add:
   - Type: `CNAME` | Name: `www` | Target: `YOUR-USERNAME.github.io`
   - Type: `A` | Name: `@` | IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. Wait up to 24 hours for DNS to propagate

---

## 📊 Adding Google Analytics (free, see who visits)

1. Go to [analytics.google.com](https://analytics.google.com) → create account → get your Measurement ID (looks like `G-XXXXXXXXXX`)
2. Add this code to the `<head>` of each HTML file:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

---

## 📝 Adding a New Insight Post

1. Duplicate `insights.html` → rename to `insights/my-post-title.html`
2. Edit the content
3. Add a card linking to it in `insights.html`

---

## 💡 When to Use Claude vs. Edit Yourself

| Task | Do it yourself | Use Claude |
|---|---|---|
| Fix a typo or change text | ✓ GitHub editor | |
| Swap a photo | ✓ Upload + rename | |
| Update contact info | ✓ GitHub editor | |
| Add an insight post | ✓ Duplicate + edit | |
| Add a whole new page | | ✓ Claude Haiku |
| Redesign a section | | ✓ Claude Sonnet |
| Add new functionality | | ✓ Claude Sonnet |
