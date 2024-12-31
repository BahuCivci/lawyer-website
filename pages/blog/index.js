import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const Blog = ({ posts }) => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-4">
            <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:text-blue-700">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), 'posts', 'blog'); // Blog dosyaları buradan okunur
  const files = fs.readdirSync(postsDir);

  const posts = files.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    return {
      slug: filename.replace('.md', ''), // Dosya adından slug oluştur
      title: data.title || filename.replace('.md', ''),
    };
  });

  return {
    props: { posts }, // Sayfaya gönderilen props
  };
}

export default Blog;
