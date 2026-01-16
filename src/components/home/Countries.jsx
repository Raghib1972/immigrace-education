

import { countriesData } from "../../data/countriesData";
import { Link } from "react-router-dom";

const Countries = () => {
  return (
    <div className="relative py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* World Map Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {countriesData.map((country, index) => (
            <Link
              key={country.id}
              to={`/study-abroad/${country.id}`}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 dark:border-gray-700"
            >
              {/* Country Flag/Image Container */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600">
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                
                <img
                  src={country.image}
                  alt={country.name}
                  className="h-full w-full object-cover transform group-hover:scale-110 transition-all duration-700"
                />

                {/* Country Badge */}
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm dark:bg-gray-900/90 px-4 py-2 rounded-full shadow-lg">
                  <span className="text-xs font-bold text-gray-900 dark:text-white">
                    {country.name}
                  </span>
                </div>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm dark:bg-gray-900/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-indigo-600 transition-all duration-300">
                  <span className="text-lg font-black text-gray-900 dark:text-white group-hover:text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                  {country.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {country.description}
                </p>

                {/* Stats/Features */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <span>Top Universities</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>Easy Visa</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex items-center justify-between text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  <span>Explore {country.name}</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              {/* Bottom Border Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Not Sure Which Country to Choose?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our expert counsellors help you find the perfect destination for your educational journey
            </p>
            <Link to="/contact">
              <button className="group bg-white text-blue-600 px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300">
                <span className="flex items-center gap-2">
                  Get Free Counselling
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Countries;