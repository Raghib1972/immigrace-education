import React, { useState } from "react";
import {
  FaQuoteLeft,
  FaStar,
  FaGraduationCap,
  FaGlobe,
  FaBook,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

// ✅ Background Image
import successBg from "../assets/success/success-bg.jpg";

const SuccessStories = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const stories = [
    {
      id: 1,
      name: "Priya Sharma",
      image: "👩‍🎓",
      university: "University of Toronto",
      country: "Canada",
      course: "Masters in Computer Science",
      category: "study-abroad",
      testimonial:
        "Immigrace Education made my dream of studying in Canada a reality. Their guidance was clear, honest and extremely supportive.",
      rating: 5,
    },
    {
      id: 2,
      name: "Rahul Verma",
      image: "👨‍💼",
      university: "IIM Ahmedabad",
      country: "India",
      course: "MBA",
      category: "career-counselling",
      testimonial:
        "Career counselling sessions helped me choose the right path. Today I am studying at my dream institute.",
      rating: 5,
    },
    {
      id: 3,
      name: "Anjali Patel",
      image: "👩‍🔬",
      university: "University of Melbourne",
      country: "Australia",
      course: "PhD in Biotechnology",
      category: "study-abroad",
      testimonial:
        "IELTS preparation was excellent. Mock tests and feedback helped me score 8.0 confidently.",
      rating: 5,
    },
  ];

  const categories = [
    { id: "all", name: "All Stories", icon: <FaGraduationCap /> },
    { id: "study-abroad", name: "Study Abroad", icon: <FaGlobe /> },
    { id: "career-counselling", name: "Career Success", icon: <FaBook /> },
  ];

  const filteredStories =
    activeCategory === "all"
      ? stories
      : stories.filter((s) => s.category === activeCategory);

  const stats = [
    { number: "500+", label: "Students Placed" },
    { number: "25+", label: "Countries" },
    { number: "100+", label: "Universities" },
    { number: "98%", label: "Visa Success" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[420px] pt-24 flex items-center justify-center"
        style={{
          backgroundImage: `url(${successBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Success Stories
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Real stories from real students who achieved their dreams with our guidance
          </p>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <p className="text-3xl font-bold text-blue-600">
                {stat.number}
              </p>
              <p className="text-gray-600 text-sm mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FILTER ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 shadow"
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* ================= STORIES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="flex gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl">
                  {story.image}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{story.name}</h3>
                  <p className="text-blue-600 text-sm">{story.course}</p>
                  <p className="text-gray-500 text-sm">
                    {story.university} • {story.country}
                  </p>
                </div>
              </div>

              <FaQuoteLeft className="text-blue-200 text-3xl mb-3" />
              <p className="text-gray-700 italic">
                {story.testimonial}
              </p>

              <div className="flex gap-1 mt-6">
                {[...Array(story.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-blue-600 py-16 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Write Your Success Story?
        </h2>
        <p className="text-lg mb-8">
          Book a free consultation with our experts today
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+918130464466"
            className="flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-xl font-bold"
          >
            <FaPhoneAlt /> Call Now
          </a>

          <a
            href="https://wa.me/918130464466"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 px-8 py-3 rounded-xl font-bold"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
