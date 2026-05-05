"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";

const products = [
  {
    id: "visionai-enterprise",
    name: "VisionAI Enterprise",
    badge: "Light to Medium Fleets",
    desc: "Combines road-facing ADAS (advanced driver assistance) and driver-facing DMS (driver monitoring system) to detect risky behavior in real time and coach drivers through optional in-cab audio and visual alerts.",
    icon: "fa-camera",
    color: "from-[#00644E] to-[#004d3c]",
    features: [
      "Built-in ADAS with road-facing camera",
      "Built-in DMS with driver-facing camera",
      "Detects fatigue, distraction, and phone use",
      "Visual and audible in-cab driver coaching",
      "OBC-triggered events: harsh braking & speeding",
      "Integrates with Unity platform for centralized review",
    ],
  },
  {
    id: "visionai-360",
    name: "VisionAI Enterprise 360",
    badge: "Medium to Heavy-Duty Fleets",
    desc: "An advanced, DVR-based AI video solution with road, driver, side, and rear cameras delivering full-vehicle visibility and real-time coaching. Built for complex, heavy-duty fleet operations.",
    icon: "fa-circle-dot",
    color: "from-blue-600 to-indigo-700",
    features: [
      "DVR unit with support for 5+ camera channels",
      "Road, driver, side, and rear camera views",
      "Built-in ADAS and DMS for risk detection",
      "Visual and audible alerts via in-cab display",
      "OBC-triggered events: harsh braking & speeding",
      "Centralized video review via Unity platform",
    ],
  },
  {
    id: "visionai-hub",
    name: "VisionAI Hub",
    badge: "Mid-Market Fleets",
    desc: "An AI-powered dashcam for mid-sized fleets. Customer-installable dual-facing camera delivering real-time visibility, in-cab coaching, and behavioral insights — putting fleet safety at your fingertips.",
    icon: "fa-tablet-screen-button",
    color: "from-amber-500 to-orange-600",
    features: [
      "Detects distracted, fatigued, and risky driving",
      "Real-time audio alerts and driver scorecards",
      "Live streaming and driver-initiated video capture",
      "Dual-facing, plug-and-play hardware",
      "Standby recording and automatic video protection",
      "Integrated with Unity for complete safety visibility",
    ],
  },
  {
    id: "safeguard",
    name: "SafeGuard",
    badge: "AI Risk Management",
    desc: "Evaluates driver behavior patterns instead of only viewing isolated events, reducing alert fatigue by 95%, escalating risk appropriately, and enabling immediate intervention — preventing accidents before they happen.",
    icon: "fa-shield-halved",
    color: "from-rose-500 to-red-700",
    features: [
      "Highlights repeated risky behavior patterns",
      "Reduces alert fatigue by eliminating 95% of unnecessary notifications",
      "Cuts manual video review time by up to 80%",
      "Dynamically escalates risk levels based on behavior",
      "Enables real-time communication and intervention",
      "Transforms safety from reactive to proactive",
    ],
  },
  {
    id: "ppd",
    name: "Pedestrian Proximity Detection",
    badge: "In-Warehouse & On-Site Safety",
    desc: "AI-powered pedestrian safety camera system that detects pedestrians and industrial vehicles in the path of travel — no wearables needed. Alerts operators with real-time visual and audible warnings.",
    icon: "fa-person-walking",
    color: "from-purple-600 to-violet-700",
    features: [
      "Automatic object detection — no wearables required",
      "Detects people and vehicles by proximity & direction",
      "Up to five proximity-based alert zones",
      "Visual and audible real-time risk notifications",
      "Captures breach location, time, and operator ID",
      "Integrates with Unity for analysis and safety insights",
    ],
  },
  {
    id: "freightcam",
    name: "FreightCam",
    badge: "Cargo & Trailer Visibility",
    desc: "Delivers visual and sensor-based intelligence across trailer and container operations. From loaded/empty status to door events and cargo imagery — track, validate, and optimize freight operations.",
    icon: "fa-truck-ramp-box",
    color: "from-teal-600 to-cyan-700",
    features: [
      "Real-time and on-demand cargo images",
      "Detect loaded/empty status and door events",
      "Monitor cargo temperature, humidity, and light exposure",
      "Install on swing or roll doors without obstruction",
      "Support claims with location-tagged visual proof",
      "Solar recharge optimization for remote deployments",
    ],
  },
];

const testimonials = [
  {
    quote: "We chose their solution because they had the best sales team, and their overall performance has been excellent. The reporting system is clean and easy to understand.",
    name: "Engineering Director",
    company: "Swans Travel Limited",
  },
  {
    quote: "Knowing where all of our assets are, how our drivers are behaving on the road, and how efficiently our equipment is operating are all critical to our continued success.",
    name: "Manager of Equipment",
    company: "The Miller Group",
  },
  {
    quote: "We consider them a critical partner. We like where they are going regarding a unified IoT perspective and look forward to using our data to drive deeper insights.",
    name: "Chief Operating Officer",
    company: "Flexivan",
  },
];

export default function VideoTelematics() {
  const [activeProduct, setActiveProduct] = useState(products[0]);

  return (
    <>
      <Topbar />
      <Navbar />
      <main className="bg-white">
        {/* Hero */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/video_telematics_hero.png"
              alt="AI Video Telematics Dashboard"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001a12]/95 via-[#001a12]/75 to-transparent" />
          </div>

          <div className="relative z-10 wrapper">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD461]/20 border border-[#FFD461]/30 text-[#FFD461] text-[10px] font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#FFD461] animate-pulse" />
                AI-Powered Video Intelligence
              </div>
              <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Beyond Visibility.<br />
                <span className="text-[#FFD461]">Use AI Video to Propel Safety.</span>
              </h1>
              <p className="text-white/75 text-xl leading-relaxed mb-10 max-w-xl">
                End-to-end AI-powered video intelligence across your supply chain. Prevent incidents, protect operators, and improve performance with camera-based safety systems for fleets of all sizes.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" aria-label="Talk to an expert about Video Telematics" className="px-8 py-4 bg-[#FFD461] text-black font-extrabold rounded-2xl hover:scale-105 transition-all shadow-2xl">
                  Talk to an Expert
                </a>
                <a href="#products" aria-label="Explore Video Telematics Products" className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 backdrop-blur-sm transition-all">
                  Explore Products
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="py-12 bg-[#00644E]">
          <div className="wrapper grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "80%", label: "Reduction in video review time" },
              { value: "95%", label: "Fewer unnecessary alert notifications" },
              { value: "360°", label: "Full-vehicle camera coverage" },
              { value: "Real-time", label: "In-cab driver coaching" },
            ].map(s => (
              <div key={s.label}>
                <p className="text-3xl font-black text-[#FFD461] mb-1">{s.value}</p>
                <p className="text-white/60 text-xs font-medium uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product Showcase */}
        <section id="products" className="py-24 bg-gray-50">
          <div className="wrapper">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-[#00644E] text-xs font-bold uppercase tracking-[0.2em] mb-4">AI Video Solutions</p>
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6">
                AI video solutions that power <br className="hidden lg:block" />
                <span className="text-[#00644E]">safer, smarter operations.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed">
                From light-duty dashcams to enterprise DVR systems and pedestrian detection — our complete AI video portfolio is built for fleets of every size and environment.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {products.map(p => (
                <button
                  key={p.id}
                  onClick={() => setActiveProduct(p)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeProduct.id === p.id
                      ? "bg-[#00644E] text-white shadow-lg"
                      : "bg-white border border-gray-100 text-gray-500 hover:border-[#00644E] hover:text-[#00644E]"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>

            {/* Active Product Detail */}
            <div className="bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className={`bg-gradient-to-br ${activeProduct.color} p-12 lg:p-16 flex flex-col justify-center`}>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white text-3xl mb-8">
                    <i className={`fas ${activeProduct.icon}`} />
                  </div>
                  <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                    {activeProduct.badge}
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6">{activeProduct.name}</h3>
                  <p className="text-white/80 leading-relaxed text-lg">{activeProduct.desc}</p>
                </div>
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-8">Key Capabilities</h4>
                  <ul className="space-y-4">
                    {activeProduct.features.map(f => (
                      <li key={f} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-[#00644E] text-white flex items-center justify-center text-[9px] shrink-0 mt-0.5">
                          <i className="fas fa-check" />
                        </span>
                        <span className="text-gray-700 text-sm font-medium leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" aria-label={`Request a demo for ${activeProduct.name}`} className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-[#00644E] text-white font-bold rounded-xl hover:bg-[#004d3c] transition-all self-start">
                    Request a Demo <i className="fas fa-arrow-right text-xs" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unity Integration */}
        <section className="py-24 bg-[#001a12] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="wrapper relative z-10 text-center max-w-4xl mx-auto">
            <p className="text-[#FFD461] text-xs font-bold uppercase tracking-widest mb-6">One Unified View for Better Decisions</p>
            <h2 className="text-3xl lg:text-5xl font-black mb-8 leading-tight">
              Unify every asset, vehicle, and person in a <span className="text-[#FFD461]">single pane of glass.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-12">
              Our AI video products integrate with the Unity platform to harmonize data from any IoT device, OEM, or third-party application. Eliminate blind spots, improve efficiency, reduce risk, and stay compliant — all supported by AI-driven insights.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "fa-eye", label: "Real-time Visibility" },
                { icon: "fa-brain", label: "AI-Driven Insights" },
                { icon: "fa-plug", label: "Any IoT Device" },
                { icon: "fa-chart-line", label: "Centralized Analytics" },
              ].map(item => (
                <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                  <i className={`fas ${item.icon} text-2xl text-[#FFD461] mb-3 block`} />
                  <p className="text-sm font-bold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="wrapper">
            <p className="text-[#00644E] text-xs font-bold uppercase tracking-widest text-center mb-4">Trusted by Industry Leaders</p>
            <h2 className="text-3xl lg:text-4xl font-black text-center text-gray-900 mb-16">What our customers say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map(t => (
                <div key={t.company} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-500">
                  <i className="fas fa-quote-left text-3xl text-[#00644E]/20 mb-6 block" />
                  <p className="text-gray-700 text-sm leading-relaxed mb-8 font-medium italic">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#FFD461]">
          <div className="wrapper text-center">
            <h2 className="text-3xl lg:text-5xl font-black text-black mb-6">Ready to propel your fleet safety?</h2>
            <p className="text-black/60 text-lg max-w-2xl mx-auto mb-10">
              Schedule a conversation with our video telematics specialists and discover the right AI solution for your fleet size and environment.
            </p>
            <a href="#contact" aria-label="Schedule a conversation" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-black rounded-2xl hover:scale-105 transition-all shadow-xl">
              Schedule a Conversation <i className="fas fa-arrow-right" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
