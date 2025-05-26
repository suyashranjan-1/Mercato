"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Play, Star, Users, Zap, Shield, Clock, Heart, TrendingUp, Award, CheckCircle, ArrowRight, Calendar, FileText, Brain, Layers, Lightbulb, Activity, Database, Lock, Globe, Phone, Mail, MapPin, Target, RefreshCw, HeartHandshake, Building2, UserCheck, DollarSign, BarChart3, Scale, Gavel, BookOpen, Search, AlertTriangle, Home, Calculator, Wrench, MessageSquare, Key, CreditCard, Camera, PhoneCall, Handshake, Presentation, Filter, Bot } from "lucide-react";
import { AgentSlider } from "@/components/AgentSlider";
import { NavbarDemo } from "@/components/navbar";
import Footer from "@/components/Footer";

interface Agent {
    id: number;
    name: string;
    description: string;
    icon: string;
    color: string;
    tags: string[];
    rating: string;
    usage: string;
    speed: string;
}

interface SalesCategory {
    name: string;
    description: string;
    agents: Agent[];
}

// Sales AI agents data
const salesCategory: SalesCategory = {
    "name": "Sales AI Agents",
    "description": "Revolutionary AI agents transforming lead generation, customer qualification, deal closing, and sales pipeline management across businesses and sales teams worldwide.",
    "agents": [
        {
            "id": 11,
            "name": "Lead Qualification AI Agent",
            "description": "Automatically qualify and score leads based on behavior, demographics, and engagement patterns to prioritize sales efforts.",
            "icon": "🎯",
            "color": "from-green-500 to-emerald-600",
            "tags": ["Lead Scoring", "Qualification", "CRM"],
            "rating": "4.9",
            "usage": "19.3k",
            "speed": "Fast"
        },
        {
            "id": 12,
            "name": "Sales Outreach AI Agent",
            "description": "Personalize cold outreach campaigns with intelligent messaging, follow-up sequences, and response tracking.",
            "icon": "📧",
            "color": "from-blue-500 to-cyan-600",
            "tags": ["Outreach", "Email", "Personalization"],
            "rating": "4.8",
            "usage": "16.7k",
            "speed": "Fast"
        },
        {
            "id": 13,
            "name": "Sales Analytics AI Agent",
            "description": "Analyze sales performance, predict revenue trends, and identify optimization opportunities with advanced analytics.",
            "icon": "📊",
            "color": "from-purple-500 to-pink-600",
            "tags": ["Analytics", "Forecasting", "Performance"],
            "rating": "4.8",
            "usage": "13.2k",
            "speed": "Medium"
        },
        {
            "id": 14,
            "name": "Deal Negotiation AI Agent",
            "description": "Assist with deal negotiations by providing pricing insights, competitor analysis, and optimal negotiation strategies.",
            "icon": "🤝",
            "color": "from-orange-500 to-red-600",
            "tags": ["Negotiation", "Pricing", "Strategy"],
            "rating": "4.7",
            "usage": "8.9k",
            "speed": "Fast"
        },
        {
            "id": 66,
            "name": "Customer Experience AI Agent",
            "description": "Monitor and enhance customer interactions to increase retention and improve the buyer journey through sentiment and behavior tracking.",
            "icon": "📈",
            "color": "from-pink-500 to-indigo-600",
            "tags": ["Customer Journey", "Experience", "Retention"],
            "rating": "4.8",
            "usage": "10.9k",
            "speed": "Fast"
        },
        {
            "id": 67,
            "name": "Billing Management AI Agent",
            "description": "Automate invoicing, payment reminders, and billing queries to streamline your financial workflows.",
            "icon": "💳",
            "color": "from-yellow-500 to-orange-500",
            "tags": ["Billing", "Invoices", "Automation"],
            "rating": "4.7",
            "usage": "12.1k",
            "speed": "Medium"
        },
        {
            "id": 68,
            "name": "Procurement Management AI Agent",
            "description": "Optimize procurement decisions, supplier evaluations, and purchase workflows with data-driven intelligence.",
            "icon": "🛒",
            "color": "from-green-400 to-blue-500",
            "tags": ["Procurement", "Suppliers", "Automation"],
            "rating": "4.6",
            "usage": "9.2k",
            "speed": "Medium"
        },
        {
            "id": 69,
            "name": "Supply Chain Monitoring AI Agent",
            "description": "Monitor logistics, detect disruptions, and optimize inventory flow across the entire supply chain.",
            "icon": "🚛",
            "color": "from-sky-500 to-teal-600",
            "tags": ["Supply Chain", "Monitoring", "Logistics"],
            "rating": "4.8",
            "usage": "11.4k",
            "speed": "Fast"
        },
        {
            "id": 70,
            "name": "RFP AI Agent",
            "description": "Automate the creation, analysis, and response to Request for Proposals with intelligent drafting and review tools.",
            "icon": "📄",
            "color": "from-violet-600 to-indigo-700",
            "tags": ["RFP", "Proposal", "Automation"],
            "rating": "4.6",
            "usage": "7.6k",
            "speed": "Fast"
        },
        {
            "id": 71,
            "name": "Order Tracking AI Agent",
            "description": "Provide real-time order updates, shipment status, and notifications for enhanced customer visibility.",
            "icon": "📦",
            "color": "from-yellow-400 to-lime-500",
            "tags": ["Orders", "Tracking", "Notifications"],
            "rating": "4.8",
            "usage": "13.7k",
            "speed": "Fast"
        },
        {
            "id": 72,
            "name": "Return Handling AI Agent",
            "description": "Manage return processes efficiently, including authorization, tracking, and resolution.",
            "icon": "↩️",
            "color": "from-red-400 to-yellow-500",
            "tags": ["Returns", "Logistics", "Customer Care"],
            "rating": "4.6",
            "usage": "9.5k",
            "speed": "Fast"
        },
        {
            "id": 73,
            "name": "Inventory Management AI Agent",
            "description": "Track and forecast inventory needs to prevent stockouts and overstock, improving supply chain operations.",
            "icon": "📊",
            "color": "from-green-600 to-cyan-600",
            "tags": ["Inventory", "Forecasting", "Supply Chain"],
            "rating": "4.7",
            "usage": "11.1k",
            "speed": "Medium"
        }
    ]
};

// Sales evolution timeline data
interface TimelineItem {
    year: string;
    title: string;
    description: string;
    icon: any;
}

const salesTimeline: TimelineItem[] = [
    {
        year: "1800s",
        title: "Door-to-Door Sales Era",
        description: "Traditional face-to-face selling with traveling salespeople building personal relationships, handwritten order books, and manual customer record keeping forming the foundation of sales operations",
        icon: Home
    },
    {
        year: "1920s",
        title: "Telephone Sales Revolution",
        description: "Introduction of telephone-based selling enabling remote customer contact, expanded market reach, and the birth of organized sales territories and systematic prospecting methods",
        icon: PhoneCall
    },
    {
        year: "1950s",
        title: "Professional Sales Training",
        description: "Development of structured sales methodologies, formal sales training programs, and the establishment of professional sales organizations with proven closing techniques",
        icon: BookOpen
    },
    {
        year: "1980s",
        title: "CRM Systems Introduction",
        description: "Computer-based customer relationship management systems emerged to track leads, manage customer data, and automate basic sales processes improving deal tracking",
        icon: Database
    },
    {
        year: "1990s",
        title: "Sales Automation Software",
        description: "Dedicated sales automation platforms offering pipeline management, contact management, and basic sales reporting tools transforming sales team productivity",
        icon: Calculator
    },
    {
        year: "2000s",
        title: "Online Sales Platforms",
        description: "Web-based sales tools, email marketing automation, and e-commerce platforms revolutionized lead generation, customer acquisition, and sales process management",
        icon: Globe
    },
    {
        year: "2010s",
        title: "Social Selling & Mobile CRM",
        description: "Social media selling, mobile CRM applications, and cloud-based sales platforms enabled anywhere sales management and social prospect engagement",
        icon: Phone
    },
    {
        year: "2015+",
        title: "Sales Intelligence Platforms",
        description: "Advanced sales analytics, predictive lead scoring, automated email sequences, and data-driven sales insights transformed sales teams into intelligent revenue machines",
        icon: BarChart3
    },
    {
        year: "2020+",
        title: "AI-Powered Sales Automation",
        description: "Artificial Intelligence revolutionizes sales with predictive lead qualification, automated personalized outreach, intelligent deal scoring, and comprehensive sales process optimization",
        icon: Brain
    }
];

// Enhanced statistics data
const stats = [
    { number: "84%", label: "Higher Lead Conversion", icon: Target, color: "from-green-500 to-emerald-500" },
    { number: "24/7", label: "Prospect Engagement", icon: Clock, color: "from-blue-500 to-cyan-500" },
    { number: "156%", label: "Sales Pipeline Growth", icon: TrendingUp, color: "from-purple-500 to-pink-500" },
    { number: "92%", label: "Deal Closing Accuracy", icon: Handshake, color: "from-yellow-500 to-orange-500" }
];

// Enhanced advantages data
const advantages = [
    {
        title: "Intelligent Lead Generation",
        description: "AI agents revolutionize prospecting through automated lead discovery, intelligent qualification scoring, personalized outreach campaigns, and predictive buyer behavior analysis for maximum conversion rates.",
        icon: Target,
        gradient: "from-blue-500 to-indigo-600",
        benefits: [
            "Automated prospect identification and lead scoring algorithms",
            "Intelligent lead qualification with behavioral analysis",
            "Personalized outreach campaigns at scale with AI optimization",
            "Predictive lead conversion and buyer intent recognition",
            "Multi-channel prospect engagement and nurturing automation"
        ]
    },
    {
        title: "Smart Sales Pipeline Management",
        description: "AI-powered pipeline systems using predictive analytics to prioritize deals, forecast revenue, track sales activities, and optimize deal progression with data-driven insights.",
        icon: BarChart3,
        gradient: "from-pink-500 to-rose-600",
        benefits: [
            "Predictive deal scoring and win probability analysis",
            "Automated pipeline progression and stage management",
            "Smart sales forecasting with revenue predictions",
            "Deal risk assessment and intervention recommendations",
            "Sales activity tracking with performance optimization"
        ]
    },
    {
        title: "Revenue & Performance Optimization",
        description: "Advanced AI systems that optimize pricing strategies, automate follow-ups, manage sales performance, and provide comprehensive sales analytics for maximum revenue generation.",
        icon: DollarSign,
        gradient: "from-green-500 to-teal-600",
        benefits: [
            "Dynamic pricing optimization and competitor analysis",
            "Automated follow-up sequences and engagement timing",
            "Comprehensive sales performance tracking and coaching",
            "Revenue forecasting with market trend analysis",
            "Sales quota management and achievement optimization"
        ]
    },
    {
        title: "Customer Relationship Intelligence",
        description: "AI-powered customer relationship systems that analyze buyer behavior, personalize interactions, manage customer lifecycle, and provide strategic account insights across the entire sales journey.",
        icon: Users,
        gradient: "from-purple-500 to-violet-600",
        benefits: [
            "Customer behavior analysis and buying pattern recognition",
            "Personalized interaction recommendations and timing",
            "Account-based selling strategies with AI insights",
            "Customer lifetime value prediction and optimization",
            "Relationship mapping and stakeholder influence analysis"
        ]
    }
];

// ROI Statistics
const roiStats = [
    { metric: "89%", label: "Reduction in Sales Cycle Time", icon: Clock },
    { metric: "$4.8M", label: "Annual Revenue Increase", icon: DollarSign },
    { metric: "76%", label: "Improvement in Lead Quality", icon: Star },
    { metric: "93%", label: "Increase in Sales Productivity", icon: TrendingUp },
    { metric: "81%", label: "Better Deal Closing Rates", icon: Award },
    { metric: "12x", label: "Faster Lead Response Time", icon: Zap }
];

// Industry Impact Stats
const industryStats = [
    { number: "78%", description: "of sales teams plan to implement AI solutions within the next 12 months" },
    { number: "$58B", description: "projected global sales automation market size by 2028" },
    { number: "650M+", description: "leads processed by AI-powered sales systems annually" },
    { number: "71%", description: "increase in sales revenue with AI implementation" }
];

// Animated Counter Component
interface AnimatedCounterProps {
    end: number | string;
    duration?: number;
    suffix?: string;
}

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: AnimatedCounterProps) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [isVisible]);

    useEffect(() => {
        if (isVisible) {
            let startTime: DOMHighResTimeStamp | undefined;
            const animate = (currentTime: DOMHighResTimeStamp) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / duration, 1);

                if (typeof end === 'string' && end.includes('%')) {
                    const numericEnd = parseInt(end);
                    setCount(Math.floor(progress * numericEnd));
                } else if (typeof end === 'string' && end.includes('M')) {
                    const numericEnd = parseFloat(end);
                    setCount(Math.floor(progress * numericEnd * 10) / 10);
                } else if (typeof end === 'string' && end.includes('B')) {
                    const numericEnd = parseFloat(end);
                    setCount(Math.floor(progress * numericEnd * 10) / 10);
                } else if (typeof end === 'string' && end.includes('x')) {
                    const numericEnd = parseInt(end);
                    setCount(Math.floor(progress * numericEnd));
                } else if (typeof end === 'string') {
                    // Convert string to number before setting
                    const numericValue = parseFloat(end);
                    if (progress === 1) setCount(numericValue);
                } else {
                    setCount(Math.floor(progress * end));
                }

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        }
    }, [isVisible, end, duration]);

    const formatCount = () => {
        if (typeof end === 'string' && end.includes('%')) {
            return `${count}%`;
        } else if (typeof end === 'string' && end.includes('M')) {
            return `$${count}M`;
        } else if (typeof end === 'string' && end.includes('B')) {
            return `$${count}B`;
        } else if (typeof end === 'string' && end.includes('x')) {
            return `${count}x`;
        } else if (typeof end === 'string') {
            return end;
        }
        return `${count}${suffix}`;
    };

    return <span ref={ref}>{formatCount()}</span>;
};

// Enhanced Timeline Component
const Timeline = () => {
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers = itemRefs.current.map((ref, index) => {
            if (!ref) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisibleItems(prev => [...prev, index]);
                    }
                },
                { threshold: 0.2 }
            );

            observer.observe(ref);
            return observer;
        });

        return () => {
            observers.forEach(observer => observer?.disconnect());
        };
    }, []);

    return (
        <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-80"></div>
            {salesTimeline.map((item, index) => (
                <div
                    key={index}
                    ref={el => itemRefs.current[index] = el || null}
                    className={`relative flex items-center mb-16 group transition-all duration-700 ${visibleItems.includes(index)
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-8'
                        }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                >
                    <div className="absolute left-6 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-slate-900 group-hover:scale-125 transition-all duration-300 shadow-lg shadow-blue-500/25">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-ping opacity-20"></div>
                    </div>
                    <div className="ml-20 p-8 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl hover:border-slate-600/50 hover:bg-slate-800/60 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                <item.icon className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-blue-400 font-bold text-lg bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                {item.year}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                            {item.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed text-lg">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Enhanced Agent Card Component
interface AgentCardProps {
    agent: Agent;
    index: number;
}

const AgentCard = ({ agent, index }: AgentCardProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), index * 100);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [index]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
        >
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 hover:bg-slate-800/60 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 h-full">
                <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${agent.color} flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        {agent.icon}
                    </div>
                    <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">{agent.rating}</span>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {agent.name}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                    {agent.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {agent.tags.map((tag, tagIndex) => (
                        <span
                            key={tagIndex}
                            className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs hover:bg-slate-600/50 transition-colors duration-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-slate-400">
                        <Users className="w-4 h-4 mr-1" />
                        {agent.usage} users
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                        <Zap className="w-4 h-4 mr-1" />
                        {agent.speed}
                    </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group-hover:transform group-hover:scale-105">
                    Try Agent Free
                </button>
            </div>
        </div>
    );
};

// Floating Animation Component
const FloatingElements = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
            <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-50"></div>
            <div className="absolute top-60 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-30"></div>
            <div className="absolute bottom-20 right-10 w-3 h-3 bg-indigo-400 rounded-full animate-ping opacity-40"></div>
        </div>
    );
};

// Sales ROI statistics interface
interface RoiStat {
    icon: any;
    metric: number | string;
    label: string;
}

// Sales ROI statistics
const salesRoiStats: RoiStat[] = [
    {
        icon: TrendingUp,
        metric: 67,
        label: "Sales Process Efficiency"
    },
    {
        icon: Target,
        metric: 54,
        label: "Lead Conversion Rate"
    },
    {
        icon: DollarSign,
        metric: 43,
        label: "Revenue Growth Acceleration"
    }
];

// Main Component
export default function SalesPage() {
    const [currentAgentIndex, setCurrentAgentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAgentIndex((prev) => (prev + 1) % salesCategory.agents.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">

            {/* Navbar Component */}
            <NavbarDemo />
            <FloatingElements />

            {/* Hero Section */}
            <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-32">
                {/* Enhanced Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
                    <div className="absolute top-10 left-1/2 w-32 h-32 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-3000"></div>
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300 hover:border-slate-600/50 transition-all duration-300 animate-fade-in group">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                        <span className="group-hover:text-white transition-colors duration-300">
                            🚀 Revolutionizing Sales with AI • Trusted by 18,000+ Sales Professionals Globally
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight animate-fade-in-up">
                        The Future of<br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                            Sales Intelligence
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl lg:text-3xl text-slate-400 max-w-5xl mx-auto leading-relaxed mb-12 animate-fade-in-up delay-200">
                        Transform lead generation, prospect qualification, and deal closing with AI agents that automate,
                        analyze, and optimize sales workflows 24/7,
                        reducing sales cycle time by up to 89% while improving conversion rates by 84%.
                        <span className="text-white font-medium bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            {" "}Experience next-generation sales automation.
                        </span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up delay-400">
                        <button className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center text-lg">
                            Start Free 30-Day Trial
                            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        <button className="group px-10 py-5 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white font-semibold rounded-2xl hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 flex items-center text-lg">
                            <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                            Watch 2-Min Demo
                        </button>
                    </div>

                    {/* Enhanced Stats Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up delay-600">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                                    <stat.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                                    <AnimatedCounter end={stat.number} />
                                </div>
                                <div className="text-slate-400 text-sm leading-tight">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Enhanced Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="flex flex-col items-center space-y-2">
                        <span className="text-slate-400 text-xs">Scroll to explore</span>
                        <ChevronDown className="w-6 h-6 text-slate-400" />
                    </div>
                </div>
            </section>

            {/* Industry Impact Section */}
            <section className="relative w-full py-20 px-4 bg-gradient-to-r from-slate-900/80 to-slate-800/60">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Sales AI Agents are <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Transforming Revenue Generation</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {industryStats.map((stat, index) => (
                            <div key={index} className="text-center p-6 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                                    <AnimatedCounter end={stat.number} />
                                </div>
                                <p className="text-slate-400 text-sm">{stat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sales History Section */}

            {/* Sales History Section */}
            <section id="history" className="relative w-full py-32 px-4 bg-gradient-to-r from-slate-900/50 to-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <Clock className="w-5 h-5 mr-3 text-blue-400" />
                            Sales Technology Evolution Timeline
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold max-w-6xl mx-auto mb-8 leading-tight">
                        From Cold Calling to <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">AI-Powered Sales Intelligence</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                        The sales industry has evolved from manual lead tracking and cold calling to intelligent sales automation systems. 
                        Explore the revolutionary journey from traditional sales methods to AI-driven lead qualification, automated prospecting, and intelligent sales pipeline management revolutionizing sales teams and businesses globally.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <Timeline />
                        </div>
                        <div className="lg:pt-16 space-y-8">
                            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 hover:bg-slate-800/60 transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                                        <Brain className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">🚀 The AI Sales Revolution</h3>
                                </div>
                                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                    Today's AI-powered sales systems represent the pinnacle of decades of innovation in lead generation, customer relationship management, 
                                    and sales process automation. From traditional manual prospecting to modern predictive sales analytics and intelligent lead scoring, 
                                    the evolution of sales technology has reached its most sophisticated form — autonomous, data-driven AI agents that understand buyer behavior and sales patterns.
                                    These AI sales agents can analyze market trends, automate follow-ups, predict deal closure probability, and provide intelligent sales recommendations — 
                                    delivering 24/7 intelligent sales support to sales reps and unprecedented pipeline efficiency to sales organizations worldwide.
                                    
                                </p>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                AI Sales Agents now improve lead qualification accuracy by 90%, reduce sales cycle time by 65%, 
                                and enhance deal closure rates to 88% efficiency rates.
                                </p>
                            </div>

                            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 hover:bg-slate-800/60 transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                                        <TrendingUp className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">What's Next in Sales AI?</h3>
                                </div>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                The future of AI in Sales transcends automation — it's about predictive sales intelligence and strategic revenue insights. AI Sales agents will become intelligent sales partners, capable of 
                                Predicting customer buying intent based on behavioral analysis • Personalizing sales pitches based on prospect preferences and pain points 
                                Creating seamless, automated lead nurturing and follow-up sequences • Detecting sales opportunities and market trends with advanced analytics • 
                                Optimizing sales strategies through real-time performance analysis and revenue intelligence with unprecedented accuracy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Sales Advantages Section */}
            <section id="benefits" className="relative w-full py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <Award className="w-5 h-5 mr-3 text-emerald-400" />
                            Strategic Sales Advantages
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold max-w-6xl mx-auto mb-8 leading-tight">
                        Why Sales AI Agents are <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">Revenue Game Changers</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                        Discover how AI-powered sales systems are revolutionizing lead generation, enhancing customer engagement, 
                        and delivering intelligent sales insights at enterprise scale. These agents aren't just sales tools — they're intelligent sales partners designed to empower sales teams and drive explosive revenue growth for businesses.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {advantages.map((advantage, index) => (
                            <div key={index} className="group">
                                <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-10 hover:border-slate-600/50 hover:bg-slate-800/60 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/10 h-full">
                                    <div className="flex items-center mb-8">
                                        <div className={`w-20 h-20 bg-gradient-to-r ${advantage.gradient} rounded-3xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                                            <advantage.icon className="w-10 h-10 text-white" />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                                            {advantage.title}
                                        </h3>
                                    </div>

                                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                        {advantage.description}
                                    </p>

                                    <div className="space-y-4">
                                        {advantage.benefits.map((benefit, idx) => (
                                            <div key={idx} className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                                                <CheckCircle className="w-6 h-6 text-emerald-400 mr-4 flex-shrink-0" />
                                                <span className="text-slate-300 text-lg">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sales AI Agents Showcase */}
            <section id="agents" className="relative w-full py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <Brain className="w-5 h-5 mr-3 text-purple-400" />
                            Sales AI Agents Portfolio
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto mb-8 leading-tight">
                            Meet Your <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Sales AI</span> Team
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Specialized AI agents designed to optimize every aspect of sales operations — from lead generation and qualification to customer engagement and deal closure. 
                        These intelligent sales partners work around the clock to enhance your sales processes and deliver exceptional customer experiences.
                        </p>
                    </div>

                    {/* Featured Agent Carousel */}
                    <div className="mb-20">
                        <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
                            <div className="relative z-10">
                                <div className="mb-8">
                                    <div className="inline-flex w-28 h-28 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 items-center justify-center text-5xl mb-6 animate-pulse shadow-2xl">
                                        🎯
                                    </div>
                                    <h3 className="text-4xl font-bold text-white mb-6">
                                        Lead Hunter AI
                                    </h3>
                                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                        Advanced AI agent that automatically identifies, qualifies, and nurtures high-quality leads through intelligent prospecting, behavioral analysis, and personalized outreach campaigns that convert prospects into customers.
                                    </p>
                                </div>

                                <div className="flex justify-center space-x-3 mb-8">
                                    <span className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50">
                                        Lead Generation
                                    </span>
                                    <span className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50">
                                        Prospect Qualification
                                    </span>
                                    <span className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50">
                                        Automated Outreach
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sales ROI Section */}
            <section id="roi" className="relative w-full py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <BarChart3 className="w-5 h-5 mr-3 text-green-400" />
                            Sales Revenue Returns
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto mb-8 leading-tight">
                            Measurable <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">Revenue Gains</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                        Our Sales AI agents deliver quantifiable improvements in lead conversion, deal velocity, and revenue generation,
                        ensuring your sales team achieves exceptional results through enhanced prospecting efficiency and accelerated deal closure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {salesRoiStats.map((stat, index) => (
                            <div key={index} className="text-center p-8 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl hover:border-slate-600/50 hover:bg-slate-800/60 transition-all duration-300 group hover:transform hover:scale-105">
                                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                    <stat.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                                    <AnimatedCounter end={stat.metric} />
                                </div>
                                <p className="text-slate-400 leading-relaxed">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-green-700/30 rounded-3xl p-12 text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Average Sales ROI: <span className="text-green-400">650% in First Year</span>
                        </h3>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
                        Sales teams implementing our Sales AI Agents achieve an average return of $6.50 for every dollar invested, through enhanced lead qualification efficiency, 
                        reduced sales cycle duration, improved conversion rates, and automated prospecting that drives sustainable competitive advantage in the market.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative w-full py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto mb-8 leading-tight">
                        Ready to Transform Your <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Sales Process?</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Join hundreds of forward-thinking sales leaders already leveraging AI agents to streamline lead generation, 
                        enhance customer engagement, automate follow-up sequences, and deliver superior sales experiences that drive explosive revenue growth and market dominance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8">
                                <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                                            <UserCheck className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">Free 30-Day Trial</h4>
                                            <p className="text-slate-400">No credit card required</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                                            <Phone className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">24/7 Support</h4>
                                            <p className="text-slate-400">Expert sales guidance anytime</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                                            <Shield className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">GDPR Compliant</h4>
                                            <p className="text-slate-400">Data privacy & security</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center text-slate-300">
                                    <Mail className="w-5 h-5 mr-3 text-blue-400" />
                                    sales@mercato.ai
                                </div>
                                <div className="flex items-center text-slate-300">
                                    <Phone className="w-5 h-5 mr-3 text-green-400" />
                                    +91 0000000000
                                </div>
                                <div className="flex items-center text-slate-300">
                                    <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                                    Bangalore, India
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes gradient {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }
                
                .animate-fade {
                    animation: fade-in 1s ease-out;
                }
                
                .animate-fade-up {
                    animation: fade-in-up 1s ease-out;
                }
            `}</style>
            <Footer />
        </div>
    );
};