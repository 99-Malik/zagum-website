"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { companyName, getData, dialPhone, sendMessage } from "@/libs/data";
import { Menu, ChevronDown, Home, Info, Wrench, Phone, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Brand accent mapping
const BRAND_ACCENTS = {
  default: "from-[#feaf0d] to-[#fbbf24]",
  lg: "from-[#feaf0d] to-[#fbbf24]",
  samsung: "from-[#feaf0d] to-[#fbbf24]",
  bosch: "from-[#feaf0d] to-[#fbbf24]",
  siemens: "from-[#feaf0d] to-[#fbbf24]",
};

const Sidebar = ({ company = companyName }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  let brandKey = "default";
  if (pathname?.includes("lg")) brandKey = "lg";
  if (pathname?.includes("samsung")) brandKey = "samsung";
  if (pathname?.includes("bosch")) brandKey = "bosch";
  if (pathname?.includes("siemens")) brandKey = "siemens";
  const accent = BRAND_ACCENTS[brandKey];

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button
            aria-label="Open menu"
            className="p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 active:bg-slate-100 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2"
          >
            <Menu className="w-5 h-5 text-slate-700" />
          </button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[98vw] xs:w-[95vw] sm:w-[85vw] md:w-[75vw] lg:w-[70vw] xl:w-[65vw] max-w-sm bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-0 border-l border-slate-700 shadow-2xl"
        >
          {/* Header with enhanced responsive design */}
          <SheetHeader className="px-3 xs:px-4 sm:px-6 py-4 xs:py-6 sm:py-8 border-b border-slate-700 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <SheetTitle className="flex items-center gap-2 xs:gap-3 sm:gap-4 text-white min-w-0">
                <div
                  className={cn(
                    "inline-flex h-10 w-10 xs:h-12 xs:w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg xs:rounded-xl sm:rounded-2xl text-slate-800 text-sm xs:text-base sm:text-lg font-black bg-gradient-to-br shadow-xl ring-1 xs:ring-2 sm:ring-4 ring-white/20 flex-shrink-0",
                    accent
                  )}
                >
                  {String(company).slice(0, 1) || "G"}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-base xs:text-lg sm:text-xl font-bold leading-tight text-white truncate block">{company}</span>
                  <SheetDescription className="text-xs xs:text-sm text-slate-300 mt-1 flex items-center gap-1.5 xs:gap-2">
                    <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0"></div>
                    <span className="truncate text-xs xs:text-sm">Available Now</span>
                  </SheetDescription>
                </div>
              </SheetTitle>
              <SheetClose asChild>
                <button className="p-1.5 xs:p-2 sm:p-3 rounded-md xs:rounded-lg sm:rounded-xl hover:bg-slate-700/50 transition-all duration-200 border border-slate-600 flex-shrink-0">
                  <X className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-slate-300" />
                </button>
              </SheetClose>
            </div>
          </SheetHeader>

          {/* Navigation with enhanced responsive design */}
          <nav className="flex-1 py-3 xs:py-4 sm:py-6">
            <div className="px-2 xs:px-3 sm:px-4 space-y-1.5 xs:space-y-2 sm:space-y-3">
              {/* Home */}
              <SheetClose asChild>
                <Link
                  href="/"
                  className="group flex items-center gap-2.5 xs:gap-3 sm:gap-4 px-3 xs:px-4 sm:px-5 py-2.5 xs:py-3 sm:py-4 rounded-lg xs:rounded-xl sm:rounded-2xl text-slate-200 hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-md xs:rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Home className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-slate-300 group-hover:text-white" />
                  </div>
                  <span className="text-xs xs:text-sm sm:text-base font-semibold truncate">Home</span>
                </Link>
              </SheetClose>

              {/* About */}
              <SheetClose asChild>
                <Link
                  href="/#about"
                  className="group flex items-center gap-2.5 xs:gap-3 sm:gap-4 px-3 xs:px-4 sm:px-5 py-2.5 xs:py-3 sm:py-4 rounded-lg xs:rounded-xl sm:rounded-2xl text-slate-200 hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-md xs:rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Info className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-slate-300 group-hover:text-white" />
                  </div>
                  <span className="text-xs xs:text-sm sm:text-base font-semibold truncate">About Us</span>
                </Link>
              </SheetClose>

              {/* Services Section with enhanced responsive design */}
              <div className="pt-1 xs:pt-2">
                <button
                  onClick={() => setServicesOpen((s) => !s)}
                  aria-expanded={servicesOpen}
                  className="group w-full flex items-center justify-between px-3 xs:px-4 sm:px-5 py-2.5 xs:py-3 sm:py-4 rounded-lg xs:rounded-xl sm:rounded-2xl text-slate-200 hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  <div className="flex items-center gap-2.5 xs:gap-3 sm:gap-4">
                    <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-md xs:rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Wrench className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-slate-300 group-hover:text-white" />
                    </div>
                    <span className="text-xs xs:text-sm sm:text-base font-semibold truncate">Services</span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-slate-400 transition-all duration-300 group-hover:text-white flex-shrink-0",
                      servicesOpen && "rotate-180 text-white"
                    )}
                  />
                </button>

                {/* Services Dropdown with enhanced responsive design */}
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    servicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="mt-2 xs:mt-3 sm:mt-4 ml-8 xs:ml-10 sm:ml-14 space-y-1 xs:space-y-1.5 sm:space-y-2">
                    {getData().slice(0, 6).map((service, index) => (
                      <SheetClose key={service.slug} asChild>
                        <Link
                          href={`/#${service.slug}`}
                          className="group block px-2.5 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-3 text-xs xs:text-sm text-slate-400 rounded-md xs:rounded-lg sm:rounded-xl hover:bg-slate-700/30 hover:text-white transition-all duration-300 hover:translate-x-1 xs:hover:translate-x-1.5 sm:hover:translate-x-2"
                          style={{ transitionDelay: `${index * 50}ms` }}
                        >
                          <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3">
                            <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-500 group-hover:bg-yellow-400 transition-colors duration-300 flex-shrink-0"></div>
                            <span className="truncate text-xs xs:text-sm">{service.title}</span>
                          </div>
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact */}
              <SheetClose asChild>
                <Link
                  href="/#contact"
                  className="group flex items-center gap-2.5 xs:gap-3 sm:gap-4 px-3 xs:px-4 sm:px-5 py-2.5 xs:py-3 sm:py-4 rounded-lg xs:rounded-xl sm:rounded-2xl text-slate-200 hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-md xs:rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Phone className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-slate-300 group-hover:text-white" />
                  </div>
                  <span className="text-xs xs:text-sm sm:text-base font-semibold truncate">Contact</span>
                </Link>
              </SheetClose>
            </div>
          </nav>

          {/* Bottom Actions with enhanced responsive design */}
          <div className="border-t border-slate-700 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm px-3 xs:px-4 sm:px-6 py-4 xs:py-6 sm:py-8">
            <div className="text-center mb-3 xs:mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 sm:px-4 py-1.5 xs:py-2 rounded-full bg-slate-700/50 border border-slate-600 mb-2 xs:mb-3">
                <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0"></div>
                <span className="text-xs font-medium text-slate-300 truncate">24/7 Support Available</span>
              </div>
              <p className="text-xs xs:text-sm font-medium text-slate-200 mb-1">Need immediate help?</p>
              <p className="text-xs text-slate-400">We're here to assist you anytime</p>
            </div>
            
            <div className="space-y-2.5 xs:space-y-3 sm:space-y-4">
              <button
                onClick={dialPhone}
                className={cn(
                  "w-full inline-flex items-center justify-center gap-2 xs:gap-2.5 sm:gap-3 rounded-lg xs:rounded-xl sm:rounded-2xl px-3 xs:px-4 sm:px-6 py-2.5 xs:py-3 sm:py-4 text-xs xs:text-sm sm:text-base font-bold text-slate-800 shadow-lg xs:shadow-xl sm:shadow-2xl bg-gradient-to-r hover:scale-105 transition-all duration-300 transform",
                  accent
                )}
              >
                <Phone className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
                <span className="truncate">Call Now</span>
              </button>
              
              <button
                onClick={sendMessage}
                className="w-full inline-flex items-center justify-center gap-2 xs:gap-2.5 sm:gap-3 rounded-lg xs:rounded-xl sm:rounded-2xl px-3 xs:px-4 sm:px-6 py-2.5 xs:py-3 sm:py-4 text-xs xs:text-sm sm:text-base font-semibold text-slate-200 border-2 border-slate-600 hover:bg-slate-700/50 hover:border-slate-500 hover:text-white transition-all duration-300"
              >
                <MessageCircle className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
                <span className="truncate">WhatsApp Chat</span>
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
