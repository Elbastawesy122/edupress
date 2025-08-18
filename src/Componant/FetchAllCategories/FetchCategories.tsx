import { useSearch } from "../../Hooks/UseSearch";
import AllCategories from "./AllCategories";

const FetchCategories = () => {
    const {searchQuery , setSearchQuery} = useSearch();
  return (
    <>
      <div className="allcategories px-[10%] py-15">
        <div className="titleaddress flex items-center flex-col sm:flex-row justify-between p-4 mb-4">
          <h2 className="text-3xl font-semibold">All Categories</h2>
          <div className="search flex items-center bg-white gap-2">
            <input
              type="text"
              placeholder="Search Categories..."
              value={searchQuery}
              className="border-b-2 border-gray-300 px-2 mt-2 w-full focus:outline-none focus:border-[#FF782D]"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <AllCategories />
      </div>
    </>
  );
};

export default FetchCategories;
