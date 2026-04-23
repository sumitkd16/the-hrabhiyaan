"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { DemoRequestModal } from '../components/DemoRequestModal';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';

export default function Contact() {
  const [showDemoModal, setShowDemoModal] = useState(false);

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
            Whether you have a question about HRabhiyaan features, enterprise pricing, or want to explore digital solutions directly with our parent company, <strong className="text-foreground">Alsol Technology Solution</strong>, our team is ready to answer all your questions.
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
                <a href="tel:+919477495264" className="font-inter text-primary font-medium mt-2 block hover:underline">+91 9477495264</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-600/10 rounded-xl flex items-center justify-center text-green-600 shrink-0">
                <FaWhatsapp size={24} />
              </div>
              <div>
                <h4 className="font-manrope font-bold text-foreground">WhatsApp us</h4>
                <p className="font-inter text-muted text-sm mt-1">Chat with our team anytime.</p>
                <a href="https://wa.me/919477495264" target="_blank" rel="noopener noreferrer" className="font-inter text-primary font-medium mt-2 block hover:underline">+91 9477495264</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <a href="https://maps.app.goo.gl/f8btFWPi8drC9h6A8" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center shrink-0 hover:scale-110 transition-transform cursor-pointer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg" alt="Google Maps" className="w-8 h-8 object-contain drop-shadow-sm" />
              </a>
              <div>
                <h4 className="font-manrope font-bold text-foreground">Office</h4>
                <p className="font-inter text-muted text-sm mt-1">Come say hello at our HQ.</p>
                <a href="https://maps.app.goo.gl/f8btFWPi8drC9h6A8" target="_blank" rel="noopener noreferrer" className="font-inter text-foreground font-medium mt-2 block hover:text-blue-600 transition-colors cursor-pointer">
                  Alsol Technology Solution Pvt. Ltd.<br/>DN 24, Office no. 101, Matrix Tower, Sector V, Salt Lake, Kolkata, West Bengal-700091
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.2 }}
           className="bg-primary text-white rounded-[3rem] p-10 md:p-12 relative overflow-hidden shadow-2xl flex flex-col justify-center min-h-[500px]"
        >

          <div className="relative z-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8 max-w-[400px] mx-auto"
            >
              <img 
                src="https://res.cloudinary.com/da00qz5zp/image/upload/v1776864567/Contact_page_vector_zb5amf.png" 
                alt="Experience HRabhiyaan" 
                className="w-full h-auto drop-shadow-2xl brightness-110 scale-105 md:scale-115 origin-bottom"
              />
            </motion.div>

            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-headline font-bold mb-6 leading-tight">
                Ready to transform your workforce?
              </h3>
              <p className="font-inter text-white/80 mb-10 leading-relaxed text-lg max-w-md mx-auto">
                Join the HR revolution. Fill in your details and our team will get back to you within 24 hours to schedule your personalized walkthrough.
              </p>
              
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Button 
                  variant="secondary" 
                  onClick={() => setShowDemoModal(true)} 
                  className="px-10 py-5 text-lg rounded-2xl bg-white text-primary font-bold shadow-xl hover:bg-white/90 hover:scale-105 transition-all w-full md:w-auto shrink-0"
                >
                  Request Your Demo
                </Button>
                
                <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <img 
                        key={i} 
                        src={`https://i.pravatar.cc/100?u=hr${i}`} 
                        className="w-8 h-8 rounded-full border-2 border-primary bg-white/10" 
                        alt="User" 
                      />
                    ))}
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold text-xs leading-none">100+ Companies</p>
                    <p className="text-white/60 text-[10px] uppercase tracking-wider">Trust HRabhiyaan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <DemoRequestModal isOpen={showDemoModal} onClose={() => setShowDemoModal(false)} />
    </div>
  );
}
