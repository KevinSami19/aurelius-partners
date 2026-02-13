# GitHub Pages Deployment Setup

If you see a white page or `404` for `/src/main.tsx`, GitHub Pages is likely serving the repo source instead of the built output.

## Fix: Use GitHub Actions as the source

1. Go to your repo → **Settings** → **Pages**
2. Under **Build and deployment** → **Source**, select **GitHub Actions** (not "Deploy from a branch")
3. Save. The next push will deploy the built site correctly.

The workflow runs on every push to `main` and deploys the built `dist/` folder.
