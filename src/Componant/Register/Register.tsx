import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { registerUser } from "../../utils/Auth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!email || !username || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      registerUser({ email, username, password });
      alert("Registered successfully ✅");
      setEmail("");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
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
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <input
          type="email"
          name="email"
          id="RegisterEmail"
          autoComplete="email"
          placeholder="Email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-[#9D9D9D] rounded-xl p-3 mb-2 w-full outline-none"
        />
        <input
          type="text"
          name="username"
          id="RegisterUsername"
          autoComplete="username"
          placeholder="Username*"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-[#9D9D9D] rounded-xl p-3 mb-2 w-full outline-none"
        />
        <div className="relative w-full mb-2">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="RegisterPassword"
            autoComplete="new-password"
            placeholder="Password*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-[#9D9D9D] rounded-xl p-3 w-full outline-none pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
          >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
        </div>
        <div className="relative w-full mb-2">
          <input
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            id="RegisterConfirmPassword"
            autoComplete="new-password"
            placeholder="Confirm Password*"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border border-[#9D9D9D] rounded-xl p-3 w-full outline-none pr-10"
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
          >
            {showConfirm ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
        </div>
        <button
          onClick={handleRegister}
          className="bg-[#FF782D] cursor-pointer text-white w-full px-6 py-2 my-2 rounded-full hover:bg-[#FF5722] transition-colors"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
