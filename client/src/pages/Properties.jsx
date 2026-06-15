import { useEffect, useState } from "react";
import axios from "axios";

export default function Properties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "http://localhost:5000/api/properties"
      );

      setProperties(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this property?"
      );

      if (!confirmDelete) return;

      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/api/properties/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchProperties();
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Failed to delete property"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">All Properties 🏡</h1>
        <p className="text-gray-500 mt-2">
          Manage your listed properties
        </p>
      </div>

      {/* LOADING STATE */}
      {loading && (
        <div className="text-gray-500 text-lg">
          Loading properties...
        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && properties.length === 0 && (
        <div className="text-gray-500 text-lg">
          No properties found 😢
        </div>
      )}

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {properties.map((property) => (
          <div
            key={property._id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden group"
          >

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">

              <h2 className="text-xl font-semibold">
                {property.title}
              </h2>

              <p className="text-gray-500 mt-1">
                {property.location}
              </p>

              <p className="font-bold text-lg mt-2">
                ₹ {property.price}
              </p>

              {/* TYPE BADGE */}
              <span
                className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-medium
                ${
                  property.type === "rent"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {property.type.toUpperCase()}
              </span>

              {/* DELETE BUTTON */}
              <button
                onClick={() => handleDelete(property._id)}
                className="w-full mt-5 bg-red-600 text-white py-2 rounded-xl
                           hover:bg-red-700 active:scale-[0.98]
                           transition"
              >
                Delete Property 🗑️
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}