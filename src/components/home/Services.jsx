
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Career Counselling",
      description: "Right career guidance at the right time.",
      icon: "💼",
      color: "from-blue-500 to-indigo-600",
      bgGlow: "bg-blue-500",
      link: "/career-counselling",
      features: ["Personalized guidance", "Career roadmap", "Industry insights"]
    },
    {
      title: "Study Abroad",
      description: "Australia, UK, Canada & Europe.",
      icon: "🌍",
      color: "from-indigo-500 to-purple-600",
      bgGlow: "bg-indigo-500",
      link: "/study-abroad",
      features: ["Visa assistance", "University selection", "Application support"]
    },
    {
      title: "Test Preparation",
      description: "IELTS & PTE readiness support.",
      icon: "📝",
      color: "from-purple-500 to-pink-600",
      bgGlow: "bg-purple-500",
      link: "/test-preparation",
      features: ["Expert trainers", "Mock tests", "Study materials"]
    },
  ];

  return (
    <div className="relative py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Immigrace Education
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions for your educational and career aspirations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group relative block cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative h-full bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-2 border-gray-100 dark:border-gray-700 hover:border-transparent overflow-hidden">
                
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>

                {/* Glow Effect */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 ${service.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

                {/* Icon Container */}
                <div className="relative mb-6 flex items-center justify-between">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg group-hover:rotate-12 group-hover:scale-110`}>
                    <span className="text-4xl filter drop-shadow-lg">{service.icon}</span>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-500">
                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="relative space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Line Effect */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>

              {/* Card Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-white dark:to-gray-200 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-white dark:text-gray-900 font-black text-lg">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link to="/contact">
            <button className="group relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-12 py-5 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 overflow-hidden border border-white/20">
              <span className="relative z-10 flex items-center gap-2">
                Get Started Today
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;