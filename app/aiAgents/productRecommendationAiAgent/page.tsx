"use client";
import { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Search, Star, CheckCircle, Clock, Zap, BarChart3, Globe, Database, Settings, Play, ArrowRight, ChevronRight, Brain, Gift, Users, ThumbsUp, DollarSign, Smartphone, List, Tag, Heart, Filter, TrendingUp, Mail } from 'lucide-react';
import { NavbarDemo } from "@/components/navbar";
import Footer from "@/components/Footer";

export default function ProductRecommendationAIAgent() {
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

    const stats = [
        { label: 'Avg Recommendation Time', value: '<1s', icon: Clock, color: 'from-blue-500 to-cyan-500' },
        { label: 'Conversion Boost', value: '32%', icon: TrendingUp, color: 'from-yellow-500 to-orange-500' },
        { label: 'Personalization Score', value: '97%', icon: Star, color: 'from-emerald-500 to-teal-500' },
        { label: 'System Uptime', value: '99.99%', icon: Zap, color: 'from-purple-500 to-pink-500' },
    ];

    const features = [
        {
            title: 'Real-Time Recommendations',
            description: 'AI suggests relevant products instantly as users browse, search, or shop—on any device.',
            icon: ShoppingCart,
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Personalization Engine',
            description: 'Delivers unique recommendations for every shopper based on browsing, purchase, and preference history.',
            icon: Heart,
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Contextual Search',
            description: 'Understands shopper intent and context to surface the best-fitting products every time.',
            icon: Search,
            gradient: 'from-emerald-500 to-teal-500'
        },
        {
            title: 'Segment Targeting',
            description: 'Adapt recommendations for new, returning, or VIP customers with dynamic segmentation.',
            icon: Users,
            gradient: 'from-orange-500 to-red-500'
        },
        {
            title: 'Multi-Channel Support',
            description: 'Serve recommendations on web, mobile, email, chat, and in-store displays for a seamless experience.',
            icon: Smartphone,
            gradient: 'from-indigo-500 to-purple-500'
        },
        {
            title: 'A/B Testing & Analytics',
            description: 'Optimize results with built-in testing and analytics for every recommendation scenario.',
            icon: BarChart3,
            gradient: 'from-pink-500 to-rose-500'
        },
        {
            title: 'Cross-Sell/Upsell Automation',
            description: 'Suggest complementary or higher-value products at perfect moments in the customer journey.',
            icon: Tag,
            gradient: 'from-rose-500 to-pink-500'
        },
        {
            title: 'Explainable AI',
            description: 'Show users why each recommendation was made for maximum trust and engagement.',
            icon: List,
            gradient: 'from-amber-500 to-orange-500'
        }
    ];

    const howItWorks = [
        {
            step: 1,
            title: 'User Engagement',
            description: 'Shopper browses, searches, or interacts via web, app, or other channels.',
            icon: Gift,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            step: 2,
            title: 'AI Profiling',
            description: 'User preferences, behavior, and context are analyzed in real time using advanced AI models.',
            icon: Brain,
            color: 'from-purple-500 to-pink-500'
        },
        {
            step: 3,
            title: 'Product Matching',
            description: 'AI identifies top products from inventory and scores them for relevance and appeal.',
            icon: CheckCircle,
            color: 'from-emerald-500 to-teal-500'
        },
        {
            step: 4,
            title: 'Personalized Delivery',
            description: 'Recommendations are presented instantly, driving higher engagement and conversions.',
            icon: ThumbsUp,
            color: 'from-orange-500 to-red-500'
        }
    ];

    const integrations = [
        { name: 'Shopify', category: 'E-commerce', logo: '🛒' },
        { name: 'Magento', category: 'E-commerce', logo: '🛍️' },
        { name: 'WooCommerce', category: 'E-commerce', logo: '👜' },
        { name: 'Salesforce Commerce', category: 'CRM', logo: '🏢' },
        { name: 'BigCommerce', category: 'E-commerce', logo: '💼' },
        { name: 'Mailchimp', category: 'Marketing', logo: '💌' },
        { name: 'Klaviyo', category: 'Marketing', logo: '📧' },
        { name: 'Google Analytics', category: 'Analytics', logo: '📊' },
        { name: 'Facebook Ads', category: 'Advertising', logo: '📱' },
        { name: 'Zendesk', category: 'Support', logo: '🎫' },
        { name: 'Stripe', category: 'Payments', logo: '💳' },
        { name: 'HubSpot', category: 'CRM', logo: '📈' },
        { name: 'Segment', category: 'Data', logo: '🔗' },
        { name: 'Google Tag Manager', category: 'Analytics', logo: '🏷️' },
        { name: 'SAP Commerce', category: 'ERP', logo: '🔗' },
        { name: 'Oracle NetSuite', category: 'ERP', logo: '🧮' },
    ];

    const channels = [
        { name: 'Website', icon: Globe, description: 'Dynamic recommendations on your storefront' },
        { name: 'Mobile App', icon: Smartphone, description: 'Personalized suggestions for mobile shoppers' },
        { name: 'Email Campaigns', icon: Mail, description: 'Send relevant offers and picks via email' },
        { name: 'In-Store Kiosk', icon: Database, description: 'AI-optimized recommendations in physical locations' }
    ];

    const benefits = [
        {
            title: 'Increase Sales',
            description: 'Lift your average order value and conversions with precise, timely recommendations.',
            percentage: '32%',
            metric: 'conversion boost'
        },
        {
            title: 'Enhance Engagement',
            description: 'Keep shoppers coming back with hyper-personalized product discovery.',
            percentage: '2.5x',
            metric: 'repeat visits'
        },
        {
            title: 'Boost Satisfaction',
            description: 'Delight customers with relevant, thoughtful suggestions—every time.',
            percentage: '95%',
            metric: 'satisfaction'
        },
        {
            title: 'Reduce Churn',
            description: 'Retain more customers by anticipating and fulfilling their needs proactively.',
            percentage: '28%',
            metric: 'churn reduction'
        },
        {
            title: 'Maximize ROI',
            description: 'Turn every interaction into revenue with AI-optimized recommendations.',
            percentage: '6x',
            metric: 'marketing ROI'
        }
    ];

    const isInView = (sectionId: string) => visibleSections.has(sectionId);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
            <NavbarDemo />
            {/* Hero Section */}
            <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-16 sm:py-20 lg:py-32">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
                <div
                    className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
                    style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                ></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
                    style={{ transform: `translateY(${scrollY * -0.1}px)`, animationDelay: '1s' }}
                ></div>
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${3 + Math.random() * 4}s`
                            }}
                        ></div>
                    ))}
                </div>
                <div className={`w-full max-w-7xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300 hover:border-slate-600/50 transition-all duration-300">
                        <Gift className="w-4 h-4 mr-2 text-blue-400 animate-pulse" />
                        AI-Powered Product Recommendations
                        <div className="ml-2 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight">
                        Product Recommendation
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent animate-glow">
                            AI Agent
                        </span>
                    </h1>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
                        Boost sales and customer satisfaction with real-time, AI-powered product recommendations—personalized for every shopper, on every channel.
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 mb-16">
                        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-2">
                            Create Agent
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white font-semibold rounded-2xl hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-2">
                            <Play className="w-4 h-4" />
                            Watch Demo
                        </button>
                    </div>
                    <div className="relative max-w-5xl mx-auto">
                        <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 group">
                            <div className="flex items-center justify-between mb-6 p-4 bg-slate-800/40 rounded-2xl">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                                            <Gift className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Product Recommendation AI Agent</h3>
                                        <div className="text-slate-400 text-sm flex items-center gap-2">
                                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                                            Online • Recommending instantly
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-right">
                                        <div className="text-sm font-medium text-emerald-400">97%</div>
                                        <div className="text-xs text-slate-400">Personalization</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-medium text-blue-400">&lt; 1s</div>
                                        <div className="text-xs text-slate-400">Avg Response</div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4 mb-6">
                                <div className="flex gap-3 animate-slideInLeft">
                                    <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                                        <ShoppingCart className="w-4 h-4 text-slate-300" />
                                    </div>
                                    <div className="bg-slate-800/50 rounded-2xl p-3 flex-1 max-w-xs">
                                        <span className="text-sm">Looking for wireless headphones under $100 with noise cancellation.</span>
                                        <span className="text-xs text-slate-400 mt-1 block">1:22 PM</span>
                                    </div>
                                </div>
                                <div className="flex gap-3 justify-end animate-slideInRight" style={{ animationDelay: '0.5s' }}>
                                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-3 max-w-sm">
                                        <span className="text-sm">Recommended: SoundPro X2 ($89) — Best value, 4.7★, active noise canceling. Also, AeroPods Lite ($99), trending for quality and comfort.</span>
                                        <span className="text-xs text-blue-100 mt-1 block">1:22 PM</span>
                                    </div>
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                        <Gift className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className="flex gap-3 animate-slideInLeft" style={{ animationDelay: '1s' }}>
                                    <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                                        <Users className="w-4 h-4 text-slate-300" />
                                    </div>
                                    <div className="bg-slate-800/50 rounded-2xl p-3 flex-1 max-w-xs">
                                        <span className="text-sm">Any discounts on these?</span>
                                        <span className="text-xs text-slate-400 mt-1 block">1:23 PM</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 justify-end">
                                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-3 border border-blue-500/30">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                        <span className="text-xs text-blue-300">AI is searching deals...</span>
                                    </div>
                                </div>
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                    <Gift className="w-4 h-4 text-white" />
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
                            From discovery to delight in
                            <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent"> seconds</span>
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
                            <ShoppingCart className="w-4 h-4 mr-2 text-emerald-400" />
                            Key Features
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mx-auto mb-6 sm:mb-8 leading-tight px-4">
                            Everything you need for
                            <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent"> smart product recommendations</span>
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
                            Supported Channels
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mx-auto mb-6 sm:mb-8 leading-tight px-4">
                            Recommendations everywhere your
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent"> customers shop</span>
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
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                            Business Value
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mx-auto mb-6 sm:mb-8 leading-tight px-4">
                            Drive revenue and loyalty with
                            <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent"> every recommendation</span>
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
                            <Brain className="w-4 h-4 mr-2 text-purple-400" />
                            AI Capabilities
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mx-auto mb-6 sm:mb-8 leading-tight px-4">
                            Advanced AI for
                            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"> product discovery</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className={`relative transform transition-all duration-1000 ${isInView('capabilities') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <div className="relative w-80 h-80 mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                                <div className="relative w-full h-full bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-full border border-slate-600/50 backdrop-blur-sm flex items-center justify-center">
                                    <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                                        <Brain className="w-16 h-16 text-white animate-pulse" />
                                    </div>
                                </div>
                                {[
                                    { label: 'Personalization', angle: 0, color: 'from-blue-500 to-cyan-500' },
                                    { label: 'Segmentation', angle: 60, color: 'from-emerald-500 to-teal-500' },
                                    { label: 'A/B Test', angle: 120, color: 'from-orange-500 to-red-500' },
                                    { label: 'Analytics', angle: 180, color: 'from-purple-500 to-pink-500' },
                                    { label: 'Explainable', angle: 240, color: 'from-yellow-500 to-orange-500' },
                                    { label: 'APIs', angle: 300, color: 'from-indigo-500 to-purple-500' }
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
                        <div className={`space-y-8 transform transition-all duration-1000 ${isInView('capabilities') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            {[
                                {
                                    title: 'Personalization Engine',
                                    description: 'Learns from every click, view, and purchase to tailor recommendations for each visitor.',
                                    icon: Heart,
                                    color: 'from-blue-500 to-cyan-500'
                                },
                                {
                                    title: 'Behavioral Segmentation',
                                    description: 'Segment users automatically for targeted offers and recommendations.',
                                    icon: Users,
                                    color: 'from-purple-500 to-pink-500'
                                },
                                {
                                    title: 'Context-Aware Suggestions',
                                    description: 'Takes into account time, location, and user journey to boost conversion.',
                                    icon: Filter,
                                    color: 'from-emerald-500 to-teal-500'
                                },
                                {
                                    title: 'A/B Testing & Analytics',
                                    description: 'Measure and optimize recommendation impact with built-in analytics.',
                                    icon: BarChart3,
                                    color: 'from-orange-500 to-red-500'
                                },
                                {
                                    title: 'Explainable AI',
                                    description: 'Show shoppers why a product was recommended to build trust and engagement.',
                                    icon: List,
                                    color: 'from-indigo-500 to-purple-500'
                                },
                                {
                                    title: 'Multi-Channel API',
                                    description: 'Integrate recommendations anywhere using robust, fast, and secure APIs.',
                                    icon: Database,
                                    color: 'from-pink-500 to-rose-500'
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
                            Ready to Grow?
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                            Start delivering smarter
                            <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent"> recommendations today</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 leading-relaxed">
                            Join top e-commerce brands using AI to boost sales, loyalty, and customer happiness. Try our Product Recommendation AI Agent for free and see the difference.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-slate-700/50">
                            {[
                                { label: 'Enterprise Grade', value: 'SOC 2 Certified' },
                                { label: 'Quick Setup', value: '< 5 Minutes' },
                                { label: 'Free Trial', value: '14 Days' },
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