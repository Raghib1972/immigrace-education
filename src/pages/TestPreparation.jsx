import ContactCTA from "../components/common/ContactCTA";

// Images
import readyImg from "../assets/test/ready.jpg";
import heroImg from "../assets/test/Test Preparation.jpg";
import whyImg from "../assets/test/Why Choose Our Test Preparation.jpg";

const TestPreparation = () => {
  const tests = [
    {
      title: "IELTS Preparation",
      desc: "Complete preparation for Listening, Reading, Writing and Speaking modules.",
    },
    {
      title: "PTE Preparation",
      desc: "Computer-based English test preparation with practice tests and strategies.",
    },
    {
      title: "Other Exams",
      desc: "Guidance and preparation support for SAT, GRE and similar exams.",
    },
  ];

  const benefits = [
    "Experienced trainers and mentors",
    "Structured study plan",
    "Practice tests & mock exams",
    "Score improvement strategies",
    "Flexible learning options",
  ];

  return (
    <div className="bg-white">

      {/* ================= HERO IMAGE ================= */}
      <section
        className="relative h-[75vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-medium mb-4 tracking-tight">
            Test <span className="text-blue-300">Preparation</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-200 font-light leading-relaxed">
            Prepare confidently for international exams with expert guidance
            and proven strategies.
          </p>
        </div>
      </section>

      {/* ================= EXAMS WE PREPARE YOU FOR ================= */}
<section
  className="relative py-32 bg-cover bg-center"
  style={{ backgroundImage: `url(${readyImg})` }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/65"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

    {/* Heading + Description */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-medium mb-4 tracking-tight">
        Exams We Prepare You For
      </h2>
      <p className="max-w-3xl mx-auto text-lg font-light text-gray-200 leading-relaxed">
        Focused preparation programs designed to help you succeed in
        international English and aptitude exams with confidence.
      </p>
    </div>

    {/* Exam Cards */}
    <div className="grid md:grid-cols-3 gap-8">
      {tests.map((test, index) => (
        <div
          key={index}
          className="bg-white/95 text-gray-800 p-8 rounded-2xl shadow-lg backdrop-blur-sm text-center hover:scale-[1.02] transition"
        >
          <h3 className="text-lg font-medium mb-3">
            {test.title}
          </h3>
          <p className="text-sm text-gray-600 font-light leading-relaxed">
            {test.desc}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>


      {/* ================= WHY CHOOSE US ================= */}
      <section
        className="relative py-28 bg-cover bg-center"
        style={{ backgroundImage: `url(${whyImg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-white">
          <h2 className="text-3xl font-medium text-center mb-10 tracking-tight">
            Why Choose Our Test Preparation?
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

      {/* ================= CTA ================= */}
      <ContactCTA />
    </div>
  );
};

export default TestPreparation;
