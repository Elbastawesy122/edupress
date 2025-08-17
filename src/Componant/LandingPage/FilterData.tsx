import useFetchArticles from "../../apiproject/FetchApi";

const FilterData = () => {
  const { articles } = useFetchArticles();

  const alluser = articles.flatMap((article) => article.user.name);
  const fillteruser = [...new Set(alluser)];

  const allTags = articles.flatMap((article) => article.tag_list);
  const filltertags = [...new Set(allTags)];

  const allcourses = articles.flatMap((article) => article.id);
  const filltercourses = [...new Set(allcourses)];

  return (
    <>
      <div className="filterData px-[10%] py-15 bg-[#F9F9F9]">
        <div className="boxes grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          <div className="box bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-3xl font-semibold mb-2 text-[#FF782D]">
              {fillteruser.length}+
            </h3>
            <p className="mb-2 text-xl">Author</p>
          </div>
          <div className="box bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-3xl font-semibold mb-2 text-[#FF782D]">
              {filltertags.length}+
            </h3>
            <p className="mb-2 text-xl">Category</p>
          </div>
          <div className="box bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-3xl font-semibold mb-2 text-[#FF782D]">100+</h3>
            <p className="mb-2 text-xl">Satisfaction rate</p>
          </div>
          <div className="box bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-3xl font-semibold mb-2 text-[#FF782D]">
              {filltercourses.length}
            </h3>
            <p className="mb-2 text-xl">Total Courses</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterData;
