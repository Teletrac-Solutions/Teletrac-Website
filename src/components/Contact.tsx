"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-[90px] bg-white">
      <div className="wrapper grid lg:grid-cols-[1fr_1.3fr] gap-20 items-start">
        {/* Info */}
        <div>
          <p className="flex items-center gap-2 text-[#00644E] text-xs font-bold uppercase tracking-widest mb-3">
            <span className="block w-7 h-0.5 bg-[#FFD461] rounded" />
            Get In Touch
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
            Let&apos;s Discuss Your Fleet
          </h2>
          <p className="text-gray-500 leading-relaxed mb-10">
            Whether you need a quote, a demo, or just want to explore your options, our team is ready to help.
          </p>

          <div className="flex flex-col gap-5 mb-10">
            {[
              { icon: "fa-phone-alt", label: "Phone", value: "+256 702 510 668", href: "tel:+256702510668" },
              { icon: "fa-envelope",  label: "Email", value: "info@teletracfleets.com", href: "mailto:info@teletracfleets.com" },
              { icon: "fa-map-marker-alt", label: "Regions", value: "Uganda · Tanzania · Rwanda", href: null },
            ].map((d) => (
              <div key={d.label} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-[#00644E] shrink-0">
                  <i className={`fas ${d.icon}`} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} className="text-sm font-medium text-gray-800 hover:text-[#00644E] transition-colors">{d.value}</a>
                  ) : (
                    <span className="text-sm font-medium text-gray-800">{d.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            {[
              { icon: "fa-facebook-f",  href: "#" },
              { icon: "fa-linkedin-in", href: "#" },
              { icon: "fa-twitter",     href: "#" },
              { icon: "fa-youtube",     href: "#" },
            ].map((s) => (
              <a
                key={s.icon}
                href={s.href}
                className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-500 text-sm hover:bg-[#00644E] hover:text-white transition-all hover:-translate-y-0.5"
              >
                <i className={`fab ${s.icon}`} />
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">First Name</label>
                <input type="text" placeholder="John" required className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-xl text-sm focus:border-[#00644E] focus:ring-2 focus:ring-[#00644E]/10 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Last Name</label>
                <input type="text" placeholder="Doe" required className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-xl text-sm focus:border-[#00644E] focus:ring-2 focus:ring-[#00644E]/10 outline-none transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Company</label>
              <input type="text" placeholder="Your company name" className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-xl text-sm focus:border-[#00644E] focus:ring-2 focus:ring-[#00644E]/10 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email</label>
              <input type="email" placeholder="john@company.com" required className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-xl text-sm focus:border-[#00644E] focus:ring-2 focus:ring-[#00644E]/10 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Service of Interest</label>
              <select className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-xl text-sm focus:border-[#00644E] focus:ring-2 focus:ring-[#00644E]/10 outline-none transition-all appearance-none bg-white cursor-pointer text-gray-700">
                <option value="">Select a service</option>
                {["Vehicle Tracking","Vehicle Vetting","Transport Audits","Training Programs","Health & Safety Consultancy","Accessories"].map(o => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Message</label>
              <textarea rows={4} placeholder="Tell us about your fleet size and requirements..." className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-xl text-sm focus:border-[#00644E] focus:ring-2 focus:ring-[#00644E]/10 outline-none transition-all resize-y" />
            </div>
            <button
              type="submit"
              className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm transition-all ${
                sent
                  ? "bg-green-600 text-white"
                  : "bg-[#00644E] text-white hover:bg-[#004d3c] hover:-translate-y-0.5 hover:shadow-lg"
              }`}
            >
              {sent ? (
                <><i className="fas fa-check-circle" /> Message Sent!</>
              ) : (
                <><i className="fas fa-paper-plane" /> Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
