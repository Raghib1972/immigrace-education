import ContactCTA from "../components/common/ContactCTA";

const Schools = () => {
  const programs = [
    {
      title: "Career Awareness Workshops",
      desc: "Interactive sessions for students (Grade 9–12) to understand career options and future pathways.",
    },
    {
      title: "Psychometric Assessments",
      desc: "Aptitude, interest and personality assessments with detailed reports and counselling.",
    },
    {
      title: "Parent Counselling Sessions",
      desc: "Guidance sessions to help parents support informed academic and career decisions.",
    },
    {
      title: "Global Education Seminars",
      desc: "Awareness about overseas education, eligibility, timelines and responsible planning.",
    },
  ];

  return (
    <section className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            School <span className="text-blue-600">Programs</span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Structured career guidance and awareness programs designed for
            schools, students and parents.
          </p>
        </div>

        {/* Programs */}
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <ContactCTA />
    </section>
  );
};

export default Schools;
