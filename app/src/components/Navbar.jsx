import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/80 backdrop-blur-lg border-b border-slate-100" : "bg-slate-950/20 backdrop-blur-5m"}`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 sm:px-6">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <img src="/tailwind-css-icon.png" alt="logo" className="w-8 h-8" />
            <span className="text-lg sm:text-xl font-medium">
              <span className="text-blue-400">Charles</span>
              <span className="text-white">.Dev</span>
            </span>
          </div>
          <div className="md:flex items-center space-x-6 lg:space-x-8 hidden">
            <a
              href="#featuress"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Testimonial
            </a>
          </div>
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <a
              href="#featuress"
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
              onClick={() => setMenuOpen(false)}
            >
              Testimonial
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
