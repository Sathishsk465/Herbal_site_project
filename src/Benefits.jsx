import React from "react";

export default function Benefits() {
  const benefits = [
    {
      title: "100% Natural & Pure",
      desc: "Free from harmful chemicals and additives, crafted only from authentic herbs and plants.",
      image:"/organic-2.png",
    },
    {
      title: "Science Meets Tradition",
      desc: "Blending age-old herbal wisdom with modern research to bring safe and effective supplements.",
      image:"/science.jpg",
    },
    {
      title: "Eco-Friendly Practices",
      desc: "Sustainably sourced ingredients and minimal packaging to protect both you and the planet.",
      image:"leaf-2.jpg",
    },
    {
      title: "Trusted Quality",
      desc: "Every product is carefully tested and formulated with integrity and transparency.",
      image:"quality.jpg",
    },
  ];

  return (
    <section id="benefit" className="relative bg-green-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-900">
          Why Choose <span className="text-yellow-500">Green Gold?</span>
        </h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          We believe in delivering more than just supplements — we bring you
          trust, purity, and a lifestyle closer to nature.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl transition"
          >
            <img src={benefit.image} alt="" className="h-50 w-fit hover:scale-105 transform transition duration-500 " />
            <h3 className="text-xl font-semibold text-green-900 mb-2 ">
              {benefit.title}
            </h3>
            <p className="text-gray-600">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
