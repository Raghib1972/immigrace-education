
import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import logoImg from "../../assets/logo/immigrace-logo.png";

const Footer = () => {
  const services = [
    { name: "Career Counselling", path: "/career-counselling" },
    { name: "Study Abroad", path: "/study-abroad" },
    { name: "Test Preparation", path: "/test-preparation" },
  ];

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-300 overflow-hidden">
      
      {/* BACKGROUND SHAPES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* BRAND SECTION */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              
              {/* LOGO */}
              <div className="relative group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-900/50 transform group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <img
                    src={logoImg}
                    alt="Immigrace Education Logo"
                    className="w-9 h-9 object-contain bg-white p-1 rounded-md"
                  />
                </div>
                <div className="absolute inset-0 bg-blue-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Immigrace
                </h2>
                <p className="text-sm text-blue-400 font-medium">
                  Education Consultants
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Your trusted partner for career counselling, global education
              and test preparation with honest, expert guidance.
            </p>

            {/* CONTACT BUTTONS */}
            <div className="space-y-3">
              <a
                href="tel:+918130464466"
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-600/50 transform hover:scale-105"
              >
                <FaPhoneAlt />
                Call: +91 8130464466
              </a>

              <a
                href="https://wa.me/918130464466?text=Hello%20Immigrace%20Education,%20I%20want%20to%20book%20a%20free%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-600/50 transform hover:scale-105"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* OUR SERVICES */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">
              Our Services
            </h3>
            <ul className="space-y-4">
              {services.map((service, i) => (
                <li key={i}>
                  <a
                    href={service.path}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-slate-800 my-10"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © 2026 <span className="text-white font-semibold">Immigrace Education</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
  <a href="/privacy" className="hover:text-white">Privacy Policy</a>
  <span className="text-slate-700">•</span>
  <a href="/terms" className="hover:text-white">Terms of Service</a>
  <span className="text-slate-700">•</span>
  <a href="/refund" className="hover:text-white">Refund Policy</a>
</div>

          <span className="text-xs">
            Made smarter with{" "}
            <a
              href="https://texora.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              Texora AI
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
