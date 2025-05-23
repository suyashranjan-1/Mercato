"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight, Calendar, Clock, CheckCircle, Mail, User, Building, MessageSquare, Sparkles } from "lucide-react";
import { NavbarDemo } from "@/components/navbar";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeField, setActiveField] = useState('');
  const form = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 2000);
  };

  const services = [
    { value: "SEO", label: "Search Engine Optimization" },
    { value: "Ads", label: "Digital Advertising" },
    { value: "Thumbnail Creation", label: "Thumbnail Design" },
    { value: "Graphic Design", label: "Graphic Design" },
    { value: "Video Editing", label: "Video Production & Editing" }
  ];

  const helpOptions = [
    { value: "Evaluate Mercato Agency for my company", label: "Evaluate Mercato Agency for my company" },
    { value: "Learn More", label: "Learn more about services" },
    { value: "Get a Quote", label: "Get a personalized quote" },
    { value: "Other", label: "Something else" }
  ];

  const timeSlots = [
    { value: "9:00 AM - 11:00 AM", label: "9:00 AM - 11:00 AM (UTC-5:00)" },
    { value: "11:00 AM - 1:00 PM", label: "11:00 AM - 1:00 PM (UTC-5:00)" },
    { value: "2:00 PM - 4:00 PM", label: "2:00 PM - 4:00 PM (UTC-5:00)" },
    { value: "4:00 PM - 6:00 PM", label: "4:00 PM - 6:00 PM (UTC-5:00)" },
    { value: "6:00 PM - 8:00 PM", label: "6:00 PM - 8:00 PM (UTC-5:00)" }
  ];

  const benefits = [
    {
      title: "One Flexible Agency",
      description: "Optimize SEO, create stunning videos, run high-performing Google & Meta ads, design eye-catching thumbnails, and craft impactful graphics.",
      icon: "🚀",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Enterprise Features",
      description: "Securely manage campaigns, analytics, and creative assets with enterprise-grade tools.",
      icon: "🔒",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Dedicated Support",
      description: "Work with you on your strategy and help you build the best plan for your business growth.",
      icon: "🤝",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
      <NavbarDemo />
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {submitted ? (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-32">
          <div className={`text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-emerald-500 to-teal-400 p-6 rounded-full mx-auto w-fit">
                <CheckCircle size={64} className="text-white" />
              </div>
            </div>

            <div className="inline-flex items-center px-6 py-2 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
              Message Sent Successfully
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight">
              Thank you for reaching out!
            </h2>

            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
              We've received your inquiry and will be contacting you via email shortly to discuss how
              <span className="text-white font-medium"> Mercato Agency</span> can help your business grow.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-screen px-4 py-32">
          {/* Hero Section */}
          <section className="max-w-7xl mx-auto mb-20">
            <div className={`text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-6 py-2 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300 hover:border-slate-600/50 transition-all duration-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                Let's Work Together
              </div>

              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight">
                Partner with
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Mercato Agency
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                Ready to transform your business? Let's discuss how our team can help you achieve
                <span className="text-white font-medium"> extraordinary results</span>.
              </p>
            </div>
          </section>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Column - Benefits */}
              <div className="space-y-8">
                <div className="mb-12">
                  <div className="inline-flex items-center px-6 py-2 mb-6 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                    <Sparkles size={16} className="mr-2" />
                    Why Choose Mercato?
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Experience the
                    <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"> difference</span>
                  </h2>
                </div>

                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 p-8 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-500"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                          {benefit.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                          <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mt-12">
                  {[
                    { value: '500+', label: 'Projects Completed', icon: '📈' },
                    { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
                    { value: '24/7', label: 'Support Available', icon: '🔧' },
                    { value: '5+', label: 'Years Experience', icon: '🏆' }
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-2xl bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 text-center group hover:border-slate-600/50 transition-all duration-300"
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800/10 via-purple-600/10 to-blue-900/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      Get Started Today
                    </h2>
                    <p className="text-slate-400">Fill out the form below and we'll get back to you within 24 hours.</p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
                          <User size={16} className="text-blue-400" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="first_name"
                          placeholder="Enter your full name"
                          onFocus={() => setActiveField('name')}
                          onBlur={() => setActiveField('')}
                          className={`w-full px-4 py-4 bg-slate-800/50 border rounded-2xl focus:outline-none transition-all duration-300 text-white placeholder-slate-500 ${activeField === 'name'
                            ? 'border-blue-500 bg-slate-800/70 shadow-lg shadow-blue-500/10'
                            : 'border-slate-700/50 hover:border-slate-600/50'
                            }`}
                        />
                      </div>

                      <div className="group">
                        <label className="block text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
                          <Mail size={16} className="text-blue-400" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          placeholder="you@company.com"
                          onFocus={() => setActiveField('email')}
                          onBlur={() => setActiveField('')}
                          className={`w-full px-4 py-4 bg-slate-800/50 border rounded-2xl focus:outline-none transition-all duration-300 text-white placeholder-slate-500 ${activeField === 'email'
                            ? 'border-blue-500 bg-slate-800/70 shadow-lg shadow-blue-500/10'
                            : 'border-slate-700/50 hover:border-slate-600/50'
                            }`}
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
                        <Building size={16} className="text-blue-400" />
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company_name"
                        placeholder="Your company name"
                        onFocus={() => setActiveField('company')}
                        onBlur={() => setActiveField('')}
                        className={`w-full px-4 py-4 bg-slate-800/50 border rounded-2xl focus:outline-none transition-all duration-300 text-white placeholder-slate-500 ${activeField === 'company'
                          ? 'border-blue-500 bg-slate-800/70 shadow-lg shadow-blue-500/10'
                          : 'border-slate-700/50 hover:border-slate-600/50'
                          }`}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-medium text-slate-300 mb-3">
                          Services of Interest *
                        </label>
                        <select
                          required
                          name="services"
                          onFocus={() => setActiveField('services')}
                          onBlur={() => setActiveField('')}
                          className={`w-full px-4 py-4 bg-slate-800/50 border rounded-2xl focus:outline-none transition-all duration-300 text-white ${activeField === 'services'
                            ? 'border-blue-500 bg-slate-800/70 shadow-lg shadow-blue-500/10'
                            : 'border-slate-700/50 hover:border-slate-600/50'
                            }`}
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service.value} value={service.value} className="bg-slate-800">
                              {service.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="group">
                        <label className="block text-sm font-medium text-slate-300 mb-3">
                          How Can We Help? *
                        </label>
                        <select
                          required
                          name="help"
                          onFocus={() => setActiveField('help')}
                          onBlur={() => setActiveField('')}
                          className={`w-full px-4 py-4 bg-slate-800/50 border rounded-2xl focus:outline-none transition-all duration-300 text-white ${activeField === 'help'
                            ? 'border-blue-500 bg-slate-800/70 shadow-lg shadow-blue-500/10'
                            : 'border-slate-700/50 hover:border-slate-600/50'
                            }`}
                        >
                          <option value="">Select an option</option>
                          {helpOptions.map((option) => (
                            <option key={option.value} value={option.value} className="bg-slate-800">
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
                        <Calendar size={16} className="text-blue-400" />
                        Schedule a Meeting
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="date"
                          name="meeting_date"
                          min={new Date().toISOString().split("T")[0]}
                          onFocus={() => setActiveField('date')}
                          onBlur={() => setActiveField('')}
                          className={`w-full px-4 py-4 bg-slate-800/50 border rounded-2xl focus:outline-none transition-all duration-300 text-white ${activeField === 'date'
                            ? 'border-blue-500 bg-slate-800/70 shadow-lg shadow-blue-500/10'
                            : 'border-slate-700/50 hover:border-slate-600/50'
                            }`}
                        />
                        <select
                          name="meeting_time"
                          onFocus={() => setActiveField('time')}
                          onBlur={() => setActiveField('')}
                          className={`w-full px-4 py-4 bg-slate-800/50 border rounded-2xl focus:outline-none transition-all duration-300 text-white ${activeField === 'time'
                            ? 'border-blue-500 bg-slate-800/70 shadow-lg shadow-blue-500/10'
                            : 'border-slate-700/50 hover:border-slate-600/50'
                            }`}
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((slot) => (
                            <option key={slot.value} value={slot.value} className="bg-slate-800">
                              {slot.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
                        <MessageSquare size={16} className="text-blue-400" />
                        Additional Information
                      </label>
                      <textarea
                        name="info"
                        rows={4}
                        placeholder="Tell us more about your project or specific needs..."
                        onFocus={() => setActiveField('message')}
                        onBlur={() => setActiveField('')}
                        className={`w-full px-4 py-4 bg-slate-800/50 border rounded-2xl focus:outline-none transition-all duration-300 text-white placeholder-slate-500 resize-none ${activeField === 'message'
                          ? 'border-blue-500 bg-slate-800/70 shadow-lg shadow-blue-500/10'
                          : 'border-slate-700/50 hover:border-slate-600/50'
                          }`}
                      />
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-slate-800/20 rounded-2xl border border-slate-700/30">
                      <input
                        required
                        type="checkbox"
                        name="terms"
                        className="mt-1 h-4 w-4 rounded border-slate-600 text-blue-600 focus:ring-blue-500 bg-slate-800"
                      />
                      <label className="text-sm text-slate-300 leading-relaxed">
                        I agree to receive marketing communications from Mercato Agency and understand
                        that I can unsubscribe at any time.
                      </label>
                    </div>

                    <button
                      type="button"
                      onClick={sendEmail}
                      disabled={loading}
                      className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Your Inquiry</span>
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}