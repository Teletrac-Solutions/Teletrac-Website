import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";

const industries: Record<string, {
  title: string; icon: string; tagline: string; desc: string; color: string;
  challenges: string[]; capabilities: { title: string; icon: string; desc: string }[];
  stats: { value: string; label: string }[];
}> = {
  agriculture: {
    title: "Agriculture", icon: "fa-tractor", tagline: "Smart Fleet Solutions for Modern Farming",
    color: "from-green-700 to-lime-800",
    desc: "Boost farm productivity with precision telematics for tractors, harvesters, and transport fleets across East Africa's agricultural heartlands.",
    challenges: ["Seasonal fleet underutilisation", "Remote asset tracking in rural areas", "Fuel theft on isolated farms", "Equipment maintenance scheduling"],
    stats: [{ value: "30%", label: "Fuel savings" }, { value: "99.9%", label: "GPS uptime" }, { value: "20%", label: "Maintenance cost reduction" }, { value: "24/7", label: "Asset monitoring" }],
    capabilities: [
      { title: "Equipment Tracking", icon: "fa-map-location-dot", desc: "Track every tractor, combine, and transport vehicle across expansive farm operations in real time." },
      { title: "Fuel Management", icon: "fa-gas-pump", desc: "Monitor consumption across field and transport operations with precision sensors and theft alerts." },
      { title: "Maintenance Scheduling", icon: "fa-screwdriver-wrench", desc: "Automate seasonal service reminders and equipment health alerts to prevent costly harvest-time breakdowns." },
      { title: "Driver Safety", icon: "fa-shield-halved", desc: "AI coaching for farm vehicle operators to reduce accidents on uneven terrain and rural roads." },
    ],
  },
  automotive: {
    title: "Automotive", icon: "fa-car", tagline: "Connected Intelligence for Automotive Fleets",
    color: "from-slate-700 to-gray-800",
    desc: "From dealership test-drive fleets to auto-parts logistics, gain full operational control with real-time telematics and AI-powered insights.",
    challenges: ["Test vehicle security and tracking", "Parts delivery efficiency", "Driver compliance monitoring", "Fleet utilisation optimisation"],
    stats: [{ value: "15%", label: "Fleet utilisation gain" }, { value: "95%", label: "Alert accuracy" }, { value: "24/7", label: "Live visibility" }, { value: "10%", label: "Fuel savings" }],
    capabilities: [
      { title: "Vehicle Security", icon: "fa-lock", desc: "Real-time tracking and geo-fence alerts to protect high-value test vehicles and demo fleets." },
      { title: "Delivery Optimisation", icon: "fa-route", desc: "Smart routing for parts and accessory deliveries to minimise transit time and fuel costs." },
      { title: "Driver Monitoring", icon: "fa-user-shield", desc: "Monitor driving behavior across your entire automotive fleet with AI-powered scorecards." },
      { title: "KPI Dashboards", icon: "fa-chart-line", desc: "Track utilisation, idle time, and operational costs through a unified management interface." },
    ],
  },
  "commercial-leasing": {
    title: "Commercial Leasing & Car Rental", icon: "fa-key", tagline: "Maximise Asset Uptime and Rental Revenue",
    color: "from-blue-700 to-indigo-800",
    desc: "Protect your rental fleet, reduce damage claims, and optimise vehicle allocation with intelligent telematics purpose-built for leasing operations.",
    challenges: ["Vehicle misuse and damage", "Cross-border tracking", "Accurate billing verification", "Fleet turnaround optimisation"],
    stats: [{ value: "40%", label: "Damage claim reduction" }, { value: "99%", label: "Vehicle recovery rate" }, { value: "25%", label: "Faster turnaround" }, { value: "Real-time", label: "Vehicle location" }],
    capabilities: [
      { title: "Damage Detection", icon: "fa-car-burst", desc: "G-sensor events and AI dashcams capture impact data for accurate dispute resolution." },
      { title: "GPS Recovery", icon: "fa-satellite", desc: "Instant vehicle location for theft response and cross-border tracking alerts." },
      { title: "Usage-Based Billing", icon: "fa-file-invoice", desc: "Accurate mileage and usage data for transparent, data-driven billing to customers." },
      { title: "Fleet Allocation", icon: "fa-sliders", desc: "Optimise which vehicles are available, where, and when to maximise revenue per asset." },
    ],
  },
  construction: {
    title: "Construction & Heavy Equipment", icon: "fa-hard-hat", tagline: "Total Visibility on Every Job Site",
    color: "from-amber-700 to-orange-800",
    desc: "Track heavy machinery, manage equipment utilisation, and enforce site safety with robust telematics built for the harshest East African construction environments.",
    challenges: ["Equipment theft on open sites", "Idle time and fuel waste", "Multi-site asset management", "Operator compliance and safety"],
    stats: [{ value: "50%", label: "Idle time reduction" }, { value: "99%", label: "Theft recovery rate" }, { value: "20%", label: "Fuel savings" }, { value: "360°", label: "Site visibility" }],
    capabilities: [
      { title: "Equipment Tracking", icon: "fa-map-pin", desc: "Monitor excavators, cranes, and transport vehicles across multiple active sites simultaneously." },
      { title: "Idle Monitoring", icon: "fa-clock", desc: "Identify and reduce costly idle time to dramatically cut fuel consumption across your fleet." },
      { title: "Theft Prevention", icon: "fa-shield-halved", desc: "Geo-fence alerts and ignition cut-off protect high-value assets around the clock." },
      { title: "Operator Safety", icon: "fa-hard-hat", desc: "AI driver monitoring and proximity detection for safe heavy equipment operation." },
    ],
  },
  "food-beverage": {
    title: "Food & Beverage", icon: "fa-utensils", tagline: "Cold Chain Integrity from Depot to Doorstep",
    color: "from-red-700 to-rose-800",
    desc: "Maintain food safety compliance, protect cold chain integrity, and meet tight delivery windows with intelligent fleet management for FMCG operations.",
    challenges: ["Cold chain temperature compliance", "Tight delivery window adherence", "Cargo theft and spoilage", "Route efficiency for urban distribution"],
    stats: [{ value: "100%", label: "Temperature compliance" }, { value: "99%", label: "On-time delivery" }, { value: "15%", label: "Route efficiency gain" }, { value: "Real-time", label: "Cargo monitoring" }],
    capabilities: [
      { title: "Cold Chain Monitoring", icon: "fa-temperature-low", desc: "Environmental sensors track temperature and humidity across refrigerated vehicles end-to-end." },
      { title: "Route Optimisation", icon: "fa-route", desc: "Smart delivery routing to meet FMCG distribution windows across high-density urban areas." },
      { title: "Cargo Security", icon: "fa-box-open", desc: "Door sensors and cargo cameras prevent unauthorised access and spoilage events." },
      { title: "Compliance Reporting", icon: "fa-file-shield", desc: "Automated food safety logs and delivery confirmations for regulatory and customer audits." },
    ],
  },
  government: {
    title: "Government & Municipal", icon: "fa-building-columns", tagline: "Accountable, Efficient Public Fleet Management",
    color: "from-teal-700 to-cyan-800",
    desc: "Improve public service delivery, ensure fleet accountability, and reduce taxpayer costs with transparent telematics for government and municipal fleets.",
    challenges: ["Vehicle misuse and unauthorised trips", "Maintenance budget overruns", "Public accountability requirements", "Multi-department fleet coordination"],
    stats: [{ value: "35%", label: "Misuse reduction" }, { value: "20%", label: "Maintenance savings" }, { value: "100%", label: "Audit readiness" }, { value: "Real-time", label: "Fleet visibility" }],
    capabilities: [
      { title: "Misuse Prevention", icon: "fa-ban", desc: "After-hours geo-fencing and ignition monitoring prevent unauthorised private use of public vehicles." },
      { title: "Maintenance Tracking", icon: "fa-wrench", desc: "Automated service scheduling and fault alerts to keep public fleets roadworthy and budget on track." },
      { title: "Audit Reports", icon: "fa-clipboard-list", desc: "Detailed trip logs, fuel records, and driver reports ready for transparency and compliance audits." },
      { title: "Multi-Department Control", icon: "fa-network-wired", desc: "Centralised dashboard for managing fleets across multiple government departments and regions." },
    ],
  },
  mining: {
    title: "Mining & Exploration", icon: "fa-mountain", tagline: "Safety and Visibility in the Most Demanding Environments",
    color: "from-stone-700 to-zinc-800",
    desc: "Protect workers, track heavy equipment, and maintain operational continuity across remote mining sites with purpose-built fleet intelligence.",
    challenges: ["Worker safety in hazardous zones", "Remote asset tracking with poor connectivity", "Equipment utilisation on large sites", "Fuel management for heavy machinery"],
    stats: [{ value: "60%", label: "Safety incident reduction" }, { value: "40%", label: "Idle time savings" }, { value: "24/7", label: "Remote monitoring" }, { value: "99.9%", label: "Asset visibility" }],
    capabilities: [
      { title: "Worker Safety", icon: "fa-person-walking-arrow-right", desc: "Proximity detection and geo-zone alerts keep workers safe around heavy mining equipment." },
      { title: "Heavy Equipment Tracking", icon: "fa-truck-monster", desc: "Real-time location and utilisation data for drills, loaders, and haul trucks across vast sites." },
      { title: "Remote Connectivity", icon: "fa-satellite-dish", desc: "Satellite and multi-network connectivity ensure visibility even in underground and remote operations." },
      { title: "Fuel Intelligence", icon: "fa-gas-pump", desc: "Precision fuel sensors and consumption analytics for high-usage mining machinery." },
    ],
  },
  "oil-gas": {
    title: "Oil & Gas", icon: "fa-oil-can", tagline: "Mission-Critical Fleet Operations for Energy Sectors",
    color: "from-yellow-700 to-amber-800",
    desc: "Ensure worker safety, manage remote fleet operations, and maintain regulatory compliance for oil and gas transport and field service vehicles.",
    challenges: ["HSE compliance in hazardous zones", "Remote workforce transport safety", "Asset tracking across dispersed locations", "Emergency response coordination"],
    stats: [{ value: "50%", label: "HSE incident reduction" }, { value: "99%", label: "Compliance rate" }, { value: "24/7", label: "Emergency monitoring" }, { value: "30%", label: "Operational cost savings" }],
    capabilities: [
      { title: "HSE Compliance", icon: "fa-file-shield", desc: "Automated safety logs, speed compliance, and fatigue monitoring for field and transport fleets." },
      { title: "Worker Transport Safety", icon: "fa-bus", desc: "AI driver monitoring and incident detection for personnel carriers in remote oil field environments." },
      { title: "Asset Tracking", icon: "fa-map-location-dot", desc: "Track equipment, tankers, and vehicles across geographically dispersed field operations." },
      { title: "Emergency Response", icon: "fa-bell", desc: "Instant panic alerts and real-time vehicle location to coordinate emergency response quickly." },
    ],
  },
  "public-transport": {
    title: "Public Transport", icon: "fa-bus", tagline: "Reliable, Safe Public Transit at Scale",
    color: "from-purple-700 to-violet-800",
    desc: "Improve passenger safety, maintain schedule adherence, and optimise bus fleet operations with real-time telematics for public transit authorities.",
    challenges: ["Schedule adherence and delays", "Passenger safety and complaints", "Driver behaviour on public routes", "Fuel consumption on high-frequency routes"],
    stats: [{ value: "95%", label: "On-time performance" }, { value: "40%", label: "Safety complaints reduction" }, { value: "10%", label: "Fuel savings per route" }, { value: "Real-time", label: "Passenger tracking" }],
    capabilities: [
      { title: "Schedule Adherence", icon: "fa-clock", desc: "Real-time GPS tracking enables dispatchers to monitor and enforce schedule adherence across all routes." },
      { title: "Passenger Safety", icon: "fa-user-shield", desc: "AI dashcams and driver monitoring ensure safe, professional behavior on every journey." },
      { title: "Driver Coaching", icon: "fa-graduation-cap", desc: "Automated driver scorecards and behavior reports to improve performance and reduce complaints." },
      { title: "Route Analytics", icon: "fa-chart-line", desc: "Fuel consumption, idle time, and route efficiency analytics to optimise transit operations." },
    ],
  },
  transportation: {
    title: "Transportation & Logistics", icon: "fa-truck", tagline: "Delivering Operational Excellence Across Every Mile",
    color: "from-[#00644E] to-[#003226]",
    desc: "Meet tight delivery windows, manage mixed fleets at scale, and protect cargo with end-to-end logistics intelligence built for East African transport operations.",
    challenges: ["Meeting tight delivery windows", "Managing mixed fleets at scale", "Mitigating cargo theft and loss", "Reducing fuel waste and emissions", "Ensuring regulatory compliance"],
    stats: [{ value: "99%", label: "On-time delivery" }, { value: "25%", label: "Fuel cost reduction" }, { value: "80%", label: "Faster incident response" }, { value: "100%", label: "Cargo visibility" }],
    capabilities: [
      { title: "Driver Behavior & Safety", icon: "fa-user-shield", desc: "AI-powered monitoring detects harsh driving, fatigue, and distraction to protect your drivers and cargo." },
      { title: "Route Optimisation", icon: "fa-route", desc: "Intelligent routing minimises fuel use and mileage while meeting every delivery deadline." },
      { title: "Cargo Condition Monitoring", icon: "fa-box", desc: "Environmental sensors and cargo cameras ensure load integrity from origin to destination." },
      { title: "Maintenance & Diagnostics", icon: "fa-wrench", desc: "Predictive maintenance alerts prevent breakdowns mid-route and reduce unplanned downtime." },
      { title: "Compliance & Reporting", icon: "fa-file-alt", desc: "Automated compliance logs for transport regulations, driver hours, and route restrictions." },
    ],
  },
  "waste-recycling": {
    title: "Waste & Recycling", icon: "fa-recycle", tagline: "Smarter Collection, Cleaner Communities",
    color: "from-emerald-700 to-green-800",
    desc: "Optimise collection routes, improve fleet maintenance, and ensure driver safety for municipal and private waste collection and recycling operations.",
    challenges: ["Route inefficiency and missed collections", "Vehicle wear from heavy daily use", "Driver safety on urban roads", "Fuel consumption in stop-start operations"],
    stats: [{ value: "20%", label: "Route efficiency gain" }, { value: "30%", label: "Maintenance savings" }, { value: "15%", label: "Fuel reduction" }, { value: "100%", label: "Collection compliance" }],
    capabilities: [
      { title: "Dynamic Route Planning", icon: "fa-route", desc: "AI-optimised collection routes adapt to traffic and demand to ensure no bin is missed." },
      { title: "Vehicle Health Monitoring", icon: "fa-wrench", desc: "Heavy-cycle diagnostics detect wear early and schedule servicing before breakdowns occur." },
      { title: "Driver Safety", icon: "fa-shield-halved", desc: "Pedestrian proximity detection and reversing alerts keep crews and the public safe." },
      { title: "Fuel & Emissions Tracking", icon: "fa-leaf", desc: "Monitor fuel consumption and carbon output to meet sustainability and council KPIs." },
    ],
  },
  "consumer-goods": {
    title: "Consumer Goods & Retail Manufacturing", icon: "fa-shopping-bag", tagline: "Supply Chain Visibility from Factory to Shelf",
    color: "from-blue-600 to-cyan-800",
    desc: "Achieve end-to-end supply chain visibility to ensure consumer goods are delivered efficiently, safely, and on time across East Africa.",
    challenges: ["Supply chain bottlenecks", "Inventory shrinkage during transit", "Meeting strict delivery windows", "Fleet utilisation inefficiencies"],
    stats: [{ value: "98%", label: "On-time delivery" }, { value: "15%", label: "Reduced transit time" }, { value: "24/7", label: "Cargo visibility" }, { value: "12%", label: "Fuel savings" }],
    capabilities: [
      { title: "End-to-End Tracking", icon: "fa-map-location-dot", desc: "Real-time visibility into your entire distribution network from factory to final retail destination." },
      { title: "Cargo Security", icon: "fa-lock", desc: "Advanced locking mechanisms and door sensors to prevent theft and inventory shrinkage." },
      { title: "Route Optimisation", icon: "fa-route", desc: "AI-driven routing ensures faster deliveries and reduces fuel consumption across complex supply chains." },
      { title: "Delivery Proof", icon: "fa-clipboard-check", desc: "Electronic proof of delivery and automated logs to streamline invoicing and customer satisfaction." },
    ],
  },
  "emergency-services": {
    title: "Emergency Services", icon: "fa-ambulance", tagline: "Rapid Response When Every Second Counts",
    color: "from-red-600 to-rose-900",
    desc: "Equip ambulances, fire trucks, and rescue vehicles with mission-critical telematics for faster response times and enhanced crew safety.",
    challenges: ["Delayed response times", "Navigating severe traffic congestion", "Vehicle readiness and maintenance", "Crew safety during high-speed transit"],
    stats: [{ value: "25%", label: "Faster response times" }, { value: "99.9%", label: "Vehicle uptime" }, { value: "100%", label: "Real-time dispatch" }, { value: "24/7", label: "Fleet readiness" }],
    capabilities: [
      { title: "Live Dispatching", icon: "fa-headset", desc: "Instant location tracking to dispatch the nearest available unit for the fastest possible response." },
      { title: "Traffic Navigation", icon: "fa-map", desc: "Live traffic data integration to reroute emergency vehicles away from congestion and roadblocks." },
      { title: "Vehicle Diagnostics", icon: "fa-stethoscope", desc: "Continuous health monitoring to guarantee emergency vehicles are always mission-ready." },
      { title: "Crew Safety", icon: "fa-shield-heart", desc: "Monitor driving behavior and vehicle telemetry to ensure crew safety during urgent responses." },
    ],
  },
  "field-services": {
    title: "Field & Home Services", icon: "fa-tools", tagline: "Empowering Your Mobile Workforce",
    color: "from-orange-600 to-amber-900",
    desc: "Optimise technician schedules, track service vans, and improve customer satisfaction with intelligent field service fleet management.",
    challenges: ["Inefficient daily routing", "Unauthorised vehicle use", "Customer wait times and complaints", "Tool and equipment tracking"],
    stats: [{ value: "30%", label: "More jobs per day" }, { value: "20%", label: "Fuel reduction" }, { value: "100%", label: "Proof of service" }, { value: "40%", label: "Less idle time" }],
    capabilities: [
      { title: "Dynamic Scheduling", icon: "fa-calendar-check", desc: "Assign jobs to the nearest technician based on real-time location and skill requirements." },
      { title: "Driver Accountability", icon: "fa-user-check", desc: "Monitor after-hours usage and ensure service vehicles are used strictly for business purposes." },
      { title: "Customer ETA", icon: "fa-clock", desc: "Provide accurate arrival times to customers, improving satisfaction and reducing missed appointments." },
      { title: "Asset Protection", icon: "fa-toolbox", desc: "Track high-value tools and equipment stored in service vans to prevent theft and loss." },
    ],
  },
  "warehouse-iot": {
    title: "In-Warehouse IoT", icon: "fa-microchip", tagline: "Intelligent Warehouse Automation and Tracking",
    color: "from-indigo-600 to-violet-900",
    desc: "Transform warehouse operations with IoT sensors to track forklifts, monitor inventory movement, and ensure workplace safety indoors.",
    challenges: ["Forklift accidents and impacts", "Inefficient inventory movement", "Equipment utilisation tracking", "Indoor location blind spots"],
    stats: [{ value: "50%", label: "Fewer impacts" }, { value: "25%", label: "Productivity gain" }, { value: "100%", label: "Indoor visibility" }, { value: "30%", label: "Maintenance savings" }],
    capabilities: [
      { title: "Forklift Telematics", icon: "fa-truck-ramp-box", desc: "Monitor speed, impacts, and operator access to ensure safe and efficient material handling." },
      { title: "Indoor Tracking", icon: "fa-wifi", desc: "Utilise BLE and Wi-Fi to track assets and personnel where traditional GPS signals cannot reach." },
      { title: "Utilisation Metrics", icon: "fa-chart-pie", desc: "Analyze equipment usage patterns to right-size your warehouse fleet and reduce capital expenses." },
      { title: "Safety Zones", icon: "fa-draw-polygon", desc: "Create virtual boundaries to automatically limit forklift speeds in high-pedestrian areas." },
    ],
  },
  "manufacturing": {
    title: "Manufacturing", icon: "fa-industry", tagline: "Streamlining Industrial Logistics and Transport",
    color: "from-slate-600 to-gray-900",
    desc: "Connect your manufacturing plant with your logistics network to ensure raw materials arrive on time and finished goods ship without delay.",
    challenges: ["Raw material delivery delays", "Yard management bottlenecks", "Transport fleet coordination", "Cross-facility visibility"],
    stats: [{ value: "20%", label: "Yard efficiency gain" }, { value: "95%", label: "On-time arrival" }, { value: "15%", label: "Transport cost cut" }, { value: "24/7", label: "Supply chain view" }],
    capabilities: [
      { title: "Yard Management", icon: "fa-warehouse", desc: "Track trailers and vehicles within the manufacturing facility to eliminate bottlenecks at the dock." },
      { title: "Inbound Logistics", icon: "fa-truck-arrow-right", desc: "Monitor incoming shipments of raw materials to keep production lines running without interruption." },
      { title: "Fleet Coordination", icon: "fa-network-wired", desc: "Seamlessly coordinate owned and third-party fleets across multiple manufacturing sites." },
      { title: "Asset Utilisation", icon: "fa-chart-bar", desc: "Maximize the usage of specialized transport equipment and reduce unnecessary idle time." },
    ],
  },
  "security": {
    title: "Security", icon: "fa-shield-alt", tagline: "Uncompromising Control for Security Fleets",
    color: "from-zinc-800 to-black",
    desc: "Empower cash-in-transit, patrol vehicles, and rapid response units with military-grade tracking and live video surveillance.",
    challenges: ["High-risk cargo protection", "Officer safety during patrols", "Response coordination during incidents", "Tampering and sabotage"],
    stats: [{ value: "100%", label: "Secure tracking" }, { value: "80%", label: "Faster incident response" }, { value: "99.9%", label: "System uptime" }, { value: "360°", label: "Video coverage" }],
    capabilities: [
      { title: "Armored Vehicle Tracking", icon: "fa-truck-field", desc: "Highly secure, tamper-proof tracking units designed specifically for cash-in-transit operations." },
      { title: "Live Video Streaming", icon: "fa-video", desc: "Real-time dashcam feeds allow central command to assess threats and monitor officer safety instantly." },
      { title: "Panic Alarms", icon: "fa-bell", desc: "Covert panic buttons that immediately alert dispatch and trigger emergency protocols." },
      { title: "Engine Immobilisation", icon: "fa-power-off", desc: "Remote engine shutdown capabilities to prevent vehicle theft during hijacking attempts." },
    ],
  }
};

export async function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }));
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industries[params.slug];
  if (!industry) notFound();

  return (
    <>
      <Topbar />
      <Navbar />
      <main className="bg-white">
        {/* Hero */}
        <section className={`relative pt-36 pb-24 bg-gradient-to-br ${industry.color} overflow-hidden`}>
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          <div className="wrapper relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-white/80 text-[10px] font-bold uppercase tracking-widest mb-6">
                <i className={`fas ${industry.icon}`} />
                Industry Solutions
              </div>
              <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">{industry.tagline}</h1>
              <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl">{industry.desc}</p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-4 bg-[#FFD461] text-black font-extrabold rounded-2xl hover:scale-105 transition-all shadow-xl">Get a Quote</a>
                <a href="#capabilities" className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all">Our Capabilities</a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-gray-900">
          <div className="wrapper grid grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.stats.map((s) => (
              <div key={s.label} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-4xl font-black text-[#FFD461] mb-2">{s.value}</p>
                <p className="text-white/50 text-xs font-bold uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="py-24 bg-white">
          <div className="wrapper">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[#00644E] text-xs font-bold uppercase tracking-widest mb-4">Industry Challenges</p>
                <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-8 leading-tight">
                  Addressing {industry.title} pressures with intelligent tools.
                </h2>
                <ul className="space-y-4">
                  {industry.challenges.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#FFD461] flex items-center justify-center text-black text-[9px] shrink-0 mt-0.5"><i className="fas fa-check" /></span>
                      <span className="text-gray-700 font-medium">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`bg-gradient-to-br ${industry.color} rounded-3xl p-12 text-white`}>
                <i className={`fas ${industry.icon} text-8xl opacity-20 mb-8 block`} />
                <h3 className="text-2xl font-black mb-4">Purpose-Built for {industry.title}</h3>
                <p className="text-white/70 leading-relaxed">Our telematics solutions are tailored to the unique operational requirements of {industry.title.toLowerCase()} businesses across East Africa — delivering measurable ROI from day one.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section id="capabilities" className="py-24 bg-gray-50">
          <div className="wrapper">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#00644E] text-xs font-bold uppercase tracking-widest mb-4">What We Deliver</p>
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Tools to keep your operations moving.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industry.capabilities.map((cap) => (
                <div key={cap.title} className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-[#00644E]/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-[#00644E]/10 flex items-center justify-center text-[#00644E] text-2xl mb-6 group-hover:bg-[#00644E] group-hover:text-white transition-all duration-300">
                    <i className={`fas ${cap.icon}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00644E] transition-colors">{cap.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`py-24 bg-gradient-to-br ${industry.color}`}>
          <div className="wrapper text-center">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">Ready to transform your {industry.title} fleet?</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">Connect with our specialists to design a telematics solution tailored to your exact operational requirements.</p>
            <a href="#contact" className="inline-flex items-center gap-3 px-10 py-5 bg-[#FFD461] text-black font-black rounded-2xl hover:scale-105 transition-all shadow-2xl">
              Schedule a Conversation <i className="fas fa-arrow-right" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
