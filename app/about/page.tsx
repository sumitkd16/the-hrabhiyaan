"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-24 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center md:text-left mb-16"
      >
        <span className="font-inter text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Story</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline text-foreground tracking-tight leading-tight max-w-4xl">
          Turning your HR tech dreams into <span className="text-blue-600 block md:inline">reality.</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20"
      >
        {/* Left Column: Story */}
        <div className="md:col-span-7 prose prose-lg dark:prose-invert max-w-none font-inter text-muted space-y-8">
          <p className="text-xl text-foreground font-medium leading-relaxed">
            HRabhiyaan was born out of <strong className="text-primary font-bold">Alsol Technology Solutions</strong>, a globally-minded innovation firm headquartered in India.
          </p>
          
          <p>
            Guided by our parent company's core mantra—<em>"Turning Your Tech Dreams Into Reality"</em>—we set out to solve a persistent global problem. Modern enterprises rely on HR software that feels stuck in the past. Legacy systems are often cluttered, deeply unintuitive, and force agile teams to adapt to rigid, decade-old workflows instead of the other way around.
          </p>
          
          <p>
            Drawing upon Alsol Tech's deep expertise in cutting-edge digital solutions, scalable web architecture, mobile application development, and premium UI/UX design, HRabhiyaan isn't just another platform. It is a carefully engineered, consumer-grade ecosystem tailored for the enterprise workforce.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold font-headline text-foreground mt-12 mb-6">Our Design Philosophy</h2>
          <p>
            We believe HR should be an architectural masterpiece, not a messy utility. We are building the "Architectural Curator" of HR. This means constructing a platform that brings executive-level clarity to every layer of your organization.
          </p>
          <p>
            By focusing on tonal layering, elegant bento grids, and purposeful interaction design, we transform complex HR management from an administrative chore into a seamless, high-performance experience. We eschew traditional heavy drop shadows for modern ambient lighting and replace harsh borders with subtle tonal shifts. Every pixel serves a purpose, engineered to foster trust, speed, and absolute reliability.
          </p>
        </div>

        {/* Right Column: Key Stats / Parent Info */}
        <div className="md:col-span-5 space-y-8">
          <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/15 shadow-ambient hover:shadow-xl transition-all">
            <h3 className="font-headline font-bold text-xl text-foreground mb-4">Backed by Alsol Tech</h3>
            <p className="font-inter text-sm text-muted mb-6">
              Our engineering foundation relies on Alsol Technology Solution's established industry expertise across global software delivery.
            </p>
            <ul className="space-y-4 font-inter text-sm text-foreground">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">architecture</span>
                Enterprise Web Apps
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">smartphone</span>
                Native iOS & Android Focus
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">design_services</span>
                Premium UI/UX Design
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">query_stats</span>
                Digital Strategy & SEO
              </li>
            </ul>
          </div>

          <div className="h-64 md:h-auto md:flex-1 bg-surface-container-high rounded-3xl overflow-hidden relative shadow-lg">
            <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" alt="Alsol Technology Office" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
               <p className="text-white font-headline font-bold text-lg">Engineering the future of work.</p>
            </div>
          </div>
        </div>
      </motion.div>
  

      {/* Core Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-24 md:mt-32"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-headline text-foreground mb-6">Our Core Values</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">The principles that drive our engineering, design, and customer success teams every single day at Alsol Tech.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/10 hover:-translate-y-2 transition-all">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">lightbulb</span>
            </div>
            <h3 className="text-xl font-bold font-headline text-foreground mb-3">Relentless Innovation</h3>
            <p className="text-muted text-sm leading-relaxed">We don't settle for "industry standard." We constantly push the boundaries of what enterprise software can look and feel like, aiming for consumer-grade experiences.</p>
          </div>
          <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/10 hover:-translate-y-2 transition-all">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">shield_locked</span>
            </div>
            <h3 className="text-xl font-bold font-headline text-foreground mb-3">Absolute Reliability</h3>
            <p className="text-muted text-sm leading-relaxed">HR data is the lifeblood of any company. We engineer every feature with bank-grade security and a zero-tolerance policy for data mishandling.</p>
          </div>
          <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/10 hover:-translate-y-2 transition-all">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">groups</span>
            </div>
            <h3 className="text-xl font-bold font-headline text-foreground mb-3">Empathy-Driven Design</h3>
            <p className="text-muted text-sm leading-relaxed">Behind every data point is a human being. We design systems that reduce friction and anxiety for employees, making work life genuinely better.</p>
          </div>
        </div>
      </motion.div>

      {/* Global Footprint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-24 md:mt-32 bg-primary text-white rounded-[3rem] p-10 md:p-16 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform scale-150 origin-top-right">
            <path fill="#ffffff" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.6,-46.3C91.4,-33.5,98,-18,97,-2.9C96.1,12.2,87.6,26.8,76.5,38.8C65.5,50.8,51.8,60.2,37.3,66.5C22.8,72.8,7.5,76.1,-7.2,74C-21.9,71.9,-36.1,64.4,-49.6,55.3C-63.1,46.2,-75.8,35.6,-83.4,21.8C-91,-8,-93.4,-6.2,-87.4,-18.2C-81.4,-30.2,-66.9,-40.1,-53.4,-48.5C-39.9,-56.9,-27.3,-64.1,-13.7,-68.8C-0.1,-73.6,14.5,-76.1,30.6,-77.7C44.7,-76.4,30.6,-77.7,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6">A Global Mission</h2>
            <p className="text-white/90 text-lg max-w-lg mb-8 leading-relaxed">
              From our headquarters in West Bengal, India, Alsol Technology Solutions is powering HR transformation for forward-thinking enterprises across the globe.
            </p>
            <div className="flex gap-6">
              <div>
                <p className="text-4xl font-bold font-headline mb-1">50+</p>
                <p className="text-sm text-white font-medium uppercase tracking-widest">Countries</p>
              </div>
              <div className="w-px bg-white/20"></div>
              <div>
                <p className="text-4xl font-bold font-headline mb-1">10k+</p>
                <p className="text-sm text-white font-medium uppercase tracking-widest">Active Users</p>
              </div>
              <div className="w-px bg-white/20"></div>
              <div>
                <p className="text-4xl font-bold font-headline mb-1">99.9%</p>
                <p className="text-sm text-white font-medium uppercase tracking-widest">Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
