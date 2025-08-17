import type Article from "../../apiproject/InterfaceAPI";
import ArticleCard from "./ArticleCard";

interface ArticleGridProps {
  articles: Article[];
  isGrid: boolean;
}

const ArticleGrid: React.FC<ArticleGridProps> = ({
  articles,
  isGrid,
}) => {

  return (
    <>
      <div
        className={`gap-6 ${
          isGrid
            ? "grid grid-cols-1 lg:grid-cols-2"
            : "flex flex-col"
        }`}
      >
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} isGrid={isGrid} />
        ))}
      </div>
    </>
  );
};

export default ArticleGrid;
