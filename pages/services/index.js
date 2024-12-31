import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const Services = ({ services }) => {

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      {/* Başlık */}
      <h1 className="text-3xl font-bold mb-6">Hizmetler</h1>


      {/* Hizmet Listesi */}
      <ul className="space-y-4">
        {services.map((service) => (
          <li key={service.slug}>
            <Link href={`/services/${service.slug}`} className="text-blue-500 hover:text-blue-700 underline">
              {service.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Sunucu tarafında çalışacak kısım
export async function getStaticProps() {
  // 'posts/services' dizinine git
  const servicesDir = path.join(process.cwd(), 'posts', 'services'); // Dosya yolu
  const files = fs.readdirSync(servicesDir); // Dosyaları oku

  const services = files.map((filename) => {
    const filePath = path.join(servicesDir, filename); // Dosya yolu
    const fileContent = fs.readFileSync(filePath, 'utf-8'); // İçeriği oku
    const { data } = matter(fileContent); // Markdown'dan başlıkları al

    return {
      slug: filename.replace('.md', ''), // Dosya ismini slug olarak ayarla
      title: data.title || filename.replace('.md', ''), // Başlık
    };
  });

  return {
    props: { services }, // Sayfaya props olarak gönder
  };
}

export default Services;
