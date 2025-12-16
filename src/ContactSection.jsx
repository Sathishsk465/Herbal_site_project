import React from "react";
import { useNavigate } from "react-router-dom";

export default function ContactUsSection() {
  const navigate = useNavigate();

  return (
    <section  className="bg-green-50 py-16 px-6 md:px-12 lg:px-20" id="contact">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/contact us.jpg" // replace with your image
            alt="Contact Us"
            className="rounded-2xl shadow-lg w-full md:w-4/5 object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-3xl font-bold text-green-900">
            Have Questions? We’re Here to Help 🌿
          </h2>
          <p className="text-gray-600 text-lg">
            Whether you need more details about our herbal supplements or want
            personalized guidance, our team is just one click away.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
