import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import React from 'react';
import Head from 'next/head';

// Statik yolları oluştur
export const getStaticPaths = async () => {
  const dir = path.join(process.cwd(), 'posts', 'blog'); // Blog dosyalarının bulunduğu dizin
  const files = fs.readdirSync(dir);

  const paths = files
    .filter((filename) => filename.endsWith('.md')) // Sadece .md uzantılı dosyalar
    .map((filename) => ({
      params: {
        slug: filename.replace('.md', ''), // Dosya adından slug oluştur
      },
    }));

  return {
    paths,
    fallback: false, // Olmayan sluglarda 404 döner
  };
};

// Statik sayfa verilerini getir
export const getStaticProps = async ({ params: { slug } }) => {
  const filePath = path.join(process.cwd(), 'posts', 'blog', `${slug}.md`); // Dosya yolu
  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');

  const { data: frontmatter, content } = matter(markdownWithMeta); // Meta ve içerik ayır

  // Markdown'ı HTML'e dönüştür
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      frontmatter: {
        ...frontmatter,
        date: frontmatter.date ? frontmatter.date.toString() : null, // Tarih formatı
      },
      contentHtml,
      slug, // URL'deki slug bilgisi
    },
  };
};

// Blog Sayfası Bileşeni
const BlogPage = ({ frontmatter, contentHtml, slug }) => {
  return (
    <div className="prose mx-auto p-8 min-h-screen bg-gray-100">
      <Head>
        <title>{frontmatter.title || "Blog Yazısı"}</title>
        <meta name="description" content={frontmatter.description || "Blog yazısı açıklaması"} />
        <meta name="keywords" content={frontmatter.keywords || "hukuk, danışmanlık, blog"} />
        <meta name="author" content="Ayşegül Civci" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={frontmatter.title || "Blog Yazısı"} />
        <meta property="og:description" content={frontmatter.description || "Blog yazısı açıklaması"} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.aysegulcivci.com/blog/${slug}`} />
      </Head>
      <h1 className="text-3xl font-bold mb-4">{frontmatter.title || "Başlık Yok"}</h1>
      <p className="text-gray-500 mb-8">{frontmatter.date || "Tarih Yok"}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
};

export default BlogPage;
