
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Immigrace helped me choose the right course before moving to Australia. Very honest guidance!",
      name: "Aman Verma",
      role: "Student, Australia",
      country: "🇦🇺",
      rating: 5,
    },
    {
      text: "Clear counselling and no fake promises. Highly recommended.",
      name: "Sneha Patel",
      role: "Student, UK",
      country: "🇬🇧",
      rating: 5,
    },
    {
      text: "Best consultancy for career clarity and study abroad planning.",
      name: "Rahul Singh",
      role: "Student, Canada",
      country: "🇨🇦",
      rating: 5,
    },
  ];

  return (
    <section
      className="relative py-32 px-4 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/testimonials/testimonials-bg.jpg')",
      }}
    >
      {/* DARK OVERLAY (VERY IMPORTANT FOR TEXT VISIBILITY) */}
      <div className="absolute inset-0 bg-black/70"></div>

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
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 mb-4 rounded-full bg-white/10 text-white text-sm font-semibold">
            TESTIMONIALS
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            What <span className="text-blue-400">Students Say</span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real stories from students who transformed their future with Immigrace Education
          </p>

          {/* STATS */}
          <div className="flex justify-center gap-12 mt-10 text-white">
            <div>
              <div className="text-4xl font-bold">500+</div>
              <p className="text-sm text-gray-300">Success Stories</p>
            </div>
            <div>
              <div className="text-4xl font-bold">4.9/5</div>
              <p className="text-sm text-gray-300">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold">15+</div>
              <p className="text-sm text-gray-300">Countries</p>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/40 transition"
            >
              <div className="text-3xl mb-4">{t.country}</div>

              <p className="text-white text-lg mb-6 leading-relaxed">
                “{t.text}”
              </p>

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>

              <div className="mt-6">
                <p className="text-white font-bold">{t.name}</p>
                <p className="text-gray-300 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        
<div className="text-center mt-20">
  <Link
    to="/success-stories"
    className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition"
  >
    View All Success Stories →
  </Link>
</div>

      </div>
    </section>
  );
};

export default Testimonials;
