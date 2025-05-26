"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Play, Star, Users, Zap, Shield, Clock, Heart, TrendingUp, Award, CheckCircle, ArrowRight, Calendar, FileText, Brain, Layers, Lightbulb, Activity, Database, Lock, Globe, Phone, Mail, MapPin, Target, RefreshCw, HeartHandshake, Building2, UserCheck, DollarSign, BarChart3, MessageCircle, Headphones, Bot, Smile, ThumbsUp, Timer, AlertCircle, Search, Eye, FileSearch, Download, Upload, Filter, Scan, ShoppingCart, Package, Gift, CreditCard } from "lucide-react";
import Footer from "@/components/Footer";
import { NavbarDemo } from "@/components/navbar";
import { AgentSlider } from "@/components/AgentSlider";

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

interface EcommerceCategory {
    name: string;
    description: string;
    agents: Agent[];
}

// E-commerce AI agents data
const ecommerceCategory: EcommerceCategory = {
    "name": "E-commerce AI Agents",
    "description": "Revolutionary shopping experiences powered by AI that boost conversions, personalize customer journeys, and maximize revenue with intelligent automation.",
    "agents": [
        {
            "id": 1,
            "name": "Product Recommendation AI Agent",
            "description": "Delivers hyper-personalized product suggestions based on real-time behavior, purchase history, and predictive analytics to boost conversions by 67%.",
            "icon": "🛒",
            "color": "from-blue-500 to-indigo-600",
            "tags": ["Personalization", "ML Recommendations", "Conversion Optimization"],
            "rating": "4.9",
            "usage": "28.5k",
            "speed": "Real-time"
        },
        {
            "id": 2,
            "name": "Customer Support Chat Agent",
            "description": "24/7 intelligent chat support that handles order inquiries, returns, product questions, and seamlessly escalates complex issues to human agents.",
            "icon": "💬",
            "color": "from-green-500 to-emerald-600",
            "tags": ["Live Chat", "Order Support", "Multilingual"],
            "rating": "4.8",
            "usage": "45.2k",
            "speed": "Instant"
        },
        {
            "id": 3,
            "name": "Inventory Forecasting Agent",
            "description": "AI-powered demand prediction that optimizes stock levels, prevents stockouts, and reduces carrying costs with 94% accuracy forecasting.",
            "icon": "📦",
            "color": "from-purple-500 to-pink-600",
            "tags": ["Inventory Management", "Demand Forecasting", "Supply Chain"],
            "rating": "4.9",
            "usage": "18.7k",
            "speed": "Daily Updates"
        },
        {
            "id": 4,
            "name": "Price Optimization Agent",
            "description": "Dynamic pricing AI that analyzes competitor prices, market demand, and customer behavior to maximize profit margins and sales velocity.",
            "icon": "💰",
            "color": "from-yellow-500 to-orange-600",
            "tags": ["Dynamic Pricing", "Competitive Analysis", "Revenue Optimization"],
            "rating": "4.7",
            "usage": "12.3k",
            "speed": "Hourly"
        },
        {
            "id": 5,
            "name": "Review Analytics Agent",
            "description": "Intelligent sentiment analysis and review monitoring that extracts actionable insights from customer feedback to improve products and service.",
            "icon": "⭐",
            "color": "from-teal-500 to-cyan-600",
            "tags": ["Sentiment Analysis", "Review Management", "Customer Insights"],
            "rating": "4.8",
            "usage": "22.1k",
            "speed": "Real-time"
        },
        {
            "id": 6,
            "name": "Abandoned Cart Recovery Agent",
            "description": "Smart cart abandonment recovery with personalized email sequences, targeted offers, and behavioral triggers to recover 35% of lost sales.",
            "icon": "🔄",
            "color": "from-red-500 to-pink-600",
            "tags": ["Cart Recovery", "Email Marketing", "Behavioral Analysis"],
            "rating": "4.9",
            "usage": "31.8k",
            "speed": "Automated"
        }
    ]
};

// E-commerce evolution timeline data
interface TimelineItem {
    year: string;
    title: string;
    description: string;
    icon: any;
}

const ecommerceTimeline: TimelineItem[] = [
    {
        year: "1960s",
        title: "Electronic Data Interchange (EDI)",
        description: "Early electronic commerce between businesses using standardized document formats for transactions, laying the foundation for digital commerce",
        icon: FileText
    },
    {
        year: "1990s",
        title: "First Online Stores",
        description: "Amazon (1995) and eBay (1995) launch, pioneering online retail with catalog browsing and digital payment systems",
        icon: ShoppingCart
    },
    {
        year: "2000s",
        title: "PayPal & Secure Payments",
        description: "Digital payment platforms emerge, making online transactions safer and more convenient for consumers worldwide",
        icon: CreditCard
    },
    {
        year: "2005",
        title: "Mobile Commerce Begins",
        description: "First mobile shopping apps launch, enabling customers to browse and purchase products from smartphones",
        icon: Phone
    },
    {
        year: "2010",
        title: "Social Commerce",
        description: "Facebook and Instagram introduce shopping features, integrating social media with e-commerce experiences",
        icon: Heart
    },
    {
        year: "2015",
        title: "Personalization Engines",
        description: "Machine learning algorithms begin powering product recommendations and personalized shopping experiences",
        icon: Brain
    },
    {
        year: "2018",
        title: "Voice Commerce",
        description: "Alexa and Google Assistant enable voice-activated shopping, introducing hands-free purchasing experiences",
        icon: MessageCircle
    },
    {
        year: "2020",
        title: "AI-Powered Shopping",
        description: "Advanced AI chatbots, visual search, and predictive analytics transform how customers discover and buy products",
        icon: Bot
    },
    {
        year: "2024+",
        title: "Autonomous E-commerce",
        description: "AI agents handle entire customer journeys autonomously - from personalization to fulfillment and post-purchase support",
        icon: Lightbulb
    }
];

// Enhanced statistics data
const stats = [
    { number: "67%", label: "Increase in Conversion Rates", icon: Target, color: "from-green-500 to-emerald-500" },
    { number: "4.6x", label: "Revenue Growth Acceleration", icon: TrendingUp, color: "from-blue-500 to-cyan-500" },
    { number: "24/7", label: "Automated Customer Support", icon: Clock, color: "from-yellow-500 to-orange-500" },
    { number: "89%", label: "Reduction in Cart Abandonment", icon: ShoppingCart, color: "from-purple-500 to-pink-500" }
];

// Enhanced advantages data
const advantages = [
    {
        title: "🛒 Hyper-Personalization Engine",
        description: "AI agents analyze browsing history, purchase patterns, and real-time behavior to deliver product recommendations that convert 3x better than generic suggestions.",
        icon: Target,
        gradient: "from-blue-500 to-indigo-600",
        benefits: [
            "Real-time behavioral analysis",
            "Predictive product matching",
            "Dynamic content personalization",
            "Cross-sell and upsell automation",
            "Personalized pricing strategies"
        ]
    },
    {
        title: "💬 24/7 Intelligent Support",
        description: "AI-powered customer service agents handle order inquiries, product questions, returns, and complaints with human-like understanding and empathy.",
        icon: MessageCircle,
        gradient: "from-green-500 to-emerald-600",
        benefits: [
            "Instant order status updates",
            "Multilingual customer support",
            "Intelligent issue classification",
            "Seamless human handoff",
            "Proactive problem resolution"
        ]
    },
    {
        title: "📊 Predictive Analytics",
        description: "Advanced AI models forecast demand, optimize inventory, and identify trending products before competitors, ensuring you never miss sales opportunities.",
        icon: BarChart3,
        gradient: "from-purple-500 to-pink-600",
        benefits: [
            "Demand forecasting accuracy",
            "Inventory optimization",
            "Trend prediction models",
            "Seasonal planning insights",
            "Supplier performance analytics"
        ]
    },
    {
        title: "💰 Revenue Optimization",
        description: "Dynamic pricing algorithms and conversion optimization tools automatically adjust prices, promotions, and product positioning to maximize profitability.",
        icon: DollarSign,
        gradient: "from-orange-500 to-red-600",
        benefits: [
            "Dynamic pricing strategies",
            "Competitor price monitoring",
            "Promotion effectiveness tracking",
            "Margin optimization",
            "Revenue per visitor growth"
        ]
    },
    {
        title: "🚀 Marketing Automation",
        description: "AI agents create and execute personalized marketing campaigns, email sequences, and social media content that drives engagement and sales automatically.",
        icon: Zap,
        gradient: "from-cyan-500 to-blue-600",
        benefits: [
            "Automated email campaigns",
            "Social media management",
            "Content generation",
            "Customer segmentation",
            "Campaign performance optimization"
        ]
    }
];

// ROI Statistics
const roiStats = [
    { metric: "78%", label: "Boost in Repeat Customer Rate", icon: RefreshCw },
    { metric: "82%", label: "Reduction in Customer Support Costs", icon: DollarSign },
    { metric: "67%", label: "Increase in Average Order Value", icon: TrendingUp },
    { metric: "94%", label: "Improvement in Inventory Turnover", icon: Package },
    { metric: "35%", label: "Cart Abandonment Recovery Rate", icon: ShoppingCart },
    { metric: "460%", label: "Average ROI in First Year", icon: Award }
];

// Industry Impact Stats
const industryStats = [
    { number: "87%", description: "of e-commerce businesses are implementing AI-powered shopping experiences within 12 months" },
    { number: "$24.3B", description: "projected AI in e-commerce market size by 2028, growing at 15.7% CAGR" },
    { number: "73%", description: "of consumers expect personalized shopping experiences powered by AI technology" },
    { number: "4.2x", description: "higher conversion rates achieved by retailers using AI recommendation engines" }
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
            {ecommerceTimeline.map((item, index) => (
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
export default function EcommercePage() {
    const [currentAgentIndex, setCurrentAgentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAgentIndex((prev) => (prev + 1) % ecommerceCategory.agents.length);
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
                            🚀 Powering Next-Gen Shopping Experiences • 4.6x Revenue Growth • 67% Higher Conversions
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight animate-fade-in-up">
                        The Future of<br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                            E-commerce AI Agents
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl lg:text-3xl text-slate-400 max-w-5xl mx-auto leading-relaxed mb-12 animate-fade-in-up delay-200">
                        Transform your online store into an intelligent shopping destination with AI agents that personalize every customer journey, automate support, optimize pricing, and maximize conversions.
                        Experience 4.6x revenue growth and 67% higher conversion rates.
                        <span className="text-white font-medium bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            {" "}Revolutionary e-commerce automation awaits.
                        </span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up delay-400">
                        <button className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center text-lg">
                            Start Free 30-Day Trial
                            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        <button className="group px-10 py-5 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white font-semibold rounded-2xl hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 flex items-center text-lg">
                            <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                            Watch E-commerce Demo
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
                        <span className="text-slate-400 text-xs">Discover E-commerce AI</span>
                        <ChevronDown className="w-6 h-6 text-slate-400" />
                    </div>
                </div>
            </section>

            {/* Industry Impact Section */}
            <section className="relative w-full py-20 px-4 bg-gradient-to-r from-slate-900/80 to-slate-800/60">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Data Extraction AI is <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Transforming Industries</span>
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

            {/* Healthcare History Section */}
                        <section id="history" className="relative w-full py-32 px-4 bg-gradient-to-r from-slate-900/50 to-slate-800/30">
                            <div className="max-w-7xl mx-auto">
                                <div className="text-center mb-20">
                                    <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                                        <Clock className="w-5 h-5 mr-3 text-blue-400" />
                                        Data Extraction Timeline
                                    </div>
            
                                    <h2 className="text-5xl md:text-7xl font-bold max-w-6xl mx-auto mb-8 leading-tight">
                                    From Manual Data Entry to <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">AI-Powered Data Extraction</span>
                                    </h2>
            
                                    <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                                    Data handling has evolved dramatically — from error-prone manual entry and spreadsheet overload to today’s intelligent, 
                                    AI-driven data extraction systems. 
                                    Discover how AI agents are transforming the way businesses collect, extract, and utilize data across industries.
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
                                                <h3 className="text-2xl font-bold text-white">The AI Data Extraction Revolution</h3>
                                            </div>
                                            <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                            In a world overflowing with unstructured information, Data Extraction AI Agents are transforming how businesses unlock insights and drive decisions. 
                                            What once took hours of manual labor — parsing documents, pulling values from PDFs, emails, databases, 
                                            and websites — now happens in seconds with intelligent, automated precision.
                                            </p>
                                            <p className="text-slate-400 text-lg leading-relaxed">
                                            From scraping web content to extracting financial data from invoices or pulling insights from customer reviews, 
                                            these agents aren’t just fast — they’re accurate, scalable, and context-aware.
                                            </p>
                                        </div>
            
                                        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 hover:bg-slate-800/60 transition-all duration-300">
                                            <div className="flex items-center mb-6">
                                                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                                                    <TrendingUp className="w-6 h-6 text-white" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-white">What's Next?</h3>
                                            </div>
                                            <p className="text-slate-400 text-lg leading-relaxed">
                                            The future of data extraction lies in autonomous AI pipelines — agents that not only extract data, but understand its context, 
                                            enrich it with external sources, and trigger downstream actions automatically. Imagine AI that reads an invoice, 
                                            verifies it against purchase orders, updates your system, and alerts finance — all without human intervention.
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
                                    Why Data Extraction AI Agents Are <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">Game Changers</span>
                                    </h2>
            
                                    <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                                    Discover how AI-powered Data Extraction Agents are revolutionizing how organizations handle information. These aren’t just tools — they’re intelligent, 
                                    always-on experts designed to pull value from data chaos and deliver real-time insights that power decisions, automation, and growth.
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
                                        Meet Your <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Data Extraction AI Team</span> Team
                                    </h2>
            
                                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                    Specialized AI agents designed to redefine support — delivering fast, personalized, 
                                    and 24/7 customer service across platforms, industries, and languages. From automating responses to intelligently routing issues, 
                                    these AI agents eliminate bottlenecks, reduce ticket volume, and boost customer satisfaction by over 90%.
                                    </p>
                                </div>
            
                                {/* Featured Agent Carousel */}
                                <div className="mb-20">
                                    <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 text-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
                                        <div className="relative z-10">
                                            <div className="mb-8">
                                                <div className={`inline-flex w-28 h-28 rounded-3xl bg-gradient-to-r ${ecommerceCategory.agents[currentAgentIndex].color} items-center justify-center text-5xl mb-6 animate-pulse shadow-2xl`}>
                                                    {ecommerceCategory.agents[currentAgentIndex].icon}
                                                </div>
                                                <h3 className="text-4xl font-bold text-white mb-6">
                                                    {ecommerceCategory.agents[currentAgentIndex].name}
                                                </h3>
                                                <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                                    {ecommerceCategory.agents[currentAgentIndex].description}
                                                </p>
                                            </div>
            
                                            <div className="flex justify-center space-x-3 mb-8">
                                                {ecommerceCategory.agents[currentAgentIndex].tags.map((tag, index) => (
                                                    <span key={index} className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
            
                                            <div className="flex justify-center space-x-2">
                                                {ecommerceCategory.agents.map((_, index) => (
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
                                <AgentSlider category={ecommerceCategory} />
            
                                {/* <div className="text-center">
                                    <button className="px-10 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-slate-100 hover:shadow-2xl hover:shadow-white/10 transform hover:scale-105 transition-all duration-300 text-lg">
                                        Explore All {customerServiceCategory.agents.length} AI Agents
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
                                    Our AI Data Extraction Agents are engineered for impact. From boosting satisfaction to slashing response times, 
                                    they deliver tangible results that drive business growth and operational efficiency — all while enhancing the data extraction experience.
                                    </p>
                                </div>
            
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                                    {roiStats.map((stat, index) => (
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
                                        Average ROI: <span className="text-green-400">210% in First Year</span>
                                    </h3>
                                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
                                    Organizations leveraging our Customer Service AI Agents experience an
                                     average return of $2.10 for every dollar invested, thanks to rapid resolution cycles, 
                                    intelligent automation, and strategic insights that
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
                                    Ready to Transform the Way You <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Solve Problems?</span>
                                    </h2>
                                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                    Join thousands of forward-thinking organizations already using AI agents to tackle their toughest challenges, 
                                    streamline operations, and unlock new growth opportunities.
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
                                                        <h4 className="text-white font-semibold">HIPAA Compliant</h4>
                                                        <p className="text-slate-400">Enterprise-grade security</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
            
                                        <div className="space-y-4">
                                            <div className="flex items-center text-slate-300">
                                                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                                                contact@mercato.ai
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
            
                                    <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8">
                                        <h3 className="text-2xl font-bold text-white mb-6">Request a Demo</h3>
                                        <form className="space-y-6">
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Full Name"
                                                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="email"
                                                    placeholder="Email Address"
                                                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Organization Name"
                                                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                                                />
                                            </div>
                                            <div>
                                                <select className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors duration-300">
                                                    <option>Organization Size</option>
                                                    <option>1-10 employees</option>
                                                    <option>11-50 employees</option>
                                                    <option>51-200 employees</option>
                                                    <option>200+ employees</option>
                                                </select>
                                            </div>
                                            <div>
                                                <textarea
                                                    placeholder="Tell us about your healthcare challenges..."
                                                    rows="4"
                                                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                                                ></textarea>
                                            </div>
                                            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                                                Schedule Demo
                                            </button>
                                        </form>
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
            
            