import React from "react";
import { useNavigate,useLocation } from "react-router-dom";

export default function SearchNotFound() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchTerm =location.state?.searchTerm;

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-center px-6">
      <h1 className="text-5xl font-extrabold text-green-900 mb-6">No Results Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        We couldn’t find anything for <span className="font-semibold">"{searchTerm}"</span>.
      </p>

      <img
        src="/no-results.png" // replace with your own illustration/image
        alt="No results"
        className="w-36 mb-10 animate-bounce"
      />

      <button
        onClick={() => navigate("/")}
        className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition"
      >
        Back to Home
      </button>
    </section>
  );
}
