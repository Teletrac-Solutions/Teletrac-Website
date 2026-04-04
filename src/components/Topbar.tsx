export default function Topbar() {
  return (
    <div className="bg-[#004d3c] text-white/80 text-xs py-2">
      <div className="max-w-[1220px] mx-auto px-6 flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <span className="flex items-center gap-1.5">
            <i className="fas fa-phone text-[#FFD461] text-[10px]" />
            +256 702 510 668
          </span>
          <span className="flex items-center gap-1.5">
            <i className="fas fa-envelope text-[#FFD461] text-[10px]" />
            info@teletracfleets.com
          </span>
        </div>
        <span className="flex items-center gap-1.5">
          <i className="fas fa-map-marker-alt text-[#FFD461] text-[10px]" />
          Uganda &bull; Tanzania &bull; Rwanda
        </span>
      </div>
    </div>
  );
}
