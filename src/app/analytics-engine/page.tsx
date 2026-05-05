import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Topbar from '@/components/Topbar'
import {
  Users,
  Shield,
  Award,
  TrendingUp,
  CheckCircle,
  Play,
  ArrowRight,
  Star,
  Clock,
  Globe,
  Smartphone,
  Database,
  BarChart3,
  AlertTriangle,
  FileText,
  Zap
} from 'lucide-react'

const features = [
  {
    title: 'Driver Behavior Monitoring',
    description: 'Track driving patterns and identify risky behaviors',
    icon: <Users className="w-8 h-8" />,
    benefits: ['Speed monitoring', 'Harsh braking detection', 'Idle time tracking']
  },
  {
    title: 'Safety Scoring System',
    description: 'Comprehensive driver performance evaluation',
    icon: <Award className="w-8 h-8" />,
    benefits: ['Real-time scoring', 'Performance trends', 'Safety benchmarks']
  },
  {
    title: 'Training Management',
    description: 'Track certifications and training requirements',
    icon: <FileText className="w-8 h-8" />,
    benefits: ['License tracking', 'Training schedules', 'Compliance alerts']
  },
  {
    title: 'Incident Reporting',
    description: 'Document and analyze safety incidents',
    icon: <AlertTriangle className="w-8 h-8" />,
    benefits: ['Accident reports', 'Near-miss tracking', 'Investigation tools']
  }
]

const benefits = [
  {
    title: 'Reduce Accidents',
    description: 'Proactive safety monitoring prevents incidents',
    icon: <Shield className="w-6 h-6" />,
    metric: '40%'
  },
  {
    title: 'Lower Insurance',
    description: 'Better safety records reduce premiums',
    icon: <TrendingUp className="w-6 h-6" />,
    metric: '25%'
  },
  {
    title: 'Improve Compliance',
    description: 'Meet regulatory requirements easily',
    icon: <CheckCircle className="w-6 h-6" />,
    metric: '100%'
  },
  {
    title: 'Driver Retention',
    description: 'Better working conditions improve retention',
    icon: <Users className="w-6 h-6" />,
    metric: '60%'
  }
]

const safetyFeatures = [
  {
    title: 'Real-time Alerts',
    description: 'Instant notifications for safety violations',
    icon: <Zap className="w-8 h-8" />
  },
  {
    title: 'Geofencing',
    description: 'Set boundaries and get unauthorized movement alerts',
    icon: <Globe className="w-8 h-8" />
  },
  {
    title: 'Fatigue Detection',
    description: 'Monitor driving patterns for signs of fatigue',
    icon: <Clock className="w-8 h-8" />
  },
  {
    title: 'Weather Integration',
    description: 'Adjust safety parameters based on conditions',
    icon: <Shield className="w-8 h-8" />
  }
]

export const metadata: Metadata = {
  title: "Driver Management Software",
  description: "Comprehensive driver oversight and safety management system designed to protect your drivers, reduce accidents, and ensure compliance.",
  alternates: {
    canonical: "https://www.teletracfleets.com/analytics-engine"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Teletrac Driver Management",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS, Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Driver behavior monitoring and safety scoring system."
};

export default function DriverManagementPage() {
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
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop"
              alt="Teletrac Driver Management Dashboard"
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
                Safety First Solution
              </div>
              <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Driver Management<br />
                <span className="text-[#FFD461]">That Protects.</span>
              </h1>
              <p className="text-white/75 text-xl leading-relaxed mb-10 max-w-xl">
                Comprehensive driver oversight and safety management system designed to protect your drivers, reduce accidents, and ensure compliance with transport regulations.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#demo" aria-label="Watch a demo of our Driver Management platform" className="px-8 py-4 bg-[#FFD461] text-black font-extrabold rounded-2xl hover:scale-105 transition-all shadow-2xl flex items-center gap-2">
                  <Play className="w-4 h-4" /> Watch Demo
                </a>
                <a href="#contact" aria-label="Start your free trial for Driver Management" className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 backdrop-blur-sm transition-all flex items-center gap-2">
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="py-12 bg-[#00644E]">
          <div className="wrapper grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {benefits.map(s => (
              <div key={s.title}>
                <p className="text-3xl font-black text-[#FFD461] mb-1">{s.metric}</p>
                <p className="text-white/60 text-xs font-medium uppercase tracking-wider">{s.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features Grid */}
        <section id="features" className="py-24 bg-gray-50">
          <div className="wrapper">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-[#00644E] text-xs font-bold uppercase tracking-[0.2em] mb-4">Core Capabilities</p>
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6">
                Comprehensive <br className="hidden lg:block" />
                <span className="text-[#00644E]">Driver Oversight.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Everything you need to manage, monitor, and protect your drivers.
              </p>
            </div>

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

        {/* Safety Features */}
        <section className="py-24 bg-white">
          <div className="wrapper">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <p className="text-[#00644E] text-xs font-bold uppercase tracking-[0.2em] mb-4">Proactive Protection</p>
                <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6">
                  Advanced <span className="text-[#00644E]">Safety Features.</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Our driver management system includes cutting-edge safety features that go beyond basic monitoring to actively prevent accidents and protect your drivers.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {safetyFeatures.map((feature, index) => (
                    <div key={index} className="flex flex-col space-y-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#00644E]/30 transition-all">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-[#00644E]">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-[40px] shadow-2xl h-full min-h-[600px]">
                  <Image
                    src="https://img.freepik.com/free-photo/pinpoints-compass-map_23-2148232397.jpg"
                    alt="Safety Features Live Incident Map"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Live Incident Map</h3>
                      <p className="text-gray-600 text-sm">Monitor weather, geofences, and safety alerts in real-time.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-24 bg-[#001a12] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="wrapper relative z-10 text-center max-w-4xl mx-auto">
            <p className="text-[#FFD461] text-xs font-bold uppercase tracking-widest mb-6">Stay Compliant</p>
            <h2 className="text-3xl lg:text-5xl font-black mb-8 leading-tight">
              East African Transport <span className="text-[#FFD461]">Compliance.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-16">
              Meet all regulatory requirements, maintain proper documentation, and streamline safety audits with our automated compliance tools.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <FileText className="w-10 h-10" />, title: "Driver Records", desc: "Complete driver history and documentation" },
                { icon: <Shield className="w-10 h-10" />, title: "Safety Reports", desc: "Regulatory compliance reporting" },
                { icon: <BarChart3 className="w-10 h-10" />, title: "Performance Analytics", desc: "Data-driven insights for improvement" }
              ].map(item => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all text-center group hover:-translate-y-2 duration-300">
                  <div className="w-20 h-20 bg-[#FFD461]/10 rounded-2xl flex items-center justify-center text-[#FFD461] mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#FFD461]">
          <div className="wrapper text-center">
            <h2 className="text-3xl lg:text-5xl font-black text-black mb-6">Ready to Protect Your Drivers?</h2>
            <p className="text-black/60 text-lg max-w-2xl mx-auto mb-10">
              Join companies across East Africa who trust us for driver safety and management. Get started with a 14-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a href="#contact" aria-label="Start free trial" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-black rounded-2xl hover:scale-105 transition-all shadow-xl">
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#demo" aria-label="Schedule a demo" className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-black text-black font-black rounded-2xl hover:bg-black/5 transition-all">
                <Play className="w-5 h-5" /> Schedule Demo
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-black/70 font-bold">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>500+ companies trust us</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Regulatory compliance</span>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
