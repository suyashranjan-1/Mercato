"use client";
import { useState, useEffect, useRef, type ButtonHTMLAttributes } from 'react';
import {
  ShoppingBag, Clock, Users, Star, CheckCircle, ArrowRight, Bot, Headphones, Shield,
  Zap, BarChart3, Globe, Play, ChevronRight, Brain, Cpu, Database, Settings, Phone,
  MessageCircle,
  Mail, MessageSquare, Smartphone, DollarSign, TrendingUp
} from 'lucide-react';
import { NavbarDemo } from "@/components/navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';

// --------- FIX: Deterministic floating dot positions for SSR/CSR match ---------
function getFloatingDotPositions(count: number) {
  function mulberry32(a: number) {
      return function() {
          let t = a += 0x6D2B79F5;
          t = Math.imul(t ^ t >>> 15, t | 1);
          t ^= t + Math.imul(t ^ t >>> 7, t | 61);
          return ((t ^ t >>> 14) >>> 0) / 4294967296;
      };
  }
  const rand = mulberry32(20240605); // Any fixed seed
  const arr = [];
  for (let i = 0; i < count; i++) {
      arr.push({
          left: rand() * 100,
          top: rand() * 100,
          animationDelay: rand() * 5,
          animationDuration: 3 + rand() * 4,
      });
  }
  return arr;
}

const floatingDots = getFloatingDotPositions(20);


export default function EcommerceChatbotAIAgent() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeStep, setActiveStep] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observerRef.current?.observe(el);
    });

    const stepInterval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 4);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observerRef.current?.disconnect();
      clearInterval(stepInterval);
    };
  }, []);

  // Stats and feature data for eCommerce Chatbot AI Agent
  const stats = [
    { label: 'Avg Response Time', value: '<3s', icon: Clock, color: 'from-blue-500 to-cyan-500' },
    { label: 'Increase in Conversion', value: '23%', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { label: 'Customer Satisfaction', value: '96%', icon: Star, color: 'from-purple-500 to-pink-500' },
    { label: 'Automated Resolutions', value: '89%', icon: CheckCircle, color: 'from-yellow-500 to-orange-500' },
  ];

  const features = [
    {
      title: '24/7 Instant Support',
      description: 'Answer product questions, order tracking, and FAQs instantly at any hour for seamless customer experience.',
      icon: Bot,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Personalized Recommendations',
      description: 'Suggest products powered by AI, boosting upsells and average order value using real-time insights.',
      icon: Brain,
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'Conversational Checkout',
      description: 'Guide users through checkout, payment, and cart recovery without leaving the chat.',
      icon: ShoppingBag,
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      title: 'Order Management',
      description: 'Customers can track, modify, or cancel orders without waiting for a human agent.',
      icon: Database,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Multilingual Support',
      description: 'Serve global shoppers with real-time translations in over 50 languages.',
      icon: Globe,
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'AI-Powered Upselling',
      description: 'Recommend add-ons and complementary items to increase basket size intelligently.',
      icon: DollarSign,
      gradient: 'from-green-500 to-blue-500'
    },
    {
      title: 'Secure & Compliant',
      description: 'Enterprise-grade encryption with GDPR and PCI-DSS compliance for safe transactions.',
      icon: Shield,
      gradient: 'from-red-500 to-orange-500'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time performance metrics, customer intent tracking, and conversation insights.',
      icon: BarChart3,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Customer Inquiry',
      description: 'A shopper starts a conversation for support, product recommendations, or order queries.',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: 2,
      title: 'AI Understanding',
      description: 'Chatbot analyzes intent, history, and context with advanced NLP and knowledge base.',
      icon: Brain,
      color: 'from-orange-500 to-yellow-500'
    },
    {
      step: 3,
      title: 'Conversational Response',
      description: 'AI delivers instant, tailored answers, product links, or checkout flow guidance.',
      icon: Cpu,
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: 4,
      title: 'Conversion & Learning',
      description: 'Shoppers convert, receive support, and chatbot learns to improve future interactions.',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const integrations = [
    { name: 'Shopify', category: 'E-commerce', logo: '🛒' },
    { name: 'WooCommerce', category: 'E-commerce', logo: '🌐' },
    { name: 'Magento', category: 'E-commerce', logo: '🧱' },
    { name: 'BigCommerce', category: 'E-commerce', logo: '🏬' },
    { name: 'Mailchimp', category: 'Email', logo: '📧' },
    { name: 'Klaviyo', category: 'Email/SMS', logo: '📱' },
    { name: 'Twilio', category: 'SMS', logo: '📲' },
    { name: 'WhatsApp', category: 'Messaging', logo: '💬' },
    { name: 'Facebook Messenger', category: 'Social', logo: '💭' },
    { name: 'Google Analytics', category: 'Analytics', logo: '📊' },
    { name: 'Zapier', category: 'Automation', logo: '⚡️' },
    { name: 'Slack', category: 'Communication', logo: '💬' },
    { name: 'Zendesk', category: 'Support', logo: '🎫' },
    { name: 'Stripe', category: 'Payments', logo: '💳' },
    { name: 'Segment', category: 'Data', logo: '🔗' },
    { name: 'Oracle CX', category: 'Experience', logo: '🔮' },
  ];

  const channels = [
    { name: 'Website Chat', icon: MessageSquare, description: 'Instant support on-site for shoppers' },
    { name: 'Email Support', icon: Mail, description: 'Automate email responses and notifications' },
    { name: 'WhatsApp', icon: Globe, description: 'Conversational commerce on WhatsApp' },
    { name: 'SMS', icon: Smartphone, description: 'Order updates and reminders via SMS' }
  ];

  const benefits = [
    {
      title: 'Increase Sales',
      description: 'Convert more visitors with product discovery, offers, and proactive engagement.',
      percentage: '23%',
      metric: 'conversion boost'
    },
    {
      title: 'Reduce Support Load',
      description: 'Automate up to 89% of customer queries and order management tasks.',
      percentage: '89%',
      metric: 'automation rate'
    },
    {
      title: 'Improve Customer Loyalty',
      description: 'Deliver instant, helpful responses for a memorable shopping experience.',
      percentage: '96%',
      metric: 'satisfaction'
    },
    {
      title: '24/7 Service',
      description: 'Never miss a sale with round-the-clock support and recommendations.',
      percentage: '∞',
      metric: 'availability'
    },
    {
      title: 'Faster Checkout',
      description: 'Reduce cart abandonment with seamless, conversational checkout.',
      percentage: '15%',
      metric: 'fewer drop-offs'
    }
  ];

  const isInView = (sectionId: string) => visibleSections.has(sectionId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
      <NavbarDemo />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-16 sm:py-20 lg:py-32">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-green-600/10"></div>
        <div
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.1}px)`, animationDelay: '1s' }}
        ></div>

        {/* FIX: Hydration-safe floating AI Elements */}
        <div className="absolute inset-0 pointer-events-none">
                    {floatingDots.map((dot, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
                            style={{
                                left: `${dot.left}%`,
                                top: `${dot.top}%`,
                                animationDelay: `${dot.animationDelay}s`,
                                animationDuration: `${dot.animationDuration}s`
                            }}
                        ></div>
                    ))}
                </div>

        <div className={`w-full max-w-7xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300 hover:border-slate-600/50 transition-all duration-300">
            <Bot className="w-4 h-4 mr-2 text-blue-400 animate-pulse" />
            eCommerce Chatbot AI Agent
            <div className="ml-2 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight">
            Next-Gen eCommerce
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent animate-glow">
              Chatbot AI Agent
            </span>
          </h1>

          <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            Grow sales, automate support, and delight shoppers 24/7 with the most advanced AI chatbot for online stores.
            Instantly answer questions, recommend products, and reduce cart abandonment with one powerful solution.
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 mb-16">
                        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-2">
                            Create Agent
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        <Link href="#" target="_blank" className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white font-semibold rounded-2xl hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-2">
                            <Play className="w-4 h-4" />
                            Watch Demo
                        </Link>
                    </div>

          {/* Enhanced AI Agent Preview */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 group">
              {/* Agent Status Bar */}
              <div className="flex items-center justify-between mb-6 p-4 bg-slate-800/40 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-600 rounded-2xl flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">eCommerce AI Chatbot</h3>
                    <div className="text-slate-400 text-sm flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                      Online • Responding instantly
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm font-medium text-emerald-400">4.8★</div>
                    <div className="text-xs text-slate-400">Satisfaction</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-blue-400">&lt; 3s</div>
                    <div className="text-xs text-slate-400">Avg Response</div>
                  </div>
                </div>
              </div>

              {/* Chat Interface */}
              <div className="space-y-4 mb-6">
                <div className="flex gap-3 animate-slideInLeft">
                  <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-slate-300" />
                  </div>
                  <div className="bg-slate-800/50 rounded-2xl p-3 flex-1 max-w-xs">
                    <span className="text-sm">Hi! Can you recommend running shoes for flat feet?</span>
                    <span className="text-xs text-slate-400 mt-1 block">10:21 AM</span>
                  </div>
                </div>

                <div className="flex gap-3 justify-end animate-slideInRight" style={{ animationDelay: '0.5s' }}>
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-3 max-w-sm">
                    <span className="text-sm">Absolutely! Here are our top picks for running shoes with arch support. Would you like to see more details or add to cart?</span>
                    <span className="text-xs text-blue-100 mt-1 block">10:21 AM</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-600 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="flex gap-3 animate-slideInLeft" style={{ animationDelay: '1s' }}>
                  <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-slate-300" />
                  </div>
                  <div className="bg-slate-800/50 rounded-2xl p-3 flex-1 max-w-xs">
                    <span className="text-sm">That’s perfect. Can you help me track my order #12345?</span>
                    <span className="text-xs text-slate-400 mt-1 block">10:22 AM</span>
                  </div>
                </div>
              </div>

              {/* Typing Indicator */}
              <div className="flex gap-3 justify-end">
                <div className="bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-2xl p-3 border border-blue-500/30">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-xs text-blue-300">AI is typing...</span>
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-600 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="relative py-16 sm:py-20 px-4 bg-gradient-to-r from-slate-900/30 to-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className={`relative p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 text-center hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-500 group transform overflow-hidden ${isInView('stats') ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-10'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-r ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                    </div>
                    <div className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-slate-300 font-medium text-xs sm:text-sm lg:text-base">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 sm:py-24 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${isInView('how-it-works') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
              <Settings className="w-4 h-4 mr-2 text-emerald-400 animate-spin-slow" />
              How It Works
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mx-auto mb-6 sm:mb-8 leading-tight px-4">
              AI-powered shopping
              <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent"> in four steps</span>
            </h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent transform -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = activeStep === index;
                return (
                  <div
                    key={index}
                    className={`relative text-center transform transition-all duration-700 ${isInView('how-it-works') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${isActive ? 'scale-105' : ''}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className={`relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center transition-all duration-500 ${isActive ? 'animate-pulse' : ''}`}>
                      <IconComponent className="w-8 h-8 text-white" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 border-2 border-slate-700 rounded-full flex items-center justify-center text-xs font-bold">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">{step.title}</h3>
                    <div className="text-slate-300 leading-relaxed text-sm sm:text-base">{step.description}</div>
                    {index < howItWorks.length - 1 && (
                      <div className="hidden lg:block absolute top-8 -right-4 text-slate-600">
                        <ChevronRight className="w-6 h-6 animate-pulse" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24 lg:py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${isInView('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
              <Zap className="w-4 h-4 mr-2 text-emerald-400" />
              Powerful Features
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mx-auto mb-6 sm:mb-8 leading-tight px-4">
              Everything your store needs for
              <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent"> seamless conversations</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-500 group hover:scale-105 transform overflow-hidden ${isInView('features') ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-10'}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                    <div className="text-slate-300 leading-relaxed text-sm sm:text-base">{feature.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Channels Section */}
      <section id="channels" className="py-16 sm:py-24 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${isInView('channels') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
              <Globe className="w-4 h-4 mr-2 text-blue-400" />
              Integration Channels
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mx-auto mb-6 sm:mb-8 leading-tight px-4">
              Connect with customers
              <span className="bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent"> everywhere they shop</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {channels.map((channel, index) => {
              const IconComponent = channel.icon;
              return (
                <div
                  key={index}
                  className={`relative p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-500 group text-center transform hover:scale-105 ${isInView('channels') ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-10'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{channel.name}</h3>
                  <p className="text-slate-300 text-sm">{channel.description}</p>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 hover:border-slate-600/50 hover:bg-slate-800/40 transition-all duration-500 text-center group transform hover:scale-105 ${isInView('channels') ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${400 + index * 50}ms` }}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {integration.logo}
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">{integration.name}</h4>
                <p className="text-xs text-slate-400">{integration.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 sm:py-24 lg:py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${isInView('benefits') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
              <BarChart3 className="w-4 h-4 mr-2 text-emerald-400" />
              Business Impact
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mx-auto mb-6 sm:mb-8 leading-tight px-4">
              Unlock
              <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent"> real results</span> for your store
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-3xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-500 group transform hover:scale-105 overflow-hidden ${isInView('benefits') ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
                    <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">
                      {benefit.percentage}
                    </div>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed mb-4">{benefit.description}</p>
                  <div className="text-sm text-emerald-400 font-medium">{benefit.metric}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Capabilities Section */}
      <section id="capabilities" className="py-16 sm:py-24 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${isInView('capabilities') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
              <Brain className="w-4 h-4 mr-2 text-blue-400" />
              AI Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mx-auto mb-6 sm:mb-8 leading-tight px-4">
              Advanced AI that
              <span className="bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent"> drives growth</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* AI Brain Visualization */}
            <div className={`relative transform transition-all duration-1000 ${isInView('capabilities') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative">
                {/* Central AI Core */}
                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="relative w-full h-full bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-full border border-slate-600/50 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                      <Brain className="w-16 h-16 text-white animate-pulse" />
                    </div>
                  </div>
                  {/* Floating Capability Nodes */}
                  {[
                    { label: 'NLP', angle: 0, color: 'from-blue-500 to-cyan-500' },
                    { label: 'Product Rec', angle: 60, color: 'from-orange-500 to-yellow-500' },
                    { label: 'Checkout', angle: 120, color: 'from-green-500 to-emerald-500' },
                    { label: 'Order', angle: 180, color: 'from-purple-500 to-pink-500' },
                    { label: 'Analytics', angle: 240, color: 'from-indigo-500 to-blue-600' },
                    { label: 'Security', angle: 300, color: 'from-red-500 to-orange-500' }
                  ].map((node, index) => {
                    const x = Math.cos((node.angle * Math.PI) / 180) * 120;
                    const y = Math.sin((node.angle * Math.PI) / 180) * 120;
                    return (
                      <div
                        key={index}
                        className="absolute w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 animate-float"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          animationDelay: `${index * 0.5}s`
                        }}
                      >
                        <div className={`w-full h-full bg-gradient-to-r ${node.color} rounded-2xl flex items-center justify-center border border-white/20 backdrop-blur-sm hover:scale-110 transition-transform duration-300`}>
                          <span className="text-white text-xs font-bold">{node.label}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Capabilities List */}
            <div className={`space-y-8 transform transition-all duration-1000 ${isInView('capabilities') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {[
                {
                  title: 'Natural Language Understanding',
                  description: 'Understands context, intent, and emotion for natural conversations.',
                  icon: MessageCircle,
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Product Recommendations',
                  description: 'Suggests products based on user profile, browsing, and trends.',
                  icon: Brain,
                  color: 'from-orange-500 to-yellow-500'
                },
                {
                  title: 'Conversational Checkout',
                  description: 'Guides shoppers through a seamless, chat-based checkout process.',
                  icon: ShoppingBag,
                  color: 'from-pink-500 to-purple-500'
                },
                {
                  title: 'Order & Support Automation',
                  description: 'Tracks, modifies, and resolves order queries instantly.',
                  icon: Database,
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  title: 'Multilingual & Multichannel',
                  description: 'Engages users in their language, on their favorite platforms.',
                  icon: Globe,
                  color: 'from-indigo-500 to-blue-600'
                },
                {
                  title: 'Secure Transactions',
                  description: 'Ensures privacy and compliance for every conversation and payment.',
                  icon: Shield,
                  color: 'from-red-500 to-orange-500'
                }
              ].map((capability, index) => {
                const IconComponent = capability.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-6 p-6 rounded-2xl bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 hover:border-slate-600/50 hover:bg-slate-800/40 transition-all duration-500 group"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${capability.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{capability.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{capability.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-16 sm:py-24 lg:py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isInView('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
              <Zap className="w-4 h-4 mr-2 text-emerald-400" />
              Ready to Transform Your Store?
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              Start selling more
              <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent"> with AI Chatbot today</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 leading-relaxed">
              Join top eCommerce brands using AI chatbots for smarter support, higher sales, and unbeatable customer loyalty. Try it for free and see the difference.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-slate-700/50">
              {[
                { label: 'Easy Integration', value: '< 10 Minutes' },
                // { label: 'Free Trial', value: '14 Days' },
                { label: 'Conversion Lift', value: '23%' },
                { label: 'Support', value: '24/7 Available' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                  <div className="text-sm text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0px); }
        }
        @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0px); }
        }
        @keyframes slideInRight {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0px); }
        }
        @keyframes glow {
            0%, 100% { filter: brightness(1); }
            50% { filter: brightness(1.2); }
        }
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
        .animate-slideUp {
            animation: slideUp 0.8s ease-out forwards;
        }
        .animate-slideInLeft {
            animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slideInRight {
            animation: slideInRight 0.8s ease-out forwards;
        }
        .animate-glow {
            animation: glow 3s ease-in-out infinite;
        }
        .animate-spin-slow {
            animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}