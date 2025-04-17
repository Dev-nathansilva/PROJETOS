"use client";

import { useState, useEffect } from "react";

import { HiCodeBracket } from "react-icons/hi2";
import { HiMiniServerStack } from "react-icons/hi2";
import { BsVectorPen } from "react-icons/bs";

const navItems = [
  { id: "front", icon: HiCodeBracket },
  { id: "back", icon: HiMiniServerStack },
  { id: "uiux", icon: BsVectorPen },
];

export default function BottomNav() {
  const [active, setActive] = useState("front");

  // ScrollSpy com IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Define quanta parte da seção deve estar visível
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-md z-50">
      <ul className="flex justify-center gap-16 items-center py-3">
        {navItems.map(({ id, icon: Icon }) => (
          <li key={id}>
            <button
              onClick={() => handleClick(id)}
              className={`cursor-pointer rounded-full hover:bg-gray-100 relative flex items-center justify-center transition-all duration-300
                  ${
                    active === id
                      ? "text-white -translate-y-3"
                      : "text-gray-500"
                  }
                `}
            >
              <div
                className={`p-3 rounded-full transition-all duration-300
                    ${active === id ? "bg-blue-500 shadow-lg" : ""}
                  `}
              >
                <Icon className="w-6 h-6" />
              </div>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
