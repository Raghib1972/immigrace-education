
import { Link } from "react-router-dom";
import { countriesData } from "../../data/countriesData";

const Countries = () => {
  return (
    <section
      className="relative py-28 px-4 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/Destinations/study-abroad-bg.jpg')",
      }}
    >
      {/* DARK PREMIUM OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/75"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* SECTION TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Study Abroad Destinations
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Choose your dream country and begin your international education journey
          </p>
        </div>

        {/* COUNTRIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {countriesData.map((country, index) => (
            <Link
              key={country.id}
              to={`/study-abroad/${country.id}`}
              className="group bg-white/95 backdrop-blur rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
            >
              {/* IMAGE */}
              <div className="relative h-48 bg-gray-100 rounded-2xl overflow-hidden">
                <img
                  src={country.image}
                  alt={country.name}
                  className="h-full w-full object-contain bg-gray-100 p-4 transition-transform duration-500 group-hover:scale-105"
                />

                {/* COUNTRY NAME BADGE */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-sm font-semibold text-gray-900">
                  {country.name}
                </div>

                {/* NUMBER */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center font-bold text-gray-900">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {country.name}
                </h3>

                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  {country.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-5">
                  <span>Top Universities</span>
                  <span>Easy Visa</span>
                </div>

                <div className="flex items-center justify-between text-blue-600 font-semibold">
                  <span>Explore {country.name}</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>

              {/* BOTTOM LINE */}
              <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Countries;
