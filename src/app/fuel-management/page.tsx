"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";

const impacts = [
  { value: "25%", label: "of fleet operating costs", detail: "attributed to fuel on average — we help cut that significantly." },
  { value: "10%", label: "average annual fuel savings", detail: "achieved across our managed fleet customers in East Africa." },
  { value: "99%", label: "of fuel theft prevented", detail: "through sensor integration, cap monitoring, and real-time alerts." },
  { value: "20%", label: "maintenance cost reduction", detail: "by eliminating harsh driving events through behavior coaching." },
];

const features = [
  {
    title: "Fuel Usage Analytics",
    desc: "Accurate fuel data based on usage, plus driver behaviour data showing events and trends that drive excessive fuel consumption. Get the information you need to act where it matters most.",
    icon: "fa-gas-pump",
    tags: ["Consumption Tracking", "Usage Reports", "Trend Analysis"],
  },
  {
    title: "Theft Prevention",
    desc: "Stop fuel skimming and siphoning — responsible for 99% of fleet fuel theft. Our solution combines GPS tracking, anti-siphoning devices, fuel cap sensors, and real-time alerts.",
    icon: "fa-shield-halved",
    tags: ["Anti-Siphoning", "Cap Sensors", "Geo-Alerts"],
  },
  {
    title: "Route Optimisation",
    desc: "Reduce mileage and idle time through intelligent route planning. Deliver on time while consuming less — directly improving your bottom line on every trip.",
    icon: "fa-route",
    tags: ["Smart Routing", "Idle Reduction", "On-Time Delivery"],
  },
  {
    title: "Maintenance Scheduling",
    desc: "Reduce harsh events like acceleration, braking, and cornering to cut maintenance costs by up to 20%. Stay ahead of breakdowns with automated service alerts.",
    icon: "fa-screwdriver-wrench",
    tags: ["Proactive Alerts", "Event Scoring", "Downtime Planning"],
  },
  {
    title: "Driver Engagement",
    desc: "Drive positive change through goal setting, trend analysis, and driver scorecards. Engaged drivers use less fuel, cause fewer incidents, and retain vehicles longer.",
    icon: "fa-user-check",
    tags: ["Driver Scorecards", "Goal Setting", "Performance Coaching"],
  },
  {
    title: "Critical Event Alerts",
    desc: "Real-time alerts on oil warnings, tyre pressure issues, engine faults, and fuel anomalies. Be proactive, not reactive — anticipate problems before they cost you.",
    icon: "fa-bell",
    tags: ["Real-Time Alerts", "Engine Warnings", "Tyre Pressure"],
  },
];

export default function FuelManagement() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main className="bg-white">
        {/* Hero */}
        <section className="relative h-[80vh] min-h-[600px] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/fuel_management_hero.png"
              alt="Fuel Management Platform"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002a1e] via-[#003226]/70 to-transparent" />
          </div>

          <div className="relative z-10 wrapper pb-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD461]/20 border border-[#FFD461]/30 text-[#FFD461] text-[10px] font-bold uppercase tracking-widest mb-5 backdrop-blur-sm">
                <i className="fas fa-gas-pump text-[10px]" />
                Fuel Intelligence Platform
              </div>
              <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Stop Bleeding Fuel.<br />
                <span className="text-[#FFD461]">Start Saving.</span>
              </h1>
              <p className="text-white/75 text-lg leading-relaxed max-w-2xl mb-10">
                Fuel represents up to 25% of your fleet&apos;s operating costs. Our telematics-powered platform gives you the data, alerts, and driver coaching tools to claw that back — every single day.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-4 bg-[#FFD461] text-black font-extrabold rounded-2xl hover:scale-105 transition-all shadow-2xl">
                  Book a Demo
                </a>
                <a href="#features" className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all backdrop-blur-sm">
                  See How It Works
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20 bg-[#002a1e]">
          <div className="wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((s) => (
              <div key={s.value} className="border border-white/10 rounded-3xl p-8 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all">
                <p className="text-5xl font-black text-[#FFD461] mb-2">{s.value}</p>
                <p className="text-white font-bold text-sm mb-2">{s.label}</p>
                <p className="text-white/40 text-xs leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 bg-gray-50">
          <div className="wrapper">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="text-[#00644E] text-xs font-bold uppercase tracking-[0.2em] mb-4">What We Track & Control</p>
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6">
                Every lever that affects <span className="text-[#00644E]">fuel cost.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Our customers trust us to save even the smallest amounts of time and money. With fuel having the biggest impact on annual running costs, telematics turns every drop into data.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f) => (
                <div key={f.title} className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-[#00644E]/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-[#00644E]/10 flex items-center justify-center text-[#00644E] text-2xl mb-6 group-hover:bg-[#00644E] group-hover:text-white transition-all duration-300">
                    <i className={`fas ${f.icon}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#00644E] transition-colors">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{f.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {f.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-gray-50 border border-gray-100 rounded-lg text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Efficiency Strip */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="wrapper">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[#00644E] text-xs font-bold uppercase tracking-widest mb-4">Business Efficiency</p>
                <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-8 leading-tight">
                  Optimise every aspect <br />of your fleet&apos;s running costs.
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Fleet running costs vary by industry and operation. Having access to your fleet data offers valuable insights into daily activities that contribute to substantial financial savings.
                </p>
                <ul className="space-y-4">
                  {[
                    "Optimise routing and enable better planning",
                    "Maximise vehicle utilisation across shifts",
                    "Automate paperwork and reduce admin overhead",
                    "Improve communication between driver and manager",
                    "Industry-specific navigation for East African terrain",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#00644E] text-white flex items-center justify-center text-xs mt-0.5 shrink-0">
                        <i className="fas fa-check text-[8px]" />
                      </span>
                      <span className="text-gray-700 text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "fa-chart-line", label: "Fuel Saving", value: "Up to 10%" },
                  { icon: "fa-clock", label: "Time Saving", value: "Daily Gains" },
                  { icon: "fa-tools", label: "Maintenance Cut", value: "Up to 20%" },
                  { icon: "fa-truck", label: "Vehicle Uptime", value: "99.9%" },
                ].map(item => (
                  <div key={item.label} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
                    <i className={`fas ${item.icon} text-3xl text-[#00644E] mb-3 block`} />
                    <p className="text-2xl font-black text-gray-900 mb-1">{item.value}</p>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#00644E]">
          <div className="wrapper text-center">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
              How can we help you <span className="text-[#FFD461]">improve fleet efficiency?</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
              Ask our experts about our diverse suite of telematics solutions tailored to East African fleet operations.
            </p>
            <a href="#contact" className="inline-flex items-center gap-3 px-10 py-5 bg-[#FFD461] text-black font-black rounded-2xl hover:scale-105 transition-all shadow-2xl">
              Talk to a Specialist <i className="fas fa-arrow-right" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
