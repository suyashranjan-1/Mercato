"use client";

import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import {
  ArrowRight,
  Calendar,
  Clock,
  CheckCircle,
  Mail,
  User,
  Building,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { NavbarDemo } from "@/components/navbar";
import Footer from "@/components/Footer";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeField, setActiveField] = useState('');
  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    company_name: "",
    services: "",
    help: "",
    meeting_date: "",
    meeting_time: "",
    info: "",
    terms: false,
  });
  const [errors, setErrors] = useState({
    first_name: false,
    email: false,
    services: false,
    help: false,
    meeting_date: false,
    meeting_time: false,
    terms: false,
  });
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const validate = () => {
    const errs = {
      first_name: !formData.first_name.trim(),
      email: !formData.email.trim() || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email),
      services: !formData.services,
      help: !formData.help,
      meeting_date: !formData.meeting_date,
      meeting_time: !formData.meeting_time,
      terms: !formData.terms,
    };
    setErrors(errs);
    // All must be false to be valid
    return Object.values(errs).every((v) => !v);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs
      .sendForm("service_57dccsx", "template_4ovd2wl", form.current, {
        publicKey: "5_BKNco2OULcaqW0m",
      })
      .then(
        () => {
          alert(
            "We have received your inquiry and will be contacting you via email shortly."
          );
          console.log("SUCCESS!");
        },
        (error: { text: string }) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  // Enhanced: AI Agents Categories
  const services = [
    { value: "General Problem Solver", label: "General Problem Solver AI Agent" },
    { value: "Data Extraction", label: "Data Extraction AI Agent" },
    { value: "E-commerce", label: "E-commerce AI Agent" },
    { value: "Customer Service", label: "Customer Service AI Agent" },
    { value: "Sales", label: "Sales AI Agent" },
    { value: "HR", label: "HR AI Agent" },
    { value: "Finance & Accounting", label: "Finance & Accounting AI Agent" },
    { value: "Social Media", label: "Social Media AI Agent" },
    { value: "Legal", label: "Legal AI Agent" },
    { value: "Healthcare", label: "Healthcare AI Agent" },
    { value: "Insurance", label: "Insurance AI Agent" },
    { value: "Property Management", label: "Property Management AI Agent" },
    { value: "Custom AI Agent", label: "Custom AI Agent (Built for Your Unique Needs)" },
  ];

  // Enhanced: AI Agents Help Options
  const helpOptions = [
    { value: "Evaluate AI Agent Solution", label: "Evaluate the right AI Agent for my business" },
    { value: "Learn About AI Agents", label: "Learn more about Mercato AI Agent solutions" },
    { value: "Custom Agent Consultation", label: "Consult about a custom AI Agent" },
    { value: "Implementation Inquiry", label: "Get help implementing an AI Agent" },
    { value: "Integration Support", label: "Integrate AI Agents into existing systems" },
    { value: "Cost & ROI", label: "Understand AI Agent costs and ROI" },
    { value: "Other", label: "Have another AI Agent related question" },
  ];

  const timeSlots = [
    { value: "9:00 AM - 11:00 AM", label: "9:00 AM - 11:00 AM (UTC-5:00)" },
    { value: "11:00 AM - 1:00 PM", label: "11:00 AM - 1:00 PM (UTC-5:00)" },
    { value: "2:00 PM - 4:00 PM", label: "2:00 PM - 4:00 PM (UTC-5:00)" },
    { value: "4:00 PM - 6:00 PM", label: "4:00 PM - 6:00 PM (UTC-5:00)" },
    { value: "6:00 PM - 8:00 PM", label: "6:00 PM - 8:00 PM (UTC-5:00)" }
  ];

  // Enhanced: Benefits updated for AI Agents
  const benefits = [
    {
      title: "AI Agents for Every Business",
      description: "Deploy specialized AI Agents for any workflow: customer support, sales, data extraction, HR, and more.",
      icon: "🤖",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Tailored & Secure Solutions",
      description: "Custom AI Agents, enterprise-grade security, and seamless integration with your existing tools.",
      icon: "🔒",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Dedicated AI Expertise",
      description: "Our experts guide you from planning to deployment, ensuring your AI Agents deliver real business impact.",
      icon: "🧑‍💻",
      color: "from-orange-500 to-red-600"
    }
  ];

  // Enhanced: Stats relevant to AI Agents
  const stats = [
    { value: "1000+", label: "AI Agents Deployed", icon: "🤖" },
    { value: "99%", label: "Automation Success Rate", icon: "⚡" },
    { value: "24/7", label: "AI Agent Uptime", icon: "🌐" },
    { value: "20+", label: "Industries Served", icon: "🏢" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
      <NavbarDemo />

      {/* Animated Background Elements - Responsive */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5"></div>
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {submitted ? (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 sm:py-24 lg:py-32">
          <div className={`text-center relative z-10 transition-all duration-1000 max-w-4xl mx-auto ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative mb-6 sm:mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-emerald-500 to-teal-400 p-4 sm:p-6 rounded-full mx-auto w-fit">
                <CheckCircle size={48} className="text-white sm:w-16 sm:h-16" />
              </div>
            </div>
            <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
              Message Sent Successfully
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight px-4">
              Thank you for reaching out!
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
              We've received your inquiry and will be contacting you via email shortly to discuss how
              <span className="text-white font-medium"> Mercato Agency</span> can empower your business with customized AI Agents.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-screen px-4 py-20 sm:py-24 lg:py-32">
          {/* Hero Section - Enhanced Responsive */}
          <section className="max-w-7xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <div className={`text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300 hover:border-slate-600/50 transition-all duration-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                Unlock AI Agent Potential
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight px-4">
                Transform with
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Mercato AI Agents
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed px-4">
                Ready to automate, optimize, and accelerate your business? Discover how Mercato's <span className="text-white font-medium">AI Agents</span> can handle your challenges—no matter the industry.
              </p>
            </div>
          </section>
          {/* Main Content - Enhanced Mobile Layout */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              {/* Left Column - Benefits - Mobile First */}
              <div className="space-y-6 sm:space-y-8 order-2 xl:order-1">
                <div className="mb-8 sm:mb-12">
                  <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-4 sm:mb-6 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                    <Sparkles size={16} className="mr-2" />
                    Why Choose Mercato AI Agents?
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                    Experience the
                    <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"> power of AI agents</span>
                  </h2>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 p-6 sm:p-8 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-500"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          {benefit.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{benefit.title}</h3>
                          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Stats - Enhanced Mobile Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-12">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="p-4 sm:p-6 rounded-2xl bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 text-center group hover:border-slate-600/50 transition-all duration-300"
                    >
                      <div className="text-xl sm:text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-xl sm:text-2xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-400 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right Column - Form - Enhanced Mobile Layout */}
              <div className="relative order-1 xl:order-2">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800/10 via-purple-600/10 to-blue-900/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-6 sm:p-8">
                  <div className="mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      Get Your AI Agent Today
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400">
                      Fill out the form below and our AI specialists will contact you to tailor the perfect AI Agent for your needs.
                    </p>
                  </div>
                  <form>
                  <div className="space-y-4 sm:space-y-6">
                    {/* Name and Email - Stack on Mobile */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                      <div className="group">
                        <label className="block text-sm font-medium text-slate-300 mb-2 sm:mb-3 flex items-center gap-2">
                          <User size={16} className="text-blue-400" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="first_name"
                          placeholder="Enter your full name"
                          value={formData.first_name}
                          onChange={e => setFormData(f => ({ ...f, first_name: e.target.value }))}
                          onFocus={() => setActiveField('name')}
                          onBlur={() => setActiveField('')}
                          className={`w-full px-3 sm:px-4 py-3 sm:py-4 bg-slate-800/50 border rounded-2xl focus:outline-none transition-all duration-300 text-white placeholder-slate-500 text-sm sm:text-base ${activeField === 'name'
                            ? 'border-blue-500 bg-slate-800/70 shadow-lg shadow-blue-500/10'
                            : 'border-slate-700/50 hover:border-slate-600/50'
                            }${errors.first_name ? " border-red-500" : ""}`}
                        />
                        {errors.first_name && <div className="text-xs text-red-400 mt-1">Full name is required.</div>}
                      </div>
                      <div className="group">
                        <label className="block text-sm font-medium text-slate-300 mb-2 sm:mb-3 flex items-center gap-2">
                          <Mail size={16} className="text-blue-400" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={e => setFormData(f => ({ ...f, email: e.target.value }))}
                          onFocus={() => setActiveField('email')}
                          onBlur={() => setActiveField('')}
                          className={`w-full px-3 sm:px-4 py-3 sm:py-4 bg-slate-800/50 border rounded-2xl focus:outline-none transition-all duration-300 text-white placeholder-slate-500 text-sm sm:text-base ${activeField === 'email'
                            ? 'border-blue-500 bg-slate-800/70 shadow-lg shadow-blue-500/10'
                            : 'border-slate-700/50 hover:border-slate-600/50'
                            }${errors.email ? " border-red-500" : ""}`}
                        />
                        {errors.email && <div className="text-xs text-red-400 mt-1">Valid email is required.</div>}
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-slate-300 mb-2 sm:mb-3 flex items-center gap-2">
                        <Building size={16} className="text-blue-400" />
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company_name"
                        placeholder="Your company name"
                        value={formData.company_name}
                        onChange={e => setFormData(f => ({ ...f, company_name: e.target.value }))}
                        onFocus={() => setActiveField('company')}
                        onBlur={() => setActiveField('')}
                        className={`w-full px-3 sm:px-4 py-3 sm:py-4 bg-slate-800/50 border rounded-2xl focus:outline-none transition-all duration-300 text-white placeholder-slate-500 text-sm sm:text-base ${activeField === 'company'
                          ? 'border-blue-500 bg-slate-800/70 shadow-lg shadow-blue-500/10'
                          : 'border-slate-700/50 hover:border-slate-600/50'
                          }`}
                      />
                    </div>
                    {/* Services and Help - Stack on Mobile/Tablet */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                      <div className="group">
                        <label className="block text-sm font-medium text-slate-300 mb-2 sm:mb-3">
                          AI Agent of Interest *
                        </label>
                        <select
                          required
                          name="services"
                          value={formData.services}
                          onChange={e => setFormData(f => ({ ...f, services: e.target.value }))}
                          onFocus={() => setActiveField('services')}
                          onBlur={() => setActiveField('')}
                          className={`w-full px-3 sm:px-4 py-3 sm:py-4 bg-slate-800/50 border rounded-2xl focus:outline-none transition-all duration-300 text-white text-sm sm:text-base ${activeField === 'services'
                            ? 'border-blue-500 bg-slate-800/70 shadow-lg shadow-blue-500/10'
                            : 'border-slate-700/50 hover:border-slate-600/50'
                            }${errors.services ? " border-red-500" : ""}`}
                        >
                          <option value="">Select an AI Agent</option>
                          {services.map((service) => (
                            <option key={service.value} value={service.value} className="bg-slate-800">
                              {service.label}
                            </option>
                          ))}
                        </select>
                        {errors.services && <div className="text-xs text-red-400 mt-1">Please select an AI Agent.</div>}
                      </div>
                      <div className="group">
                        <label className="block text-sm font-medium text-slate-300 mb-2 sm:mb-3">
                          How Can We Help With AI Agents? *
                        </label>
                        <select
                          required
                          name="help"
                          value={formData.help}
                          onChange={e => setFormData(f => ({ ...f, help: e.target.value }))}
                          onFocus={() => setActiveField('help')}
                          onBlur={() => setActiveField('')}
                          className={`w-full px-3 sm:px-4 py-3 sm:py-4 bg-slate-800/50 border rounded-2xl focus:outline-none transition-all duration-300 text-white text-sm sm:text-base ${activeField === 'help'
                            ? 'border-blue-500 bg-slate-800/70 shadow-lg shadow-blue-500/10'
                            : 'border-slate-700/50 hover:border-slate-600/50'
                            }${errors.help ? " border-red-500" : ""}`}
                        >
                          <option value="">Select an option</option>
                          {helpOptions.map((option) => (
                            <option key={option.value} value={option.value} className="bg-slate-800">
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {errors.help && <div className="text-xs text-red-400 mt-1">Please select how we can help.</div>}
                      </div>
                    </div>
                    {/* Meeting Schedule - Enhanced Mobile Layout */}
                    <div className="group">
                      <label className="block text-sm font-medium text-slate-300 mb-2 sm:mb-3 flex items-center gap-2">
                        <Calendar size={16} className="text-blue-400" />
                        Schedule a Consultation *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="date"
                          name="meeting_date"
                          min={new Date().toISOString().split("T")[0]}
                          value={formData.meeting_date}
                          onChange={e => setFormData(f => ({ ...f, meeting_date: e.target.value }))}
                          onFocus={() => setActiveField('date')}
                          onBlur={() => setActiveField('')}
                          className={`w-full px-3 sm:px-4 py-3 sm:py-4 bg-slate-800/50 border rounded-2xl focus:outline-none transition-all duration-300 text-white text-sm sm:text-base ${activeField === 'date'
                            ? 'border-blue-500 bg-slate-800/70 shadow-lg shadow-blue-500/10'
                            : 'border-slate-700/50 hover:border-slate-600/50'
                            }${errors.meeting_date ? " border-red-500" : ""}`}
                        />
                        <select
                          name="meeting_time"
                          value={formData.meeting_time}
                          onChange={e => setFormData(f => ({ ...f, meeting_time: e.target.value }))}
                          onFocus={() => setActiveField('time')}
                          onBlur={() => setActiveField('')}
                          className={`w-full px-3 sm:px-4 py-3 sm:py-4 bg-slate-800/50 border rounded-2xl focus:outline-none transition-all duration-300 text-white text-sm sm:text-base ${activeField === 'time'
                            ? 'border-blue-500 bg-slate-800/70 shadow-lg shadow-blue-500/10'
                            : 'border-slate-700/50 hover:border-slate-600/50'
                            }${errors.meeting_time ? " border-red-500" : ""}`}
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((slot) => (
                            <option key={slot.value} value={slot.value} className="bg-slate-800">
                              {slot.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      {(errors.meeting_date || errors.meeting_time) && <div className="text-xs text-red-400 mt-1">Please select date and time.</div>}
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-slate-300 mb-2 sm:mb-3 flex items-center gap-2">
                        <MessageSquare size={16} className="text-blue-400" />
                        Additional Information
                      </label>
                      <textarea
                        name="info"
                        rows={4}
                        placeholder="Tell us about your workflow, industry, and how you hope AI Agents can help..."
                        value={formData.info}
                        onChange={e => setFormData(f => ({ ...f, info: e.target.value }))}
                        onFocus={() => setActiveField('message')}
                        onBlur={() => setActiveField('')}
                        className={`w-full px-3 sm:px-4 py-3 sm:py-4 bg-slate-800/50 border rounded-2xl focus:outline-none transition-all duration-300 text-white placeholder-slate-500 resize-none text-sm sm:text-base ${activeField === 'message'
                          ? 'border-blue-500 bg-slate-800/70 shadow-lg shadow-blue-500/10'
                          : 'border-slate-700/50 hover:border-slate-600/50'
                          }`}
                      />
                    </div>
                    <div className="flex items-start space-x-3 p-3 sm:p-4 bg-slate-800/20 rounded-2xl border border-slate-700/30">
                      <input
                        required
                        type="checkbox"
                        name="terms"
                        checked={formData.terms}
                        onChange={e => setFormData(f => ({ ...f, terms: e.target.checked }))}
                        className="mt-1 h-4 w-4 rounded border-slate-600 text-blue-600 focus:ring-blue-500 bg-slate-800 flex-shrink-0"
                      />
                      <label className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        I agree to receive communications from Mercato Agency about AI Agent solutions and understand that I can unsubscribe at any time.
                      </label>
                    </div>
                    {errors.terms && <div className="text-xs text-red-400 mt-1">You must agree to submit the inquiry.</div>}
                    <button
                      type="button"
                      onClick={sendEmail}
                      disabled={loading}
                      className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Your AI Agent Inquiry</span>
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300 sm:w-5 sm:h-5" />
                        </>
                      )}
                    </button>
                  </div>
                  </form>
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
        @media (max-width: 640px) {
          input, select, textarea, button {
            min-height: 44px;
          }
        }
        @media (max-width: 480px) {
          .text-8xl { font-size: 3rem; }
          .text-7xl { font-size: 2.5rem; }
          .text-6xl { font-size: 2rem; }
        }
      `}</style>
      <Footer />
    </div>
  );
}