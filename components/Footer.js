const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p>&copy; 2024 Ayşegül Civci. Tüm hakları saklıdır.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Facebook
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Twitter
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
