"use client";
import { useState, useEffect } from "react";

const solutions = [
  { icon: "fa-map-marker-alt", label: "Vehicle Tracking" },
  { icon: "fa-car", label: "Vehicle Vetting" },
  { icon: "fa-clipboard-check", label: "Transport Audits" },
  { icon: "fa-graduation-cap", label: "Training Programs" },
  { icon: "fa-shield-alt", label: "Health & Safety" },
  { icon: "fa-tools", label: "Accessories" },
];

const industries = [
  { icon: "fa-oil-can", label: "Energy & Oil" },
  { icon: "fa-industry", label: "Manufacturers" },
  { icon: "fa-truck", label: "Transport & Logistics" },
  { icon: "fa-landmark", label: "Government" },
  { icon: "fa-taxi", label: "Taxi & Rental" },
  { icon: "fa-store", label: "Retail & FMCG" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDropdown = (name: string) =>
    setOpenDropdown(openDropdown === name ? null : name);

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-gray-100 transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-[1220px] mx-auto px-6 flex items-center h-[72px] gap-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <div className="w-10 h-10 bg-[#00644E] rounded-xl flex items-center justify-center">
            <i className="fas fa-satellite-dish text-[#FFD461] text-lg" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[#00644E] font-extrabold text-sm tracking-wide">TELETRAC</span>
            <span className="text-gray-400 font-semibold text-[10px] tracking-widest">FLEETS</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="ml-auto hidden lg:flex items-center gap-1">
          <a href="#home" className="px-3.5 py-2 text-sm font-medium text-[#00644E] rounded-lg bg-green-50">
            Home
          </a>

          {/* Solutions dropdown */}
          <div className="nav-item relative group">
            <a
              href="#services"
              className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-[#00644E] hover:bg-gray-50 transition-colors"
            >
              Solutions <i className="fas fa-chevron-down text-[10px] transition-transform group-hover:rotate-180" />
            </a>
            <div className="nav-dropdown hidden absolute top-[calc(100%+8px)] left-0 bg-white rounded-xl shadow-xl border border-gray-100 p-2 min-w-[220px] z-50">
              {solutions.map((s) => (
                <a
                  key={s.label}
                  href="#services"
                  className="flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-50 hover:text-[#00644E] transition-colors"
                >
                  <i className={`fas ${s.icon} text-[#00644E] w-4 text-sm`} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Industries dropdown */}
          <div className="nav-item relative group">
            <a
              href="#industries"
              className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-[#00644E] hover:bg-gray-50 transition-colors"
            >
              Industries <i className="fas fa-chevron-down text-[10px] transition-transform group-hover:rotate-180" />
            </a>
            <div className="nav-dropdown hidden absolute top-[calc(100%+8px)] left-0 bg-white rounded-xl shadow-xl border border-gray-100 p-2 min-w-[220px] z-50">
              {industries.map((ind) => (
                <a
                  key={ind.label}
                  href="#industries"
                  className="flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-50 hover:text-[#00644E] transition-colors"
                >
                  <i className={`fas ${ind.icon} text-[#00644E] w-4 text-sm`} />
                  {ind.label}
                </a>
              ))}
            </div>
          </div>

          <a href="#about" className="px-3.5 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-[#00644E] hover:bg-gray-50 transition-colors">
            About
          </a>
          <a href="#contact" className="px-3.5 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-[#00644E] hover:bg-gray-50 transition-colors">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex ml-4 shrink-0 items-center gap-2 px-5 py-2.5 bg-[#00644E] text-white text-sm font-semibold rounded-full hover:bg-[#004d3c] transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          Get Started
        </a>

        {/* Hamburger */}
        <button
          className="lg:hidden ml-auto flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1 shadow-lg">
          {["#home:Home", "#services:Solutions", "#industries:Industries", "#about:About", "#contact:Contact"].map((item) => {
            const [href, label] = item.split(":");
            return (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="py-3 border-b border-gray-100 text-sm font-medium text-gray-700"
              >
                {label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 text-center py-3 bg-[#00644E] text-white text-sm font-semibold rounded-full"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
