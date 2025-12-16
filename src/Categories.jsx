import React from "react";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate =useNavigate();
  const categories = [
    {
      title: "Popular Herbs",
      image: "/herbal.jpg", // replace with your image path
    },
    {
      title: "Natural Oils",
      image: "/nature_oil.jpg", // replace with your image path
    },
    {
      title: "Wellness Care",
      image: "/wellness.jpg", // replace with your image path
    },
  ];

  return (
    <section id="categories" className="relative bg-green-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-900">
          Explore Our <span className="text-yellow-500">Categories</span>
        </h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          Discover the purest selection of herbal supplements, natural oils, and
          wellness products crafted to keep you closer to nature.
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
          >
            {/* Category Image */}
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <button onClick={()=>{navigate("/product")}} className="px-6 py-3 bg-yellow-400 text-green-900 font-semibold rounded-xl shadow hover:bg-yellow-300 transition">
                View {cat.title}
              </button>
            </div>

            {/* Category Title */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 px-5 py-2 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-green-900">{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
