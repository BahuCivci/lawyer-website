import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';


export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map(filename => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter
    };
  });

  return {
    props: {
      posts
    }
  };
}

export default function Blog({ posts }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <Head>
        <title>Blog | Ayşegül Civci</title>
        <meta name="description" content="Hukuk ile ilgili en son makaleler, güncellemeler ve bilgilendirici içerikler." />
      </Head>
      <h1 className="text-2xl font-bold">Blog</h1>
      <div className="mt-4">
        {posts.map(({ slug, frontmatter }) => (
          <div key={slug} className="mb-4">
            <h3 className="text-lg font-semibold">
              <Link href={`/blog/${slug}`}>{frontmatter.title}</Link>
            </h3>
            <p className="text-gray-600">{frontmatter.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}