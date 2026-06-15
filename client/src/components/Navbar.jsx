import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-700">
          PropertyEase
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/properties">Properties</Link>
          <Link to="/login" className="text-indigo-600 font-semibold">Login</Link>
          <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
            Get Started
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col bg-white px-6 py-4 gap-3 border-t">
          <Link to="/properties">Properties</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Get Started</Link>
        </div>
      )}
    </nav>
  );
}