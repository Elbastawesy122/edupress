import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { loginUser } from "../../utils/Auth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    try {
      loginUser(emailOrUsername, password);
      alert("Login successful ✅");
      setError("");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Something went wrong");
      }
    }
  };

  return (
    <div className="login border border-[#9D9D9D] rounded-xl p-4 h-fit w-full md:w-1/2">
      <div className="boxes flex justify-start items-start flex-col">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>

        <input
          type="text"
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
          placeholder="Email or username*"
          className="border border-[#9D9D9D] rounded-xl p-3 mb-2 w-full outline-none"
        />

        <div className=" relative w-full mb-2">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password*"
            className="border border-[#9D9D9D] rounded-xl p-3 w-full outline-none"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
        </div>

        <div className="remember flex justify-center items-center gap-2 mb-2">
          <input type="checkbox" id="remember" className="cursor-pointer" />
          <label htmlFor="remember">Remember me</label>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          onClick={handleLogin}
          className="bg-[#FF782D] cursor-pointer text-white w-full px-6 py-2 my-2 rounded-full hover:bg-[#FF5722] transition-colors"
        >
          Login
        </button>

        <p className="cursor-pointer">Lost your password?</p>
      </div>
    </div>
  );
};

export default Login;
