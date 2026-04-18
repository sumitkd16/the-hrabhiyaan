"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FaApple, FaGooglePlay, FaStar } from 'react-icons/fa';
import HeroDashboard from './components/HeroDashboard';
import Image from 'next/image';

// Lazy load the heavy dashboard component
// const HeroDashboard = dynamic(() => import('./components/HeroDashboard'), {
//   loading: () => (
//     <div className="relative bg-[#0a0a0a] rounded-2xl shadow-2xl border border-slate-800 overflow-hidden h-[400px] md:h-[500px] lg:h-[620px]">
//       <div className="animate-pulse bg-slate-800 h-full w-full" />
//     </div>
//   )
// });

// Widget data with images
const widgets = [
  { id: 'dashboard', name: 'Smart Dashboard', icon: 'dashboard', desc: 'Real-time metrics and AI-driven insights at your fingertips' },
  { id: 'talent', name: 'Talent Acquisition', icon: 'person_add', desc: 'AI-powered hiring from job posting to offer letters' },
  { id: 'workforce', name: 'Workforce Management', icon: 'groups', desc: 'Shift scheduling and geospatial attendance tracking' },
  { id: 'performance', name: 'Performance', icon: 'insights', desc: '360° feedback, OKRs, and professional development' },
  { id: 'finance', name: 'Finance', icon: 'account_balance', desc: 'Automated payroll and tax compliance for 50+ countries' },
  { id: 'operations', name: 'Operations', icon: 'settings_suggest', desc: 'Policy management and employee self-service portals' }
];

const widgetData: Record<string, { name: string; desc: string; image: string }> = {
  dashboard: {
    name: 'Smart Dashboard',
    desc: 'Real-time analytics with trend forecasting',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
  },
  talent: {
    name: 'Talent Acquisition',
    desc: 'AI-powered candidate ranking',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80'
  },
  workforce: {
    name: 'Workforce Management',
    desc: 'Smart scheduling & attendance',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'
  },
  performance: {
    name: 'Performance & Growth',
    desc: '360° feedback & OKR tracking',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
  },
  finance: {
    name: 'Finance & Admin',
    desc: 'Global payroll & compliance',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80'
  },
  operations: {
    name: 'HR Operations',
    desc: 'Policy & document hub',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80'
  }
};

// Using typed Variants objects to avoid Framer Motion TS errors
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.0, 0.0, 0.2, 1] } }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.0, 0.0, 0.2, 1] } }
};

// Spread-safe props for motion.div scroll animations
const fadeInUp = {
  variants: sectionVariants,
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: { once: true, margin: "0px" as const }
};

const staggerContainer = containerVariants;
const childVariant = itemVariants;

export default function Home() {
  const [activeWidget, setActiveWidget] = useState<string>('dashboard');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const [hasBeenViewed, setHasBeenViewed] = useState(false);

  // Auto-play logic
  useEffect(() => {
    if (!isAutoPlaying || !hasBeenViewed) return;

    const interval = setInterval(() => {
      setActiveWidget((current) => {
        const currentIndex = widgets.findIndex(w => w.id === current);
        const nextIndex = (currentIndex + 1) % widgets.length;
        return widgets[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, hasBeenViewed]);

  // Detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasBeenViewed(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

    // Navigate widgets
  const navigateWidget = (direction: number) => {
    const currentIndex = widgets.findIndex(w => w.id === activeWidget);
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = widgets.length - 1;
    if (newIndex >= widgets.length) newIndex = 0;
    setActiveWidget(widgets[newIndex].id);
    setIsAutoPlaying(false);
  };

  return (
    <div className="w-full">
    {/* Hero Section */}
<section className="relative overflow-hidden pt-16 pb-16 md:pt-24 md:pb-24 px-4 sm:px-6 md:px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
    
    {/* LEFT SIDE - Text Content (first on mobile) */}
    <motion.div 
      className="z-10"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-on-secondary-fixed leading-[1.2] md:leading-[1.1] tight-headline mb-4 md:mb-6 font-bold">
        The Complete HR Ecosystem for <span className="text-blue-600">Modern Teams</span>
      </h1>
      <p className="text-on-secondary-container text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-xl leading-relaxed">
        Streamline your entire employee lifecycle with AI-driven insights, geospatial attendance, and seamless payroll. Built for scale, designed for people.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="bg-primary text-on-primary px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold shadow-lg shadow-primary/20 hover:bg-primary-container hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-center text-sm md:text-base">
          Book a Free Demo
        </button>
        <button className="bg-secondary-container text-on-secondary-fixed px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold hover:bg-surface-container-high hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-center text-sm md:text-base">
          Explore Features
        </button>
      </div>
    </motion.div>

    {/* RIGHT SIDE - Dashboard (second on mobile) */}
    <motion.div 
      className="relative h-full"
      initial={{ opacity: 0, x: 50, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <HeroDashboard />
    </motion.div>
  </div>
</section>

      {/* Social Proof */}
      <section className="py-12 bg-surface-container-low overflow-hidden">
        <motion.div className="max-w-7xl mx-auto px-6 md:px-8" {...fadeInUp}>
          <p className="text-center text-on-secondary-container font-semibold uppercase tracking-widest text-xs mb-10">Trusted by Forward-Thinking Enterprise Teams</p>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 md:gap-24 opacity-100"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
              "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
              "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
            ].map((src, i) => (
              <motion.img
                key={i}
                variants={childVariant}
                className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer object-contain"
                alt="corporate logo"
                src={src}
              />
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* USP (Geospatial Intelligence) */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div className="order-2 lg:order-1 relative" {...fadeInUp}>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/20 group">
              <div className="bg-white p-4 flex items-center justify-between border-b border-surface-variant">
                <span className="font-headline font-bold text-on-secondary-fixed">Live Workforce Map</span>
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>
              </div>
              <div className="overflow-hidden">
                <Image 
  className="w-full h-64 md:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700" 
  alt="digital map interface showing user location pings" 
  src="/map image.png"
  width={800}
  height={400}
/>
                {/* <img className="w-full h-64 md:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700" alt="digital map interface showing user location pings" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIES03DfUsHurM7C0im1slegRdfymBYEnTTwXSQnBkZ2erVv9-cVOQRXwRprOi02JvUBVx3G4UdPHroOa0_ty_isYD0_QKbfQ5iPXtdhrAgwJzN_wz5gLhT05vS8IaWay3julWVqRGWTsj-jyyJZyrRcfXfkocAA0yDTS0T-uueEAySIQ4IBrMgUeP-WwaNJNd28yR5wm4Abu8A2ecl7i2rGwpXiPDCDtKfF-TXkko_2Ebwo0wtEuYF4T0Zs4VvPiwSJQW4MroB9vo" /> */}
              </div>
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-auto"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="glass-effect bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-white/40 shadow-lg flex items-center gap-3 hover:-translate-y-1 transition-all cursor-pointer overflow-hidden">
                  <div className="w-10 h-10 rounded-full bg-primary flex shrink-0 items-center justify-center text-white">
                    <span className="material-symbols-outlined animate-pulse">person_pin_circle</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm md:text-xs font-bold text-on-secondary-fixed truncate">Marcus Thorne</p>
                    <p className="text-[10px] text-primary font-medium truncate">Checked-in at HQ • 09:01 AM</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div className="order-1 lg:order-2" {...fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6">
              <span className="material-symbols-outlined text-sm">location_on</span>
              GEOSPATIAL INTELLIGENCE
            </div>
            <h2 className="font-headline text-3xl md:text-[2.5rem] font-bold text-on-secondary-fixed tight-headline mb-6 leading-tight">Know Where Your <br className="hidden md:block" />Work Happens.</h2>
            <p className="text-on-secondary-container text-base md:text-lg mb-8 leading-relaxed">
              Say goodbye to proxy attendance. Our location-verified pings ensure your field teams and office staff are exactly where they need to be, with automated geofencing for remote check-ins.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 hover:-translate-y-1 transition-transform cursor-default">
                <span className="material-symbols-outlined text-primary shrink-0 mt-0.5">verified_user</span>
                <span className="text-on-secondary-fixed font-medium">Tamper-proof location verification</span>
              </li>
              <li className="flex items-start gap-3 hover:-translate-y-1 transition-transform cursor-default">
                <span className="material-symbols-outlined text-primary shrink-0 mt-0.5">radar</span>
                <span className="text-on-secondary-fixed font-medium">Automated geofencing for job sites</span>
              </li>
              <li className="flex items-start gap-3 hover:-translate-y-1 transition-transform cursor-default">
                <span className="material-symbols-outlined text-primary shrink-0 mt-0.5">history</span>
                <span className="text-on-secondary-fixed font-medium">Real-time movement history logs</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Features Bento Grid - CLEAN DESIGN */}
      <section ref={sectionRef} className="py-20 md:py-32 bg-surface-container-low px-6 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12 md:mb-16" {...fadeInUp}>
            <h2 className="font-headline text-3xl md:text-[2.5rem] font-bold text-on-secondary-fixed tight-headline mb-4">Unified HR Operations</h2>
            <p className="text-on-secondary-container max-w-2xl mx-auto">Explore our integrated modules. Click any feature to learn more.</p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* LEFT SIDE - All 6 Widgets Stacked */}
            <div className="lg:w-1/3 flex flex-col gap-3" style={{ height: '600px' }}>
              {widgets.map((widget, index) => (
                <motion.div 
                  key={widget.id}
                  onClick={() => {
                    setActiveWidget(widget.id);
                    setIsAutoPlaying(false);
                  }}
                  className={`relative p-5 rounded-xl cursor-pointer overflow-hidden transition-all duration-300 flex-1 flex flex-col justify-center group ${
                    activeWidget === widget.id 
                      ? 'bg-slate-900 border-l-4 border-blue-600 shadow-xl' 
                      : 'bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon - PERMANENTLY BLUE */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      activeWidget === widget.id 
                        ? 'bg-blue-600 text-white scale-110' 
                        : 'bg-blue-50 text-blue-600'
                    }`}>
                      <span className="material-symbols-outlined text-xl">{widget.icon}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className={`font-bold text-base mb-1 truncate transition-colors ${
                        activeWidget === widget.id ? 'text-white' : 'text-slate-800'
                      }`}>
                        {widget.name}
                      </h3>
                      <p className={`text-xs line-clamp-2 leading-relaxed ${
                        activeWidget === widget.id ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        {widget.desc}
                      </p>
                    </div>

                    {/* Arrow - INVERTED DIRECTION */}
                    <span className={`material-symbols-outlined text-lg transition-all ${
                      activeWidget === widget.id 
                        ? 'text-blue-400'  // Points right (default)
                        : 'text-slate-300 rotate-90'  // Points down
                    }`}>
                      chevron_right
                    </span>
                  </div>

                  {/* REMOVED the blue glow line on right side */}
                </motion.div>
              ))}
            </div>

            {/* RIGHT SIDE - FULL SCREEN PREVIEW (No header, no dots, pure image) */}
            <div className="lg:w-2/3">
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900"
                style={{ height: '600px' }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeWidget}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Pure full-screen image - no overlays, no headers */}
                    <Image 
  src={widgetData[activeWidget].image} 
  alt={widgetData[activeWidget].name}
  fill
  className="object-contain bg-slate-950"
  sizes="(max-width: 1024px) 100vw, 66vw"
  priority={activeWidget === 'dashboard'}
/>
                  </motion.div>
                </AnimatePresence>

                {/* Invisible click areas to navigate */}
                <button 
                  onClick={() => navigateWidget(-1)}
                  className="absolute left-0 top-0 bottom-0 w-16 opacity-0 hover:opacity-10 bg-gradient-to-r from-black/50 to-transparent transition-opacity"
                />
                <button 
                  onClick={() => navigateWidget(1)}
                  className="absolute right-0 top-0 bottom-0 w-16 opacity-0 hover:opacity-10 bg-gradient-to-l from-black/50 to-transparent transition-opacity"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Messenger & Integrations */}
      <section className="py-20 md:py-32 px-6 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20 mb-20 md:mb-32">
            <motion.div className="flex-1 w-full" {...fadeInUp}>
              <h2 className="font-headline text-3xl md:text-[2.5rem] font-bold text-on-secondary-fixed tight-headline mb-6 leading-tight">Bridge the Distance with <br className="hidden md:block" />Native Messaging</h2>
              <p className="text-on-secondary-container text-base md:text-lg mb-8 leading-relaxed">
                Stop switching between Slack and HR tools. Our built-in messenger keeps employee conversations tied directly to their profiles and project workflows.
              </p>
              <button className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
                View all collaboration tools <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </motion.div>

            <motion.div
              className="flex-1 w-full bg-surface-container-low p-6 md:p-8 rounded-3xl relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-xl p-4 w-fit max-w-[90%] md:max-w-sm ml-auto mb-4 border border-outline-variant/10"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-xs font-bold text-primary mb-1">HR Admin</p>
                <p className="text-sm text-on-secondary-fixed">Hi Sarah, your leave for the upcoming marathon has been approved! 🏃‍♀️</p>
              </motion.div>
              <motion.div
                className="bg-blue-600 text-white rounded-2xl shadow-xl p-4 w-fit max-w-[90%] md:max-w-sm mr-auto border border-blue-600/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-xs font-bold text-blue-200 mb-1">Sarah Chen</p>
                <p className="text-sm">Awesome! Thanks for the quick update. See you Monday!</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Integrations Section - Image on Left, Icons on Right */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 md:gap-20">
            <motion.div className="flex-1 w-full" {...fadeInUp}>
              <h2 className="font-headline text-3xl md:text-[2.5rem] font-bold text-on-secondary-fixed tight-headline mb-6 leading-tight">Works with the Tools <br className="hidden md:block" />You Already Love</h2>
              <p className="text-on-secondary-container text-base md:text-lg mb-8 leading-relaxed">
                HRabhiyaan integrates seamlessly with Zoom, Jira, ChatGPT, and Telegram to keep your existing workflows moving.
              </p>
              <motion.div
                className="grid grid-cols-4 gap-4 md:gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { name: 'Zoom', src: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg', bg: 'bg-blue-50' },
                  { name: 'Jira', src: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Jira_Logo.svg', bg: 'bg-blue-50' },
                  { name: 'ChatGPT', src: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', bg: 'bg-emerald-50' },
                  { name: 'Telegram', src: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg', bg: 'bg-sky-50' }
                ].map((app, i) => (
                  <motion.div 
                    key={i} 
                    variants={childVariant} 
                    className={`aspect-square w-full max-w-[100px] md:max-w-[120px] ${app.bg} rounded-2xl flex items-center justify-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200 p-4 md:p-6`}
                    whileHover={{ scale: 1.08 }}
                  >
                    <img 
                      className="w-full h-full object-contain max-h-12 md:max-h-14" 
                      alt={app.name} 
                      src={app.src} 
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Image on Left Side */}
            <motion.div
              className="flex-1 w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
                <img 
                  className="w-full h-auto object-cover" 
                  alt="network connectivity visualization" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_6FZw-TylKDnhBmyXBiFuMyNuXwYhEvVOBXFBKzSD8nNO7_OMMHpg2tLEydRa_EzORg6v623sMfNh8slAETRnYHtFzuMsfFuyuW9pTQcJrUDQUg_hHE73r2jkgKygHf4JFcyKkaWotmxLgz68P5yh7beRTBPD_L22-QF0P6GBxvKSbzb-X3rVW-036iPs0spOoFIbR7NDuOiWZzeKpnzeKUC38MRae_SQofD4MeYnABLk-TM4pdmTI3ZXOcga0AKtQjaQKnyx0qIp" 
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 via-transparent to-blue-900/10 pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile App Promo */}
<section className="py-20 md:py-24 px-6 md:px-8 overflow-hidden bg-surface">
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className="max-w-7xl mx-auto bg-primary text-white rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl shadow-primary/20"
  >
    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
      {/* Left Content */}
      <motion.div 
        className="lg:w-1/2 w-full"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="font-headline text-3xl md:text-[2.5rem] font-bold text-white tight-headline mb-6 leading-tight">
          HR in Your Pocket
        </h2>
        <p className="text-white/80 text-base md:text-lg mb-10 leading-relaxed">
          The full power of HRabhiyaan on mobile. Quick check-ins, leave requests, payslip viewing, and manager approvals—all from a refined mobile experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          {/* App Store */}
          <div className="group bg-white text-primary px-6 py-3.5 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5">
            <FaApple className="text-2xl shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-60 font-bold leading-none mb-0.5 group-hover:text-blue-100 transition-colors">Download on the</p>
              <p className="text-sm font-bold leading-tight">App Store</p>
            </div>
          </div>
          {/* Google Play */}
          <div className="group bg-white text-primary px-6 py-3.5 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5">
            <FaGooglePlay className="text-xl shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-60 font-bold leading-none mb-0.5 group-hover:text-blue-100 transition-colors">Get it on</p>
              <p className="text-sm font-bold leading-tight">Google Play</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Phones */}
      <motion.div
        className="lg:w-1/2 relative flex justify-center mt-8 lg:mt-0"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {/* Primary Phone */}
        <div className="relative z-10 w-56 h-[450px] md:w-64 md:h-[500px] bg-slate-800 rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-[8px] border-white/15 shadow-2xl shadow-black/20 overflow-hidden hover:-translate-y-4 hover:shadow-black/40 transition-all duration-500 cursor-pointer">
          <img className="w-full h-full object-cover" alt="mobile app screen showing employee profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC71qXpkj2Wl-0JFmIMGsiOu_yHXJnQWrSFKU3XJDlMlIQ-w2EyrsR76RhxGR3eMWG5m_X7V6umDJmpmRN-tjgZVIugGDWEclYn5ebaTbtlHnu9_PYMjnh0fRbH7Bpd69bjy3-YtTEOjRMTdBm5cP1lkNApSYIebJRkPtrNsqwU47U0FrHJBWvxYzEVs2uj07i7vJBnwJdOD3Jz0fHDQvGtquO5HV1Gqx7cwQ1TPro80jJZgpCS1V0d7sgp4sPlZlS0zWwITAOAiPDr" />
        </div>
        
        {/* Secondary Phone - WHITE border instead of slate */}
        <motion.div
          className="absolute -right-4 md:-right-10 top-10 md:top-20 z-0 w-56 h-[450px] md:w-64 md:h-[500px] bg-white rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-[8px] border-white shadow-2xl overflow-hidden opacity-30 transform rotate-6 hidden lg:block hover:opacity-80 hover:rotate-12 transition-all duration-500 cursor-pointer"
          initial={{ rotate: 0 }}
          whileInView={{ rotate: 6 }}
          viewport={{ once: true }}
        >
          <img className="w-full h-full object-cover" alt="mobile app screen showing payroll history" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKIbTqKtmCapMgDHtG0BdSPRpuUjsgesuhSs8Sba-EaRd632zrWHcYg8yAlDD_vhQhsFnuO6g_lWKZ1j3qZ6UXZha3a82Ybp9Tqkj3i3oHQbNJaTZfe_P3Mz2kapHpkRnDwiCP9_VBPtiqMkkl3rgWxctKyW14ox9DI2o2dUCBbY-573bn_VycW0IYqxEwreLLXMdXRjFe7XzluQ_zpbtWTj80Ni1Nd2QFhoVOEZxG2RRP05Si_jCGSxYg3PYWM620XQqBpAy3Ih_w" />
        </motion.div>
      </motion.div>
    </div>
  </motion.div>
</section>

      {/* Pricing Table */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12 md:mb-16" {...fadeInUp}>
            <h2 className="font-headline text-3xl md:text-[2.5rem] font-bold text-on-secondary-fixed tight-headline mb-4">Scalable Plans for Every Stage</h2>
            <p className="text-on-secondary-container">No hidden fees. Transparent pricing that grows with your team.</p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={childVariant} className="bg-surface-container-lowest p-8 md:p-10 rounded-2xl border border-outline-variant/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <h3 className="font-headline font-bold text-xl text-on-secondary-fixed mb-2">Starter</h3>
              <p className="text-on-secondary-container text-sm mb-6">For small teams getting organized.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-on-secondary-fixed">$49</span>
                <span className="text-on-secondary-container">/month</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-start gap-3 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">check_circle</span> Up to 20 employees</li>
                <li className="flex items-start gap-3 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">check_circle</span> Basic attendance</li>
                <li className="flex items-start gap-3 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">check_circle</span> Core HR profiles</li>
                <li className="flex items-start gap-3 text-sm text-slate-400 line-through"><span className="material-symbols-outlined text-slate-300 text-lg shrink-0 mt-0.5">check_circle</span> Payroll automation</li>
              </ul>
              <button className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">Get Started</button>
            </motion.div>

            <motion.div variants={childVariant} className="bg-surface-container-lowest p-8 md:p-10 rounded-2xl border-2 border-blue-600 shadow-2xl shadow-blue-600/10 relative flex flex-col transform md:-translate-y-4 hover:-translate-y-6 hover:shadow-blue-600/20 transition-all duration-300 mt-4 sm:mt-0">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest animate-pulse whitespace-nowrap">Most Popular</div>
              <h3 className="font-headline font-bold text-xl text-on-secondary-fixed mb-2">Growth</h3>
              <p className="text-on-secondary-container text-sm mb-6">Perfect for mid-sized enterprises.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-on-secondary-fixed">$199</span>
                <span className="text-on-secondary-container">/month</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-start gap-3 text-sm text-on-secondary-fixed font-semibold"><span className="material-symbols-outlined text-blue-600 text-lg shrink-0 mt-0.5">check_circle</span> Up to 100 employees</li>
                <li className="flex items-start gap-3 text-sm text-on-secondary-fixed font-semibold"><span className="material-symbols-outlined text-blue-600 text-lg shrink-0 mt-0.5">check_circle</span> Geospatial verified check-ins</li>
                <li className="flex items-start gap-3 text-sm text-on-secondary-fixed font-semibold"><span className="material-symbols-outlined text-blue-600 text-lg shrink-0 mt-0.5">check_circle</span> Automated payroll & tax</li>
                <li className="flex items-start gap-3 text-sm text-on-secondary-fixed font-semibold"><span className="material-symbols-outlined text-blue-600 text-lg shrink-0 mt-0.5">check_circle</span> Performance tracking</li>
              </ul>
              <button className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:scale-[1.02] transition-all">Get Started</button>
            </motion.div>

            <motion.div variants={childVariant} className="bg-surface-container-lowest p-8 md:p-10 rounded-2xl border border-outline-variant/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <h3 className="font-headline font-bold text-xl text-on-secondary-fixed mb-2">Enterprise</h3>
              <p className="text-on-secondary-container text-sm mb-6">For large-scale global operations.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-on-secondary-fixed">Custom</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-start gap-3 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">check_circle</span> Unlimited employees</li>
                <li className="flex items-start gap-3 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">check_circle</span> Advanced security & SSO</li>
                <li className="flex items-start gap-3 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">check_circle</span> Dedicated account manager</li>
                <li className="flex items-start gap-3 text-sm text-on-secondary-fixed"><span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">check_circle</span> Custom API integrations</li>
              </ul>
              <button className="w-full py-3 rounded-lg border-2 border-on-secondary-fixed text-on-secondary-fixed font-bold hover:bg-on-secondary-fixed hover:text-white transition-all">Contact Sales</button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-surface-container-low border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12 md:mb-16" {...fadeInUp}>
            <h2 className="font-headline text-3xl md:text-[2.5rem] font-bold text-on-secondary-fixed tight-headline mb-4">Loved by HR Leaders</h2>
            <p className="text-on-secondary-container max-w-2xl mx-auto">Don't just take our word for it. See how teams are transforming their cultures with HRabhiyaan.</p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                quote: "HRabhiyaan fundamentally changed how we manage our global remote team. The geospatial tracking alone saved us countless hours of manual verification.",
                author: "Sarah Jenkins",
                role: "CHRO, TechFlow Inc.",
                img: "https://i.pravatar.cc/150?img=47"
              },
              {
                quote: "We consolidated 4 different HR tools into just HRabhiyaan. The Smart Dashboard gives our executive team the real-time metrics they've always wanted.",
                author: "David Chen",
                role: "VP of People Operations, ScaleUp",
                img: "https://i.pravatar.cc/150?img=11"
              },
              {
                quote: "The native messaging and automated workflows mean our employees actually enjoy using their HR software now. It's a game-changer for engagement.",
                author: "Elena Rodriguez",
                role: "Director of HR, Global Retail",
                img: "https://i.pravatar.cc/150?img=5"
              }
            ].map((t, i) => (
              <motion.div key={i} variants={childVariant} className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all cursor-default relative flex flex-col">
                <span className="text-primary text-6xl absolute top-4 right-6 opacity-10 font-serif leading-none">"</span>
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(star => <FaStar key={star} className="text-amber-400 text-sm" />)}
                </div>
                <p className="text-on-secondary-container mb-8 relative z-10 italic flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={t.img} alt={t.author} className="w-12 h-12 rounded-full border-2 border-primary/20 object-cover" />
                  <div>
                    <h4 className="font-bold text-on-secondary-fixed text-sm">{t.author}</h4>
                    <p className="text-[10px] text-on-secondary-container font-bold tracking-wide uppercase">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Feed */}
      <section className="py-20 md:py-32 bg-surface-container-low px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6" {...fadeInUp}>
            <div>
              <h2 className="font-headline text-3xl md:text-[2.5rem] font-bold text-on-secondary-fixed tight-headline mb-4">Latest Insights</h2>
              <p className="text-on-secondary-container">Stay ahead of the curve with our expert HR analysis.</p>
            </div>
            <button className="text-primary font-bold hover:underline underline-offset-4 flex items-center gap-1">Read more blog posts <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.article variants={childVariant} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-outline-variant/10 group cursor-pointer flex flex-col">
              <div className="overflow-hidden">
                <img className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500" alt="diverse group of professional team members working" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT5SSzYugmhY4qNwLZ5-pFtEWPPqRbSLspdS-g72Sx_t99Pd6vqUYreMeMiSFazTzrfZ1JAvchEQ_Iw8fbZ3ZnBxftm7gKSckPn2g34H_i0SDIwN9inkD-9OAT0dSGwVzoSdJf-Z4zVe1wkoap1JEI2_rzi17P2cKuN-o2QAihoq6W65qRnqoBrTvL6p9FH27B9eXl7nQPMHLO0i4e5m65msqoEU07yr94TLRTd_rmeqsj5hX-5hkWWzV19aT1eeE4PkHQnVLELRmp" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[10px] font-bold text-primary mb-2 uppercase tracking-widest">Workplace Trends</p>
                <h3 className="font-headline font-bold text-on-secondary-fixed text-lg mb-3 leading-tight group-hover:text-primary transition-colors">The Rise of Hyper-Personalized Benefits</h3>
                <p className="text-on-secondary-container text-sm line-clamp-2 mt-auto">How data is helping companies offer benefits that actually matter to individual employees.</p>
              </div>
            </motion.article>
            <motion.article variants={childVariant} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-outline-variant/10 group cursor-pointer flex flex-col">
              <div className="overflow-hidden">
                <img className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500" alt="professional woman using a tablet" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA57qGI-9Fbp48yfxBcfYdF_c-Xjxa-RzJwDlb4JSS1CkLfY69ROurfbGbUdv0BZPq2in2Xdz0OoXxcDppftlmYu7VMlUnpcy-zsihO6Psfser8AZDHKaqNhCtEdjwpc1NwwMz5f6kU_JhITPXQOmAbgzUzlvADx4__gL6_B2QzgAb5-Sw3Guu3kNb74uTM0ndU0AqzNiFpJqdZTbl9zdVYkgokxKyk3YfZfVWG4jwFoXf9YYTJz4LodC2qLGiWlKBb2OdhhaDoIb0m" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[10px] font-bold text-primary mb-2 uppercase tracking-widest">Remote Work</p>
                <h3 className="font-headline font-bold text-on-secondary-fixed text-lg mb-3 leading-tight group-hover:text-primary transition-colors">Global Compliance in the Age of Digital Nomads</h3>
                <p className="text-on-secondary-container text-sm line-clamp-2 mt-auto">Navigating international tax laws when your team is spread across 50 countries.</p>
              </div>
            </motion.article>
            <motion.article variants={childVariant} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-outline-variant/10 group cursor-pointer flex flex-col">
              <div className="overflow-hidden">
                <img className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500" alt="abstract data visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuTFRJPT2JDH0XANHU1rAYmlcrrT9C2i_mXqy7pWFIcAnbp_QXT008LDydO2O8nMIeKFALivpekXWr3PUx7rIy5EK4kx5uGLrYELwH1UA1zCvNIfL0_UEowUcQ2WEbFqpYod_WkRik_W3ralMJvGP_fFa7G4C5sVFk38foI-vgrB2U12FFrCXrDVyb-sGTHdqf6RZ21zUAPUk4umHtxe_UqzH0XVoxv7c8hzMSP2e8kiifW06AZqV6pzIFDeJOdInl-mO-LLboFlRh" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[10px] font-bold text-primary mb-2 uppercase tracking-widest">HR Technology</p>
                <h3 className="font-headline font-bold text-on-secondary-fixed text-lg mb-3 leading-tight group-hover:text-primary transition-colors">AI in Hiring: Fairness vs. Efficiency</h3>
                <p className="text-on-secondary-container text-sm line-clamp-2 mt-auto">Ensuring your automated recruitment pipelines remain unbiased and human-centric.</p>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </section>
    </div>
  );
}