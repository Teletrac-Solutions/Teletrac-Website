const services = [
  {
    icon: "fa-map-marked-alt",
    title: "Vehicle Tracking",
    desc: "Real-time GPS monitoring of your entire fleet. Know exactly where every vehicle is, 24/7, from any device.",
    image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=700&q=80",
  },
  {
    icon: "fa-car-side",
    title: "Vehicle Vetting",
    desc: "Comprehensive pre-deployment vehicle inspection and vetting to ensure your fleet meets safety and compliance standards.",
    image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=700&q=80",
  },
  {
    icon: "fa-clipboard-list",
    title: "Transport Audits",
    desc: "In-depth operational audits that identify inefficiencies, reduce risk, and deliver measurable cost savings.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80",
  },
  {
    icon: "fa-chalkboard-teacher",
    title: "Training Programs",
    desc: "Driver behaviour and fleet management training programs to maximise safety and performance across your team.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=80",
  },
  {
    icon: "fa-hard-hat",
    title: "Health & Safety Consultancy",
    desc: "Expert H&S consultancy tailored to transport operations. Protect your drivers, reduce liability, and ensure compliance.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",
  },
  {
    icon: "fa-microchip",
    title: "Tracking Accessories",
    desc: "Full range of telematics hardware, dashcams, fuel sensors, and accessories compatible with all vehicle brands.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-[90px] bg-gray-50">
      <div className="max-w-[1220px] mx-auto px-6">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Image banner */}
              <div
                className="h-44 relative overflow-hidden"
                style={{
                  backgroundImage: `url('${s.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Semi-transparent dark green overlay — image shows through */}
                <div className="absolute inset-0 bg-[#003226]/60 group-hover:bg-[#003226]/45 transition-all duration-300" />
                {/* Bottom gradient fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#003226]/80 via-transparent to-transparent" />
                {/* Icon badge */}
                <div className="absolute top-4 left-4 z-10 w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center text-[#FFD461] text-xl group-hover:bg-[#FFD461]/20 transition-all duration-300">
                  <i className={`fas ${s.icon}`} />
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                {/* Top accent bar on hover */}
                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-[#00644E] to-[#FFD461] mb-4 transition-all duration-300 rounded" />
                <h3 className="font-bold text-gray-900 text-lg mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-[#00644E] text-sm font-semibold hover:gap-3 transition-all"
                >
                  Learn more <i className="fas fa-arrow-right text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
