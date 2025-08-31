"use client";

import { companyName, dialPhone } from "@/libs/data";
import { Phone, Menu, Clock, Zap, ShieldCheck, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavLink from "./NavLink";
import ServicesDropdown from "./ServicesDropdown";
import Sidebar from "./Sidebar";

const BRAND_MAP = {
  "/companies/water-heater": "Home Appliance Fix UAE",
  "/companies/ac": "Home Appliance Fix UAE",
  "/companies/lg": "Nexora Repairs",
  "/companies/siemens": "Nexora Repairs",
  "/companies/samsung": "Nexora Repairs",
};

const BRAND_ACCENTS = {
  default: "from-blue-600 to-cyan-600",
  lg: "from-pink-600 to-red-500",
  samsung: "from-sky-600 to-blue-800",
  bosch: "from-red-600 to-gray-800",
  siemens: "from-teal-600 to-green-700",
};

const Header = ({ company = companyName }) => {
  const pathname = usePathname();
  const dynamicCompany = BRAND_MAP[pathname] ?? company;

  let brandKey = "default";
  if (pathname?.includes("lg")) brandKey = "lg";
  if (pathname?.includes("samsung")) brandKey = "samsung";
  if (pathname?.includes("bosch")) brandKey = "bosch";
  if (pathname?.includes("siemens")) brandKey = "siemens";

  const accent = BRAND_ACCENTS[brandKey];

  return (
    <header className="sticky top-0 z-50 w-full isolate overflow-hidden">
      {/* Background with blur accents */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white/70 backdrop-blur-md border-b border-gray-200" />
        <div
          className={`absolute -top-20 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full blur-[140px] opacity-20 bg-gradient-to-r ${accent}`}
        />
        <div
          className={`absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full blur-[140px] opacity-10 bg-gradient-to-r ${accent}`}
        />
      </div>

      {/* Utility bar */}
      <div className="hidden md:block border-b border-gray-200 bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 flex h-10 items-center justify-between text-xs text-gray-700">
          {/* Trust badges */}
          <div className="flex items-center gap-3">
            {[
              { icon: Clock, text: "24/7 Support" },
              { icon: Zap, text: "Same-day Fix" },
              { icon: ShieldCheck, text: "Warranty" },
              { icon: Star, text: "5-Star Rated" },
            ].map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium shadow-sm ring-1 ring-gray-200"
              >
                <Icon className="h-3.5 w-3.5 text-gray-500" />
                {text}
              </span>
            ))}
          </div>

          <button
            onClick={dialPhone}
            className="inline-flex items-center gap-2 font-medium text-gray-700 hover:text-gray-900 transition"
          >
            <Phone className="h-4 w-4 text-gray-500" />
            Call Now
          </button>
        </div>
      </div>

      {/* Main navigation */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <nav className="flex h-16 md:h-20 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className={`grid h-11 w-11 place-items-center rounded-lg bg-[#feaf0d] text-slate-800 font-bold shadow-lg`}
            >
              N
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-gray-800 transition">
                {dynamicCompany}
              </span>
              <span className="text-[11px] md:text-xs text-gray-500">
                Professional Appliance Services
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink title="Home" href="/" />
            <NavLink title="About" href="#about" />
            <ServicesDropdown company={dynamicCompany} />
            <NavLink title="Contact" href="#contact" />
          </div>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={dialPhone}
              className="hidden md:inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-md bg-gradient-to-r from-[#feaf0d] to-[#fbbf24] hover:scale-105 transition"
            >
              <Phone className="h-4 w-4" />
              Get Quote
            </button>
            <div className="lg:hidden">
              <Sidebar company={dynamicCompany} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
