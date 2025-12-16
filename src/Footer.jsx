import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate=useNavigate();
  return (
    <footer className="bg-green-900 text-green-100 pt-12 pb-6 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="/herb-logo.jpeg"
              alt="Green Gold Logo"
              className="w-auto h-20 rounded-full hover:border-2 border-yellow-400"
            />
            <span onClick={()=>{navigate('/')}} className="text-xl font-bold cursor-pointer">Green Gold</span>
          </div>
          <p className="text-sm text-green-200 font-semibold">
            Your trusted herbal health supplement brand — crafted with 30+
            natural ingredients for vitality, energy, and overall wellness.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-green-200">
            <li>
              <a onClick={()=>{navigate("/")}} className="hover:text-yellow-400 transition cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a onClick={()=>{navigate("/about")}} className="hover:text-yellow-400 transition cursor-pointer">
                About Us
              </a>
            </li>
            <li>
              <a onClick={()=>{navigate("/product")}} className="hover:text-yellow-400 transition cursor-pointer">
                Products
              </a>
            </li>
            <li>
              <a onClick={()=>{navigate("/Ingredients")}} className="hover:text-yellow-400 transition cursor-pointer">
                Ingredients
              </a>
            </li>
            <li>
              <a onClick={()=>{navigate("/contact")}} className="hover:text-yellow-400 transition cursor-pointer">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
          <ul className="space-y-2 text-green-200">
            <li>
              <a onClick={()=>{navigate("/")}} className="hover:text-yellow-400 transition cursor-pointer">
                FAQs
              </a>
            </li>
            <li>
              <a onClick={()=>{navigate("/")}} className="hover:text-yellow-400 transition cursor-pointer">
                Privacy Policy
              </a>
            </li>
            <li>
              <a onClick={()=>{navigate("/")}} className="hover:text-yellow-400 transition cursor-pointer">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="text-green-200 text-sm font-semibold">
          <i className="fa-solid fa-location-dot"></i> Flat no.711,1st Floor,Puttu kovil,High road,Pernambut-635 810,Vellore,Tamil Nadu.
          </p>
          <br />
          <p className="text-green-200 text-sm"><i className="fa-solid fa-phone"></i> +91 9994764301 | +91 9994765301</p>
          <p className="text-green-200 text-sm"> +91 7200470944 | +91 7200471944</p>
          <br />
          <p className="text-green-200 text-sm"><i className="fa-solid fa-envelope"></i> support@greengold.com</p>

          <div className="flex space-x-4 mt-4">
            <a href="#" target={"_blank"}  className="hover:text-blue-600 text-xl hover:scale-125 transform transition duration-500"><i className="fa-brands fa-facebook fa-xl"></i></a>
          <a
           href="#"target={"_blank"} 
            className="text-xl hover:scale-125 transform transition duration-500 
             bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 
             bg-clip-text text-transparent"
            >
            <i className="fa-brands fa-instagram fa-xl"></i>
             </a>
            <a href="#" target={"_blank"} className="hover:text-red-600 text-xl hover:scale-125 transform transition duration-500 "><i className="fa-brands fa-youtube fa-xl"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-green-700 pt-6 text-center text-sm text-green-300">
        © {new Date().getFullYear()} Green Gold. All rights reserved. | Crafted
        with 🌿 for natural wellness.
      </div>
    </footer>
  );
}
