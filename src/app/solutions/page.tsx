import Link from "next/link";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

const solutions = [
  {
    id: 1,
    title: "Driver Safety Excellence",
    icon: "fa-shield-check",
    color: "#00644E",
    shortDesc: "Real-time monitoring and alerts",
    fullDesc:
      "Our comprehensive driver safety solution provides real-time monitoring of vehicle behavior, driver patterns, and environmental conditions to prevent accidents before they happen.",
    features: [
      {
        title: "Real-Time Alerts",
        desc: "Instant notifications for harsh braking, acceleration, and risky driving patterns",
        icon: "fa-bell",
      },
      {
        title: "Behavioral Analytics",
        desc: "Track and improve driver behavior with detailed performance metrics",
        icon: "fa-chart-bar",
      },
      {
        title: "Fatigue Detection",
        desc: "Monitor driver fatigue levels and suggest breaks before incidents occur",
        icon: "fa-eye",
      },
      {
        title: "Collision Avoidance",
        desc: "Predictive systems warn drivers of potential hazards and collisions",
        icon: "fa-road",
      },
    ],
    benefits: ["89% reduction in safety incidents", "24/7 monitoring across all vehicles", "Improved insurance premiums", "Enhanced driver confidence"],
    stats: { number: "89%", label: "Incident Reduction" },
  },
  {
    id: 2,
    title: "Regulatory Compliance Management",
    icon: "fa-gavel",
    color: "#FFD461",
    shortDesc: "Automated compliance tracking",
    fullDesc:
      "Navigate complex regulatory requirements across multiple jurisdictions with automated compliance tracking and reporting that keeps your operations audit-ready at all times.",
    features: [
      {
        title: "Multi-Country Compliance",
        desc: "Support for regulations across East Africa and beyond",
        icon: "fa-globe",
      },
      {
        title: "Automated Reporting",
        desc: "Generate compliance reports instantly for audits and inspections",
        icon: "fa-file-check",
      },
      {
        title: "Documentation Management",
        desc: "Centralized storage and tracking of all compliance documents",
        icon: "fa-folder",
      },
      {
        title: "Alert System",
        desc: "Get notified before compliance deadlines and requirements change",
        icon: "fa-triangle-exclamation",
      },
    ],
    benefits: ["100% compliance coverage", "Zero audit failures", "Reduced legal liability", "Streamlined inspections"],
    stats: { number: "100%", label: "Compliance Coverage" },
  },
  {
    id: 3,
    title: "Risk Reduction & Analytics",
    icon: "fa-chart-line",
    color: "#00644E",
    shortDesc: "Predictive analytics & insights",
    fullDesc:
      "Leverage advanced analytics and machine learning to identify, predict, and mitigate operational risks before they impact your business and bottom line.",
    features: [
      {
        title: "Predictive Analytics",
        desc: "AI-powered forecasting of potential risks and issues",
        icon: "fa-brain",
      },
      {
        title: "Risk Scoring",
        desc: "Quantified risk assessment for each vehicle and driver",
        icon: "fa-sliders",
      },
      {
        title: "Trend Analysis",
        desc: "Identify patterns and trends to prevent recurring problems",
        icon: "fa-arrow-trend-up",
      },
      {
        title: "Custom Dashboards",
        desc: "Real-time visibility into all operational risk metrics",
        icon: "fa-gauge",
      },
    ],
    benefits: ["65% risk mitigation", "Data-driven decision making", "Proactive issue prevention", "Cost optimization"],
    stats: { number: "65%", label: "Risk Mitigation" },
  },
];

export default function Solutions() {
  return (
    <>
      <Topbar />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-[#00644E] to-[#003226] text-white overflow-hidden">
          <div className="wrapper">
            <div className="max-w-3xl">
              <p className="flex items-center gap-2 text-[#FFD461] text-xs font-bold uppercase tracking-widest mb-6">
                <span className="block w-7 h-0.5 bg-[#FFD461] rounded" />
                Comprehensive Solutions
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Solutions for Every Operational Challenge
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
                Discover how our integrated solutions help you enhance safety, ensure compliance, and reduce risk across your entire fleet operations.
              </p>
            </div>
          </div>

          {/* Decorative background elements */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#FFD461]/10 rounded-full blur-3xl" />
        </section>

        {/* Solutions Grid */}
        <section className="py-20 md:py-32 bg-white">
          <div className="wrapper">
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12">
              {solutions.map((solution) => (
                <div
                  key={solution.id}
                  className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:border-[#00644E] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col"
                >
                  {/* Header with icon */}
                  <div
                    className="h-32 bg-gradient-to-br from-[#00644E]/10 to-[#FFD461]/10 flex items-center justify-center group-hover:from-[#00644E]/20 group-hover:to-[#FFD461]/20 transition-all"
                  >
                    <i className={`fas ${solution.icon} text-5xl text-[#00644E] opacity-70 group-hover:opacity-100 transition-all`} />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                    <p className="text-sm text-[#00644E] font-semibold mb-4 uppercase tracking-widest">{solution.shortDesc}</p>

                    <p className="text-gray-600 leading-relaxed mb-8 flex-1">{solution.fullDesc}</p>

                    {/* Stats */}
                    <div className="mb-8 p-4 bg-gradient-to-r from-[#00644E]/5 to-[#FFD461]/5 rounded-xl border border-[#00644E]/10">
                      <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">{solution.stats.label}</p>
                      <p className="text-3xl font-bold text-[#00644E]">{solution.stats.number}</p>
                    </div>

                    {/* Features list */}
                    <div className="space-y-3 mb-8">
                      {solution.features.slice(0, 3).map((feature) => (
                        <div key={feature.title} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-lg bg-[#FFD461]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <i className={`fas ${feature.icon} text-[#00644E] text-xs`} />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">{feature.title}</p>
                            <p className="text-xs text-gray-600">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Learn more link */}
                    <a
                      href="#"
                      className="text-[#00644E] font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all group/link"
                    >
                      Learn More <i className="fas fa-arrow-right group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Features Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
          <div className="wrapper">
            <div className="text-center mb-16">
              <p className="flex items-center justify-center gap-2 text-[#00644E] text-xs font-bold uppercase tracking-widest mb-4">
                <span className="block w-7 h-0.5 bg-[#FFD461] rounded" />
                Deep Dive
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Everything You Need to Know
              </h2>
            </div>

            {solutions.map((solution, idx) => (
              <div key={solution.id} className={`mb-20 last:mb-0 ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  {/* Content */}
                  <div>
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[#00644E]/10 flex items-center justify-center">
                        <i className={`fas ${solution.icon} text-[#00644E] text-lg`} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-8">{solution.fullDesc}</p>

                    <div className="space-y-4 mb-10">
                      <p className="font-semibold text-gray-900 text-sm uppercase tracking-widest text-[#00644E]">Key Benefits:</p>
                      {solution.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#FFD461] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <i className="fas fa-check text-[#00644E] text-xs font-bold" />
                          </div>
                          <p className="text-gray-700">{benefit}</p>
                        </div>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#00644E] text-white font-semibold rounded-full hover:bg-[#004d3c] transition-all hover:-translate-y-0.5"
                    >
                      Get Started <i className="fas fa-arrow-right text-xs" />
                    </a>
                  </div>

                  {/* Features Grid */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    {solution.features.map((feature) => (
                      <div
                        key={feature.title}
                        className="p-6 bg-gradient-to-br from-[#00644E]/5 to-[#FFD461]/5 rounded-2xl border border-[#00644E]/10 hover:border-[#00644E]/30 transition-all"
                      >
                        <div className="w-12 h-12 rounded-lg bg-[#FFD461]/20 flex items-center justify-center mb-4">
                          <i className={`fas ${feature.icon} text-[#00644E] text-lg`} />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="wrapper">
            <div className="text-center mb-16">
              <p className="flex items-center justify-center gap-2 text-[#00644E] text-xs font-bold uppercase tracking-widest mb-4">
                <span className="block w-7 h-0.5 bg-[#FFD461] rounded" />
                Why Choose Us
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Unmatched Capabilities
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-4 px-6 font-bold text-gray-900">Feature</th>
                    <th className="text-center py-4 px-6 font-bold text-gray-900">Teletrac</th>
                    <th className="text-center py-4 px-6 font-bold text-gray-600">Generic Solutions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Real-time GPS Tracking",
                    "Multi-Country Compliance",
                    "AI-Powered Analytics",
                    "24/7 Support",
                    "Custom Integration",
                    "Mobile App",
                  ].map((feature) => (
                    <tr key={feature} className="border-b border-slate-100">
                      <td className="py-4 px-6 text-gray-700 font-medium">{feature}</td>
                      <td className="py-4 px-6 text-center">
                        <i className="fas fa-check text-[#00644E] text-lg" />
                      </td>
                      <td className="py-4 px-6 text-center text-gray-400">
                        <i className="fas fa-times text-lg" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CtaBanner />
        {/* Contact Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-[#00644E] to-[#003226] text-white" id="contact">
          <div className="wrapper text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Let's discuss how our solutions can address your specific operational challenges.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFD461] text-[#00644E] font-bold rounded-full hover:bg-white transition-all hover:-translate-y-0.5 hover:shadow-xl">
              Schedule Demo <i className="fas fa-calendar" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
