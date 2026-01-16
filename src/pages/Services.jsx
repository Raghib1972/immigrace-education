

import { Link } from "react-router-dom";
import ContactCTA from "../components/common/ContactCTA";

const Services = () => {
  const services = [
    {
      title: "Career Counselling",
      desc: "Career clarity through aptitude assessment and expert one-on-one counselling.",
      link: "/career-counselling",
    },
    {
      title: "Study Abroad",
      desc: "End-to-end guidance for overseas education including admissions and visas.",
      link: "/study-abroad",
    },
    {
      title: "Test Preparation",
      desc: "IELTS, PTE and other exam preparation with expert support.",
      link: "/test-preparation",
    },
    {
      title: "School Programs",
      desc: "Career awareness workshops and counselling programs for schools.",
      link: "/schools",
    },
  ];

  return (
    <section className="pt-24 pb-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We provide ethical, transparent and student-first education guidance
            services to help you make the right decisions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {service.desc}
              </p>

              <Link
                to={service.link}
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <ContactCTA />
    </section>
  );
};

export default Services;
