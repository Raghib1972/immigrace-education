
// import { Link } from "react-router-dom";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       text: "Immigrace helped me choose the right course before moving to Australia. Very honest guidance!",
//       name: "Aman Verma",
//       role: "Student, Australia",
//       country: "🇦🇺",
//       rating: 5,
//     },
//     {
//       text: "Clear counselling and no fake promises. Highly recommended.",
//       name: "Sneha Patel",
//       role: "Student, UK",
//       country: "🇬🇧",
//       rating: 5,
//     },
//     {
//       text: "Best consultancy for career clarity and study abroad planning.",
//       name: "Rahul Singh",
//       role: "Student, Canada",
//       country: "🇨🇦",
//       rating: 5,
//     },
//   ];

//   return (
//     <section
//       className="relative py-32 px-4 bg-cover bg-center overflow-hidden"
//       style={{
//         backgroundImage: "url('/images/testimonials/testimonials-bg.jpg')",
//       }}
//     >
//       {/* DARK OVERLAY (VERY IMPORTANT FOR TEXT VISIBILITY) */}
//       <div className="absolute inset-0 bg-black/70"></div>

//       {/* GRID PATTERN */}
//       <div className="absolute inset-0 opacity-10">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
//             backgroundSize: "50px 50px",
//           }}
//         ></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* HEADER */}
//         <div className="text-center mb-20">
//           <span className="inline-block px-6 py-2 mb-4 rounded-full bg-white/10 text-white text-sm font-semibold">
//             TESTIMONIALS
//           </span>

//           <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
//             What <span className="text-blue-400">Students Say</span>
//           </h2>

//           <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//             Real stories from students who transformed their future with Immigrace Education
//           </p>

//           {/* STATS */}
//           <div className="flex justify-center gap-12 mt-10 text-white">
//             <div>
//               <div className="text-4xl font-bold">500+</div>
//               <p className="text-sm text-gray-300">Success Stories</p>
//             </div>
//             <div>
//               <div className="text-4xl font-bold">4.9/5</div>
//               <p className="text-sm text-gray-300">Average Rating</p>
//             </div>
//             <div>
//               <div className="text-4xl font-bold">15+</div>
//               <p className="text-sm text-gray-300">Countries</p>
//             </div>
//           </div>
//         </div>

//         {/* TESTIMONIAL CARDS */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((t, i) => (
//             <div
//               key={i}
//               className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/40 transition"
//             >
//               <div className="text-3xl mb-4">{t.country}</div>

//               <p className="text-white text-lg mb-6 leading-relaxed">
//                 “{t.text}”
//               </p>

//               <div className="flex gap-1 mb-4">
//                 {[...Array(t.rating)].map((_, i) => (
//                   <span key={i} className="text-yellow-400 text-xl">★</span>
//                 ))}
//               </div>

//               <div className="mt-6">
//                 <p className="text-white font-bold">{t.name}</p>
//                 <p className="text-gray-300 text-sm">{t.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
        
// <div className="text-center mt-20">
//   <Link
//     to="/success-stories"
//     className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition"
//   >
//     View All Success Stories →
//   </Link>
// </div>

//       </div>
//     </section>
//   );
// };

// export default Testimonials;



import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      text: "It's a pretty good IELTS academy. In beginning i was very scared for my speaking test but after just 4 weeks of speaking practice i was very confident on my speaking skills.",
      name: "Nilax Kolavennu",
      role: "Student, Canada",
      country: "CA",
      rating: 5,
    },
    {
      text: "I had a fantastic experience with Immigrace IELTS Academy! The coaching here is top-notch and truly student-focused. The trainers are highly knowledgeable, experienced, and incredibly supportive throughout the learning journey.",
      name: "Alex Martin",
      role: "Student, UK",
      country: "GB",
      rating: 5,
    },
    {
      text: "I joined Immigrace English Academy, and I really like the way Mr. Parvez teaches. He explains everything clearly and takes the time to clear every doubt with patience. I feel much more confident now.",
      name: "Dr. Bhawna Choudhary",
      role: "Student, UAE",
      country: "AE",
      rating: 5,
    },
    {
      text: "Parvez is a very professional and good teacher, he has helped me alot in clearing my PTE exam by giving me tips and techniques. I am really grateful to him for helping me out throughout.",
      name: "Amit Lal Agrawal",
      role: "Student, Australia",
      country: "AU",
      rating: 5,
    },
    {
      text: "Immigrace English Coaching has been instrumental in helping me clear my IELTS exam and bring me inch closer to my dream. Their excellent service and dedicated support have made all the difference.",
      name: "Rizwan Ahmad",
      role: "Student, USA",
      country: "US",
      rating: 5,
    },
    {
      text: "Parvez is an excellent and dedicated teacher who has helped me to achieve the desired scores In PTE (75+) after four failures. Thanks to immigrace coaching.",
      name: "Edina Neyburg",
      role: "Student, Australia",
      country: "AU",
      rating: 5,
    },
  ];

  return (
    <section
      className="relative py-20 px-4 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/testimonials/testimonials-bg.jpg')",
      }}
    >
      {/* DARK OVERLAY (VERY IMPORTANT FOR TEXT VISIBILITY) */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/85 to-slate-950/90"></div>

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 mb-4 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-300 text-sm font-semibold uppercase tracking-wider">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What <span className="text-blue-400">Students Say</span>
          </h2>

          <p className="text-base text-gray-300 max-w-2xl mx-auto mb-8">
            Real stories from students who transformed their future with Immigrace Education
          </p>

          {/* STATS */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
              <p className="text-sm text-gray-400 mt-1">Success Stories</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">4.9/5</div>
              <p className="text-sm text-gray-400 mt-1">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">15+</div>
              <p className="text-sm text-gray-400 mt-1">Countries</p>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-white/20 hover:border-blue-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 hover:bg-white/15"
            >
              {/* Top Section - Country and Stars */}
              <div className="flex items-center justify-between mb-4">
                <div className="px-3 py-1 bg-slate-800/80 rounded-md border border-slate-600/50">
                  <span className="text-slate-300 text-sm font-bold tracking-wider">{t.country}</span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-base">★</span>
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-white text-sm leading-relaxed mb-6 min-h-[120px] font-medium">
                "{t.text}"
              </p>

              {/* Student Info */}
              <div className="pt-4 border-t border-white/30">
                <p className="text-white font-bold text-sm">{t.name}</p>
                <p className="text-blue-300 text-xs mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/success-stories"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
          >
            View All Success Stories
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
