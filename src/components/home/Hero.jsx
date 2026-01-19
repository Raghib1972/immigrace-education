
import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

// Hero Images
import careerImg from "../../assets/hero/Career-Counseling.jpg";
import globalImg from "../../assets/hero/Global.jpg";
import studyAbroadImg from "../../assets/hero/StudyAbroad.jpg";
import testImg from "../../assets/hero/testprepation.jpg";

const heroImages = [careerImg, globalImg, testImg, studyAbroadImg];

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

      {/* DARK OVERLAY WITH GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-blue-900/60"></div>

      {/* ANIMATED GEOMETRIC SHAPES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* SUBTLE GRID OVERLAY */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
        <div className="max-w-4xl mx-auto lg:mx-0 space-y-6 sm:space-y-8">

          {/* TRUST BADGE */}
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg hover:bg-white/15 transition-all duration-300">
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></span>
            <span className="text-xs sm:text-sm font-medium text-white">
              Trusted by 10,000+ Students • 50+ Countries
            </span>
          </div>

          {/* MAIN HEADING */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Shaping Futures with{" "}
            <span className="relative inline-block mt-2 sm:mt-0">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent font-extrabold animate-gradient">
                Informed Choices
              </span>
              <span className="absolute left-0 bottom-1 sm:bottom-2 w-full h-3 sm:h-4 bg-gradient-to-r from-blue-500/40 via-cyan-400/40 to-blue-500/40 blur-sm"></span>
            </span>
          </h1>

          {/* SUBTITLE */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed font-light">
            Expert career counselling, global education guidance, and test preparation — delivered with honesty, clarity, and student-first values.
          </p>

          {/* SLIDE PROGRESS DOTS */}
          <div className="flex items-center gap-2 pt-2">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex 
                    ? "w-8 bg-blue-400 shadow-lg shadow-blue-400/50" 
                    : "w-1.5 bg-gray-500 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
            <a href="tel:+918130464466" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                <FaPhoneAlt className="text-base sm:text-lg group-hover:rotate-12 transition-transform" />
                <span>Book Free Consultation</span>
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10"></div>
              </button>
            </a>

            <a
              href="https://wa.me/918130464466?text=Hello%20Immigrace%20Education,%20I%20want%20to%20book%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                <FaWhatsapp className="text-xl sm:text-2xl group-hover:scale-110 transition-transform" />
                <span>WhatsApp Us</span>
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10"></div>
              </button>
            </a>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-white/20 max-w-lg">
            <div className="text-center sm:text-left group cursor-default">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
                10K+
              </div>
              <div className="text-xs sm:text-sm text-blue-200/80 font-medium">Students Guided</div>
            </div>
            <div className="text-center sm:text-left group cursor-default">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-purple-400 to-pink-300 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
                50+
              </div>
              <div className="text-xs sm:text-sm text-purple-200/80 font-medium">Countries</div>
            </div>
            <div className="text-center sm:text-left group cursor-default">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-green-400 to-emerald-300 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
                95%
              </div>
              <div className="text-xs sm:text-sm text-green-200/80 font-medium">Success Rate</div>
            </div>
          </div>

        </div>
      </div>

      {/* FLOATING SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/60 text-sm font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;  



