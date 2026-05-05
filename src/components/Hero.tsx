"use client";
import { useEffect, useRef } from "react";

const mainStats = [
  { count: 1500, suffix: "+", label: "Fleets Managed" },
  { count: 3, suffix: "", label: "Countries" },
  { count: 10, suffix: "+", label: "Years Experience" },
];

const impactStats = [
  { count: 25, suffix: "%", label: "Cost Savings" },
  { count: 99.9, suffix: "%", label: "Uptime", decimals: 1 },
  { count: 24, suffix: "/7", label: "Support" },
];

const features = [
  {
    icon: <i className="fas fa-satellite-dish" />,
    title: "Precision Tracking",
    description: "Real-time GPS monitoring with sub-meter accuracy across East Africa."
  },
  {
    icon: <i className="fas fa-gas-pump" />,
    title: "Fuel Intelligence",
    description: "Advanced sensors to prevent theft and optimize fleet consumption."
  },
  {
    icon: <i className="fas fa-shield-halved" />,
    title: "Safety & Compliance",
    description: "AI-driven driver behavior analysis and automated compliance reporting."
  }
];

function useCounter(ref: React.RefObject<HTMLSpanElement | null>, target: number, decimals: number = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId: number;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();

      const duration = 2000;
      const startTime = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const current = progress * target;
        if (el) el.textContent = current.toFixed(decimals);
        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        }
      };
      rafId = requestAnimationFrame(tick);
    }, { threshold: 0.5 });

    obs.observe(el);
    return () => {
      obs.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [ref, target, decimals]);
}

function Counter({ count, suffix, label, decimals = 0, size = "large" }: { count: number; suffix: string; label: string; decimals?: number; size?: "small" | "large" }) {
  const ref = useRef<HTMLSpanElement>(null);
  useCounter(ref, count, decimals);

  const labelSize = size === "large" ? "text-[11px]" : "text-[10px]";
  const numSize = size === "large" ? "text-4xl" : "text-3xl";
  const suffixSize = size === "large" ? "text-2xl" : "text-xl";

  return (
    <div className="flex flex-col items-start min-w-[100px]">
      <div className="flex items-end leading-none">
        <span ref={ref} className={`${numSize} text-[#FFD461] font-extrabold`}>0</span>
        <span className={`${suffixSize} text-[#FFD461] font-extrabold mb-0.5 ml-0.5`}>{suffix}</span>
      </div>
      <span className={`${labelSize} text-white/50 uppercase tracking-[0.2em] font-bold mt-2`}>{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1920&q=85')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003226] via-[#003226]/95 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#003226] via-transparent to-transparent opacity-60" />

      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,212,97,0.05) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 wrapper">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Left Column: Headline & CTA */}
          <div className="animate-fade-in flex flex-col h-full">
            <div className="flex-1 flex flex-col justify-center pb-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-[#FFD461]/10 border border-[#FFD461]/30 text-[#FFD461] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] px-5 py-2.5 rounded-full mb-8 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD461] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD461]"></span>
                </span>
                East Africa&apos;s Trusted Fleet Partner
              </div>

              {/* Headline */}
              <h1 className="text-white font-extrabold leading-[1.05] tracking-tight mb-8" style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}>
                Intelligent Fleet<br />
                Management <span className="text-[#FFD461]">Simplified.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-white/80 max-w-[580px] mb-12 leading-relaxed font-medium" style={{ fontSize: "clamp(1.05rem, 1.2vw, 1.25rem)" }}>
                Revolutionizing logistics across <span className="text-white font-semibold">Uganda, Tanzania, and Rwanda</span> with localized telematics that grant you complete operational mastery.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-5 mb-16">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#FFD461] text-black font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(255,212,97,0.3)] overflow-hidden"
                >
                  <span className="relative z-10">Schedule a Consultation</span>
                  <i className="fas fa-arrow-right relative z-10 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/10 transition-all hover:border-white/40"
                >
                  Explore Solutions
                </a>
              </div>

            </div>
            {/* Stats Row */}
            <div className="mt-auto border-t border-white/10 pt-10">
              <div className="grid grid-cols-3 gap-6">
                {mainStats.map((s) => (
                  <Counter key={s.label} {...s} size="large" />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Feature Cards */}
          <div className="hidden lg:flex flex-col h-full perspective-1000">
            <div className="flex-1 flex flex-col justify-center gap-6 pb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:rotate-x-2 border-l-4 border-l-transparent hover:border-l-[#FFD461]"
                  style={{
                    animation: `fade-up 0.8s ease-out forwards ${0.3 + index * 0.15}s`,
                    opacity: 0
                  }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-[#FFD461]/10 rounded-xl flex items-center justify-center text-[#FFD461] border border-[#FFD461]/20 group-hover:bg-[#FFD461] group-hover:text-black transition-colors duration-500 text-2xl">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                        {feature.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed text-sm font-medium group-hover:text-white/80 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Impact Badges */}
            <div className="mt-auto border-t border-white/10 pt-10 grid grid-cols-3 gap-6">
              {impactStats.map((s, i) => (
                <div
                  key={i}
                  style={{
                    animation: `fade-up 0.8s ease-out forwards ${0.8 + i * 0.1}s`,
                    opacity: 0
                  }}
                >
                  <Counter {...s} size="large" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
