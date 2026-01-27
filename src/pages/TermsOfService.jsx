
import React from "react";
import { FaExclamationTriangle, FaFileContract, FaGavel, FaHandshake, FaCreditCard, FaCopyright } from "react-icons/fa";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* HEADER */}
      <div
        className="relative z-10 py-24"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.65), rgba(30,27,75,0.65)), url('/images/terms/terms-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <FaFileContract className="text-5xl text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Terms & Conditions
          </h1>
          <p className="text-blue-100 text-center text-lg">
            Last Updated: January 16, 2026
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl">
          
          {/* Introduction */}
          <div className="mb-10">
            <p className="text-gray-300 leading-relaxed">
              By enrolling in our services or using our website, you agree to the following terms and conditions.
            </p>
          </div>

          {/* Section 1 - Nature of Services */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FaGavel className="text-2xl text-purple-500" />
              <h2 className="text-2xl font-bold text-white">Nature of Services</h2>
            </div>
            <div className="pl-11 space-y-4 text-gray-300">
              <p className="leading-relaxed">
                Immigrace Education provides professional services including:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>IELTS, PTE, SAT, GMAT, GRE, Duolingo, CELPIP preparation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>German & French language training</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Spoken English training</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Career counselling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Study abroad guidance</span>
                </li>
              </ul>
              <div className="mt-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <p className="leading-relaxed text-yellow-200">
                  <strong>Important:</strong> We do not guarantee visa approval, admission, or exam scores. Results depend on individual effort and eligibility.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 - Payments */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FaCreditCard className="text-2xl text-green-500" />
              <h2 className="text-2xl font-bold text-white">Payments</h2>
            </div>
            <div className="pl-11 space-y-4 text-gray-300">
              <p className="leading-relaxed">
                All payments must be made through the official payment gateway (Razorpay) or approved methods shared by Immigrace Education.
              </p>
            </div>
          </div>

          {/* Section 3 - Intellectual Property */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FaCopyright className="text-2xl text-blue-500" />
              <h2 className="text-2xl font-bold text-white">Intellectual Property</h2>
            </div>
            <div className="pl-11 text-gray-300 space-y-4">
              <p className="leading-relaxed">
                All study materials, videos, notes, and content shared during the course are the intellectual property of Immigrace Education and must not be copied, shared, or distributed.
              </p>
            </div>
          </div>

          {/* Section 4 - Student Responsibility */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FaHandshake className="text-2xl text-orange-500" />
              <h2 className="text-2xl font-bold text-white">Student Responsibility</h2>
            </div>
            <div className="pl-11 text-gray-300 space-y-4">
              <p className="leading-relaxed">Students are responsible for:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Attending sessions regularly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Completing assignments and practice work</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Providing accurate information for counselling</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 5 - Limitation of Liability */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FaExclamationTriangle className="text-2xl text-red-500" />
              <h2 className="text-2xl font-bold text-white">Limitation of Liability</h2>
            </div>
            <div className="pl-11 text-gray-300 space-y-4">
              <p className="leading-relaxed">
                Immigrace Education is not liable for:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Visa rejections</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>University admission decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Exam results</span>
                </li>
              </ul>
              <p className="leading-relaxed mt-4 italic">
                These depend on external authorities and student performance.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong className="text-white">Email:</strong> info@immigrace.co.in</p>
              <p><strong className="text-white">Phone/WhatsApp:</strong> +91 8130464466</p>
              <p><strong className="text-white">Address:</strong> J-4/57 A Khirki Extension Malviya Nagar New Delhi-110017</p>
            </div>
          </div>

        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-600/30 transform hover:scale-105"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;