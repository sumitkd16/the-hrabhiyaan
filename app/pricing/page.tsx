"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FiCheck, FiX, FiArrowRight, FiHelpCircle } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

// Animation variants matching landing page exactly
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.0, 0.0, 0.2, 1] } }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.0, 0.0, 0.2, 1] } }
};

const fadeInUp = {
  variants: sectionVariants,
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: { once: true, margin: "-50px" as const }
};

export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      desc: "For small teams getting organized.",
      price: "$49",
      period: "/month",
      features: [
        "Up to 20 employees",
        "Basic Time Tracking",
        "Email Support",
        "Core HR Profiles",
        "5GB Document Storage"
      ],
      unavailable: ["Payroll automation"],
      cta: "Get Started",
      popular: false,
      accentColor: "emerald",  // Emerald green #00685f
      buttonStyle: "outline"   // Shows color on hover only
    },
    {
      name: "Growth",
      desc: "Perfect for mid-sized enterprises.",
      price: "$199",
      period: "/month",
      features: [
        "Up to 100 employees",
        "Geospatial Verified Check-ins",
        "Automated Payroll & Tax",
        "Performance Tracking",
        "Priority Support"
      ],
      unavailable: [],
      cta: "Get Started",
      popular: true,
      accentColor: "blue",     // Dark light blue #006387
      buttonStyle: "filled"    // Always visible color
    },
    {
      name: "Enterprise",
      desc: "For large-scale global operations.",
      price: "Custom",
      period: "",
      features: [
        "Unlimited employees",
        "Advanced Security & SSO",
        "Dedicated Account Manager",
        "Custom API Integrations",
        "24/7 Phone Support"
      ],
      unavailable: [],
      cta: "Contact Sales",
      popular: false,
      accentColor: "slate",    // Dark slate for enterprise
      buttonStyle: "outline-dark" // Shows dark color on hover only
    }
  ];

  // Top 8 features only - streamlined comparison
  const comparisonFeatures = [
    { name: "Employee Database", starter: true, growth: true, enterprise: true },
    { name: "Geospatial Check-in", starter: false, growth: true, enterprise: true },
    { name: "Payroll Automation", starter: false, growth: true, enterprise: true },
    { name: "Performance Reviews", starter: "Basic", growth: "Advanced", enterprise: "360° + OKRs" },
    { name: "Third-party Integrations", starter: "5", growth: "25", enterprise: "Unlimited" },
    { name: "Support Channel", starter: "Email", growth: "Email + Chat", enterprise: "24/7 Phone" },
    { name: "API Access", starter: false, growth: "Full REST", enterprise: "Full + Webhooks" },
    { name: "Custom Workflows", starter: false, growth: true, enterprise: true }
  ];

  // Indian HRMS competitors with estimated pricing for 100 employees
  const competitors = [
    { 
      name: "Keka HR", 
      price: "₹9,999", 
      period: "/mo",
      note: "Basic plan + addons",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-700"
    },
    { 
      name: "Zoho People", 
      price: "₹8,000", 
      period: "/mo",
      note: "Enterprise plan",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-700"
    },
    { 
      name: "Darwinbox", 
      price: "₹15,000", 
      period: "/mo",
      note: "Custom pricing",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-700"
    },
    { 
      name: "GreytHR", 
      price: "₹7,500", 
      period: "/mo",
      note: "Growth plan",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-700"
    }
  ];

  const renderValue = (value: boolean | string, plan: string) => {
    if (value === true) {
      // Emerald for starter/enterprise, blue for growth
      const colorClass = plan === 'growth' ? 'text-blue-600' : 'text-[#00685f]';
      return <FiCheck className={`w-5 h-5 ${colorClass} mx-auto`} />;
    }
    if (value === false) return <FiX className="w-5 h-5 text-slate-300 mx-auto" />;
    return <span className="text-sm font-inter text-on-secondary-fixed font-medium">{value}</span>;
  };

  return (
    <div className="w-full bg-surface min-h-screen">
      {/* Header Section */}
      <section className="pt-16 pb-12 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h1 className="font-headline text-4xl md:text-[3.5rem] font-bold text-on-secondary-fixed leading-[1.2] tight-headline mb-6">
              Simple, transparent <span className="text-[#2563eb]">pricing</span>
            </h1>
            <p className="font-inter text-lg text-on-secondary-container max-w-2xl mx-auto leading-relaxed">
              No hidden fees. No surprise charges. Just clear, flexible plans designed to scale with your team.
            </p>
          </motion.div>

          {/* Pricing Cards - EXACTLY like landing page */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {tiers.map((tier, idx) => (
              <motion.div 
                key={tier.name} 
                variants={itemVariants}
                className={`relative ${tier.popular ? 'md:-translate-y-4' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-inter text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider z-10 shadow-lg whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                
                <div className={`bg-surface-container-lowest p-8 md:p-10 rounded-2xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full ${tier.popular ? 'border-2 border-blue-600 shadow-blue-600/10' : 'border-outline-variant/10 hover:border-[#00685f]/30'}`}>
                  <h3 className="font-headline font-bold text-2xl text-on-secondary-fixed mb-2">{tier.name}</h3>
                  <p className="font-inter text-on-secondary-container text-sm mb-6">{tier.desc}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-extrabold text-on-secondary-fixed font-headline">{tier.price}</span>
                    {tier.period && <span className="text-on-secondary-container font-inter">{tier.period}</span>}
                  </div>

                  <ul className="space-y-4 mb-10 flex-1">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-on-secondary-fixed">
                        <span className={`material-symbols-outlined text-lg shrink-0 mt-0.5 ${tier.popular ? 'text-blue-600' : 'text-[#00685f]'}`}>
                          check_circle
                        </span>
                        <span className="font-inter">{feature}</span>
                      </li>
                    ))}
                    {tier.unavailable.map((feature, i) => (
                      <li key={`unavailable-${i}`} className="flex items-start gap-3 text-sm text-slate-400 line-through">
                        <span className="material-symbols-outlined text-slate-300 text-lg shrink-0 mt-0.5">check_circle</span>
                        <span className="font-inter">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button styles matching landing page exactly */}
                  {tier.buttonStyle === 'outline' && (
                    <button className="w-full py-3 rounded-lg border-2 border-[#00685f] text-[#00685f] font-bold hover:bg-[#00685f] hover:text-white transition-all">
                      {tier.cta}
                    </button>
                  )}
                  {tier.buttonStyle === 'filled' && (
                    <button className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:scale-[1.02] transition-all">
                      {tier.cta}
                    </button>
                  )}
                  {tier.buttonStyle === 'outline-dark' && (
                    <button className="w-full py-3 rounded-lg border-2 border-on-secondary-fixed text-on-secondary-fixed font-bold hover:bg-on-secondary-fixed hover:text-white transition-all">
                      {tier.cta}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison Table - PROPER TABLE STYLING */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-surface-container-low">
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="font-headline text-3xl md:text-[2.5rem] font-bold text-on-secondary-fixed tight-headline mb-4">
              Compare all features
            </h2>
            <p className="font-inter text-on-secondary-container max-w-2xl mx-auto">
              Detailed breakdown of what's included in each plan. Find the perfect fit for your HR needs.
            </p>
          </motion.div>

          <motion.div 
            className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-surface-container-low border-b border-outline-variant/30">
              <div className="p-5 font-headline font-bold text-on-secondary-fixed text-base border-r border-outline-variant/20">Features</div>
              <div className="p-5 text-center font-headline font-bold text-on-secondary-fixed text-base border-r border-outline-variant/20">Starter</div>
              <div className="p-5 text-center font-headline font-bold text-blue-600 text-base border-r border-outline-variant/20 bg-blue-600/5">Growth</div>
              <div className="p-5 text-center font-headline font-bold text-on-secondary-fixed text-base">Enterprise</div>
            </div>

            {/* Table Body with thin lines - BOLD TEXT */}
            <div className="divide-y divide-outline-variant/20">
              {comparisonFeatures.map((feature, idx) => (
                <motion.div 
                  key={feature.name}
                  className="grid grid-cols-4 hover:bg-surface-container-low/40 transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <div className="p-5 font-inter text-on-secondary-fixed font-semibold text-base border-r border-outline-variant/20 flex items-center gap-2">
                    {feature.name}
                    <FiHelpCircle className="w-4 h-4 text-slate-400 cursor-help flex-shrink-0" title={`Learn more about ${feature.name}`} />
                  </div>
                  <div className="p-5 text-center border-r border-outline-variant/20 flex items-center justify-center">
                    {renderValue(feature.starter, 'starter')}
                  </div>
                  <div className="p-5 text-center border-r border-outline-variant/20 bg-blue-600/5 flex items-center justify-center">
                    {renderValue(feature.growth, 'growth')}
                  </div>
                  <div className="p-5 text-center flex items-center justify-center">
                    {renderValue(feature.enterprise, 'enterprise')}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Table Footer with hover-reveal buttons */}
            <div className="grid grid-cols-4 bg-surface-container-low border-t border-outline-variant/30">
              <div className="p-5 border-r border-outline-variant/20"></div>
              <div className="p-5 border-r border-outline-variant/20">
                <button className="w-full py-3 rounded-lg border-2 border-[#00685f] text-[#00685f] font-inter font-bold text-sm hover:bg-[#00685f] hover:text-white transition-all">
                  Get Started
                </button>
              </div>
              <div className="p-5 border-r border-outline-variant/20 bg-blue-600/5">
                <button className="w-full py-3 rounded-lg bg-blue-600 text-white font-inter font-bold text-sm hover:bg-blue-700 transition-all shadow-md">
                  Get Started
                </button>
              </div>
              <div className="p-5">
                <button className="w-full py-3 rounded-lg border-2 border-on-secondary-fixed text-on-secondary-fixed font-inter font-bold text-sm hover:bg-on-secondary-fixed hover:text-white transition-all">
                  Contact Sales
                </button>
              </div>
            </div>
          </motion.div>

          {/* FAQ Note */}
          <div className="mt-8 text-center">
            <p className="font-inter text-sm text-on-secondary-container">
              Have questions? <button className="text-[#006387] hover:underline font-medium">View our FAQ</button> or <button className="text-[#006387] hover:underline font-medium">chat with our team</button>.
            </p>
          </div>
        </div>
      </section>

      {/* Competitor Comparison - Indian HRMS with emerald-teal gradient */}
      <section className="py-20 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl"
            style={{ 
              background: 'linear-gradient(135deg, #00685f 0%, #006387 100%)' 
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-300 rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-emerald-100 text-xs font-bold mb-6 border border-white/20">
                  <span className="material-symbols-outlined text-sm">trending_down</span>
                  SAVE UP TO 60%
                </div>
                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  Why Indian teams choose HRabhiyaan over Keka, Zoho & others
                </h2>
                <p className="font-inter text-emerald-100 mb-8 leading-relaxed">
                  Unlike fragmented Indian HRMS solutions, we bring payroll, compliance, and workforce management into one unified platform—at a fraction of the cost.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {[
                    "All-in-one platform",
                    "40% more affordable",
                    "Geospatial tracking",
                    "GST & PF compliance",
                    "Mobile-first design"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                      <FiCheck className="w-4 h-4 text-emerald-300" />
                      <span className="text-sm font-inter">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
                <h3 className="font-headline font-bold mb-6 text-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-300">savings</span>
                  Cost Comparison (100 employees)
                </h3>
                <div className="space-y-3 font-inter text-sm">
                  {competitors.map((comp, i) => (
                    <div key={i} className={`flex justify-between items-center p-3 ${comp.bgColor} ${comp.borderColor} border rounded-lg`}>
                      <div>
                        <span className={`${comp.textColor} font-bold block`}>{comp.name}</span>
                        <span className="text-xs text-slate-500">{comp.note}</span>
                      </div>
                      <span className="font-bold text-slate-700 text-lg">{comp.price}<span className="text-xs text-slate-500 font-normal">{comp.period}</span></span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center p-4 bg-white/20 rounded-xl border-2 border-white/40 shadow-lg transform scale-105 backdrop-blur-sm">
                    <div>
                      <span className="font-bold text-white text-lg block">HRabhiyaan Growth</span>
                      <span className="text-xs text-emerald-100">All features included</span>
                    </div>
                    <span className="font-bold text-white text-2xl">$199<span className="text-sm font-normal text-emerald-200">/mo</span></span>
                  </div>
                </div>
                <p className="text-xs text-emerald-200 mt-4 text-center font-inter">
                  Includes payroll, compliance, and support — no hidden charges
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-surface-container-lowest p-8 md:p-12 rounded-3xl border border-outline-variant/10 shadow-xl text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, #00685f 0%, #006387 100%)' }} />
            
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map(star => <FaStar key={star} className="text-amber-400 text-lg" />)}
            </div>
            
            <blockquote className="font-headline text-xl md:text-2xl text-on-secondary-fixed mb-8 leading-relaxed italic">
              "We switched from Keka to HRabhiyaan and cut our software costs by 50%. The geospatial attendance feature alone saved us 20 hours of manual verification every month."
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <img 
                src="https://i.pravatar.cc/150?img=11" 
                alt="Rahul Sharma" 
                className="w-14 h-14 rounded-full border-2 border-[#00685f]/20 object-cover"
              />
              <div className="text-left">
                <h4 className="font-bold text-on-secondary-fixed">Rahul Sharma</h4>
                <p className="text-sm text-on-secondary-container font-inter">VP Operations, TechStart India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-headline text-3xl md:text-[2.5rem] font-bold text-on-secondary-fixed tight-headline mb-6">
              Ready to transform your HR operations?
            </h2>
            <p className="font-inter text-on-secondary-container text-lg mb-10 max-w-2xl mx-auto">
              Join 500+ Indian companies already saving time and money with HRabhiyaan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 bg-blue-600">
                Book a Free Demo
                <FiArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-bold hover:-translate-y-1 transition-all duration-300 hover:bg-black hover:text-white">
                Talk to Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}