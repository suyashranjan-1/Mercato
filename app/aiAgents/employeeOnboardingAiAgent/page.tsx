"use client";
import { useState, useEffect, useRef } from 'react';
import { UserPlus, Clock, Users, Star, CheckCircle, ArrowRight, Bot, Database, Shield, Zap, BarChart3, Globe, Play, ChevronRight, Brain, Cpu, Settings, Mail, Smartphone, FileText, CalendarCheck2, BookOpen, MessageCircle, Briefcase, FileBadge2 } from 'lucide-react';
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


export default function EmployeeOnboardingAIAgent() {
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

    // Stats for Employee Onboarding Agent
    const stats = [
        { label: 'Avg Onboarding Time', value: '3 days', icon: Clock, color: 'from-blue-500 to-cyan-500' },
        { label: 'New Hire Satisfaction', value: '97%', icon: Star, color: 'from-yellow-500 to-orange-500' },
        { label: 'Task Completion Rate', value: '99%', icon: CheckCircle, color: 'from-emerald-500 to-teal-500' },
        { label: 'Compliance Accuracy', value: '100%', icon: Shield, color: 'from-purple-500 to-pink-500' },
    ];

    // Features for Employee Onboarding Agent
    const features = [
        {
            title: 'Automated Onboarding Journeys',
            description: 'Personalized onboarding workflows auto-assigned based on role, department, and location.',
            icon: UserPlus,
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Document Management',
            description: 'Secure upload, signature, and verification of contracts, NDAs, and policy acknowledgments.',
            icon: FileText,
            gradient: 'from-yellow-500 to-orange-500'
        },
        {
            title: 'Policy & Training Tracker',
            description: 'Ensures employees complete essential compliance, security, and company culture trainings.',
            icon: BookOpen,
            gradient: 'from-emerald-500 to-teal-500'
        },
        {
            title: 'AI-Powered Knowledge Base',
            description: 'Answers new hire questions on benefits, payroll, tools, and company policies 24/7.',
            icon: Brain,
            gradient: 'from-orange-500 to-red-500'
        },
        {
            title: 'Smart Task Automation',
            description: 'Automatically assigns tasks, reminders, and connects new hires with managers and buddies.',
            icon: CalendarCheck2,
            gradient: 'from-indigo-500 to-purple-500'
        },
        {
            title: 'HRIS & Payroll Integration',
            description: 'Seamless sync with HR systems, payroll, and IT for account provisioning and benefits enrollment.',
            icon: Database,
            gradient: 'from-pink-500 to-rose-500'
        },
        {
            title: 'Progress Analytics',
            description: 'Real-time dashboards for HR and managers to track onboarding completion and engagement.',
            icon: BarChart3,
            gradient: 'from-rose-500 to-pink-500'
        },
        {
            title: 'Employee Feedback Loops',
            description: 'Collects feedback at each step, enabling continuous improvement of the onboarding experience.',
            icon: MessageCircle,
            gradient: 'from-amber-500 to-orange-500'
        }
    ];

    // How it works for onboarding
    const howItWorks = [
        {
            step: 1,
            title: 'Preboarding',
            description: 'Employee receives welcome email, e-signs documents, and gets access to the onboarding portal.',
            icon: Mail,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            step: 2,
            title: 'Personalized Workflow',
            description: 'AI assigns tasks, training, and resources based on the new hire’s role and location.',
            icon: Cpu,
            color: 'from-purple-500 to-pink-500'
        },
        {
            step: 3,
            title: 'Knowledge Support',
            description: '24/7 AI assistant answers questions, tracks progress, and ensures compliance training.',
            icon: Brain,
            color: 'from-emerald-500 to-teal-500'
        },
        {
            step: 4,
            title: 'Integration & Feedback',
            description: 'Agent syncs with HRIS/payroll; collects feedback to refine and improve onboarding programs.',
            icon: BarChart3,
            color: 'from-orange-500 to-red-500'
        }
    ];

    // Integration platforms for onboarding
    const integrations = [
        { name: 'Workday', category: 'HRIS', logo: '👔' },
        { name: 'BambooHR', category: 'HRIS', logo: '🎋' },
        { name: 'SAP SuccessFactors', category: 'HRIS', logo: '💼' },
        { name: 'ADP', category: 'Payroll', logo: '💳' },
        { name: 'Gusto', category: 'Payroll', logo: '🧾' },
        { name: 'Slack', category: 'Communication', logo: '💬' },
        { name: 'Microsoft Teams', category: 'Communication', logo: '👥' },
        { name: 'DocuSign', category: 'E-Signature', logo: '🖊️' },
        { name: 'Google Workspace', category: 'Productivity', logo: '📎' },
        { name: 'Okta', category: 'SSO/IT', logo: '🔐' },
        { name: 'Jira', category: 'Task Management', logo: '📋' },
        { name: 'Zendesk', category: 'Support', logo: '🎫' },
        { name: 'Asana', category: 'Project', logo: '📌' },
        { name: 'Notion', category: 'Knowledge', logo: '📚' },
        { name: 'Rippling', category: 'HRIS/Payroll', logo: '🏢' },
        { name: 'Greenhouse', category: 'ATS', logo: '🌱' },
    ];

    // Communication channels for onboarding
    const channels = [
        { name: 'Web Portal', icon: Globe, description: 'Centralized onboarding hub for new hires' },
        { name: 'Email', icon: Mail, description: 'Automated welcome and task reminders' },
        { name: 'Mobile App', icon: Smartphone, description: 'Onboarding and support on any device' },
        { name: 'HR Chatbot', icon: Bot, description: 'AI assistant for instant answers and guidance' }
    ];

    // Benefits for onboarding
    const benefits = [
        {
            title: 'Accelerate Productivity',
            description: 'Reduce ramp-up time for new hires with guided onboarding and instant access to essential tools.',
            percentage: '50%',
            metric: 'faster productivity'
        },
        {
            title: 'Boost Retention',
            description: 'Engage employees from day one and reduce early attrition with a personalized onboarding experience.',
            percentage: '30%',
            metric: 'higher retention'
        },
        {
            title: 'Ensure Compliance',
            description: 'Automate policy acknowledgment, training, and documentation for 100% regulatory compliance.',
            percentage: '100%',
            metric: 'compliance rate'
        },
        {
            title: 'Streamline HR Workload',
            description: 'Eliminate manual tasks and paperwork, freeing HR to focus on people, not process.',
            percentage: '85%',
            metric: 'less admin time'
        },
        {
            title: 'Enhance Engagement',
            description: 'Deliver a memorable onboarding with company culture, welcome videos, and feedback loops.',
            percentage: '40%',
            metric: 'increase in engagement'
        }
    ];

    const isInView = (sectionId: string) => visibleSections.has(sectionId);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
            <NavbarDemo />
            {/* Hero Section */}
            <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-16 sm:py-20 lg:py-32">
                {/* Animated Background */}
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
                        <UserPlus className="w-4 h-4 mr-2 text-blue-400 animate-pulse" />
                        AI-Powered Employee Onboarding
                        <div className="ml-2 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight">
                        Employee
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent animate-glow">
                            Onboarding AI Agent
                        </span>
                    </h1>

                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
                        Welcome new hires with <span className="text-white font-medium">AI-driven onboarding</span>. Automate paperwork, training, and HR tasks—while delivering a seamless, engaging experience across all devices.
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
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                                            <UserPlus className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Onboarding AI Agent</h3>
                                        <div className="text-slate-400 text-sm flex items-center gap-2">
                                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                                            Guiding new hires instantly
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-right">
                                        <div className="text-sm font-medium text-emerald-400">97%</div>
                                        <div className="text-xs text-slate-400">Satisfaction</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-medium text-blue-400">3 days</div>
                                        <div className="text-xs text-slate-400">Avg Onboard</div>
                                    </div>
                                </div>
                            </div>

                            {/* Chat/Onboarding Preview */}
                            <div className="space-y-4 mb-6">
                                <div className="flex gap-3 animate-slideInLeft">
                                    <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                                        <Users className="w-4 h-4 text-slate-300" />
                                    </div>
                                    <div className="bg-slate-800/50 rounded-2xl p-3 flex-1 max-w-xs">
                                        <span className="text-sm">Hi! I received my offer letter. What are the next steps for joining?</span>
                                        <span className="text-xs text-slate-400 mt-1 block">9:15 AM</span>
                                    </div>
                                </div>

                                <div className="flex gap-3 justify-end animate-slideInRight" style={{ animationDelay: '0.5s' }}>
                                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-3 max-w-sm">
                                        <span className="text-sm">Welcome aboard! Please review and e-sign your documents. Next, complete your profile and begin your tailored onboarding journey. I’ll guide you at every step!</span>
                                        <span className="text-xs text-blue-100 mt-1 block">9:15 AM</span>
                                    </div>
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                        <UserPlus className="w-4 h-4 text-white" />
                                    </div>
                                </div>

                                <div className="flex gap-3 animate-slideInLeft" style={{ animationDelay: '1s' }}>
                                    <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                                        <Users className="w-4 h-4 text-slate-300" />
                                    </div>
                                    <div className="bg-slate-800/50 rounded-2xl p-3 flex-1 max-w-xs">
                                        <span className="text-sm">Thanks! How do I access my training modules?</span>
                                        <span className="text-xs text-slate-400 mt-1 block">9:17 AM</span>
                                    </div>
                                </div>
                            </div>

                            {/* Typing Indicator */}
                            <div className="flex gap-3 justify-end">
                                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-3 border border-blue-500/30">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                        <span className="text-xs text-blue-300">AI is typing...</span>
                                    </div>
                                </div>
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                    <UserPlus className="w-4 h-4 text-white" />
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
                            From acceptance to productivity in
                            <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent"> days</span>
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
                            Key Features
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mx-auto mb-6 sm:mb-8 leading-tight px-4">
                            Everything you need for
                            <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent"> world-class onboarding</span>
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
                            Connect with your
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent"> onboarding ecosystem</span>
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

                    {/* Integration Platforms Grid */}
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
                            Business Outcomes
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mx-auto mb-6 sm:mb-8 leading-tight px-4">
                            Transform onboarding for
                            <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent"> every employee</span>
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
                            Smarter onboarding with
                            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"> next-gen AI</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* AI Brain Visualization */}
                        <div className={`relative transform transition-all duration-1000 ${isInView('capabilities') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <div className="relative">
                                <div className="relative w-80 h-80 mx-auto">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
                                    <div className="relative w-full h-full bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-full border border-slate-600/50 backdrop-blur-sm flex items-center justify-center">
                                        <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                                            <Brain className="w-16 h-16 text-white animate-pulse" />
                                        </div>
                                    </div>
                                    {[
                                        { label: 'Automation', angle: 0, color: 'from-blue-500 to-cyan-500' },
                                        { label: 'Knowledge', angle: 60, color: 'from-emerald-500 to-teal-500' },
                                        { label: 'Compliance', angle: 120, color: 'from-orange-500 to-red-500' },
                                        { label: 'Integration', angle: 180, color: 'from-purple-500 to-pink-500' },
                                        { label: 'Feedback', angle: 240, color: 'from-yellow-500 to-orange-500' },
                                        { label: 'Security', angle: 300, color: 'from-indigo-500 to-purple-500' }
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
                                    title: 'Automated Document Flow',
                                    description: 'AI guides new hires through e-signatures, policy reviews, and document collection.',
                                    icon: FileText,
                                    color: 'from-blue-500 to-cyan-500'
                                },
                                {
                                    title: 'Personalized Knowledge Support',
                                    description: '24/7 answers to FAQs, company culture, and HR policies in natural language.',
                                    icon: Brain,
                                    color: 'from-purple-500 to-pink-500'
                                },
                                {
                                    title: 'Compliance & Security Automation',
                                    description: 'Ensures all legal, policy, and IT requirements are completed and securely stored.',
                                    icon: Shield,
                                    color: 'from-emerald-500 to-teal-500'
                                },
                                {
                                    title: 'Seamless System Integration',
                                    description: 'Connects to HRIS, payroll, IT, and communication tools via robust APIs.',
                                    icon: Database,
                                    color: 'from-orange-500 to-red-500'
                                },
                                {
                                    title: 'Continuous Feedback',
                                    description: 'Collects feedback at every step and adapts onboarding journeys for improvement.',
                                    icon: MessageCircle,
                                    color: 'from-indigo-500 to-purple-500'
                                },
                                {
                                    title: 'Role-Based Task Automation',
                                    description: 'Dynamic workflows and checklists for each job function and location.',
                                    icon: Briefcase,
                                    color: 'from-cyan-500 to-blue-500'
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
                            Ready to Redefine Onboarding?
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                            Empower every new hire with
                            <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent"> seamless onboarding</span>
                        </h2>

                        <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 leading-relaxed">
                            Discover how our AI-powered agent transforms onboarding for HR, IT, and every employee. Contact us for a personalized demo or to get started!
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-slate-700/50">
                            {[
                                { label: 'Enterprise Security', value: 'SOC 2 & GDPR' },
                                { label: 'Setup Time', value: '< 4 Day' },
                                { label: 'Integrations', value: 'HRIS, Payroll, IT' },
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