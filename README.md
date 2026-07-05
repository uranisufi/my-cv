# my-cv

Personal CV website — a static one-page site built with [Astro](https://astro.build), deployed to GitHub Pages.

**Live URL:** [https://uranisufi.github.io/my-cv/](https://uranisufi.github.io/my-cv/)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321/my-cv/](http://localhost:4321/my-cv/) (note the `/my-cv/` base path).

## Build & preview

```bash
npm run build
npm run preview
```

## Editing content

All copy and structured data live in a single file:

```
src/content/cv.ts
```

Update your name, roles, case studies, stats, and links there. Placeholders are marked with `[TBD: ...]` — search the file to find them.

Replace the placeholder headshot by adding your photo to:

```
public/images/headshot.jpg
```

Then update `person.photo` in `cv.ts` to `images/headshot.jpg`.

## Project structure

```
src/
├── content/cv.ts       # All CV data (single source of truth)
├── components/         # Section components
├── layouts/            # Base HTML layout
├── pages/index.astro   # Single page
├── styles/             # CSS tokens + section styles
└── scripts/            # Scroll reveal animation
```

## Deployment

Pushes to `main` build the site and push it to the `gh-pages` branch via GitHub Actions.

**First-time setup (required):**

1. Open [github.com/uranisufi/my-cv/settings/pages](https://github.com/uranisufi/my-cv/settings/pages)
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Set **Branch** to `gh-pages` and folder to **`/ (root)`**
4. Click **Save**
5. Push to `main` (or re-run the **Deploy to GitHub Pages** workflow under **Actions**)

The site will be live at [https://uranisufi.github.io/my-cv/](https://uranisufi.github.io/my-cv/) after the workflow completes.

### Troubleshooting

| Error | Fix |
|-------|-----|
| `Failed to create deployment (status: 404)` | You were using the old workflow — pull latest `main`. Use **Deploy from a branch** → `gh-pages`, not **GitHub Actions** |
| Site shows 404 after deploy | Confirm Pages source is `gh-pages` / `(root)` and wait 1–2 minutes |
| Assets load incorrectly | Astro `base: '/my-cv/'` in `astro.config.mjs` must match the repo name |

## Custom domain (future)

When you own `uranisufi.me`:

1. Add a `public/CNAME` file containing `uranisufi.me`
2. In `astro.config.mjs`, change `site` to `https://uranisufi.me` and remove or set `base: '/'`
3. Configure DNS with your registrar (A/CNAME records pointing to GitHub Pages)
4. Enable the custom domain in repo **Settings → Pages**

## Conventions

See `.cursor/rules/cv-site.mdc` for coding guidelines used in this project.
