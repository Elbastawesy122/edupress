const Communication = () => {
  return (
    <>
      <div className="communication py-15">
        <h2 className="text-3xl font-semibold mb-4">Contact us</h2>
        <p className="text-[#555555] mb-4">
          Your email address will not be published. Required fields are marked *
        </p>
        <div className="inputcontact flex justify-center items-center flex-col gap-4 mb-4">
          <div className="mydata flex justify-between items-center gap-4 w-full">
            <input
              type="text"
              name="Name"
              id=""
              placeholder="Name*"
              className="border border-[#555555] p-2 rounded w-1/2"
            />
            <input
              type="email"
              name="Email"
              id=""
              placeholder="Email*"
              className="border border-[#555555] p-2 rounded w-1/2"
            />
          </div>
          <textarea
            name="Comment"
            id=""
            placeholder="Comment"
            className="border border-[#555555] p-2 rounded w-full h-36 resize-none"
          ></textarea>
        </div>{" "}
        <div className="author mb-4">
          <input
            type="checkbox"
            name="interest"
            className="mr-2 text-white border-gray-300 rounded focus:ring-[#FF782D] focus:border-[#FF782D] cursor-pointer"
          />
          <label className="text-[#555555]">
            Save my name, email in this brower for the next time I comment
          </label>
        </div>
        <button className="bg-[#FF782D] cursor-pointer text-white px-6 py-2 rounded-full hover:bg-[#FF5722] transition-colors">
          Posts comment
        </button>
      </div>
    </>
  );
};

export default Communication;
