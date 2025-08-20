import { useState } from "react";
import logo from "../../assets/logeEduPress.png";
import { CiSearch } from "react-icons/ci";
import { BsList } from "react-icons/bs";
import { useSearch } from "../../Hooks/UseSearch";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <header className="landing-header h-16 px-[10%] flex justify-between items-center z-20 bg-white shadow-md relative">
      <div className="logo flex items-center gap-2">
        <img src={logo} alt="EduPress Logo" className="w-10 md:w-15" />
        <h1 className="text-xl xl:text-2xl font-bold">EduPress</h1>
      </div>
      <div className="hidden lg:flex items-center gap-6 h-full">
        <ul className="flex items-center gap-4 h-full">
          <Link to="/" className="h-full">
            <li className="hover:bg-[#F5F5F5] hover:text-[#FF782D] h-full flex items-center px-3 cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/Articles" className="h-full">
            <li className="hover:bg-[#F5F5F5] hover:text-[#FF782D] h-full flex items-center px-3 cursor-pointer">
              Articles
            </li>
          </Link>
          <li className="hover:bg-[#F5F5F5] hover:text-[#FF782D] h-full flex items-center px-3 cursor-pointer">
            LearnPress Add-On
          </li>
          <li className="hover:bg-[#F5F5F5] hover:text-[#FF782D] h-full flex items-center px-3 cursor-pointer">
            Premium Theme
          </li>
        </ul>
      </div>
      <div className="search flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-2">
          <p className="cursor-pointer">Login</p>
          <p>/</p>
          <p className="cursor-pointer">Register</p>
        </div>
        <div className="group relative flex items-center w-fit">
          <CiSearch className="text-3xl text-[#FF782D] cursor-pointer border-2 border-[#FF782D] rounded-full p-1" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2
              opacity-0 group-hover:opacity-100
              translate-y-2 group-hover:translate-y-0
              transition-all duration-300
              border-2 border-[#FF782D] rounded px-3 py-1
              bg-white text-sm placeholder:text-gray-400 outline-none z-30"
          />
        </div>
        <BsList
          className="flex lg:hidden text-[#FF782D] text-3xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
      <div
        className={`absolute top-full right-0 w-2/3 bg-white shadow-md lg:hidden z-20 transition-all duration-300 transform ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-start gap-3 px-6 py-4">
          <li className="text-[#FF782D] font-medium cursor-pointer border-b-2 w-full">
            Home
          </li>
          <li className="text-[#FF782D] font-medium cursor-pointer border-b-2 w-full">
            Courses
          </li>
          <li className="text-[#FF782D] font-medium cursor-pointer border-b-2 w-full">
            LearnPress Add-On
          </li>
          <li className="text-[#FF782D] font-medium cursor-pointer border-b-2 w-full">
            Premium Theme
          </li>
          <li className="text-[#FF782D] font-medium cursor-pointer border-b-2 w-full">
            Login / Register
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
