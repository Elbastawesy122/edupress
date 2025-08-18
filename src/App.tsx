import { Routes, Route } from "react-router-dom";
import LandingPage from "./Componant/LandingPage/LandingPage";
import Header from "./Componant/LandingPage/Header";
import Footer from "./Componant/LandingPage/Footer";
import FetchAllArticle from "./Componant/FetchAllArticle/FetchAllArticle";
import FetchCategories from "./Componant/FetchAllCategories/FetchCategories";
import Contact from "./Componant/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/articles" element={<FetchAllArticle />} />
        <Route path="/AllCategories" element={<FetchCategories />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
