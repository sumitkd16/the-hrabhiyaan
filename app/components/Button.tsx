"use client";
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseClass = "inline-flex items-center justify-center font-inter font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary";
  
  let variantClass = "";
  if (variant === 'primary') {
    variantClass = "bg-gradient-to-br from-primary to-primary-container text-white rounded-full px-6 py-3 shadow-[0px_4px_14px_rgba(16,185,129,0.3)] hover:shadow-[0px_6px_20px_rgba(16,185,129,0.4)] hover:-translate-y-0.5 border-none";
  } else if (variant === 'secondary') {
    variantClass = "bg-surface-container-highest text-foreground rounded-full px-6 py-3 hover:bg-[#d8dadc] hover:-translate-y-0.5";
  } else if (variant === 'tertiary') {
    variantClass = "bg-transparent text-primary px-3 py-2 hover:bg-primary/5 rounded-md"; // as per no box, 12px horizontal padding
  }

  return (
    <motion.button 
      whileTap={{ scale: 0.98 }}
      className={`${baseClass} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
