import Login from "./Login";
import Register from "./Register";

const Registration = () => {
  return (
    <>
      <div className="registration px-[10%] py-15 flex justify-center items-stretch flex-col md:flex-row gap-6">
        <Login />
        <div className="flex items-center w-full md:w-fit">
          <p className="text-gray-500 font-semibold text-xl text-center w-full">OR</p>
        </div>
        <Register />
      </div>
    </>
  );
};

export default Registration;
