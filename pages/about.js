import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>Avukat Ayşegül Civci | Hukuki Danışmanlık</title>
        <meta name="description" content="Ceza, aile, marka hukuku ve daha birçok alanda uzman avukatlık hizmetleri sunuyoruz." />
        <meta name="keywords" content="Avukat, Hukuk, Danışmanlık, Ceza Hukuku, Aile Hukuku, Eskişehir Avukat" />
        <meta name="author" content="Ayşegül Civci" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Avukat Ayşegül Civci | Hukuki Danışmanlık" />
        <meta property="og:description" content="Profesyonel avukatlık hizmetleri ile hukuki danışmanlık." />
        <meta property="og:image" content="/profile.jpg" />
        <meta property="og:url" content="https://www.aysegulcivci.com" />
        <meta property="og:type" content="website" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.aysegulcivci.com" />
      </Head>


      <main className="p-8">
        <h1 className="text-3xl font-bold">Hakkımızda</h1>
        <p>Biz, hukuki danışmanlık ve dava süreçlerinde size destek olan bir avukatlık ofisiyiz.</p>
      </main>
    </>
  );
};

export default About;
