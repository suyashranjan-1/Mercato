"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Play, Star, Users, Zap, Shield, Clock, Heart, TrendingUp, Award, CheckCircle, ArrowRight, Calendar, FileText, Brain, Layers, Lightbulb, Activity, Database, Lock, Globe, Phone, Mail, MapPin, Target, RefreshCw, HeartHandshake, Building2, UserCheck, DollarSign, BarChart3, Scale, Gavel, BookOpen, Search, AlertTriangle, Home, Calculator, Wrench, MessageSquare, Key, CreditCard, Camera } from "lucide-react";
import { AgentSlider } from "@/components/AgentSlider";
import { NavbarDemo } from "@/components/navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

interface Agent {
    id: number;
    name: string;
    slug : string;
    youtube: string;
    description: string;
    icon: string;
    color: string;
    tags: string[];
    rating: string;
    usage: string;
    speed: string;
}

interface PropertyCategory {
    name: string;
    description: string;
    agents: Agent[];
}

// Property management agents data
const propertyCategory: PropertyCategory = {
    "name": "Property Management AI Agents",
    "description": "Revolutionary AI agents transforming tenant screening, rent collection, maintenance coordination, and property operations across real estate portfolios and property management companies.",
    "agents": [
        {
            "id": 53,
            "name": "Tenant Screening AI Agent",
            "slug": "tenantScreeningAiAgent",
            "youtube": "https://www.youtube.com/watch?v=example",
            "description": "Evaluate tenant applications by analyzing credit history, background checks, and rental history to ensure reliable occupancy.",
            "icon": "🔍",
            "color": "from-blue-500 to-indigo-600",
            "tags": ["Tenant", "Screening", "Leasing"],
            "rating": "4.8",
            "usage": "12.4k",
            "speed": "Fast"
        },
        {
            "id": 54,
            "name": "Lease Management AI Agent",
            "slug": "leaseManagementAiAgent",
            "youtube": "https://www.youtube.com/watch?v=example",
            "description": "Track lease agreements, automate renewals, and alert landlords and tenants about upcoming expirations.",
            "icon": "📑",
            "color": "from-teal-500 to-green-600",
            "tags": ["Lease", "Contracts", "Renewals"],
            "rating": "4.7",
            "usage": "9.3k",
            "speed": "Medium"
        },
        {
            "id": 55,
            "name": "Maintenance Request AI Agent",
            "slug": "maintenanceRequestAiAgent",
            "youtube": "https://www.youtube.com/watch?v=example",
            "description": "Handle tenant maintenance requests automatically and dispatch repair personnel based on availability and urgency.",
            "icon": "🛠️",
            "color": "from-orange-500 to-yellow-600",
            "tags": ["Maintenance", "Repairs", "Automation"],
            "rating": "4.9",
            "usage": "14.1k",
            "speed": "Fast"
        },
        {
            "id": 56,
            "name": "Rent Collection AI Agent",
            "slug": "rentCollectionAiAgent",
            "youtube": "https://www.youtube.com/watch?v=example",
            "description": "Automate rent reminders, collect payments securely, and provide real-time reporting for landlords and tenants.",
            "icon": "💰",
            "color": "from-green-500 to-emerald-600",
            "tags": ["Rent", "Payments", "Automation"],
            "rating": "4.8",
            "usage": "15.2k",
            "speed": "Fast"
        },
        {
            "id": 57,
            "name": "Virtual Property Tour AI Agent",
            "slug": "virtualPropertyTourAiAgent",
            "youtube": "https://www.youtube.com/watch?v=example",
            "description": "Deliver immersive and interactive virtual property tours to prospective tenants and buyers, reducing site visit needs.",
            "icon": "🏡",
            "color": "from-pink-500 to-rose-600",
            "tags": ["Virtual Tour", "Marketing", "Real Estate"],
            "rating": "4.9",
            "usage": "10.7k",
            "speed": "Instant"
        },
        {
            "id": 58,
            "name": "Vacancy Prediction AI Agent",
            "slug": "vacancyPredictionAiAgent",
            "youtube": "https://www.youtube.com/watch?v=example",
            "description": "Predict upcoming vacancies using historical data and tenant behavior patterns to reduce unoccupied periods.",
            "icon": "📊",
            "color": "from-purple-500 to-violet-600",
            "tags": ["Vacancy", "Prediction", "Analytics"],
            "rating": "4.8",
            "usage": "8.9k",
            "speed": "Fast"
        },
        {
            "id": 59,
            "name": "Tenant Communication AI Agent",
            "slug": "tenantCommunicationAiAgent",
            "youtube": "https://www.youtube.com/watch?v=example",
            
            "description": "Provide 24/7 communication with tenants for answering queries, sending notices, and managing disputes.",
            "icon": "💬",
            "color": "from-cyan-500 to-blue-600",
            "tags": ["Communication", "Support", "Messaging"],
            "rating": "4.7",
            "usage": "11.6k",
            "speed": "Instant"
        }
    ]
};

// Property management timeline data
interface TimelineItem {
    year: string;
    title: string;
    description: string;
    icon: any;
}

const propertyTimeline: TimelineItem[] = [
    {
        year: "1800s",
        title: "Traditional Property Management",
        description: "Manual property management with paper-based rent collection, handwritten maintenance logs, and in-person tenant communications forming the foundation of property operations",
        icon: Home
    },
    {
        year: "1920s",
        title: "Professional Property Services",
        description: "Establishment of dedicated property management companies offering specialized services for landlords and real estate investors with systematic rental processes",
        icon: Building2
    },
    {
        year: "1950s",
        title: "Tenant Screening Systems",
        description: "Development of formal tenant screening processes including credit checks, employment verification, and reference systems to improve rental decision-making",
        icon: UserCheck
    },
    {
        year: "1980s",
        title: "Computerized Property Records",
        description: "Introduction of computer systems for property records management, rent tracking, and basic tenant databases improving operational efficiency",
        icon: Database
    },
    {
        year: "1990s",
        title: "Property Management Software",
        description: "Dedicated property management software platforms emerged offering integrated solutions for rent collection, maintenance tracking, and tenant management",
        icon: FileText
    },
    {
        year: "2000s",
        title: "Online Property Portals",
        description: "Web-based tenant portals and online rent payment systems revolutionized tenant-landlord interactions and automated payment processing",
        icon: Globe
    },
    {
        year: "2010s",
        title: "Mobile Property Management",
        description: "Mobile apps enabled remote property management, instant maintenance requests, digital lease signing, and real-time property monitoring capabilities",
        icon: Phone
    },
    {
        year: "2015+",
        title: "Smart Property Technology",
        description: "IoT devices, smart locks, automated HVAC systems, and predictive maintenance technology transformed properties into intelligent, connected assets",
        icon: Zap
    },
    {
        year: "2020+",
        title: "AI-Powered Property Intelligence",
        description: "Artificial Intelligence revolutionizes property management with predictive analytics, automated tenant screening, intelligent maintenance scheduling, and comprehensive property operations optimization",
        icon: Brain
    }
];

// Enhanced statistics data
const stats = [
    { number: "78%", label: "Faster Maintenance Response", icon: Wrench, color: "from-green-500 to-emerald-500" },
    { number: "24/7", label: "Property Monitoring", icon: Shield, color: "from-blue-500 to-cyan-500" },
    { number: "94%", label: "Rent Collection Rate", icon: CreditCard, color: "from-purple-500 to-pink-500" },
    { number: "97%", label: "Tenant Satisfaction Score", icon: Star, color: "from-yellow-500 to-orange-500" }
];

// Enhanced advantages data
const advantages = [
    {
        title: "Intelligent Tenant Management",
        description: "AI agents revolutionize tenant relationships through automated screening, personalized communications, lease management, and predictive tenant behavior analysis for optimal occupancy rates.",
        icon: Users,
        gradient: "from-blue-500 to-indigo-600",
        benefits: [
            "Automated tenant screening with credit and background analysis",
            "Intelligent lease management and renewal predictions",
            "Personalized tenant communication and support systems",
            "Predictive tenant satisfaction and retention analytics",
            "Digital lease signing and document management automation"
        ]
    },
    {
        title: "Smart Maintenance Operations",
        description: "AI-powered maintenance systems using predictive analytics to schedule repairs, coordinate vendors, track work orders, and optimize property condition management with proactive solutions.",
        icon: Wrench,
        gradient: "from-pink-500 to-rose-600",
        benefits: [
            "Predictive maintenance scheduling and equipment monitoring",
            "Automated work order creation and vendor coordination",
            "Smart maintenance cost tracking and budget optimization",
            "Emergency repair response and priority management",
            "Property condition monitoring with IoT integration"
        ]
    },
    {
        title: "Revenue & Financial Optimization",
        description: "Advanced AI systems that optimize rental pricing, automate rent collection, manage financial reporting, and provide comprehensive property investment analytics for maximum profitability.",
        icon: DollarSign,
        gradient: "from-green-500 to-teal-600",
        benefits: [
            "Dynamic rental pricing optimization and market analysis",
            "Automated rent collection and payment processing",
            "Comprehensive financial reporting and expense tracking",
            "Property investment performance analytics and forecasting",
            "Late payment prevention and collection automation"
        ]
    },
    {
        title: "Property Portfolio Intelligence",
        description: "AI-powered portfolio management systems that analyze property performance, market trends, occupancy optimization, and strategic investment opportunities across multiple properties.",
        icon: BarChart3,
        gradient: "from-purple-500 to-violet-600",
        benefits: [
            "Multi-property portfolio performance tracking and analysis",
            "Market trend analysis and competitive positioning",
            "Occupancy rate optimization and vacancy prediction",
            "Property value assessment and appreciation tracking",
            "Strategic acquisition and disposition recommendations"
        ]
    }
];

// ROI Statistics
const roiStats = [
    { metric: "82%", label: "Reduction in Property Management Time", icon: Clock },
    { metric: "$3.1M", label: "Annual Savings from Automation", icon: DollarSign },
    { metric: "71%", label: "Improvement in Tenant Retention", icon: Users },
    { metric: "86%", label: "Increase in Operational Efficiency", icon: TrendingUp },
    { metric: "79%", label: "Better Maintenance Cost Control", icon: Award },
    { metric: "15x", label: "Faster Rent Collection Process", icon: Zap }
];

// Industry Impact Stats
const industryStats = [
    { number: "72%", description: "of property managers plan to implement AI solutions within the next 18 months" },
    { number: "$32B", description: "projected global property tech market size by 2028" },
    { number: "450M+", description: "rental units managed by AI-powered systems globally" },
    { number: "63%", description: "reduction in property operational costs with AI implementation" }
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
            {propertyTimeline.map((item, index) => (
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

// Property ROI statistics interface
interface RoiStat {
    icon: any;
    metric: number | string;
    label: string;
}

// Property ROI statistics
const propertyRoiStats: RoiStat[] = [
    {
        icon: TrendingUp,
        metric: 48,
        label: "Property Management Efficiency"
    },
    {
        icon: Shield,
        metric: 42,
        label: "Tenant Retention Rate"
    },
    {
        icon: DollarSign,
        metric: 36,
        label: "Property Operational Cost Reduction"
    }
];

// Main Component
export default function PropertyManagementPage() {
    const router = useRouter();
    const [currentAgentIndex, setCurrentAgentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAgentIndex((prev) => (prev + 1) % propertyCategory.agents.length);
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
                            🏢 Revolutionizing Property Management with AI • Trusted by 12,000+ Property Managers Globally
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight animate-fade-in-up">
                        The Future of<br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                            Property Intelligence
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl lg:text-3xl text-slate-400 max-w-5xl mx-auto leading-relaxed mb-12 animate-fade-in-up delay-200">
                        Transform tenant management, maintenance operations, and portfolio optimization with AI agents that automate,
                        analyze, and optimize property workflows 24/7,
                        reducing property management time by up to 78% while improving tenant satisfaction by 97%.
                        <span className="text-white font-medium bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            {" "}Experience next-generation property management.
                        </span>
                    </p>

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
                            Property AI Agents are <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Transforming Real Estate Operations</span>
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

            {/* Property Management History Section */}
            <section id="history" className="relative w-full py-32 px-4 bg-gradient-to-r from-slate-900/50 to-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <Clock className="w-5 h-5 mr-3 text-blue-400" />
                            Property Management Technology Evolution Timeline
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold max-w-6xl mx-auto mb-8 leading-tight">
                        From Manual Property Records to <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">AI-Powered Property Intelligence</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                        The property management industry has evolved from paper-based tenant files to intelligent property automation systems. 
                        Explore the revolutionary journey from traditional property management methods to AI-driven tenant screening, maintenance automation, and intelligent property portfolio management revolutionizing real estate companies and property managers globally.
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
                                    <h3 className="text-2xl font-bold text-white">🏢 The AI Property Revolution</h3>
                                </div>
                                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                    Today's AI-powered property management systems represent the pinnacle of decades of innovation in tenant relations, maintenance coordination, 
                                    and property operations automation. From traditional manual rent collection to modern predictive maintenance analytics and intelligent tenant screening, 
                                    the evolution of property technology has reached its most sophisticated form — autonomous, data-driven AI agents that understand tenant behavior and property patterns.
                                    These AI property agents can analyze rental market trends, automate lease renewals, predict maintenance needs, and provide intelligent property investment recommendations — 
                                    delivering 24/7 intelligent property services to landlords and unprecedented operational efficiency to property management companies worldwide.
                                    
                                </p>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                AI Property Agents now improve tenant screening accuracy by 85%, reduce maintenance response time by 75%, 
                                and enhance rental income optimization to 92% efficiency rates.
                                </p>
                            </div>

                            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 hover:bg-slate-800/60 transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                                        <TrendingUp className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">What's Next in Property AI?</h3>
                                </div>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                The future of AI in Property Management transcends automation — it's about predictive property intelligence and strategic investment insights. AI Property agents will become intelligent property partners, capable of 
                                Predicting property values based on market trend analysis • Personalizing tenant experiences based on behavior patterns and preferences 
                                Creating seamless, automated rent collection and lease management processes • Detecting property risks and compliance issues with advanced monitoring systems • 
                                Optimizing property portfolios through real-time market analysis and investment intelligence with unprecedented accuracy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Property Management Advantages Section */}
            <section id="benefits" className="relative w-full py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <Award className="w-5 h-5 mr-3 text-emerald-400" />
                            Strategic Property Management Advantages
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold max-w-6xl mx-auto mb-8 leading-tight">
                        Why Property AI Agents are <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">Real Estate Game Changers</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                        Discover how AI-powered property systems are revolutionizing tenant management, enhancing property maintenance, 
                        and delivering intelligent property insights at enterprise scale. These agents aren't just property tools — they're intelligent property partners designed to empower landlords and drive profitable growth for property management companies.
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

            {/* Property Management AI Agents Showcase */}
            <section id="agents" className="relative w-full py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <Brain className="w-5 h-5 mr-3 text-purple-400" />
                            Property Management AI Agents Portfolio
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto mb-8 leading-tight">
                            Meet Your <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Property AI</span> Team
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Specialized AI agents designed to optimize every aspect of property operations — from tenant screening and lease management to maintenance coordination and property analytics. 
                        These intelligent property partners work around the clock to enhance your property management operations and deliver exceptional tenant experiences.
                        </p>
                    </div>

                    {/* Featured Agent Carousel */}
                    <div className="mb-20">
                        <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
                            <div className="relative z-10">
                                <div className="mb-8">
                                    <div className={`inline-flex w-28 h-28 rounded-3xl bg-gradient-to-r ${propertyCategory.agents[currentAgentIndex].color} items-center justify-center text-5xl mb-6 animate-pulse shadow-2xl`}>
                                        {propertyCategory.agents[currentAgentIndex].icon}
                                    </div>
                                    <h3 className="text-4xl font-bold text-white mb-6">
                                        {propertyCategory.agents[currentAgentIndex].name}
                                    </h3>
                                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                        {propertyCategory.agents[currentAgentIndex].description}
                                    </p>
                                </div>

                                <div className="flex justify-center space-x-3 mb-8">
                                    {propertyCategory.agents[currentAgentIndex].tags.map((tag, index) => (
                                        <span key={index} className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-center space-x-2">
                                    {propertyCategory.agents.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentAgentIndex
                                                ? 'bg-blue-500 scale-125 shadow-lg shadow-blue-500/50'
                                                : 'bg-slate-600 hover:bg-slate-500'
                                                }`}
                                            onClick={() => setCurrentAgentIndex(index)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Agent Slider */}
                    <AgentSlider category={propertyCategory} />
                </div>
            </section>

            {/* Property Management ROI Section */}
            <section id="roi" className="relative w-full py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <BarChart3 className="w-5 h-5 mr-3 text-green-400" />
                            Property Investment Returns
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto mb-8 leading-tight">
                            Measurable <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">Property Gains</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                        Our Property Management AI agents deliver quantifiable improvements in tenant retention, maintenance efficiency, and rental income,
                        ensuring your property portfolio generates exceptional value through reduced vacancy rates and enhanced tenant satisfaction.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {propertyRoiStats.map((stat, index) => (
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
                            Average Property ROI: <span className="text-green-400">420% in First Year</span>
                        </h3>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
                        Property management companies implementing our Property AI Agents achieve an average return of $4.20 for every dollar invested, through enhanced tenant screening efficiency, 
                        reduced maintenance costs, improved occupancy rates, and automated rent collection that drives sustainable competitive advantage in the real estate market.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative w-full py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto mb-8 leading-tight">
                        Ready to Transform Your <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Property Management?</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Join hundreds of forward-thinking property managers already leveraging AI agents to streamline tenant screening, 
                        enhance maintenance operations, automate rent collection, and deliver superior tenant experiences that drive profitable growth and market leadership.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8">
                                <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                                            <Phone className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">24/7 Support</h4>
                                            <p className="text-slate-400">Expert property guidance anytime</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                                            <Shield className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">Fair Housing Compliant</h4>
                                            <p className="text-slate-400">Real estate regulations & compliance</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center text-slate-300">
                                    <Mail className="w-5 h-5 mr-3 text-blue-400" />
                                    contact@mercato.agency
                                </div>
                                {/* <div className="flex items-center text-slate-300">
                                    <Phone className="w-5 h-5 mr-3 text-green-400" />
                                    +91 0000000000
                                </div> */}
                                <div className="flex items-center text-slate-300">
                                    <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                                    Noida, India
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Our Sales Team</h3>
                            <p className="text-slate-400 text-lg mb-8 text-center">
                                Have questions or want a personalized walkthrough?
                                Our experts are ready to help you get started with Customer Service AI Agents.
                            </p>
                            <button
                                onClick={() => router.push('/contact')}
                                className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 text-lg text-center"
                            >
                                Contact Us
                            </button>
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

