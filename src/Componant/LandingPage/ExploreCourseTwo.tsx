import vector1 from "../../assets/Vector1.png";
const ExploreCourseTwo = () => {
  return (
    <>
      <div className="exploreCourseTwo px-[10%] py-15 bg-[#F9F9F9]">
        <div className="boxes flex justify-between items-center gap-8">
          <div className="image w-1/2 hidden md:flex">
            <img src={vector1} alt="Explore Course Two" className="" />
          </div>
          <div className="titleBox w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Explore Our Courses</h2>
            <p className="text-[#555555] mb-6">
              Discover a wide range of courses designed to help you learn and
              grow.
            </p>
            <ul>
              <li className="mb-2">
                <span className="text-[#FF782D]">✔️</span> Web Development
              </li>
              <li className="mb-2">
                <span className="text-[#FF782D]">✔️</span> Data Science
              </li>
              <li className="mb-2">
                <span className="text-[#FF782D]">✔️</span> Digital Marketing
              </li>
              <li className="mb-2">
                <span className="text-[#FF782D]">✔️</span> Graphic Design
              </li>
            </ul>
            <button className="bg-[#FF782D] text-white px-6 py-2 my-4 rounded-full hover:bg-[#e66b26] transition-colors duration-300 cursor-pointer">
              View All Courses
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreCourseTwo;
