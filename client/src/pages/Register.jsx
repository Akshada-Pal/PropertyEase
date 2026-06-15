

import { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/register", {
        name,
        email,
        password,
      });

      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      console.log("FULL ERROR:", err);
      console.log("RESPONSE:", err.response?.data);
      console.log("STATUS:", err.response?.status);

      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 px-4 relative overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute w-72 h-72 bg-black opacity-10 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-gray-400 opacity-10 rounded-full blur-3xl bottom-10 right-10"></div>

      {/* Card */}
      <div className="relative w-full max-w-md">

        <div className="bg-white/80 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-8 transition-all duration-300 hover:shadow-3xl">

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              Create Account
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              Join <span className="font-semibold text-black">PropertyEase</span> and start your journey 🚀
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-6">

            {/* Name */}
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black transition"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black transition"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black transition"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-black text-white font-semibold
                         hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]
                         transition-all duration-200"
            >
              Create Account
            </button>

          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <span
              className="text-black font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Sign in
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}