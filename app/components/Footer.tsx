import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-surface-container-low pt-24 pb-12 mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="mb-6">
              <img
                src="/hrabhiyaan-logo.png"
                alt="HRabhiyaan Logo"
                className="h-35 w-auto"
              />
            </Link>
            <p className="font-inter text-muted text-sm leading-relaxed max-w-xs">
              The architectural curator for modern human resources. Manage your team with executive-level clarity.
            </p>
          </div>
          
          <div>
            <h4 className="font-manrope font-bold text-foreground mb-6">Platform</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/" className="font-inter text-muted hover:text-primary transition-colors text-sm">Overview</Link></li>
              <li><Link href="/pricing" className="font-inter text-muted hover:text-primary transition-colors text-sm">Pricing</Link></li>
              <li><Link href="#" className="font-inter text-muted hover:text-primary transition-colors text-sm">Integrations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-manrope font-bold text-foreground mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="font-inter text-muted hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="#" className="font-inter text-muted hover:text-primary transition-colors text-sm">Careers</Link></li>
              <li><Link href="/contact" className="font-inter text-muted hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-manrope font-bold text-foreground mb-6">Legal</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="#" className="font-inter text-muted hover:text-primary transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="#" className="font-inter text-muted hover:text-primary transition-colors text-sm">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-muted text-sm">
            © {new Date().getFullYear()} HRabhiyaan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
