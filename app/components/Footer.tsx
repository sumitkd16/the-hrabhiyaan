"use client";

import React from 'react';
import Link from 'next/link';
import { FaApple, FaGooglePlay, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-surface-container-low mt-24 md:mt-32 relative">
      {/* ─── MAIN FOOTER CONTENT ─── */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/hrabhiyaan-logo.png"
                alt="HRabhiyaan Logo"
                className="h-35 md:h-35 w-auto object-contain"
              />
            </Link>
            <p className="font-inter text-muted text-sm leading-relaxed max-w-xs mb-8">
              The architectural curator for modern human resources. Manage your team with executive-level clarity and workforce intelligence.
            </p>
            
            {/* Social Icons - Increased size for mobile */}
            <div className="flex items-center gap-4">
              {[ 
                { icon: FaTwitter, href: '#', label: 'Twitter' },
                { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
                { icon: FaInstagram, href: '#', label: 'Instagram' },
                { icon: FaYoutube, href: '#', label: 'YouTube' }
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-surface-container-high flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="text-xl md:text-lg" />
                </Link>
              ))}
            </div>
          </div>

          {/* Platform Links + App Store (Desktop Only) */}
          <div className="lg:col-span-2 lg:col-start-6 flex flex-col">
            <h4 className="font-manrope font-bold text-foreground text-xs uppercase tracking-widest mb-6">Platform</h4>
            <ul className="flex flex-col gap-3.5">
              <li><Link href="/" className="font-inter text-muted hover:text-primary transition-colors duration-300 text-sm">Overview</Link></li>
              <li><Link href="/pricing" className="font-inter text-muted hover:text-primary transition-colors duration-300 text-sm">Pricing</Link></li>
              <li><Link href="#" className="font-inter text-muted hover:text-primary transition-colors duration-300 text-sm">Integrations</Link></li>
              <li><Link href="#" className="font-inter text-muted hover:text-primary transition-colors duration-300 text-sm">API Docs</Link></li>
            </ul>
            
            {/* App Store under Platform - Desktop Only */}
            <div className="hidden lg:block mt-auto pt-8">
              <h5 className="font-manrope font-bold text-foreground text-[10px] uppercase tracking-widest mb-3 opacity-50">Get the App</h5>
              <Link 
                href="#" 
                className="group flex items-center gap-3 bg-surface-container-high hover:bg-primary text-foreground hover:text-white px-4 py-3 rounded-xl border border-outline-variant/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 w-full"
              >
                <FaApple className="text-xl shrink-0 transition-transform group-hover:scale-110" />
                <div className="text-left">
                  <p className="text-[9px] uppercase tracking-widest opacity-60 font-medium leading-none mb-0.5">Download on</p>
                  <p className="text-sm font-bold leading-tight">App Store</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Company Links + Play Store (Desktop Only) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="font-manrope font-bold text-foreground text-xs uppercase tracking-widest mb-6">Company</h4>
            <ul className="flex flex-col gap-3.5">
              <li><Link href="/about" className="font-inter text-muted hover:text-primary transition-colors duration-300 text-sm">About Us</Link></li>
              <li><Link href="#" className="font-inter text-muted hover:text-primary transition-colors duration-300 text-sm">Careers</Link></li>
              <li><Link href="#" className="font-inter text-muted hover:text-primary transition-colors duration-300 text-sm">Blog</Link></li>
              <li><Link href="/contact" className="font-inter text-muted hover:text-primary transition-colors duration-300 text-sm">Contact</Link></li>
            </ul>
            
            {/* Play Store under Company - Desktop Only */}
            <div className="hidden lg:block mt-auto pt-8">
              <Link 
                href="#" 
                className="group flex items-center gap-3 bg-surface-container-high hover:bg-primary text-foreground hover:text-white px-4 py-3 rounded-xl border border-outline-variant/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 w-full"
              >
                <FaGooglePlay className="text-lg shrink-0 transition-transform group-hover:scale-110" />
                <div className="text-left">
                  <p className="text-[9px] uppercase tracking-widest opacity-60 font-medium leading-none mb-0.5">Get it on</p>
                  <p className="text-sm font-bold leading-tight">Google Play</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Legal & Support */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="font-manrope font-bold text-foreground text-xs uppercase tracking-widest mb-6">Legal</h4>
            <ul className="flex flex-col gap-3.5 mb-8">
              <li><Link href="#" className="font-inter text-muted hover:text-primary transition-colors duration-300 text-sm">Privacy Policy</Link></li>
              <li><Link href="#" className="font-inter text-muted hover:text-primary transition-colors duration-300 text-sm">Terms of Service</Link></li>
              <li><Link href="#" className="font-inter text-muted hover:text-primary transition-colors duration-300 text-sm">Cookie Policy</Link></li>
            </ul>
            
            <h4 className="font-manrope font-bold text-foreground text-xs uppercase tracking-widest mb-6">Support</h4>
            <ul className="flex flex-col gap-3.5">
              <li><Link href="#" className="font-inter text-muted hover:text-primary transition-colors duration-300 text-sm">Help Center</Link></li>
              <li><Link href="#" className="font-inter text-muted hover:text-primary transition-colors duration-300 text-sm">System Status</Link></li>
            </ul>
          </div>
        </div>

        {/* ─── APP STORE BUTTONS - MOBILE ONLY (Side by Side) ─── */}
        <div className="lg:hidden border-t border-outline-variant/20 pt-8 pb-8">
          <h5 className="font-manrope font-bold text-foreground text-xs uppercase tracking-widest mb-4 text-center">Get the App</h5>
          <div className="flex flex-row gap-4 justify-center">
            {/* App Store - Compact version for mobile */}
            <Link 
              href="#" 
              className="group flex items-center gap-2 bg-surface-container-high hover:bg-primary text-foreground hover:text-white px-3 py-2 rounded-lg border border-outline-variant/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              <FaApple className="text-lg shrink-0 transition-transform group-hover:scale-110" />
              <div className="text-left">
                <p className="text-[8px] uppercase tracking-widest opacity-60 font-medium leading-none">Download on</p>
                <p className="text-xs font-bold leading-tight">App Store</p>
              </div>
            </Link>

            {/* Google Play - Compact version for mobile */}
            <Link 
              href="#" 
              className="group flex items-center gap-2 bg-surface-container-high hover:bg-primary text-foreground hover:text-white px-3 py-2 rounded-lg border border-outline-variant/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              <FaGooglePlay className="text-base shrink-0 transition-transform group-hover:scale-110" />
              <div className="text-left">
                <p className="text-[8px] uppercase tracking-widest opacity-60 font-medium leading-none">Get it on</p>
                <p className="text-xs font-bold leading-tight">Google Play</p>
              </div>
            </Link>
          </div>
        </div>

        {/* ─── BOTTOM BAR ─── */}
        <div className="border-t border-outline-variant/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p className="font-inter text-muted text-sm">
              © {new Date().getFullYear()} HRabhiyaan. All rights reserved.
            </p>
            
            {/* Trust Badges */}
            <div className="flex items-center gap-5 text-[10px] font-bold tracking-widest uppercase text-muted/50">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-emerald-600">verified</span>
                SOC 2
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-emerald-600">encrypted</span>
                ISO 27001
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-emerald-600">gavel</span>
                GDPR
              </span>
            </div>
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-sm font-medium text-muted hover:text-primary transition-colors duration-300 group"
          >
            Back to top
            <span className="material-symbols-outlined text-base group-hover:-translate-y-1 transition-transform duration-300">arrow_upward</span>
          </button>
        </div>
      </div>
    </footer>
  );
}