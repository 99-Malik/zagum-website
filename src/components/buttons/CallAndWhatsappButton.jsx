"use client";

import { cn } from "@/lib/utils";
import { companyName, dialPhone, sendMessage } from "@/libs/data";
import { Phone, MessageCircle, Zap, Clock } from "lucide-react";
import { usePathname } from "next/navigation";

const BRAND = {
  default: { navy: "#182333", navyDeep: "#0E1622", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
  lg: { navy: "#A50034", navyDeep: "#8B002C", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
  samsung: { navy: "#1428A0", navyDeep: "#0B1E7A", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
  bosch: { navy: "#E20015", navyDeep: "#B80012", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
  siemens: { navy: "#00A4B4", navyDeep: "#007C8C", orangeFrom: "#feaf0d", orangeTo: "#fbbf24" },
};

const CallAndWhatsappButton = ({ className, company = companyName }) => {
  const pathname = usePathname();
  
  let key = "default";
  if (pathname?.includes("lg")) key = "lg";
  if (pathname?.includes("samsung")) key = "samsung";
  if (pathname?.includes("bosch")) key = "bosch";
  if (pathname?.includes("siemens")) key = "siemens";
  const brand = BRAND[key];

  return (
    <div className={cn(className, "flex flex-col sm:flex-row gap-3 sm:gap-4")}>
      {/* Primary Call Button */}
      <button
        onClick={dialPhone}
        className="group relative w-full sm:w-auto overflow-hidden rounded-xl p-[1px] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-lg hover:shadow-xl"
        style={{
          background: `linear-gradient(135deg, ${brand.orangeFrom}, ${brand.orangeTo})`
        }}
      >
        <div className="relative flex items-center gap-2 px-5 py-1 rounded-xl bg-white/20 backdrop-blur-sm text-slate-800 font-semibold overflow-hidden">
          {/* Icon container */}
          <div className="relative w-10 h-10 rounded-xl bg-slate-800/90 flex items-center justify-center group-hover:bg-slate-900 transition-colors duration-200 shadow-sm">
            <Phone size={18} className="text-white drop-shadow-sm" />
          </div>
          
          <div className="flex-1 text-left">
            <div className="flex items-center gap-1 ">
              <span className="text-base font-bold tracking-wide text-slate-800 drop-shadow-sm">Call Now</span>
              <Zap size={14} className="text-slate-700 drop-shadow-sm" />
            </div>
            <span className="text-sm font-medium text-slate-700 tracking-wide drop-shadow-sm">Get instant quote</span>
          </div>
        </div>
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={sendMessage}
        className="group relative w-full sm:w-auto overflow-hidden rounded-xl p-[1px] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
        style={{
          background: `linear-gradient(135deg, ${brand.navy}, ${brand.navyDeep})`
        }}
      >
        <div className="relative flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm text-white font-medium overflow-hidden">
          {/* Icon container */}
          <div className="relative w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center group-hover:bg-green-400 transition-colors duration-200">
            <MessageCircle size={16} className="text-white" />
          </div>
          
          <div className="flex-1 text-left">
            <div className="flex items-center gap-2 ">
              <span className="text-sm font-bold">WhatsApp Us</span>
              <Clock size={12} className="text-green-300" />
            </div>
            <span className="text-xs opacity-90">24/7 support </span>
          </div>
        </div>
      </button>
      
      {/* Trust indicator */}
      {/* <div className="flex items-center justify-center gap-2 pt-2 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span>Available now</span>
        </div>
        <span className="text-gray-300">•</span>
        <span>Free consultation</span>
        <span className="text-gray-300">•</span>
        <span>Same day service</span>
      </div> */}
    </div>
  );
};

export default CallAndWhatsappButton;