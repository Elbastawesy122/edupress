import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="hidden lg:flex items-center gap-6 h-full">
      <ul className="flex items-center gap-6 h-full text-gray-700 font-medium">
        <Link to="/"><li className="hover:text-[#FF782D] transition">Home</li></Link>
        <Link to="/Articles"><li className="hover:text-[#FF782D] transition">Articles</li></Link>
        <Link to="/ObjFaqs"><li className="hover:text-[#FF782D] transition">Faqs</li></Link>
        <Link to="/contact"><li className="hover:text-[#FF782D] transition">Contact Us</li></Link>
        <Link to="/favorites"><li className="hover:text-[#FF782D] transition">Favorite Articles</li></Link>
      </ul>
    </nav>
  );
};

export default NavLinks;
