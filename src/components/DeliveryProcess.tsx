"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    icon: "fa-magnifying-glass-chart",
    title: "Understanding Specific Needs",
    subtitle: "Discovery & Assessment",
    description:
      "We begin with a detailed assessment of your fleet's specific challenges — whether reducing fuel consumption, enhancing driver safety, or optimising route planning across East Africa.",
    details: [
      "In-depth fleet audit & gap analysis",
      "KPI definition and benchmark setting",
      "Multi-site operational assessment",
      "Risk and compliance evaluation",
    ],
    color: "#00644E",
    accent: "#00a070",
  },
  {
    number: "02",
    icon: "fa-handshake",
    title: "Consultative Partnership",
    subtitle: "Strategic Planning",
    description:
      "Teletrac acts as a dedicated partner, not just a supplier. Our consultants provide personalised recommendations grounded in mobility data, KPIs, and 15+ years of East African industry expertise.",
    details: [
      "Dedicated fleet consultant assigned",
      "Data-driven strategy formulation",
      "ROI modelling & cost impact analysis",
      "Executive stakeholder briefings",
    ],
    color: "#FFD461",
    accent: "#e8c040",
  },
  {
    number: "03",
    icon: "fa-pen-ruler",
    title: "Solution Design & Customization",
    subtitle: "Bespoke Engineering",
    description:
      "We design end-to-end solutions tailored to your industry — transport, logistics, field services, or construction — combining hardware, software, and support into a unified platform.",
    details: [
      "Telematics hardware selection",
      "Custom digital dashboard configuration",
      "AI-driven reporting setup",
      "Integration with existing systems",
    ],
    color: "#00644E",
    accent: "#00a070",
  },
  {
    number: "04",
    icon: "fa-microchip",
    title: "Installation & Deployment",
    subtitle: "Seamless Rollout",
    description:
      "Our certified engineers handle everything from GPS and fuel sensor installation to OEM integrations for newer fleet vehicles, ensuring zero operational downtime.",
    details: [
      "Certified on-site hardware installation",
      "GPS, fuel & driver behavior sensors",
      "OEM integration for Ford, Toyota, GM",
      "Full commissioning & driver briefings",
    ],
    color: "#FFD461",
    accent: "#e8c040",
  },
  {
    number: "05",
    icon: "fa-chart-line",
    title: "Ongoing Analysis & Support",
    subtitle: "Continuous Partnership",
    description:
      "Your dedicated account manager tracks KPIs, runs regular performance reviews, and converts raw data into actionable improvement plans — ensuring your fleet never stops optimising.",
    details: [
      "Monthly performance reporting",
      "Dedicated account manager access",
      "KPI tracking & underperformance alerts",
      "Continuous fleet efficiency audits",
    ],
    color: "#00644E",
    accent: "#00a070",
  },
];

export default function DeliveryProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [visible, setVisible] = useState<boolean[]>(steps.map(() => false));
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            obs.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <section id="process" className="py-24 bg-[#003226] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFD461]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,212,97,0.04) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="wrapper relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="flex items-center justify-center gap-3 text-[#FFD461] text-xs font-black uppercase tracking-[0.3em] mb-5">
            <span className="block w-8 h-0.5 bg-[#FFD461] rounded" />
            How We Work
            <span className="block w-8 h-0.5 bg-[#FFD461] rounded" />
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Our Delivery Process
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            A proven, end-to-end methodology built from 15+ years of East African fleet operations — delivering measurable results at every stage.
          </p>
        </div>

        {/* Desktop: side-by-side navigation + content */}
        <div className="hidden lg:grid lg:grid-cols-[300px_1fr] gap-12 items-start">
          {/* Step Navigator */}
          <div className="space-y-2 sticky top-24">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`w-full text-left flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group ${
                  i === activeStep
                    ? "bg-white/10 border border-white/20"
                    : "hover:bg-white/5 border border-transparent"
                }`}
              >
                <span
                  className={`text-3xl font-black transition-colors ${
                    i === activeStep ? "text-[#FFD461]" : "text-white/20 group-hover:text-white/40"
                  }`}
                >
                  {step.number}
                </span>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-0.5 transition-colors ${i === activeStep ? "text-[#FFD461]" : "text-white/30"}`}>
                    {step.subtitle}
                  </p>
                  <p className={`font-bold text-sm leading-snug transition-colors ${i === activeStep ? "text-white" : "text-white/50"}`}>
                    {step.title}
                  </p>
                </div>
                {i === activeStep && (
                  <div className="ml-auto w-1.5 h-8 bg-[#FFD461] rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Active step detail */}
          <div className="relative">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`transition-all duration-500 ${
                  i === activeStep
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
                }`}
              >
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[32px] p-12">
                  {/* icon + step badge */}
                  <div className="flex items-start gap-8 mb-10">
                    <div className="w-24 h-24 bg-[#FFD461]/10 rounded-3xl flex items-center justify-center border border-[#FFD461]/20 shrink-0">
                      <i className={`fas ${step.icon} text-4xl text-[#FFD461]`} />
                    </div>
                    <div className="pt-2">
                      <p className="text-[#FFD461] text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                        Step {step.number} / {steps.length.toString().padStart(2, "0")}
                      </p>
                      <h3 className="text-3xl font-extrabold text-white leading-snug">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
                    {step.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {step.details.map((detail, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-2xl px-5 py-4"
                      >
                        <div className="w-7 h-7 bg-[#FFD461]/15 rounded-lg flex items-center justify-center shrink-0">
                          <i className="fas fa-check text-[#FFD461] text-xs font-black" />
                        </div>
                        <span className="text-white/80 text-sm font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Navigation buttons */}
                  <div className="flex items-center gap-4 mt-10">
                    <button
                      onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                      disabled={activeStep === 0}
                      className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/60 text-sm font-bold hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                      <i className="fas fa-arrow-left text-xs" /> Previous
                    </button>
                    <button
                      onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                      disabled={activeStep === steps.length - 1}
                      className="flex items-center gap-2 px-6 py-3 bg-[#FFD461] text-black rounded-full text-sm font-bold hover:bg-[#e8c040] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                      Next Step <i className="fas fa-arrow-right text-xs" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stacked timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => { refs.current[i] = el; }}
              className={`transition-all duration-700 ${
                visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-[#FFD461]/10 rounded-2xl flex items-center justify-center border border-[#FFD461]/20 shrink-0">
                    <i className={`fas ${step.icon} text-2xl text-[#FFD461]`} />
                  </div>
                  <div>
                    <p className="text-[#FFD461] text-[9px] font-black uppercase tracking-widest mb-1">
                      Step {step.number} — {step.subtitle}
                    </p>
                    <h3 className="text-lg font-extrabold text-white">{step.title}</h3>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-5">{step.description}</p>
                <div className="space-y-2.5">
                  {step.details.map((detail, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[#FFD461]/15 rounded-md flex items-center justify-center shrink-0">
                        <i className="fas fa-check text-[#FFD461] text-[9px]" />
                      </div>
                      <span className="text-white/70 text-xs font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <div className="w-0.5 h-6 bg-white/10 rounded" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#FFD461] text-black font-bold rounded-full hover:scale-105 hover:shadow-[0_20px_40px_rgba(255,212,97,0.3)] transition-all text-lg"
          >
            Start Your Onboarding <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
}
