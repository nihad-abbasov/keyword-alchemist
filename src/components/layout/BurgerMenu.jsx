"use client";

import { useState } from "react";
import Link from "next/link";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex lg:hidden">
      {/* Burger Icon */}
      <button
        onClick={toggleMenu}
        className="z-50 flex items-center text-black"
      >
        <div className="flex flex-col items-end space-y-1">
          <div className="w-3 h-0.5 bg-current"></div>
          <div className="w-5 h-0.5 bg-current"></div>
          <div className="w-7 h-0.5 bg-current"></div>
        </div>
      </button>

      {/* Backdrop with smooth fade in */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Menu Content with slide in animation */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 p-5 bg-white shadow-xl transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button onClick={toggleMenu} className="mb-5">
          <svg
            className="fill-current h-6 w-6 text-gray-700"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.396 7.349 14.049a1.2 1.2 0 1 1-1.697-1.697L8.603 9.699 5.652 6.748a1.2 1.2 0 1 1 1.697-1.697L10 7.302l2.651-2.651a1.2 1.2 0 1 1 1.697 1.697L11.397 9.699l2.951 2.951a1.2 1.2 0 0 1 0 1.699z" />
          </svg>
        </button>

        {/* Menu Items */}
        <a
          href="/about"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          About
        </a>
        <a
          href="/contact"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Contact
        </a>
        <a
          href="/privacy"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Privacy
        </a>
      </div>
    </div>
  );
};
