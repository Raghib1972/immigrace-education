
const About = () => {
  return (
    <section className="bg-white">
      {/* HERO SECTION */}
      <div
        className="relative text-white py-32 px-6 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/about/about-hero.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            About Immigrace Education
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            A guidance-first education consultancy committed to ethical,
            transparent, and student-centric career counselling.
          </p>
        </div>
      </div>

      {/* WHO WE ARE */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Immigrace Education is an education and career guidance
              organization focused on helping students and parents make
              informed decisions about careers, higher education, and global
              study opportunities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We do not believe in selling admissions. Our approach begins with
              understanding the student’s strengths, interests, and long-term
              goals before recommending any career path or country.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-4">
              What Makes Us Different
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Career-first counselling approach</li>
              <li>✔ Ethical & transparent guidance</li>
              <li>✔ No false promises or guarantees</li>
              <li>✔ Student & parent trust focused</li>
              <li>✔ Global education awareness</li>
            </ul>
          </div>
        </div>
      </div>

      {/* OUR PHILOSOPHY */}
<div className="py-20 px-6">
  <div
    className="relative max-w-6xl mx-auto h-[350px] rounded-2xl overflow-hidden bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/about/philosophy.jpg')",
    }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/65"></div>

    {/* Text Content */}
    <div className="relative h-full flex items-center justify-center text-center px-6">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Our Philosophy
        </h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
          We believe that choosing a career or study destination is one of the
          most important decisions in a student’s life. That decision should be
          made with clarity, awareness, and honesty — not pressure or
          misinformation.
        </p>
      </div>
    </div>
  </div>
</div>
{/* OUR MISSION */}
<div className="py-20 px-6">
  <div
    className="relative max-w-6xl mx-auto h-[350px] rounded-2xl overflow-hidden bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/about/mission.jpg')",
    }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-blue-900/70"></div>

    {/* Text Content */}
    <div className="relative h-full flex items-center justify-center text-center px-6">
      <div>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Our Mission
        </h3>
        <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
          To empower students with accurate career guidance, global education
          awareness, and ethical counselling so they can make confident,
          informed decisions about their future.
        </p>
      </div>
    </div>
  </div>
</div>

      {/* CTA */}
<div
  className="relative py-24 px-6 text-center text-white bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/about/cta-career-guidance.jpg')",
  }}
>
  {/* Overlay for text visibility */}
  <div className="absolute inset-0 bg-indigo-900/80"></div>

  {/* Content */}
  <div className="relative max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Need Career Guidance?
    </h2>
    <p className="text-lg md:text-xl mb-8 text-indigo-100">
      Speak to our expert counsellors and take the first step toward a
      well-informed future.
    </p>
    <a
      href="/contact"
      className="inline-block bg-white text-indigo-700 font-semibold px-10 py-4 rounded-full shadow hover:bg-gray-100 transition"
    >
      Book Free Consultation
    </a>
  </div>
</div>
    </section>
  );
};

export default About;
