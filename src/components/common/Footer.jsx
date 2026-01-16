

import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const services = [
    {
      name: "Career Counselling",
      path: "/career-counselling",
    },
    {
      name: "Study Abroad",
      path: "/study-abroad",
    },
    {
      name: "Test Preparation",
      path: "/test-preparation",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg shadow-blue-900/50">
                🎓
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">Immigrace</h2>
                <p className="text-sm text-blue-400 font-medium">Education Consultants</p>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Your trusted partner for career counselling, global education
              and test preparation with honest, expert guidance.
            </p>

            {/* CALL + WHATSAPP BUTTONS */}
            <div className="mt-6 space-y-3">

              {/* CALL */}
              <a
                href="tel:+918130464466"
                className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-600/50 hover:scale-105"
              >
                <FaPhoneAlt className="text-white text-base" />
                <span>Call: +91 8130464466</span>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/918130464466?text=Hello%20Immigrace%20Education,%20I%20want%20to%20book%20a%20free%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-600/50 hover:scale-105"
              >
                <FaWhatsapp className="text-white text-lg" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* OUR SERVICES */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-600 rounded"></span>
              Our Services
            </h3>

            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-600 rounded"></span>
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link to="/about" className="group flex items-center gap-3 hover:text-white transition-all duration-300">
                  <span className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="group flex items-center gap-3 hover:text-white transition-all duration-300">
                  <span className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Success Stories</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="group flex items-center gap-3 hover:text-white transition-all duration-300">
                  <span className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Blog</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="group flex items-center gap-3 hover:text-white transition-all duration-300">
                  <span className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-700 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © 2026 <span className="text-white font-semibold">Immigrace Education</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <span className="text-slate-700">•</span>
            <Link to="/terms" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;