// GitHub Pages project-site preview only: prefix public asset URLs in built JS.
// BrowserRouter uses Vite's base path; no source asset paths change for the final root domain.
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
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

// A real static entry point lets link crawlers receive the card's art and text,
// while the same React bundle takes over for visitors after load.
const appHtml = await readFile('dist/index.html', 'utf8');
const cardHtml = appHtml
  .replace('<title>Ausome Heroes | Community for Neurodivergent Families</title>', '<title>Mariposa | Pocket Heroes | Ausome Heroes</title>')
  .replace('content="Sensory-friendly events, useful resources, and a community where neurodivergent children and their families can feel at home."', 'content="Meet Mariposa, Keeper of the Quiet Garden. A fictional Pocket Heroes digital trading card prototype."')
  .replace('property="og:title" content="Ausome Heroes"', 'property="og:title" content="Mariposa | Pocket Heroes"')
  .replace('content="A place where kids can just be kids. Explore our events and community for neurodivergent families."', 'content="Meet Mariposa, Keeper of the Quiet Garden. A fictional hero card prototype."')
  .replaceAll('content="/meta-image.png"', 'content="https://www.ausomeheroes.com/heroes/mariposa-share.png"')
  .replace('content="2400"', 'content="1200"')
  .replace('content="1260"', 'content="630"')
  .replace('</head>', '<meta property="og:url" content="https://www.ausomeheroes.com/heroes/sample/" />\n    <meta name="robots" content="noindex,nofollow" />\n  </head>');
await mkdir('dist/heroes/sample', { recursive: true });
await writeFile('dist/heroes/sample/index.html', cardHtml);
