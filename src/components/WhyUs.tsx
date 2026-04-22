const cards = [
  {
    num: "01",
    icon: "fa-bolt",
    title: "Fast Deployment",
    desc: "From contract to live tracking in as little as 48 hours. Our installation teams operate across all three countries simultaneously.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    num: "02",
    icon: "fa-lock",
    title: "Secure & Reliable",
    desc: "Military-grade data encryption and 99.9% uptime SLA ensures your fleet data is always secure and accessible.",
    image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=600&q=80",
  },
  {
    num: "03",
    icon: "fa-tachometer-alt",
    title: "Actionable Insights",
    desc: "Intelligent dashboards and automated reports give you the data you need to make smarter fleet decisions every day.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    num: "04",
    icon: "fa-globe-africa",
    title: "Local Expertise",
    desc: "Deep knowledge of East African roads, regulations, and operational realities — built into every solution we deliver.",
    image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=600&q=80",
  },
];

export default function WhyUs() {
  return (
    <section
      className="py-[90px] relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1800&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark green overlay over background */}
      <div className="absolute inset-0 bg-[#003226]/90" />

      <div className="relative z-10 wrapper">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="flex items-center justify-center gap-2 text-[#FFD461] text-xs font-bold uppercase tracking-widest mb-3">
            <span className="block w-7 h-0.5 bg-[#FFD461]/40 rounded" />
            Why Teletrac Fleets
            <span className="block w-7 h-0.5 bg-[#FFD461]/40 rounded" />
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">The Teletrac Advantage</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group relative rounded-2xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
            >
              {/* Card background image */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('${c.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              {/* Transparent overlay — image subtly visible */}
              <div className="absolute inset-0 bg-[#003226]/78 group-hover:bg-[#003226]/65 transition-all duration-300" />
              {/* Glassmorphism border effect */}
              <div className="absolute inset-0 border border-white/10 group-hover:border-[#FFD461]/40 rounded-2xl transition-all duration-300" />

              {/* Content */}
              <div className="relative z-10 p-8">
                <p className="text-[#FFD461]/50 text-xs font-extrabold tracking-widest mb-4">{c.num}</p>
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm group-hover:bg-[#FFD461] border border-white/15 group-hover:border-[#FFD461] flex items-center justify-center text-[#FFD461] group-hover:text-black text-xl mb-5 transition-all duration-300">
                  <i className={`fas ${c.icon}`} />
                </div>
                <h4 className="text-white font-bold text-base mb-3">{c.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
