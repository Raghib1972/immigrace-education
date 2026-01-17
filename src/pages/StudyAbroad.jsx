
import Countries from "../components/home/Countries";
import ContactCTA from "../components/common/ContactCTA";

const StudyAbroad = () => {
  return (
    <div className="pt-24">
      
      {/* HERO SECTION */}
      <section
        className="relative py-28 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('/images/study-abroad/study-abroad-hero.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/70"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Study <span className="text-blue-300">Abroad</span>
          </h1>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Explore global education opportunities with expert guidance for
            admissions, visas and career outcomes.
          </p>
        </div>
      </section>

      {/* WHY STUDY ABROAD */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* IMAGE BOX WITH TEXT INSIDE */}
    <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow mb-12">
      <img
        src="/images/study-abroad/why-study-abroad.jpg"
        alt="Why Study Abroad"
        className="w-full h-[300px] object-cover"
      />

      {/* TEXT INSIDE IMAGE */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Why Study Abroad?
        </h2>
      </div>
    </div>

    {/* BOXES */}
    <div className="grid md:grid-cols-3 gap-8">
      <div className="p-6 border rounded-xl">
        <h3 className="font-semibold mb-2">Global Exposure</h3>
        <p className="text-gray-600 text-sm">
          Experience international culture, education systems and lifestyles.
        </p>
      </div>

      <div className="p-6 border rounded-xl">
        <h3 className="font-semibold mb-2">
          Better Career Prospects
        </h3>
        <p className="text-gray-600 text-sm">
          Access global job markets and post-study work opportunities.
        </p>
      </div>

      <div className="p-6 border rounded-xl">
        <h3 className="font-semibold mb-2">
          World-Class Education
        </h3>
        <p className="text-gray-600 text-sm">
          Study at top universities with globally recognised degrees.
        </p>
      </div>
    </div>

  </div>
</section>

      {/* STUDY DESTINATIONS – IMAGE WITH TEXT INSIDE */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="relative rounded-3xl overflow-hidden shadow-xl mb-16">
      
      {/* Background Image */}
      <img
        src="/images/study-abroad/study-destinations.jpg"
        alt="Study Destinations"
        className="w-full h-[420px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text inside image box */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
          🌍 Global Education
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Study Destinations
        </h2>

        <p className="text-blue-100 max-w-3xl">
          Explore world-class education opportunities across the globe with our
          expert guidance
        </p>
      </div>

    </div>

  </div>
</section>


      {/* COUNTRIES COMPONENT */}
      <Countries />

      {/* ADMISSION PROCESS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Admission Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              "Profile Evaluation",
              "Course & University Selection",
              "Application & Offer Letter",
              "Visa & Pre-Departure Support",
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow"
              >
                <h4 className="font-semibold mb-2">
                  {String(index + 1).padStart(2, "0")}
                </h4>
                <p className="text-sm text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA />
    </div>
  );
};

export default StudyAbroad;





