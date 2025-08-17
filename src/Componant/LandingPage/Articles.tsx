import useSearchHooks from "../../Hooks/SearchHook";

const Articles = () => {
  const { filteredArticles } = useSearchHooks();

  const filterArticles = filteredArticles.filter(
    (article) => new Date(article.published_at) > new Date("2025-07-25")
  );

  return (
    <>
      <div className="articles px-[10%] py-15 bg-[#F9F9F9]">
        <div className="titlebox flex flex-col sm:flex-row justify-between items-start gap-4 mb-10">
          <div className="namebox">
            <h2 className="text-2xl font-semibold">Latest Articles</h2>
            <p className="text-[#555555]">
              Stay updated with our latest articles
            </p>
          </div>
          <div className="viewall border-2 border-[#555555] px-4 py-2 rounded-full cursor-pointer hover:bg-[#555555] hover:text-white transition-colors duration-300">
            <a href="#">View All Articles</a>
          </div>
        </div>
        <div className="latestArticles">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterArticles.slice(0,3).map((article) => (
              <div
                key={article.id}
                className="article-card bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={article.social_image}
                  alt="Article Thumbnail"
                  className="w-full object-cover rounded mb-4"
                />
                <p>by {article.user.name}</p>
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600">
                  {article.description ||
                    "Short description of the article goes here."}
                </p>
                <a
                  href={article.canonical_url}
                  className="text-[#FF782D] mt-2 inline-block"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
