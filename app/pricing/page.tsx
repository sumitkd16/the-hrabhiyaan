"use client";
import Link from 'next/link';
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
      name: "Silver",
      desc: "For small teams getting started",
      price: "₹X,XXX",
      period: "/month",
      employees: "Up to 25 Employees",
      features: [
        "Employee Database & Digital Records",
        "Attendance Management",
        "Leave & Holiday Management",
        "Basic Payroll (PF, ESI, TDS)",
        "Employee Self-Service Portal",
        "Onboarding & Exit Management",
        "Organization Structure Setup",
        "Mobile App Access"
      ],
      unavailable: [],
      cta: "Free Trial",
      popular: false,
      accentColor: "teal",
      buttonStyle: "outline"
    },
    {
      name: "Gold",
      desc: "For growing businesses",
      price: "₹X,XXX",
      period: "/month",
      employees: "Up to 50 Employees",
      features: [
        "All Silver Features",
        "Asset Management & Tracking",
        "Expense & Travel Management",
        "Expense Approval Workflow",
        "Automated Reimbursements",
        "Advanced Reports & Analytics",
        "Policy-based Expense Controls"
      ],
      unavailable: [],
      cta: "Free Trial",
      popular: true,
      accentColor: "amber",
      buttonStyle: "filled-amber"
    },
    {
      name: "Diamond",
      desc: "For professional enterprises",
      price: "₹X,XXX",
      period: "/month",
      employees: "Up to 50 Employees",
      features: [
        "All Gold Features",
        "Helpdesk & Ticketing System",
        "Workflow Automation",
        "Performance & OKRs",
        "360° Reviews & Goal Tracking",
        "Real-time Dashboards & Insights",
        "Advanced Role-based Access"
      ],
      unavailable: [],
      cta: "Free Trial",
      popular: false,
      accentColor: "blue",
      buttonStyle: "filled-blue"
    },
    {
      name: "Platinum",
      desc: "For large-scale operations",
      price: "Custom",
      period: "",
      employees: "Unlimited Users",
      features: [
        "All Premium Features",
        "Custom Workflow Development",
        "API Integrations",
        "Dedicated Account Manager",
        "Advanced Security & SSO",
        "Custom Reports & BI Dashboards",
        "Priority Support & SLA",
        "Scalable Infrastructure"
      ],
      unavailable: [],
      cta: "Contact Teams",
      popular: false,
      accentColor: "purple",
      buttonStyle: "filled-purple"
    }
  ];

  // Features for 4-plan comparison with categories
  type FeatureValue = boolean | string;
  interface ComparisonFeature {
    category?: string;
    name: string;
    silver: FeatureValue;
    gold: FeatureValue;
    diamond: FeatureValue;
    platinum: FeatureValue;
  }

  const comparisonFeatures: ComparisonFeature[] = [
    { category: "Core HR", name: "Employee Database & Records", silver: true, gold: true, diamond: true, platinum: true },
    { name: "Attendance & Leave Management", silver: true, gold: true, diamond: true, platinum: true },
    { name: "Employee Self-Service Portal", silver: true, gold: true, diamond: true, platinum: true },
    { name: "Onboarding & Exit Management", silver: true, gold: true, diamond: true, platinum: true },
    { name: "Organization Structure", silver: true, gold: true, diamond: true, platinum: true },
    { category: "Payroll & Compliance", name: "Basic Payroll (PF, ESI, TDS)", silver: "Basic", gold: true, diamond: true, platinum: true },
    { name: "Payroll Reports & Analytics", silver: "Basic", gold: "Advanced", diamond: true, platinum: true },
    { category: "Asset & Expense", name: "Asset Management & Tracking", silver: false, gold: true, diamond: true, platinum: true },
    { name: "Expense & Travel Management", silver: false, gold: true, diamond: true, platinum: true },
    { name: "Expense Approval Workflow", silver: false, gold: true, diamond: true, platinum: true },
    { category: "Advanced Features", name: "Helpdesk & Ticketing System", silver: false, gold: false, diamond: true, platinum: true },
    { name: "Performance & OKRs", silver: false, gold: false, diamond: true, platinum: true },
    { name: "360° Reviews & Goal Tracking", silver: false, gold: false, diamond: true, platinum: true },
    { name: "Workflow Automation", silver: false, gold: false, diamond: true, platinum: true },
    { category: "Enterprise", name: "Advanced Security & SSO", silver: false, gold: false, diamond: false, platinum: true },
    { name: "API Integrations", silver: false, gold: false, diamond: false, platinum: true },
    { name: "Dedicated Account Manager", silver: false, gold: false, diamond: false, platinum: true },
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
      const colorClass = plan === 'gold' ? 'text-amber-500' : plan === 'diamond' ? 'text-blue-600' : plan === 'platinum' ? 'text-purple-600' : 'text-teal-600';
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

          {/* Pricing Cards - 4 columns matching landing page exactly */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Silver Plan */}
            <motion.div variants={itemVariants} className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl border-2 border-teal-600 shadow-lg shadow-teal-600/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-bold mb-4 w-fit">
                <span className="material-symbols-outlined text-sm">workspace_premium</span>
                Silver
              </div>
              <p className="text-on-secondary-container text-sm mb-4">For small teams getting started</p>
              <div className="mb-3 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-on-secondary-fixed blur-sm select-none">₹X,XXX</span>
                <span className="text-base text-on-secondary-container">/month</span>
              </div>
              <p className="text-sm font-semibold text-teal-600 mb-6">Up to 25 Employees</p>
              <ul className="space-y-3 mb-6 flex-1">
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-teal-600 text-base shrink-0">check_circle</span> Employee Database & Digital Records</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-teal-600 text-base shrink-0">check_circle</span> Attendance Management</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-teal-600 text-base shrink-0">check_circle</span> Leave & Holiday Management</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-teal-600 text-base shrink-0">check_circle</span> Basic Payroll (PF, ESI, TDS)</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-teal-600 text-base shrink-0">check_circle</span> Employee Self-Service Portal</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-teal-600 text-base shrink-0">check_circle</span> Onboarding & Exit Management</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-teal-600 text-base shrink-0">check_circle</span> Organization Structure Setup</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-teal-600 text-base shrink-0">check_circle</span> Mobile App Access</li>
              </ul>
              <Link href="/login" className="w-full py-3 rounded-lg bg-teal-600 text-white font-bold shadow-lg shadow-teal-600/30 hover:bg-teal-700 hover:scale-[1.02] transition-all text-center block">Free Trial</Link>
            </motion.div>

            {/* Gold Plan - Most Popular */}
            <motion.div variants={itemVariants} className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl border-2 border-amber-500 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white font-inter text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-widest z-10 shadow-lg whitespace-nowrap">
                Most Popular ⭐
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold mb-4 w-fit mt-3">
                <span className="material-symbols-outlined text-sm">stars</span>
                Gold
              </div>
              <p className="text-on-secondary-container text-sm mb-4">For growing businesses</p>
              <div className="mb-3 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-on-secondary-fixed blur-sm select-none">₹X,XXX</span>
                <span className="text-base text-on-secondary-container">/month</span>
              </div>
              <p className="text-sm font-semibold text-amber-600 mb-6">Up to 50 Employees</p>
              <ul className="space-y-3 mb-6 flex-1">
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-amber-500 text-base shrink-0">check_circle</span> All Silver Features</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-amber-500 text-base shrink-0">check_circle</span> Asset Management & Tracking</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-amber-500 text-base shrink-0">check_circle</span> Expense & Travel Management</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-amber-500 text-base shrink-0">check_circle</span> Expense Approval Workflow</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-amber-500 text-base shrink-0">check_circle</span> Automated Reimbursements</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-amber-500 text-base shrink-0">check_circle</span> Advanced Reports & Analytics</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-amber-500 text-base shrink-0">check_circle</span> Policy-based Expense Controls</li>
              </ul>
              <Link href="/login" className="w-full py-3 rounded-lg bg-amber-500 text-white font-bold shadow-lg shadow-amber-500/30 hover:bg-amber-600 hover:scale-[1.02] transition-all text-center block">Free Trial</Link>
            </motion.div>

            {/* Diamond Plan */}
            <motion.div variants={itemVariants} className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl border-2 border-blue-600 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-4 w-fit">
                <span className="material-symbols-outlined text-sm">diamond</span>
                Diamond
              </div>
              <p className="text-on-secondary-container text-sm mb-4">For professional enterprises</p>
              <div className="mb-3 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-on-secondary-fixed blur-sm select-none">₹X,XXX</span>
                <span className="text-base text-on-secondary-container">/month</span>
              </div>
              <p className="text-sm font-semibold text-blue-600 mb-6">Up to 50 Employees</p>
              <ul className="space-y-3 mb-6 flex-1">
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-blue-600 text-base shrink-0">check_circle</span> All Gold Features</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-blue-600 text-base shrink-0">check_circle</span> Helpdesk & Ticketing System</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-blue-600 text-base shrink-0">check_circle</span> Workflow Automation</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-blue-600 text-base shrink-0">check_circle</span> Performance & OKRs</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-blue-600 text-base shrink-0">check_circle</span> 360° Reviews & Goal Tracking</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-blue-600 text-base shrink-0">check_circle</span> Real-time Dashboards & Insights</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-blue-600 text-base shrink-0">check_circle</span> Advanced Role-based Access</li>
              </ul>
              <Link href="/login" className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:scale-[1.02] transition-all text-center block">Free Trial</Link>
            </motion.div>

            {/* Platinum Plan - Enterprise */}
            <motion.div variants={itemVariants} className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl border-2 border-purple-600 shadow-xl shadow-purple-600/20 hover:shadow-purple-600/30 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white font-inter text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-widest z-10 shadow-lg whitespace-nowrap">
                Enterprise 🏢
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold mb-4 w-fit mt-3">
                <span className="material-symbols-outlined text-sm">military_tech</span>
                Platinum
              </div>
              <p className="text-on-secondary-container text-sm mb-4">For large-scale operations</p>
              <div className="mb-3 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-on-secondary-fixed text-purple-600">Custom</span>
              </div>
              <p className="text-sm font-semibold text-purple-600 mb-6">Unlimited Users</p>
              <ul className="space-y-3 mb-6 flex-1">
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-purple-600 text-base shrink-0">check_circle</span> All Premium Features</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-purple-600 text-base shrink-0">check_circle</span> Custom Workflow Development</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-purple-600 text-base shrink-0">check_circle</span> API Integrations</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-purple-600 text-base shrink-0">check_circle</span> Dedicated Account Manager</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-purple-600 text-base shrink-0">check_circle</span> Advanced Security & SSO</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-purple-600 text-base shrink-0">check_circle</span> Custom Reports & BI Dashboards</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-purple-600 text-base shrink-0">check_circle</span> Priority Support & SLA</li>
                <li className="flex items-start gap-2 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-purple-600 text-base shrink-0">check_circle</span> Scalable Infrastructure</li>
              </ul>
              <Link href="/demo" className="w-full py-3 rounded-lg bg-purple-600 text-white font-bold shadow-lg shadow-purple-600/30 hover:bg-purple-700 hover:scale-[1.02] transition-all text-center block">Contact Teams</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison Table - Enhanced */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-surface-container-low">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="font-headline text-3xl md:text-[2.5rem] font-bold text-on-secondary-fixed tight-headline mb-4">
              Compare all features
            </h2>
            <p className="font-inter text-on-secondary-container max-w-2xl mx-auto">
              Detailed breakdown of what's included in each plan. Find the perfect fit for your HR needs.
            </p>
          </motion.div>

          {/* Enhanced Table Header Cards */}
          <motion.div
            className="grid grid-cols-5 gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Features Label */}
            <div className="flex items-center justify-center p-4">
              <span className="font-headline font-bold text-on-secondary-fixed text-sm">Features</span>
            </div>
            {/* Silver Header */}
            <div className="bg-surface-container-lowest p-4 rounded-xl border-2 border-teal-600 shadow-lg shadow-teal-600/10 text-center">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-bold mb-2">
                <span className="material-symbols-outlined text-xs">workspace_premium</span>
                Silver
              </div>
            </div>
            {/* Gold Header - Popular */}
            <div className="bg-surface-container-lowest p-4 rounded-xl border-2 border-amber-500 shadow-xl shadow-amber-500/20 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white font-inter text-[10px] font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                Most Popular ⭐
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold mt-2">
                <span className="material-symbols-outlined text-xs">stars</span>
                Gold
              </div>
            </div>
            {/* Diamond Header */}
            <div className="bg-surface-container-lowest p-4 rounded-xl border-2 border-blue-600 shadow-lg shadow-blue-600/10 text-center">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-2">
                <span className="material-symbols-outlined text-xs">diamond</span>
                Diamond
              </div>
            </div>
            {/* Platinum Header */}
            <div className="bg-surface-container-lowest p-4 rounded-xl border-2 border-purple-600 shadow-lg shadow-purple-600/10 text-center">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold mb-2">
                <span className="material-symbols-outlined text-xs">military_tech</span>
                Platinum
              </div>
            </div>
          </motion.div>

          {/* Enhanced Table Body */}
          <motion.div
            className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Table Body with Features & Categories */}
            <div className="divide-y divide-outline-variant/20">
              {comparisonFeatures.map((feature, idx) => (
                <motion.div
                  key={feature.name}
                  className="grid grid-cols-5 hover:bg-surface-container-low/50 transition-colors group"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {feature.category ? (
                    <div className="col-span-5 p-3 bg-surface-container-low/30 border-b border-outline-variant/20">
                      <span className="font-headline font-bold text-on-secondary-fixed text-xs uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1 h-4 rounded-full bg-[#006387]"></span>
                        {feature.category}
                      </span>
                    </div>
                  ) : (
                    <>
                      <div className="p-4 font-inter text-on-secondary-fixed text-sm border-r border-outline-variant/20 flex items-center gap-2">
                        {feature.name}
                        <FiHelpCircle className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-help flex-shrink-0" title={`Learn more about ${feature.name}`} />
                      </div>
                      <div className="p-4 text-center border-r border-outline-variant/20 flex items-center justify-center">
                        {renderValue(feature.silver, 'silver')}
                      </div>
                      <div className="p-4 text-center border-r border-outline-variant/20 bg-amber-50/30 flex items-center justify-center">
                        {renderValue(feature.gold, 'gold')}
                      </div>
                      <div className="p-4 text-center border-r border-outline-variant/20 flex items-center justify-center">
                        {renderValue(feature.diamond, 'diamond')}
                      </div>
                      <div className="p-4 text-center flex items-center justify-center">
                        {renderValue(feature.platinum, 'platinum')}
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Enhanced Table Footer with Styled Buttons */}
            <div className="grid grid-cols-5 bg-surface-container-low border-t-2 border-outline-variant/30">
              <div className="p-4 border-r border-outline-variant/20"></div>
              <div className="p-4 border-r border-outline-variant/20">
                <Link href="/login" className="w-full py-3 rounded-lg bg-teal-600 text-white font-bold shadow-lg shadow-teal-600/30 hover:bg-teal-700 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 text-center block">
                  Free Trial
                </Link>
              </div>
              <div className="p-4 border-r border-outline-variant/20 bg-amber-50/30">
                <Link href="/login" className="w-full py-3 rounded-lg bg-amber-500 text-white font-bold shadow-lg shadow-amber-500/30 hover:bg-amber-600 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 text-center block">
                  Free Trial
                </Link>
              </div>
              <div className="p-4 border-r border-outline-variant/20">
                <Link href="/login" className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 text-center block">
                  Free Trial
                </Link>
              </div>
              <div className="p-4">
                <Link href="/demo" className="w-full py-3 rounded-lg bg-purple-600 text-white font-bold shadow-lg shadow-purple-600/30 hover:bg-purple-700 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 text-center block">
                  Contact Sales
                </Link>
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



      {/* Competitor Comparison - Indian HRMS with gradient
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
                      <span className="font-bold text-white text-lg block">HRabhiyaan Gold</span>
                      <span className="text-xs text-emerald-100">All features included</span>
                    </div>
                    <span className="font-bold text-white text-2xl blur-sm select-none">₹X,XXX<span className="text-sm font-normal text-emerald-200">/mo</span></span>
                  </div>
                </div>
                <p className="text-xs text-emerald-200 mt-4 text-center font-inter">
                  Includes payroll, compliance, and support — no hidden charges
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}



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
                src="https://res.cloudinary.com/da00qz5zp/image/upload/v1776777965/photo-1563713076139-d9f44e576124_mw9e91.avif" 
                alt="Customer" 
                className="w-14 h-14 rounded-full border-2 border-primary/20 object-cover"
              />
              <div className="text-left">
                <h4 className="font-bold text-on-secondary-fixed">Trusted by 500+ Companies</h4>
                <p className="text-sm text-on-secondary-container font-inter">Join the growing HRabhiyaan family</p>
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
              <Link href="/demo" className="text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 bg-blue-600">
                Book a Free Demo
                <FiArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="border-2 border-black text-black px-8 py-4 rounded-lg font-bold hover:-translate-y-1 transition-all duration-300 hover:bg-black hover:text-white">
                Talk to Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}