
import React from "react";
import { FaFileContract, FaLock, FaShieldAlt, FaUserShield, FaCreditCard } from "react-icons/fa";

const PrivacyPolicy = () => {
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
            "linear-gradient(to right, rgba(15,23,42,0.65), rgba(30,27,75,0.65)), url('/images/privacy/privacy-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <FaShieldAlt className="text-5xl text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Privacy Policy
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
              At Immigrace Education, accessible from <a href="https://immigraceducation.com" className="text-blue-400 hover:text-blue-300 underline">https://immigraceducation.com</a>, one of our main priorities is the privacy of our visitors and students. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FaLock className="text-2xl text-blue-500" />
              <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
            </div>
            <div className="pl-11 space-y-4 text-gray-300">
              <p className="leading-relaxed">
                We may collect personal information including but not limited to:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Name</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Phone number</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Email address</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Academic details</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Payment details</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Communication records</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FaUserShield className="text-2xl text-purple-500" />
              <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
            </div>
            <div className="pl-11 space-y-4 text-gray-300">
              <p className="leading-relaxed">
                We use the information we collect in the following ways:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>To provide training for IELTS, PTE, SAT, GMAT, GRE, Duolingo, CELPIP</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>To provide German & French language training</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>To provide Spoken English training</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>To provide career counselling and study abroad guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>To process payments securely through Razorpay</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>To communicate updates, schedules, and academic information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>To improve our services and user experience</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Payment Security Section */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FaCreditCard className="text-2xl text-green-500" />
              <h2 className="text-2xl font-bold text-white">Payment Security</h2>
            </div>
            <div className="pl-11 space-y-4 text-gray-300">
              <p className="leading-relaxed">
                All payments are processed securely through Razorpay. We do not store your card, UPI, or banking details on our servers.
              </p>
            </div>
          </div>

          {/* Data Protection Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Data Protection</h2>
            <p className="text-gray-300 leading-relaxed">
              We take appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FaFileContract className="text-2xl text-blue-500" />
              <h2 className="text-2xl font-bold text-white">Sharing of Information</h2>
            </div>
            <div className="pl-11 space-y-4 text-gray-300">
              <p className="leading-relaxed">
                We do not sell, trade, or rent users' personal identification information to others.
              </p>
            </div>
          </div>

          {/* Consent Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Consent</h2>
            <p className="text-gray-300 leading-relaxed">
              By using our website, you hereby consent to our Privacy Policy.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-600/30 transform hover:scale-105"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;