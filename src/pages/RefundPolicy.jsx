
import React from "react";
import {
  FaMoneyCheckAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
} from "react-icons/fa";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* HEADER */}
      <div
        className="relative z-10 py-24"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.65), rgba(30,27,75,0.65)), url('/images/Refund Policy/refund-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <FaMoneyCheckAlt className="text-5xl text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Refund Policy
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
              At Immigrace Education, we maintain a transparent and fair refund
              policy.
            </p>
          </div>

          {/* Eligibility */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FaCheckCircle className="text-2xl text-green-500" />
              <h2 className="text-2xl font-bold text-white">
                Eligibility for Refund
              </h2>
            </div>
            <div className="pl-11 space-y-4 text-gray-300">
              <ul className="space-y-2 ml-4">
                <li>The request is made within 48 hours of payment</li>
                <li>The student has not attended more than one class/session</li>
                <li>
                  Study material or course access has not been fully provided
                </li>
              </ul>
            </div>
          </div>

          {/* Non Refundable */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FaTimesCircle className="text-2xl text-red-500" />
              <h2 className="text-2xl font-bold text-white">
                Non-Refundable Situations
              </h2>
            </div>
            <div className="pl-11 space-y-2 text-gray-300">
              <p>Classes attended beyond first session</p>
              <p>Study material shared</p>
              <p>Personal reasons</p>
              <p>Visa / admission rejection</p>
              <p>Low exam score</p>
            </div>
          </div>

          {/* Processing */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FaClock className="text-2xl text-blue-500" />
              <h2 className="text-2xl font-bold text-white">
                Processing of Refunds
              </h2>
            </div>
            <p className="pl-11 text-gray-300">
              Refunds are processed within 7–10 working days via original
              payment method.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300">Email: info@immigrace.co.in</p>
            <p className="text-gray-300">Phone: +91 8130464466</p>
            <p className="text-gray-300">
              Address: J-4/57 A Khirki Extension, New Delhi-110017
            </p>
          </div>
        </div>

        {/* Back */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-xl"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
