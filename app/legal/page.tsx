
"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Play, Star, Users, Zap, Shield, Clock, Heart, TrendingUp, Award, CheckCircle, ArrowRight, Calendar, FileText, Brain, Layers, Lightbulb, Activity, Database, Lock, Globe, Phone, Mail, MapPin, Target, RefreshCw, HeartHandshake, Building2, UserCheck, DollarSign, BarChart3, Scale, Gavel, BookOpen, Search, AlertTriangle } from "lucide-react";
import { AgentSlider } from "@/components/AgentSlider";
import { NavbarDemo } from "@/components/navbar";
import Footer from "@/components/Footer";
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

interface LegalCategory {
    name: string;
    description: string;
    agents: Agent[];
}

// Legal agents data
const legalCategory: LegalCategory = {
    "name": "Legal AI Agents",
    "description": "Revolutionary AI agents transforming legal research, contract analysis, document review, and case management across law firms and legal departments.",
    "agents": [
        {
            "id": 19,
            "name": "Contract Analysis AI Agent",
            "description": "Review and analyze contracts for key terms, risks, and compliance issues with detailed summaries and recommendations.",
            "icon": "📜",
            "color": "from-slate-500 to-gray-600",
            "tags": ["Contracts", "Analysis", "Risk Assessment"],
            "rating": "4.9",
            "usage": "12.7k",
            "speed": "Fast"
        },
        {
            "id": 20,
            "name": "Legal Research AI Agent",
            "description": "Conduct comprehensive legal research, find relevant case law, and generate detailed research reports with citations.",
            "icon": "⚖️",
            "color": "from-blue-500 to-indigo-600",
            "tags": ["Research", "Case Law", "Citations"],
            "rating": "4.8",
            "usage": "9.5k",
            "speed": "Medium"
        },
        {
            "id": 21,
            "name": "Compliance Monitoring AI Agent",
            "description": "Monitor regulatory compliance, track changes in laws, and alert teams to potential compliance risks and requirements.",
            "icon": "🛡️",
            "color": "from-red-500 to-pink-600",
            "tags": ["Compliance", "Monitoring", "Regulations"],
            "rating": "4.8",
            "usage": "7.3k",
            "speed": "Fast"
        },
        {
            "id": 22,
            "name": "Document Redaction AI Agent",
            "description": "Automatically identify and redact sensitive information from legal documents while maintaining document integrity.",
            "icon": "✂️",
            "color": "from-purple-500 to-violet-600",
            "tags": ["Redaction", "Privacy", "Document Processing"],
            "rating": "4.7",
            "usage": "6.1k",
            "speed": "Fast"
        },
        {
            "id": 78,
            "name": "Document Review AI Agent",
            "description": "Analyze and review legal documents for accuracy, consistency, and compliance with relevant standards and laws.",
            "icon": "📑",
            "color": "from-indigo-500 to-blue-600",
            "tags": ["Document Review", "Legal", "Compliance"],
            "rating": "4.8",
            "usage": "10.4k",
            "speed": "Medium"
        },
        {
            "id": 79,
            "name": "Contract Management AI Agent",
            "description": "Manage contract lifecycle including creation, tracking, renewals, and audit with automated alerts and version control.",
            "icon": "📝",
            "color": "from-green-500 to-teal-600",
            "tags": ["Contracts", "Management", "Automation"],
            "rating": "4.7",
            "usage": "8.9k",
            "speed": "Fast"
        },
        {
            "id": 80,
            "name": "Legal Document Classifier AI Agent",
            "description": "Classify legal documents into predefined categories for efficient organization, retrieval, and processing.",
            "icon": "📂",
            "color": "from-purple-600 to-pink-700",
            "tags": ["Classification", "Legal Documents", "Organization"],
            "rating": "4.6",
            "usage": "7.8k",
            "speed": "Fast"
        }
    ]
};

// Legal timeline data
interface TimelineItem {
    year: string;
    title: string;
    description: string;
    icon: any;
}

const legalTimeline: TimelineItem[] = [
    {
        year: "1750s",
        title: "Common Law Foundation",
        description: "Establishment of systematic legal precedents and case law documentation, creating the foundation for modern legal research and jurisprudence",
        icon: Scale
    },
    {
        year: "1800s",
        title: "Legal Publishing Revolution",
        description: "Development of comprehensive legal databases and law reports, enabling standardized legal research and citation practices across jurisdictions",
        icon: BookOpen
    },
    {
        year: "1870s",
        title: "Bar Association Formation",
        description: "Professional legal organizations established standardized practices for legal education, ethics, and professional conduct in law practice",
        icon: Building2
    },
    {
        year: "1920s",
        title: "Legal Research Methodologies",
        description: "Systematic approaches to legal research developed, including citation standards and case analysis frameworks for legal practitioners",
        icon: Search
    },
    {
        year: "1970s",
        title: "Computer-Assisted Legal Research",
        description: "Introduction of digital legal databases like Westlaw and LexisNexis revolutionized legal research and case law accessibility",
        icon: Database
    },
    {
        year: "1990s",
        title: "Electronic Document Management",
        description: "Digital document storage and management systems transformed law firm operations and legal document organization practices",
        icon: FileText
    },
    {
        year: "2000s",
        title: "Online Legal Platforms",
        description: "Web-based legal research tools and case management systems enabled remote legal work and collaborative legal practice",
        icon: Globe
    },
    {
        year: "2010s",
        title: "Legal Analytics & Big Data",
        description: "Advanced analytics applied to legal outcomes, judge behavior patterns, and case prediction for strategic legal decision-making",
        icon: BarChart3
    },
    {
        year: "2020+",
        title: "AI-Powered Legal Intelligence",
        description: "Artificial Intelligence transforms legal research, contract analysis, document review, and predictive legal analytics across all practice areas",
        icon: Brain
    }
];

// Enhanced statistics data
const stats = [
    { number: "85%", label: "Faster Legal Research", icon: Clock, color: "from-green-500 to-emerald-500" },
    { number: "24/7", label: "Legal Support Access", icon: Users, color: "from-blue-500 to-cyan-500" },
    { number: "92%", label: "Document Analysis Accuracy", icon: Shield, color: "from-purple-500 to-pink-500" },
    { number: "96%", label: "Legal Professional Satisfaction", icon: Star, color: "from-yellow-500 to-orange-500" }
];

// Enhanced advantages data
const advantages = [
    {
        title: "Intelligent Legal Research",
        description: "AI agents revolutionize legal research by instantly analyzing vast legal databases, case law, statutes, and regulations to provide comprehensive legal insights and accurate citations.",
        icon: Search,
        gradient: "from-blue-500 to-indigo-600",
        benefits: [
            "Automated case law analysis and precedent identification",
            "Instant statute and regulation cross-referencing",
            "Real-time legal citation verification and formatting",
            "Comprehensive legal database searching across jurisdictions",
            "Predictive case outcome analysis and recommendations"
        ]
    },
    {
        title: "Advanced Contract Analysis",
        description: "AI-powered contract review and analysis using natural language processing to identify risks, obligations, and key terms in legal documents with unprecedented accuracy.",
        icon: FileText,
        gradient: "from-pink-500 to-rose-600",
        benefits: [
            "Automated contract clause identification and analysis",
            "Risk assessment and compliance checking",
            "Key term extraction and obligation mapping",
            "Contract comparison and redlining automation",
            "Deadline and milestone tracking systems"
        ]
    },
    {
        title: "Document Review & Due Diligence",
        description: "Advanced AI systems that streamline document review processes, identify privileged materials, and conduct comprehensive due diligence with machine learning precision.",
        icon: Shield,
        gradient: "from-green-500 to-teal-600",
        benefits: [
            "Privileged document identification and protection",
            "Automated document categorization and tagging",
            "Relevance scoring and priority ranking",
            "Confidentiality and privacy compliance checking",
            "Large-scale litigation document processing"
        ]
    },
    {
        title: "Legal Case Management",
        description: "AI-powered case management systems that organize legal matters, track deadlines, manage workflows, and provide strategic insights for optimal case handling.",
        icon: Target,
        gradient: "from-purple-500 to-violet-600",
        benefits: [
            "Intelligent case timeline and deadline management",
            "Automated legal workflow optimization",
            "Strategic case planning and resource allocation",
            "Client communication and progress tracking",
            "Predictive case analytics and success probability"
        ]
    }
];

// ROI Statistics
const roiStats = [
    { metric: "78%", label: "Reduction in Legal Research Time", icon: Clock },
    { metric: "$2.4M", label: "Annual Savings from Document Automation", icon: DollarSign },
    { metric: "64%", label: "Improvement in Case Preparation Efficiency", icon: Users },
    { metric: "89%", label: "Increase in Legal Workflow Productivity", icon: TrendingUp },
    { metric: "73%", label: "Better Legal Outcome Prediction Accuracy", icon: Award },
    { metric: "12x", label: "Faster Contract Review Process", icon: Zap }
];

// Industry Impact Stats
const industryStats = [
    { number: "76%", description: "of law firms plan to implement AI solutions within the next 24 months" },
    { number: "$45B", description: "projected global legal tech market size by 2027" },
    { number: "320M+", description: "legal documents processed by AI systems annually" },
    { number: "58%", description: "reduction in legal operational costs with AI implementation" }
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
            {legalTimeline.map((item, index) => (
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

// Legal ROI statistics interface
interface RoiStat {
    icon: any;
    metric: number | string;
    label: string;
}

// Legal ROI statistics
const legalRoiStats: RoiStat[] = [
    {
        icon: TrendingUp,
        metric: 42,
        label: "Legal Research Efficiency"
    },
    {
        icon: Shield,
        metric: 38,
        label: "Document Review Accuracy"
    },
    {
        icon: DollarSign,
        metric: 31,
        label: "Legal Operational Cost Reduction"
    }
];

// Main Component
export default function LegalPage() {
    const router = useRouter();
    const [currentAgentIndex, setCurrentAgentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAgentIndex((prev) => (prev + 1) % legalCategory.agents.length);
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
                            ⚖️ Revolutionizing Legal Practice with AI • Trusted by 15,000+ Law Firms Globally
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight animate-fade-in-up">
                        The Future of<br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                            Legal Intelligence
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl lg:text-3xl text-slate-400 max-w-5xl mx-auto leading-relaxed mb-12 animate-fade-in-up delay-200">
                        Transform legal research, contract analysis, and document review with AI agents that analyze,
                        automate, and optimize legal workflows 24/7,
                        reducing legal research time by up to 85% while improving document analysis accuracy by 92%.
                        <span className="text-white font-medium bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            {" "}Experience next-generation legal practice.
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
                            Legal AI Agents are <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Transforming Legal Practice</span>
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

            {/* Legal History Section */}
            <section id="history" className="relative w-full py-32 px-4 bg-gradient-to-r from-slate-900/50 to-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <Clock className="w-5 h-5 mr-3 text-blue-400" />
                            Legal Technology Evolution Timeline
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold max-w-6xl mx-auto mb-8 leading-tight">
                        From Manual Case Research to <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">AI-Powered Legal Intelligence</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                        The legal industry has transformed from paper-heavy law libraries to intelligent legal automation systems. 
                        Explore the revolutionary journey from traditional legal research methods to AI-driven case analysis, contract automation, and intelligent legal document processing revolutionizing law firms and legal departments globally.
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
                                    <h3 className="text-2xl font-bold text-white">⚖️ The AI Legal Revolution</h3>
                                </div>
                                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                    Today's AI-powered legal systems represent the pinnacle of decades of innovation in legal research, contract analysis, 
                                    and litigation support automation. From traditional manual case briefing to modern predictive legal analytics and intelligent document review, 
                                    the evolution of legal technology has reached its most sophisticated form — autonomous, data-driven AI agents that understand legal precedents and case patterns.
                                    These AI legal agents can analyze complex legal documents, extract key contract terms, automate legal research, and provide intelligent case strategy recommendations — 
                                    delivering 24/7 intelligent legal services to attorneys and unprecedented operational efficiency to law firms worldwide.
                                    
                                </p>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                AI Legal Agents now improve document review speed by 80%, reduce legal research time by 70%, 
                                and enhance contract analysis accuracy to 95% precision rates.
                                </p>
                            </div>

                            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 hover:bg-slate-800/60 transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                                        <TrendingUp className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">What's Next in Legal AI?</h3>
                                </div>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                The future of AI in Legal transcends automation — it's about predictive legal intelligence and strategic case insights. AI Legal agents will become intelligent legal partners, capable of 
                                Predicting case outcomes based on historical precedent analysis • Personalizing legal strategies based on judge preferences and case history patterns 
                                Creating seamless, automated contract generation and review processes • Detecting legal risks and compliance issues with advanced pattern recognition • 
                                Optimizing litigation strategies through real-time case law analysis and legal market intelligence with unprecedented accuracy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Legal Advantages Section */}
            <section id="benefits" className="relative w-full py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <Award className="w-5 h-5 mr-3 text-emerald-400" />
                            Strategic Legal Advantages
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold max-w-6xl mx-auto mb-8 leading-tight">
                        Why Legal AI Agents are <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">Law Firm Game Changers</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                        Discover how AI-powered legal systems are revolutionizing case research, enhancing client service, 
                        and delivering intelligent legal insights at enterprise scale. These agents aren't just legal tools — they're intelligent legal partners designed to empower attorneys and drive profitable growth for law firms.
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

            {/* Legal AI Agents Showcase */}
            <section id="agents" className="relative w-full py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <Brain className="w-5 h-5 mr-3 text-purple-400" />
                            Legal AI Agents Portfolio
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto mb-8 leading-tight">
                            Meet Your <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Legal AI</span> Team
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Specialized AI agents designed to optimize every aspect of legal operations — from contract analysis and legal research to case management and compliance monitoring. 
                        These intelligent legal partners work around the clock to enhance your law firm operations and deliver exceptional client service.
                        </p>
                    </div>

                    {/* Featured Agent Carousel */}
                    <div className="mb-20">
                        <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
                            <div className="relative z-10">
                                <div className="mb-8">
                                    <div className={`inline-flex w-28 h-28 rounded-3xl bg-gradient-to-r ${legalCategory.agents[currentAgentIndex].color} items-center justify-center text-5xl mb-6 animate-pulse shadow-2xl`}>
                                        {legalCategory.agents[currentAgentIndex].icon}
                                    </div>
                                    <h3 className="text-4xl font-bold text-white mb-6">
                                        {legalCategory.agents[currentAgentIndex].name}
                                    </h3>
                                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                        {legalCategory.agents[currentAgentIndex].description}
                                    </p>
                                </div>

                                <div className="flex justify-center space-x-3 mb-8">
                                    {legalCategory.agents[currentAgentIndex].tags.map((tag, index) => (
                                        <span key={index} className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-center space-x-2">
                                    {legalCategory.agents.map((_, index) => (
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
                    <AgentSlider category={legalCategory} />
                </div>
            </section>

            {/* Legal ROI Section */}
            <section id="roi" className="relative w-full py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <BarChart3 className="w-5 h-5 mr-3 text-green-400" />
                            Legal Investment Returns
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto mb-8 leading-tight">
                            Measurable <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">Efficiency Gains</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                        Our Legal AI agents deliver quantifiable improvements in document review, legal research, and case management,
                        ensuring your law firm operations generate exceptional value through reduced billable hours and enhanced client satisfaction.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {legalRoiStats.map((stat, index) => (
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
                            Average Legal ROI: <span className="text-green-400">380% in First Year</span>
                        </h3>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
                        Law firms implementing our Legal AI Agents achieve an average return of $3.80 for every dollar invested, through enhanced document processing efficiency, 
                        reduced legal research time, improved case preparation accuracy, and automated contract analysis that drives sustainable competitive advantage in the legal market.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative w-full py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto mb-8 leading-tight">
                        Ready to Transform Your <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Legal Practice?</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Join hundreds of forward-thinking law firms already leveraging AI agents to streamline document review, 
                        enhance legal research, automate contract analysis, and deliver superior client experiences that drive profitable growth and market leadership.
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
                                            <p className="text-slate-400">Expert legal guidance anytime</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                                            <Shield className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">Bar Compliant</h4>
                                            <p className="text-slate-400">Legal profession standards & ethics</p>
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