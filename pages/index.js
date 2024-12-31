import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">Hoş Geldiniz</h1>
        <p className="text-lg text-gray-600 mb-6">
          Hukukun karmaşık dünyasında güvenilir bir rehber.
        </p>
        <Link href="/contact">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Bize Ulaşın
          </button>
        </Link>
        {/* İletişim Bilgileri */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-2">İletişim</h2>
          <p><strong>Telefon:</strong> 05526854438</p>
          <p><strong>E-Posta:</strong> av.aysegulcivci@gmail.com</p>
          <p><strong>Adres:</strong> Alanönü Mah. Hicri Sezen Cad. Karaca Plaza No:14 K:1 D:3 Odunpazarı/ESKİŞEHİR</p>
        </div>
        {/* Google Maps Embed */}
        <div className="mt-8 w-full max-w-lg h-64">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?q=39.7653077,30.5311164&t=&z=18&ie=UTF8&iwloc=B&output=embed"
            allowFullScreen
          ></iframe>
        </div>
        {/* Haritayı Google Maps'te Aç */}
        <div className="mt-4">
          <a
            href="https://www.google.com/maps/place/22+Medya+Ajans/@39.7656145,30.5309625,18.09z/data=!4m6!3m5!1s0x14cc3d59f9b576a3:0xd5f33592fe4147ba!8m2!3d39.7653077!4d30.5311164!16s%2Fg%2F11wmy57fz9?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Haritayı Google Maps'te Görüntüle
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
