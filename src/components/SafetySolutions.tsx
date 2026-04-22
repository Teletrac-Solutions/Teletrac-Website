"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const solutions = [
  {
    icon: "fa-shield-check",
    title: "Driver Safety",
    description: "Real-time monitoring and alerts",
    value: "89%",
    label: "Incident Reduction",
  },
  {
    icon: "fa-gavel",
    title: "Regulatory Compliance",
    description: "Automated compliance tracking",
    value: "100%",
    label: "Compliance Coverage",
  },
  {
    icon: "fa-chart-line",
    title: "Risk Reduction",
    description: "Predictive analytics & insights",
    value: "65%",
    label: "Risk Mitigation",
  },
];

function AnimatedStat({ value, label, delay }: { value: string; label: string; delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`p-6 bg-gradient-to-br from-[#00644E]/10 to-[#FFD461]/5 rounded-2xl border border-[#00644E]/20 transform transition-all duration-700 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-600 text-sm font-medium">{label}</p>
        <div className="w-10 h-10 rounded-lg bg-[#FFD461]/20 flex items-center justify-center">
          <i className="fas fa-arrow-up text-[#00644E] text-lg" />
        </div>
      </div>
      <div className={`text-4xl font-bold text-[#00644E] mb-2 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        {isVisible && (
          <span className="inline-block animate-pulse">
            {value}
          </span>
        )}
      </div>
    </div>
  );
}

export default function SafetySolutions() {
  return (
    <section className="py-[90px] bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="wrapper">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left: Animated Infographics ── */}
          <div className="space-y-6 order-2 lg:order-1">
            {/* Main visual: Animated cards */}
            <div className="grid gap-4">
              {solutions.map((solution, idx) => (
                <div
                  key={solution.title}
                  className="group relative p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#00644E] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{
                    animation: `slideInLeft 0.6s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00644E]/10 to-[#FFD461]/10 flex items-center justify-center flex-shrink-0 group-hover:from-[#00644E]/20 group-hover:to-[#FFD461]/20 transition-all">
                      <i className={`fas ${solution.icon} text-[#00644E] text-lg`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{solution.title}</h3>
                      <p className="text-sm text-gray-600">{solution.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Animated stats below */}
            <style>{`
              @keyframes slideInLeft {
                from {
                  opacity: 0;
                  transform: translateX(-30px);
                }
                to {
                  opacity: 1;
                  transform: translateX(0);
                }
              }
            `}</style>
          </div>

          {/* ── Right: Text Content ── */}
          <div className="order-1 lg:order-2">
            <p className="flex items-center gap-2 text-[#00644E] text-xs font-bold uppercase tracking-widest mb-4">
              <span className="block w-7 h-0.5 bg-[#FFD461] rounded" />
              Our Solutions
            </p>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Safety & Compliance for <span className="text-[#00644E]">Complex Operations</span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-base mb-8">
              Discover how organizations with rigorous safety standards are leveraging our solutions to enhance driver safety, ensure regulatory compliance, and reduce operational risk across complex, multi-country operations.
            </p>

            {/* Key benefits list */}
            <div className="space-y-4 mb-10">
              {[
                "Real-time GPS tracking with instant safety alerts",
                "Automated compliance reporting for multiple jurisdictions",
                "Predictive analytics to identify and prevent risks",
              ].map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FFD461] flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-check text-[#00644E] text-xs font-bold" />
                  </div>
                  <p className="text-gray-700 text-sm">{benefit}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00644E] text-white font-semibold rounded-full hover:bg-[#004d3c] transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Explore All Solutions <i className="fas fa-arrow-right text-xs" />
            </Link>
          </div>
        </div>

        {/* ── Animated Statistics Row ── */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 pt-20 border-t border-slate-200">
          {[
            { value: "89%", label: "Safety Incident Reduction" },
            { value: "100%", label: "Regulatory Compliance" },
            { value: "65%", label: "Operational Risk Mitigation" },
          ].map((stat, idx) => (
            <AnimatedStat key={stat.label} value={stat.value} label={stat.label} delay={idx * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
