# Epik Advisory — Website (Master)

Live site files. Upload the **contents** of this folder to the root of your
`epik-advisory-website` GitHub repo. GitHub Pages serves `index.html` automatically.

## Pages
- `index.html` — Home
- `capabilities.html` — Capabilities
- `about.html` — About / Founder
- `insights.html` — Insights (articles link to LinkedIn)
- `contact.html` — Contact (embedded HubSpot form)
- `privacy.html` / `terms.html` — Legal

## Shared
- `epik-shared.css` — styles
- `epik-header.js` / `epik-footer.js` — nav + footer (injected on every page)

## Branding (NEW)
- `uploads/epik-logo-header.png` — site logo (white EPIK + gold K, for the navy header/footer)
- `uploads/epik-logo-light.png` — black wordmark version (for light backgrounds)
- `uploads/favicon-32.png` / `favicon-192.png` / `favicon-512.png` — browser/app icons
- `uploads/og-share.png` — social link-share preview image
- `uploads/brand/` — full logo kit (Web, Print, PPT, Business Cards, Social, Favicons, Email, Raw Transparent) — see `uploads/brand/README.txt`

## Updating
Edit any `.html` on GitHub directly (pencil icon → commit). Logo lives in
`epik-header.js` / `epik-footer.js` and each page's nav. To swap the logo,
replace `uploads/epik-logo-header.png` or point the `<img src>` at a different
file in `uploads/brand/`.
