import { CiSearch } from "react-icons/ci";
import { useSearch } from "../../Hooks/UseSearch";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <div className="group relative flex items-center w-fit">
      <CiSearch className="text-3xl text-[#FF782D] cursor-pointer border-2 border-[#FF782D] rounded-full p-1" />
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="absolute left-1/2 -translate-x-1/2 top-full mt-2
          opacity-0 group-hover:opacity-100
          translate-y-2 group-hover:translate-y-0
          transition-all duration-300
          border border-[#FF782D] rounded-full px-4 py-1
          bg-white text-sm placeholder:text-gray-400 outline-none z-30 shadow"
      />
    </div>
  );
};

export default SearchBar;
