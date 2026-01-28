
// import React, { useEffect, useState } from "react";
// import { FaWhatsapp } from "react-icons/fa";

// // Hero Images
// import careerImg from "../../assets/hero/Career-Counseling.jpg";
// import globalImg from "../../assets/hero/Global.jpg";
// import studyAbroadImg from "../../assets/hero/StudyAbroad.jpg";
// import testImg from "../../assets/hero/testprepation.jpg";

// const heroImages = [careerImg, globalImg, testImg, studyAbroadImg];

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto image change
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % heroImages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden">

//       {/* BACKGROUND IMAGE SLIDER */}
//       {heroImages.map((img, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === currentIndex ? "opacity-100" : "opacity-0"
//           }`}
//           style={{
//             backgroundImage: `url(${img})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//       ))}

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-blue-900/60"></div>

//       {/* ANIMATED SHAPES */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
//         <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
//       </div>

//       {/* GRID OVERLAY */}
//       <div className="absolute inset-0 opacity-5">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
//             backgroundSize: "50px 50px",
//           }}
//         ></div>
//       </div>

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
//         <div className="max-w-4xl mx-auto lg:mx-0 space-y-8">

//           {/* TRUST BADGE */}
//           <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 shadow-lg">
//             <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
//             <span className="text-sm text-white">
//               Trusted by 10,000+ Students • 50+ Countries
//             </span>
//           </div>

//           {/* HEADING */}
//           <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
//             Shaping Futures with{" "}
//             <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent font-extrabold animate-gradient">
//               Informed Choices
//             </span>
//           </h1>

//           {/* SUBTITLE */}
//           <p className="text-lg text-gray-200 max-w-2xl">
//             We provide professional training for IELTS, PTE, SAT, GMAT, GRE,
//             Duolingo, CELPIP, German, French, Spoken English along with career
//             counselling and study abroad guidance.
//           </p>

//           {/* SLIDE DOTS */}
//           <div className="flex gap-2">
//             {heroImages.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setCurrentIndex(idx)}
//                 className={`h-1.5 rounded-full transition-all ${
//                   idx === currentIndex
//                     ? "w-8 bg-blue-400"
//                     : "w-1.5 bg-gray-500"
//                 }`}
//               ></button>
//             ))}
//           </div>

//           {/* CTA BUTTONS */}
//           <div className="flex flex-col sm:flex-row gap-4 pt-4">

//             {/* START TEST PREP NOW (NO CALL ICON) */}
//             <a
//               href="https://prep.immigraceducation.com/"
//               className="w-full sm:w-auto"
//             >
//               <button className="w-full sm:w-auto group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl transition-all hover:scale-105 flex items-center justify-center">
//                 <span>Start Test Prep Now</span>
//               </button>
//             </a>

//             {/* WHATSAPP BUTTON */}
//             <a
//               href="https://wa.me/918130464466?text=Hello%20Immigrace%20Education,%20I%20want%20to%20book%20a%20free%20consultation."
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-full sm:w-auto"
//             >
//               <button className="w-full sm:w-auto group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3">
//                 <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
//                 <span>WhatsApp Us</span>
//               </button>
//             </a>

//           </div>

//         </div>
//       </div>

//       <style>{`
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//       `}</style>

//     </section>
//   );
// };

// export default Hero;  old 

import { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaArrowRight,
  FaGraduationCap,
  FaGlobe,
  FaPencilAlt,
  FaPlane,
} from "react-icons/fa";

// Hero Images
import careerImg from "../../assets/hero/Career-Counseling.jpg";
import globalImg from "../../assets/hero/Global.jpg";
import studyAbroadImg from "../../assets/hero/StudyAbroad.jpg";
import testImg from "../../assets/hero/testprepation.jpg";

const carouselData = [
  {
    image: careerImg,
    icon: FaGraduationCap,
    badge: "Expert Career Guidance",
    stat: "15+ Years Experience",
    title: "Shape Your Future with",
    highlight: "Career Counseling",
    subtitle:
      "Get personalised career guidance from industry experts and choose the right path with confidence.",
    accentColor: "from-amber-400 via-orange-400 to-amber-400",
    glowColor: "bg-amber-500/20",
  },
  {
    image: globalImg,
    icon: FaGlobe,
    badge: "Global Network",
    stat: "50+ Partner Universities",
    title: "Connect with the",
    highlight: "World's Best",
    subtitle:
      "Explore top universities across the globe and unlock international education opportunities.",
    accentColor: "from-emerald-400 via-teal-400 to-emerald-400",
    glowColor: "bg-emerald-500/20",
  },
  {
    image: testImg,
    icon: FaPencilAlt,
    badge: "Test Preparation",
    stat: "95% Success Rate",
    title: "Crack Exams with",
    highlight: "Expert Training",
    subtitle:
      "IELTS, PTE, SAT, GMAT, GRE, Duolingo & more — structured training that delivers results.",
    accentColor: "from-blue-400 via-cyan-400 to-blue-400",
    glowColor: "bg-blue-500/20",
  },
  {
    image: studyAbroadImg,
    icon: FaPlane,
    badge: "Study Abroad",
    stat: "10,000+ Students Guided",
    title: "Study Abroad with",
    highlight: "Confidence",
    subtitle:
      "From counselling to visa support, we guide you at every step of your study abroad journey.",
    accentColor: "from-violet-400 via-purple-400 to-violet-400",
    glowColor: "bg-violet-500/20",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % carouselData.length);
        setIsAnimating(false);
      }, 300);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = carouselData[currentIndex];
  const Icon = currentSlide.icon;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">

      {/* Background Slider */}
      {carouselData.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1500 ${
            idx === currentIndex ? "opacity-100 scale-105" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-900/65 to-blue-950/70 backdrop-blur-[1px]" />

      {/* Glow Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-20 -left-20 w-96 h-96 ${currentSlide.glowColor} rounded-full blur-[120px]`}
        />
        <div
          className={`absolute bottom-20 -right-20 w-[500px] h-[500px] ${currentSlide.glowColor} rounded-full blur-[120px]`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl space-y-8">

          {/* Badge */}
          <div
            className={`flex items-center gap-4 transition-all duration-500 ${
              isAnimating ? "opacity-0 translate-y-3" : "opacity-100"
            }`}
          >
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentSlide.accentColor} p-[2px]`}
            >
              <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                <Icon className="text-white text-xl" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="px-4 py-1 rounded-full bg-white/10 border border-white/20 text-sm text-white font-medium">
                {currentSlide.badge}
              </span>
              <span className="text-sm text-slate-300 font-normal">
                {currentSlide.stat}
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white transition-all duration-500 ${
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100"
            }`}
          >
            {currentSlide.title}
            <br />
            <span
              className={`bg-gradient-to-r ${currentSlide.accentColor} bg-clip-text text-transparent font-semibold`}
            >
              {currentSlide.highlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
            {currentSlide.subtitle}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="https://prep.immigraceducation.com/" className="group">
              <button
                className={`flex items-center gap-3 rounded-xl bg-gradient-to-r ${currentSlide.accentColor} px-8 py-4 text-white font-medium shadow-lg transition hover:scale-[1.03]`}
              >
                Start Test Prep
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </a>

            <a
              href="https://wa.me/918130464466?text=Hello%20Immigrace%20Education,%20I%20want%20to%20book%20a%20free%20consultation."
              target="_blank"
              rel="noreferrer"
            >
              <button className="flex items-center gap-3 rounded-xl bg-green-600 px-8 py-4 text-white font-medium shadow-lg hover:bg-green-700 transition">
                <FaWhatsapp className="text-xl" />
                Free Consultation
              </button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
