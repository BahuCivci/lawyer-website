import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>Hakkımızda | Avukat Ayşegül Civci</title>
        <meta name="description" content="Hakkımızda bölümü ile Avukat Ayşegül Civci hakkında bilgi edinin." />
        <meta name="keywords" content="Avukat, Hukuk, Danışmanlık, Ceza Hukuku, Aile Hukuku, Eskişehir Avukat" />
        <meta name="author" content="Ayşegül Civci" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Hakkımızda | Avukat Ayşegül Civci" />
        <meta property="og:description" content="Avukat Ayşegül Civci'nin uzmanlık alanlarını ve değerlerini öğrenin." />
        <meta property="og:image" content="/profile.jpg" />
        <meta property="og:url" content="https://www.aysegulcivci.com/about" />
        <meta property="og:type" content="website" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.aysegulcivci.com/about" />
      </Head>

      <main className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-6">Hakkımızda</h1>
        <p className="mb-4">
          Avukat Ayşegül Civci, 2019 yılında Marmara Üniversitesi Hukuk Fakültesi&aposnden mezun olmuş
          ve şu anda Osmangazi Üniversitesi Hukuk Fakültesi’nde yüksek lisans eğitimine devam etmektedir. Lisans ve yüksek lisans eğitimi boyunca ceza hukuku, aile hukuku, marka hukuku
          ve bilişim hukuku alanlarında uzmanlaşmaya odaklanmıştır.
        </p>

        <h2 className="text-3xl font-semibold mb-4">Değerlerimiz</h2>
        <ul className="list-disc pl-5 mb-4">
          <li><strong>Güven:</strong> Müvekkillerimizle karşılıklı güven üzerine kurulu bir iş birliği geliştiririz.</li>
          <li><strong>Şeffaflık:</strong> Hukuki süreçlerin her aşamasında açık ve anlaşılır bir iletişim sağlarız.</li>
          <li><strong>Etik İlkeler:</strong> Mesleki etik kurallar çerçevesinde, dürüstlük ve adalet temelinde hizmet sunarız.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4">Misyonumuz</h2>
        <p>
          Amacımız, müvekkillerimize hukukun karmaşık dünyasında net, anlaşılır ve etkili çözümler sunmaktır. Her bir müvekkilin haklarını savunurken, onların ihtiyaçlarına uygun özel bir
          yaklaşım geliştirmeyi ilke ediniyoruz.
        </p>
      </main>
    </>
  );
};

export default About;
