

import { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/login", {
        email,
        password,
      });

      // 🔐 Safe data extraction
      const token = res?.data?.token;
      const user = res?.data?.user;

      if (!token || !user) {
        alert("Invalid server response");
        return;
      }

      // ✅ Save auth data
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("role", user?.role || "user");

      alert("Login successful! 🎉");

      // 🚀 Redirect to dashboard
      navigate("/dashboard");

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT PANEL */}
      <div className="hidden md:flex w-1/2 bg-black text-white items-center justify-center relative overflow-hidden">
        <div className="absolute w-96 h-96 bg-white opacity-10 rounded-full blur-3xl top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-white opacity-10 rounded-full blur-3xl bottom-10 right-10"></div>

        <div className="text-center z-10 px-10">
          <h1 className="text-4xl font-bold mb-4">PropertyEase</h1>
          <p className="text-gray-300 text-lg">
            Manage, track and grow your property listings with ease.
          </p>
          <div className="mt-8 text-sm text-gray-400">
            Secure • Fast • Modern
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 px-6">
        <div className="w-full max-w-md">

          <div className="bg-white border border-gray-200 shadow-2xl rounded-2xl p-10">

            {/* HEADER */}
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Welcome Back
              </h2>
              <p className="text-gray-500 mt-2 text-sm">
                Sign in to continue to PropertyEase
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleLogin} className="space-y-6">

              {/* EMAIL */}
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="text-sm text-gray-600">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-xl font-semibold
                hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]
                transition-all duration-200"
              >
                Sign In
              </button>

            </form>

            {/* FOOTER */}
            <p className="text-center text-sm text-gray-500 mt-6">
              Don’t have an account?{" "}
              <span
                className="text-black font-semibold cursor-pointer hover:underline"
                onClick={() => navigate("/register")}
              >
                Create account
              </span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}