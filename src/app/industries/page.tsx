import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Topbar from '@/components/Topbar';
import {
  Truck,
  Building2,
  Tractor,
  Landmark,
  Droplet,
  ShoppingCart,
  Siren,
  ArrowRight,
  CheckCircle2,
  Shield,
  TrendingUp,
  BarChart3
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Teletrac Fleets provides specialized telematics and fleet management solutions across Transportation, Construction, Agriculture, Government, Oil & Gas, and more.",
  alternates: {
    canonical: "https://www.teletracfleets.com/industries"
  }
};

const industries = [
  {
    id: "transportation",
    title: "Transportation & Logistics",
    icon: <Truck className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80",
    description: "Transform your supply chain with real-time visibility from the first mile to the last. Our solutions optimize routing, reduce fuel waste, and guarantee on-time deliveries while ensuring total cargo security.",
    benefits: [
      "Real-time GPS tracking and route optimization",
      "Cold chain monitoring for temperature-sensitive cargo",
      "Driver behavior analysis and fatigue management",
      "Automated proof-of-delivery and electronic logging"
    ],
    stats: [
      { label: "Fuel Savings", value: "up to 20%" },
      { label: "On-Time Delivery", value: "99.9%" }
    ]
  },
  {
    id: "construction",
    title: "Construction & Heavy Equipment",
    icon: <Building2 className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?w=1920&q=80",
    description: "Maximize asset utilization and protect valuable heavy machinery across multiple job sites. Get unprecedented visibility into equipment health, maintenance needs, and operator safety.",
    benefits: [
      "Engine hour tracking and preventative maintenance",
      "Geofencing for unauthorized movement alerts",
      "Off-road IoT sensors for rugged environments",
      "Operator identity verification and access control"
    ],
    stats: [
      { label: "Asset Recovery", value: "95%" },
      { label: "Maintenance Cost", value: "-30%" }
    ]
  },
  {
    id: "agriculture",
    title: "Agriculture & Farming",
    icon: <Tractor className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80",
    description: "Drive agricultural efficiency with precision tracking of tractors, harvesters, and implements. Monitor field operations, optimize resource usage, and ensure equipment is ready for harvest season.",
    benefits: [
      "Field boundary mapping and area coverage analysis",
      "Fuel consumption monitoring during heavy operations",
      "Remote diagnostics for off-grid equipment",
      "Seasonal utilization reporting"
    ],
    stats: [
      { label: "Field Efficiency", value: "+25%" },
      { label: "Downtime", value: "-40%" }
    ]
  },
  {
    id: "energy",
    title: "Oil, Gas & Energy",
    icon: <Droplet className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1920&q=80",
    description: "Secure high-value operations in the most remote and hazardous locations. Ensure absolute compliance with stringent safety regulations while tracking specialized assets and hazardous materials.",
    benefits: [
      "Intrinsically safe tracking hardware (ATEX certified)",
      "Satellite communication fallbacks for remote areas",
      "Rollover and harsh event detection",
      "Driver fatigue monitoring for long-haul routes"
    ],
    stats: [
      { label: "Safety Incidents", value: "-60%" },
      { label: "Compliance Rate", value: "100%" }
    ]
  },
  {
    id: "retail",
    title: "Retail & FMCG",
    icon: <ShoppingCart className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80",
    description: "Perfect the last-mile delivery experience. Gain complete control over your distribution network with end-to-end visibility, ensuring fast-moving consumer goods reach shelves faster and fresher.",
    benefits: [
      "Dynamic routing for multi-stop deliveries",
      "Live ETA updates for distribution centers",
      "Cargo door open/close monitoring",
      "Integration with inventory management systems"
    ],
    stats: [
      { label: "Delivery Capacity", value: "+15%" },
      { label: "Spoilage Reduction", value: "35%" }
    ]
  },
  {
    id: "government",
    title: "Government & Municipal",
    icon: <Landmark className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1920&q=80",
    description: "Deliver public services with complete transparency and accountability. Optimize the performance of municipal fleets, waste management vehicles, and public transit systems while managing taxpayer budgets efficiently.",
    benefits: [
      "Public transparency dashboards",
      "Route compliance and service verification",
      "Cross-department fleet sharing capabilities",
      "CO2 emission tracking for sustainability goals"
    ],
    stats: [
      { label: "Fleet Utilization", value: "+30%" },
      { label: "Carbon Footprint", value: "-20%" }
    ]
  },
  {
    id: "emergency",
    title: "Emergency Services",
    icon: <Siren className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1612997951721-4d98677ad71b?w=1920&q=80",
    description: "When seconds matter, total visibility is critical. Empower first responders, ambulances, and police fleets with mission-critical tracking, ensuring the closest unit is dispatched instantly.",
    benefits: [
      "Sub-second live tracking updates",
      "Siren and lights-active monitoring",
      "Integration with computer-aided dispatch (CAD)",
      "Post-incident route reconstruction"
    ],
    stats: [
      { label: "Response Time", value: "-15%" },
      { label: "Dispatch Accuracy", value: "99%" }
    ]
  }
];

export default function IndustriesPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main className="bg-gray-50 min-h-screen pb-24">
        
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden pb-12">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?w=1920&q=80"
              alt="Industrial Fleet Operations"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001a12]/95 via-[#001a12]/80 to-[#001a12]/40" />
          </div>

          <div className="relative z-10 wrapper">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD461]/20 border border-[#FFD461]/30 text-[#FFD461] text-[10px] font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#FFD461] animate-pulse" />
                Tailored Solutions
              </div>
              <h1 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight">
                Built for <span className="text-[#FFD461]">Every Industry.</span>
              </h1>
              <p className="text-white/80 text-xl leading-relaxed mb-12 max-w-2xl">
                Different operations face different challenges. Discover how our AI-powered telematics and fleet management solutions are customized to drive efficiency, safety, and compliance in your specific sector.
              </p>
            </div>
          </div>
        </section>



        {/* Industry Sections */}
        <div className="mt-32">
          <div className="wrapper space-y-40">
          {industries.map((ind, index) => (
            <section 
              key={ind.id} 
              id={ind.id} 
              className={`scroll-mt-32 flex flex-col gap-12 lg:gap-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
            >
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="relative h-[400px] lg:h-[600px] rounded-[40px] overflow-hidden shadow-2xl bg-gray-900">
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001a12]/90 via-[#001a12]/20 to-transparent opacity-80" />
                  
                  {/* Floating Stats Card */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-center justify-around translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {ind.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <p className="text-2xl font-black text-[#FFD461] mb-1">{stat.value}</p>
                        <p className="text-white/80 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FFD461] rounded-full blur-3xl opacity-20 -z-10" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#00644E] rounded-full blur-3xl opacity-20 -z-10" />
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#00644E]/10 rounded-2xl flex items-center justify-center text-[#00644E]">
                    {ind.icon}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-black text-gray-900">{ind.title}</h2>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  {ind.description}
                </p>

                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-10">
                  <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6">Key Capabilities</h3>
                  <ul className="space-y-4">
                    {ind.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-[#00644E] shrink-0" />
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="#contact" 
                  aria-label={`Get tailored solutions for ${ind.title}`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-[#00644E] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  Get Tailored Solutions <ArrowRight className="w-5 h-5" />
                </a>
              </div>

            </section>
          ))}
        </div>
      </div>

        {/* Global CTA */}
        <section className="mt-48">
          <div className="wrapper">
            <div className="bg-[#FFD461] rounded-[40px] p-12 lg:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-2xl lg:text-4xl font-black text-black mb-6">Don't see your specific industry?</h2>
                <p className="text-black/70 text-lg mb-10">
                  Our platform is highly customizable. We build tailored telematics frameworks for specialized operations across East Africa. Let's discuss your unique challenges.
                </p>
                <a href="#contact" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-black rounded-2xl hover:scale-105 transition-all shadow-xl">
                  Talk to a Solutions Architect <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
