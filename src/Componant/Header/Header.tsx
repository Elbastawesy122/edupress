import { useState, useEffect } from "react";
import { BsList } from "react-icons/bs";
import { getCurrentUser, logoutUser } from "../../utils/Auth";
import type { User } from "../../utils/Auth";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) setUser(currentUser);
  }, []);

  return (
    <header className="h-16 px-[10%] flex justify-between items-center bg-white shadow-md relative z-30">
      <Logo />
      <NavLinks />

      <div className="flex items-center gap-4">
        {user ? (
          <div className="hidden lg:flex items-center gap-2 text-gray-600 font-medium">
            <p className="hover:text-[#FF782D] transition">{user.username}</p>
            <button
              onClick={() => {
                logoutUser();
                setUser(null);
              }}
              className="text-sm text-red-500 hover:underline ml-2"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/Registration"
            className="hidden lg:flex items-center gap-2 text-gray-600 hover:text-[#FF782D] font-medium transition"
          >
            <p>Login</p>
            <span>/</span>
            <p>Register</p>
          </Link>
        )}

        <SearchBar />
        <BsList
          className="flex lg:hidden text-[#FF782D] text-3xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      <MobileMenu isMenuOpen={isMenuOpen} user={user} setUser={setUser} />
    </header>
  );
};

export default Header;
