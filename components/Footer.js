import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p>&copy; 2024 Ayşegül Civci. Tüm hakları saklıdır.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <Link href="/gizlilik-politikasi" legacyBehavior>
          <a>Gizlilik Politikası</a>
        </Link>
        <Link href="/calisma-alanlari" legacyBehavior>
          <a>Çalışma Alanları</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
