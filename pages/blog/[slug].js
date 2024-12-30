import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import React from 'react';
import Head from 'next/head';

// Statik yolları oluştur
export const getStaticPaths = async () => {
  const dir = path.join('posts', 'blog'); // Blog dizinini hedefle
  const files = fs.readdirSync(dir);

  const paths = files
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => ({
      params: {
        slug: filename.replace('.md', ''),
      },
    }));

  return {
    paths,
    fallback: false,
  };
};

// Sayfa verilerini getir
export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', 'blog', `${slug}.md`), // Doğru yolu kullan
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

// React bileşeni - Blog Sayfası
const BlogPage = ({ frontmatter, contentHtml }) => {
  return (
    <div className="prose mx-auto p-4">
      <Head>
        <title>{frontmatter.title || "Blog Yazısı"}</title>
        <meta name="description" content={frontmatter.description || "Blog yazısı açıklaması"} />
        <meta name="keywords" content={frontmatter.keywords || "hukuk, danışmanlık, blog"} />
        <meta name="author" content="Ayşegül Civci" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={frontmatter.title || "Blog Yazısı"} />
        <meta property="og:description" content={frontmatter.description || "Blog yazısı açıklaması"} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.aysegulcivci.com/blog/${frontmatter.slug}`} />
      </Head>
      <h1 className="text-3xl font-bold">{frontmatter.title || "Başlık Yok"}</h1>
      <p className="text-gray-500">{frontmatter.date || "Tarih Yok"}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
};

export default BlogPage;  
