import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import React from 'react';

// Statik yolları oluştur
export const getStaticPaths = async () => {
  const dir = path.join('posts', 'services'); // Services dizinini hedefle
  const files = fs.readdirSync(dir);

  const paths = files
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => ({
      params: {
        serviceSlug: filename.replace('.md', ''),
      },
    }));

  return {
    paths,
    fallback: false,
  };
};

// Sayfa verilerini getir
export const getStaticProps = async ({ params: { serviceSlug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', 'services', `${serviceSlug}.md`), // Doğru yolu kullan
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  // Markdown içeriğini HTML'e dönüştür
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      frontmatter: {
        ...frontmatter,
        date: frontmatter.date ? frontmatter.date.toString() : null,
      },
      contentHtml,
    },
  };
};

// React bileşeni - Services Sayfası
const ServicePage = ({ frontmatter, contentHtml }) => {
  return (
    <div className="prose mx-auto p-4">
      <h1 className="text-3xl font-bold">{frontmatter.title || "Başlık Yok"}</h1>
      <p className="text-gray-500">{frontmatter.date || "Tarih Yok"}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
};

export default ServicePage;
