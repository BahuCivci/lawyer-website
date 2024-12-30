const BASE_URL = 'https://www.aysegulcivci.com';

export default function handler(req, res) {
  const staticPages = [
    '/about',
    '/services',
    '/contact',
    '/blog',
  ];

  const urls = staticPages.map((page) => {
    return `<url><loc>${BASE_URL}${page}</loc></url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>${BASE_URL}/</loc></url>
    ${urls.join('')}
  </urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
}
