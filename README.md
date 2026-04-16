# Muhammad Umar Shinwari — Personal Portfolio

Professional portfolio website for Muhammad Umar Shinwari, built as a static site for GitHub Pages.

**Live site (after deployment):** `https://<your-username>.github.io`

---

## Contents

```
github-pages-site/
|-- index.html       Main portfolio page (all sections)
|-- style.css        Full stylesheet (palette, responsive layout)
|-- script.js        Mobile nav + scroll highlighting + footer year
|-- 404.html         Custom 404 page (matches site branding)
|-- .nojekyll        Tells GitHub Pages to skip Jekyll processing
|-- robots.txt       Allows search engine indexing
|-- assets/          Reserved for future images / PDFs
`-- README.md        This file
```

---

## Deployment: Step-by-Step

### 1. Create the GitHub repository

For a **personal site** at `https://<username>.github.io`:
- Create a new **public** repository named exactly `<username>.github.io`
  (e.g. `muhammadumarshinwari.github.io`).

For a **project site** at `https://<username>.github.io/<repo-name>`:
- Create any public repository (e.g. `portfolio`).

### 2. Push the files

From the `github-pages-site/` folder:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

Or simply drag-and-drop every file in this folder into the GitHub web UI
("Add file" -> "Upload files"), then click **Commit changes**.

### 3. Enable GitHub Pages

1. In the GitHub repo: **Settings** -> **Pages** (left sidebar).
2. Under **Source**, select **Deploy from a branch**.
3. Under **Branch**, select `main` and folder `/ (root)`. Click **Save**.
4. Wait 1 to 5 minutes. The URL will appear at the top of the Pages page
   when the build finishes.

### 4. (Optional) Custom domain

1. In **Settings -> Pages**, enter your custom domain (e.g. `umarshinwari.com`).
2. At your DNS provider, add four **A records** pointing the apex domain to:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   Or a **CNAME record** for `www` pointing to `<username>.github.io`.
3. Wait for DNS propagation (up to 24h).
4. Back in **Settings -> Pages**, tick **Enforce HTTPS**.

---

## Customization

- **Colors:** Edit the CSS variables at the top of `style.css` (`:root` block).
  Current palette: navy `#2E4057`, dark navy `#1F2D3D`, gold accent `#C9A86A`.
- **Content:** All copy lives in `index.html`. Publications, experience bullets,
  and skills are plain HTML - no build step required.
- **Fonts:** `Lora` (headings) and `Inter` (body) loaded from Google Fonts.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| 404 at the site URL | Confirm `index.html` is in the repo root; branch set to `main`; folder set to `/ (root)`. |
| CSS / JS not loading | Paths are relative (`style.css`, `script.js`) - make sure files were uploaded at the same level as `index.html`. |
| Changes not showing | Hard refresh (Ctrl+Shift+R). GitHub Pages can take 1-5 min to rebuild. |
| Custom domain not resolving | Check DNS A records and the CNAME file that GitHub auto-creates. Allow 24h. |
| HTTPS option greyed out | Wait 24h after adding a custom domain, then the option will be enforceable. |

---

Built with plain HTML, CSS, and vanilla JS. No frameworks, no build step, no dependencies beyond Google Fonts.
