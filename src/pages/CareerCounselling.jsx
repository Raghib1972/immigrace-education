
import ContactCTA from "../components/common/ContactCTA";

// Images
import careerImg from "../assets/career/Career Counselling.jpg";
import processImg from "../assets/career/Our Counselling Process.jpg";
import mattersImg from "../assets/career/Why Career Counselling Matters.jpg";

const CareerCounselling = () => {
  const steps = [
    {
      step: "01",
      title: "Career Assessment",
      desc: "We evaluate your interests, strengths, aptitude and personality.",
    },
    {
      step: "02",
      title: "One-on-One Counselling",
      desc: "Personal session with expert counsellors to understand your goals.",
    },
    {
      step: "03",
      title: "Career Path Planning",
      desc: "Clear roadmap of courses, skills and future opportunities.",
    },
    {
      step: "04",
      title: "Action & Guidance",
      desc: "Next steps for education, exams, colleges or overseas options.",
    },
  ];

  const benefits = [
    "Clarity before choosing a course or country",
    "Avoid wrong career decisions",
    "Personalized guidance (not generic advice)",
    "Ethical and transparent counselling",
    "Support for both students and parents",
  ];

  return (
    <div className="bg-white">

      {/* ===== HERO SECTION ===== */}
      <section
        className="relative h-[80vh] md:h-[85vh] flex items-center justify-center bg-cover"
        style={{
          backgroundImage: `url(${careerImg})`,
          backgroundPosition: "top center", // ✅ FACE FIX
        }}
      >
        {/* Overlay (light for face visibility) */}
        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-medium mb-4 tracking-tight">
            Career <span className="text-blue-300">Counselling</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed font-light">
            Helping students make informed career decisions before choosing
            courses, colleges or countries.
          </p>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section
        className="relative py-28 bg-cover"
        style={{
          backgroundImage: `url(${processImg})`,
          backgroundPosition: "top center",
        }}
      >
        <div className="absolute inset-0 bg-white/90"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-medium text-center mb-14 tracking-tight">
            Our Counselling Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition"
              >
                <div className="text-blue-500 text-2xl font-semibold mb-3">
                  {item.step}
                </div>

                <h3 className="font-medium mb-2 text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY IT MATTERS ===== */}
      <section
        className="relative py-28 bg-cover"
        style={{
          backgroundImage: `url(${mattersImg})`,
          backgroundPosition: "top center",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-white">
          <h2 className="text-3xl font-medium text-center mb-10 tracking-tight">
            Why Career Counselling Matters
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-lg font-light">
            {benefits.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-300 font-semibold">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <ContactCTA />
    </div>
  );
};

export default CareerCounselling;
