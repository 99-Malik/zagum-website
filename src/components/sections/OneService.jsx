"use client";
import React from "react";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { companyName } from "@/libs/data";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Shield, Zap, Star, Award } from "lucide-react";

const BRAND_COLORS = {
  default: { navy: "#182333", navyDeep: "#0E1622", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
  lg: { navy: "#A50034", navyDeep: "#8B002C", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
  samsung: { navy: "#1428A0", navyDeep: "#0B1E7A", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
  bosch: { navy: "#E20015", navyDeep: "#B80012", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
  siemens: { navy: "#00A4B4", navyDeep: "#007C8C", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
};

const OneService = ({
  title,
  description,
  commonProblems = [],
  slug,
  imgUrl,
  company = companyName,
  brand,
}) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300"
      id={slug}
    >
      {/* Creative Image Section */}
      <div className="relative h-64 sm:h-72 overflow-hidden">
        {/* Main Image with Creative Overlay */}
        <div
          className="w-full h-full bg-center bg-cover bg-no-repeat group-hover:scale-110 transition-transform duration-700"
          style={{
            backgroundImage: `url(${imgUrl})`,
          }}
        />
        
        {/* Creative Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{ 
            background: `linear-gradient(135deg, ${brand.navy}20, ${brand.orangeFrom}20)` 
          }}
        />
        
        {/* Floating Elements */}
        <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm shadow-lg">
          <Star className="h-4 w-4" style={{ color: brand.orangeFrom }} />
          <span className="text-xs font-bold" style={{ color: brand.navy }}>PREMIUM</span>
        </div>
        
        <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center">
          <Award className="h-6 w-6" style={{ color: brand.navy }} />
        </div>
        
        {/* Bottom Gradient for Text */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Creative Heading Section */}
      <div className="relative -mt-8 mx-6 mb-6">
        <div className="relative p-6 rounded-2xl bg-white shadow-xl border border-slate-200">
          {/* Creative Title Design */}
          <div className="text-center mb-4">
            <h2 className="text-2xl sm:text-3xl font-black mb-2">
              <span className="text-slate-900">{title.split(' ')[0]}</span>{" "}
              <span 
                className="bg-gradient-to-r bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(to right, ${brand.orangeFrom}, ${brand.orangeTo})` }}
              >
                {title.split(' ').slice(1).join(' ')}
              </span>
            </h2>
            
            {/* Creative Accent Line */}
            <div className="flex items-center justify-center gap-2">
              <div 
                className="h-1 w-8 rounded-full"
                style={{ background: brand.navy }}
              />
              <div 
                className="h-1 w-16 rounded-full"
                style={{ background: `linear-gradient(to right, ${brand.orangeFrom}, ${brand.orangeTo})` }}
              />
              <div 
                className="h-1 w-8 rounded-full"
                style={{ background: brand.navy }}
              />
            </div>
          </div>
          
          {/* Service Badge */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200">
              <Shield className="h-4 w-4" style={{ color: brand.orangeFrom }} />
              <span className="text-sm font-semibold text-slate-700">Expert Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 pb-6">
        {/* Description */}
        <p className="text-slate-600 text-base leading-relaxed mb-6 text-center">
          {description}
        </p>

        {/* Common Problems Section */}
        <div className="mb-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle className="h-5 w-5" style={{ color: brand.orangeFrom }} />
            <h3 className="text-lg font-bold text-slate-900">Common Issues We Fix</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {commonProblems.slice(0, 6).map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200"
              >
                <div 
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: brand.orangeFrom }}
                />
                <span className="text-sm text-slate-700 font-medium">{problem}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Service Highlights */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200">
            <Clock className="h-4 w-4" style={{ color: brand.navy }} />
            <span className="text-xs font-semibold text-slate-700">Same Day Service</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200">
            <Zap className="h-4 w-4" style={{ color: brand.orangeFrom }} />
            <span className="text-xs font-semibold text-slate-700">Quick Response</span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-slate-200 pt-6">
          <p className="text-slate-600 text-sm mb-4 text-center">
            Don't let appliance issues disrupt your day. Our certified technicians are ready to help.
          </p>
          
          <CallAndWhatsappButton company={company} />
        </div>
      </div>

      {/* Creative Hover Effect */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ 
          background: `linear-gradient(135deg, ${brand.navy}08, ${brand.orangeFrom}08)` 
        }}
      />
    </motion.div>
  );
};

export default OneService;
