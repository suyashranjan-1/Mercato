
'use client';
import { NavbarDemo } from "@/components/navbar";

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Search, Bot, ArrowRight, Sparkles, Zap, Shield, TrendingUp, Menu, X } from 'lucide-react';

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

interface Category {
    name: string;
    description: string;
    agents: Agent[];
}

const AgentCard = ({ agent, index }: { agent: Agent; index: number }) => {
    const handleTryNow = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        // Handle try now action
        console.log(`Trying agent: ${agent.name}`);
        alert(`Starting ${agent.name}...`);
    };

    const handleCardClick = (e: React.MouseEvent) => {
        // Only handle clicks that aren't on the button
        if ((e.target as HTMLElement).closest('button')) {
            return;
        }
        console.log(`Viewing details for: ${agent.name}`);
        alert(`Opening details for ${agent.name}`);
    };

    return (
        <div
            className="flex-shrink-0 w-80 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 group hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer relative z-10 hover:z-20"
            style={{
                animationDelay: `${index * 100}ms`,
            }}
            onClick={handleCardClick}
        >
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${agent.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 relative transform-gpu`}>
                        {agent.icon}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-slate-400">
                        <Sparkles className="w-3 h-3" />
                        <span>{agent.rating}</span>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {agent.name}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {agent.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {agent.tags.map((tag: string, i: number) => (
                        <span key={i} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-lg hover:bg-slate-600/50 transition-colors duration-300">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-slate-400">
                        <span className="flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {agent.usage}
                        </span>
                        <span className="flex items-center">
                            <Zap className="w-3 h-3 mr-1" />
                            {agent.speed}
                        </span>
                    </div>
                    <button
                        onClick={handleTryNow}
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 rounded-lg hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform-gpu"
                    >
                        <span className="text-sm font-medium">Try Now</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const CategorySlider = ({ category, agents, isVisible }: { category: Category; agents: Agent[]; isVisible: boolean }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 340; // Increased for better scrolling
            const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            scrollRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });

            // Update scroll state after animation
            setTimeout(() => checkScroll(), 300);
        }
    };

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 5);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        const checkScrollWithDelay = () => {
            setTimeout(checkScroll, 100);
        };

        checkScrollWithDelay();
        const current = scrollRef.current;
        if (current) {
            current.addEventListener('scroll', checkScroll);
            current.addEventListener('scrollend', checkScroll);
            window.addEventListener('resize', checkScrollWithDelay);
            return () => {
                current.removeEventListener('scroll', checkScroll);
                current.removeEventListener('scrollend', checkScroll);
                window.removeEventListener('resize', checkScrollWithDelay);
            };
        }
    }, [agents]);

    return (
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                        {category.name}
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
                        {category.description}
                    </p>
                </div>
                <div className="hidden sm:flex items-center space-x-2">
                    <button
                        onClick={() => scroll('left')}
                        disabled={!canScrollLeft}
                        className={`p-2 rounded-xl border transition-all duration-300 ${canScrollLeft
                            ? 'border-slate-600 bg-slate-700/50 text-white hover:bg-slate-600/50 hover:scale-110'
                            : 'border-slate-800 bg-slate-800/50 text-slate-600 cursor-not-allowed'
                            }`}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        disabled={!canScrollRight}
                        className={`p-2 rounded-xl border transition-all duration-300 ${canScrollRight
                            ? 'border-slate-600 bg-slate-700/50 text-white hover:bg-slate-600/50 hover:scale-110'
                            : 'border-slate-800 bg-slate-800/50 text-slate-600 cursor-not-allowed'
                            }`}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="relative">
                <div
                    ref={scrollRef}
                    className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {agents.map((agent: Agent, index: number) => (
                        <AgentCard key={agent.id} agent={agent} index={index} />
                    ))}
                </div>

                {/* Mobile scroll buttons */}
                <div className="sm:hidden flex justify-center space-x-4 mt-4">
                    <button
                        onClick={() => scroll('left')}
                        disabled={!canScrollLeft}
                        className={`p-2 rounded-xl border transition-all duration-300 ${canScrollLeft
                            ? 'border-slate-600 bg-slate-700/50 text-white'
                            : 'border-slate-800 bg-slate-800/50 text-slate-600 cursor-not-allowed'
                            }`}
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        disabled={!canScrollRight}
                        className={`p-2 rounded-xl border transition-all duration-300 ${canScrollRight
                            ? 'border-slate-600 bg-slate-700/50 text-white'
                            : 'border-slate-800 bg-slate-800/50 text-slate-600 cursor-not-allowed'
                            }`}
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};


export default function AIAgentsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        // Set visible after a short delay to ensure smooth animation
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const categories = [
        {
            name: "General Problem Solver",
            description: "Versatile AI agents that can tackle a wide range of problems and provide intelligent solutions for various business challenges.",
            agents: [
                {
                    id: 1,
                    name: "Universal Problem Solver",
                    description: "Advanced AI agent capable of analyzing complex problems across multiple domains and providing actionable solutions with detailed reasoning.",
                    icon: "🧠",
                    color: "from-blue-500 to-purple-600",
                    tags: ["Problem Solving", "Analysis", "Multi-domain"],
                    rating: "4.9",
                    usage: "12.5k",
                    speed: "Fast"
                },
                {
                    id: 2,
                    name: "Task Automation AI Agent",
                    description: "Streamline your workflow by automating repetitive tasks and optimizing business processes with intelligent task management.",
                    icon: "⚡",
                    color: "from-emerald-500 to-blue-600",
                    tags: ["Automation", "Workflow", "Efficiency"],
                    rating: "4.8",
                    usage: "8.3k",
                    speed: "Ultra Fast"
                },
                {
                    id: 3,
                    name: "Smart Decision Maker",
                    description: "Make informed decisions with AI-powered analysis that evaluates multiple factors and provides recommendations.",
                    icon: "🎯",
                    color: "from-orange-500 to-red-600",
                    tags: ["Decision Making", "Analysis", "Strategy"],
                    rating: "4.7",
                    usage: "6.8k",
                    speed: "Fast"
                }
            ]
        },
        {
            name: "Data Extraction",
            description: "Powerful AI agents specialized in extracting, processing, and analyzing data from various sources and formats.",
            agents: [
                {
                    id: 4,
                    name: "Web Scraping AI Agent",
                    description: "Extract structured data from websites efficiently with intelligent parsing and data cleaning capabilities.",
                    icon: "🌐",
                    color: "from-cyan-500 to-blue-600",
                    tags: ["Web Scraping", "Data Mining", "Automation"],
                    rating: "4.9",
                    usage: "15.2k",
                    speed: "Fast"
                },
                {
                    id: 5,
                    name: "Document Parser AI Agent",
                    description: "Process and extract information from PDFs, documents, and forms with high accuracy and intelligent formatting.",
                    icon: "📄",
                    color: "from-violet-500 to-purple-600",
                    tags: ["Document Processing", "OCR", "Text Extraction"],
                    rating: "4.8",
                    usage: "11.7k",
                    speed: "Medium"
                },
                {
                    id: 6,
                    name: "Database Query AI Agent",
                    description: "Intelligent database querying and data extraction with natural language processing and automated reporting.",
                    icon: "🗄️",
                    color: "from-teal-500 to-green-600",
                    tags: ["Database", "SQL", "Reporting"],
                    rating: "4.8",
                    usage: "9.4k",
                    speed: "Fast"
                }
            ]
        },
        {
            name: "Customer Service",
            description: "AI-powered customer service agents that provide 24/7 support, handle inquiries, and enhance customer experience.",
            agents: [
                {
                    id: 7,
                    name: "Customer Support AI Agent",
                    description: "Provide instant customer support with intelligent responses, ticket routing, and issue resolution capabilities.",
                    icon: "🎧",
                    color: "from-blue-500 to-indigo-600",
                    tags: ["Support", "Chat", "Tickets"],
                    rating: "4.9",
                    usage: "22.1k",
                    speed: "Instant"
                },
                {
                    id: 8,
                    name: "Live Chat AI Agent",
                    description: "Engage customers in real-time with contextual conversations, product recommendations, and seamless handoffs.",
                    icon: "💬",
                    color: "from-green-500 to-teal-600",
                    tags: ["Live Chat", "Real-time", "Engagement"],
                    rating: "4.8",
                    usage: "18.6k",
                    speed: "Instant"
                },
                {
                    id: 9,
                    name: "Complaint Resolution AI Agent",
                    description: "Handle customer complaints with empathy, systematic problem-solving, and satisfaction tracking.",
                    icon: "🛠️",
                    color: "from-red-500 to-pink-600",
                    tags: ["Complaints", "Resolution", "Satisfaction"],
                    rating: "4.7",
                    usage: "7.9k",
                    speed: "Fast"
                }
            ]
        },
        {
            name: "Sales",
            description: "AI-powered sales agents designed to boost revenue, qualify leads, and optimize the entire sales funnel with intelligent automation.",
            agents: [
                {
                    id: 11,
                    name: "Lead Qualification AI Agent",
                    description: "Automatically qualify and score leads based on behavior, demographics, and engagement patterns to prioritize sales efforts.",
                    icon: "🎯",
                    color: "from-green-500 to-emerald-600",
                    tags: ["Lead Scoring", "Qualification", "CRM"],
                    rating: "4.9",
                    usage: "19.3k",
                    speed: "Fast"
                },
                {
                    id: 12,
                    name: "Sales Outreach AI Agent",
                    description: "Personalize cold outreach campaigns with intelligent messaging, follow-up sequences, and response tracking.",
                    icon: "📧",
                    color: "from-blue-500 to-cyan-600",
                    tags: ["Outreach", "Email", "Personalization"],
                    rating: "4.8",
                    usage: "16.7k",
                    speed: "Fast"
                },
                {
                    id: 13,
                    name: "Sales Analytics AI Agent",
                    description: "Analyze sales performance, predict revenue trends, and identify optimization opportunities with advanced analytics.",
                    icon: "📊",
                    color: "from-purple-500 to-pink-600",
                    tags: ["Analytics", "Forecasting", "Performance"],
                    rating: "4.8",
                    usage: "13.2k",
                    speed: "Medium"
                },
                {
                    id: 14,
                    name: "Deal Negotiation AI Agent",
                    description: "Assist with deal negotiations by providing pricing insights, competitor analysis, and optimal negotiation strategies.",
                    icon: "🤝",
                    color: "from-orange-500 to-red-600",
                    tags: ["Negotiation", "Pricing", "Strategy"],
                    rating: "4.7",
                    usage: "8.9k",
                    speed: "Fast"
                }
            ]
        },
        {
            name: "HR",
            description: "Human Resources AI agents that streamline recruitment, employee management, and HR operations with intelligent automation.",
            agents: [
                {
                    id: 15,
                    name: "Resume Screening AI Agent",
                    description: "Automatically screen resumes, rank candidates, and identify the best matches based on job requirements and qualifications.",
                    icon: "📋",
                    color: "from-indigo-500 to-purple-600",
                    tags: ["Recruitment", "Screening", "Matching"],
                    rating: "4.9",
                    usage: "21.4k",
                    speed: "Ultra Fast"
                },
                {
                    id: 16,
                    name: "Employee Onboarding AI Agent",
                    description: "Streamline new employee onboarding with automated workflows, document collection, and personalized guidance.",
                    icon: "👋",
                    color: "from-teal-500 to-blue-600",
                    tags: ["Onboarding", "Workflow", "Documentation"],
                    rating: "4.8",
                    usage: "14.6k",
                    speed: "Fast"
                },
                {
                    id: 17,
                    name: "Performance Review AI Agent",
                    description: "Automate performance evaluations, generate insights, and provide data-driven feedback for employee development.",
                    icon: "⭐",
                    color: "from-yellow-500 to-orange-600",
                    tags: ["Performance", "Reviews", "Analytics"],
                    rating: "4.7",
                    usage: "10.8k",
                    speed: "Medium"
                },
                {
                    id: 18,
                    name: "HR Chatbot AI Agent",
                    description: "Provide 24/7 HR support to employees with instant answers to policy questions, leave requests, and general inquiries.",
                    icon: "🤖",
                    color: "from-green-500 to-teal-600",
                    tags: ["Chatbot", "Support", "Self-Service"],
                    rating: "4.8",
                    usage: "18.2k",
                    speed: "Instant"
                }
            ]
        },
        {
            name: "Legal",
            description: "Legal AI agents that assist with document review, contract analysis, compliance monitoring, and legal research tasks.",
            agents: [
                {
                    id: 19,
                    name: "Contract Analysis AI Agent",
                    description: "Review and analyze contracts for key terms, risks, and compliance issues with detailed summaries and recommendations.",
                    icon: "📜",
                    color: "from-slate-500 to-gray-600",
                    tags: ["Contracts", "Analysis", "Risk Assessment"],
                    rating: "4.9",
                    usage: "12.7k",
                    speed: "Fast"
                },
                {
                    id: 20,
                    name: "Legal Research AI Agent",
                    description: "Conduct comprehensive legal research, find relevant case law, and generate detailed research reports with citations.",
                    icon: "⚖️",
                    color: "from-blue-500 to-indigo-600",
                    tags: ["Research", "Case Law", "Citations"],
                    rating: "4.8",
                    usage: "9.5k",
                    speed: "Medium"
                },
                {
                    id: 21,
                    name: "Compliance Monitoring AI Agent",
                    description: "Monitor regulatory compliance, track changes in laws, and alert teams to potential compliance risks and requirements.",
                    icon: "🛡️",
                    color: "from-red-500 to-pink-600",
                    tags: ["Compliance", "Monitoring", "Regulations"],
                    rating: "4.8",
                    usage: "7.3k",
                    speed: "Fast"
                },
                {
                    id: 22,
                    name: "Document Redaction AI Agent",
                    description: "Automatically identify and redact sensitive information from legal documents while maintaining document integrity.",
                    icon: "✂️",
                    color: "from-purple-500 to-violet-600",
                    tags: ["Redaction", "Privacy", "Document Processing"],
                    rating: "4.7",
                    usage: "6.1k",
                    speed: "Fast"
                }
            ]
        },
        {
            name: "Healthcare",
            description: "Healthcare AI agents designed to assist medical professionals with patient care, diagnosis support, and administrative tasks.",
            agents: [
                {
                    id: 23,
                    name: "Medical Diagnosis AI Agent",
                    description: "Assist healthcare professionals with preliminary diagnosis suggestions based on symptoms, medical history, and test results.",
                    icon: "🩺",
                    color: "from-red-500 to-rose-600",
                    tags: ["Diagnosis", "Medical", "Decision Support"],
                    rating: "4.9",
                    usage: "16.8k",
                    speed: "Fast"
                },
                {
                    id: 24,
                    name: "Patient Scheduling AI Agent",
                    description: "Optimize patient scheduling, reduce no-shows, and manage appointment calendars with intelligent booking algorithms.",
                    icon: "📅",
                    color: "from-teal-500 to-cyan-600",
                    tags: ["Scheduling", "Appointments", "Optimization"],
                    rating: "4.8",
                    usage: "23.4k",
                    speed: "Instant"
                },
                {
                    id: 25,
                    name: "Medical Records AI Agent",
                    description: "Process and organize medical records, extract key information, and ensure HIPAA-compliant data management.",
                    icon: "📋",
                    color: "from-blue-500 to-indigo-600",
                    tags: ["Records", "HIPAA", "Data Management"],
                    rating: "4.8",
                    usage: "14.9k",
                    speed: "Medium"
                },
                {
                    id: 26,
                    name: "Medication Reminder AI Agent",
                    description: "Send personalized medication reminders, track adherence, and provide drug interaction warnings to patients.",
                    icon: "💊",
                    color: "from-green-500 to-emerald-600",
                    tags: ["Medication", "Reminders", "Adherence"],
                    rating: "4.7",
                    usage: "11.2k",
                    speed: "Instant"
                }
            ]
        },
        {
            name: "Insurance",
            description: "Insurance-focused AI agents for claims processing, risk assessment, policy management, and customer service in the insurance sector.",
            agents: [
                {
                    id: 27,
                    name: "Insurance Claims AI Agent",
                    description: "Streamline claims processing with automated assessment, fraud detection, and policy verification for faster claim resolution.",
                    icon: "🏛️",
                    color: "from-indigo-500 to-blue-600",
                    tags: ["Claims", "Assessment", "Fraud Detection"],
                    rating: "4.8",
                    usage: "14.3k",
                    speed: "Fast"
                }
            ]
        },
        {
            name: "Custom AI Agent",
            description: "Build personalized AI agents tailored to your specific business needs and requirements with our flexible development platform.",
            agents: [
                {
                    id: 28,
                    name: "Custom Business AI Agent",
                    description: "Create AI agents specifically designed for your unique business processes, workflows, and industry requirements.",
                    icon: "🔧",
                    color: "from-violet-500 to-purple-600",
                    tags: ["Custom", "Tailored", "Business Specific"],
                    rating: "4.9",
                    usage: "8.7k",
                    speed: "Variable"
                },
                {
                    id: 29,
                    name: "Industry-Specific AI Agent",
                    description: "Develop specialized AI agents for niche industries with custom training data and domain-specific knowledge.",
                    icon: "🏭",
                    color: "from-amber-500 to-orange-600",
                    tags: ["Industry", "Specialized", "Custom Training"],
                    rating: "4.8",
                    usage: "5.9k",
                    speed: "Variable"
                },
                {
                    id: 30,
                    name: "AI Agent Builder Platform",
                    description: "No-code platform for building custom AI agents with drag-and-drop interface and pre-built components.",
                    icon: "🎨",
                    color: "from-pink-500 to-rose-600",
                    tags: ["No-Code", "Builder", "Platform"],
                    rating: "4.8",
                    usage: "12.1k",
                    speed: "Fast"
                },
                {
                    id: 31,
                    name: "Enterprise AI Agent Solution",
                    description: "Full-scale enterprise AI agent deployment with custom integrations, security, and dedicated support.",
                    icon: "🏢",
                    color: "from-slate-500 to-gray-600",
                    tags: ["Enterprise", "Integration", "Support"],
                    rating: "4.9",
                    usage: "3.2k",
                    speed: "Custom"
                }
            ]
        }
    ];

    const filteredCategories = searchQuery.trim() === ""
        ? categories
        : categories
            .map((category) => ({
                ...category,
                agents: category.agents.filter((agent) =>
                    agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    agent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    agent.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
                ),
            }))
            .filter((category) => category.agents.length > 0);

    return (
        <>
            <style jsx>{`
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }

                .transform-gpu {
                    transform: translateZ(0);
                }

                .group:hover {
                    transform: translateZ(0) scale(1.02);
                }

                .group {
                    will-change: transform, z-index;
                }
            `}</style>

            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
                <NavbarDemo />

                {/* Hero Section */}
                <section className="relative pt-24 pb-16 px-4 py-20 pt-24 sm:py-32">
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5"></div>
                    <div
                        className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
                        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                    ></div>
                    <div
                        className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
                        style={{
                            transform: `translateY(${scrollY * -0.1}px)`,
                            animationDelay: '1s'
                        }}
                    ></div>

                    <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <Bot className="w-4 h-4 mr-2 text-blue-400" />
                            AI Agent Templates
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight">
                            Ready-to-use AI Agents for
                            <br />
                            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                                Every Business Need
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
                            Discover powerful AI agents designed to automate tasks, solve problems, and enhance your business operations across multiple industries and use cases.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto mb-12">
                            <div className="relative group">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-400 transition-colors duration-300" />
                                <input
                                    type="text"
                                    placeholder="Search AI agents..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                                <span className="relative z-10">Start Building AI Agents</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                            <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white font-semibold rounded-2xl hover:bg-slate-700/50 hover:border-slate-600/50 hover:scale-105 transition-all duration-300">
                                View Documentation
                            </button>
                        </div>
                    </div>
                </section>

                {/* Categories Section */}
                <section className="py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        {filteredCategories.map((category, index) => (
                            <CategorySlider
                                key={index}
                                category={category}
                                agents={category.agents}
                                isVisible={isVisible}
                            />
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 px-4">
                    <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="relative rounded-3xl overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-500"></div>
                            <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 p-12 group-hover:border-slate-600/50 transition-all duration-500">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                                    Start building AI agents
                                    <br />
                                    <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                                        to automate processes
                                    </span>
                                </h2>
                                <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                                    Join thousands of businesses already using our AI agents to streamline operations and boost productivity.
                                </p>
                                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                                    <span className="relative z-10">Get Started</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}