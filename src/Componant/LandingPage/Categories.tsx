import AllCategories from "../FetchAllCategories/AllCategories";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <div className="categories px-[10%] py-15 bg-[#F9F9F9]">
        <div className="titlebox flex flex-col sm:flex-row justify-between items-start gap-4 mb-10">
          <div className="namebox">
            <h2 className="text-2xl font-semibold">Top Categories</h2>
            <p className="text-[#555555]">Explore our Popular Categories</p>
          </div>
          <div className="viewall border-2 border-[#555555] px-4 py-2 rounded-full cursor-pointer hover:bg-[#555555] hover:text-white transition-colors duration-300">
            <Link to='/AllCategories'>
            <a href="#">All categories</a>
            </Link>
          </div>
        </div>
        <AllCategories limit={8} />
      </div>
    </>
  );
};

export default Categories;
