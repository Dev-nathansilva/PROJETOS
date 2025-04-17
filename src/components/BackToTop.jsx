"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="cursor-pointer fixed bottom-6 right-6 z-50 p-3 bg-[#ebebeb19] text-white rounded-full shadow-lg hover:bg-[#ebebeb46] transition duration-300"
        aria-label="Voltar ao topo"
      >
        <FaArrowUp size={20} />
      </button>
    )
  );
}
