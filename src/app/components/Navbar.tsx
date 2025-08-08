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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Skills", path: "skill" },
    { name: "Experience", path: "experience" },
    { name: "Projects", path: "project" },
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
          scroll = {false}
          className={`text-2xl font-bold transition-all duration-300 hover:scale-105 ${
            scrolled ? "text-blue-600" : "text-white dark:text-slate-100"
          }`}
        >
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => scrollToSection(link.path)}
                className={`transition-all duration-300 font-medium hover:text-blue-600 ${
                  scrolled
                    ? "text-slate-700 dark:text-slate-300"
                    : "text-white dark:text-slate-200"
                }`}
              >
                {link.name}
              </button>
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
                <button
                  onClick={() => scrollToSection(link.path)}
                  className={`block transition-colors font-medium hover:text-blue-600 ${
                    scrolled 
                      ? "text-slate-700 dark:text-slate-300" 
                      : "text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;