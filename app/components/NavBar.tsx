"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
  className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-surface/95 backdrop-blur-xl shadow-sm border-b border-outline-variant/20 py-3`}
>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between transition-all duration-300">
          <Link href="/" className="flex items-center">
            <img
              src="/hrms-final-logo.png"
              alt="HRabhiyaan Full Logo"
              className="h-10 md:h-12 w-auto object-contain transform scale-275 origin-left"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.name} href={link.href} className="relative px-4 py-2">
                  <span className={`relative z-10 font-inter text-sm font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-foreground hover:text-blue-600'}`}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-blue-600/10 rounded-full z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <Button variant="tertiary">Log In</Button>
            </Link>
            <Link href="/demo">
              <Button variant="primary">Get a Demo</Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-6 right-6 mt-2 p-6 bg-surface-container-lowest rounded-2xl shadow-ambient flex flex-col gap-4 border border-outline-variant/20"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-inter font-medium text-lg ${pathname === link.href ? 'text-primary' : 'text-foreground'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-outline-variant/20 my-2" />
            <Link href="/login" className="font-inter font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>Log In</Link>
            <Link href="/demo" className="font-inter font-medium text-lg text-primary" onClick={() => setMobileMenuOpen(false)}>Get a Demo</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
