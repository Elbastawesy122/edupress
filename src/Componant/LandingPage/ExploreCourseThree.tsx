import useFetchArticles from "../../apiproject/FetchApi";
import Vector2 from "../../assets/Vector2.png";
const ExploreCourseThree = () => {
  const { articles } = useFetchArticles();
  const article = articles.find((article) => article.id === 2711753);

  return (
    <>
      <div className="exploreCourseThree px-[10%] py-15 bg-[#F9F9F9]">
        <div className="boxes flex justify-between items-center gap-8">
          {article && (
            <div className="titleBox w-full md:w-1/2">
              <p className="mb-2">by {article.user.name}</p>
              <h2 className="text-2xl font-semibold mb-4">{article.title}</h2>
              <p className="text-[#555555] mb-2">{article.description}</p>
              <button className="bg-[#FF782D] text-white px-6 py-2 my-4 rounded-full hover:bg-[#e66b26] transition-colors duration-300 cursor-pointer">
                <a
                  href={article.canonical_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </button>
            </div>
          )}
          <div className="image w-1/2 hidden md:flex">
            <img src={Vector2} alt="Explore Course Two" className=" w-3xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreCourseThree;
