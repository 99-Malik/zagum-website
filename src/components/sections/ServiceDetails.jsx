"use client";

import { getData, companyName } from "@/libs/data";
import { getSolarData } from "@/libs/solardata";
import OneService from "./OneService";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { getAcData } from "@/libs/getAcData";
import { motion } from "framer-motion";
import { Sparkles, Target, Zap } from "lucide-react";

const BRAND_COLORS = {
  default: { navy: "#182333", navyDeep: "#0E1622", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
  lg: { navy: "#A50034", navyDeep: "#8B002C", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
  samsung: { navy: "#1428A0", navyDeep: "#0B1E7A", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
  bosch: { navy: "#E20015", navyDeep: "#B80012", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
  siemens: { navy: "#00A4B4", navyDeep: "#007C8C", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
};

const ServiceDetails = ({ company = companyName }) => {
  const pathname = usePathname();
  
  let key = "default";
  if (pathname?.includes("lg")) key = "lg";
  if (pathname?.includes("samsung")) key = "samsung";
  if (pathname?.includes("bosch")) key = "bosch";
  if (pathname?.includes("siemens")) key = "siemens";
  const brand = BRAND_COLORS[key];

  // Determine which data to use based on the route
  const services =
    pathname === "/companies/water-heater"
      ? getSolarData(company)
      : pathname === "/companies/ac"
      ? getAcData(company)
      : getData(company);

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5"
          style={{ background: brand.orangeFrom }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5"
          style={{ background: brand.navy }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-slate-200 mb-8">
            <Target className="h-5 w-5" style={{ color: brand.orangeFrom }} />
            <span className="text-sm font-medium" style={{ color: brand.navy }}>Our Services</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-slate-900">Professional</span>{" "}
            <span 
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(to right, ${brand.orangeFrom}, ${brand.orangeTo})` }}
            >
              Repair Services
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We offer comprehensive appliance repair solutions with certified technicians, 
            genuine parts, and transparent pricing. Every repair is backed by our quality guarantee.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <OneService
                title={service.title}
                description={service.description}
                commonProblems={service.commonProblems}
                slug={service.slug}
                company={company}
                imgUrl={service.imgUrl}
                brand={brand}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="relative rounded-3xl bg-white shadow-xl border border-slate-200 p-8 sm:p-12">
            <div 
              className="absolute inset-0 rounded-3xl opacity-5"
              style={{ background: `linear-gradient(135deg, ${brand.navy}, ${brand.orangeFrom})` }}
            />
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                Need Expert Help?
              </h3>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                Contact our certified technicians for professional appliance repair services. 
                Get a free quote and experience the difference quality makes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetails;
