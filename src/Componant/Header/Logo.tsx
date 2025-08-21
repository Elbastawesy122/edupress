import logo from "../../assets/logeEduPress.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="EduPress Logo" className="w-10" />
      <h1 className="text-xl xl:text-2xl font-bold text-[#FF782D]">
        EduPress
      </h1>
    </div>
  );
};

export default Logo;
