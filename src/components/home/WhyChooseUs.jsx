
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
      className="relative py-24 px-4 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/home/why-choose-immigrace.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90"></div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>Why We're Different</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Immigrace Education
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We combine personalized guidance with industry expertise to help you
            achieve your academic and career goals
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <div className={`absolute -top-20 -right-20 w-40 h-40 ${item.bgColor} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

              <div className="absolute top-4 right-4 w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-sm font-black text-gray-500 dark:text-gray-400">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <span className="text-4xl">{item.icon}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {item.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                {item.description}
              </p>

              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm">
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
