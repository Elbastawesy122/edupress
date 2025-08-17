import useFiltertags from "../../Hooks/Filtertags";
import { BsFillQuestionOctagonFill } from "react-icons/bs";

const Categories = () => {
  const { uniqueTags } = useFiltertags();

  return (
    <>
      <div className="categories px-[10%] py-15 bg-[#F9F9F9]">
        <div className="titlebox flex flex-col sm:flex-row justify-between items-start gap-4 mb-10">
          <div className="namebox">
            <h2 className="text-2xl font-semibold">Top Categories</h2>
            <p className="text-[#555555]">Explore our Popular Categories</p>
          </div>
          <div className="viewall border-2 border-[#555555] px-4 py-2 rounded-full cursor-pointer hover:bg-[#555555] hover:text-white transition-colors duration-300">
            <a href="#">All categories</a>
          </div>
        </div>
        <div className="allcategories grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
          {uniqueTags
          .filter(([, count]) => count >= 4)
          .slice(0,8)
          .map(([tag, count]) => (
            <div
              key={tag}
              className="group category-item bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer hover:shadow-lg transition-shadow duration-300"
            >
              <BsFillQuestionOctagonFill className="text-4xl text-gray-400 mb-2 mx-auto group-hover:text-[#FF782D]" />
              <h3 className="text-lg font-semibold mb-2">{tag}</h3>
              <p className="text-gray-600">{count} Articles</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
