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

Pushes to `main` trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`.

**First-time setup:**

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set **Source** to **GitHub Actions**
4. Push to `main` — the site will deploy automatically

## Custom domain (future)

When you own `uranisufi.me`:

1. Add a `public/CNAME` file containing `uranisufi.me`
2. In `astro.config.mjs`, change `site` to `https://uranisufi.me` and remove or set `base: '/'`
3. Configure DNS with your registrar (A/CNAME records pointing to GitHub Pages)
4. Enable the custom domain in repo **Settings → Pages**

## Conventions

See `.cursor/rules/cv-site.mdc` for coding guidelines used in this project.
