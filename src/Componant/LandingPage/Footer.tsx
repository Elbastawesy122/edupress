import logo from "../../assets/logeEduPress.png";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#f6e6e6] py-4">
      <div className="container mx-auto text-center">
        <div className="boxes px-[10%] py-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-start ">
          <div className="box1 mt-4">
            <div className="logo flex items-center gap-2">
              <img src={logo} alt="EduPress Logo" className="w-10 md:w-15" />
              <h1 className="text-xl xl:text-2xl font-bold">EduPress</h1>
            </div>
            <p className="text-sm mt-2">
              EduPress is your go-to platform for all educational resources,
              providing a wide range of materials to enhance learning
              experiences.
            </p>
          </div>
          <div className="box2 mt-4">
            <h2 className="text-lg font-bold uppercase">Quick Links</h2>
            <ul className="list-none mt-2">
              <li>
                <a href="/about" className="text-sm hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-sm hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="box3 mt-4">
            <h2 className="text-lg font-bold uppercase">Articles</h2>
            <ul className="list-none mt-2">
              <li>
                <a href="/articles/latest" className="text-sm hover:underline">
                  Latest Articles
                </a>
              </li>
              <li>
                <a href="/articles/popular" className="text-sm hover:underline">
                  Smallest Articles
                </a>
              </li>
              <li>
                <a
                  href="/articles/categories"
                  className="text-sm hover:underline"
                >
                  Article Categories
                </a>
              </li>
            </ul>
          </div>
          <div className="box4 mt-4">
            <h2 className="text-lg font-bold uppercase">Follow Us</h2>
            <p className="text-sm mt-2">tel: +201026288096</p>
            <p className="text-sm mt-2">Email: elbastawesy122@gmail.com </p>
            <ul className="list-none mt-2 flex justify-start gap-4">
              <li>
                <a
                  href="https://facebook.com"
                  className="text-sm hover:underline bg-[#3b5998] text-white p-2 rounded-lg flex items-center justify-center"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  className="text-sm hover:underline bg-[#e94d35] text-white p-2 rounded-lg flex items-center justify-center"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="text-sm hover:underline bg-[#0077b5] text-white p-2 rounded-lg flex items-center justify-center"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-sm">© 2025 EduPress. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
