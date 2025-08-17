import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { useState } from "react";
import { chunkArray } from "../../utils/chunkArray";
import PaginationSwiper from "../../Componant/FetchAllArticle/PaginationSwiper";
import FilterArticle from "./FilterArticle";
import useSearchHooks from "../../Hooks/SearchHook";
import type Article from "../../apiproject/InterfaceAPI";
import { useSearch } from "../../Hooks/UseSearch";

const FetchAllArticle = () => {
  const { filteredArticles } = useSearchHooks();
  const [handleArticles, setHandleArticles] = useState(true);
  const { searchQuery, setSearchQuery } = useSearch();

  const articleChunks = chunkArray<Article>(filteredArticles, 10);
  const filterAuthor = filteredArticles.map((article) => article.user.name);
  const uniqueAuthors = [...new Set(filterAuthor)];

  return (
    <div className="fetchAllArticle px-[10%] py-15">
      <div className="allArticls">
        <div className="titleaddress flex items-center flex-col sm:flex-row justify-between py-4">
          <h2 className="text-3xl font-semibold">All Articles</h2>
          <div className="search flex items-center bg-white rounded-lg gap-2">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              className="border-b-2 border-gray-300 px-2 mt-2 w-full focus:outline-none focus:border-[#FF782D]"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {handleArticles ? (
              <FaThList
                className="ml-2 cursor-pointer text-2xl hover:text-[#FF782D]"
                onClick={() => setHandleArticles(false)}
              />
            ) : (
              <IoGrid
                className="ml-2 cursor-pointer text-2xl hover:text-[#FF782D]"
                onClick={() => setHandleArticles(true)}
              />
            )}
          </div>
        </div>

        <div className="articls flex justify-between items-start gap-4">
          <PaginationSwiper chunks={articleChunks} isGrid={handleArticles} />
          <FilterArticle uniqueAuthors={uniqueAuthors} />
        </div>
      </div>
    </div>
  );
};

export default FetchAllArticle;
