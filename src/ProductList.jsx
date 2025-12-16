import React, { useState } from "react";

// Sample product data
const products = [
  {
    id: 1,
    name: "Green Gold Herbal Supplement",
    image: "/product.png",
    mrp: 3999,
    discount: 37.5, // %
  },
  {
    id: 2,
    name: "Green Gold Herbal Supplement",
    image: "/product.png",
    mrp: 3999,
    discount: 37.5, // %
  },
  {
    id: 3,
    name: "Green Gold Herbal Supplement",
    image: "/product.png",
    mrp: 3999,
    discount: 37.5, // %
  },
];

export default function ProductPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products by name
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <section className="bg-green-50 min-h-screen py-16 px-6 md:px-12 lg:px-20 mt-10 ">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-green-900 text-center mb-8">
          Our Products
        </h1>

        {/* 🔍 Search Bar */}
        <div className="mb-12 flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Products Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              const finalPrice =
                product.mrp - (product.mrp * product.discount) / 100;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                >
                  {/* Product Image */}
                  <div className="w-full h-80 bg-gray-100 flex items-center overflow-hidden justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="p-6 space-y-4">
                    <h2 className="text-lg font-semibold text-green-900">
                      {product.name}
                    </h2>
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-500 line-through text-sm">
                        ₹{product.mrp}
                      </span>
                      <span className="text-red-500 font-bold">
                        {product.discount}% OFF
                      </span>
                    </div>
                    <p className="text-xl font-bold text-green-800">
                      ₹{finalPrice}
                    </p>
                    <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="col-span-full text-center text-gray-600 text-lg">
              No products found.
            </p>
          )}
        </div>
      </div>
    </section>
    </>
  );
}
