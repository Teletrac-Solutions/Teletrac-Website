const services = [
  {
    icon: "fa-map-marked-alt",
    title: "Vehicle Tracking",
    shortDesc: "Real-Time Fleet Mastery",
    desc: "Know exactly where every vehicle is, 24/7, with high-precision GPS monitoring optimized for East African terrain.",
    stats: { number: "99.9%", label: "System Uptime" },
    features: [
      { title: "Live GPS", icon: "fa-location-dot" },
      { title: "Geofencing", icon: "fa-draw-polygon" },
      { title: "Path History", icon: "fa-route" }
    ],
  },
  {
    icon: "fa-car-side",
    title: "Vehicle Vetting",
    shortDesc: "Compliance & Safety",
    desc: "Rigorous pre-deployment inspections ensuring your fleet meets the highest safety standards and regional compliance.",
    stats: { number: "100%", label: "Audit Readiness" },
    features: [
      { title: "Multi-Point Check", icon: "fa-list-check" },
      { title: "Compliance Logs", icon: "fa-file-shield" },
      { title: "Risk Ratings", icon: "fa-triangle-exclamation" }
    ],
  },
  {
    icon: "fa-clipboard-list",
    title: "Transport Audits",
    shortDesc: "Efficiency Optimization",
    desc: "Deep-dive operational audits that uncover hidden costs, eliminate waste, and boost your bottom line with data.",
    stats: { number: "30%", label: "Avg. Cost Savings" },
    features: [
      { title: "Waste Analysis", icon: "fa-recycle" },
      { title: "Route Efficiency", icon: "fa-map-pin" },
      { title: "Profit Analytics", icon: "fa-chart-pie" }
    ],
  },
  {
    icon: "fa-chalkboard-teacher",
    title: "Training Programs",
    shortDesc: "Human Performance",
    desc: "Expert-led driver and management training focusing on defensive driving and fuel-efficient performance.",
    stats: { number: "85%", label: "Safety Improvement" },
    features: [
      { title: "Defensive Driving", icon: "fa-user-shield" },
      { title: "Fuel Economy", icon: "fa-gas-pump" },
      { title: "Soft Skills", icon: "fa-graduation-cap" }
    ],
  },
  {
    icon: "fa-hard-hat",
    title: "H&S Consultancy",
    shortDesc: "Risk Mitigation",
    desc: "Tailored Health & Safety services for transport operations to protect your team and minimize organizational liability.",
    stats: { number: "15yr+", label: "Expert Experience" },
    features: [
      { title: "Policy Audits", icon: "fa-gavel" },
      { title: "Site Inspections", icon: "fa-clipboard-check" },
      { title: "Incident Support", icon: "fa-ambulance" }
    ],
  },
  {
    icon: "fa-microchip",
    title: "Hardware Solutions",
    shortDesc: "Advanced IoT Suite",
    desc: "High-grade telematics hardware, dashcams, and fuel sensors compatible with all major vehicle and equipment brands.",
    stats: { number: "50k+", label: "Devices Deployed" },
    features: [
      { title: "AI Dashcams", icon: "fa-video" },
      { title: "Fuel Sensors", icon: "fa-droplet" },
      { title: "Asset Tags", icon: "fa-nfc-symbol" }
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-[90px] bg-gray-50">
      <div className="wrapper">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="flex items-center justify-center gap-2 text-[#00644E] text-xs font-bold uppercase tracking-widest mb-3">
            <span className="block w-7 h-0.5 bg-[#FFD461] rounded" />
            What We Offer
            <span className="block w-7 h-0.5 bg-[#FFD461] rounded" />
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Comprehensive Fleet Solutions</h2>
          <p className="text-gray-500 leading-relaxed">
            From GPS installation to full transport audit, we provide end-to-end fleet management services designed for East African operations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-[32px] overflow-hidden border border-slate-200 hover:border-[#00644E] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col"
            >
              {/* Header with icon-gradient */}
              <div className="h-40 bg-gradient-to-br from-[#00644E]/5 to-[#FFD461]/10 group-hover:from-[#00644E]/15 group-hover:to-[#FFD461]/20 flex items-center justify-center transition-all duration-500">
                <i className={`fas ${s.icon} text-6xl text-[#00644E] opacity-70 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-110`} />
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-[10px] text-[#00644E] font-black mb-3 uppercase tracking-[0.25em]">{s.shortDesc}</p>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-4 group-hover:text-[#00644E] transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">{s.desc}</p>

                {/* Impact Metric Box (Styled from Solutions) */}
                <div className="mb-8 p-4 bg-gradient-to-r from-[#00644E]/5 to-[#FFD461]/5 rounded-2xl border border-[#00644E]/10">
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold mb-1">{s.stats.label}</p>
                  <p className="text-3xl font-black text-[#00644E]">{s.stats.number}</p>
                </div>

                {/* Mini Features List */}
                <div className="space-y-4 mb-8">
                  {s.features.map((feature) => (
                    <div key={feature.title} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#FFD461]/20 flex items-center justify-center text-[#00644E] text-xs">
                        <i className={`fas ${feature.icon}`} />
                      </div>
                      <span className="text-xs font-bold text-gray-700 tracking-tight">{feature.title}</span>
                    </div>
                  ))}
                </div>

                {/* Call to Action */}
                <a
                  href="#contact"
                  className="mt-auto group/btn inline-flex items-center gap-2 text-[#00644E] text-sm font-bold hover:gap-3 transition-all"
                >
                  Explore Details <i className="fas fa-arrow-right text-xs group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
