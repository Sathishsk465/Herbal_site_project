import React from "react";
import { useNavigate } from "react-router-dom";


export default function AboutUs() {
  const navigate=useNavigate();
  return (
    <>
    
    <section id="about" className="relative bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="flex-1">
          <img
            src="/greengold.jpg" // replace with your herbal/nature image
            alt="About Green Gold"
            className="rounded-2xl shadow-2xl object-cover w-full h-full"
          />
        </div>

        {/* Right Side - Text */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-900">
            About <span className="text-yellow-500">Green Gold</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At <span className="font-semibold text-green-800">Green Gold</span>,
            we believe that true wellness begins with nature. Inspired by
            centuries of herbal wisdom and backed by modern science, we craft
            premium supplements that bring you the healing power of plants in
            their purest form.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every capsule, oil, and herbal blend we create is thoughtfully
            sourced, sustainably harvested, and carefully formulated to support
            your mind, body, and soul.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 text-gray-800 font-medium">
            <li className="flex items-center space-x-3">
              <span className="text-green-600 text-xl">🌱</span>
              <span>100% Natural & Pure – free from harmful additives</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-600 text-xl">🧪</span>
              <span>Science Meets Tradition – rooted in Ayurveda & herbal wisdom</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-600 text-xl">🌍</span>
              <span>Eco-Friendly – sustainable sourcing & minimal packaging</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-600 text-xl">🤝</span>
              <span>Trust & Care – crafted with integrity & transparency</span>
            </li>
          </ul>
        </div>
      </div>
       <div className="mt-12">
          <button onClick={()=>{navigate("about")}} className="w-full py-4 bg-yellow-400 text-green-900 font-bold text-lg rounded-xl shadow-lg hover:bg-yellow-300 transition">
            Explore More
          </button>
        </div>
      
    </section>
    </>
  );
}
