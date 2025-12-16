import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductIngredients() {

  const navigate = useNavigate();
  const herbs = [
    "Ashwagandha", "Tulsi", "Neem", "Amla", "Brahmi",
    "Shatavari", "Turmeric", "Moringa", "Ginger", "Licorice",
    "Guduchi", "Fenugreek", "Clove", "Cinnamon", "Pepper",
    "Cardamom", "Guggul", "Arjuna", "Gotu Kola", "Spirulina",
    "Hibiscus", "Coriander", "Fennel", "Cumin", "Saffron",
    "Shankhpushpi", "Haritaki", "Bibhitaki", "Manjistha", "Tulsi Oil",
    "Neem Oil"
  ];

  return (
    <section id="products" className="relative bg-green-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-900">
            Our <span className="text-yellow-500">Herbal Formula</span>
          </h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Packed with 30+ natural herbs carefully selected to restore balance,
            boost vitality, and support overall wellness.
          </p>
        </div>

        {/* Product + Herbs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div>
            <img
              src="/product.png" // replace with your product image
              alt="Green Gold Herbal Supplement"
              className="rounded-2xl shadow-2xl w-auto h-130 mx-auto object-cover"
            />
          </div>

          {/* Herbs List */}
          <div className="bg-white rounded-2xl shadow-lg p-6 max-h-[500px] overflow-y-auto">
            <h3 className="text-xl font-bold text-green-900 mb-4">
              Key Ingredients
            </h3>
            <ul className="grid grid-cols-2 gap-3 text-gray-700 text-sm">
              {herbs.map((herb, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 border-b border-gray-100 pb-2 font-semibold"
                >
                  <span className="text-green-600"><i class="fa-regular fa-circle-check fa-lg"></i></span>
                  <span>{herb}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="mt-12">
          <button onClick={()=>{navigate('/ingredients')}} className="w-full py-4 bg-yellow-400 text-green-900 font-bold text-lg rounded-xl shadow-lg hover:bg-yellow-300 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
