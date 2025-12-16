import React from "react";

export default function IngredientsPage() {
  const ingredients = [
    {
      name: "Ashwagandha (Withania somnifera)",
      image: "/ashwagandha.png",
      benefits: [
        "Reduces stress, anxiety, and promotes calmness",
        "Boosts stamina, energy, and physical endurance",
        "Supports brain function and memory",
        "Strengthens the immune system",
         "Balances hormones and supports reproductive health",
      ],
      description:
        "Ashwagandha, often called Indian Ginseng or the King of Herbs, is a powerful adaptogen used in Ayurveda for centuries. It helps the body manage stress, boosts energy levels, and promotes overall vitality. Known for its rejuvenating properties, Ashwagandha supports both mental and physical wellness.",
    },
    {
      name: "Shilajit (Mineral Pitch)",
      image: "/shilajit.png",
      benefits: [
        "Powerful rejuvenator and anti-aging supplement",
        "Boosts energy, stamina, and endurance",
        "Enhances mental clarity and reduces fatigue",
        "Rich in fulvic acid and minerals for overall health",
        "Supports male reproductive wellness and vitality",
      ],
      description:
        "Shilajit is a powerful natural substance formed in the Himalayan rocks, rich in minerals and fulvic acid. Revered in Ayurveda as a rejuvenator, it enhances stamina, supports mental clarity, slows aging, and restores energy at the cellular level. Shilajit is known as the “destroyer of weakness.”",
    },
    {
      name: "Salampanja (Orchis latifolia / Salep Orchid)",
      image: "/salam-panja.jpg",
      benefits: [
        "Known as a natural strength enhancer",
        "Traditionally used as an aphrodisiac",
       "Helps in improving reproductive health",
       "Boosts energy and reduces fatigue",
      "Supports immune function and vitality",
      ],
      description:
        "Salampanja is a rare and valuable herb traditionally recognized for its rejuvenating properties. It is often used as a natural tonic to boost energy, promote fertility, and improve physical strength. Its restorative effects make it a key ingredient in herbal formulations.",
    },
    {
      name: "Salab Misiri (Orchis mascula / Orchid tubers)",
      image: "/salab_misiri.jpg",
      benefits: [
        "Enhances male vitality and stamina",
        "Traditionally used as a natural aphrodisiac",
        "Improves energy and physical strength",
        "Supports fertility and reproductive health",
        "Helps combat fatigue and weakness",
      ],
      description:
        "Salab Misiri is a rare herb traditionally used as a natural strength enhancer and aphrodisiac. It is valued for improving stamina, fertility, and reproductive health. Known as a natural tonic, it helps fight fatigue and supports physical endurance.",
    },
    {
      name: "Gokshura (Tribulus terrestris)",
      image: "/GokshuraPowder.webp",
      benefits: [
        "Supports urinary and kidney health",
        "Improves stamina and muscle strength",
        "Enhances male reproductive health and vitality",
        "Acts as a natural rejuvenator and energizer",
       "Balances hormones and supports overall wellness",
      ],
      description:
        "Gokshura is a potent Ayurvedic herb widely known for improving stamina, strength, and reproductive wellness. Traditionally used as a natural rejuvenator, it supports urinary and kidney health while also enhancing muscle strength and overall vitality.",
    },
    {
      name: "Shatavari (Asparagus racemosus)",
      image: "/shatavari.png",
      benefits: [
        "Supports women’s reproductive health and fertility",
        "Acts as a natural adaptogen (helps the body handle stress)",
        "Boosts lactation in nursing mothers",
        "Promotes digestive health",
        "Improves vitality and overall strength",
      ],
      description:
        "Shatavari is considered the Queen of Herbs in Ayurveda, especially for women’s health. It nourishes the reproductive system, balances hormones, and promotes vitality. Shatavari also aids digestion, boosts immunity, and acts as a natural rejuvenator for both men and women.",
    },
    {
      name: "Dry Fruits (Dates, Almonds, Cashews, Raisins, etc.)",
      image: "/dry-fruits.png",
      benefits: [
        "Rich source of protein, fiber, vitamins, and minerals",
        "Boosts energy and strength naturally",
       "Improves heart health and blood circulation",
       "Enhances skin and hair health",
       "Supports digestion and overall immunity",
      ],
      description:
        "Dry fruits are nutrient-rich powerhouses, packed with proteins, vitamins, healthy fats, and antioxidants. They provide instant energy, strengthen immunity, and support heart, brain, and skin health. Combined with herbs, they act as a natural energy booster and body nourisher.",
    },
    // Add more ingredients as needed
  ];

  return (
    <>
    <section
      className="relative h-[55vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/ingredient-banner.jpg')" }}
    >
      <div className="absolute inset-0 bg-opacity-40"></div>
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Ingredients</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Explore the powerful herbs and natural ingredients that make Green Gold a complete wellness supplement.
        </p>
      </div>
    </section>
    <section className="bg-green-50 min-h-screen py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900">
          Our <span className="text-yellow-500">Herbs & Ingredients</span>
        </h1>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          Discover the natural ingredients that power Green Gold’s herbal supplements and learn about their unique benefits.
        </p>
      </div>

      <div className="space-y-20">
        {ingredients.map((ing, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } gap-12`}
          >
            {/* Ingredient Image */}
            <div className="md:w-1/2">
              <img
                src={ing.image}
                alt={ing.name}
                className="rounded-2xl shadow-2xl mx-auto w-auto h-100 object-cover hover:scale-105 transform transition duration-300"
              />
            </div>

            {/* Ingredient Details */}
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-green-900">{ing.name}</h2>
              <p className="text-gray-700">{ing.description}</p>

              <h3 className="text-xl font-semibold text-yellow-500 mt-4">
                Benefits
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {ing.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
