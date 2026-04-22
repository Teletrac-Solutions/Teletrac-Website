"use client";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "Teletrac has completely transformed how we manage our cross-border logistics. The real-time visibility into our fleet across Uganda and Rwanda is unprecedented.",
    author: "James Mukasa",
    role: "Logistics Manager, East Africa Transporters",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    quote: "The fuel intelligence system saved us 15% in operational costs within the first three months. It's the most reliable telematics partner we've ever worked with.",
    author: "Sarah Uwase",
    role: "Operations Director, Kigali Express",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote: "Client trust is paramount for us. With Teletrac tracking, our customers appreciate the accurate delivery windows and proactive status updates.",
    author: "David Ochieng",
    role: "CEO, Safeway Logistics Tanzania",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#fcfdfd] py-24 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD461]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#003226]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="wrapper relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-slate-500 text-sm font-bold uppercase tracking-[0.4em] mb-4">
              Success Stories
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              What our partners say about <span className="text-[#00644E]">Teletrac</span>
            </h3>
          </div>

          <div className="relative h-[480px] md:h-[400px]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-1000 transform ${
                  i === activeIndex
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95 pointer-events-none"
                }`}
              >
                <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-100 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#FFD461] rounded-full flex items-center justify-center shadow-xl">
                    <i className="fas fa-quote-left text-black text-2xl" />
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <p className="text-xl md:text-2xl text-slate-700 italic leading-relaxed mb-10">
                      &quot;{t.quote}&quot;
                    </p>
                    
                    <div className="flex items-center gap-5 pt-8 border-t border-slate-100 w-full justify-center">
                      <img
                        src={t.image}
                        alt={t.author}
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-[#FFD461]/20 shadow-md"
                      />
                      <div className="text-left">
                        <h4 className="text-slate-900 font-bold text-lg">{t.author}</h4>
                        <p className="text-slate-500 text-sm font-medium">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  i === activeIndex ? "w-12 bg-[#00644E]" : "w-2.5 bg-slate-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
