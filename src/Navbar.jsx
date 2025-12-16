import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // All searchable sections
  const sections = [
    { name: "Home", id: "home", path: "/" },
    { name: "Categories", id: "categories", path: "/product" },
    { name: "Products", id: "products", path: "/product" },
    { name: "About", id: "about", path: "/about" },
    { name: "Contact", id: "contact", path: "/contact" },
  ];

  // Categories submenu
  const categories = [
    { name: "Popular Herbs", path: "/product" },
    { name: "Natural Oils", path: "/product" },
    { name: "Wellness Care", path: "/product" },
  ];

  // Handle typing in search
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = sections.filter((section) =>
      section.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  // Scroll to section or navigate
  const goToSection = (id, path) => {
    if (path.startsWith("/")) {
      navigate(path);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setSearchTerm("");
    setSuggestions([]);
  };

  // Handle form submit
  const handleSearch = (e) => {
    e.preventDefault();
    const found = sections.find(
      (section) => section.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (found) {
      goToSection(found.id, found.path);
    } else {
      navigate("/searchnotfound", { state: { searchTerm } });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-green-600/70 backdrop-blur-lg shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand Logo + Name */}
        <div className="flex items-center space-x-3">
          <img
            src="/herb-logo.jpeg"
            alt="Green Gold Logo"
            className="h-10 w-10 object-contain rounded-full"
          />
          <a onClick={()=>{navigate('/')}}><span className="text-2xl font-bold text-yellow-300 tracking-wide cursor-pointer">
            Green<span className="text-white">Gold</span>
          </span>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium mx-auto relative">
          {sections.map((s) =>
            s.name === "Categories" ? (
              <li key={s.id} className="relative">
                <button
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="hover:text-yellow-300 transition cursor-pointer"
                >
                  {s.name}
                </button>
                {/* Dropdown */}
                {isCategoryOpen && (
                  <ul className="absolute left-0 mt-2 bg-white text-gray-800 overflow-hidden rounded-lg shadow-lg w-48">
                    {categories.map((cat) => (
                      <li
                        key={cat.name}
                        className="px-4 py-2 hover:bg-green-100  cursor-pointer"
                        onClick={() => {
                          navigate(cat.path);
                          setIsCategoryOpen(false);
                        }}
                      >
                        {cat.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li
                key={s.id}
                className="hover:text-yellow-300 transition cursor-pointer"
                onClick={() => navigate(s.path)}
              >
                {s.name}
              </li>
            )
          )}
        </ul>

        {/* Search Bar */}
        <div className="relative hidden md:block">
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-white rounded-lg overflow-hidden shadow-md"
          >
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 w-40 text-sm text-gray-700 focus:outline-none"
              value={searchTerm}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-green-700 px-3 py-2 text-white text-sm font-semibold hover:bg-green-800 transition"
            >
              Go
            </button>
          </form>

          {/* Suggestions Dropdown */}
          {suggestions.length > 0 && (
            <ul className="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              {suggestions.map((s) => (
                <li
                  key={s.id}
                  className="px-4 py-2 text-gray-700 hover:bg-green-100 cursor-pointer"
                  onClick={() => goToSection(s.id, s.path)}
                >
                  {s.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/20 backdrop-blur-lg shadow-md">
          <ul className="flex flex-col space-y-4 py-4 px-6 text-white font-medium text-center">
            {sections.map((s) =>
              s.name === "Categories" ? (
                <li key={s.id} className="relative">
                  <button
                    className="w-full text-left hover:text-yellow-300 transition"
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  >
                    {s.name}
                  </button>
                  {isCategoryOpen && (
                    <ul className="mt-2 bg-white text-gray-800 rounded-lg shadow-lg">
                      {categories.map((cat) => (
                        <li
                          key={cat.name}
                          className="px-4 py-2 hover:bg-green-100 cursor-pointer"
                          onClick={() => {
                            navigate(cat.path);
                            setIsOpen(false);
                            setIsCategoryOpen(false);
                          }}
                        >
                          {cat.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li
                  key={s.id}
                  className="hover:text-yellow-300 transition cursor-pointer"
                  onClick={() => {
                    navigate(s.path);
                    setIsOpen(false);
                  }}
                >
                  {s.name}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
