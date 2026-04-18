"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { BentoCard } from '../components/BentoCard';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground mb-6 tracking-tight">
            Let's start the conversation.
          </h1>
          <p className="font-inter text-lg text-muted mb-8 leading-relaxed">
            Whether you have a question about HRabhiyaan features, enterprise pricing, or want to explore digital solutions directly with our parent company, <strong className="text-foreground">Alsol Technology Solutions</strong>, our team is ready to answer all your questions.
          </p>
          <div className="inline-flex items-center gap-3 bg-blue-600/10 text-blue-600 px-4 py-2 rounded-full font-bold text-sm mb-12">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
            </span>
            Available for new enterprise partnerships
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                <FiMail size={24} />
              </div>
              <div>
                <h4 className="font-manrope font-bold text-foreground">Email us</h4>
                <p className="font-inter text-muted text-sm mt-1">Reach out to our global team.</p>
                <a href="mailto:info@alsoltech.com" className="font-inter text-primary font-medium mt-2 block hover:underline">info@alsoltech.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                <FiPhone size={24} />
              </div>
              <div>
                <h4 className="font-manrope font-bold text-foreground">Call us</h4>
                <p className="font-inter text-muted text-sm mt-1">Mon-Fri (IST Business Hours).</p>
                <a href="tel:+919876543210" className="font-inter text-primary font-medium mt-2 block hover:underline">+91 98765 43210</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                <FiMapPin size={24} />
              </div>
              <div>
                <h4 className="font-manrope font-bold text-foreground">Office</h4>
                <p className="font-inter text-muted text-sm mt-1">Come say hello at our HQ.</p>
                <p className="font-inter text-foreground font-medium mt-2">Alsol Technology Solutions Pvt. Ltd.<br/>DN 24, Office no. 101, Matrix Tower, Sector V, Salt Lake, Kolkata, West Bengal-700091</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.2 }}
        >
           <BentoCard noHover={true}>
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                       <label className="font-inter text-sm font-medium text-foreground">First name</label>
                       <input type="text" className="bg-surface-container-low rounded-md px-4 py-3 font-inter text-foreground focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all border border-transparent focus:border-primary/20" placeholder="First name" />
                    </div>
                    <div className="flex flex-col gap-2">
                       <label className="font-inter text-sm font-medium text-foreground">Last name</label>
                       <input type="text" className="bg-surface-container-low rounded-md px-4 py-3 font-inter text-foreground focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all border border-transparent focus:border-primary/20" placeholder="Last name" />
                    </div>
                 </div>

                 <div className="flex flex-col gap-2">
                    <label className="font-inter text-sm font-medium text-foreground">Email</label>
                    <input type="email" className="bg-surface-container-low rounded-md px-4 py-3 font-inter text-foreground focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all border border-transparent focus:border-primary/20" placeholder="you@company.com" />
                 </div>

                 <div className="flex flex-col gap-2">
                    <label className="font-inter text-sm font-medium text-foreground">How can we help?</label>
                    <textarea rows={4} className="bg-surface-container-low rounded-md px-4 py-3 font-inter text-foreground focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all resize-none border border-transparent focus:border-primary/20" placeholder="Tell us a little about your project..."></textarea>
                 </div>

                 <Button variant="primary" className="mt-4">Send Message</Button>
              </form>
           </BentoCard>
        </motion.div>
      </div>
    </div>
  );
}
