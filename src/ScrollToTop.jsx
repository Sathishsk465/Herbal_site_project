// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top whenever the route changes
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling effect
    });
  }, [pathname]);

  return null; // this component doesn’t render anything
}
