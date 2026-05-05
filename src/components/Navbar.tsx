"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, MapPin, Phone, Mail } from "lucide-react";

const solutionsDropdown = [
  { href: "/unity-platform", label: "Fleet Tracking", icon: "fa-location-dot", description: "Real-time GPS tracking and monitoring" },
  { href: "/analytics-engine", label: "Driver Management", icon: "fa-user-shield", description: "Comprehensive driver oversight and safety" },
  { href: "/video-telematics", label: "Video Telematics", icon: "fa-video", description: "AI dashcams for advanced safety and insights" },
  { href: "/analytics-engine", label: "Route Optimization", icon: "fa-route", description: "AI-powered route planning and optimization" },
  { href: "/fuel-management", label: "Fuel Management", icon: "fa-gas-pump", description: "Track fuel consumption and costs" },
  { href: "/unity-platform", label: "Maintenance Scheduling", icon: "fa-wrench", description: "Preventive maintenance and alerts" },
];

const industriesData = [];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggle = (label: string) =>
    setActiveDropdown(activeDropdown === label ? null : label);

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-[#00644E] text-white text-sm py-2.5 hidden lg:block">
        <div className="wrapper flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Kampala, Uganda</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>+256 702 510 668</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span>info@teletracfleets.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-white/80 text-xs">
            <span>24/7 Support Available</span>
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse block" />
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? "shadow-md" : "border-b border-gray-200"
          }`}
      >
        <div className="wrapper flex items-center h-20 gap-10">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/Teletrac_Fleet_Solutions_logo.png"
              alt="Teletrac Fleet Solutions"
              style={{ height: "48px", width: "auto" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="mx-auto hidden lg:flex items-center gap-2">

            <Link href="/" className="px-4 py-2.5 text-[15px] font-semibold text-gray-700 hover:text-[#00644E] hover:bg-gray-50 rounded-lg transition-colors">
              Home
            </Link>

            {/* Solutions */}
            <div className="relative">
              <button
                onClick={() => toggle("solutions")}
                className={`flex items-center gap-1.5 px-4 py-2.5 text-[15px] font-semibold rounded-lg transition-colors ${activeDropdown === "solutions" ? "text-[#00644E] bg-gray-50" : "text-gray-700 hover:text-[#00644E] hover:bg-gray-50"
                  }`}
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "solutions" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "solutions" && (
                <div className="absolute top-[calc(100%+8px)] -left-16 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-[650px] z-50">
                  <div className="p-6">
                    <p className="text-[10px] font-bold text-[#00644E] uppercase tracking-widest mb-4">Our Solutions</p>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                      {solutionsDropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="group/item flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100"
                        >
                          <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-[#00644E] group-hover/item:bg-[#00644E] group-hover/item:text-white transition-colors shrink-0 mt-0.5">
                            <i className={`fas ${item.icon} text-sm`} />
                          </div>
                          <div>
                            <p className="text-[13px] font-bold text-gray-800 group-hover/item:text-[#00644E] transition-colors mb-1">
                              {item.label}
                            </p>
                            <p className="text-[11px] text-gray-500 leading-relaxed group-hover/item:text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/industries" className="px-4 py-2.5 text-[15px] font-semibold text-gray-700 hover:text-[#00644E] hover:bg-gray-50 rounded-lg transition-colors">
              Industries
            </Link>

            <Link href="/about" className="px-4 py-2.5 text-[15px] font-semibold text-gray-700 hover:text-[#00644E] hover:bg-gray-50 rounded-lg transition-colors">
              About
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="#contact"
              className="px-6 py-3 text-[15px] font-semibold text-[#00644E] border-2 border-[#00644E] rounded-xl hover:bg-[#00644E] hover:text-white transition-all duration-200"
            >
              Sign In
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 text-[15px] font-semibold text-white bg-[#00644E] rounded-xl hover:bg-[#004d3c] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden ml-auto p-2 text-gray-700 hover:text-[#00644E] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl z-50">
            <div className="px-4 py-5 space-y-1">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-[#00644E] hover:bg-gray-50 rounded-lg transition-colors">
                Home
              </Link>

              {/* Mobile Solutions */}
              <div>
                <button onClick={() => toggle("mob-solutions")}
                  className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-gray-700 hover:text-[#00644E] hover:bg-gray-50 rounded-lg transition-colors">
                  Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "mob-solutions" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "mob-solutions" && (
                  <div className="ml-4 mt-1 space-y-1">
                    {solutionsDropdown.map((item) => (
                      <Link key={item.label} href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-[#00644E] hover:bg-gray-50 rounded-lg transition-colors">
                        <span>{item.icon}</span>{item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/industries" onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-[#00644E] hover:bg-gray-50 rounded-lg transition-colors">
                Industries
              </Link>

              {[{ label: "Features", href: "#services" }, { label: "Pricing", href: "#contact" }, { label: "About", href: "/about" }, { label: "Contact", href: "#contact" }].map((l) => (
                <Link key={l.label} href={l.href} onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-[#00644E] hover:bg-gray-50 rounded-lg transition-colors">
                  {l.label}
                </Link>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center py-3 text-sm font-semibold text-[#00644E] border-2 border-[#00644E] rounded-xl hover:bg-green-50 transition-colors">
                  Sign In
                </Link>
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center py-3 text-sm font-semibold text-white bg-[#00644E] rounded-xl hover:bg-[#004d3c] transition-colors">
                  Get Demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop to close dropdowns */}
      {activeDropdown && (
        <div className="fixed inset-0 z-40" onClick={() => setActiveDropdown(null)} />
      )}
    </>
  );
}
