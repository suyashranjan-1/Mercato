
'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  Zap,
  CheckCircle,
  X,
  Chrome,
  Phone
} from 'lucide-react';

// Google Gemini Effect Component (simplified for auth page)
const GoogleGeminiEffect = () => {
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          width="1440"
          height="890"
          viewBox="0 0 1440 890"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-full opacity-30"
        >
          <motion.path
            d="M0 663C145.5 663 191 666.265 269 647C326.5 630 339.5 621 397.5 566C439 531.5 455 529.5 490 523C509.664 519.348 521 503.736 538 504.236C553.591 504.236 562.429 514.739 584.66 522.749C592.042 525.408 600.2 526.237 607.356 523.019C624.755 515.195 641.446 496.324 657 496.735C673.408 496.735 693.545 519.572 712.903 526.769C718.727 528.934 725.184 528.395 730.902 525.965C751.726 517.115 764.085 497.106 782 496.735C794.831 496.47 804.103 508.859 822.469 518.515C835.13 525.171 850.214 526.815 862.827 520.069C875.952 513.049 889.748 502.706 903.5 503.736C922.677 505.171 935.293 510.562 945.817 515.673C954.234 519.76 963.095 522.792 972.199 524.954C996.012 530.611 1007.42 534.118 1034 549C1077.5 573.359 1082.5 594.5 1140 629C1206 670 1328.5 662.5 1440 662.5"
            stroke="#3B82F6"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      </div>
    </div>
  );
};

const MercatoAuthPage = () => {
  const [currentView, setCurrentView] = useState<'login' | 'signup'>('login'); // 'login' or 'signup'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const toggleView = () => {
    setCurrentView(currentView === 'login' ? 'signup' : 'login');
    setFormData({ name: '', email: '', phone: '', password: '', confirmPassword: '' });
  };

  const LoadingSpinner = () => (
    <motion.div
      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  );

  const inputVariants = {
    focused: {
      scale: 1.01,
      transition: { duration: 0.2 }
    },
    unfocused: {
      scale: 1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
      {/* Google Gemini Background Effect */}
      <GoogleGeminiEffect />

      {/* Header with Logo */}
      <motion.header 
        className="relative z-20 p-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image 
              src="/logo.png"
              alt="Mercato Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
          </motion.div>
          <motion.div 
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Mercato
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-100px)] px-4">
        <div className="w-full max-w-md">
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm mb-6 backdrop-blur-sm">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Business Automation
              </div>

              <motion.h1
                className="text-3xl font-bold mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {currentView === 'login' ? 'Welcome Back' : 'Get Started'}
              </motion.h1>

              <motion.p
                className="text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {currentView === 'login' 
                  ? 'Sign in to your Mercato account' 
                  : 'Create your account and start automating'
                }
              </motion.p>
            </div>

            {/* Form Container */}
            <AnimatePresence mode="wait">
              <motion.form
                key={currentView}
                initial={{ opacity: 0, x: currentView === 'login' ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: currentView === 'login' ? 20 : -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Name Field (Signup only) */}
                {currentView === 'signup' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <motion.input
                        variants={inputVariants}
                        whileFocus="focused"
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-gray-800/70 transition-all duration-300"
                        required
                      />
                    </div>
                  </motion.div>
                )}

                {/* Phone Field (Signup only) */}
                {currentView === 'signup' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <motion.input
                        variants={inputVariants}
                        whileFocus="focused"
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-gray-800/70 transition-all duration-300"
                        required
                      />
                    </div>
                  </motion.div>
                )}

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: currentView === 'signup' ? 0.2 : 0.1 }}
                >
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <motion.input
                      variants={inputVariants}
                      whileFocus="focused"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-gray-800/70 transition-all duration-300"
                      required
                    />
                  </div>
                </motion.div>

                {/* Phone Field (Login only) */}
                {currentView === 'login' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: currentView === 'login' ? 0.3 : 0.2 }}
                  >
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <motion.input
                        variants={inputVariants}
                        whileFocus="focused"
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-gray-800/70 transition-all duration-300"
                        required
                      />
                    </div>
                  </motion.div>
                )}

                {/* Password Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: currentView === 'login' ? 0.3 : 0.2 }}
                >
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <motion.input
                      variants={inputVariants}
                      whileFocus="focused"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-11 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-gray-800/70 transition-all duration-300"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors duration-200"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </motion.div>

                {/* Confirm Password Field (Signup only) */}
                {currentView === 'signup' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <motion.input
                        variants={inputVariants}
                        whileFocus="focused"
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-11 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-gray-800/70 transition-all duration-300"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors duration-200"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Forgot Password (Login only) */}
                {currentView === 'login' && (
                  <motion.div
                    className="text-right"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <button
                      type="button"
                      className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      Forgot your password?
                    </button>
                  </motion.div>
                )}

                {/* Terms Agreement (Signup only) */}
                {currentView === 'signup' && (
                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                      required
                    />
                    <label htmlFor="terms" className="text-sm text-gray-400 leading-relaxed">
                      I agree to the{' '}
                      <span className="text-blue-400 hover:text-blue-300 cursor-pointer">
                        Terms of Service
                      </span>{' '}
                      and{' '}
                      <span className="text-blue-400 hover:text-blue-300 cursor-pointer">
                        Privacy Policy
                      </span>
                    </label>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 disabled:opacity-70 hover:shadow-xl hover:shadow-blue-500/25"
                  whileHover={{ scale: isLoading ? 1 : 1.02, y: isLoading ? 0 : -1 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: currentView === 'signup' ? 0.6 : 0.4 }}
                >
                  <span className="relative flex items-center justify-center gap-2">
                    {isLoading ? (
                      <LoadingSpinner />
                    ) : (
                      <>
                        {currentView === 'login' ? 'Sign In' : 'Create Account'}
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </span>
                </motion.button>
              </motion.form>
            </AnimatePresence>

            {/* Divider */}
            <motion.div
              className="relative my-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700/50" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-gray-400">
                  Or continue with
                </span>
              </div>
            </motion.div>

            {/* Social Login */}
            <AnimatePresence mode="wait">
              <motion.div
                key="social-login"
                className="grid grid-cols-1 gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-700/50 rounded-xl bg-gray-800/30 text-white hover:bg-gray-800/50 hover:border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Chrome className="w-5 h-5" />
                  <span className="font-medium">Continue with Google</span>
                </motion.button>
              </motion.div>
            </AnimatePresence>

            {/* Switch View */}

            {/* Switch View */}
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <p className="text-gray-400">
                {currentView === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
                <button
                  type="button"
                  onClick={toggleView}
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                >
                  {currentView === 'login' ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </motion.div>
          </motion.div>

          {/* Additional Features */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Secure & Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MercatoAuthPage;