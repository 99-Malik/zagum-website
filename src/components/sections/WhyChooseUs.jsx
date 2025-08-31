"use client";
import { companyName } from "@/libs/data";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { Star, Check, ArrowRight, Sparkles, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const BRAND_COLORS = {
  default: { navy: "#182333", navyDeep: "#0E1622", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
  lg: { navy: "#A50034", navyDeep: "#8B002C", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
  samsung: { navy: "#1428A0", navyDeep: "#0B1E7A", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
  bosch: { navy: "#E20015", navyDeep: "#B80012", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
  siemens: { navy: "#00A4B4", navyDeep: "#007C8C", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
};

const WhyChooseUs = ({ company = companyName }) => {
  const pathname = usePathname();
  
  let key = "default";
  if (pathname?.includes("lg")) key = "lg";
  if (pathname?.includes("samsung")) key = "samsung";
  if (pathname?.includes("bosch")) key = "bosch";
  if (pathname?.includes("siemens")) key = "siemens";
  const brand = BRAND_COLORS[key];

  const reasons = [
    "Factory-trained technicians",
    "Genuine OEM parts only",
    "Same-day service guarantee",
    "No hidden fees ever",
    "12-month warranty included",
    "24/7 emergency support"
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: brand.orangeFrom }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10"
          style={{ background: brand.navy }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-slate-200 mb-8">
            <Sparkles className="h-5 w-5" style={{ color: brand.orangeFrom }} />
            <span className="text-sm font-medium" style={{ color: brand.navy }}>Why We're Different</span>
          </div>
          
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-black mb-8 leading-none">
            <span className="text-slate-900">We Don't Just</span>
            <br />
            <span 
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(to right, ${brand.orangeFrom}, ${brand.orangeTo})` }}
            >
              Fix Appliances
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We restore peace of mind. Every repair is a promise kept, every customer a story of satisfaction.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          {/* Left: Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl bg-white shadow-xl border border-slate-200 p-8">
              <div 
                className="absolute inset-0 rounded-3xl opacity-5"
                style={{ background: `linear-gradient(135deg, ${brand.navy}, ${brand.orangeFrom})` }}
              />
              
              {/* Floating elements */}
              <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                <Target className="h-8 w-8" style={{ color: brand.navy }} />
              </div>
              <div className="absolute top-16 right-12 w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                <Zap className="h-6 w-6" style={{ color: brand.orangeFrom }} />
              </div>
              <div className="absolute bottom-12 left-12 w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                <Star className="h-7 w-7" style={{ color: brand.navy }} />
              </div>
              
              {/* Central content */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                <div className="text-6xl sm:text-7xl font-black mb-4">
                  <span 
                    className="bg-gradient-to-r bg-clip-text text-transparent"
                    style={{ backgroundImage: `linear-gradient(to right, ${brand.orangeFrom}, ${brand.orangeTo})` }}
                  >
                    98%
                  </span>
                </div>
                <p className="text-lg text-slate-700 font-medium">Success Rate</p>
                <p className="text-sm text-slate-500 mt-2">Across 10,000+ repairs</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Reasons List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-900">
              The Promise
            </h3>
            
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `linear-gradient(135deg, ${brand.navy}, ${brand.orangeFrom})` }}
                  >
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                    {reason}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="relative rounded-3xl bg-white shadow-xl border border-slate-200 p-12 sm:p-16">
            <div 
              className="absolute inset-0 rounded-3xl opacity-5"
              style={{ background: `linear-gradient(135deg, ${brand.navy}, ${brand.orangeFrom})` }}
            />
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="text-slate-900">Ready to Experience</span>
                <br />
                <span 
                  className="bg-gradient-to-r bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(to right, ${brand.orangeFrom}, ${brand.orangeTo})` }}
                >
                  The Difference?
                </span>
              </h3>
              
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                Join thousands of satisfied customers who chose excellence over mediocrity.
              </p>
              
              <div className="flex justify-center">
                <CallAndWhatsappButton company={company} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
