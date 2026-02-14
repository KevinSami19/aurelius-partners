# Zal Partners — Marketing Website

> Strength through clarity.

A modern, conversion-first marketing website for **Zal Partners**, a boutique consulting firm that helps small-to-mid staffing agencies grow pipeline, clean up noisy data, and adopt AI/automation while keeping a human touch.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS v4** (styling)
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **React Router DOM** (routing)
- **React Hook Form** + **Zod** (form validation)
- **React Helmet Async** (SEO meta tags)
- **Vitest** + **React Testing Library** (tests)

## Quick Start

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test
```

## Project Structure

```
zal-partners-site/
├── .github/workflows/deploy.yml   # GitHub Pages deployment
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── scripts/
│   └── postbuild.mjs              # Copies index.html → 404.html for SPA routing
├── src/
│   ├── components/
│   │   ├── home/                   # Home page sections (Hero, Reality, System, etc.)
│   │   ├── layout/                 # Navbar, Footer, Layout
│   │   ├── quiz/                   # Growth Score quiz
│   │   ├── seo/                    # SEO component (Helmet + JSON-LD)
│   │   └── ui/                     # Reusable UI components (Button, Card, Section, etc.)
│   ├── config/
│   │   └── brand.ts                # All brand config in one file
│   ├── content/
│   │   └── posts/index.ts          # Blog posts data
│   ├── hooks/                      # Custom hooks (theme, scroll, reduced motion)
│   ├── lib/                        # Animation variants
│   ├── pages/                      # Route pages
│   └── test/                       # Test setup and test files
├── ASSUMPTIONS.md                  # Implementation decisions
└── README.md
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home (primary conversion page with 10 sections) |
| `/services` | Services detail + productized packages |
| `/case-studies` | Two example case studies |
| `/insights` | Blog listing with search + tag filtering |
| `/insights/:slug` | Individual blog post |
| `/about` | Founder story + values |
| `/contact` | Contact form + scheduler link |
| `/privacy` | Privacy policy |

## Configuration

All brand settings are in `src/config/brand.ts`. Environment variables (set in `.env`):

```env
# Contact & scheduling
VITE_CONTACT_EMAIL=hello@zalpartners.com
VITE_LINKEDIN_URL=https://linkedin.com/company/zal-partners
VITE_SCHEDULER_URL=https://calendly.com/zal-partners

# Form submission (Formspree)
VITE_FORMSPREE_URL=https://formspree.io/f/YOUR_FORM_ID

# Analytics (optional)
VITE_ANALYTICS_ID=

# Site URL (for OG tags)
VITE_SITE_URL=https://zalpartners.com
```

## Brand Customization

1. **Colors**: Edit `src/index.css` — the `@theme` block defines all design tokens
2. **Brand config**: Edit `src/config/brand.ts` — name, tagline, contact info
3. **Copy**: All marketing copy is in the component files under `src/components/home/` and `src/pages/`
4. **Blog posts**: Add/edit entries in `src/content/posts/index.ts`
5. **Fonts**: Change in `index.html` (Google Fonts link) and `src/index.css` (font-family variables)

## Deployment on GitHub Pages

### Setup

1. Create a new GitHub repo named **zal-partners** (or push this code into it)
2. Push this repo to GitHub
3. Go to **Settings → Pages → Source** and select **GitHub Actions**
4. The workflow runs automatically on push to `main`

**Your live URL:** `https://kevinsami19.github.io/zal-partners/`

### How It Works

- **Base path**: Automatically set via `VITE_BASE` env var in the workflow (`/zal-partners/`)
- **SPA routing**: The postbuild script copies `index.html` → `404.html` so that deep links (e.g., `/services`, `/about`) work on GitHub Pages
- **Local dev**: Uses `/` as base path (no repo prefix needed)

### Custom Domain

If using a custom domain (e.g., `zalpartners.com`):
1. Add a `CNAME` file to `public/` with your domain
2. Set `VITE_BASE=/` in the workflow (remove the repo name prefix)
3. Configure DNS per [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `obsidian` | `#0B0F14` | Background (dark mode) |
| `surface` | `#111827` | Card backgrounds |
| `steel` | `#223041` | Borders, dividers |
| `gold` | `#C9A24E` | Primary brand accent |
| `gold-hover` | `#B58B2E` | Gold hover state |
| `royal` | `#1F6FEB` | Secondary accent (links, data) |
| `text-primary` | `#E6EAF2` | Main text (dark mode) |
| `text-muted` | `#A7B0C0` | Secondary text |

**Fonts**: Inter (body) + Space Grotesk (display/headings)

## Accessibility

- Skip-to-content link
- Semantic HTML headings (h1 → h6)
- Keyboard navigation with visible focus states
- `prefers-reduced-motion` fully respected (animations disabled)
- ARIA labels on interactive elements
- Color contrast ratios meeting WCAG AA

## SEO

- Per-page meta tags via `react-helmet-async`
- JSON-LD schema (ProfessionalService)
- Open Graph + Twitter Card meta tags
- Static sitemap.xml and robots.txt
- Target keywords embedded in page copy and meta descriptions

## Testing

```bash
npm test          # Run all tests
npm run test:watch  # Watch mode
```

Tests use Vitest + React Testing Library. Test file: `src/test/App.test.tsx`.

## License

Private — All rights reserved.
