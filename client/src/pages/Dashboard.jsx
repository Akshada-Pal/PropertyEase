
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const role = localStorage.getItem("role"); // owner / tenant

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          "https://propertyease-wgli.onrender.com/api/properties",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setProperties(res.data);
      } catch (err) {
        setError("Failed to load dashboard");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>

    

      {/* HEADER */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold">
          {role === "owner" ? "Owner Dashboard 🏠" : "Tenant Dashboard 🏡"}
        </h2>
        <p className="text-gray-500 mt-2">
          Manage everything in one place
        </p>
      </div>

      {/* ERROR */}
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* ================= PROFILE CARD ================= */}
      <div className="bg-white p-6 rounded-2xl shadow mb-6">
        <h3 className="font-bold text-lg">👤 Profile</h3>
        <p className="text-gray-600 mt-1">
          Role: <b>{role}</b>
        </p>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Properties</p>
          <h3 className="text-3xl font-bold">
            {loading ? "..." : properties.length}
          </h3>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Saved Properties</p>
          <h3 className="text-3xl font-bold">0</h3>
        </div>

        <div className="bg-gradient-to-r from-black to-gray-700 text-white p-6 rounded-2xl shadow">
          <p className="text-gray-300">Growth</p>
          <h3 className="text-3xl font-bold">+18%</h3>
        </div>

      </div>

      {/* ================= QUICK ACTIONS ================= */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

        <button
          onClick={() => navigate("/properties")}
          className="bg-blue-600 text-white p-6 rounded-2xl shadow hover:scale-105 transition"
        >
          🔍 Browse Properties
        </button>

        <button
          onClick={() => navigate("/add-property")}
          className="bg-black text-white p-6 rounded-2xl shadow hover:scale-105 transition"
        >
          ➕ Add Property
        </button>

        <button className="bg-purple-600 text-white p-6 rounded-2xl shadow hover:scale-105 transition">
          📩 Rental Requests
        </button>

      </div>

      {/* ================= MODULES GRID ================= */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* SAVED PROPERTIES */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="font-bold">❤️ Saved Properties</h3>
          <p className="text-gray-500 text-sm mt-1">
            Your bookmarked homes
          </p>
          <button className="mt-4 text-blue-600">
            View Saved →
          </button>
        </div>

        {/* RENTAL REQUESTS */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="font-bold">📩 Rental Requests</h3>
          <p className="text-gray-500 text-sm mt-1">
            Approve or reject tenants
          </p>
          <button className="mt-4 text-blue-600">
            Manage Requests →
          </button>
        </div>

        {/* PAYMENTS */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="font-bold">💳 Payments</h3>
          <p className="text-gray-500 text-sm mt-1">
            Track rent payments
          </p>
          <button className="mt-4 text-blue-600">
            View Payments →
          </button>
        </div>

        {/* CHAT */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="font-bold">💬 Chat System</h3>
          <p className="text-gray-500 text-sm mt-1">
            Talk with owners / tenants
          </p>
          <button className="mt-4 text-blue-600">
            Open Chat →
          </button>
        </div>

        {/* ANALYTICS */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="font-bold">📊 Analytics</h3>
          <p className="text-gray-500 text-sm mt-1">
            Performance insights
          </p>
          <button className="mt-4 text-blue-600">
            View Charts →
          </button>
        </div>

        {/* NOTIFICATIONS */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="font-bold">🔔 Notifications</h3>
          <p className="text-gray-500 text-sm mt-1">
            Updates & alerts
          </p>
          <button className="mt-4 text-blue-600">
            Check →
          </button>
        </div>

      </div>

      {/* ================= RECENT PROPERTIES ================= */}
      <div className="mt-10 bg-white p-6 rounded-2xl shadow">
        <h3 className="text-xl font-semibold mb-4">
          Recent Properties
        </h3>

        {loading ? (
          <p>Loading...</p>
        ) : properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="space-y-3">
            {properties.slice(0, 5).map((p) => (
              <div
                key={p._id}
                className="flex justify-between border p-3 rounded-lg"
              >
                <div>
                  <p className="font-medium">{p.title}</p>
                  <p className="text-gray-500">
                    ₹{p.price?.toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => navigate(`/property/${p._id}`)}
                  className="text-blue-600"
                >
                  View
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

    </Layout>
  );
}