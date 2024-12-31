import Head from 'next/head';

const PracticeAreas = () => {
  return (
    <>
      <Head>
        <title>Çalışma Alanlarımız | Avukat Ayşegül Civci</title>
        <meta name="description" content="Aile, iş, ceza, miras, marka hukuku gibi alanlarda uzmanlık hizmetleri sunuyoruz." />
      </Head>
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Çalışma Alanlarımız</h1>

        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Aile Hukuku</h2>
        <p>Boşanma, velayet, nafaka, mal paylaşımı ve aile içi anlaşmazlıklarla ilgili hukuki süreçlerde müvekkillerimize destek sağlıyoruz.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">2. İş Hukuku</h2>
        <p>İşçi ve işveren arasındaki uyuşmazlıklar, iş sözleşmeleri, kıdem ve ihbar tazminatları gibi konularda hukuki danışmanlık sunuyoruz.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">3. Miras Hukuku</h2>
        <p>Miras paylaşımı, vasiyetname hazırlanması ve miras davalarında profesyonel hukuki destek sağlıyoruz.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">4. Ceza Hukuku</h2>
        <p>Ceza davaları ve soruşturma süreçlerinde, müvekkillerimizin haklarını en etkili şekilde savunmak için hukuki destek sunuyoruz.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">5. Marka Hukuku</h2>
        <p>Marka tescili, marka haklarının korunması, ihlal davaları ve fikri mülkiyet konularında hukuki destek sağlıyoruz.</p>
      </main>
    </>
  );
};

export default PracticeAreas;
