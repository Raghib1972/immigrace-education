
// import React from "react";
// import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

// const ContactCTA = () => {
//   return (
//     <div
//       className="relative py-32 px-4 overflow-hidden bg-cover bg-center"
//       style={{
//         backgroundImage: "url('/images/cta/contact-cta-bg.jpg')",
//       }}
//     >
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Content */}
//       <div className="relative max-w-5xl mx-auto text-center text-white z-10">
        
//         {/* Badge */}
//         <div className="inline-block mb-8 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/30">
//           <span className="text-sm font-semibold uppercase tracking-wider">
//             Let’s Get Started
//           </span>
//         </div>

//         {/* Heading */}
//         <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
//           Ready to Take the{" "}
//           <span className="text-blue-300 underline decoration-blue-400">
//             Next Step?
//           </span>
//         </h2>

//         {/* Description */}
//         <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
//           Book a free consultation with our expert counsellors today and start
//           your journey to global success.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
          
//           {/* Call Button */}
//           <a href="tel:8130464466">
//             <button className="bg-white text-blue-700 px-10 py-5 rounded-xl text-lg font-bold shadow-xl hover:scale-105 transition flex items-center gap-3">
//               <FaPhoneAlt className="text-blue-600 text-xl" />
//               Book Free Consultation
//             </button>
//           </a>

//           {/* WhatsApp Button */}
//           <a
//             href="https://wa.me/918130464466?text=Hi%20I%20want%20to%20book%20a%20free%20consultation"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button className="bg-green-500 text-white px-10 py-5 rounded-xl text-lg font-bold shadow-xl hover:bg-green-600 hover:scale-105 transition flex items-center gap-3">
//               <FaWhatsapp className="text-2xl" />
//               WhatsApp Chat
//             </button>
//           </a>
//         </div>

//         {/* Trust Indicators */}
//         <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-200">
//           <span className="bg-white/10 px-5 py-2 rounded-full">100% Free</span>
//           <span className="bg-white/10 px-5 py-2 rounded-full">
//             No Obligations
//           </span>
//           <span className="bg-white/10 px-5 py-2 rounded-full">
//             Expert Guidance
//           </span>
//         </div>

//         {/* Footer Text */}
//         <p className="mt-8 text-sm text-gray-300">
//           Join 500+ students who've achieved their dreams with us
//         </p>
//       </div>

//       {/* Floating WhatsApp Button */}
//       <a
//         href="https://wa.me/918130464466"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition z-50"
//       >
//         <FaWhatsapp className="text-2xl" />
//       </a>
//     </div>
//   );
// };

// export default ContactCTA;





import { Phone, CheckCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <section
      className="relative py-24 md:py-32 px-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/cta/contact-cta-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
          <CheckCircle className="h-4 w-4 text-emerald-400" />
          <span className="text-xs md:text-sm font-medium tracking-wider uppercase">
            Let's Get Started
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight tracking-tight">
          Ready to Take the{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-sky-300">Next Step?</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-sky-500/30 -z-0"></span>
          </span>
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-200/90 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
          Book a free consultation with our expert counsellors today and start
          your journey to global success.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          {/* Call Button */}
          <Button
            asChild
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 text-white border border-white/20 shadow-lg px-8 py-6 text-base font-medium"
          >
            <a href="tel:+918130464466" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Book Free Consultation
            </a>
          </Button>

          {/* WhatsApp Button */}
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white shadow-lg px-8 py-6 text-base font-medium"
            asChild
          >
            <a
              href="https://wa.me/918130464466?text=Hi%20I%20want%20to%20book%20a%20free%20consultation"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <FaWhatsapp className="h-5 w-5" />
              WhatsApp Chat
            </a>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm mb-6">
          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 font-medium">
            100% Free
          </span>
          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 font-medium">
            No Obligations
          </span>
          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 font-medium">
            Expert Guidance
          </span>
        </div>

        {/* Social Proof */}
        <p className="text-sm text-gray-300/80 font-light">
          Join 500+ students who've achieved their dreams with us
        </p>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918130464466"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-200"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </section>
  );
};

export default ContactCTA;

