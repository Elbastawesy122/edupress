import { Link } from "react-router-dom";
import {
  MdArticle,
  MdQuestionAnswer,
  MdContactMail,
  MdFavorite,
} from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { logoutUser, type User } from "../../utils/Auth";

interface MobileMenuProps {
  isMenuOpen: boolean;
  user: User | null;
  setUser: (user: User | null) => void;
}

const MobileMenu = ({ isMenuOpen, user, setUser }: MobileMenuProps) => {
  return (
    <div
      className={`absolute top-full right-4 w-[80%] bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl lg:hidden transition-all duration-500 ${
        isMenuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-5 pointer-events-none"
      }`}
    >
      <ul className="flex flex-col gap-4 px-6 py-6">
        <Link to="/">
          <li className="flex items-center gap-3 py-3 px-4 hover:bg-[#FF782D]/10 hover:text-[#FF782D]">
            <AiFillHome /> Home
          </li>
        </Link>
        <Link to="/Articles">
          <li className="flex items-center gap-3 py-3 px-4 hover:bg-[#FF782D]/10 hover:text-[#FF782D]">
            <MdArticle /> Articles
          </li>
        </Link>
        <Link to="/ObjFaqs">
          <li className="flex items-center gap-3 py-3 px-4 hover:bg-[#FF782D]/10 hover:text-[#FF782D]">
            <MdQuestionAnswer /> Faqs
          </li>
        </Link>
        <Link to="/contact">
          <li className="flex items-center gap-3 py-3 px-4 hover:bg-[#FF782D]/10 hover:text-[#FF782D]">
            <MdContactMail /> Contact Us
          </li>
        </Link>
        <Link to="/favorites">
          <li className="flex items-center gap-3 py-3 px-4 hover:bg-[#FF782D]/10 hover:text-[#FF782D]">
            <MdFavorite /> Favorite Articles
          </li>
        </Link>

        {user ? (
          <li className="flex items-center gap-3 py-3 px-4 text-gray-600 font-medium">
            <span className="hover:text-[#FF782D]">{user.username}</span>
            <button
              onClick={() => {
                logoutUser();
                setUser(null);
              }}
              className="ml-2 text-sm text-red-500 hover:underline"
            >
              Logout
            </button>
          </li>
        ) : (
          <Link to="/Registration">
            <li className="flex items-center gap-3 py-3 px-4 hover:bg-[#FF782D]/10 hover:text-[#FF782D]">
              <FiLogIn /> Login / Register
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default MobileMenu;
