

import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

// Hero Images
import careerImg from "../../assets/hero/Career-Counseling.jpg";
import globalImg from "../../assets/hero/Global.jpg";
import testImg from "../../assets/hero/testprepation.jpg";

const heroImages = [careerImg, globalImg, testImg];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto image change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* BACKGROUND IMAGE SLIDER */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-slate-900/70"></div>

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl space-y-8">

          {/* TRUST BADGE */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-white">
              Trusted by 10,000+ Students Across 50+ Countries
            </span>
          </div>

          {/* HEADING – LESS BOLD */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white">
            Shaping Futures with{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-300 font-semibold">
                Informed Choices
              </span>
              <span className="absolute left-0 bottom-1.5 w-full h-2 bg-blue-400/20 -z-0"></span>
            </span>
          </h1>

          {/* SUBTEXT – CLEAN */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Expert career counselling, global education guidance, and test
            preparation — delivered with honesty, clarity, and student-first
            values.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">

            {/* CALL */}
            <a href="tel:+918130464466">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium text-lg shadow-lg flex items-center gap-3">
                <FaPhoneAlt className="text-white text-base" />
                Book Free Consultation
              </button>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/918130464466?text=Hello%20Immigrace%20Education,%20I%20want%20to%20book%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-medium text-lg shadow-lg flex items-center gap-3">
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </button>
            </a>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20 max-w-md">
            <div>
              <div className="text-4xl font-semibold text-white">10K+</div>
              <div className="text-sm text-blue-200">Students Guided</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-white">50+</div>
              <div className="text-sm text-blue-200">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-white">95%</div>
              <div className="text-sm text-blue-200">Success Rate</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
