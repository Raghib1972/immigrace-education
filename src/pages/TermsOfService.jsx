import React from "react";
import { FaExclamationTriangle, FaFileContract, FaGavel, FaHandshake } from "react-icons/fa";

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
      Terms of Service
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
              Welcome to Immigrace Education. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully before using our services.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FaHandshake className="text-2xl text-blue-500" />
              <h2 className="text-2xl font-bold text-white">Acceptance of Terms</h2>
            </div>
            <div className="pl-11 space-y-4 text-gray-300">
              <p className="leading-relaxed">
                By using Immigrace Education's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FaGavel className="text-2xl text-purple-500" />
              <h2 className="text-2xl font-bold text-white">Services Provided</h2>
            </div>
            <div className="pl-11 space-y-4 text-gray-300">
              <p className="leading-relaxed">
                Immigrace Education provides the following services:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Career counselling and guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Study abroad consultation and application assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Test preparation courses and materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Educational planning and support services</span>
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
            <div className="text-gray-300 space-y-4">
              <p className="leading-relaxed">As a user of our services, you agree to:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Provide accurate and complete information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Maintain the confidentiality of your account credentials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Use our services only for lawful purposes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Respect intellectual property rights</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Not engage in any activity that could harm our services or other users</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
            <div className="text-gray-300 space-y-4">
              <p className="leading-relaxed">
                All fees for our services are due as specified in your service agreement. Payment terms include:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Fees must be paid in full before services are rendered unless otherwise agreed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>All payments are non-refundable except as required by law</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>We reserve the right to change our fees with prior notice</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Late payments may result in suspension of services</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Cancellation and Refund Policy</h2>
            <div className="text-gray-300 space-y-4">
              <p className="leading-relaxed">
                Our cancellation and refund policy is as follows:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Cancellations must be requested in writing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Refunds are subject to the terms of your specific service agreement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>No refunds will be provided for services already rendered</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Processing of refunds may take 7-14 business days</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
            <div className="text-gray-300 space-y-4">
              <p className="leading-relaxed">
                Immigrace Education provides educational consulting services to the best of our ability. However:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>We do not guarantee admission to any educational institution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>We are not responsible for decisions made by universities or visa authorities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>We shall not be liable for any indirect, incidental, or consequential damages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Our total liability is limited to the amount paid for our services</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FaExclamationTriangle className="text-2xl text-yellow-500" />
              <h2 className="text-2xl font-bold text-white">Intellectual Property</h2>
            </div>
            <div className="pl-11 text-gray-300 space-y-4">
              <p className="leading-relaxed">
                All content on our website, including text, graphics, logos, images, and software, is the property of Immigrace Education and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to terminate or suspend your access to our services at any time, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason at our sole discretion.
            </p>
          </div>

          {/* Section 9 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.
            </p>
          </div>

          {/* Section 10 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We may modify these Terms of Service at any time. We will notify you of any significant changes by posting the updated terms on our website. Your continued use of our services after such modifications constitutes your acceptance of the updated terms.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
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