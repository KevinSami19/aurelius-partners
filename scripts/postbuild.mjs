/**
 * Post-build script: copies index.html → 404.html for SPA routing on GitHub Pages.
 * GitHub Pages serves 404.html for unknown routes, which loads the SPA and lets
 * react-router handle the route client-side.
 */

import { copyFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '..', 'dist');
const indexPath = resolve(distDir, 'index.html');
const notFoundPath = resolve(distDir, '404.html');

if (existsSync(indexPath)) {
  copyFileSync(indexPath, notFoundPath);
  console.log('✓ Copied dist/index.html → dist/404.html (SPA routing fix)');
} else {
  console.error('✗ dist/index.html not found. Did the build succeed?');
  process.exit(1);
}
