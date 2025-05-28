
"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Play, Star, Users, Zap, Shield, Clock, Heart, TrendingUp, Award, CheckCircle, ArrowRight, Calendar, FileText, Brain, Layers, Lightbulb, Activity, Database, Lock, Globe, Phone, Mail, MapPin, Target, RefreshCw, HeartHandshake, Building2, UserCheck, DollarSign, BarChart3, MessageCircle, Headphones, Bot, Smile, ThumbsUp, Timer, AlertCircle, Search, Eye, FileSearch, Download, Upload, Filter, Scan, ShoppingCart, Package, Gift, CreditCard, Calculator, Receipt, PieChart, Banknote, Wallet, TrendingDown, AlertTriangle, BookOpen, FileSpreadsheet, BadgeDollarSign } from "lucide-react";
import Footer from "@/components/Footer";
import { NavbarDemo } from "@/components/navbar";
import { AgentSlider } from "@/components/AgentSlider";
import ContactForm from "@/app/contact/page";
import { useRouter } from "next/navigation";

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

interface FinanceCategory {
    name: string;
    description: string;
    agents: Agent[];
}

// Finance & Accounting AI agents data
const financeCategory: FinanceCategory = {
    "name": "Finance & Accounting AI Agents",
    "description": "Revolutionary financial automation powered by AI that streamlines operations, ensures compliance, and delivers intelligent insights for strategic decision-making.",
    "agents": [
        {
            "id": 37,
            "name": "Expense Management AI Agent",
            "description": "Track, categorize, and analyze company expenses automatically, providing insights and reducing manual bookkeeping.",
            "icon": "💸",
            "color": "from-rose-500 to-red-600",
            "tags": ["Expenses", "Tracking", "Automation"],
            "rating": "4.9",
            "usage": "14.3k",
            "speed": "Fast"
        },
        {
            "id": 38,
            "name": "Invoice Processing AI Agent",
            "description": "Automate invoice reading, validation, and entry into your accounting system, reducing errors and speeding up workflows.",
            "icon": "🧾",
            "color": "from-indigo-500 to-blue-600",
            "tags": ["Invoices", "OCR", "Automation"],
            "rating": "4.8",
            "usage": "12.7k",
            "speed": "Fast"
        },
        {
            "id": 39,
            "name": "Tax Calculation AI Agent",
            "description": "Handle tax calculations, rule compliance, and filing support with jurisdiction-specific automation.",
            "icon": "📊",
            "color": "from-green-500 to-emerald-600",
            "tags": ["Taxes", "Compliance", "Filing"],
            "rating": "4.7",
            "usage": "9.8k",
            "speed": "Medium"
        },
        {
            "id": 40,
            "name": "Financial Forecasting AI Agent",
            "description": "Predict financial trends, budget needs, and investment opportunities using advanced analytics and historical data.",
            "icon": "📈",
            "color": "from-blue-500 to-cyan-600",
            "tags": ["Forecasting", "Finance", "Analytics"],
            "rating": "4.9",
            "usage": "11.5k",
            "speed": "Fast"
        },
        {
            "id": 41,
            "name": "Accounts Payable AI Agent",
            "description": "Manage the entire accounts payable process with automated invoice matching, approval workflows, and payment scheduling.",
            "icon": "🏦",
            "color": "from-yellow-500 to-amber-600",
            "tags": ["Payables", "Workflow", "Payments"],
            "rating": "4.8",
            "usage": "10.2k",
            "speed": "Fast"
        },
        {
            "id": 42,
            "name": "Accounts Receivable AI Agent",
            "description": "Track incoming payments, send automated reminders, and generate receivables reports to ensure healthy cash flow.",
            "icon": "📥",
            "color": "from-purple-500 to-pink-600",
            "tags": ["Receivables", "Reminders", "Reports"],
            "rating": "4.7",
            "usage": "8.6k",
            "speed": "Fast"
        },
        {
            "id": 43,
            "name": "Payroll Processing AI Agent",
            "description": "Automate payroll calculations, deductions, and compliance checks to ensure accurate and timely employee payments.",
            "icon": "💼",
            "color": "from-teal-500 to-blue-600",
            "tags": ["Payroll", "Salary", "Automation"],
            "rating": "4.8",
            "usage": "13.1k",
            "speed": "Fast"
        },
        {
            "id": 44,
            name: "Financial Compliance AI Agent",
            "description": "Monitor compliance with financial regulations, flag suspicious transactions, and generate audit-ready reports.",
            "icon": "🛡️",
            "color": "from-slate-500 to-gray-600",
            "tags": ["Compliance", "Audit", "Monitoring"],
            "rating": "4.8",
            "usage": "6.9k",
            "speed": "Medium"
        }
    ]
};

// Finance ROI statistics data
interface ROIStat {
    icon: any;
    metric: number | string;
    label: string;
}

const financeROIStats: ROIStat[] = [
    {
        icon: DollarSign,
        metric: 99.7,
        label: "Accuracy Rate"
    },
    {
        icon: Clock,
        metric: 85,
        label: "Time Reduction"
    },
    {
        icon: TrendingUp,
        metric: 4.5,
        label: "ROI Rate"
    }
];

// Finance evolution timeline data
interface TimelineItem {
    year: string;
    title: string;
    description: string;
    icon: any;
}

const financeTimeline: TimelineItem[] = [
    {
        year: "1400s",
        title: "Double-Entry Bookkeeping",
        description: "Luca Pacioli introduces systematic double-entry bookkeeping in Venice, establishing the foundation of modern accounting principles",
        icon: BookOpen
    },
    {
        year: "1800s",
        title: "Industrial Revolution Accounting",
        description: "Cost accounting emerges during industrial expansion, introducing concepts of overhead allocation and financial control systems",
        icon: Building2
    },
    {
        year: "1930s",
        title: "Financial Standards & Regulations",
        description: "Formation of SEC and standardized financial reporting following the Great Depression, establishing GAAP principles",
        icon: Shield
    },
    {
        year: "1960s",
        title: "Computer-Assisted Accounting",
        description: "First computerized accounting systems emerge, replacing manual ledgers with automated calculations and record-keeping",
        icon: Calculator
    },
    {
        year: "1980s",
        title: "Spreadsheet Revolution",
        description: "VisiCalc and Excel transform financial modeling, making complex calculations accessible to all finance professionals",
        icon: FileSpreadsheet
    },
    {
        year: "1990s",
        title: "ERP Systems Integration",
        description: "Enterprise Resource Planning systems integrate finance with operations, providing real-time financial visibility across organizations",
        icon: Database
    },
    {
        year: "2000s",
        title: "Online Banking & Digital Payments",
        description: "Internet banking and digital payment systems revolutionize transaction processing and cash management practices",
        icon: Globe
    },
    {
        year: "2010s",
        title: "Cloud-Based Financial Software",
        description: "SaaS accounting platforms like QuickBooks Online and Xero democratize financial management for small businesses",
        icon: Upload
    },
    {
        year: "2020s",
        title: "AI-Powered Financial Intelligence",
        description: "Machine learning algorithms automate transaction categorization, fraud detection, and predictive financial analytics",
        icon: Brain
    },
    {
        year: "2024+",
        title: "Autonomous Financial Operations",
        description: "AI agents handle complete financial workflows - from invoice processing to compliance reporting and strategic forecasting",
        icon: Bot
    }
];

// Enhanced statistics data
const stats = [
    { number: "89%", label: "Reduction in Processing Time", icon: Timer, color: "from-green-500 to-emerald-500" },
    { number: "5.2x", label: "Faster Financial Reporting", icon: FileText, color: "from-blue-500 to-cyan-500" },
    { number: "24/7", label: "Automated Compliance Monitoring", icon: Shield, color: "from-yellow-500 to-orange-500" },
    { number: "94%", label: "Accuracy in Financial Data", icon: Target, color: "from-purple-500 to-pink-500" }
];

// Enhanced advantages data
const advantages = [
    {
        title: "🧮 Intelligent Financial Automation",
        description: "AI agents automatically categorize transactions, reconcile accounts, and generate financial reports with 99.7% accuracy, eliminating manual data entry and human errors.",
        icon: Calculator,
        gradient: "from-blue-500 to-indigo-600",
        benefits: [
            "Automated transaction categorization",
            "Real-time account reconciliation",
            "Intelligent expense recognition",
            "Seamless bank integration",
            "Multi-currency processing"
        ]
    },
    {
        title: "📊 Predictive Financial Analytics",
        description: "Advanced AI models analyze historical data, market trends, and business patterns to provide accurate cash flow forecasts and strategic financial insights.",
        icon: BarChart3,
        gradient: "from-green-500 to-emerald-600",
        benefits: [
            "Cash flow forecasting",
            "Budget variance analysis",
            "Revenue trend prediction",
            "Risk assessment modeling",
            "Profitability optimization"
        ]
    },
    {
        title: "🏛️ Compliance & Risk Management",
        description: "AI-powered compliance monitoring ensures adherence to financial regulations, tax requirements, and industry standards while identifying potential risks proactively.",
        icon: Shield,
        gradient: "from-purple-500 to-pink-600",
        benefits: [
            "Automated compliance checking",
            "Regulatory update monitoring",
            "Audit trail maintenance",
            "Risk pattern detection",
            "Policy violation alerts"
        ]
    },
    {
        title: "💰 Cost Optimization Intelligence",
        description: "Smart expense analysis and budget optimization tools identify cost-saving opportunities, eliminate wasteful spending, and maximize financial efficiency.",
        icon: DollarSign,
        gradient: "from-orange-500 to-red-600",
        benefits: [
            "Expense pattern analysis",
            "Budget optimization recommendations",
            "Vendor cost comparison",
            "Duplicate payment detection",
            "Procurement savings identification"
        ]
    },
    {
        title: "🚀 Real-Time Financial Intelligence",
        description: "AI agents provide instant financial insights, real-time dashboard updates, and proactive alerts for critical financial events and opportunities.",
        icon: Zap,
        gradient: "from-cyan-500 to-blue-600",
        benefits: [
            "Real-time financial dashboards",
            "Automated financial alerts",
            "Performance metric tracking",
            "Exception reporting",
            "Strategic decision support"
        ]
    }
];

// ROI Statistics
const roiStats = [
    { metric: "85%", label: "Reduction in Manual Processing", icon: Timer },
    { metric: "73%", label: "Decrease in Financial Errors", icon: CheckCircle },
    { metric: "62%", label: "Faster Month-End Closing", icon: Calendar },
    { metric: "91%", label: "Improvement in Compliance", icon: Shield },
    { metric: "68%", label: "Cost Savings on Operations", icon: DollarSign },
    { metric: "420%", label: "Average ROI in First Year", icon: TrendingUp }
];

// Industry Impact Stats
const industryStats = [
    { number: "92%", description: "of finance teams are implementing AI-powered automation tools within the next 18 months" },
    { number: "$12.8B", description: "projected AI in finance market size by 2027, growing at 23.6% CAGR annually" },
    { number: "78%", description: "of CFOs expect AI to transform financial operations and strategic decision-making" },
    { number: "6.3x", description: "faster financial reporting achieved by organizations using AI-powered finance tools" }
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
    const ref = useRef<HTMLSpanElement>(null);

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
                    const numericEnd = parseFloat(end);
                    setCount(Math.floor(progress * numericEnd * 10) / 10);
                } else if (typeof end === 'string') {
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
            {financeTimeline.map((item, index) => (
                <div
                    key={index}
                    ref={el => itemRefs.current[index] = el}
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
    const ref = useRef<HTMLDivElement>(null);

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

// Main Component
export default function FinancePage() {
    const router = useRouter();
    const [currentAgentIndex, setCurrentAgentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAgentIndex((prev) => (prev + 1) % financeCategory.agents.length);
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
                            🚀 Revolutionizing Financial Operations • 5.2x Faster Reporting • 89% Processing Time Reduction
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight animate-fade-in-up">
                        The Future of<br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                            Finance & Accounting AI
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl lg:text-3xl text-slate-400 max-w-5xl mx-auto leading-relaxed mb-12 animate-fade-in-up delay-200">
                        Transform your financial operations with intelligent AI agents that automate bookkeeping, streamline compliance, generate accurate forecasts, and deliver real-time insights.
                        Experience 5.2x faster reporting and 89% reduction in processing time.
                        <span className="text-white font-medium bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            {" "}Revolutionary financial automation at your fingertips.
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
                        <span className="text-slate-400 text-xs">Discover Finance AI</span>
                        <ChevronDown className="w-6 h-6 text-slate-400" />
                    </div>
                </div>
            </section>

            {/* Industry Impact Section */}
            <section className="relative w-full py-20 px-4 bg-gradient-to-r from-slate-900/80 to-slate-800/60">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Finance AI is <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Transforming Business Operations</span>
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
            
            {/* Finance & Accounting History Section */}
            <section id="history" className="relative w-full py-32 px-4 bg-gradient-to-r from-slate-900/50 to-slate-800/30">
                            <div className="max-w-7xl mx-auto">
                                <div className="text-center mb-20">
                                    <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                                        <Clock className="w-5 h-5 mr-3 text-blue-400" />
                                        Financial Evolution Timeline
                                    </div>
            
                                    <h2 className="text-5xl md:text-7xl font-bold max-w-6xl mx-auto mb-8 leading-tight">
                                    From Manual Bookkeeping to <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                                    AI-Powered Financial Operations</span>
                                    </h2>
            
                                    <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                                    Finance and accounting used to be dominated by manual ledger entries, endless spreadsheets, and time-consuming reconciliations. 
                                    Today, AI agents have revolutionized financial operations — automating invoicing, expense tracking, financial reporting, 
                                    and compliance monitoring while delivering real-time insights for strategic decision-making.
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
                                                <h3 className="text-2xl font-bold text-white">The Financial AI Revolution</h3>
                                            </div>
                                            <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                            AI agents are now transforming modern finance and accounting practices. 
                                            From intelligent expense categorization and fraud detection to automated financial reporting and cash flow forecasting — 
                                            these agents eliminate manual errors, ensure regulatory compliance, and provide predictive insights for better business decisions.
                                            </p>
                                            <p className="text-slate-400 text-lg leading-relaxed">
                                            They process transactions instantly, detect anomalies in real-time, and help CFOs make data-driven strategic decisions.
                                            </p>
                                        </div>
            
                                        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 hover:bg-slate-800/60 transition-all duration-300">
                                            <div className="flex items-center mb-6">
                                                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                                                    <TrendingUp className="w-6 h-6 text-white" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-white">What's Next in Financial AI?</h3>
                                            </div>
                                            <p className="text-slate-400 text-lg leading-relaxed">
                                            The future of finance lies in fully autonomous financial ecosystems.
                                            </p>
                                            <p className="text-slate-400 text-lg leading-relaxed">
                                            Imagine AI agents that automatically reconcile accounts, generate tax filings, predict market trends, 
                                            optimize investment portfolios, and provide strategic financial advice — all without human intervention. 
                                            From transaction processing to strategic planning, AI will power the entire financial workflow.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
            
                        {/* Enhanced Advantages Section */}
                        <section id="benefits" className="relative w-full py-32 px-4">
                            <div className="max-w-7xl mx-auto">
                                <div className="text-center mb-20">
                                    <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                                        <Award className="w-5 h-5 mr-3 text-emerald-400" />
                                        Competitive Advantages
                                    </div>
            
                                    <h2 className="text-5xl md:text-7xl font-bold max-w-6xl mx-auto mb-8 leading-tight">
                                    Why Finance AI Agents Are <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">Game Changers</span>
                                    </h2>
            
                                    <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                                    Finance AI Agents are revolutionizing financial management. These aren't just calculators — 
                                    they're intelligent systems that analyze patterns, automate workflows, and drive financial performance. 
                                    From automated bookkeeping to predictive analytics, 
                                    AI agents are helping businesses achieve financial excellence, reduce costs, and accelerate growth.
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
            
                        {/* AI Agents Showcase */}
                        <section id="agents" className="relative w-full py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
                            <div className="max-w-7xl mx-auto">
                                <div className="text-center mb-20">
                                    <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                                        <Brain className="w-5 h-5 mr-3 text-purple-400" />
                                        AI Agents Portfolio
                                    </div>
            
                                    <h2 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto mb-8 leading-tight">
                                        Meet Your <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Financial AI Team</span>
                                    </h2>
            
                                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                    Your AI-powered financial crew works 24/7 — processing transactions, analyzing cash flows, 
                                    generating reports, and monitoring compliance in real-time. Whether it's an AI bookkeeper that automates entries, 
                                    or a forecasting engine that predicts market trends, these agents are built to optimize financial performance and ensure accuracy.
                                    </p>
                                </div>
            
                                {/* Featured Agent Carousel */}
                                <div className="mb-20">
                                    <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 text-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
                                        <div className="relative z-10">
                                            <div className="mb-8">
                                                <div className={`inline-flex w-28 h-28 rounded-3xl bg-gradient-to-r ${financeCategory.agents[currentAgentIndex].color} items-center justify-center text-5xl mb-6 animate-pulse shadow-2xl`}>
                                                    {financeCategory.agents[currentAgentIndex].icon}
                                                </div>
                                                <h3 className="text-4xl font-bold text-white mb-6">
                                                    {financeCategory.agents[currentAgentIndex].name}
                                                </h3>
                                                <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                                    {financeCategory.agents[currentAgentIndex].description}
                                                </p>
                                            </div>
            
                                            <div className="flex justify-center space-x-3 mb-8">
                                                {financeCategory.agents[currentAgentIndex].tags.map((tag, index) => (
                                                    <span key={index} className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
            
                                            <div className="flex justify-center space-x-2">
                                                {financeCategory.agents.map((_, index) => (
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
                                <AgentSlider category={financeCategory} />
            
                                {/* <div className="text-center">
                                    <button className="px-10 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-slate-100 hover:shadow-2xl hover:shadow-white/10 transform hover:scale-105 transition-all duration-300 text-lg">
                                        Explore All {financeCategory.agents.length} AI Agents
                                    </button>
                                </div> */}
                            </div>
                        </section>
            
                        {/* ROI Section */}
                        <section id="roi" className="relative w-full py-32 px-4">
                            <div className="max-w-7xl mx-auto">
                                <div className="text-center mb-20">
                                    <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                                        <BarChart3 className="w-5 h-5 mr-3 text-green-400" />
                                        Return on Investment
                                    </div>
            
                                    <h2 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto mb-8 leading-tight">
                                        Measurable <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">Results</span> That Matter
                                    </h2>
            
                                    <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                                    Our AI Finance Agents are engineered for impact. From reducing processing time to improving accuracy, 
                                    they deliver tangible results that drive financial performance and operational efficiency — 
                                    all while ensuring compliance and strategic insights.
                                    </p>
                                </div>
            
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                                    {financeROIStats.map((stat, index) => (
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
                                        Average ROI: <span className="text-green-400">420% in First Year</span>
                                    </h3>
                                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
                                    Organizations leveraging our Finance AI Agents experience an
                                     average return of $4.20 for every dollar invested, thanks to automated processing, 
                                    intelligent insights, and strategic decision-making capabilities that drive financial excellence.
                                    </p>
                                    {/* <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
                                        Calculate Your ROI
                                    </button> */}
                                </div>
                            </div>
                        </section>

                        {/* Contact Section */}
                        <section id="contact" className="relative w-full py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
                            <div className="max-w-7xl mx-auto">
                                <div className="text-center mb-20">
                                    <h2 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto mb-8 leading-tight">
                                    Ready to Transform Your <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Financial Operations?</span>
                                    </h2>
                                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                    Join leading enterprises and financial institutions already using AI agents to optimize accounting processes, 
                                    reduce costs, and unlock strategic insights —
                                     from bookkeeping to financial planning.
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
                                                        <p className="text-slate-400">Expert assistance anytime</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                                                        <Shield className="w-6 h-6 text-white" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-white font-semibold">SOX Compliant</h4>
                                                        <p className="text-slate-400">Enterprise-grade security</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
            
                                        <div className="space-y-4">
                                            <div className="flex items-center text-slate-300">
                                                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                                                contact@mercato.agency
                                            </div>
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
            