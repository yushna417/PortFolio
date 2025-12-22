"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setIsMounted(true);
    
    // Handle scroll for navbar background
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Setup Intersection Observer to detect active section
    const sections = document.querySelectorAll("section[id], div[id]");
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) {
              setActiveSection(id);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-30% 0px -65% 0px", // Adjust these values to control when section becomes active
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      if (section.id) {
        observerRef.current?.observe(section);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
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

      setActiveSection(id);
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

  const isActive = (path: string) => {
    return activeSection === path;
  };

  if (!isMounted) return null;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 h-16 ${
        scrolled
          ? "bg-[#001542]/60 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-6 border-b border-gray-400 dark:border-b dark:border-gray-900 shadow-xl"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          href="/" 
          scroll={false}
          className={`text-2xl font-bold transition-all duration-300 hover:scale-105 ${
            scrolled ? "text-blue-600" : "text-blue-900 dark:text-slate-100"
          }`}
        >
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => scrollToSection(link.path)}
                className={`transition-all duration-300 font-medium text-base font-sans px-4 py-1 rounded-sm ${
                  isActive(link.path)
                    ? scrolled
                      ? "bg-blue-950 text-white shadow-md"
                      : "bg-blue-950 text-white shadow-md"
                    : scrolled
                      ? "text-slate-900 dark:text-slate-300 hover:text-blue-600 hover:bg-slate-100/50 dark:hover:bg-slate-700/50"
                      : "text-blue-950 dark:text-slate-200 hover:text-blue-600 hover:bg-white/30 dark:hover:bg-slate-700/30"
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
              className={`h-1 w-full transition-all ${
                mobileMenuOpen 
                  ? "rotate-45 translate-y-2 bg-white" 
                  : scrolled 
                    ? "bg-slate-700 dark:bg-slate-300" 
                    : "dark:bg-white bg-blue-950"
              }`}
            ></span>
            <span
              className={`h-1 w-full transition-all ${
                mobileMenuOpen 
                  ? "opacity-0" 
                  : scrolled 
                    ? "bg-slate-700 dark:bg-slate-300" 
                    : "dark:bg-white bg-blue-950"
              }`}
            ></span>
            <span
              className={`h-1 w-full transition-all ${
                mobileMenuOpen 
                  ? "-rotate-45 -translate-y-2 bg-white" 
                  : scrolled 
                    ? "bg-slate-700 dark:bg-slate-300" 
                    : "dark:bg-white bg-blue-950"
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
          <ul className="flex flex-col space-y-2 px-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.path)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-colors font-medium ${
                    isActive(link.path)
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:bg-slate-100/50 dark:hover:bg-slate-700/50"
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