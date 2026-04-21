"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiEye, FiEyeOff, FiArrowRight, FiMail, FiLock, FiUser, FiCheck } from 'react-icons/fi';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const passwordRequirements = [
    { label: 'At least 8 characters', met: formData.password.length >= 8 },
    { label: 'One uppercase letter', met: /[A-Z]/.test(formData.password) },
    { label: 'One number', met: /[0-9]/.test(formData.password) },
    { label: 'One special character', met: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password) },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-8">
            <img src="/hrms-final-logo.png" alt="HRabhiyaan" className="h-10 w-auto mx-auto" />
          </Link>
          <h1 className="font-headline text-3xl font-bold text-on-secondary-fixed tight-headline mb-2">
            Create Your Account
          </h1>
          <p className="font-inter text-on-secondary-container">
            Start your 14-day free trial. No credit card required.
          </p>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/20 p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-inter text-sm font-medium text-on-secondary-fixed">First Name</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-on-secondary-container">
                    <FiUser size={18} />
                  </div>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="John"
                    className={`w-full bg-surface-container-low rounded-lg pl-12 pr-4 py-3 font-inter text-on-secondary-fixed placeholder:text-on-secondary-container/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all border ${errors.firstName ? 'border-red-500' : 'border-transparent focus:border-primary/30'}`}
                  />
                </div>
                {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName}</span>}
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-inter text-sm font-medium text-on-secondary-fixed">Last Name</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-on-secondary-container">
                    <FiUser size={18} />
                  </div>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Doe"
                    className={`w-full bg-surface-container-low rounded-lg pl-12 pr-4 py-3 font-inter text-on-secondary-fixed placeholder:text-on-secondary-container/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all border ${errors.lastName ? 'border-red-500' : 'border-transparent focus:border-primary/30'}`}
                  />
                </div>
                {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName}</span>}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-inter text-sm font-medium text-on-secondary-fixed">Work Email</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-on-secondary-container">
                  <FiMail size={18} />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="you@company.com"
                  className={`w-full bg-surface-container-low rounded-lg pl-12 pr-4 py-3 font-inter text-on-secondary-fixed placeholder:text-on-secondary-container/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all border ${errors.email ? 'border-red-500' : 'border-transparent focus:border-primary/30'}`}
                />
              </div>
              {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-inter text-sm font-medium text-on-secondary-fixed">Password</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-on-secondary-container">
                  <FiLock size={18} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder="Create a strong password"
                  className={`w-full bg-surface-container-low rounded-lg pl-12 pr-12 py-3 font-inter text-on-secondary-fixed placeholder:text-on-secondary-container/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all border ${errors.password ? 'border-red-500' : 'border-transparent focus:border-primary/30'}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-on-secondary-container hover:text-on-secondary-fixed transition-colors"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
              {formData.password && (
                <div className="bg-surface-container-low rounded-lg p-3 mt-1">
                  <p className="text-xs text-on-secondary-container mb-2 font-inter">Password strength:</p>
                  <div className="space-y-1.5">
                    {passwordRequirements.map((req, i) => (
                      <div key={i} className={`flex items-center gap-2 text-xs font-inter ${req.met ? 'text-green-600' : 'text-on-secondary-container/50'}`}>
                        <FiCheck size={14} className={req.met ? 'text-green-600' : 'text-slate-300'} />
                        {req.label}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-inter text-sm font-medium text-on-secondary-fixed">Confirm Password</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-on-secondary-container">
                  <FiLock size={18} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  placeholder="Confirm your password"
                  className={`w-full bg-surface-container-low rounded-lg pl-12 pr-12 py-3 font-inter text-on-secondary-fixed placeholder:text-on-secondary-container/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all border ${errors.confirmPassword ? 'border-red-500' : 'border-transparent focus:border-primary/30'}`}
                />
              </div>
              {errors.confirmPassword && <span className="text-red-500 text-xs">{errors.confirmPassword}</span>}
            </div>

            <div className="flex items-start gap-3 mt-2">
              <input type="checkbox" id="terms" className="mt-1 rounded border-outline-variant" required />
              <label htmlFor="terms" className="font-inter text-sm text-on-secondary-container">
                I agree to the{' '}
                <span className="text-primary cursor-pointer hover:underline">Terms of Service</span> and{' '}
                <span className="text-primary cursor-pointer hover:underline">Privacy Policy</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-lg bg-gradient-to-r from-primary to-primary-container text-white font-inter font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Creating account...
                </>
              ) : (
                <>
                  Create Account
                  <FiArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="font-inter text-sm text-on-secondary-container">
              Already have an account?{' '}
              <Link href="/login" className="text-primary font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6 bg-surface-container-low rounded-xl p-4 border border-outline-variant/20 text-center">
          <p className="font-inter text-sm text-on-secondary-container">
            Want to see the platform first?{' '}
            <Link href="/demo" className="text-primary font-semibold hover:underline">
              Book a demo
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}