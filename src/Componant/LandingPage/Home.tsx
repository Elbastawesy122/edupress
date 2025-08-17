import homeimage from "../../assets/HomePage.png";
import Vector from "../../assets/Vector.png";
import bghome from "../../assets/bghome.png";

const Home = () => {
  return (
    <>
      <div className="Home relative bg-gradient-to-l from-[#D0F7EA] to-[#FFF5BE] px-[10%] h-[calc(100vh-65px)] flex justify-between items-center gap-2.5">
        <div className="welcomebox flex flex-col justify-center items-start w-full md:w-1/2 z-10">
          <h1 className="text-4xl font-semibold text-start mt-10">
            Build Skills With EduPress
          </h1>
          <p className="text-start mt-4 ">
            Explore a wide range of courses and articles to enhance your knowledge and skills. Join our community of learners today!
          </p>
          <div className="flex justify-center mt-6">
            <button className="bg-[#FF782D] cursor-pointer text-white px-6 py-2 rounded-full hover:bg-[#FF5722] transition-colors">
              Explore Now
            </button>
          </div>
        </div>
        <div className="image w-1/2 h-full z-10 md:flex hidden justify-center items-center">
          <img src={homeimage} alt="" className="h-full " />
        </div>
      </div>
      <div className="arrow absolute left-0 bottom-0">
        <img src={Vector} alt="" />
      </div>
      <div className="arrow absolute left-1/3 top-1/3">
        <img src={bghome} alt="" className="h-80" />
      </div>
    </>
  );
};

export default Home;
