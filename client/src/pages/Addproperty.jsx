import { useState } from "react";
import axios from "axios";

export default function AddProperty() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    type: "sale",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/properties/add",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);

      setFormData({
        title: "",
        description: "",
        price: "",
        location: "",
        type: "sale",
        image: "",
      });
    } catch (err) {
      alert(err.response?.data?.message || "Failed to add property");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-center justify-center p-6">

      {/* Background glow */}
      <div className="absolute w-72 h-72 bg-black opacity-10 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-gray-400 opacity-10 rounded-full blur-3xl bottom-10 right-10"></div>

      {/* Card */}
      <div className="relative w-full max-w-2xl">

        <div className="bg-white/80 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-10">

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Add New Property 🏡
            </h1>
            <p className="text-gray-500 mt-2">
              Fill in details to list your property
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Title */}
            <div>
              <label className="text-sm text-gray-600">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Beautiful 2BHK Apartment"
                value={formData.title}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="text-sm text-gray-600">Description</label>
              <textarea
                name="description"
                placeholder="Write property details..."
                value={formData.description}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 border rounded-xl h-28 focus:outline-none focus:ring-2 focus:ring-black transition"
              />
            </div>

            {/* Grid Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label className="text-sm text-gray-600">Price</label>
                <input
                  type="number"
                  name="price"
                  placeholder="4500000"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Mumbai, Pune..."
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition"
                />
              </div>

            </div>

            {/* Type + Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label className="text-sm text-gray-600">Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition"
                >
                  <option value="sale">Sale</option>
                  <option value="rent">Rent</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-600">Image URL</label>
                <input
                  type="text"
                  name="image"
                  placeholder="https://image.com"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition"
                />
              </div>

            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl font-semibold
                         hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]
                         transition-all duration-200"
            >
              Publish Property 🚀
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}