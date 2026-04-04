"use client";
import { useState } from "react";

const highlights = [
  { icon: "fa-satellite-dish", text: "GPS tracking installation for all vehicle brands & models" },
  { icon: "fa-shield-alt",     text: "Passionate experts with strong commitment to excellence" },
  { icon: "fa-chart-bar",      text: "Driving financial success through smarter fleet operations" },
];

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-[90px] bg-white overflow-hidden">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text ── */}
          <div>
            <p className="flex items-center gap-2 text-[#00644E] text-xs font-bold uppercase tracking-widest mb-4">
              <span className="block w-7 h-0.5 bg-[#FFD461] rounded" />
              Who We Are
            </p>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Seasoned Experts in <span className="text-[#00644E]">GPS Fleet Technology</span>
            </h2>

            <p className="text-gray-500 leading-relaxed text-base mb-8">
              Teletrac comprises of seasoned experts in the areas of GPS car tracking installation
              and monitoring irrespective of the client&apos;s vehicle brand and model. We are
              passionate about our work with strong commitment towards excellence and financial success.
            </p>

            {/* Highlights */}
            <div className="flex flex-col gap-4 mb-10">
              {highlights.map((h) => (
                <div key={h.text} className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#00644E]/10 flex items-center justify-center shrink-0">
                    <i className={`fas ${h.icon} text-[#00644E] text-sm`} />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pt-1.5">{h.text}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00644E] text-white font-semibold rounded-full hover:bg-[#004d3c] transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get in Touch <i className="fas fa-arrow-right text-xs" />
            </a>
          </div>

          {/* ── Right: Video Player ── */}
          <div className="relative">
            {!playing ? (
              /* Thumbnail + Play button */
              <div
                className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-2xl"
                onClick={() => setPlaying(true)}
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=85')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  aspectRatio: "16/9",
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[#003226]/60 group-hover:bg-[#003226]/50 transition-all duration-300" />

                {/* Centered play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Ripple rings */}
                    <div className="absolute inset-0 rounded-full bg-white/20 animate-ping scale-125" />
                    <div className="absolute inset-0 rounded-full bg-white/10 scale-150" />
                    {/* Play button */}
                    <div className="relative w-20 h-20 bg-[#FFD461] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <i className="fas fa-play text-black text-2xl ml-1" />
                    </div>
                  </div>
                </div>

                {/* Bottom caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-semibold text-sm flex items-center gap-2">
                    <i className="fas fa-play-circle text-[#FFD461]" />
                    Watch how Teletrac simplifies your fleet operations
                  </p>
                </div>
              </div>
            ) : (
              /* HTML5 Video — direct CDN, no embed restrictions */
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black" style={{ aspectRatio: "16/9" }}>
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  controls
                  playsInline
                  poster="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=85"
                >
                  <source
                    src="https://cdn.pixabay.com/video/2016/04/01/2842-161596544_large.mp4"
                    type="video/mp4"
                  />
                  <source
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            {/* Stats floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100 hidden lg:flex items-center gap-4">
              <div className="w-12 h-12 bg-[#00644E]/10 rounded-xl flex items-center justify-center">
                <i className="fas fa-truck text-[#00644E] text-xl" />
              </div>
              <div>
                <p className="font-extrabold text-gray-900 text-lg leading-none">500+</p>
                <p className="text-gray-500 text-xs mt-1">Active Fleets Monitored</p>
              </div>
            </div>

            {/* Countries floating card */}
            <div className="absolute -top-6 -right-6 bg-[#FFD461] rounded-2xl p-4 shadow-xl hidden lg:flex items-center gap-3">
              <i className="fas fa-globe-africa text-black text-xl" />
              <div>
                <p className="font-extrabold text-black text-base leading-none">3 Countries</p>
                <p className="text-black/60 text-xs mt-0.5">Uganda · Tanzania · Rwanda</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
