"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaApple, FaGooglePlay, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

// Static year to avoid hydration mismatch and client-side date calculation
const CURRENT_YEAR = 2024;

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-container-low mt-24 md:mt-32">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6" aria-label="HRabhiyaan Home">
              <div className="relative h-24 md:h-28 w-72 md:w-80">
                <Image
                  src="/hrabhiyaan-logo.png"
                  alt="HRabhiyaan Logo"
                  fill
                  className="object-contain object-left "
                  sizes="(max-width: 768px) 192px, 240px"
                  priority={false}
                  loading="lazy"
                />
              </div>
            </Link>
            <p className="font-inter text-muted text-sm leading-relaxed max-w-xs mb-8">
              The architectural curator for modern human resources. Manage your team with executive-level clarity and workforce intelligence.
            </p>
            
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
                  className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-surface-container-high flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 will-change-transform"
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
            
            <div className="hidden lg:block mt-auto pt-8">
              <h5 className="font-manrope font-bold text-foreground text-[10px] uppercase tracking-widest mb-3 opacity-50">Get the App</h5>
              <Link 
                href="#" 
                className="group flex items-center gap-3 bg-surface-container-high hover:bg-primary text-foreground hover:text-white px-4 py-3 rounded-xl border border-outline-variant/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 w-full will-change-transform"
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
            
            <div className="hidden lg:block mt-auto pt-8">
              <Link 
                href="#" 
                className="group flex items-center gap-3 bg-surface-container-high hover:bg-primary text-foreground hover:text-white px-4 py-3 rounded-xl border border-outline-variant/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 w-full will-change-transform"
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

        {/* Mobile App Store Buttons */}
        <div className="lg:hidden border-t border-outline-variant/20 pt-8 pb-8">
          <h5 className="font-manrope font-bold text-foreground text-xs uppercase tracking-widest mb-4 text-center">Get the App</h5>
          <div className="flex flex-row gap-4 justify-center">
            <Link 
              href="#" 
              className="group flex items-center gap-2 bg-surface-container-high hover:bg-primary text-foreground hover:text-white px-3 py-2 rounded-lg border border-outline-variant/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 will-change-transform"
            >
              <FaApple className="text-lg shrink-0 transition-transform group-hover:scale-110" />
              <div className="text-left">
                <p className="text-[8px] uppercase tracking-widest opacity-60 font-medium leading-none">Download on</p>
                <p className="text-xs font-bold leading-tight">App Store</p>
              </div>
            </Link>

            <Link 
              href="#" 
              className="group flex items-center gap-2 bg-surface-container-high hover:bg-primary text-foreground hover:text-white px-3 py-2 rounded-lg border border-outline-variant/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 will-change-transform"
            >
              <FaGooglePlay className="text-base shrink-0 transition-transform group-hover:scale-110" />
              <div className="text-left">
                <p className="text-[8px] uppercase tracking-widest opacity-60 font-medium leading-none">Get it on</p>
                <p className="text-xs font-bold leading-tight">Google Play</p>
              </div>
            </Link>
          </div>
        </div>

        
      </div>
    </footer>
  );
}