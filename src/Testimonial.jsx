import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "Wellness Enthusiast",
      message:
        "Green Gold supplements have transformed my daily routine. I feel more energetic and stress-free after using their Ashwagandha blend!",
      image: "/default.jpg",
    },
    {
      name: "Ravi Kumar",
      role: "Fitness Coach",
      message:
        "The natural herbs used in Green Gold products are authentic and powerful. My stamina and recovery time have improved drastically.",
      image: "/default.jpg",
    },
    {
      name: "Priya Mehta",
      role: "Yoga Instructor",
      message:
        "I love how pure and natural these supplements are. Shatavari and Tulsi blends have really supported my overall wellness.",
      image: "/default.jpg",
    },
    {
      name: "Arjun Verma",
      role: "Entrepreneur",
      message:
        "Shilajit from Green Gold has boosted my energy levels like never before. Truly amazing quality!",
      image: "/default.jpg",
    },
  ];

  return (
    <section id="review" className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-900">
          What Our <span className="text-yellow-500">Customers Say</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Hear from people who have experienced the power of Green Gold herbal
          supplements.
        </p>
      </div>

      {/* Scrollable Testimonials */}
      <div className="overflow-x-auto scrollbar-hide ">
        <div className="flex space-x-6 pb-4">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[350px] bg-green-50 rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition"
            >
              {/* User Image */}
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 mx-auto rounded-full border-4 border-yellow-400 object-cover mb-4"
              />

              {/* Message */}
              <p className="text-gray-700 italic mb-4">“{t.message}”</p>

              {/* Name & Role */}
              <h3 className="text-lg font-bold text-green-900">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
