"use client";
import { useState, useEffect, useRef } from 'react';
import { Mailbox, Clock, Tags, Star, CheckCircle, ArrowRight, Bot, Shield, Zap, BarChart3, Globe, Play, ChevronRight, Brain, Cpu, Database, Settings, Mail, Inbox, Filter, AlertCircle, Bookmark, Folder, LayoutDashboard } from 'lucide-react';
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


export default function EmailCategorizationTriageAiAgent() {
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
        { label: 'Emails Processed/Hour', value: '10K+', icon: Mailbox, color: 'from-blue-500 to-cyan-500' },
        { label: 'Categorization Accuracy', value: '99%', icon: Star, color: 'from-yellow-500 to-orange-500' },
        { label: 'Processing Time Saved', value: '85%', icon: CheckCircle, color: 'from-emerald-500 to-teal-500' },
        { label: 'Reduced Manual Work', value: '75%', icon: Zap, color: 'from-purple-500 to-pink-500' },
    ];

    const features = [
        {
            title: 'Automatic Tagging',
            description: 'AI-powered categorization of emails into custom categories with contextual understanding',
            icon: Tags,
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Priority Scoring',
            description: 'Intelligent prioritization based on content, sender, and urgency detection',
            icon: AlertCircle,
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Sentiment Analysis',
            description: 'Detect customer tone and urgency level to prioritize responses',
            icon: Brain,
            gradient: 'from-emerald-500 to-teal-500'
        },
        {
            title: 'Data Security',
            description: 'Enterprise-grade encryption with GDPR and HIPAA compliance',
            icon: Shield,
            gradient: 'from-orange-500 to-red-500'
        },
        {
            title: 'Workflow Automation',
            description: 'Auto-route emails to appropriate teams based on content analysis',
            icon: LayoutDashboard,
            gradient: 'from-indigo-500 to-purple-500'
        },
        {
            title: 'Smart Foldering',
            description: 'Automatically organize emails into custom folders and subfolders',
            icon: Folder,
            gradient: 'from-pink-500 to-rose-500'
        },
        {
            title: 'Attachment Analysis',
            description: 'Parse and categorize emails based on attached documents',
            icon: Database,
            gradient: 'from-rose-500 to-pink-500'
        },
        {
            title: 'Template Suggestions',
            description: 'AI-generated response templates based on email category',
            icon: Bookmark,
            gradient: 'from-amber-500 to-orange-500'
        }
    ];

    const howItWorks = [
        {
            step: 1,
            title: 'Email Reception',
            description: 'Emails arrive from various sources and are ingested by the AI system',
            icon: Inbox,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            step: 2,
            title: 'Content Analysis',
            description: 'Natural Language Processing extracts meaning, intent, and context',
            icon: Brain,
            color: 'from-purple-500 to-pink-500'
        },
        {
            step: 3,
            title: 'Categorization',
            description: 'Emails are tagged, prioritized, and routed to appropriate workflows',
            icon: Filter,
            color: 'from-emerald-500 to-teal-500'
        },
        {
            step: 4,
            title: 'Action & Learning',
            description: 'System triggers actions while improving models with each interaction',
            icon: Database,
            color: 'from-orange-500 to-red-500'
        }
    ];

    const integrations = [
        { name: 'Gmail', category: 'Email', logo: '📧' },
        { name: 'Microsoft Outlook', category: 'Email', logo: '📨' },
        { name: 'Zendesk', category: 'Support', logo: '🎫' },
        { name: 'Salesforce', category: 'CRM', logo: '🏢' },
        { name: 'HubSpot', category: 'CRM', logo: '📈' },
        { name: 'Slack', category: 'Communication', logo: '💬' },
        { name: 'Microsoft Teams', category: 'Communication', logo: '👥' },
        { name: 'Freshdesk', category: 'Support', logo: '🆘' },
        { name: 'ServiceNow', category: 'ITSM', logo: '🖥️' },
        { name: 'Jira', category: 'Project Mgmt', logo: '📋' },
        { name: 'G Suite', category: 'Productivity', logo: '📎' },
        { name: 'Office 365', category: 'Productivity', logo: '💼' },
        { name: 'AWS SES', category: 'Email', logo: '☁️' },
        { name: 'SendGrid', category: 'Email', logo: '📤' },
        { name: 'Mailchimp', category: 'Marketing', logo: '✉️' },
        { name: 'Intercom', category: 'Support', logo: '🔔' },
    ];

    const channels = [
        { name: 'Enterprise Email', icon: Mail, description: 'Process company-wide email traffic' },
        { name: 'Support Inboxes', icon: Inbox, description: 'Manage multiple support addresses' },
        { name: 'CRM Integration', icon: LayoutDashboard, description: 'Direct integration with CRM systems' },
        { name: 'API Access', icon: Database, description: 'Custom integration endpoints' }
    ];

    const benefits = [
        {
            title: 'Reduce Processing Time',
            description: 'Automatically sort and prioritize emails instantly',
            percentage: '90%',
            metric: 'faster triage'
        },
        {
            title: 'Improve Organization',
            description: 'Consistent categorization across all incoming emails',
            percentage: '95%',
            metric: 'accuracy rate'
        },
        {
            title: 'Increase Efficiency',
            description: 'Focus human effort on high-priority communications',
            percentage: '70%',
            metric: 'productivity boost'
        },
        {
            title: 'Scale Operations',
            description: 'Handle unlimited email volume without additional staff',
            percentage: '∞',
            metric: 'scalability'
        },
        {
            title: 'Reduce Errors',
            description: 'Minimize manual sorting mistakes and oversights',
            percentage: '80%',
            metric: 'error reduction'
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
                        AI-Powered Email Management
                        <div className="ml-2 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight">
                        Email Categorization
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent animate-glow">
                            & Triage AI
                        </span>
                    </h1>

                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
                        Automatically sort, prioritize, and route emails with AI that understands context and intent. 
                        Transform your inbox management with enterprise-grade email intelligence.
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

                    {/* AI Email Processing Preview */}
                    <div className="relative max-w-5xl mx-auto">
                        <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 group">
                            <div className="flex items-center justify-between mb-6 p-4 bg-slate-800/40 rounded-2xl">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                                            <Bot className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Email Triage AI Agent</h3>
                                        <div className="text-slate-400 text-sm flex items-center gap-2">
                                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                                            Processing 1,234 emails/min
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-right">
                                        <div className="text-sm font-medium text-emerald-400">99.2%</div>
                                        <div className="text-xs text-slate-400">Accuracy</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-medium text-blue-400">85ms</div>
                                        <div className="text-xs text-slate-400">Avg Process</div>
                                    </div>
                                </div>
                            </div>

                            {/* Email Processing Interface */}
                            <div className="space-y-4 mb-6">
                                <div className="flex gap-3 animate-slideInLeft">
                                    <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                                        <Mail className="w-4 h-4 text-slate-300" />
                                    </div>
                                    <div className="bg-slate-800/50 rounded-2xl p-3 flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium">Urgent: Invoice Overdue</span>
                                            <span className="text-xs text-slate-400">2:34 PM</span>
                                        </div>
                                        <div className="text-sm text-slate-300">From: billing@company.com • Category: Finance • Priority: High</div>
                                    </div>
                                </div>
                                
                                <div className="flex gap-3 justify-end animate-slideInRight" style={{ animationDelay: '0.5s' }}>
                                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-3 max-w-sm">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Tags className="w-4 h-4" />
                                            <span className="text-sm font-medium">Automated Actions:</span>
                                        </div>
                                        <div className="text-sm">
                                            • Routed to Accounting Team<br/>
                                            • Priority: Critical<br/>
                                            • Response Template Generated<br/>
                                            • SLA Timer Started
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                        <Bot className="w-4 h-4 text-white" />
                                    </div>
                                </div>

                                <div className="flex gap-3 animate-slideInLeft" style={{ animationDelay: '1s' }}>
                                    <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                                        <Mail className="w-4 h-4 text-slate-300" />
                                    </div>
                                    <div className="bg-slate-800/50 rounded-2xl p-3 flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium">Feature Request</span>
                                            <span className="text-xs text-slate-400">2:35 PM</span>
                                        </div>
                                        <div className="text-sm text-slate-300">From: user@domain.com • Category: Product • Priority: Medium</div>
                                    </div>
                                </div>
                            </div>

                            {/* Processing Indicator */}
                            <div className="flex gap-3 justify-end">
                                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-3 border border-blue-500/30">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                        <span className="text-xs text-blue-300">Processing 15 new emails...</span>
                                    </div>
                                </div>
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
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
                            Processing Workflow
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mx-auto mb-6 sm:mb-8 leading-tight px-4">
                            Intelligent email processing
                            <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent"> in milliseconds</span>
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
                            Core Features
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mx-auto mb-6 sm:mb-8 leading-tight px-4">
                            Advanced email intelligence
                            <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent"> powered by AI</span>
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
                            Integration Ecosystem
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mx-auto mb-6 sm:mb-8 leading-tight px-4">
                            Connect with your existing
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent"> email stack</span>
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
                            Transform your email management
                            <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent"> instantly</span>
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

            {/* CTA Section */}
            <section id="cta" className="py-16 sm:py-24 lg:py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
                <div className="max-w-4xl mx-auto text-center">
                    <div className={`transform transition-all duration-1000 ${isInView('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
                            <Zap className="w-4 h-4 mr-2 text-emerald-400" />
                            Ready to Transform?
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                            Revolutionize your email workflow
                            <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent"> today</span>
                        </h2>

                        <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 leading-relaxed">
                            Join thousands of teams who&apos;ve transformed their email management with AI.
                            Start processing emails smarter in under 5 minutes.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-slate-700/50">
                            {[
                                { label: 'Enterprise Grade', value: 'SOC 2 Type II' },
                                { label: 'Setup Time', value: '1 to 3 Days' },
                                // { label: 'Free Trial', value: '14 Days' },
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