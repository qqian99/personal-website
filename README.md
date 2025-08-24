# Qipeng Qian — Academic Website

This is a simple, multi-page academic website with a sidebar layout (similar to a Google Sites profile).

## Files
- `index.html` — Home/About
- `research.html` — Research projects
- `publications.html` — Publications & preprints
- `teaching.html` — Teaching info
- `cv.html` — CV page (embeds `cv.pdf` if present)
- `cv.pdf` — Your CV (already included if you uploaded it)
- `assets/style.css` — Styles
- `assets/script.js` — Small JS for mobile menu
- `.nojekyll` — Ensures GitHub Pages serves static files without Jekyll processing

---

## Option 1: Publish with **GitHub Pages** (free)

1. Create a GitHub account (if you don't have one).
2. Click "New repository" → Name it something like `qipeng-qian` (public).
3. Upload all files in this folder (or upload the ZIP then extract it in GitHub).
4. Go to **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: **main** (or `master`) and root `/`
5. Wait ~1 minute. Your site will appear at:
   - `https://YOUR_USERNAME.github.io/qipeng-qian/`

**Custom domain (optional):**
- Buy a domain (e.g., Namecheap/Google Domains/Cloudflare).
- In **Settings → Pages**, set your custom domain (e.g., `qipengqian.com`).
- In your domain DNS, create a CNAME record to `YOUR_USERNAME.github.io`.
- GitHub Pages will issue HTTPS automatically.

---

## Option 2: Publish with **Netlify** (easiest)

1. Go to Netlify → "Add new site" → "Deploy manually", or search for "Netlify Drop".
2. Drag-and-drop this folder (or the ZIP). It will generate a URL like `https://something.netlify.app`.
3. (Optional) Log in to customize the site name or connect a custom domain.

---

## Option 3: **Google Sites** (no-code)

If you prefer the exact Google Sites experience (like the example link):
1. Go to **Google Sites** and click **Blank**.
2. Use the left/right panel to add pages: Home, Research, Publications, Teaching, CV.
3. Copy text from these HTML files into the Google Sites editor.
4. Click **Publish**, choose a site address, and you will get a URL like:
   - `https://sites.google.com/view/YOUR-SITE-NAME`
5. (Optional) Set a custom domain in Google Sites settings.

---

## Edit Content

Open the HTML files and replace text as needed. For Publications, edit `publications.html`.
For CV, replace `cv.pdf` with your latest file. Style changes can be made in `assets/style.css`.

---

## Print to PDF

Any page can be printed nicely: `Ctrl/Cmd + P` → Save as PDF.