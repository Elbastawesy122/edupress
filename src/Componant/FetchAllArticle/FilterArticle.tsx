import useFetchArticles from "../../Hooks/Filtertags";
import { useSearch } from "../../Hooks/UseSearch";

interface AuthorName {
  uniqueAuthors: string[];
  handlelist:boolean;
}

const FilterArticle: React.FC<AuthorName> = ({ uniqueAuthors , handlelist }) => {
  const { uniqueTags } = useFetchArticles();
  const { setSearchQuery, searchQuery } = useSearch();

  return (
    <div className={`filterArticle w-fit flex ${handlelist ? "flex" : "hidden"}`}>
      <div className="boxes flex flex-col items-start justify-center gap-4">
        <div className="boxe1 w-full">
          <h2 className="text-xl font-semibold mb-2">Filter Articles</h2>
          <div className="alltags grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-2">
            {uniqueTags.map(([tag, count], index) => (
              <div key={tag} className="tag flex items-center gap-1">
                <input
                  type="checkbox"
                  id={`tag-${index}`}
                  value={tag}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  checked={searchQuery.toLowerCase() === tag.toLowerCase()}
                  className="mr-2 text-white border-gray-300 rounded focus:ring-[#FF782D] focus:border-[#FF782D] cursor-pointer"
                />
                <label htmlFor={`tag-${index}`}>{tag}</label>
                <span className="text-gray-500">({count})</span>
              </div>
            ))}
          </div>
        </div>
        <div className="box2 w-full">
          <h2 className="text-xl font-semibold mb-2">Authors</h2>
          <div className="alltags grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-2">
            {uniqueAuthors.map((author: string, index: number) => {
              const authorId = `author-${index}`;
              return (
                <div key={authorId} className="author mb-2">
                  <input
                    type="checkbox"
                    id={authorId}
                    name="interest"
                    value={author}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    checked={searchQuery.toLowerCase() === author.toLowerCase()}
                    className="mr-2 text-white border-gray-300 rounded focus:ring-[#FF782D] focus:border-[#FF782D] cursor-pointer"
                  />
                  <label htmlFor={authorId}>{author}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterArticle;
