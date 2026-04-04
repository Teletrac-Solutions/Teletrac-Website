"use client";
import { useEffect, useRef } from "react";

const stats = [
  { count: 500, suffix: "+", label: "Fleets Managed" },
  { count: 3,   suffix: "",  label: "Countries" },
  { count: 10,  suffix: "+", label: "Years Experience" },
  { count: 24,  suffix: "/7", label: "Support" },
];

function useCounter(ref: React.RefObject<HTMLSpanElement | null>, target: number) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      const duration = 1800;
      const step = Math.ceil(target / (duration / 16));
      let cur = 0;
      const tick = () => {
        cur = Math.min(cur + step, target);
        if (el) el.textContent = String(cur);
        if (cur < target) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, target]);
}

function Counter({ count, suffix, label }: { count: number; suffix: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useCounter(ref, count);
  return (
    <div className="flex flex-col items-start">
      <div className="flex items-end leading-none">
        <span ref={ref} className="text-[#FFD461] text-4xl font-extrabold">0</span>
        <span className="text-[#FFD461] text-2xl font-extrabold mb-0.5">{suffix}</span>
      </div>
      <span className="text-white/60 text-[11px] uppercase tracking-widest mt-1">{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-112px)] flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1920&q=85')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003226]/92 via-[#00644E]/80 to-[#003226]/75" />
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,212,97,0.07) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-[1220px] mx-auto px-6 py-20 w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#FFD461]/15 border border-[#FFD461]/35 text-[#FFD461] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-7">
          <span className="w-1.5 h-1.5 bg-[#FFD461] rounded-full animate-pulse-dot" />
          East Africa&apos;s Trusted Fleet Technology Partner
        </div>

        {/* Headline */}
        <h1 className="text-white font-extrabold leading-[1.1] tracking-tight mb-6" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4rem)" }}>
          Intelligent Fleet Management<br />
          <span className="text-[#FFD461]">Simplified.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/82 max-w-[620px] mb-10 leading-relaxed" style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}>
          Specialised telematics and vehicle tracking solutions that give you complete visibility, control, and confidence over every vehicle in your fleet — across Uganda, Tanzania and Rwanda.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFD461] text-black font-semibold rounded-full text-base hover:bg-[#e6bc40] transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(255,212,97,0.5)]"
          >
            Schedule a Consultation
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full text-base border-2 border-white/50 hover:bg-white/12 hover:border-white transition-all hover:-translate-y-1"
          >
            <i className="fas fa-play-circle" /> Explore Solutions
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-8">
              <Counter {...s} />
              {i < stats.length - 1 && (
                <div className="w-px h-12 bg-white/20 hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll arrow */}
      <a
        href="#stats"
        className="animate-bounce-arrow absolute bottom-8 left-1/2 w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white/70 text-xs hover:border-white/60"
      >
        <i className="fas fa-chevron-down" />
      </a>
    </section>
  );
}
