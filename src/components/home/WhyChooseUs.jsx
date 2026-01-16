
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Career-First Approach",
      description: "We focus on what to study before where to study.",
      icon: "🎯",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-500",
      link: "/career-counselling",
    },
    {
      title: "Expert Counsellors",
      description: "Certified counsellors with real industry experience.",
      icon: "👨‍🏫",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-500",
      link: "/career-counselling",
    },
    {
      title: "Global Opportunities",
      description: "Guidance for Australia, UK, Canada & Europe.",
      icon: "🌐",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-500",
      link: "/study-abroad",
    },
    {
      title: "Ethical Guidance",
      description: "No false promises. Transparent & honest counselling.",
      icon: "⭐",
      color: "from-yellow-500 to-amber-600",
      bgColor: "bg-yellow-500",
      link: "/about",
    },
  ];

  return (
    <section
      className="relative py-28 px-4 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/home/why-choose-immigrace.jpg')",
      }}
    >
      {/* 🔥 DARK PREMIUM OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/75"></div>

      {/* SUBTLE GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg mb-6">
            ⭐ Why We’re Different
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Immigrace Education
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We combine personalized guidance with industry expertise to help you
            achieve your academic and career goals.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group relative bg-slate-900/70 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              {/* HOVER GRADIENT */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
              />

              {/* NUMBER */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-black/40 rounded-full flex items-center justify-center text-sm font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* ICON */}
              <div className="relative mb-6">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <span className="text-4xl">{item.icon}</span>
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold mb-3 text-white">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-sm mb-6">
                {item.description}
              </p>

              <div className="text-blue-400 font-semibold text-sm">
                Learn More →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
