"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheck, FiAlertCircle } from 'react-icons/fi';

const countryCodes = [
  { code: '+1', name: 'United States', flag: '🇺🇸' },
  { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '+91', name: 'India', flag: '🇮🇳' },
  { code: '+61', name: 'Australia', flag: '🇦🇺' },
  { code: '+86', name: 'China', flag: '🇨🇳' },
  { code: '+49', name: 'Germany', flag: '🇩🇪' },
  { code: '+33', name: 'France', flag: '🇫🇷' },
  { code: '+81', name: 'Japan', flag: '🇯🇵' },
  { code: '+65', name: 'Singapore', flag: '🇸🇬' },
  { code: '+971', name: 'UAE', flag: '🇦🇪' },
  { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+973', name: 'Bahrain', flag: '🇧🇭' },
  { code: '+974', name: 'Qatar', flag: '🇶🇦' },
  { code: '+968', name: 'Oman', flag: '🇴🇲' },
  { code: '+965', name: 'Kuwait', flag: '🇰🇼' },
  { code: '+20', name: 'Egypt', flag: '🇪🇬' },
  { code: '+27', name: 'South Africa', flag: '🇿🇦' },
  { code: '+234', name: 'Nigeria', flag: '🇳🇬' },
  { code: '+254', name: 'Kenya', flag: '🇰🇪' },
  { code: '+880', name: 'Bangladesh', flag: '🇧🇩' },
  { code: '+92', name: 'Pakistan', flag: '🇵🇰' },
  { code: '+94', name: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+977', name: 'Nepal', flag: '🇳🇵' },
  { code: '+95', name: 'Myanmar', flag: '🇲🇲' },
  { code: '+84', name: 'Vietnam', flag: '🇻🇳' },
  { code: '+62', name: 'Indonesia', flag: '🇮🇩' },
  { code: '+60', name: 'Malaysia', flag: '🇲🇾' },
  { code: '+63', name: 'Philippines', flag: '🇵🇭' },
  { code: '+66', name: 'Thailand', flag: '🇹🇭' },
  { code: '+52', name: 'Mexico', flag: '🇲🇽' },
  { code: '+55', name: 'Brazil', flag: '🇧🇷' },
  { code: '+52', name: 'Canada', flag: '🇨🇦' },
  { code: '+39', name: 'Italy', flag: '🇮🇹' },
  { code: '+34', name: 'Spain', flag: '🇪🇸' },
  { code: '+31', name: 'Netherlands', flag: '🇳🇱' },
  { code: '+32', name: 'Belgium', flag: '🇧🇪' },
  { code: '+46', name: 'Sweden', flag: '🇸🇪' },
  { code: '+47', name: 'Norway', flag: '🇳🇴' },
  { code: '+45', name: 'Denmark', flag: '🇩🇰' },
  { code: '+358', name: 'Finland', flag: '🇫🇮' },
  { code: '+64', name: 'New Zealand', flag: '🇳🇿' },
  { code: '+82', name: 'South Korea', flag: '🇰🇷' },
  { code: '+7', name: 'Russia', flag: '🇷🇺' },
  { code: '+90', name: 'Turkey', flag: '🇹🇷' },
  { code: '+964', name: 'Iraq', flag: '🇮🇶' },
  { code: '+98', name: 'Iran', flag: '🇮🇷' },
  { code: '+967', name: 'Yemen', flag: '🇾🇪' },
];

const employeeRanges = [
  { value: '1-10', label: '1-10 employees' },
  { value: '11-25', label: '11-25 employees' },
  { value: '26-50', label: '26-50 employees' },
  { value: '51-100', label: '51-100 employees' },
  { value: '101-250', label: '101-250 employees' },
  { value: '251-500', label: '251-500 employees' },
  { value: '501-1000', label: '501-1000 employees' },
  { value: '1000+', label: '1000+ employees' },
];

interface FormData {
  companyName: string;
  firstName: string;
  lastName: string;
  companyEmail: string;
  countryCode: string;
  mobileNumber: string;
  employeeCount: string;
  website: string;
}

interface FormErrors {
  companyName?: string;
  firstName?: string;
  lastName?: string;
  companyEmail?: string;
  mobileNumber?: string;
  employeeCount?: string;
  website?: string;
  submit?: string;
}

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoRequestModal({ isOpen, onClose }: DemoRequestModalProps) {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    firstName: '',
    lastName: '',
    companyEmail: '',
    countryCode: '+91',
    mobileNumber: '',
    employeeCount: '',
    website: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showEmployeeDropdown, setShowEmployeeDropdown] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.companyEmail.trim()) {
      newErrors.companyEmail = 'Company email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.companyEmail)) {
        newErrors.companyEmail = 'Please enter a valid email address';
      }
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else {
      const phoneRegex = /^[0-9]{7,15}$/;
      if (!phoneRegex.test(formData.mobileNumber.replace(/\s/g, ''))) {
        newErrors.mobileNumber = 'Please enter a valid mobile number';
      }
    }

    if (!formData.employeeCount) {
      newErrors.employeeCount = 'Please select number of employees';
    }

    if (!formData.website.trim()) {
      newErrors.website = 'Company website is required';
    } else {
      let url = formData.website;
      if (!/^https?:\/\//i.test(url)) {
        url = 'https://' + url;
      }
      try {
        new URL(url);
      } catch {
        newErrors.website = 'Please enter a valid website URL';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit');
      }

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
        setFormData({
          companyName: '',
          firstName: '',
          lastName: '',
          companyEmail: '',
          countryCode: '+91',
          mobileNumber: '',
          employeeCount: '',
          website: '',
        });
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      setErrors(prev => ({ 
        ...prev, 
        submit: error instanceof Error ? error.message : 'Failed to submit. Please try again.' 
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field in errors) {
      setErrors(prev => ({ ...prev, [field]: undefined as any }));
    }
  };

  const selectedCountry = countryCodes.find(c => c.code === formData.countryCode) || countryCodes[1];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/20"
          >
            <div className="sticky top-0 z-10 bg-surface-container-lowest px-6 pt-6 pb-4 border-b border-outline-variant/10 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-headline font-bold text-on-secondary-fixed">Request a Demo</h2>
                <p className="text-sm text-on-secondary-container mt-1">Fill in your details and we will get back to you</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-surface-container-high hover:bg-surface-container-highest flex items-center justify-center text-on-secondary-container hover:text-on-secondary-fixed transition-colors"
              >
                <FiX size={20} />
              </button>
            </div>

            {errors.submit && (
              <div className="mx-6 mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
                <FiAlertCircle className="text-red-500 shrink-0" />
                <span className="text-red-600 text-sm font-inter">{errors.submit}</span>
              </div>
            )}

            {showSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 px-6"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <FiCheck className="text-green-600 text-3xl" />
                </div>
                <h3 className="text-lg font-headline font-bold text-on-secondary-fixed mb-2">Request Submitted!</h3>
                <p className="text-sm text-on-secondary-container text-center">Our team will contact you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 pt-4 flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-inter text-sm font-medium text-on-secondary-fixed">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    placeholder="Enter your company name"
                    className={`bg-surface-container-low rounded-lg px-4 py-3 font-inter text-on-secondary-fixed placeholder:text-on-secondary-container/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all border ${errors.companyName ? 'border-red-500' : 'border-transparent focus:border-primary/30'}`}
                  />
                  {errors.companyName && (
                    <span className="text-red-500 text-xs flex items-center gap-1"><FiAlertCircle size={12} />{errors.companyName}</span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-inter text-sm font-medium text-on-secondary-fixed">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="John"
                      className={`bg-surface-container-low rounded-lg px-4 py-3 font-inter text-on-secondary-fixed placeholder:text-on-secondary-container/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all border ${errors.firstName ? 'border-red-500' : 'border-transparent focus:border-primary/30'}`}
                    />
                    {errors.firstName && (
                      <span className="text-red-500 text-xs flex items-center gap-1"><FiAlertCircle size={12} />{errors.firstName}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-inter text-sm font-medium text-on-secondary-fixed">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Doe"
                      className={`bg-surface-container-low rounded-lg px-4 py-3 font-inter text-on-secondary-fixed placeholder:text-on-secondary-container/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all border ${errors.lastName ? 'border-red-500' : 'border-transparent focus:border-primary/30'}`}
                    />
                    {errors.lastName && (
                      <span className="text-red-500 text-xs flex items-center gap-1"><FiAlertCircle size={12} />{errors.lastName}</span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-inter text-sm font-medium text-on-secondary-fixed">
                    Company Mail ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.companyEmail}
                    onChange={(e) => handleInputChange('companyEmail', e.target.value)}
                    placeholder="john@company.com"
                    className={`bg-surface-container-low rounded-lg px-4 py-3 font-inter text-on-secondary-fixed placeholder:text-on-secondary-container/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all border ${errors.companyEmail ? 'border-red-500' : 'border-transparent focus:border-primary/30'}`}
                  />
                  {errors.companyEmail && (
                    <span className="text-red-500 text-xs flex items-center gap-1"><FiAlertCircle size={12} />{errors.companyEmail}</span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-inter text-sm font-medium text-on-secondary-fixed">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-3">
                    <div className="relative w-32 shrink-0">
                      <button
                        type="button"
                        onClick={() => {
                          setShowCountryDropdown(!showCountryDropdown);
                          setShowEmployeeDropdown(false);
                        }}
                        className="w-full bg-surface-container-low rounded-lg px-4 py-3 font-inter text-on-secondary-fixed flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all border border-transparent focus:border-primary/30"
                      >
                        <span>{selectedCountry.flag}</span>
                        <span className="text-sm">{formData.countryCode}</span>
                        <span className="ml-auto text-on-secondary-container">▼</span>
                      </button>
                      {showCountryDropdown && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-surface-container-lowest rounded-lg shadow-xl border border-outline-variant/20 z-20 max-h-48 overflow-y-auto">
                          {countryCodes.map((country) => (
                            <button
                              key={country.code}
                              type="button"
                              onClick={() => {
                                handleInputChange('countryCode', country.code);
                                setShowCountryDropdown(false);
                              }}
                              className={`w-full px-3 py-2 text-left font-inter text-sm text-on-secondary-fixed hover:bg-surface-container-high transition-colors flex items-center gap-2 ${formData.countryCode === country.code ? 'bg-primary/10 text-primary' : ''}`}
                            >
                              <span>{country.flag}</span>
                              <span className="text-xs text-on-secondary-container">{country.code}</span>
                              <span className="truncate text-xs">{country.name}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <input
                      type="tel"
                      value={formData.mobileNumber}
                      onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                      placeholder="9876543210"
                      className={`flex-1 bg-surface-container-low rounded-lg px-4 py-3 font-inter text-on-secondary-fixed placeholder:text-on-secondary-container/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all border ${errors.mobileNumber ? 'border-red-500' : 'border-transparent focus:border-primary/30'}`}
                    />
                  </div>
                  {errors.mobileNumber && (
                    <span className="text-red-500 text-xs flex items-center gap-1"><FiAlertCircle size={12} />{errors.mobileNumber}</span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-inter text-sm font-medium text-on-secondary-fixed">
                    ACE Group (Number of Employees) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setShowEmployeeDropdown(!showEmployeeDropdown);
                        setShowCountryDropdown(false);
                      }}
                      className={`w-full bg-surface-container-low rounded-lg px-4 py-3 font-inter text-left text-on-secondary-fixed flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all border ${errors.employeeCount ? 'border-red-500' : 'border-transparent focus:border-primary/30'}`}
                    >
                      <span className={formData.employeeCount ? '' : 'text-on-secondary-container/50'}>
                        {formData.employeeCount ? employeeRanges.find(e => e.value === formData.employeeCount)?.label : 'Select employee count'}
                      </span>
                      <span className="text-on-secondary-container">▼</span>
                    </button>
                    {showEmployeeDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-surface-container-lowest rounded-lg shadow-xl border border-outline-variant/20 z-20 max-h-48 overflow-y-auto">
                        {employeeRanges.map((range) => (
                          <button
                            key={range.value}
                            type="button"
                            onClick={() => {
                              handleInputChange('employeeCount', range.value);
                              setShowEmployeeDropdown(false);
                            }}
                            className={`w-full px-4 py-2.5 text-left font-inter text-sm text-on-secondary-fixed hover:bg-surface-container-high transition-colors ${formData.employeeCount === range.value ? 'bg-primary/10 text-primary' : ''}`}
                          >
                            {range.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {errors.employeeCount && (
                    <span className="text-red-500 text-xs flex items-center gap-1"><FiAlertCircle size={12} />{errors.employeeCount}</span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-inter text-sm font-medium text-on-secondary-fixed">
                    Company Website <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    placeholder="https://www.company.com"
                    className={`bg-surface-container-low rounded-lg px-4 py-3 font-inter text-on-secondary-fixed placeholder:text-on-secondary-container/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all border ${errors.website ? 'border-red-500' : 'border-transparent focus:border-primary/30'}`}
                  />
                  {errors.website && (
                    <span className="text-red-500 text-xs flex items-center gap-1"><FiAlertCircle size={12} />{errors.website}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 mt-2 rounded-lg bg-primary text-white font-inter font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Request'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
