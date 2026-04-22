const industries = [
  {
    icon: "fa-oil-can",
    title: "Energy & Oil/Gas",
    desc: "Critical asset tracking for high-value operations in remote locations.",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80",
    overlay: "from-black/70 via-black/40 to-transparent",
  },
  {
    icon: "fa-industry",
    title: "Manufacturers",
    desc: "End-to-end supply chain visibility from plant to delivery point.",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
    overlay: "from-black/75 via-black/45 to-transparent",
  },
  {
    icon: "fa-truck",
    title: "Transport & Logistics",
    desc: "Optimise routes, reduce fuel waste, and guarantee on-time deliveries.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    overlay: "from-[#003226]/80 via-[#003226]/50 to-transparent",
  },
  {
    icon: "fa-landmark",
    title: "Government",
    desc: "Accountability and transparency for public sector vehicle fleets.",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80",
    overlay: "from-black/70 via-black/40 to-transparent",
  },
  {
    icon: "fa-taxi",
    title: "Taxi & Rental",
    desc: "Protect your assets and ensure passenger safety with real-time monitoring.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    overlay: "from-black/65 via-black/35 to-transparent",
  },
  {
    icon: "fa-store",
    title: "Retail & FMCG",
    desc: "Last-mile delivery tracking and proof-of-delivery for retail operations.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    overlay: "from-[#3730a3]/75 via-[#3730a3]/45 to-transparent",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-[90px] bg-white">
      <div className="wrapper">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="flex items-center justify-center gap-2 text-[#00644E] text-xs font-bold uppercase tracking-widest mb-3">
            <span className="block w-7 h-0.5 bg-[#FFD461] rounded" />
            Who We Serve
            <span className="block w-7 h-0.5 bg-[#FFD461] rounded" />
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Built for Every Industry</h2>
          <p className="text-gray-500 leading-relaxed">
            Our telematics solutions are tailored to the specific demands of each sector we serve across East Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400 cursor-pointer border border-gray-100"
            >
              {/* Image with overlay */}
              <div
                className="h-52 relative overflow-hidden"
                style={{
                  backgroundImage: `url('${ind.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Dark overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${ind.overlay}`} />
                {/* Green tint on hover */}
                <div className="absolute inset-0 bg-[#00644E]/0 group-hover:bg-[#00644E]/40 transition-all duration-400" />
                {/* Icon */}
                <div className="absolute bottom-4 left-5 z-10 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center">
                    <i className={`fas ${ind.icon} text-white text-lg group-hover:text-[#FFD461] transition-colors duration-300`} />
                  </div>
                  <h4 className="font-bold text-white text-base drop-shadow">{ind.title}</h4>
                </div>
              </div>
              {/* Body */}
              <div className="p-5 bg-white">
                <p className="text-gray-500 text-sm leading-relaxed">{ind.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-1.5 mt-3 text-[#00644E] text-xs font-semibold hover:gap-3 transition-all">
                  Learn more <i className="fas fa-arrow-right text-[10px]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
