
import { Link } from "react-router-dom";
import careerImg from "../../assets/services/career.jpg";
import studyImg from "../../assets/services/study-abroad.jpg";
import testImg from "../../assets/services/test-preparation.jpg";

const Services = () => {
  const services = [
    {
      title: "Career Counselling",
      description: "Right career guidance at the right time.",
      image: careerImg,
      position: "object-center",
      color: "from-blue-500 to-indigo-600",
      link: "/career-counselling",
      features: ["Personalized guidance", "Career roadmap", "Industry insights"],
    },
    {
      title: "Study Abroad",
      description: "Australia, UK, Canada & Europe.",
      image: studyImg,
      position: "object-top",
      color: "from-indigo-500 to-purple-600",
      link: "/study-abroad",
      features: ["Visa assistance", "University selection", "Application support"],
    },
    {
      title: "Test Preparation",
      description: "IELTS & PTE readiness support.",
      image: testImg,
      position: "object-center",
      color: "from-purple-500 to-pink-600",
      link: "/test-preparation",
      features: ["Expert trainers", "Mock tests", "Study materials"],
    },
  ];

  return (
    <section className="relative py-28 px-4 overflow-hidden">

      {/* 🔥 DARK PREMIUM BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>

      {/* SUBTLE LIGHT EFFECTS */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="inline-block mb-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold px-6 py-2 rounded-full">
            Why We’re Different
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Immigrace Education
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            We combine personalized guidance with industry expertise to help you
            achieve your academic and career goals.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="group relative">

              <div className="relative bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:-translate-y-3 transition-all duration-500">

                {/* IMAGE */}
                <div className="relative mb-6 h-48 overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover ${service.position} transition-transform duration-700 group-hover:scale-110`}
                  />
                  {/* DARK OVERLAY FOR SHARPNESS */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>

                {/* FEATURES */}
                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-200">
                      <span
                        className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center`}
                      >
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* NUMBER BADGE */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
