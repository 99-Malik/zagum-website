"use client";
import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { dialPhone, sendMessage } from "@/libs/data";

function MainBanner({ company = "Appliance Service Center UAE" }) {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 min-h-screen flex items-center">
      {/* Content Container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Content */}
          <div className="text-white space-y-8">
            {/* Main Heading */}
            <div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="block text-white">Professional</span>
                <span className="block text-blue-400">Appliance Repair</span>
              </h1>
              <p className="text-xl text-blue-300 font-medium mt-6">
                Same Day Fix • Save 80% • 24/7 Service
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              <span className="text-yellow-300 font-semibold">Expert technicians</span> fix your broken appliances in 
              <span className="text-blue-300 font-semibold"> under 2 hours</span>! 
              Same-day service, lifetime warranty, and competitive pricing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={dialPhone}
                className="group flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-lg"
              >
                <Phone size={24} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Call Now - Free Quote</span>
              </button>
              <button
                onClick={sendMessage}
                className="group flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-lg"
              >
                <MessageCircle size={24} className="group-hover:scale-110 transition-transform duration-300" />
                <span>WhatsApp Us</span>
              </button>
            </div>

            {/* Simple Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Same Day Fix
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Lifetime Warranty
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                5-Star Rated
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                24/7 Emergency
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-auto">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="#3B82F6"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.71,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="#3B82F6"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="#3B82F6"
          />
        </svg>
      </div>
    </section>
  );
}

export default MainBanner;
