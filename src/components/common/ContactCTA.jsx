
import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const ContactCTA = () => {
  return (
    <div
      className="relative py-32 px-4 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/cta/contact-cta-bg.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center text-white z-10">
        
        {/* Badge */}
        <div className="inline-block mb-8 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/30">
          <span className="text-sm font-semibold uppercase tracking-wider">
            Let’s Get Started
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          Ready to Take the{" "}
          <span className="text-blue-300 underline decoration-blue-400">
            Next Step?
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
          Book a free consultation with our expert counsellors today and start
          your journey to global success.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
          
          {/* Call Button */}
          <a href="tel:8130464466">
            <button className="bg-white text-blue-700 px-10 py-5 rounded-xl text-lg font-bold shadow-xl hover:scale-105 transition flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600 text-xl" />
              Book Free Consultation
            </button>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/918130464466?text=Hi%20I%20want%20to%20book%20a%20free%20consultation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-green-500 text-white px-10 py-5 rounded-xl text-lg font-bold shadow-xl hover:bg-green-600 hover:scale-105 transition flex items-center gap-3">
              <FaWhatsapp className="text-2xl" />
              WhatsApp Chat
            </button>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-200">
          <span className="bg-white/10 px-5 py-2 rounded-full">100% Free</span>
          <span className="bg-white/10 px-5 py-2 rounded-full">
            No Obligations
          </span>
          <span className="bg-white/10 px-5 py-2 rounded-full">
            Expert Guidance
          </span>
        </div>

        {/* Footer Text */}
        <p className="mt-8 text-sm text-gray-300">
          Join 500+ students who've achieved their dreams with us
        </p>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918130464466"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition z-50"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
};

export default ContactCTA;
