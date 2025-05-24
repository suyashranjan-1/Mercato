"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Check, Star, Globe, Zap, Shield, Users, Bot, Cpu, Code, Database, Menu, X } from 'lucide-react';
import { NavbarDemo } from "@/components/navbar";

const CustomAIAgentPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState(-1);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        setIsVisible(true);

        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const industries = [
        {
            title: "Healthcare",
            icon: "🏥",
            description: "AI agents for patient care, appointment scheduling, and medical data processing",
            features: ["Patient Support", "Medical Records", "Appointment Management", "Insurance Processing"]
        },
        {
            title: "E-commerce",
            icon: "🛒",
            description: "Customer service agents, inventory management, and personalized shopping experiences",
            features: ["Customer Support", "Order Processing", "Inventory Management", "Product Recommendations"]
        },
        {
            title: "Finance",
            icon: "💰",
            description: "Fraud detection, risk assessment, and automated financial advisory services",
            features: ["Fraud Detection", "Risk Analysis", "Customer Service", "Compliance Monitoring"]
        },
        {
            title: "Education",
            icon: "🎓",
            description: "Personalized tutoring, administrative tasks, and student support systems",
            features: ["Student Tutoring", "Admin Automation", "Progress Tracking", "Content Creation"]
        },
        {
            title: "Real Estate",
            icon: "🏠",
            description: "Property management, client screening, and market analysis automation",
            features: ["Property Management", "Client Screening", "Market Analysis", "Lead Generation"]
        },
        {
            title: "Manufacturing",
            icon: "🏭",
            description: "Quality control, predictive maintenance, and supply chain optimization",
            features: ["Quality Control", "Maintenance Prediction", "Supply Chain", "Safety Monitoring"]
        }
    ];

    const capabilities = [
        {
            icon: <Bot className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Natural Language Processing",
            description: "Advanced conversational AI that understands context and intent"
        },
        {
            icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Machine Learning Models",
            description: "Custom-trained models specific to your business domain"
        },
        {
            icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Data Integration",
            description: "Seamless integration with existing databases and systems"
        },
        {
            icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Enterprise Security",
            description: "Bank-grade security with end-to-end encryption"
        },
        {
            icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Multi-language Support",
            description: "Support for 100+ languages and regional dialects"
        },
        {
            icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Real-time Processing",
            description: "Lightning-fast response times with edge computing"
        }
    ];


    // Review the testimonials

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CTO, MedTech Solutions",
            company: "Healthcare",
            rating: 5,
            text: "The custom AI agent reduced our patient response time by 80% and improved satisfaction scores significantly."
        },
        {
            name: "Michael Chen",
            role: "Operations Director",
            company: "E-commerce",
            rating: 5,
            text: "Our custom shopping assistant increased conversion rates by 35% and handles 90% of customer inquiries automatically."
        },
        {
            name: "Emma Rodriguez",
            role: "VP of Customer Success",
            company: "Financial Services",
            rating: 5,
            text: "The fraud detection agent has prevented millions in losses while maintaining seamless customer experience."
        }
    ];

    const faqs = [
        {
            question: "How long does it take to develop a custom AI agent?",
            answer: "Development time varies based on complexity, but most custom AI agents are delivered within 2-8 weeks. We start with a detailed requirements analysis and provide regular updates throughout the development process."
        },
        {
            question: "Can the AI agent integrate with our existing systems?",
            answer: "Yes, our AI agents are designed to integrate seamlessly with virtually any existing system through APIs, webhooks, and direct database connections. We support all major platforms and can create custom integrations as needed."
        },
        {
            question: "What kind of training data do you need?",
            answer: "We work with various types of data including historical customer interactions, documents, FAQs, and business processes. Our team helps identify and prepare the optimal training data for your specific use case."
        },
        {
            question: "How do you ensure the AI agent maintains quality over time?",
            answer: "We implement continuous learning mechanisms, regular performance monitoring, and feedback loops. Our agents improve over time through usage patterns and can be updated with new training data as your business evolves."
        },
        {
            question: "What support do you provide after deployment?",
            answer: "We provide comprehensive support including 24/7 monitoring, regular performance reports, ongoing optimization, and dedicated customer success management. Training and documentation are also included."
        }
    ];

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
            <NavbarDemo />

            {/* Hero Section */}
            <section className="relative pt-20 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
                <div
                    className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
                    style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                ></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
                    style={{ transform: `translateY(${scrollY * -0.1}px)`, animationDelay: '1s' }}
                ></div>

                <div className={`max-w-7xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                        Custom AI Solutions
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight px-2">
                        Custom AI Solutions To Meet<br className="hidden sm:block" />
                        Your <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Unique Business</span> Needs
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 sm:px-0">
                        Every business is unique, and so are its challenges. Our custom AI agents are designed specifically
                        for your industry, workflows, and objectives. From concept to deployment, we create intelligent
                        solutions that transform how you operate.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4 sm:px-0">
                        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl sm:rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                            Start Your Custom Project
                        </button>
                        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white font-semibold rounded-xl sm:rounded-2xl hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 text-sm sm:text-base">
                            View Case Studies
                        </button>
                    </div>
                </div>

                {/* Hero Visualization */}
                <div className={`w-full max-w-6xl mx-auto mt-8 sm:mt-12 lg:mt-16 relative z-10 transition-all duration-1000 delay-300 px-4 sm:px-6 lg:px-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/20 border border-slate-800/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10"></div>
                        <div className="p-4 sm:p-6 lg:p-8 h-full flex items-center justify-center">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-4xl">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className={`bg-slate-800/60 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 transform transition-all duration-1000 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${i * 200}ms` }}>
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg sm:rounded-xl mb-3 sm:mb-4 flex items-center justify-center">
                                            <Bot className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                                        </div>
                                        <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">AI Agent {i}</h3>
                                        <p className="text-slate-400 text-xs sm:text-sm">Custom solution for your specific business needs</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* One Conclusive Hub Section */}
            <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
                            One conclusive hub for task execution.<br className="hidden sm:block" />
                            Built on <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">AI</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
                            Our platform serves as the central command center for all your AI agents. Monitor performance,
                            manage workflows, and optimize operations from a single, intuitive dashboard.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {capabilities.map((capability, index) => (
                            <div key={index} className={`p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-500 group transform hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                                <div className="text-blue-400 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {capability.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                                    {capability.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                                    {capability.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900/50 to-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 sm:mb-20">
                        <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                            Industries
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-6xl mx-auto mb-6 sm:mb-8 leading-tight">
                            Automating tasks,<br className="hidden sm:block" />
                            one <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">industry</span> at a time
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
                            From healthcare to finance, our custom AI agents are transforming businesses across every sector.
                            Each solution is tailored to meet the unique challenges and opportunities of your industry.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {industries.map((industry, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-500 transform hover:scale-105">
                                    <div className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {industry.icon}
                                    </div>
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white">
                                        {industry.title}
                                    </h3>
                                    <p className="text-slate-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                                        {industry.description}
                                    </p>
                                    <div className="space-y-2">
                                        {industry.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center">
                                                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 mr-2 sm:mr-3 flex-shrink-0" />
                                                <span className="text-slate-300 text-xs sm:text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 sm:mb-20">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
                            Do twice the work in half<br className="hidden sm:block" />
                            the time with <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">AI agents</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 sm:px-0">
                            Our custom AI agents don't just automate tasks—they intelligently optimize your entire workflow,
                            learning from your processes and continuously improving performance.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-20">
                        {[
                            { stat: "< 1min", label: "Average Response Time", icon: "⚡" },
                            { stat: "85%", label: "Cost Reduction", icon: "💰" },
                            { stat: "24/7", label: "Availability", icon: "🌟" },
                            { stat: "99.9%", label: "Accuracy Rate", icon: "🎯" }
                        ].map((item, index) => (
                            <div key={index} className="p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 text-center hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-300 group">
                                <div className="text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                                    {item.stat}
                                </div>
                                <div className="text-slate-400 text-xs sm:text-sm lg:text-base">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                                Reduce cost. Improve lead times. Fast.
                            </h3>
                            <div className="space-y-4 sm:space-y-6">
                                {[
                                    "Automate repetitive tasks and free up your team for strategic work",
                                    "Reduce operational costs by up to 85% with intelligent automation",
                                    "Scale operations instantly without hiring additional staff",
                                    "Improve accuracy and eliminate human errors in critical processes"
                                ].map((benefit, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-emerald-400 to-blue-600 flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                                            <Check className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                                        </div>
                                        <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                                            {benefit}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center">
                                <div className="text-center p-4 sm:p-6">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex items-center justify-center mx-auto">
                                        <Bot className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                                    </div>
                                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Custom AI Agent</h4>
                                    <p className="text-slate-400 text-sm sm:text-base">Tailored specifically for your business needs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="relative py-32 px-4 bg-gradient-to-r from-slate-900/30 to-slate-800/20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                            Customize <span className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">AI agents</span> to your needs
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                            See how businesses across industries have transformed their operations with custom AI solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="p-8 rounded-3xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-300">
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-slate-300 mb-6 leading-relaxed">
                                    "{testimonial.text}"
                                </p>
                                <div>
                                    <div className="font-semibold text-white">{testimonial.name}</div>
                                    <div className="text-slate-400 text-sm">{testimonial.role}</div>
                                    <div className="text-slate-500 text-sm">{testimonial.company}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center px-6 py-2 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                        Get Started Today
                    </div>

                    <h2 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                        Tailor-made <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">AI agent</span><br />
                        solutions? Say no more.
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
                        Ready to transform your business with a custom AI solution? Our team of experts will work
                        with you to design, develop, and deploy the perfect AI agent for your unique needs.
                    </p>

                    <button className="px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 text-lg">
                        Start Your Custom Project
                    </button>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative py-32 px-4 bg-gradient-to-r from-slate-900/30 to-slate-800/20">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                            Frequently Asked <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Questions</span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-slate-700/50 rounded-2xl bg-slate-800/30 backdrop-blur-sm hover:border-slate-600/50 transition-all duration-300">
                                <button
                                    className="w-full p-8 text-left flex items-center justify-between"
                                    onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                                >
                                    <h3 className="text-xl font-semibold text-white pr-8">
                                        {faq.question}
                                    </h3>
                                    <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${activeTab === index ? 'rotate-180' : ''}`} />
                                </button>
                                {activeTab === index && (
                                    <div className="px-8 pb-8">
                                        <p className="text-slate-400 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CustomAIAgentPage;