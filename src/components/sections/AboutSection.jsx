"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wrench,
  Clock,
  Sparkles,
  Star,
  Award,
  Users,
  Zap,
  WashingMachine,
  Snowflake,
  Flame,
  Monitor,
  Refrigerator,
  Droplets,
} from "lucide-react";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { companyName } from "@/libs/data";

const BRAND_COLORS = {
  default: { navy: "#182333", navyDeep: "#0E1622", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
  lg: { navy: "#A50034", navyDeep: "#8B002C", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
  samsung: { navy: "#1428A0", navyDeep: "#0B1E7A", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
  bosch: { navy: "#E20015", navyDeep: "#B80012", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
  siemens: { navy: "#00A4B4", navyDeep: "#007C8C", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
};

const AboutSection = ({ company = companyName }) => {
  const pathname = usePathname();

  let key = "default";
  if (pathname?.includes("lg")) key = "lg";
  if (pathname?.includes("samsung")) key = "samsung";
  if (pathname?.includes("bosch")) key = "bosch";
  if (pathname?.includes("siemens")) key = "siemens";
  const brand = BRAND_COLORS[key];

  const services = [
    { icon: WashingMachine, name: "Washing Machine", desc: "Expert repair service" },
    { icon: Snowflake, name: "AC & Cooling", desc: "Climate control fix" },
    { icon: Flame, name: "Gas Appliances", desc: "Stove & oven service" },
    { icon: Monitor, name: "TV Repair", desc: "All brands supported" },
    { icon: Refrigerator, name: "Refrigeration", desc: "Cooling system fix" },
    { icon: Droplets, name: "Dishwasher", desc: "Complete service" },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Certified Excellence",
      desc: "Factory-trained technicians with genuine parts guarantee",
    },
    {
      icon: Clock,
      title: "Lightning Fast",
      desc: "Same-day service with 2-hour response time",
    },
    {
      icon: Award,
      title: "Quality Assured",
      desc: "6-month warranty on all repairs with satisfaction guarantee",
    },
  ];

  const stats = [
    { icon: Users, value: "12,500+", label: "Happy Customers" },
    { icon: Star, value: "4.9★", label: "Average Rating" },
    { icon: Wrench, value: "35+", label: "Expert Technicians" },
  ];

  return (
    <section className="relative isolate pt-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ 
            background: `radial-gradient(circle, ${brand.orangeFrom}, ${brand.orangeTo})` 
          }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ 
            background: `radial-gradient(circle, ${brand.navy}, ${brand.navyDeep})` 
          }}
        />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(${brand.navy} 1px, transparent 1px),
              linear-gradient(90deg, ${brand.navy} 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border mb-6">
            <Sparkles size={16} style={{ color: brand.orangeFrom }} />
            <span className="text-sm font-medium" style={{ color: brand.navy }}>
              Premium Appliance Repair Service
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight">
            <span style={{ color: brand.navyDeep }}>Repair that feels</span>
            <br />
            <span 
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${brand.orangeFrom}, ${brand.orangeTo})`
              }}
            >
              absolutely effortless
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Experience the future of appliance repair with our AI-enhanced diagnostics, 
            premium parts, and technicians who treat your home like their own.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 lg:mb-20">
          
          {/* Left: Hero Image + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            {/* Main image with modern overlay */}
            <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl group">
              <img
                src="/washing-machine-repair.png"
                alt="Professional appliance repair technician at work"
                className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Gradient overlays for depth */}
              <div 
                className="absolute inset-0 opacity-60"
                style={{
                  background: `linear-gradient(135deg, ${brand.navy}40, transparent 70%)`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating badge */}
              <div className="absolute top-4 left-4 lg:top-6 lg:left-6 flex items-center gap-2 px-3 py-2 lg:px-4 lg:py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs lg:text-sm font-semibold text-gray-800">Live Service</span>
              </div>
            </div>

            {/* Modern stats cards */}
            <div className="mt-6 lg:mt-8 grid grid-cols-3 gap-3 lg:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative group"
                >
                  <div 
                    className="relative p-3 sm:p-4 lg:p-6 rounded-xl lg:rounded-2xl text-center text-slate-800 overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${brand.orangeFrom}, ${brand.orangeTo})`
                    }}
                  >
                    {/* Animated background */}
                    <div 
                      className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity"
                      style={{
                        background: `linear-gradient(45deg, ${brand.navyDeep}, transparent)`
                      }}
                    />
                    
                    <stat.icon size={20} className="sm:w-6 sm:h-6 mx-auto mb-2 relative z-10" />
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold relative z-10">{stat.value}</div>
                    <div className="text-xs opacity-90 relative z-10">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Features and Services */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 lg:space-y-8"
          >
            {/* Features */}
            <div className="space-y-4 lg:space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group"
                >
                  <div className="flex items-start gap-3 lg:gap-4 p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div 
                      className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${brand.orangeFrom}, ${brand.orangeTo})`
                      }}
                    >
                      <feature.icon size={18} className="lg:w-5 lg:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base lg:text-lg mb-1 lg:mb-2" style={{ color: brand.navyDeep }}>
                        {feature.title}
                      </h3>
                      <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Services Grid */}
            <div>
              <h3 className="font-bold text-lg lg:text-xl mb-4" style={{ color: brand.navyDeep }}>
                Services We Master
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * index }}
                    className="group"
                  >
                    <div className="p-4 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                          style={{
                            background: `linear-gradient(135deg, ${brand.orangeFrom}, ${brand.orangeTo})`
                          }}
                        >
                          <service.icon size={16} />
                        </div>
                        <span className="font-semibold text-sm lg:text-base" style={{ color: brand.navy }}>
                          {service.name}
                        </span>
                      </div>
                      <p className="text-xs lg:text-sm text-gray-500 ml-11">{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-4"
            >
              <CallAndWhatsappButton company={company} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;