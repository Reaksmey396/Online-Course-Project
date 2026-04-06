// Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = ["Home","Courses", "Library", "Blog", "About Us"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toSlug = (link) => link.toLowerCase().replace(/\s+/g, "-");

  return (
    <nav className={`sticky top-0 z-50 border-b shadow-sm ${darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <Link to="/">
              <span className={`text-xl font-bold tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
                  KL<span className="text-indigo-600">.</span>Learn
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link === "Home" ? "/" : `/${toSlug(link)}`}
                className={`relative font-medium text-lg transition-colors duration-200 group
                  ${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
              >
                {link}
                <span className={`absolute -bottom-0.5 left-0 w-0 h-0.5 bg-indigo-600 rounded-full transition-all duration-300 group-hover:w-full`} />
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark Mode Toggle */}
            {/* <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-9 h-9 rounded-full flex items-center justify-center
                         transition-all duration-200 ${darkMode ? "text-white hover:bg-gray-800" : "text-gray-500 hover:bg-gray-100"}`}
            >
              {darkMode ? "☀️" : "🌙"}
            </button> */}

            {/* Login Button */}
            <Link to="/register">
                <button className="flex items-center gap-2 bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-xl cursor-pointer">
                    Register
                </button>
            </Link>
            <Link to="/login">
                <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700
                                text-white text-sm font-semibold px-4 py-2 rounded-xl
                                shadow-sm transition-all duration-200 hover:shadow-md active:scale-95 cursor-pointer">
                Login
                </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 space-y-1.5">
              <span className={`block h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-72" : "max-h-0"} border-t ${darkMode ? "border-gray-800 bg-gray-900" : "border-gray-100 bg-white"}`}>
        <div className="px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link === "Home" ? "/" : `/${toSlug(link)}`}
              className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors
                ${darkMode ? "text-gray-300 hover:text-white hover:bg-gray-800" : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"}`}
            >
              {link}
            </Link>
          ))}
          <div className="mt-2 pt-2 border-t flex items-center justify-between">
            {/* <button
              onClick={() => setDarkMode(!darkMode)}
              className={`text-sm flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${darkMode ? "text-white hover:bg-gray-800" : "text-gray-500 hover:bg-gray-100"}`}
            >
              {darkMode ? "☀️" : "🌙"} Toggle Theme
            </button> */}
            <Link to="/register">
                <button className="flex items-center gap-2 bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-xl cursor-pointer">
                    Register
                </button>
            </Link>
            <Link to="/login">
                <button className="flex items-center gap-2 bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-xl cursor-pointer">
                    Login
                </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}