import { useNavigate } from "react-router-dom";

export default function Layout({ children }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-100 via-white to-gray-200">

      {/* SIDEBAR */}
      <div className="w-64 bg-black text-white flex flex-col p-6">

        <h1 className="text-2xl font-bold mb-10">
          PropertyEase
        </h1>

        <button onClick={() => navigate("/dashboard")} className="py-2 text-left hover:bg-gray-800 px-3 rounded">
          📊 Dashboard
        </button>

        <button onClick={() => navigate("/properties")} className="py-2 text-left hover:bg-gray-800 px-3 rounded mt-2">
          🏡 Properties
        </button>

        <button onClick={() => navigate("/add-property")} className="py-2 text-left hover:bg-gray-800 px-3 rounded mt-2">
          ➕ Add Property
        </button>

        <button onClick={() => navigate("/profile")} className="py-2 text-left hover:bg-gray-800 px-3 rounded mt-2">
          👤 Profile
        </button>

        <button
          onClick={logout}
          className="mt-auto bg-white text-black py-2 rounded font-semibold hover:bg-gray-200"
        >
          Logout
        </button>

      </div>

      {/* MAIN */}
      <div className="flex-1 p-8">
        {children}
      </div>

    </div>
  );
}











