const clientLogos = [
  { src: "/TOTAL.svg", alt: "TOTAL Energies" },
  { src: "/unilever.png", alt: "Unilever" },
  { src: "/ola energies.jfif", alt: "OLA Energies" },
  { src: "/rubis.jfif", alt: "Rubis" },
  { src: "/VIVO ENERGIES.jfif", alt: "VIVO Energies" },
  { src: "/AGL.png", alt: "AGL" },
  { src: "/CPP.jpg", alt: "CPP" },
  { src: "/fst logo.png", alt: "FST" },
  { src: "/gtl logo.jfif", alt: "GTL" },
  { src: "/dff logo.jfif", alt: "DFF" },
  { src: "/mercantile logo.png", alt: "Mercantile" },
  { src: "/ADT LOGO.png", alt: "ADT" },
];

export default function ClientLogos() {
  return (
    <section className="bg-white text-slate-900 py-16 overflow-hidden">
      <div className="wrapper">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500 mb-3">
            Client trust
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Products trusted by more than 1000+ enterprises across East Africa
          </h2>
        </div>

        {/* Animated carousel container */}
        <div className="relative w-full">
          <style>{`
            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .carousel-track {
              display: flex;
              gap: 1.5rem;
              animation: scroll-left 40s linear infinite;
              width: fit-content;
            }
            
            .carousel-track:hover {
              animation-play-state: paused;
            }
            
            .carousel-item {
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 1rem;
              background: #f8fafc;
              border-radius: 1.5rem;
              width: 180px;
              height: 96px;
              flex-shrink: 0;
            }
          `}</style>

          <div className="overflow-hidden">
            <div className="carousel-track">
              {/* First set of logos */}
              {clientLogos.map((logo) => (
                <div key={`${logo.alt}-1`} className="carousel-item">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-12 max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clientLogos.map((logo) => (
                <div key={`${logo.alt}-2`} className="carousel-item">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-12 max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
