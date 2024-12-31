import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Menü durumunu değiştir
  };

  const closeMenu = () => setIsOpen(false);

  return (
<header className="bg-white shadow px-4 py-2 flex justify-between items-center fixed top-0 w-full z-50">
{/* Logo ve Başlık */}
      <div className="flex items-center space-x-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/profile.jpg" alt="Logo" width={40} height={40} className="rounded-full" />
          <h1 className="text-2xl font-bold cursor-pointer">Avukat Ayşegül Civci</h1>
        </Link>
      </div>

      {/* Hamburger Menü */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="p-2 bg-blue-500 text-white rounded">
          ☰
        </button>
      </div>

      {/* Navigasyon Menü */}
      <nav
        className={`absolute md:static top-16 right-4 bg-white shadow-md rounded-md p-4 md:flex md:space-x-4 md:bg-transparent md:shadow-none md:p-0 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <Link href="/about" onClick={closeMenu} className="block py-2 px-4 text-blue-500 hover:text-blue-600 active:text-blue-700">
          Hakkımızda
        </Link>
        <Link href="/services" onClick={closeMenu} className="block py-2 px-4 text-blue-500 hover:text-blue-600 active:text-blue-700">
          Hizmetler
        </Link>
        <Link href="/contact" onClick={closeMenu} className="block py-2 px-4 text-blue-500 hover:text-blue-600 active:text-blue-700">
          İletişim
        </Link>
        <Link href="/blog" onClick={closeMenu} className="block py-2 px-4 text-blue-500 hover:text-blue-600 active:text-blue-700">
          Blog
        </Link>
        <Link href="/faq" onClick={closeMenu} className="block py-2 px-4 text-blue-500 hover:text-blue-600 active:text-blue-700">
          Sıkça Sorulan Sorular
        </Link>

      </nav>
    </header>
  );
};

export default Header;
