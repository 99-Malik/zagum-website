"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageCircle, Check, Shield, Clock, MapPin } from "lucide-react";
import { Timer, Trophy, ShieldCheck, Globe2 } from "lucide-react";
import { dialPhone, sendMessage } from "@/libs/data";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const BRAND = {
  default: {
    navy: "#182333",
    navyDeep: "#0E1622",
    orange: "#feaf0d",
    hairlineNavy: "from-[#0E1622] to-[#182333]",
    ctaOrange: "from-[#feaf0d] to-[#fbbf24]",
    chipNavy: "from-[#182333] to-[#0E1622]",
  },
  lg: {
    navy: "#A50034",
    navyDeep: "#8B002C",
    orange: "#feaf0d",
    hairlineNavy: "from-[#8B002C] to-[#A50034]",
    ctaOrange: "from-[#feaf0d] to-[#fbbf24]",
    chipNavy: "from-[#A50034] to-[#8B002C]",
  },
  samsung: {
    navy: "#1428A0",
    navyDeep: "#0B1E7A",
    orange: "#feaf0d",
    hairlineNavy: "from-[#0B1E7A] to-[#1428A0]",
    ctaOrange: "from-[#feaf0d] to-[#fbbf24]",
    chipNavy: "from-[#1428A0] to-[#0B1E7A]",
  },
  bosch: {
    navy: "#E20015",
    navyDeep: "#B80012",
    orange: "#feaf0d",
    hairlineNavy: "from-[#B80012] to-[#E20015]",
    ctaOrange: "from-[#feaf0d] to-[#fbbf24]",
    chipNavy: "from-[#E20015] to-[#B80012]",
  },
  siemens: {
    navy: "#00A4B4",
    navyDeep: "#007C8C",
    orange: "#feaf0d",
    hairlineNavy: "from-[#007C8C] to-[#00A4B4]",
    ctaOrange: "from-[#feaf0d] to-[#fbbf24]",
    chipNavy: "from-[#00A4B4] to-[#007C8C]",
  },
};

export default function MainBanner({ company = "Appliance Service Center UAE" }) {
  const pathname = usePathname();
  const key =
    pathname?.includes("lg") ? "lg" :
    pathname?.includes("samsung") ? "samsung" :
    pathname?.includes("bosch") ? "bosch" :
    pathname?.includes("siemens") ? "siemens" : "default";

  const brand = BRAND[key];

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${brand.navyDeep} 0%, ${brand.navy} 25%, #f8fafc 60%, #ffffff 100%)`,
          }}
        />
        <div
          className="absolute -top-32 -left-32 w-[40vw] h-[40vw] rounded-full blur-[150px] opacity-25"
          style={{ background: brand.orange }}
        />
        <div
          className="absolute bottom-0 right-0 w-[50vw] h-[50vw] rounded-full blur-[160px] opacity-25"
          style={{ background: brand.navy }}
        />
        <div className="absolute inset-0 bg-[url('/static/grid.svg')] opacity-10 mix-blend-overlay" />
      </div>

      {/* Hairline */}
      <div
        aria-hidden
        className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${brand.hairlineNavy}`}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 py-16 lg:py-24">
          {/* TEXT + CTA (Top Section) */}
          <motion.div
            className="backdrop-blur-sm bg-white/70 p-6 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900">
              Premium{" "}
              <span className="px-2 rounded-md text-white" style={{ backgroundColor: brand.navy }}>
                Appliance
              </span>{" "}
              <span
                className="bg-gradient-to-r bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(to right, ${brand.orange}, #fbbf24)` }}
              >
                Repair
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-700 max-w-xl leading-relaxed">
              Fast response, transparent pricing, and{" "}
              <span style={{ color: brand.navy }} className="font-semibold">
                warranty-backed services.
              </span>{" "}
              
            </p>

            {/* Features */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[Clock, Shield, MapPin, Check].map((Icon, i) => {
                const text = [
                  "Same-day service",
                  "12-month warranty",
                  "UAE-wide coverage",
                  "98% fix rate",
                ][i];
                return (
                  <div key={text} className="flex items-center gap-3">
                    <div className="h-9 w-9 flex items-center justify-center rounded-full bg-slate-100 ring-1 ring-slate-200">
                      <Icon className="h-4 w-4" style={{ color: brand.orange }} />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-slate-800">{text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={dialPhone}
                className={`inline-flex items-center justify-center gap-3 rounded-xl px-6 py-3 sm:px-8 sm:py-4 font-semibold text-slate-800 shadow-lg hover:scale-105 transition bg-gradient-to-r ${brand.ctaOrange}`}
              >
                <Phone className="h-5 w-5" />
                Call Now
              </button>
              <button
                onClick={sendMessage}
                className="inline-flex items-center justify-center gap-3 rounded-xl px-6 py-3 sm:px-8 sm:py-4 font-semibold border-2 bg-white/90 text-slate-800 hover:bg-white"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </button>
            </div>
          </motion.div>

          {/* IMAGE + METRICS (Bottom Section) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
              <Image
                src="/banner.png"
                alt="Technician repairing an appliance"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute top-4 right-4 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold shadow flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full animate-pulse"
                  style={{ backgroundColor: brand.orange }}
                />
                Available Now
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {[
                { l: "Response", v: "10 min", i: Timer, color: "from-[#feaf0d] to-[#fbbf24]" },
                { l: "Success", v: "98%", i: Trophy, color: "from-[#feaf0d] to-[#fbbf24]" },
                { l: "Warranty", v: "12 mo", i: ShieldCheck, color: "from-[#feaf0d] to-[#fbbf24]" },
                { l: "Coverage", v: "UAE", i: Globe2, color: "from-[#feaf0d] to-[#fbbf24]" }
              ].map(({ l, v, i: Icon, color }, index) => (
                <motion.div
                  key={l}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-3 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl ring-1 ring-slate-200/50 flex flex-col items-center text-center hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Gradient Background Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Icon Container */}
                  <div className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">{l}</p>
                    <p className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-slate-800 transition-colors duration-300">{v}</p>
                  </div>
                  
                  {/* Hover Accent Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
