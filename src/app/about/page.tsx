'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Topbar from '@/components/Topbar';
import Image from 'next/image';
import {
  Users,
  Target,
  Award,
  Globe,
  Shield,
  Zap,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '500+', label: 'Companies Trust Us', icon: <Users className="w-6 h-6" /> },
    { number: '15,000+', label: 'Vehicles Managed', icon: <Target className="w-6 h-6" /> },
    { number: '99.9%', label: 'System Uptime', icon: <Award className="w-6 h-6" /> },
    { number: '25%', label: 'Avg Cost Reduction', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety',
      description: 'The protection of people, property and respect for the environment where we operate.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Integrity',
      description: 'We commit to doing business upholding the highest degree of honesty, accountability, respect and trust in all our dealings.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We fundamentally believe in out-of-the box thinking, continuous improvement of processes, and industry-leading technologies.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Professional',
      description: 'Always act in a professional manner with the best interest of the client in mind.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Service',
      description: 'Always strive to provide exceptional customer service in everything we do through energetic responsiveness and collaborative solutioning.'
    }
  ];

  const milestones = [
    { year: '2020', title: 'Company Founded', description: 'Started with a vision to transform fleet management in Uganda and the wider East African region' },
    { year: '2021', title: 'First Clients Onboarded', description: 'Successfully onboarded our first fleet clients and established key industry partnerships' },
    { year: '2022', title: 'Technology Platform Launch', description: 'Launched our comprehensive fleet management platform powered by Powerfleet technology' },
    { year: '2023', title: 'Regional Expansion', description: 'Expanded operations across East Africa, growing our footprint beyond Uganda' },
    { year: '2024', title: '500+ Companies', description: 'Achieved a major milestone with 500+ companies trusting our fleet solutions' },
    { year: '2025', title: 'Industry Recognition', description: 'Recognised as a leading FleetTech partner in East Africa for innovation and service excellence' }
  ];

  return (
    <div className="bg-white selection:bg-[#00644E] selection:text-white">
      <Topbar />
      <Navbar />

      <main>
        {/* Hero Section - "Powering Fleet Efficiency" Design */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#003226]">
          {/* Background Blobs/Gradients */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00644E] rounded-full blur-[120px] opacity-40 animate-pulse" />
            <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-[#00FFBD] rounded-full blur-[100px] opacity-20" />
            <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-blue-500 rounded-full blur-[120px] opacity-20" />
          </div>

          {/* Decorative Lines */}
          <svg className="absolute right-0 top-0 h-full w-auto text-white/10 pointer-events-none" viewBox="0 0 400 800" fill="none">
            <path d="M400 0C400 0 100 200 100 400C100 600 400 800 400 800" stroke="currentColor" strokeWidth="1" />
            <path d="M400 100C400 100 150 250 150 400C150 550 400 700 400 700" stroke="currentColor" strokeWidth="1" />
          </svg>

          <div className="wrapper relative z-10 text-center">
            <div className="fade-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#00FFBD] mb-8">
                Teletrac Fleet Solution Ltd.
              </p>
              <h1 className="text-white font-extrabold leading-[1.05] tracking-tight mb-12" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
                Powering Fleet <br />
                <span className="relative">
                  Efficiency
                  {/* Stylized underline */}
                  <svg className="absolute -bottom-4 left-0 w-full h-4 text-[#00FFBD]/60" viewBox="0 0 400 20" preserveAspectRatio="none">
                    <path d="M0 10 Q 200 20 400 10" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="text-white/70 leading-relaxed font-medium max-w-4xl mx-auto" style={{ fontSize: "clamp(1rem, 1.2vw, 1.25rem)" }}>
                Teletrac Fleet Solutions Limited sets a new benchmark in fleet management by delivering premium technological solutions designed to address industry-wide challenges. Leveraging deep expertise in fleet management best practices and extensive experience collaborating with global multinationals on high-stakes projects including Oil & Gas Projects, we adhere to the most rigorous HSE standards. With this unparalleled foundation, we are poised to redefine safety, efficiency, and productivity for your fleet operations.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are Section - Refined Light Version */}
        <section className="py-24 bg-white text-[#171717] overflow-hidden relative border-t border-gray-100">
          <div className="wrapper relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <div className="fade-up">
                <div className="relative inline-block mb-8">
                  <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Who we are?</h2>
                  <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#00644E] rounded-full" />
                </div>

                <div className="space-y-6">
                  <p className="text-lg md:text-xl leading-relaxed font-medium text-gray-700">
                    We are regional authorized dealer of <span className="text-[#00644E] font-bold">Powerfleet</span>, a global leader in fleet management, united in our mission to streamline business operations- <span className="text-[#00644E] font-bold">helping you save lives, time, and money.</span>
                  </p>
                  <p className="text-base md:text-lg text-gray-500 font-medium">
                    We proudly serve companies with fleets of all sizes.
                  </p>
                </div>
              </div>

              {/* Diagram / Visual */}
              <div className="relative h-[400px] flex items-center justify-center scale-90 md:scale-100">
                {/* Background Curves */}
                <svg className="absolute inset-0 w-full h-full text-gray-200" viewBox="0 0 400 400" fill="none">
                  <path d="M50 400C50 400 150 300 180 0M350 400C350 400 250 300 220 0" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
                  <path d="M180 0L170 15M180 0L190 15M220 0L210 15M220 0L230 15" stroke="currentColor" strokeWidth="2" />
                </svg>

                {/* Conceptual Pills */}
                <div className="relative w-full h-full">
                  {/* Top */}
                  <div className="absolute top-[15%] left-1/2 -translate-x-1/2">
                    <div className="px-6 py-2 bg-[#f0eaff] border border-[#a885f7]/30 text-[#6b21a8] text-[11px] font-bold rounded-full shadow-sm whitespace-nowrap">
                      Fleet Efficiency
                    </div>
                    {/* Tiny accent lines */}
                    <div className="absolute -right-4 top-0 text-[#00644E]">
                      <div className="w-3 h-0.5 bg-current rotate-[-20deg] mb-1 opacity-40" />
                      <div className="w-4 h-0.5 bg-current rotate-[-10deg] opacity-40" />
                    </div>
                  </div>

                  {/* Middle */}
                  <div className="absolute top-[45%] left-[10%]">
                    <div className="px-5 py-2 bg-[#f0f9ff] border border-[#7dd3f7]/30 text-[#0369a1] text-[10px] font-bold rounded-full whitespace-nowrap shadow-sm">
                      Data Insights & Visibility
                    </div>
                  </div>
                  <div className="absolute top-[45%] right-[10%]">
                    <div className="px-5 py-2 bg-[#f0f9ff] border border-[#7dd3f7]/30 text-[#0369a1] text-[10px] font-bold rounded-full whitespace-nowrap shadow-sm">
                      Dedicated Solutions
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="absolute bottom-[20%] left-[0%]">
                    <div className="px-5 py-2 bg-[#f0fdf4] border border-[#2edba3]/30 text-[#065f46] text-[10px] font-bold rounded-full whitespace-nowrap shadow-sm">
                      Powerful Technology
                    </div>
                  </div>
                  <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2">
                    <div className="px-5 py-2 bg-[#f0fdf4] border border-[#2edba3]/30 text-[#065f46] text-[10px] font-bold rounded-full whitespace-nowrap shadow-sm">
                      Quality Services
                    </div>
                  </div>
                  <div className="absolute bottom-[20%] right-[0%]">
                    <div className="px-5 py-2 bg-[#f0fdf4] border border-[#2edba3]/30 text-[#065f46] text-[10px] font-bold rounded-full whitespace-nowrap shadow-sm">
                      Industry Expertise
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision - Creative Redesign */}
        <section className="py-40 bg-[#003226] relative overflow-hidden">
          {/* Abstract background elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00644E] rounded-full blur-[150px] opacity-30 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFD461] rounded-full blur-[120px] opacity-10 -translate-x-1/2 translate-y-1/2" />

          <div className="wrapper relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              {/* Heading Side */}
              <div className="lg:col-span-4 fade-up">
                <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-none mb-8">
                  Driven by <br />
                  <span className="text-[#FFD461]">Purpose.</span>
                </h2>
                <p className="text-white/60 text-lg font-medium leading-relaxed max-w-sm">
                  Beyond technology, we are guided by a commitment to safer roads and optimized logistics.
                </p>

                <div className="mt-12 hidden lg:block">
                  <div className="w-24 h-[1px] bg-white/20 mb-4" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/40">Established 2020</span>
                </div>
              </div>

              {/* Cards Side */}
              <div className="lg:col-span-8 grid md:grid-cols-2 gap-8 relative">
                {/* Mission Card */}
                <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[2.5rem] hover:bg-white/10 transition-all duration-700 hover:-translate-y-4 hover:rotate-2 shadow-2xl">
                  <div className="w-16 h-16 bg-[#FFD461] rounded-2xl flex items-center justify-center text-black mb-10 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,212,97,0.3)]">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-[#FFD461] mb-6">Our Mission</h3>
                  <p className="text-2xl md:text-3xl font-extrabold text-white leading-tight italic tracking-tight">
                    To be the most sought-after FleetTech Partner offering world-class solutions within Uganda and the East African Region.
                  </p>
                  <div className="absolute top-8 right-8 text-white/5 text-8xl font-black select-none pointer-events-none">01</div>
                </div>

                {/* Vision Card - Staggered */}
                <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[2.5rem] md:mt-20 hover:bg-white/10 transition-all duration-700 hover:-translate-y-4 hover:-rotate-2 shadow-2xl">
                  <div className="w-16 h-16 bg-[#00FFBD] rounded-2xl flex items-center justify-center text-black mb-10 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(0,255,189,0.2)]">
                    <Globe className="w-8 h-8" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-[#00FFBD] mb-6">Our Vision</h3>
                  <p className="text-2xl md:text-3xl font-extrabold text-white leading-tight italic tracking-tight">
                    Leading the digital transformation of transportation by providing data-driven insights that save lives and optimize costs.
                  </p>
                  <div className="absolute top-8 right-8 text-white/5 text-8xl font-black select-none pointer-events-none">02</div>
                </div>

                {/* Decorative floating circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#FFD461]/20 rounded-full blur-2xl animate-pulse pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Global Style */}
        <section className="bg-white py-32 overflow-hidden">
          <div className="wrapper">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col gap-6 fade-up" style={{ animationDelay: `${0.1 * i}s` }}>
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#00644E] shadow-inner">
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-5xl md:text-6xl font-extrabold text-[#171717] tracking-tight mb-2">{s.number}</div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00644E]">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values - Modern Editorial Layout */}
        <section className="py-40 bg-gray-50 relative overflow-hidden">
          <div className="wrapper relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-5xl md:text-7xl font-extrabold text-[#171717] tracking-tight mb-8">
                  Our <span className="text-[#00644E]">DNA.</span>
                </h2>
                <p className="text-xl text-gray-500 font-medium leading-relaxed">Built on safety, integrity, and relentless innovation. These are the pillars of the Teletrac experience.</p>
              </div>
              <div className="hidden lg:block">
                <div className="w-32 h-32 bg-[#FFD461] rounded-full flex items-center justify-center -rotate-12 hover:rotate-0 transition-transform cursor-pointer">
                  <Zap className="w-12 h-12 text-[#003226]" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <div key={i} className="group p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className="w-16 h-16 bg-[#00644E]/5 rounded-2xl flex items-center justify-center text-[#00644E] mb-8 group-hover:bg-[#00644E] group-hover:text-white transition-all duration-500">
                    {v.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#171717] mb-4 tracking-tight">{v.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-medium">{v.description}</p>
                </div>
              ))}
              <div className="group p-10 bg-[#00644E] rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between text-white">
                <p className="text-2xl font-bold italic opacity-80">&quot;Excellence is not an act, but a habit.&quot;</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-[#FFD461]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFD461]">Our Philosophy</span>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative accents */}
          <div className="absolute top-1/2 left-0 -translate-x-1/2 w-96 h-96 bg-[#FFD461]/5 rounded-full blur-3xl pointer-events-none" />
        </section>

        {/* Timeline - Editorial Growth */}
        <section className="py-40 bg-white">
          <div className="wrapper">
            <div className="text-center mb-32">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight mb-6">
                The Growth <span className="italic text-gray-300">Chronicles.</span>
              </h2>
              <div className="w-20 h-1.5 bg-[#FFD461] mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-16">
              {milestones.map((m, i) => (
                <div key={i} className="relative group">
                  <div className="flex items-center gap-6 mb-8">
                    <span className="text-5xl font-extrabold text-gray-100 leading-none group-hover:text-[#FFD461] transition-colors duration-500">{m.year}</span>
                    <div className="h-px flex-1 bg-gray-100" />
                  </div>
                  <h3 className="text-xl font-bold text-[#171717] mb-4">{m.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* High-Stark CTA */}
        <section className="py-40 bg-[#003226] text-white relative overflow-hidden">
          <div className="wrapper text-center relative z-10">
            <h2 className="text-6xl md:text-[8rem] font-extrabold mb-16 tracking-tight leading-[1.05]">
              READY TO <br />
              <span className="text-[#FFD461]">SCALE?</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/60 font-medium max-w-2xl mx-auto mb-16">
              Join hundreds of companies across Africa who trust Teletrac Fleet Solutions with their mission-critical operations.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <a href="/contact" className="px-12 py-6 bg-[#FFD461] text-[#003226] text-xl font-bold rounded-2xl hover:bg-white transition-all hover:scale-105 shadow-2xl">
                Partner With Us
              </a>
              <a href="/contact" className="group flex items-center gap-4 text-xl font-bold hover:text-[#FFD461] transition-colors">
                Request a Demo <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
          {/* Background visuals */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,212,97,0.05),transparent)] pointer-events-none" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
