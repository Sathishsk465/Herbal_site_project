import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate=useNavigate();
  return (
    <section id="hero" className="relative bg-gradient-to-r from-green-900 via-green-700 to-green-500 text-white">
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Boost Your Health, Naturally <br />
            with <span className="text-yellow-300">Green Gold</span>
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-lg">
            Premium herbal supplements crafted from nature’s purest ingredients
            to support your wellness journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button onClick={()=>{navigate("/product")}} className="px-6 py-3 bg-yellow-400 text-green-900 font-semibold rounded-2xl shadow-lg hover:bg-yellow-300 transition">
              Shop Now
            </button>
            <button onClick={()=>{navigate("/about")}} className="px-6 py-3 border border-yellow-300 rounded-2xl font-semibold hover:bg-white hover:text-green-900 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right GIF with Hover Glassmorphism Overlay */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <div className="relative group w-full max-w-md overflow-hidden shadow-2xl">
            {/* GIF */}
            <img
              src="/ad.gif"
              alt="Green Gold Product"
              className="w-auto h-80 rounded-2xl"
            />

            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl border-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition duration-300 bg-white/20 backdrop-blur-md">
              <button onClick={()=>{navigate('/product')}} className="px-5 py-3 bg-yellow-400 text-green-900 font-bold rounded-xl shadow-md hover:bg-yellow-300 transition">
                View Product
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-800 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
}
