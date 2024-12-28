import Head from 'next/head';
import Link from 'next/link';
// import Image from 'next/image';
import React from 'react';


const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Head>
        <title>Avukat Ayşegül Civci | Hukuki Danışmanlık ve Çözümler</title>
        <meta name="description" content="Profesyonel avukatlık hizmetleri. Ceza hukuku, aile hukuku, marka hukuku ve daha fazlası." />
        <meta name="keywords" content="Avukat, Hukuki Danışmanlık, Ceza Hukuku, Aile Hukuku, Miras Hukuku, Eskişehir Avukat" />
        <meta name="robots" content="index, follow" />
      </Head>

      <header className="bg-white shadow p-4">
        <div className="flex items-center space-x-4">
          {/* <Image src="/Users/bahu/avukat-sitesi/public/profile.jpg" alt="Avukat Ayşegül Civci" width={50} height={50} className="rounded-full" /> */}
          <div>
            <h1 className="text-2xl font-bold">Ayşegül Civci</h1>
            <p className="text-gray-600">Profesyonel Hukuki Danışmanlık</p>
          </div>
        </div>

        <nav className="mt-4">
          <Link href="/about" className="text-blue-500 hover:underline mx-2">Hakkımızda</Link>
          <Link href="/services" className="text-blue-500 hover:underline mx-2">Hizmetler</Link>
          <Link href="/contact" className="text-blue-500 hover:underline mx-2">İletişim</Link>
          <Link href="/blog" className="text-blue-500 hover:underline mx-2">Blog</Link>
        </nav>
      </header>

      <main className="p-8">
        <h2 className="text-xl font-semibold">Hoş Geldiniz</h2>
        <p className="mt-4 text-gray-700">Hukukun karmaşık dünyasında güvenilir bir rehber.</p>
      </main>

      <footer className="bg-white shadow p-4 text-center text-gray-600">
        <p>&copy; 2024 Ayşegül Civci. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
};

export default Home;
