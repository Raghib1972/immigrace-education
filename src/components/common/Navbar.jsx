
import React, { useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

          {/* LOGO */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
              🎓
            </div>
            <div>
              <p className="font-bold text-gray-900 leading-none">Immigrace</p>
              <p className="text-xs text-gray-500">Education</p>
            </div>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex gap-6 text-sm font-medium text-gray-700">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/about" className="hover:text-blue-600">About</a>
            <a href="/career-counselling" className="hover:text-blue-600">Career Counselling</a>
            <a href="/study-abroad" className="hover:text-blue-600">Study Abroad</a>
            <a href="/test-preparation" className="hover:text-blue-600">Test Preparation</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
          </div>

          {/* DESKTOP CTA BUTTONS */}
          <div className="hidden lg:flex items-center gap-3">
            {/* CALL */}
            <a
              href="tel:+918130464466"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 
              text-white px-5 py-2 rounded-lg text-sm font-semibold transition"
            >
              <FaPhoneAlt />
              Book Consultation
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/918130464466"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 
              text-white px-4 py-2 rounded-lg transition"
            >
              <FaWhatsapp className="text-lg" />
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex items-center justify-center 
            bg-blue-600 text-white rounded-lg"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden bg-white border-t px-6 py-4 space-y-3">
            <a href="/" className="block">Home</a>
            <a href="/about" className="block">About</a>
            <a href="/career-counselling" className="block">Career Counselling</a>
            <a href="/study-abroad" className="block">Study Abroad</a>
            <a href="/test-preparation" className="block">Test Preparation</a>
            <a href="/contact" className="block">Contact</a>

            {/* MOBILE CTA */}
            <a
              href="tel:+918130464466"
              className="flex items-center justify-center gap-2 mt-4 
              bg-blue-600 text-white py-3 rounded-lg font-semibold"
            >
              <FaPhoneAlt />
              Book Free Consultation
            </a>

            <a
              href="https://wa.me/918130464466"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 
              bg-green-500 text-white py-3 rounded-lg font-semibold"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
