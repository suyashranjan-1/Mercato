'use client'

import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  Zap,
  CheckCircle,
  Phone,
} from 'lucide-react';

const MercatoAuthPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [currentView, setCurrentView] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    setIsVisible(true);

    // Parallax scroll effect
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const validateForm = () => {
    let errors: { [key: string]: string } = {};

    if (currentView === 'signup') {
      if (!formData.name.trim()) errors.name = "Name is required";
    }
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";

    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) errors.phone = "Phone number is invalid";

    if (!formData.password) errors.password = "Password is required";
    else if (formData.password.length < 6) errors.password = "Password must be at least 6 characters";

    if (currentView === 'signup') {
      if (!formData.confirmPassword) errors.confirmPassword = "Confirm password is required";
      else if (formData.password !== formData.confirmPassword) errors.confirmPassword = "Passwords do not match";
      if (!agreeTerms) errors.agreeTerms = "You must agree to Terms of Service and Privacy Policy";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: '' });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreeTerms(e.target.checked);
    setFormErrors({ ...formErrors, agreeTerms: '' });
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    // Here you would handle login/signup logic and redirect as needed
  };

  const toggleView = () => {
    setCurrentView(currentView === 'login' ? 'signup' : 'login');
    setFormData({ name: '', email: '', phone: '', password: '', confirmPassword: '' });
    setFormErrors({});
    setAgreeTerms(false);
  };

  const LoadingSpinner = () => (
    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
  );

  const features = [
    { icon: '🤖', label: 'AI-Powered Automation', desc: '100+ AI Models Deployed' },
    { icon: '🛡️', label: 'Enterprise Security', desc: 'Bank-level Encryption' },
    { icon: '⚡', label: 'Lightning Fast', desc: '99.9% Uptime Guarantee' },
    { icon: '🌍', label: 'Global Reach', desc: 'Serving 17+ Countries' }
  ];

  // Generate floating particles only on the client, not during SSR
  const [particles, setParticles] = useState<
    { left: number; top: number; animationDelay: number; animationDuration: number }[]
  >([]);

  useEffect(() => {
    // Only run on client
    const arr = Array.from({ length: 15 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 5,
      animationDuration: 3 + Math.random() * 4,
    }));
    setParticles(arr);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
      <div
        className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ transform: `translateY(${scrollY * -0.1}px)`, animationDelay: '1000ms' }}
      ></div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`
            }}
          ></div>
        ))}
      </div>

      {/* ----- FIXED: LOGO LIKE NAVBAR ----- */}
      <nav className="fixed z-30 top-0 left-0 w-full flex items-center bg-black/30 backdrop-blur border-b border-white/10 px-4 py-2">
        <Link href="/" passHref>
          <motion.div
            className="flex items-center flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/logo/logo.png"
              alt="Logo"
              width={isMobile ? 80 : 100}
              height={isMobile ? 80 : 100}
              className="w-auto h-8 sm:h-10 lg:h-12"
              priority
            />
          </motion.div>
        </Link>
      </nav>
      <div className="pt-20" /> {/* Padding for fixed navbar */}
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-100px)] px-4 py-8">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Side - Marketing Content */}
          <div className={`space-y-6 sm:space-y-8 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-4 sm:mb-6 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300 hover:border-slate-600/50 transition-all duration-300 animate-slideDown">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
              {currentView === 'login' ? 'Welcome Back to the Future' : 'Join the AI Revolution'}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {currentView === 'login' ? (
                <>
                  Transform Your Business with
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent animate-glow">
                    AI Automation
                  </span>
                </>
              ) : (
                <>
                  Build the Future with
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent animate-glow">
                    Smart Solutions
                  </span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {currentView === 'login' 
                ? 'Welcome back to Mercato Agency. Continue your journey in revolutionizing business processes with cutting-edge AI technology.'
                : 'Join thousands of forward-thinking businesses using Mercato Agency to automate workflows, boost productivity, and drive unprecedented growth.'
              }
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-300 group hover:scale-105 animate-slideUp`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-1 sm:mb-2 text-white text-sm sm:text-base">{feature.label}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8 mt-8 sm:mt-12">
              {[
                { label: 'Companies Served', value: '50+' },
                { label: 'Success Rate', value: '98%' },
                { label: 'Global Presence', value: '10+' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-xs sm:text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Auth Form */}
          <div className={`w-full max-w-md mx-auto lg:mx-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 via-purple-600/20 to-blue-900/20 blur-xl"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 p-6 sm:p-8 shadow-2xl">

                {/* Form Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm mb-4 sm:mb-6 backdrop-blur-sm">
                    <Zap className="w-4 h-4 mr-2" />
                    AI-Powered Business Solutions
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                    {currentView === 'login' ? 'Welcome Back' : 'Get Started Today'}
                  </h2>

                  <p className="text-slate-400 text-sm sm:text-base">
                    {currentView === 'login' 
                      ? 'Sign in to access your AI automation dashboard' 
                      : 'Create your account and start transforming your business'
                    }
                  </p>
                </div>

                {/* Form */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Name Field (Signup only) */}
                  {currentView === 'signup' && (
                    <div className="relative group">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-400 transition-colors duration-300" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full pl-11 pr-4 py-3 sm:py-4 bg-slate-800/50 border ${formErrors.name ? 'border-red-500' : 'border-slate-700/50'} rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/70 focus:scale-[1.02] transition-all duration-300`}
                        required
                        autoComplete="name"
                      />
                      {formErrors.name && <div className="text-xs text-red-400 mt-1">{formErrors.name}</div>}
                    </div>
                  )}

                  {/* Email Field */}
                  <div className="relative group">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-400 transition-colors duration-300" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-11 pr-4 py-3 sm:py-4 bg-slate-800/50 border ${formErrors.email ? 'border-red-500' : 'border-slate-700/50'} rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/70 focus:scale-[1.02] transition-all duration-300`}
                      required
                      autoComplete="email"
                    />
                    {formErrors.email && <div className="text-xs text-red-400 mt-1">{formErrors.email}</div>}
                  </div>

                  {/* Phone Field */}
                  <div className="relative group">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-400 transition-colors duration-300" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full pl-11 pr-4 py-3 sm:py-4 bg-slate-800/50 border ${formErrors.phone ? 'border-red-500' : 'border-slate-700/50'} rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/70 focus:scale-[1.02] transition-all duration-300`}
                      required
                      autoComplete="tel"
                    />
                    {formErrors.phone && <div className="text-xs text-red-400 mt-1">{formErrors.phone}</div>}
                  </div>

                  {/* Password Field */}
                  <div className="relative group">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-400 transition-colors duration-300" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full pl-11 pr-11 py-3 sm:py-4 bg-slate-800/50 border ${formErrors.password ? 'border-red-500' : 'border-slate-700/50'} rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/70 focus:scale-[1.02] transition-all duration-300`}
                      required
                      autoComplete={currentView === 'login' ? "current-password" : "new-password"}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors duration-200"
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                    {formErrors.password && <div className="text-xs text-red-400 mt-1">{formErrors.password}</div>}
                  </div>

                  {/* Confirm Password Field (Signup only) */}
                  {currentView === 'signup' && (
                    <div className="relative group">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-400 transition-colors duration-300" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={`w-full pl-11 pr-11 py-3 sm:py-4 bg-slate-800/50 border ${formErrors.confirmPassword ? 'border-red-500' : 'border-slate-700/50'} rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/70 focus:scale-[1.02] transition-all duration-300`}
                        required
                        autoComplete="new-password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors duration-200"
                        tabIndex={-1}
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                      {formErrors.confirmPassword && <div className="text-xs text-red-400 mt-1">{formErrors.confirmPassword}</div>}
                    </div>
                  )}

                  {/* Forgot Password (Login only) */}
                  {currentView === 'login' && (
                    <div className="text-right">
                      <button
                        type="button"
                        className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200"
                        tabIndex={0}
                      >
                        Forgot your password?
                      </button>
                    </div>
                  )}

                  {/* Terms Agreement (Signup only) */}
                  {currentView === 'signup' && (
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={agreeTerms}
                        onChange={handleCheckboxChange}
                        className="mt-1 w-4 h-4 text-blue-600 bg-slate-800 border-slate-600 rounded focus:ring-blue-500 focus:ring-2"
                        required
                      />
                      <label htmlFor="terms" className="text-sm text-slate-400 leading-relaxed select-none cursor-pointer">
                        I agree to the{' '}
                        <span className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors duration-200">
                          Terms of Service
                        </span>{' '}
                        and{' '}
                        <span className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors duration-200">
                          Privacy Policy
                        </span>
                      </label>
                      {formErrors.agreeTerms && <div className="text-xs text-red-400 mt-1">{formErrors.agreeTerms}</div>}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 sm:py-4 px-6 rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 disabled:opacity-70 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-[1.02] transform"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isLoading ? (
                        <LoadingSpinner />
                      ) : (
                        <>
                          {currentView === 'login' ? 'Sign In' : 'Sign Up'}
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </span>
                  </button>
                </div>

                {/* Divider */}
                <div className="relative my-6 sm:my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-700/50" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-slate-900/80 text-slate-400">
                      Or
                    </span>
                  </div>
                </div>

                {/* Switch View */}
                <div className="text-center mt-6 sm:mt-8">
                  <p className="text-slate-400 text-sm sm:text-base">
                    {currentView === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
                    <button
                      type="button"
                      onClick={toggleView}
                      className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                    >
                      {currentView === 'login' ? 'Sign up' : 'Sign in'}
                    </button>
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 sm:mt-8 text-center">
              <div className="flex items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Secure & Encrypted</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Free Trial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes glow {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.2);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default MercatoAuthPage;