import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Topbar from '@/components/Topbar'
import {
  Navigation,
  MapPin,
  Clock,
  Shield,
  TrendingUp,
  Zap,
  CheckCircle,
  Play,
  ArrowRight,
  Star,
  Users,
  Globe,
  Smartphone,
  Database,
  BarChart3
} from 'lucide-react'

const features = [
  {
    title: 'Real-time GPS Tracking',
    description: 'Monitor vehicle locations with 10-second updates',
    icon: <Navigation className="w-8 h-8" />,
    benefits: ['Live vehicle positions', 'Historical route playback', 'Geofencing alerts']
  },
  {
    title: 'Advanced Telematics',
    description: 'Comprehensive vehicle and driver data collection',
    icon: <Database className="w-8 h-8" />,
    benefits: ['Engine diagnostics', 'Fuel consumption', 'Driver behavior']
  },
  {
    title: 'Smart Notifications',
    description: 'Instant alerts for important events',
    icon: <Zap className="w-8 h-8" />,
    benefits: ['Speed violations', 'Route deviations', 'Maintenance alerts']
  },
  {
    title: 'Mobile Access',
    description: 'Track your fleet from anywhere',
    icon: <Smartphone className="w-8 h-8" />,
    benefits: ['iOS & Android apps', 'Real-time updates', 'Offline capability']
  }
]

const useCases = [
  {
    industry: 'Logistics & Transportation',
    description: 'Track delivery trucks and optimize routes for faster deliveries',
    icon: '🚛'
  },
  {
    industry: 'Construction',
    description: 'Monitor heavy equipment and ensure proper utilization',
    icon: '🏗️'
  },
  {
    industry: 'Agriculture',
    description: 'Track farming vehicles and optimize field operations',
    icon: '🚜'
  },
  {
    industry: 'Utilities',
    description: 'Monitor service vehicles and respond quickly to emergencies',
    icon: '⚡'
  }
]

export const metadata: Metadata = {
  title: "Fleet Tracking Software",
  description: "Get complete visibility into your fleet operations with advanced GPS tracking and telematics. Reduce costs and improve safety.",
  alternates: {
    canonical: "https://www.teletracfleets.com/unity-platform"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Teletrac Fleet Tracking",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS, Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Advanced GPS tracking and telematics software for modern fleet managers."
};

export default function FleetTrackingPage() {
  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <Topbar />
      <Navbar />
      <main className="bg-white">
        
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1920&q=85"
              alt="Teletrac Fleet Tracking Dashboard and Telematics overview"
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
                Most Popular Solution
              </div>
              <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Fleet Tracking<br />
                <span className="text-[#FFD461]">Made Simple.</span>
              </h1>
              <p className="text-white/75 text-xl leading-relaxed mb-10 max-w-xl">
                Get complete visibility into your fleet operations with our advanced GPS tracking and telematics solutions. Monitor vehicle locations, routes, and performance in real-time from anywhere in the world.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#demo" aria-label="Watch a demo of our Fleet Tracking platform" className="px-8 py-4 bg-[#FFD461] text-black font-extrabold rounded-2xl hover:scale-105 transition-all shadow-2xl flex items-center gap-2">
                  <Play className="w-4 h-4" /> Watch Demo
                </a>
                <a href="#contact" aria-label="Start your free trial for Fleet Tracking" className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 backdrop-blur-sm transition-all flex items-center gap-2">
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="py-12 bg-[#00644E]">
          <div className="wrapper grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "25%", label: "Reduce Fuel Costs" },
              { value: "40%", label: "Improve Safety" },
              { value: "90%", label: "Better Customer Service" },
              { value: "100%", label: "Prevent Theft" },
            ].map(s => (
              <div key={s.label}>
                <p className="text-3xl font-black text-[#FFD461] mb-1">{s.value}</p>
                <p className="text-white/60 text-xs font-medium uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Showcase */}
        <section id="features" className="py-24 bg-gray-50">
          <div className="wrapper">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-[#00644E] text-xs font-bold uppercase tracking-[0.2em] mb-4">Core Capabilities</p>
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6">
                Powerful features for <br className="hidden lg:block" />
                <span className="text-[#00644E]">modern fleet managers.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Everything you need to monitor and manage your fleet effectively.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-[32px] p-10 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00644E] to-[#004d3c] rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">{feature.description}</p>
                  
                  <div className="pt-8 border-t border-gray-100">
                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-5">Key Benefits</h4>
                    <ul className="space-y-4">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-green-50 text-[#00644E] flex items-center justify-center text-[9px] shrink-0 mt-0.5">
                            <i className="fas fa-check" />
                          </span>
                          <span className="text-gray-700 text-sm font-medium leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="py-24 bg-[#001a12] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="wrapper relative z-10 text-center max-w-4xl mx-auto">
            <p className="text-[#FFD461] text-xs font-bold uppercase tracking-widest mb-6">Enterprise Grade</p>
            <h2 className="text-3xl lg:text-5xl font-black mb-8 leading-tight">
              Built with <span className="text-[#FFD461]">Enterprise Technology.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-12">
              Our fleet tracking platform leverages cutting-edge technology to deliver reliable, scalable, and secure solutions for businesses of all sizes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Globe className="w-8 h-8" />, label: "Global Coverage", desc: "Worldwide GPS coverage with 99.9% uptime" },
                { icon: <Shield className="w-8 h-8" />, label: "Enterprise Security", desc: "End-to-end encryption and SOC 2 compliance" },
                { icon: <BarChart3 className="w-8 h-8" />, label: "Advanced Analytics", desc: "AI-powered insights and predictive analytics" },
              ].map(item => (
                <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                  <div className="text-[#FFD461] mb-6 flex justify-center">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{item.label}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-24 bg-white">
          <div className="wrapper">
            <p className="text-[#00644E] text-xs font-bold uppercase tracking-widest text-center mb-4">Perfect for Every Industry</p>
            <h2 className="text-3xl lg:text-4xl font-black text-center text-gray-900 mb-16">Adapts to your specific business needs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map(u => (
                <div key={u.industry} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-500 text-center">
                  <div className="text-4xl mb-6">{u.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-3">{u.industry}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{u.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#FFD461]">
          <div className="wrapper text-center">
            <h2 className="text-3xl lg:text-5xl font-black text-black mb-6">Ready to Start Tracking Your Fleet?</h2>
            <p className="text-black/60 text-lg max-w-2xl mx-auto mb-10">
              Join thousands of companies who trust us for their fleet tracking needs. Get started with a 14-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" aria-label="Start free trial" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-black rounded-2xl hover:scale-105 transition-all shadow-xl">
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#demo" aria-label="Schedule a demo" className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-black text-black font-black rounded-2xl hover:bg-black/5 transition-all">
                <Play className="w-5 h-5" /> Schedule Demo
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
