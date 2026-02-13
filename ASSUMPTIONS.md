# Assumptions

Decisions made during implementation to keep progress unblocked:

## Brand & Content
- **Case studies are labeled "Example Outcomes"** — no real client names or identifying details are used.
- **Founder story uses the framing**: hands-on operator + builder + innovator. No claims of leadership/executive titles.
- **Blog posts use inline content** (TypeScript string) rather than separate `.mdx` files for simplicity and to avoid MDX runtime complexity. The MDX plugin is installed and configured if you want to migrate to `.mdx` files later.
- **Three sample blog posts** are provided with substantive, non-lorem-ipsum content targeting the specified SEO keywords.

## Technical
- **Blog content is stored as TypeScript strings** in `src/content/posts/index.ts` rather than standalone `.mdx` files. This was chosen because the MDX compile pipeline requires additional runtime configuration for dynamic imports. The MDX rollup plugin is configured and ready if you prefer to use `.mdx` files.
- **Formspree** is the assumed form handler. The endpoint falls back to a demo mode (simulated submission) when `VITE_FORMSPREE_URL` is not configured.
- **Scheduler embed** is a link to an external scheduler (Calendly/Cal.com) rather than an iframe embed, for simplicity and performance.
- **OG image** (`og.png`) is referenced but needs to be created/uploaded manually — a placeholder path is set.
- **Sitemap** is a static XML file rather than build-time generated — update it when you add or remove pages.
- **Analytics** (Plausible/GA) is ready via `VITE_ANALYTICS_ID` env var but not implemented as a provider — add the script tag in `index.html` when ready.

## Design
- **Dark mode is the default** with a light mode toggle. Both themes are fully styled.
- **Fonts load from Google Fonts CDN** — consider self-hosting for production performance.
- **No actual particle/canvas effect** is used on the hero — instead, animated gradient mesh blobs provide the premium accent effect while being much more performant and accessible.
- **Mobile animations are not explicitly disabled** but `prefers-reduced-motion` is fully respected.

## Deployment
- **GitHub Pages deployment** assumes the "GitHub Actions" source is selected in repo Settings → Pages.
- **`VITE_BASE`** is set automatically in the GitHub Actions workflow using the repository name.
- **404.html SPA routing** is handled by copying `index.html` → `404.html` at build time.
