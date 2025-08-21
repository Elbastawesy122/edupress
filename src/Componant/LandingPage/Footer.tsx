import logo from "../../assets/logeEduPress.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import useFiltertags from "../../Hooks/Filtertags";
import { Link } from "react-router-dom";
import { useSearch } from "../../Hooks/UseSearch";

const Footer = () => {
  const { uniqueTags } = useFiltertags();
  const { setSearchQuery } = useSearch();

  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="EduPress Logo" className="w-12 md:w-14" />
            <h1 className="text-2xl font-bold text-white">EduPress</h1>
          </div>
          <p className="text-sm mt-4 leading-relaxed text-gray-400">
            EduPress is your go-to platform for educational resources,
            offering diverse materials to enhance learning experiences and 
            support knowledge growth.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white border-b border-gray-600 pb-2">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2">
            <li><a href="/Articles" className="hover:text-white transition">Articles</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="/ObjFaqs" className="hover:text-white transition">FAQs</a></li>
            <li><a href="/FavoriteArticles" className="hover:text-white transition">Favorite Articles</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white border-b border-gray-600 pb-2">
            Categories
          </h2>
          <ul className="mt-4 space-y-2">
            {uniqueTags.slice(0, 4).map(([tag]) => (
              <li key={tag}>
                <Link 
                  to="/articles" 
                  onClick={() => setSearchQuery(tag)} 
                  className="hover:text-white transition"
                >
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white border-b border-gray-600 pb-2">
            Contact & Follow Us
          </h2>
          <p className="text-sm mt-4">📞 +201026288096</p>
          <p className="text-sm mt-1">✉ elbastawesy122@gmail.com </p>
          <div className="flex gap-3 mt-4">
            <a href="https://facebook.com" 
               className="bg-[#3b5998] p-2 rounded-full hover:scale-110 transition">
              <FaFacebook className="text-white text-lg" />
            </a>
            <a href="https://instagram.com" 
               className="bg-gradient-to-tr from-pink-500 to-orange-500 p-2 rounded-full hover:scale-110 transition">
              <FaInstagram className="text-white text-lg" />
            </a>
            <a href="https://linkedin.com" 
               className="bg-[#0077b5] p-2 rounded-full hover:scale-110 transition">
              <FaLinkedin className="text-white text-lg" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © 2025 EduPress. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
