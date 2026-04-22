"use client";
import { useEffect, useState } from "react";

const solutions = ["Vehicle Tracking","Vehicle Vetting","Transport Audits","Training Programs","H&S Consultancy","Accessories"];
const industryLinks = ["Energy & Oil/Gas","Manufacturers","Transport & Logistics","Government","Taxi & Rental","Retail & FMCG"];
const company = ["About Us","Contact","Careers","Blog","Privacy Policy","Terms of Service"];
const regions = ["Kampala, Uganda","Dar es Salaam, Tanzania","Kigali, Rwanda"];
const socials = [
  { icon: "fa-facebook-f", href: "#" },
  { icon: "fa-linkedin-in", href: "#" },
  { icon: "fa-twitter", href: "#" },
  { icon: "fa-youtube", href: "#" },
];

export default function Footer() {
  const [year, setYear] = useState(2024);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="bg-[#0d1f1a]">
      <div className="wrapper pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12">
        {/* Brand */}
        <div>
          <a href="#home" className="flex items-center gap-2.5 mb-5">
            <div className="w-10 h-10 bg-[#FFD461]/15 rounded-xl flex items-center justify-center">
              <i className="fas fa-satellite-dish text-[#FFD461] text-lg" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[#FFD461] font-extrabold text-sm tracking-wide">TELETRAC</span>
              <span className="text-white/30 font-semibold text-[10px] tracking-widest">FLEETS</span>
            </div>
          </a>
          <p className="text-white/50 text-sm leading-relaxed max-w-[280px] mb-7">
            Simplifying your logistical processes with intelligent telematics solutions across East Africa.
          </p>
          <div className="flex gap-2.5">
            {socials.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                className="w-9 h-9 bg-white/[0.07] border border-white/10 rounded-full flex items-center justify-center text-white/55 text-xs hover:bg-[#FFD461] hover:text-black hover:border-[#FFD461] transition-all"
              >
                <i className={`fab ${s.icon}`} />
              </a>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Solutions</h5>
          <ul className="space-y-2.5">
            {solutions.map((s) => (
              <li key={s}>
                <a href="#services" className="text-white/45 text-sm hover:text-[#FFD461] transition-colors">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Industries</h5>
          <ul className="space-y-2.5">
            {industryLinks.map((ind) => (
              <li key={ind}>
                <a href="#industries" className="text-white/45 text-sm hover:text-[#FFD461] transition-colors">{ind}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Regions & Newsletter */}
        <div>
          <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Our Regions</h5>
          <ul className="space-y-2.5 mb-7">
            {regions.map((r) => (
              <li key={r} className="flex items-center gap-2 text-white/45 text-sm">
                <i className="fas fa-map-pin text-[#FFD461] text-[10px]" />
                {r}
              </li>
            ))}
          </ul>

          <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-3">Newsletter</h5>
          <form
            className="flex"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-3.5 py-2.5 bg-white/[0.07] border border-white/15 rounded-l-xl text-white text-sm placeholder-white/30 focus:border-[#FFD461] outline-none"
            />
            <button
              type="submit"
              className="px-4 bg-[#FFD461] text-black rounded-r-xl text-sm hover:bg-[#e6bc40] transition-colors"
            >
              <i className="fas fa-paper-plane" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/[0.07] mt-4">
        <div className="wrapper py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/30 text-xs">&copy; {year} Teletrac Fleets. All rights reserved.</p>
          <p className="text-white/30 text-xs">Designed with precision for East African fleet operators.</p>
        </div>
      </div>
    </footer>
  );
}
