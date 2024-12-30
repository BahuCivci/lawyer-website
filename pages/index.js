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
      </main>
      <Footer />
    </div>
    
  );
};

export default Home;
