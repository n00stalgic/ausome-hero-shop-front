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

// A real static entry point lets link crawlers receive the collection art and text,
// while the same React bundle takes over for visitors after load.
const appHtml = await readFile('dist/index.html', 'utf8');
const cardHtml = appHtml
  .replace('<title>Ausome Heroes | Community for Neurodivergent Families</title>', '<title>The Quiet Garden | Pocket Heroes | Ausome Heroes</title>')
  .replace('content="Sensory-friendly events, useful resources, and a community where neurodivergent children and their families can feel at home."', 'content="Meet the 27 fictional heroes in the Quiet Garden first edition. Every way of seeing is a superpower. Open a card and read its story."')
  .replace('property="og:title" content="Ausome Heroes"', 'property="og:title" content="Pocket Heroes | The Quiet Garden - 27 Heroes"')
  .replace('content="A place where kids can just be kids. Explore our events and community for neurodivergent families."', 'content="Meet the 27 fictional heroes in the Quiet Garden first edition. Every way of seeing is a superpower."')
  .replaceAll('content="/meta-image.png"', 'content="https://www.ausomeheroes.com/heroes/quiet-garden-share.jpg?v=2"')
  .replace('content="2400"', 'content="1200"')
  .replace('content="1260"', 'content="630"')
  .replace('</head>', '<meta property="og:image:alt" content="Pocket Heroes painted logo beside three Quiet Garden heroes; Every way of seeing is a superpower. First edition, 27 heroes." />\n    <meta name="twitter:title" content="Pocket Heroes | The Quiet Garden - 27 Heroes" />\n    <meta name="twitter:description" content="Meet the 27 fictional heroes in the Quiet Garden first edition. Every way of seeing is a superpower." />\n    <meta property="og:url" content="https://www.ausomeheroes.com/heroes/" />\n    <link rel="canonical" href="https://www.ausomeheroes.com/heroes/" />\n  </head>');
await mkdir('dist/heroes', { recursive: true });
await writeFile('dist/heroes/index.html', cardHtml);
// GitHub Pages ignores _redirects. Keep the old shared URL functional with a static redirect.
await mkdir('dist/heroes/sample', { recursive: true });
await writeFile('dist/heroes/sample/index.html', `<!doctype html><html lang="en"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Pocket Heroes has moved</title><link rel="canonical" href="https://www.ausomeheroes.com/heroes/"/><meta http-equiv="refresh" content="0;url=/heroes/"/><script>location.replace('/heroes/' + location.search + location.hash)</script></head><body><p>Pocket Heroes has moved to <a href="/heroes/">the Quiet Garden collection</a>.</p></body></html>`);
