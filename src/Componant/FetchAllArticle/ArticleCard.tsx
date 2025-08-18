import type Article from "../../apiproject/InterfaceAPI";

interface ArticleCardProps {
  article: Article;
  isGrid: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, isGrid }) => {
  return (
    <div
      className={`article-card bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300
    w-full
    ${isGrid ? "items-center" : "items-start"}
    ${isGrid ? "" : "flex flex-col lg:flex-row lg:justify-between"}`}
    >
      <img
        src={article.social_image}
        alt="Article Thumbnail"
        className={`${
          isGrid
            ? "w-full" // في حالة الجريد ياخد العرض كامل
            : "w-fit lg:w-1/3" // لو مش جريد: في الشاشات الصغيرة ياخد العرض كامل، وفي الكبيرة 1/3
        }`}
      />
      <div className="details flex items-start flex-col m-3">
        <p>by {article.user.name}</p>
        <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
        <p className="text-gray-600">
          {article.description || "Short description of the article goes here."}
        </p>
        <a
          href={article.canonical_url}
          className="text-[#FF782D] mt-2 inline-block"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
