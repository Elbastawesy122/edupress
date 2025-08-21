import type Article from "../../apiproject/InterfaceAPI";
import { useFavorites } from "../../Hooks/UseFavorite";
import { FiTrash2 } from "react-icons/fi";

interface FavoriteCardProps {
  article: Article;
}

const FavoriteCard: React.FC<FavoriteCardProps> = ({ article }) => {
  const { toggleFavorite } = useFavorites();

  return (
    <div
      className={`article-card bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full`}
    >
      <img src={article.social_image} alt="Article Thumbnail" />
      <div className="details flex items-start flex-col m-3">
        <p>by {article.user.name}</p>
        <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
        <p className="text-gray-600">
          {article.description || "Short description of the article goes here."}
        </p>
        <div className="details flex justify-between items-end w-full">
          <a
            href={article.canonical_url}
            className="text-[#FF782D] mt-2 inline-block"
          >
            Read More
          </a>
          <button
            onClick={() => toggleFavorite(article)}
            className="text-red-500 hover:text-red-700 transition cursor-pointer"
            title="Remove from Favorites"
          >
            <FiTrash2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
