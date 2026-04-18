"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HeroVideo() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoadedData = () => {
    setIsLoaded(true);
    videoRef.current?.play().catch(() => {
    });
  };

  const videoUrl = "https://res.cloudinary.com/da00qz5zp/video/upload/v1776507394/HRMS_WEBSITE_PROMO_VIDEO_17_04_2026_0.2_slanse.mp4";
  const posterUrl = "https://res.cloudinary.com/da00qz5zp/video/upload/v1776507394,HRMS_WEBSITE_PROMO_VIDEO_17_04_2026_0.2_slanse.jpg";

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[400px] md:h-[500px] lg:h-[620px] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-[#0a0a0a]"
    >
      {!isLoaded && (
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      )}

      {shouldLoad && (
        <motion.video
          ref={videoRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          disablePictureInPicture
          onLoadedData={handleLoadedData}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      )}
    </div>
  );
}