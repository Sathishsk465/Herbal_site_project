import React from "react";
import { useNavigate } from "react-router-dom";

export default function AboutProduct() {
  const navigate = useNavigate();
  return (
    <>
    
    <section
      className="relative h-[60vh] flex items-center justify-center bg-cover bg-center "style={{ backgroundImage: "url('/about-banner.jpg')" }}
    >
      <div className="absolute inset-0 bg-opacity-50"></div>
      <div className="relative z-10 text-center text-green-800 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Green Gold</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Discover the story behind our herbal wellness journey — crafted with 30+ natural ingredients for your health and vitality.
        </p>
      </div>
    </section>
    <section className="bg-green-50 min-h-screen py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto space-y-20">
        {/* Hero Intro with Image */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6">
              About <span className="text-yellow-500">Green Gold</span>
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Are you feeling tired, stressed, or lacking energy? It's time to
              recharge naturally with{" "}
              <span className="font-semibold">Green Gold</span> — the herbal
              health supplement that brings vitality back into your life.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Crafted with care from time-tested Ayurvedic herbs,{" "}
              <span className="font-medium">Green Gold</span> is not just a
              supplement — it’s your daily dose of holistic wellness. Every
              capsule is made to support your body, mind, and overall health,
              naturally.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/greengold.jpg"
              alt="Green Gold Bottle"
              className="w-auto h-80 drop-shadow-2xl rounded-xl"
            />
          </div>
        </div>

        {/* Ingredients Highlight */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div >
              <h2 className="text-2xl font-bold text-green-900 mb-4">
                Powered by 30+ Natural Ingredients
              </h2>
              <p className="text-gray-700 mb-4 font-semibold">
                Green Gold combines over 30 herbs and natural extracts that work
                together to boost your energy, stamina, and wellness. Each
                ingredient has been handpicked for its therapeutic value.
              </p>
              <p className="text-gray-700 font-semibold">
                Some of our powerful ingredients include{" "}
                <span className="text-green-600">
                  Ashwagandha, Shilajit, Safed Musli, Gokshura, Salab Misri,
                  Almond, Onion Seed, Carrot Seed, and Cucumber Seed
                </span>
                . Together, they form a potent formula that enhances vitality,
                improves digestion, strengthens immunity, and supports sexual
                health.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/ISS06659.JPG"
                alt="Herbal Ingredients"
                className="w-full md:w-96 h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h2 className="text-2xl font-bold text-green-900 mb-6 text-center">
            Key Benefits of Green Gold
          </h2>
          <ol className="list-none list-inside text-gray-700 space-y-3 leading-relaxed bg-white rounded-2xl shadow p-6 max-w-4xl mx-auto font-bold text-xl">
            <li>
              <i class="fa-solid fa-leaf text-green-600"></i> Increases physical strength – Natural herbs keep your body
              energized and active.
            </li>
            <li>
              <i class="fa-solid fa-leaf text-green-600"></i> Boosts immunity – Strengthens the immune system to protect against
              diseases.
            </li>
            <li>
              <i class="fa-solid fa-leaf text-green-600"></i> Improves digestion – Promotes better nutrient absorption and gut
              health.
            </li>
            <li>
             <i class="fa-solid fa-leaf text-green-600"></i> Strengthens muscles and bones – Supports growth and repair.
            </li>
            <li>
             <i class="fa-solid fa-leaf text-green-600"></i> Reduces stress and fatigue – Calms the mind and improves focus.
            </li>
            <li>
             <i class="fa-solid fa-leaf text-green-600"></i> Supports restful sleep – Helps prevent sleep-related problems.
            </li>
            <li>
             <i class="fa-solid fa-leaf text-green-600"></i> Enhances skin health – Detoxifies the body, promoting clearer skin.
            </li>
            <li>
             <i class="fa-solid fa-leaf text-green-600"></i> Improves brain function – Enhances memory and concentration.
            </li>
          </ol>
        </div>

        {/* Lifestyle / Trust Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center bg-green-100 p-8 rounded-2xl shadow">
          <div className="flex justify-center order-2 md:order-1">
            <img
              src="/ad.gif"
              alt="Healthy Lifestyle"
              className="w-full md:w-96 h-auto rounded-xl shadow-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Wellness You Can Trust
            </h2>
            <p className="text-gray-700 mb-4">
              Green Gold is 100% natural, with no harmful chemicals, fillers, or
              side effects. It’s crafted under strict quality standards to
              ensure purity and effectiveness.
            </p>
            <p className="text-gray-700">
              Whether you’re looking to increase energy, improve endurance, or
              simply live a healthier life, Green Gold is your trusted partner
              in natural wellness.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
            100% Natural. No Side Effects. Just Pure Wellness.
          </h2>
          <p className="text-gray-700 mb-6">
            Make Green Gold part of your daily routine and experience the power
            of nature every day.
          </p>
          <button onClick={()=>{navigate('/product')}} className="px-8 py-4 bg-yellow-400 text-green-900 font-bold text-lg rounded-xl shadow-lg hover:bg-yellow-300 transition">
            Explore Our Products
          </button>
        </div>
      </div>
    </section>
    </>
  );
}
