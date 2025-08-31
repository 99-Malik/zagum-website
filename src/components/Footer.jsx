"use client";
import { companyName, dialPhone, sendMessage } from "@/libs/data";
import NavLink from "./header/NavLink";
import Image from "next/image";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Wrench,
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
  Award,
  Zap,
  Target,
  Sparkles,
  Globe,
  Heart
} from "lucide-react";

const Footer = () => {
  const pathname = usePathname();
  const isWaterHeaterRoute = pathname === "/companies/water-heater";
  const company = isWaterHeaterRoute ? "Home Appliance Fix UAE" : companyName;

  // Brand colors for consistency
  const BRAND = {
    navy: "#182333",
    navyDeep: "#0E1622",
    orangeFrom: "#feaf0d",
    orangeTo: "#fbbf24",
    gray: "#6B7280"
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Creative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ background: BRAND.orangeFrom }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: BRAND.navy }} />
      </div>

      <div className="relative z-10">
        {/* Hero Footer Section */}
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              {/* Company Brand Section */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-4"
              >
                {/* Company Logo */}
                <div className="mb-8">
                  {company === "Siemens" ? (
                    <Link href="/companies/siemens" className="inline-block">
                      <Image
                        src="/static/siemens.svg"
                        width={180}
                        height={60}
                        alt="Siemens"
                        className="h-16 w-auto brightness-0 invert"
                      />
                    </Link>
                  ) : company === "Bosch" ? (
                    <Link href="/companies/bosch" className="inline-block">
                      <Image 
                        src="/static/bosch.svg" 
                        width={180} 
                        height={60} 
                        alt="Bosch" 
                        className="h-16 w-auto brightness-0 invert"
                      />
                    </Link>
                  ) : company === "Samsung" ? (
                    <Link href="/companies/samsung" className="inline-block">
                      <Image
                        src="/static/samsung.svg"
                        width={150}
                        height={60}
                        alt="Samsung"
                        className="h-16 w-auto brightness-0 invert"
                      />
                    </Link>
                  ) : company === "Lg" ? (
                    <Link href="/companies/lg" className="inline-block">
                      <Image 
                        src="/static/lg.svg" 
                        width={120} 
                        height={60} 
                        alt="LG" 
                        className="h-16 w-auto brightness-0 invert"
                      />
                    </Link>
                  ) : (
                    <Link href="/" className="inline-block">
                      <div className="flex items-center space-x-4">
                        <div 
                          className="w-20 h-14 rounded-2xl flex items-center justify-center shadow-2xl"
                          style={{ background: `linear-gradient(135deg, ${BRAND.orangeFrom}, ${BRAND.orangeTo})` }}
                        >
                          <span className="text-slate-800 font-black text-xl">N</span>
                        </div>
                        <span className="text-3xl font-black text-white">{company}</span>
                      </div>
                    </Link>
                  )}
                </div>

                {/* Company Description */}
                <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-md">
                  Your trusted partner in home appliance repair across the UAE. 
                  We bring expertise, reliability, and excellence to every service call.
                </p>

                {/* Trust Badges */}
                {/* <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    { icon: Award, text: "Certified", color: "bg-green-500" },
                    { icon: Star, text: "5-Star", color: "bg-yellow-500" },
                    { icon: Shield, text: "Insured", color: "bg-blue-500" },
                    { icon: CheckCircle, text: "Warranty", color: "bg-purple-500" }
                  ].map((badge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-full ${badge.color} text-white text-sm font-semibold`}
                    >
                      <badge.icon size={16} />
                      {badge.text}
                    </motion.div>
                  ))}
                </div> */}

                <div className="flex items-center gap-4">
                  <span className="text-slate-400 font-medium">Connect with us:</span>
                  <div className="flex gap-3">
                    {[
                      { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
                      { icon: Twitter, href: "#", color: "hover:bg-sky-500" },
                      { icon: Instagram, href: "#", color: "hover:bg-pink-600" },
                      { icon: Linkedin, href: "#", color: "hover:bg-blue-700" }
                    ].map((social) => (
                      <Link
                        key={social.icon.name}
                        href={social.href}
                        className={`w-10 h-10 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                      >
                        <social.icon size={18} />
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Services & Links */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Services */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <Wrench size={20} style={{ color: BRAND.orangeFrom }} />
                      Our Services
                    </h3>
                    <div className="space-y-3">
                      {/* getData(company).slice(0, 6).map((service, index) => ( */}
                        <motion.div
                          key={0} // Changed to a fixed key for demonstration
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0 * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Link
                            href={`/#${"Water Heater"}`} // Placeholder for service slug
                            className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 group"
                          >
                            <div 
                              className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              style={{ background: BRAND.orangeFrom }}
                            />
                            <span className="text-slate-300 group-hover:text-white transition-colors">
                              Water Heater Repair
                            </span>
                          </Link>
                        </motion.div>
                        <motion.div
                          key={1} // Changed to a fixed key for demonstration
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1 * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Link
                            href={`/#${"Refrigerator"}`} // Placeholder for service slug
                            className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 group"
                          >
                            <div 
                              className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              style={{ background: BRAND.orangeFrom }}
                            />
                            <span className="text-slate-300 group-hover:text-white transition-colors">
                              Refrigerator Repair
                            </span>
                          </Link>
                        </motion.div>
                        <motion.div
                          key={2} // Changed to a fixed key for demonstration
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 2 * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Link
                            href={`/#${"Washing Machine"}`} // Placeholder for service slug
                            className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 group"
                          >
                            <div 
                              className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              style={{ background: BRAND.orangeFrom }}
                            />
                            <span className="text-slate-300 group-hover:text-white transition-colors">
                              Washing Machine Repair
                            </span>
                          </Link>
                        </motion.div>
                        <motion.div
                          key={3} // Changed to a fixed key for demonstration
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 3 * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Link
                            href={`/#${"Dishwasher"}`} // Placeholder for service slug
                            className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 group"
                          >
                            <div 
                              className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              style={{ background: BRAND.orangeFrom }}
                            />
                            <span className="text-slate-300 group-hover:text-white transition-colors">
                              Dishwasher Repair
                            </span>
                          </Link>
                        </motion.div>
                        <motion.div
                          key={4} // Changed to a fixed key for demonstration
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 4 * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Link
                            href={`/#${"Oven"}`} // Placeholder for service slug
                            className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 group"
                          >
                            <div 
                              className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              style={{ background: BRAND.orangeFrom }}
                            />
                            <span className="text-slate-300 group-hover:text-white transition-colors">
                              Oven Repair
                            </span>
                          </Link>
                        </motion.div>
                        <motion.div
                          key={5} // Changed to a fixed key for demonstration
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 5 * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Link
                            href={`/#${"Microwave"}`} // Placeholder for service slug
                            className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 group"
                          >
                            <div 
                              className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              style={{ background: BRAND.orangeFrom }}
                            />
                            <span className="text-slate-300 group-hover:text-white transition-colors">
                              Microwave Repair
                            </span>
                          </Link>
                        </motion.div>
                      {/* ))} */}
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <ArrowRight size={20} style={{ color: BRAND.orangeFrom }} />
                      Quick Links
                    </h3>
                    <div className="space-y-3">
                      {[
                        { title: "Home", href: "/", icon: Globe },
                        { title: "About Us", href: "/#about", icon: Heart },
                        { title: "Services", href: "/#services", icon: Target },
                        { title: "Contact", href: "/#contact", icon: MessageCircle },
                        { title: "Get Quote", action: dialPhone, icon: Phone },
                        { title: "Emergency", action: dialPhone, icon: Zap }
                      ].map((link, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                          viewport={{ once: true }}
                        >
                          {link.action ? (
                            <button
                              onClick={link.action}
                              className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 group w-full text-left"
                            >
                              <link.icon size={16} className="text-slate-400 group-hover:text-white transition-colors" />
                              <span className="text-slate-300 group-hover:text-white transition-colors">
                                {link.title}
                              </span>
                            </button>
                          ) : (
                            <Link
                              href={link.href}
                              className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 group"
                            >
                              <link.icon size={16} className="text-slate-400 group-hover:text-white transition-colors" />
                              <span className="text-slate-300 group-hover:text-white transition-colors">
                                {link.title}
                              </span>
                            </Link>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                      <MessageCircle size={20} style={{ color: BRAND.orangeFrom }} />
                      Contact Info
                    </h3>
                    <div className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                      >
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                              <div 
                                className="w-10 h-10 rounded-lg flex items-center justify-center"
                                style={{ background: `linear-gradient(135deg, ${BRAND.orangeFrom}, ${BRAND.orangeTo})` }}
                              >
                                <Phone size={18} className="text-slate-800" />
                              </div>
                              <div>
                                <h4 className="text-white font-semibold">Call Us</h4>
                                <p className="text-slate-400 text-sm">24/7 Available</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                              <div 
                                className="w-10 h-10 rounded-lg flex items-center justify-center"
                                style={{ background: `linear-gradient(135deg, ${BRAND.orangeFrom}, ${BRAND.orangeTo})` }}
                              >
                                <MapPin size={18} className="text-slate-800" />
                              </div>
                              <div>
                                <h4 className="text-white font-semibold">Location</h4>
                                <p className="text-slate-400 text-sm">UAE Wide Service</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                              <div 
                                className="w-10 h-10 rounded-lg flex items-center justify-center"
                                style={{ background: `linear-gradient(135deg, ${BRAND.orangeFrom}, ${BRAND.orangeTo})` }}
                              >
                                <Clock size={18} className="text-slate-800" />
                              </div>
                              <div>
                                <h4 className="text-white font-semibold">Working Hours</h4>
                                <p className="text-slate-400 text-sm">Emergency Service</p>
                              </div>
                            </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Call to Action Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center py-12 rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600"
            >
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Sparkles size={24} style={{ color: BRAND.orangeFrom }} />
                  <span className="text-slate-300 font-semibold">Ready to get started?</span>
                  <Sparkles size={24} style={{ color: BRAND.orangeFrom }} />
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Experience the <span style={{ color: BRAND.orangeFrom }}>Difference</span> Today
                </h3>
                
                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                  Join thousands of satisfied customers who chose excellence. 
                  Get a free quote and see why we're the trusted choice for appliance repair.
                </p>
                
                <div className="flex justify-center">
                  <CallAndWhatsappButton company={company} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-slate-700 bg-slate-900/50 backdrop-blur-sm">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-slate-400 text-sm">
                © 2024 {company}. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
                {[
                  { title: "Privacy Policy", href: "/privacy" },
                  { title: "Terms of Service", href: "/terms" },
                  { title: "Sitemap", href: "/sitemap" }
                ].map((link) => (
                  <Link 
                    key={link.title}
                    href={link.href} 
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
