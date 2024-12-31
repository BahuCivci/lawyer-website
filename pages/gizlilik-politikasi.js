import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Gizlilik ve Yasal Uyarılar | Avukat Ayşegül Civci</title>
        <meta name="description" content="Gizlilik politikamız ve yasal uyarılarımız hakkında bilgi alın." />
      </Head>
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Gizlilik ve Yasal Uyarılar</h1>
        <h2 className="text-2xl font-semibold mb-4">Genel Bilgilendirme</h2>
        <p>Bu web sitesi, yalnızca genel hukuki bilgilendirme ve Ayşegül Civci’nin hukuki hizmetleri hakkında bilgi sunmak amacıyla hazırlanmıştır. Burada yer alan bilgiler, hukuki danışmanlık niteliği taşımamaktadır. Hukuki sorunlarınız için mutlaka bir avukata başvurunuz.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Gizlilik Politikası</h2>
        <p>Web sitemizi ziyaret eden kullanıcıların kişisel bilgileri gizli tutulmakta ve üçüncü kişilerle paylaşılmamaktadır. İletişim formu ya da diğer yollarla paylaşılan bilgiler, yalnızca sizinle iletişim kurmak ve talebinize yanıt vermek amacıyla kullanılmaktadır.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Sorumluluk Reddi</h2>
        <p>Bu web sitesinde sunulan bilgiler, en güncel ve doğru bilgilere yer vermek amacıyla hazırlanmıştır. Ancak, bu bilgilerin eksiksiz ya da tamamen doğru olduğuna dair bir garanti verilmemektedir.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Telif Hakları</h2>
        <p>Bu web sitesindeki tüm içerikler (metinler, görseller, tasarımlar vb.), telif hakkı ile korunmaktadır. İzinsiz kopyalanması, paylaşılması ya da ticari amaçlarla kullanılması yasaktır.</p>
      </main>
    </>
  );
};

export default PrivacyPolicy;
