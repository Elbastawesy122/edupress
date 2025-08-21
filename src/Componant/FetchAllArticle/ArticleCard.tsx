import type Article from "../../apiproject/InterfaceAPI";
import { MdFavorite , MdFavoriteBorder } from "react-icons/md";
import { useFavorites } from "../../Hooks/UseFavorite";

interface ArticleCardProps {
  article: Article;
  isGrid: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, isGrid }) => {
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.some((fav) => fav.id === article.id);

  return (
    <div
      className={`article-card bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full
        ${isGrid ? "items-center" : "items-start"}
        ${isGrid ? "" : "flex flex-col lg:flex-row lg:justify-between"}`}
    >
      <img
        src={article.social_image}
        alt="Article Thumbnail"
        className={`${isGrid ? "w-full" : "w-fit lg:w-1/3"}`}
      />
      <div className="details flex items-start flex-col m-3">
        <p>by {article.user.name}</p>
        <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
        <p className="text-gray-600">{article.description || "No description available"}</p>
        <div className="details flex justify-between items-end w-full">
          <a
            href={article.canonical_url}
            className="text-[#FF782D] mt-2 inline-block"
          >
            Read More
          </a>

          {isFavorite ? (
            <MdFavorite
              size={25}
              className="cursor-pointer text-red-600"
              onClick={() => toggleFavorite(article)}
            />
          ) : (
            <MdFavoriteBorder
              size={25}
              className="cursor-pointer"
              onClick={() => toggleFavorite(article)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
