export default function CtaBanner() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1800&q=85')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#004d3c]/92 to-[#003226]/90" />
      <div className="relative z-10 max-w-[680px] mx-auto px-6 text-center">
        <h2 className="text-white font-extrabold mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
          Ready to Take Control of Your Fleet?
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10">
          Join hundreds of businesses across East Africa that trust Teletrac Fleets to keep their operations running smoothly.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFD461] text-black font-semibold rounded-full text-base hover:bg-[#e6bc40] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(255,212,97,0.45)]"
          >
            Schedule a Consultation
          </a>
          <a
            href="tel:+256702510668"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full text-base border-2 border-white/60 hover:bg-white hover:text-[#00644E] transition-all hover:-translate-y-0.5"
          >
            <i className="fas fa-phone" /> Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
