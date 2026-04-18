"use client";
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface BentoCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  noHover?: boolean;
}

export function BentoCard({ children, className = '', noHover = false, ...props }: BentoCardProps) {
  return (
    <motion.div
      className={`bg-surface-container-lowest rounded-xl p-8 flex flex-col ${noHover ? '' : 'hover:bg-surface-container-high transition-colors duration-200'} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
