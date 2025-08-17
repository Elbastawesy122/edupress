import useFetchArticles from "../../Hooks/Filtertags";
import { useSearch } from "../../Hooks/UseSearch";

interface AuthorName {
  uniqueAuthors: string[];
}

const FilterArticle: React.FC<AuthorName> = ({ uniqueAuthors }) => {
  const { uniqueTags } = useFetchArticles();
  const { setSearchQuery, searchQuery } = useSearch();

  return (
    <div className="filterArticle w-fit">
      <div className="boxes hidden md:flex md:flex-col items-start justify-center gap-4">
        <div className="boxe1">
          <h2 className="text-2xl font-semibold">Filter Articles</h2>
          {uniqueTags.map(([tag, count]: [string, number], index: number) => {
            const tagId = `tag-${index}`;
            return (
              <div
                key={tagId}
                className="tag flex items-start justify-between mb-2 gap-2"
              >
                <div className="checkbox flex items-center justify-center">
                  <input
                    type="checkbox"
                    id={tagId}
                    name="interest"
                    value={tag}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    checked={searchQuery.toLowerCase() === tag.toLowerCase()}
                    className="mr-2 text-white border-gray-300 rounded focus:ring-[#FF782D] focus:border-[#FF782D] cursor-pointer"
                  />
                  <label htmlFor={tagId}>{tag}</label>
                </div>
                <span className="text-gray-500">({count})</span>
              </div>
            );
          })}
        </div>
        <div className="box2">
          <h2 className="text-2xl font-semibold">Authors</h2>
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
  );
};

export default FilterArticle;
