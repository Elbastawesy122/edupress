import { Routes, Route } from "react-router-dom";
import LandingPage from "./Componant/LandingPage/LandingPage";
import Header from "./Componant/LandingPage/Header";
import Footer from "./Componant/LandingPage/Footer";
import FetchAllArticle from "./Componant/FetchAllArticle/FetchAllArticle";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/articles" element={<FetchAllArticle />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
