// useSearchHooks.ts
import useFetchArticles from "../apiproject/FetchApi";
import type Article from "../apiproject/InterfaceAPI";
import { useSearch } from "../Hooks/UseSearch";

const useSearchHooks = () => {
  const { articles } = useFetchArticles() as { articles: Article[] };
  const { searchQuery } = useSearch();

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.tag_list.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return { filteredArticles };
};

export default useSearchHooks;
