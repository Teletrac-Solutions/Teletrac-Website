const items = [
  { icon: "fa-route",      title: "Real-Time Tracking",  desc: "GPS precision across all terrain types" },
  { icon: "fa-chart-line", title: "Cost Reduction",       desc: "Up to 30% savings on fleet operating costs" },
  { icon: "fa-bell",       title: "Instant Alerts",       desc: "Speeding, idling, geofence & more" },
  { icon: "fa-headset",    title: "24/7 Monitoring",      desc: "Round-the-clock fleet surveillance" },
];

export default function StatsStrip() {
  return (
    <section id="stats" className="bg-white border-b border-gray-100">
      <div className="wrapper grid grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <div
            key={item.title}
            className={`flex items-center gap-4 px-8 py-7 hover:bg-gray-50 transition-colors ${
              i < items.length - 1 ? "border-r border-gray-100" : ""
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00644E] to-[#007d62] flex items-center justify-center text-[#FFD461] text-lg shrink-0">
              <i className={`fas ${item.icon}`} />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm">{item.title}</p>
              <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
