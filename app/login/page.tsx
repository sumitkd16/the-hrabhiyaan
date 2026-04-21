"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiEye, FiEyeOff, FiArrowRight, FiMail, FiLock } from 'react-icons/fi';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-8">
            <img src="/hrms-final-logo.png" alt="HRabhiyaan" className="h-10 w-auto mx-auto" />
          </Link>
          <h1 className="font-headline text-3xl font-bold text-on-secondary-fixed tight-headline mb-2">
            Welcome Back
          </h1>
          <p className="font-inter text-on-secondary-container">
            Sign in to continue to your HRabhiyaan dashboard
          </p>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/20 p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-inter text-sm font-medium text-on-secondary-fixed">Email</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-on-secondary-container">
                  <FiMail size={18} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                  placeholder="you@company.com"
                  className="w-full bg-surface-container-low rounded-lg pl-12 pr-4 py-3 font-inter text-on-secondary-fixed placeholder:text-on-secondary-container/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all border border-transparent focus:border-primary/30"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="font-inter text-sm font-medium text-on-secondary-fixed">Password</label>
                <button type="button" className="text-xs text-primary hover:underline font-inter">
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-on-secondary-container">
                  <FiLock size={18} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  placeholder="Enter your password"
                  className="w-full bg-surface-container-low rounded-lg pl-12 pr-12 py-3 font-inter text-on-secondary-fixed placeholder:text-on-secondary-container/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all border border-transparent focus:border-primary/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-on-secondary-container hover:text-on-secondary-fixed transition-colors"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-600 text-sm font-inter">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-lg bg-gradient-to-r from-primary to-primary-container text-white font-inter font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 mt-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <FiArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="font-inter text-sm text-on-secondary-container">
              Don't have an account?{' '}
              <Link href="/signup" className="text-primary font-semibold hover:underline">
                Create one
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6 bg-surface-container-low rounded-xl p-4 border border-outline-variant/20">
          <p className="font-inter text-xs text-on-secondary-container text-center mb-3">Quick demo access</p>
          <div className="grid grid-cols-2 gap-2">
            <Link href="/demo" className="text-center py-2 px-3 rounded-lg bg-surface-container-lowest border border-outline-variant/20 font-inter text-xs text-on-secondary-fixed hover:bg-surface-container-high transition-colors">
              Try free demo →
            </Link>
            <Link href="/signup" className="text-center py-2 px-3 rounded-lg bg-surface-container-lowest border border-outline-variant/20 font-inter text-xs text-on-secondary-fixed hover:bg-surface-container-high transition-colors">
              Create account →
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}