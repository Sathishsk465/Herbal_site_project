import React from "react";

export default function ContactPage() {
  return (
    <>
    <section
      className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/contact-banner.jpg')" }}
    >
      <div className="absolute inset-0 bg-opacity-60"></div>
      <div className="relative z-10 text-center text-green-700 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Have questions? We're here to help. Reach out to us anytime.
        </p>
      </div>
    </section>
    <section className="bg-green-50 min-h-screen py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto space-y-16">
        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white shadow-xl rounded-2xl overflow-hidden">
          {/* Left Side Image */}
          <div className="h-full w-full">
            <img
              src="/contactus.jpg"
              alt="Contact Green Gold"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Side Form */}
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-green-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-6">
              Have questions about our products or need support? Fill out the form
              below, and our team will get back to you shortly.
            </p>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mobile Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
            <div className="text-3xl text-green-600 mb-3"><i className="fa-solid fa-phone"></i></div>
            <h3 className="text-lg font-semibold text-green-900 mb-2">Call Us</h3>
            <p className="text-green-700 font-semibold">+91 9994764301 | +91 9994765301</p>
                <p className="text-green-700 font-semibold">+91 7200470944 | +91 7200471944</p>
                
          </div>

          {/* Email Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
            <div className="text-3xl text-green-600 mb-3"><i className="fa-solid fa-envelope"></i></div>
            <h3 className="text-lg font-semibold text-green-900 mb-2">Email Us</h3>
            <p className="text-green-700 font-semibold">support@greengold.com</p>
          </div>

          {/* Address Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
            <div className="text-3xl text-green-600 mb-3"><i className="fa-solid fa-location-dot"></i></div>
            <h3 className="text-lg font-semibold text-green-900 mb-2">Visit Us</h3>
            <p className="text-green-700 font-semibold">
              Flat no.711,1st Floor,Puttu kovil,High road,Pernambut-635 810,Vellore Dt,Tamil Nadu.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
