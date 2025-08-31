"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Clock, ShieldCheck, Users, PhoneCall } from "lucide-react";

const BRAND = {
  default: {
    navy: "#182333",
    navyDeep: "#0E1622",
    orangeFrom: "#feaf0d",
    orangeTo: "#fbbf24",
  },
};

const OurServices = () => {
  const pathname = usePathname();
  const brand = BRAND.default;

  const services = [
    {
      icon: Clock,
      title: "Fast Response",
      desc: "Same-day service anywhere in the UAE.",
      gradient: "from-[#feaf0d] to-[#fbbf24]",
    },
    {
      icon: ShieldCheck,
      title: "Warranty",
      desc: "All repairs backed with 12 months coverage.",
      gradient: "from-[#feaf0d] to-[#fbbf24]",
    },
    {
      icon: Users,
      title: "Expert Team",
      desc: "Certified technicians with years of experience.",
      gradient: "from-[#feaf0d] to-[#fbbf24]",
    },
    {
      icon: PhoneCall,
      title: "24/7 Hotline",
      desc: "Always here to help, day or night.",
      gradient: "from-[#feaf0d] to-[#fbbf24]",
    },
  ];

  return (
    <section className="relative py-16 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Services{" "}
          <span className="bg-gradient-to-r from-[#feaf0d] to-[#fbbf24] bg-clip-text text-transparent">
            you can trust
          </span>
        </h2>
        <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Easy, stress-free repairs with speed, expertise, and real human care.
        </p>
      </div>

      {/* Responsive Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc, gradient }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl shadow-md bg-white px-6 py-10 text-center flex flex-col items-center hover:shadow-xl transition"
          >
            {/* Icon inside card */}
            <div
              className={`mb-6 w-16 h-16 flex items-center justify-center rounded-2xl text-slate-800 shadow-md bg-gradient-to-r ${gradient}`}
            >
              <Icon className="w-7 h-7" />
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-3 text-gray-600 text-sm md:text-base">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
