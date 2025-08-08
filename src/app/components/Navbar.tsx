"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
  ];

  if (!isMounted) return null;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          href="/" 
          className={`text-2xl font-bold transition-all duration-300 hover:scale-105 ${
            scrolled ? "text-blue-600" : "text-white dark:text-slate-100"
          }`}
        >
          <span className="text-blue-600">Dev</span>Portfolio
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`transition-all duration-300 font-medium hover:text-blue-600 ${
                  scrolled
                    ? "text-slate-700 dark:text-slate-300"
                    : "text-white dark:text-slate-200"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 flex flex-col space-y-1.5">
            <span
              className={`h-0.5 w-full transition-all ${
                mobileMenuOpen 
                  ? "rotate-45 translate-y-2 bg-white" 
                  : scrolled 
                    ? "bg-slate-700 dark:bg-slate-300" 
                    : "bg-white"
              }`}
            ></span>
            <span
              className={`h-0.5 w-full transition-all ${
                mobileMenuOpen 
                  ? "opacity-0" 
                  : scrolled 
                    ? "bg-slate-700 dark:bg-slate-300" 
                    : "bg-white"
              }`}
            ></span>
            <span
              className={`h-0.5 w-full transition-all ${
                mobileMenuOpen 
                  ? "-rotate-45 -translate-y-2 bg-white" 
                  : scrolled 
                    ? "bg-slate-700 dark:bg-slate-300" 
                    : "bg-white"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div 
          className={`md:hidden mt-2 mx-4 py-4 rounded-lg animate-slideUp ${
            scrolled 
              ? "bg-white/95 dark:bg-slate-800/95 shadow-lg" 
              : "bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm"
          }`}
        >
          <ul className="flex flex-col space-y-4 px-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={`block transition-colors font-medium hover:text-blue-600 ${
                    scrolled 
                      ? "text-slate-700 dark:text-slate-300" 
                      : "text-slate-700 dark:text-slate-300"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
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