import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FAQ = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>SSS - Avukat Ayşegül Civci</title>
        <meta name="description" content="Sıkça Sorulan Sorular - Hukuki süreçler ve temel bilgiler hakkında detaylı açıklamalar." />
        <meta name="keywords" content="SSS, Hukuki Sorular, Avukat, Hukuk Danışmanlığı, Ceza Hukuku, Aile Hukuku" />
        <meta name="author" content="Ayşegül Civci" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="SSS - Avukat Ayşegül Civci" />
        <meta property="og:description" content="Hukuki süreçler hakkında sıkça sorulan soruların cevapları." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aysegulcivci.com/faq" />
      </Head>

      <Header />
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-6">Sıkça Sorulan Sorular</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hukuki Süreçler Hakkında Temel Bilgilendirme</h2>
          <ul className="list-disc pl-5">
            <li><strong>Hukuki süreç nasıl başlar?</strong><br/> Hukuki süreç, bir dava dilekçesiyle ya da ilgili makamlara yapılacak bir başvuruyla başlar. Sürecin doğru bir şekilde ilerleyebilmesi için bir avukatla çalışmanız önemlidir.</li>
            <li><strong>Dava süreci nasıl işler?</strong><br/> Dava süreci, genellikle başvuru, duruşmalar ve karar aşamalarından oluşur. Her dava kendine özgü bir yapıya sahiptir ve mahkemenin işleyişine göre değişiklik gösterebilir.</li>
            <li><strong>Hukuki süreçler ne kadar sürer?</strong><br/> Davanın türüne ve mahkemelerin iş yüküne bağlı olarak süreçler farklılık gösterebilir. İlk görüşmede tahmini süre hakkında bilgi verilir.</li>
            <li><strong>Avukat desteği neden önemlidir?</strong><br/> Bir avukat, süreci doğru yönetmenizi sağlar ve haklarınızı en iyi şekilde savunur. Ayrıca, hukuki belgelerin hazırlanması ve sürecin her aşamasında rehberlik sunar.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hukuki Süreçlerin Zaman Çizelgesi</h2>
          <ul className="list-disc pl-5">
            <li><strong>İlk Görüşme ve Danışmanlık:</strong><br/> Hukuki mesele hakkında detaylı bilgi alınır. Gerekli belgeler değerlendirilir ve süreç planlanır.</li>
            <li><strong>Başvuru Aşaması:</strong><br/> Dava dilekçesi hazırlanır ve ilgili mahkemeye sunulur. Mahkeme tarafından kabul edilir ve taraflara tebligat gönderilir.</li>
            <li><strong>Duruşma Süreci:</strong><br/> Mahkeme, tarafları dinlemek ve delilleri incelemek için duruşmalar düzenler. Tanıkların dinlenmesi, belgelerin incelenmesi ve savunmalar yapılır.</li>
            <li><strong>Karar Aşaması:</strong><br/> Mahkeme, tüm delilleri değerlendirerek kararını açıklar ve taraflara bildirir.</li>
            <li><strong>Temyiz veya İtiraz Süreci:</strong><br/> Karara itiraz edilirse üst mahkeme tarafından yeniden incelenir.</li>
            <li><strong>Uygulama ve İcra Süreci:</strong><br/> Mahkeme kararı kesinleştiğinde uygulanır ve gerekli işlemler başlatılır.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Yaygın Hukuki Terimlerin Açıklaması</h2>
          <ul className="list-disc pl-5">
            <li><strong>Davalı:</strong> Hakkında dava açılan kişi ya da taraf.</li>
            <li><strong>Davacı:</strong> Bir dava açarak mahkemeye başvuran kişi ya da taraf.</li>
            <li><strong>Temyiz:</strong> Bir mahkeme kararının bir üst mahkeme tarafından yeniden incelenmesini talep etme süreci.</li>
            <li><strong>Nafaka:</strong> Boşanma ya da ayrılık sonrasında bir tarafın diğerine ya da çocuklarına maddi destek sağlaması.</li>
            <li><strong>Tebligat:</strong> Resmi bir belgenin ya da bildirimin ilgili tarafa yasal yollarla ulaştırılması.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
