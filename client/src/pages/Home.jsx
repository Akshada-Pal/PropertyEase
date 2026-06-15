import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");

  // ✅ 5 BACKGROUND IMAGES
  const images = [
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    "https://images.unsplash.com/photo-1560448204-603b3fc33ddc",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // 🔁 AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const featuredHomes = [
    {
      title: "Luxury 2BHK Apartment",
      location: "Pune",
      price: "₹45,00,000",
      img: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc",
    },
    {
      title: "Modern Villa with Pool",
      location: "Mumbai",
      price: "₹1.5 Cr",
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    },
    {
      title: "Cozy Studio Flat",
      location: "Bangalore",
      price: "₹35,00,000",
      img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    },
    {
      title: "Premium Penthouse",
      location: "Delhi",
      price: "₹2.2 Cr",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
  ];

return (
  <div className="bg-gradient-to-b from-slate-50 via-blue-50 to-purple-50 text-gray-800">
    
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm border-b border-gray-200">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-3 md:px-6 py-3">

        {/* BRAND */}
        <h1 className="text-lg md:text-2xl font-extrabold tracking-tight text-indigo-700 whitespace-nowrap">
          Property<span className="text-gray-900">Ease</span>
        </h1>

        {/* LINKS (UPDATED RESPONSIVE ONLY) */}
        <div className="flex items-center gap-3 md:gap-8 text-[11px] sm:text-xs md:text-sm font-medium whitespace-nowrap">

          <Link
            to="/properties"
            className="text-gray-600 hover:text-indigo-600 transition relative group"
          >
            Properties
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all"></span>
          </Link>

          <Link
            to="/login"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-indigo-600 text-white px-2 md:px-5 py-1 md:py-2 rounded-lg md:rounded-xl shadow-md
            hover:bg-indigo-700 hover:shadow-lg transition transform hover:-translate-y-0.5 text-[10px] sm:text-xs md:text-sm"
          >
            Get Started
          </Link>

        </div>

      </div>
    </nav>


      {/* HERO SECTION (FIXED SLIDER BACKGROUND) */}
      {/* HERO SECTION (RESPONSIVE UPGRADE) */}
<section className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 text-white overflow-hidden">

  {/* BACKGROUND IMAGES */}
  {images.map((img, index) => (
    <div
      key={index}
      className="absolute inset-0 transition-opacity duration-1000"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: index === currentImage ? 1 : 0,
      }}
    />
  ))}

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* CONTENT WRAPPER */}
  <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">

    {/* TITLE */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
      Find Your Dream Home 🏡✨
    </h1>

    {/* DESCRIPTION */}
    <p className="text-sm sm:text-base md:text-lg max-w-2xl mb-6 opacity-90 px-2">
      Explore, rent, buy, and manage properties with ease using PropertyEase —
      your all-in-one real estate platform.
    </p>

    {/* SEARCH BAR */}
    <div className="bg-white w-full max-w-3xl p-3 sm:p-4 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-3">

      <input
        type="text"
        placeholder="📍 Location (e.g. Pune)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border rounded-xl text-black outline-none text-sm sm:text-base"
      />

      <input
        type="text"
        placeholder="💰 Budget (e.g. 50L)"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border rounded-xl text-black outline-none text-sm sm:text-base"
      />

      <Link
        to="/properties"
        className="bg-blue-600 text-white px-5 py-2 sm:py-3 rounded-xl hover:bg-blue-700 text-center"
      >
        Search
      </Link>
    </div>

    {/* BUTTONS */}
    <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full justify-center">

      <Link
        to="/properties"
        className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 text-center"
      >
        Explore Properties
      </Link>

      <Link
        to="/add-property"
        className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-700 text-center"
      >
        List Property
      </Link>

    </div>

    {/* STATS */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 text-center w-full px-2">

      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">1000+</h2>
        <p className="text-xs sm:text-sm">Properties</p>
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">500+</h2>
        <p className="text-xs sm:text-sm">Owners</p>
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">1200+</h2>
        <p className="text-xs sm:text-sm">Tenants</p>
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">24/7</h2>
        <p className="text-xs sm:text-sm">Support</p>
      </div>

    </div>

  </div>
</section>

      {/* FEATURES */}
      {/* FEATURES */}
{/* FEATURES */}
<section className="py-16 md:py-20 px-4 sm:px-6 text-center">

  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-indigo-700">
    Why Choose PropertyEase 🚀
  </h2>

  <p className="text-gray-600 mb-10 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
    A smart property rental management system built for owners, tenants, and admins.
  </p>

  {/* FEATURES GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

    {[
      {
        title: "🔐 JWT Secure Login System",
        desc: "Safe authentication with encrypted sessions and protected routes."
      },
      {
        title: "👥 Role-Based Access (Admin/Owner/Tenant)",
        desc: "Separate dashboards and permissions for every user type."
      },
      {
        title: "🔍 Advanced Search & Filters",
        desc: "Find properties quickly using smart filters and location search."
      },
      {
        title: "❤️ Wishlist & Saved Properties",
        desc: "Save your favorite homes and access them anytime."
      },
      {
        title: "📩 Rental Request System",
        desc: "Tenants can request properties and owners can approve instantly."
      },
      {
        title: "💳 Payment Tracking Dashboard",
        desc: "Track rent payments, due dates, and history in one place."
      },
    ].map((item, i) => (
      <div
        key={i}
        className="group bg-white p-4 sm:p-6 rounded-2xl shadow-md border-l-4 border-blue-500 text-left
        transform transition duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-2xl hover:border-purple-600"
      >
        <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base group-hover:text-indigo-600 transition">
          {item.title}
        </h3>

        <p className="text-gray-600 text-xs sm:text-sm group-hover:text-gray-800 transition">
          {item.desc}
        </p>
      </div>
    ))}

  </div>
</section>


{/* FEATURED PROPERTIES */}
<section className="py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">

  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 text-purple-700">
    Featured Properties 🔥
  </h2>

  {/* GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

    {featuredHomes.map((home, i) => (
      <div
        key={i}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden"
      >

        {/* IMAGE */}
        <img
          src={home.img}
          alt={home.title}
          className="h-40 sm:h-48 w-full object-cover"
        />

        {/* CONTENT */}
        <div className="p-4 sm:p-5">

          <h3 className="font-bold text-base sm:text-lg text-indigo-700">
            {home.title}
          </h3>

          <p className="text-gray-500 text-sm mt-1">
            📍 {home.location}
          </p>

          <p className="text-green-600 font-bold mt-2 text-sm sm:text-base">
            💰 {home.price}
          </p>

          <button className="mt-3 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-xl hover:opacity-90 text-sm sm:text-base">
            View Details
          </button>

        </div>
      </div>
    ))}

  </div>
</section>

      {/* HOW IT WORKS */}
      {/* HOW IT WORKS */}
<section className="py-24 text-center px-6 bg-white">
  <h2 className="text-4xl font-bold mb-4 text-blue-700">
    How It Works 🏡
  </h2>

  <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
    Renting a home has never been easier. Follow these simple steps to find, connect, and move into your dream property.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {[
      {
        step: "1",
        title: "Search Properties",
        desc: "Use smart filters like location, budget, and property type to find the perfect home.",
        icon: "🔍"
      },
      {
        step: "2",
        title: "Connect with Owner",
        desc: "Directly chat or send rental requests to property owners without middlemen.",
        icon: "📩"
      },
      {
        step: "3",
        title: "Schedule Visit",
        desc: "Book property visits online and inspect homes before making decisions.",
        icon: "📅"
      },
      {
        step: "4",
        title: "Verify & Finalize",
        desc: "Check documents, negotiate rent, and finalize the agreement securely.",
        icon: "📑"
      },
      {
        step: "5",
        title: "Make Payment",
        desc: "Pay rent securely using tracked payment system with full history.",
        icon: "💳"
      },
      {
        step: "6",
        title: "Move In",
        desc: "Get keys and move into your new home smoothly and hassle-free.",
        icon: "🏠"
      },

    ].map((item, i) => (
      <div
        key={i}
        className="group bg-gradient-to-b from-blue-50 to-white p-6 rounded-2xl shadow-md border border-gray-100
        transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400 cursor-pointer"
      >
        <div className="text-4xl mb-3 group-hover:scale-110 transition">
          {item.icon}
        </div>

        <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition">
          Step {item.step}: {item.title}
        </h3>

        <p className="text-gray-600 text-sm mt-2 group-hover:text-gray-800 transition">
          {item.desc}
        </p>
      </div>
    ))}

  </div>
</section>



{/* CTA */}
{/* FINAL CTA SECTION - CLEAN REAL ESTATE STYLE */}
<section className="py-28 text-center px-6 text-gray-800 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">

  {/* soft glow background effect */}
  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,#93c5fd,transparent)]"></div>
  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_80%_60%,#c4b5fd,transparent)]"></div>

  <div className="relative z-10 max-w-6xl mx-auto">

    {/* HERO MESSAGE */}
    <h2 className="text-5xl font-extrabold mb-4 text-gray-900">
      Your Dream Home is Just a Few Clicks Away 🏡
    </h2>

    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
      Join a fast-growing real estate community where renting, buying, and managing properties becomes simple, secure, and stress-free.
    </p>

    {/* TRUST BADGES */}
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      {[
        "✔ Verified Owners",
        "🔒 Secure Payments",
        "📞 24/7 Support",
        "🪪 KYC Verified"
      ].map((t, i) => (
        <div
          key={i}
          className="bg-white px-4 py-2 rounded-full text-sm shadow-sm border hover:shadow-md transition"
        >
          {t}
        </div>
      ))}
    </div>

    {/* STATS */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">

      {[
        { num: "10K+", label: "Happy Users" },
        { num: "5K+", label: "Verified Listings" },
        { num: "2.5K+", label: "Successful Deals" },
        { num: "99%", label: "Satisfaction Rate" },
      ].map((s, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition"
        >
          <h3 className="text-3xl font-bold text-indigo-700">{s.num}</h3>
          <p className="text-sm text-gray-600">{s.label}</p>
        </div>
      ))}
    </div>

    {/* FEATURE CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 text-left">

      {[
        {
          title: "⚡ Instant Property Matching",
          desc: "AI-powered filters help you find perfect homes in seconds."
        },
        {
          title: "🔐 Fully Verified Platform",
          desc: "Every owner and listing is verified for safety and trust."
        },
        {
          title: "💳 Secure Rent Payments",
          desc: "Track, pay, and manage rent safely with full history."
        },
      ].map((f, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition"
        >
          <h4 className="font-bold text-gray-800 mb-2">{f.title}</h4>
          <p className="text-sm text-gray-600">{f.desc}</p>
        </div>
      ))}
    </div>

    {/* TESTIMONIAL */}
<div className="group relative bg-white p-8 rounded-2xl shadow-md mb-12 transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 cursor-pointer border border-gray-100 overflow-hidden">

  {/* glowing background effect on hover */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

  {/* quote icon */}
  <div className="relative text-5xl text-blue-500 mb-4 opacity-80 group-hover:scale-110 transition">
    “
  </div>

  {/* testimonial text */}
  <p className="relative text-lg text-gray-700 leading-relaxed italic">
    “I honestly didn’t expect it to be this easy. With PropertyEase, I listed my home in minutes and got serious verified tenants within <span className="font-bold text-blue-600">just 48 hours</span>. No agents, no stress — everything was smooth and transparent.”
  </p>

  {/* user info */}
  <div className="relative mt-6 flex items-center justify-between">

    <div>
      <p className="font-semibold text-gray-900 group-hover:text-blue-700 transition">
        Rohit Sharma
      </p>
      <p className="text-sm text-gray-500">
        Verified Property Owner • Pune
      </p>
    </div>

    {/* rating */}
    <div className="text-yellow-400 text-base group-hover:scale-110 transition">
      ⭐⭐⭐⭐⭐
    </div>

  </div>

  {/* small badge */}
  <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
    Verified Review
  </div>

</div>

    {/* CTA BUTTONS */}
    <div className="flex flex-col md:flex-row justify-center gap-5 mt-6">

  {/* PRIMARY BUTTON */}
  <button className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">

    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition"></span>

    <span className="relative flex items-center justify-center gap-2">
      🔍 Explore Properties
    </span>
  </button>

  {/* SECONDARY BUTTON */}
  <button className="group relative bg-black text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">

    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition"></span>

    <span className="relative flex items-center justify-center gap-2">
      🏠 List Your Property
    </span>
  </button>

  {/* OUTLINE BUTTON */}
  <button className="group relative border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">

    <span className="relative flex items-center justify-center gap-2">
      💬 Contact Support
    </span>

  </button>

    </div>

  </div>
</section>

    </div>
  );
}

