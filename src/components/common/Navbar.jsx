
import React, { useEffect, useState } from "react";
import { FaBars, FaPhoneAlt, FaTimes, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo/immigrace-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg"
            : "bg-white/90 backdrop-blur-md shadow"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            
            {/* LOGO */}
            <a
              href="/"
              className="flex items-center gap-2 sm:gap-3 group"
            >
              <div className="relative">
                <img
                  src={logo}
                  alt="Immigrace Education Logo"
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div>
                <p className="font-bold text-gray-900 leading-none text-base sm:text-lg group-hover:text-blue-600 transition-colors">
                  Immigrace
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Education
                </p>
              </div>
            </a>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
              <a
                href="/"
                className="relative text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="/about"
                className="relative text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="/career-counselling"
                className="relative text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
              >
                Career Counselling
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="/study-abroad"
                className="relative text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
              >
                Study Abroad
                <span className="absolute -bottom-1 left-0 w-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="/test-preparation"
                className="relative text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
              >
                Test Preparation
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="/contact"
                className="relative text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            </div>

            {/* DESKTOP CTA BUTTONS */}
            <div className="hidden lg:flex items-center gap-3">
              {/* CALL */}
              <a
                href="tel:+918130464466"
                className="group relative flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl hover:shadow-blue-500/50"
              >
                <FaPhoneAlt className="group-hover:rotate-12 transition-transform" />
                Book Consultation
                <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md -z-10"></div>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/918130464466"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-11 h-11 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-xl hover:shadow-green-500/50"
              >
                <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md -z-10"></div>
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <FaBars
                  className={`absolute inset-0 transition-all duration-300 ${
                    open ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                  }`}
                />
                <FaTimes
                  className={`absolute inset-0 transition-all duration-300 ${
                    open ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-t border-gray-100 px-4 sm:px-6 py-6 space-y-1 shadow-lg">
            <a
              href="/"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200"
            >
              Home
            </a>
            <a
              href="/about"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200"
            >
              About
            </a>
            <a
              href="/career-counselling"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200"
            >
              Career Counselling
            </a>
            <a
              href="/study-abroad"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200"
            >
              Study Abroad
            </a>
            <a
              href="/test-preparation"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200"
            >
              Test Preparation
            </a>
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200"
            >
              Contact
            </a>

            {/* MOBILE CTA BUTTONS */}
            <div className="pt-4 space-y-3">
              <a
                href="tel:+918130464466"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <FaPhoneAlt />
                Book Free Consultation
              </a>

              <a
                href="https://wa.me/918130464466"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;