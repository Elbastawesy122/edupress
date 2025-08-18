import { Link } from "react-router-dom";
import useFiltertags from "../../Hooks/Filtertags";
import { BsFillQuestionOctagonFill } from "react-icons/bs";
import { useSearch } from "../../Hooks/UseSearch";

const AllCategories = ({ limit }: { limit?: number }) => {
  const { uniqueTags } = useFiltertags();
  const { setSearchQuery } = useSearch();

  const tagsToShow = limit
    ? uniqueTags.filter(([, count]) => count >= 4).slice(0, limit)
    : uniqueTags;

  return (
    <div className="allcategories grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
      {tagsToShow.map(([tag, count]) => (
        <Link to="/articles" onClick={() => setSearchQuery(tag)}>
          <div
            key={tag}
            className="group category-item bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer hover:shadow-lg transition-shadow duration-300"
          >
            <BsFillQuestionOctagonFill className="text-4xl text-gray-400 mb-2 mx-auto group-hover:text-[#FF782D]" />
            <h3 className="text-lg font-semibold mb-2">{tag}</h3>
            <p className="text-gray-600">{count} Articles</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllCategories;
