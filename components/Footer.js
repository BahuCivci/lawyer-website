const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p>&copy; 2024 Ayşegül Civci. Tüm hakları saklıdır.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="/gizlilik-politikasi" className="hover:underline">
          Gizlilik Politikası
        </a>
        <a href="/calisma-alanlari" className="hover:underline">
          Çalışma Alanları
        </a>
      </div>
    </footer>
  );
};

export default Footer;
