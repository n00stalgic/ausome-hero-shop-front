// GitHub Pages project-site preview only: prefix public asset URLs in built JS.
// BrowserRouter uses Vite's base path; no source asset paths change for the final root domain.
import { readdir, readFile, writeFile } from 'node:fs/promises';
const base = process.env.PAGES_BASE || '/';
if (base !== '/') {
  const html = await readFile('dist/index.html', 'utf8');
  await writeFile('dist/index.html', html.replaceAll('content="/meta-image.png"', `content="${base}meta-image.png"`));
  for (const name of await readdir('dist/assets')) {
    if (!name.endsWith('.js')) continue;
    const file = `dist/assets/${name}`;
    const old = await readFile(file, 'utf8');
    const next = old.replaceAll('/lovable-uploads/', `${base}lovable-uploads/`)
      .replaceAll('/partners/', `${base}partners/`);
    if (next !== old) await writeFile(file, next);
  }
}
