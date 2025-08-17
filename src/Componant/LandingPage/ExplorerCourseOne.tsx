import bghome from "../../assets/bghome.png";
const ExplorerCourseOne = () => {
  return (
    <div className="explorer-course-one px-[10%] py-15 bg-[#F9F9F9]">
      <div className="boxes h-fit bg-gradient-to-r from-[#B5FFE7] to-[#FDC1C1] p-8 rounded-lg shadow-lg flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="titlebox flex-1">
          <h2 className="text-3xl font-semibold text-start">
            Explore Our Featured Course
          </h2>
          <p className="text-start my-4">
            Discover the latest trends and insights in our featured course.
          </p>
          <button className="bg-[#FF782D] cursor-pointer text-white px-6 py-2 rounded-full hover:bg-[#FF5722] transition-colors">
            Explore Now
          </button>
        </div>
        <div className="image">
          <img
            src={bghome}
            alt="Featured Course"
            className="w-64 hidden lg:flex"
          />
        </div>
      </div>
    </div>
  );
};

export default ExplorerCourseOne;
