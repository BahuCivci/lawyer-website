import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const BASE_URL = 'https://www.aysegulcivci.com';
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const urls = filenames.map(filename => {
    const slug = filename.replace('.md', '');
    return `${BASE_URL}/blog/${slug}`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${BASE_URL}/</loc>
    </url>
    <url>
      <loc>${BASE_URL}/about</loc>
    </url>
    <url>
      <loc>${BASE_URL}/services</loc>
    </url>
    <url>
      <loc>${BASE_URL}/contact</loc>
    </url>
    ${urls.map(url => `<url><loc>${url}</loc></url>`).join('')}
  </urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
}

