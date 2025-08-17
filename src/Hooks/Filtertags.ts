import useFetchArticles from "../apiproject/FetchApi";
const useFiltertags = () => {
  const { articles } = useFetchArticles();

  const allTags = articles.flatMap((article) => article.tag_list);

  const tagCounts: Record<string, number> = {};

  allTags.forEach((tag) => {
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
  });

  const uniqueTags = Object.entries(tagCounts);
  return { uniqueTags };
};

export default useFiltertags;
