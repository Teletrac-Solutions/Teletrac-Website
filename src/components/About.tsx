const features = [
  {
    title: "Vehicle Brand Agnostic",
    desc: "Compatible with all makes and models",
  },
  {
    title: "Certified Installation Team",
    desc: "Professional fitting across 3 countries",
  },
  {
    title: "Dedicated Account Support",
    desc: "A named point of contact for every client",
  },
];

export default function About() {
  return (
    <section id="about" className="py-[90px] bg-gray-50">
      <div className="max-w-[1220px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* Visual */}
        <div className="relative hidden lg:block">
          <div className="relative h-[440px] rounded-3xl overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=900&q=85')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#003226]/75 to-[#00644E]/50" />
          </div>

          {/* Floating cards */}
          <div className="absolute top-6 -left-6 bg-white rounded-xl px-4 py-3 flex items-center gap-2.5 shadow-xl text-sm font-semibold text-gray-800 whitespace-nowrap">
            <i className="fas fa-satellite-dish text-[#00644E] text-lg" />
            GPS Precision Tracking
          </div>
          <div className="absolute bottom-10 -right-6 bg-white rounded-xl px-4 py-3 flex items-center gap-2.5 shadow-xl text-sm font-semibold text-gray-800 whitespace-nowrap">
            <i className="fas fa-map-pin text-[#00644E] text-lg" />
            Live Location Updates
          </div>

          {/* Badge */}
          <div className="absolute -bottom-5 left-10 bg-[#FFD461] rounded-xl px-6 py-4 shadow-xl text-center">
            <strong className="block text-3xl font-extrabold text-black leading-none">10+</strong>
            <span className="text-[10px] font-bold uppercase tracking-widest text-black/60">Years in East Africa</span>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="flex items-center gap-2 text-[#00644E] text-xs font-bold uppercase tracking-widest mb-3">
            <span className="block w-7 h-0.5 bg-[#FFD461] rounded" />
            Who We Are
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
            Seasoned Experts in Fleet Telematics
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            Teletrac Fleets is East Africa&apos;s trusted partner for intelligent vehicle tracking and fleet management. With over a decade of experience, we serve businesses of all sizes — from single-vehicle operators to large enterprise fleets.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Our team of certified engineers and fleet consultants provides end-to-end support: from hardware installation and system configuration to ongoing monitoring, reporting, and compliance consultancy.
          </p>

          <div className="flex flex-col gap-4 mb-10">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-3.5">
                <i className="fas fa-check-circle text-[#00644E] text-xl mt-0.5 shrink-0" />
                <div>
                  <strong className="block text-sm font-bold text-gray-900">{f.title}</strong>
                  <span className="text-sm text-gray-500">{f.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00644E] text-white font-semibold rounded-full hover:bg-[#004d3c] transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
