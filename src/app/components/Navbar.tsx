"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skill" },
    { name: "Experience", path: "#experience" },
    { name: "Projects", path: "#project" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-16  backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        <div className="flex gap-4">
          <img src="images/logo1.png
          " className="h-8" />
          <Link
            href="/"
            className="text-2xl font-bold text-slate-100 hover:scale-105 transition-transform"
          >
            Portfolio
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className="px-4 py-2 rounded-sm text-slate-400 font-medium transition-all
                  hover:bg-white/10 hover:text-slate-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 flex flex-col space-y-1.5">
            <span
              className={`h-1 w-full bg-white transition-all ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-white transition-all ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-white transition-all ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mx-4 mt-2 rounded-lg bg-[#001542]/95 backdrop-blur-md shadow-lg">
          <ul className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-md text-slate-200 font-medium
                    hover:bg-white/10 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
