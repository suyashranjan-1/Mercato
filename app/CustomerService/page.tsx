"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { ChevronDown, Star, Users, Zap, Shield, Clock, TrendingUp, Award, CheckCircle, ArrowRight, Brain, Database, Globe, Phone, Mail, MapPin, DollarSign, BarChart3, MessageCircle, Bot, Smile, ThumbsUp, Timer } from "lucide-react";
import Footer from "@/components/Footer";
import { NavbarDemo } from "@/components/navbar";
import { AgentSlider } from "@/components/AgentSlider";
import ContactForm from "@/app/contact/page";

// --- TYPES & DATA ---

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
    path?: string;
}

interface CustomerServiceCategory {
    name: string;
    description: string;
    agents: Agent[];
}

const customerServiceCategory: CustomerServiceCategory = {
    name: "Customer Service AI Agents",
    description: "Transforming customer interactions with intelligent, personalized support that works 24/7 across all channels. Discover AI-powered solutions for instant support, live chat, complaint resolution, multichannel engagement, and more. Improve satisfaction, reduce costs, and streamline your customer service operations with Mercato's AI agents.",
    agents: [
        {
            id: 7,
            name: "Customer Support AI Agent",
            description: "Provide instant customer support with intelligent responses, ticket routing, and issue resolution capabilities. Enhance customer experience and boost loyalty with always-on AI-powered support.",
            icon: "🎧",
            color: "from-blue-500 to-indigo-600",
            tags: ["Support", "Chat", "Tickets", "24/7"],
            rating: "4.9",
            usage: "22.1k",
            speed: "Instant"
        },
        {
            id: 8,
            name: "Live Chat AI Agent",
            description: "Engage customers in real-time with contextual conversations, product recommendations, and seamless handoffs. Increase conversion rates and customer engagement with AI live chat.",
            icon: "💬",
            color: "from-green-500 to-teal-600",
            tags: ["Live Chat", "Real-time", "Engagement", "Conversion"],
            rating: "4.8",
            usage: "18.6k",
            speed: "Instant"
        },
        {
            id: 9,
            name: "Complaint Resolution AI Agent",
            description: "Handle customer complaints with empathy, systematic problem-solving, and satisfaction tracking. Reduce churn by resolving issues quickly and effectively.",
            icon: "🛠️",
            color: "from-red-500 to-pink-600",
            tags: ["Complaints", "Resolution", "Satisfaction", "Retention"],
            rating: "4.7",
            usage: "7.9k",
            speed: "Fast",
            path: "/agents/complaint-resolution-ai-agent"
        },
        {
            id: 61,
            name: "Customer Service AI Agent",
            description: "Assist customers across multiple channels with queries, issues, and requests using natural language processing. Deliver consistent, accurate answers and streamline customer journeys.",
            icon: "🤖",
            color: "from-sky-500 to-blue-700",
            tags: ["Customer Service", "Multichannel", "NLP", "Omnichannel"],
            rating: "4.8",
            usage: "20.3k",
            speed: "Fast"
        },
        {
            id: 62,
            name: "Email Categorization & Triage AI Agent",
            description: "Automatically sort and prioritize incoming customer emails for faster and more efficient resolution. Improve agent productivity and email response rates.",
            icon: "📬",
            color: "from-purple-500 to-indigo-700",
            tags: ["Email", "Sorting", "Triage", "Productivity"],
            rating: "4.7",
            usage: "14.2k",
            speed: "Medium"
        },
        {
            id: 63,
            name: "Customer Experience AI Agent",
            description: "Track and optimize customer satisfaction through surveys, sentiment analysis, and engagement insights. Drive continuous improvement with actionable analytics.",
            icon: "📊",
            color: "from-yellow-500 to-orange-600",
            tags: ["Experience", "Satisfaction", "Sentiment Analysis", "Analytics"],
            rating: "4.8",
            usage: "9.8k",
            speed: "Fast"
        },
        {
            id: 64,
            name: "Return Handling AI Agent",
            description: "Automate return requests and refund processes, ensuring customer satisfaction and policy compliance. Simplify returns management and improve customer trust.",
            icon: "↩️",
            color: "from-red-400 to-yellow-500",
            tags: ["Returns", "Refunds", "Automation", "Trust"],
            rating: "4.6",
            usage: "8.3k",
            speed: "Fast"
        },
        {
            id: 65,
            name: "Inventory Management AI Agent",
            description: "Track inventory levels, manage restocking alerts, and reduce fulfillment delays. Ensure smooth operations and prevent stockouts with AI-driven inventory management.",
            icon: "📦",
            color: "from-orange-500 to-green-600",
            tags: ["Inventory", "Supply Chain", "Automation", "Restocking"],
            rating: "4.7",
            usage: "10.7k",
            speed: "Medium"
        }
    ]
};

interface TimelineItem {
    year: string;
    title: string;
    description: string;
    icon: any;
}

const customerServiceTimeline: TimelineItem[] = [
    {
        year: "1960s",
        title: "Call Centers Born",
        description: "First dedicated customer service call centers established, revolutionizing how businesses handle customer inquiries and support",
        icon: Phone
    },
    {
        year: "1980s",
        title: "Toll-Free Numbers",
        description: "Introduction of 1-800 numbers makes customer service more accessible, leading to widespread adoption across industries",
        icon: Phone
    },
    {
        year: "1990s",
        title: "Computer Integration",
        description: "Customer relationship management (CRM) systems integrate with phone systems, enabling better customer data management",
        icon: Database
    },
    {
        year: "2000s",
        title: "Email & Web Support",
        description: "Email support and web-based help desks expand customer service channels beyond traditional phone support",
        icon: Mail
    },
    {
        year: "2005",
        title: "Live Chat Emergence",
        description: "Real-time web chat support becomes popular, offering instant assistance while customers browse websites",
        icon: MessageCircle
    },
    {
        year: "2010s",
        title: "Social Media Support",
        description: "Customer service expands to social media platforms, requiring brands to provide support across multiple channels",
        icon: Globe
    },
    {
        year: "2015",
        title: "Mobile-First Support",
        description: "Mobile apps and responsive design become critical as customer service shifts to mobile-first experiences",
        icon: Phone
    },
    {
        year: "2018",
        title: "Chatbot Revolution",
        description: "AI-powered chatbots begin handling routine inquiries, providing 24/7 automated customer support capabilities",
        icon: Bot
    },
    {
        year: "2020+",
        title: "AI Customer Service",
        description: "Advanced AI agents provide intelligent, personalized customer service with human-like understanding and empathy",
        icon: Brain
    }
];

const stats = [
    { number: "92%", label: "Customer Satisfaction Rate", icon: ThumbsUp, color: "from-green-500 to-emerald-500" },
    { number: "24/7", label: "Always Available Support", icon: Clock, color: "from-blue-500 to-cyan-500" },
    { number: "85%", label: "Faster Response Times", icon: Zap, color: "from-yellow-500 to-orange-500" },
    { number: "97%", label: "Issue Resolution Rate", icon: CheckCircle, color: "from-purple-500 to-pink-500" }
];

const advantages = [
    {
        title: "🚀 Instant Response Times",
        description: "Deliver support in seconds — even during peak hours — with zero wait time.",
        icon: Zap,
        gradient: "from-blue-500 to-indigo-600",
        benefits: [
            "24/7 availability",
            "Real-time responses",
            "No wait times",
            "Peak hour handling",
            "Instant escalations"
        ]
    },
    {
        title: "🤖 Scalable Human-like Interactions",
        description: "Use advanced NLP to understand intent, context, and emotion — and respond accordingly.",
        icon: Brain,
        gradient: "from-purple-500 to-pink-600",
        benefits: [
            "Natural language understanding",
            "Context-aware responses",
            "Emotional intelligence",
            "Multi-language support",
            "Continuous learning"
        ]
    },
    {
        title: "💡 Intelligent Escalation",
        description: "Route complex queries to the right humans with full context, reducing bounce and frustration.",
        icon: ArrowRight,
        gradient: "from-emerald-500 to-teal-600",
        benefits: [
            "Smart routing",
            "Context preservation",
            "Priority handling",
            "Seamless handoffs",
            "Reduced bounce rate"
        ]
    },
    {
        title: "📊 Continuous Learning & Optimization",
        description: "Learn from every customer interaction to improve future responses and personalize experiences.",
        icon: TrendingUp,
        gradient: "from-orange-500 to-red-600",
        benefits: [
            "Real-time learning",
            "Pattern recognition",
            "Behavior analysis",
            "Personalization",
            "Continuous improvement"
        ]
    },
    {
        title: "🛡️ Enterprise Security & Privacy",
        description: "Ensure full compliance and data protection with robust encryption and access control.",
        icon: Shield,
        gradient: "from-blue-500 to-indigo-600",
        benefits: [
            "End-to-end encryption",
            "Compliance ready",
            "Data privacy",
            "Access control",
            "Audit trails"
        ]
    }
];

const roiStats = [
    { metric: "67%", label: "Reduction in Average Handling Time", icon: Timer },
    { metric: "60%", label: "Decrease in Ticket Escalation Rate", icon: ArrowRight },
    { metric: "3.4x", label: "Faster Resolution Cycles", icon: Zap },
    { metric: "92%", label: "Increase in Customer Satisfaction", icon: Smile },
    { metric: "52%", label: "Cost Savings in Support Operations", icon: DollarSign },
    { metric: "390%", label: "Average ROI in First Year", icon: TrendingUp }
];

const industryStats = [
    { number: "91%", description: "of businesses are actively investing in AI customer service solutions within 12 months" },
    { number: "$142B", description: "projected AI customer service market size by 2027" },
    { number: "4.2B+", description: "customer interactions handled by AI globally in the past year" },
    { number: "68%", description: "improvement in customer satisfaction with AI-powered support implementation" }
];

// --- COMPONENTS ---

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
        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.current); };
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
            {customerServiceTimeline.map((item, index) => (
                <div
                    key={index}
                    ref={el => itemRefs.current[index] = el}
                    className={`relative flex items-center mb-16 group transition-all duration-700 ${visibleItems.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
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

const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-50"></div>
        <div className="absolute top-60 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-indigo-400 rounded-full animate-ping opacity-40"></div>
    </div>
);

// --- MAIN PAGE ---

export default function CustomerServicePage() {
    const router = useRouter();
    const [showContactForm, setShowContactForm] = useState(false);
    const [currentAgentIndex, setCurrentAgentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAgentIndex((prev) => (prev + 1) % customerServiceCategory.agents.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Customer Service AI Agents | Mercato",
        "description": customerServiceCategory.description,
        "url": "https://mercato.ai/customer-service-ai-agents",
        "mainEntity": [
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What are AI customer service agents?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "AI customer service agents are intelligent software solutions that automate and enhance customer support, providing instant answers, ticket routing, and resolution across multiple channels."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How can AI improve my customer service?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "AI improves customer service by delivering 24/7 support, reducing response times, personalizing interactions, and increasing satisfaction through intelligent automation and analytics."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is my customer data secure with Mercato's AI agents?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, Mercato's AI agents use enterprise-grade security, encryption, and compliance standards to ensure all customer data is protected and private."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
            <Head>
                <title>Customer Service AI Agents | 24/7 Intelligent Support | Mercato</title>
                <meta name="description" content="Mercato's Customer Service AI Agents deliver instant, 24/7 support, complaint resolution, live chat, and more. Boost satisfaction, reduce costs, and transform your customer experience with AI-powered automation." />
                <meta name="keywords" content="Customer Service AI, AI Agents, AI Support, Live Chat AI, Complaint Resolution, Email Triage, Customer Experience, Returns Automation, Inventory AI, Multichannel, Omnichannel, Support Automation, Mercato" />
                <meta property="og:title" content="Customer Service AI Agents | Mercato" />
                <meta property="og:description" content="Upgrade your customer service with AI agents that provide instant, personalized, and scalable support 24/7. Trusted by 50,000+ businesses worldwide." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://mercato.ai/customer-service-ai-agents" />
                <meta property="og:image" content="https://mercato.ai/og-customer-service.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Customer Service AI Agents | Mercato" />
                <meta name="twitter:description" content="Mercato's Customer Service AI Agents deliver instant, 24/7 support, complaint resolution, live chat, and more. Boost satisfaction, reduce costs, and transform your customer experience with AI-powered automation." />
                <meta name="twitter:image" content="https://mercato.ai/og-customer-service.jpg" />
                <link rel="canonical" href="https://mercato.ai/customer-service-ai-agents" />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Head>
            <NavbarDemo />
            <FloatingElements />

            {/* HERO SECTION */}
            <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-32">
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
                            🚀 Revolutionizing Customer Service with AI • Trusted by 50,000+ Businesses Worldwide
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight animate-fade-in-up">
                        The Future of<br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                            Customer Service Excellence
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl lg:text-3xl text-slate-400 max-w-5xl mx-auto leading-relaxed mb-12 animate-fade-in-up delay-200">
                        Transform your support strategy with AI agents that not only understand and resolve issues instantly — but also empathize with customers in real-time. 
                        Boost satisfaction rates by up to 92%, reduce response times by 85%, and deliver 24/7 intelligent service across every channel.
                        <span className="text-white font-medium bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            {" "}Experience next-generation customer care.
                        </span>
                    </p>

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
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="flex flex-col items-center space-y-2">
                        <span className="text-slate-400 text-xs">Scroll to explore</span>
                        <ChevronDown className="w-6 h-6 text-slate-400" />
                    </div>
                </div>
            </section>

            {/* INDUSTRY IMPACT */}
            <section className="relative w-full py-20 px-4 bg-gradient-to-r from-slate-900/80 to-slate-800/60">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Customer Service AI is <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Transforming the Industry</span>
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

            {/* TIMELINE / HISTORY */}
            <section id="history" className="relative w-full py-32 px-4 bg-gradient-to-r from-slate-900/50 to-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <Clock className="w-5 h-5 mr-3 text-blue-400" />
                            Customer Service Timeline
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold max-w-6xl mx-auto mb-8 leading-tight">
                            From Human Touch to AI-Driven <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Customer Service</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                            Customer service has evolved from traditional call centers and manual ticket handling to AI-powered, personalized support that works 24/7. 
                            Discover how intelligent AI agents are transforming customer experiences across industries by delivering instant resolutions, predictive assistance, and empathetic interactions.
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
                                    <h3 className="text-2xl font-bold text-white">🧠 The AI Customer Service Revolution</h3>
                                </div>
                                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                    Customer service has entered a new era — one driven by intelligent AI agents that deliver fast, accurate, and 
                                    empathetic support at scale. Building on centuries of innovation in logic, systems thinking, and decision science, 
                                    today's AI-powered customer service systems are transforming how businesses connect with their customers.
                                </p>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    These advanced AI agents analyze millions of customer interactions, detect intent and emotion, resolve queries instantly, 
                                    and continuously learn to improve future responses. They don't just answer questions — they deliver experiences
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
                                    The future of AI in customer service is not just automation — it’s augmentation. AI agents will become real-time collaborators, capable of 
                                    Predicting complex issues before they arise Tailoring solutions to organization-specific environments 
                                    Learning from every decision made Coordinating teams and systems with intelligent precision
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ADVANTAGES */}
            <section id="benefits" className="relative w-full py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <Award className="w-5 h-5 mr-3 text-emerald-400" />
                            Competitive Advantages
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold max-w-6xl mx-auto mb-8 leading-tight">
                            Why Customer Service AI Agents are <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">Game Changers</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                            Discover how AI-powered customer service agents are transforming organizational decision-making, accelerating innovation, 
                            and delivering strategic clarity at scale. These agents aren’t just tools — they’re always-on experts designed to turn complexity into actionable insight.
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

            {/* AI AGENTS SHOWCASE */}
            <section id="agents" className="relative w-full py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <Brain className="w-5 h-5 mr-3 text-purple-400" />
                            AI Agents Portfolio
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto mb-8 leading-tight">
                            Meet Your <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Customer Service AI</span> Team
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Specialized AI agents engineered to tackle customer service challenges across departments and industries — from strategic bottlenecks to operational inefficiencies. 
                            These always-on problem solvers work 24/7 to keep your business agile, intelligent, and resilient.
                        </p>
                    </div>
                    <div className="mb-20">
                        <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
                            <div className="relative z-10">
                                <div className="mb-8">
                                    <div className={`inline-flex w-28 h-28 rounded-3xl bg-gradient-to-r ${customerServiceCategory.agents[currentAgentIndex].color} items-center justify-center text-5xl mb-6 animate-pulse shadow-2xl`}>
                                        {customerServiceCategory.agents[currentAgentIndex].icon}
                                    </div>
                                    <h3 className="text-4xl font-bold text-white mb-6">
                                        {customerServiceCategory.agents[currentAgentIndex].name}
                                    </h3>
                                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                        {customerServiceCategory.agents[currentAgentIndex].description}
                                    </p>
                                </div>
                                <div className="flex justify-center space-x-3 mb-8">
                                    {customerServiceCategory.agents[currentAgentIndex].tags.map((tag, index) => (
                                        <span key={index} className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-center space-x-2">
                                    {customerServiceCategory.agents.map((_, index) => (
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
                    <AgentSlider category={customerServiceCategory} />
                </div>
            </section>

            {/* ROI SECTION */}
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
                            Our AI Customer Service agents deliver quantifiable improvements across all key metrics,
                            ensuring your investment generates real value for your business and organization.
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
                            Average ROI: <span className="text-green-400">430% in First Year</span>
                        </h3>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
                            Organizations leveraging our Customer Service AI Agents experience an
                            average return of $4.30 for every dollar invested, thanks to rapid resolution cycles, 
                            intelligent automation, and strategic insights that
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION - CTA BUTTON ONLY */}
            <section id="contact" className="relative w-full py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto mb-8 leading-tight">
                            Ready to Transform the Way You <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Serve Customers?</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Join thousands of forward-thinking organizations already using AI agents to deliver world-class support, streamline operations, and scale customer satisfaction.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8">
                                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                                <div className="space-y-6"> 
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
                                            <h4 className="text-white font-semibold">Enterprise Security</h4>
                                            <p className="text-slate-400">Compliance & privacy ensured</p>
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
}