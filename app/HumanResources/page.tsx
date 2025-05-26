"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Play, Star, Users, Zap, Shield, Clock, Heart, TrendingUp, Award, CheckCircle, ArrowRight, Calendar, FileText, Brain, Layers, Lightbulb, Activity, Database, Lock, Globe, Phone, Mail, MapPin, Target, RefreshCw, HeartHandshake, Building2, UserCheck, DollarSign, BarChart3 } from "lucide-react";
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

interface HRCategory {
    name: string;
    description: string;
    agents: Agent[];
}

// Human Resources agents data
const hrCategory: HRCategory = {
    "name": "Human Resources AI Agents",
    "description": "Advanced AI agents revolutionizing talent management, employee engagement, and workforce optimization across modern organizations.",
    "agents": [
        {
            "id": 15,
            "name": "Resume Screening AI Agent",
            "description": "Automatically screen resumes, rank candidates, and identify the best matches based on job requirements and qualifications.",
            "icon": "📋",
            "color": "from-indigo-500 to-purple-600",
            "tags": ["Recruitment", "Screening", "Matching"],
            "rating": "4.9",
            "usage": "21.4k",
            "speed": "Ultra Fast"
        },
        {
            "id": 16,
            "name": "Employee Onboarding AI Agent",
            "description": "Streamline new employee onboarding with automated workflows, document collection, and personalized guidance.",
            "icon": "👋",
            "color": "from-teal-500 to-blue-600",
            "tags": ["Onboarding", "Workflow", "Documentation"],
            "rating": "4.8",
            "usage": "14.6k",
            "speed": "Fast"
        },
        {
            "id": 17,
            "name": "Performance Review AI Agent",
            "description": "Automate performance evaluations, generate insights, and provide data-driven feedback for employee development.",
            "icon": "⭐",
            "color": "from-yellow-500 to-orange-600",
            "tags": ["Performance", "Reviews", "Analytics"],
            "rating": "4.7",
            "usage": "10.8k",
            "speed": "Medium"
        },
        {
            "id": 18,
            "name": "HR Chatbot AI Agent",
            "description": "Provide 24/7 HR support to employees with instant answers to policy questions, leave requests, and general inquiries.",
            "icon": "🤖",
            "color": "from-green-500 to-teal-600",
            "tags": ["Chatbot", "Support", "Self-Service"],
            "rating": "4.8",
            "usage": "18.2k",
            "speed": "Instant"
        },
        {
            "id": 74,
            "name": "Appointment Management AI Agent",
            "description": "Handle internal scheduling, meeting coordination, and reminders for HR-related appointments and sessions.",
            "icon": "📅",
            "color": "from-pink-500 to-rose-600",
            "tags": ["Scheduling", "Reminders", "Meetings"],
            "rating": "4.6",
            "usage": "9.1k",
            "speed": "Fast"
        },
        {
            "id": 75,
            "name": "Interview Scheduler AI Agent",
            "description": "Automate interview scheduling, candidate notifications, and interviewer coordination across time zones.",
            "icon": "🕒",
            "color": "from-blue-400 to-indigo-500",
            "tags": ["Recruitment", "Scheduling", "Automation"],
            "rating": "4.7",
            "usage": "11.3k",
            "speed": "Fast"
        },
        {
            "id": 76,
            "name": "Payroll Calculation AI Agent",
            "description": "Compute accurate payroll, deductions, bonuses, and generate salary slips for employees on schedule.",
            "icon": "💰",
            "color": "from-yellow-600 to-amber-500",
            "tags": ["Payroll", "Salary", "HR Operations"],
            "rating": "4.8",
            "usage": "13.6k",
            "speed": "Medium"
        },
        {
            "id": 77,
            "name": "Onboarding AI Agent",
            "description": "Guide new hires through onboarding tasks, compliance documents, and training modules with an interactive experience.",
            "icon": "🚀",
            "color": "from-lime-500 to-green-600",
            "tags": ["Onboarding", "HR", "Guidance"],
            "rating": "4.7",
            "usage": "12.4k",
            "speed": "Fast"
        }
    ]
};


// Human Resources timeline data
interface TimelineItem {
    year: string;
    title: string;
    description: string;
    icon: any;
}

const hrTimeline: TimelineItem[] = [
    {
        year: "1900s",
        title: "Personnel Management Era",
        description: "Early HR focused on administrative tasks, payroll management, and basic employee record keeping in industrial organizations",
        icon: FileText
    },
    {
        year: "1930s",
        title: "Human Relations Movement",
        description: "Recognition of employee psychology and workplace relationships as key factors in productivity and organizational success",
        icon: Heart
    },
    {
        year: "1960s",
        title: "Strategic Human Resources",
        description: "HR evolved from administrative function to strategic business partner, focusing on talent development and organizational culture",
        icon: Target
    },
    {
        year: "1980s",
        title: "Performance Management Systems",
        description: "Introduction of systematic employee evaluation, goal setting, and performance improvement methodologies",
        icon: TrendingUp
    },
    {
        year: "1990s",
        title: "HR Information Systems",
        description: "Digital transformation begins with HRIS platforms for data management, benefits administration, and workforce analytics",
        icon: Database
    },
    {
        year: "2000s",
        title: "Talent Management Focus",
        description: "Comprehensive talent lifecycle management including recruitment, development, retention, and succession planning",
        icon: Users
    },
    {
        year: "2010s",
        title: "Employee Experience Design",
        description: "Emphasis on creating positive employee journeys, engagement strategies, and workplace culture transformation",
        icon: Heart
    },
    {
        year: "2015+",
        title: "People Analytics Revolution",
        description: "Data-driven HR decisions using workforce analytics, predictive modeling, and evidence-based talent strategies",
        icon: BarChart3
    },
    {
        year: "2020+",
        title: "AI-Powered HR Intelligence",
        description: "Artificial Intelligence transforms recruitment, performance management, employee engagement, and strategic workforce planning",
        icon: Brain
    }
];

// Enhanced statistics data
const stats = [
    { number: "84%", label: "Faster Recruitment Process", icon: Clock, color: "from-green-500 to-emerald-500" },
    { number: "24/7", label: "Employee Support Availability", icon: Users, color: "from-blue-500 to-cyan-500" },
    { number: "62%", label: "Improvement in Employee Retention", icon: Heart, color: "from-purple-500 to-pink-500" },
    { number: "91%", label: "HR Team Satisfaction Rate", icon: Star, color: "from-yellow-500 to-orange-500" }
];


// Enhanced advantages data
const advantages = [
    {
        title: "Intelligent Talent Acquisition",
        description: "AI agents revolutionize recruitment by automatically sourcing candidates, screening resumes, and matching skills to roles with unprecedented accuracy.",
        icon: Users,
        gradient: "from-blue-500 to-indigo-600",
        benefits: [
            "Automated candidate sourcing from multiple platforms",
            "AI-powered resume screening and ranking",
            "Bias-free candidate evaluation",
            "Predictive hiring success modeling",
            "Streamlined interview scheduling and coordination"
        ]
    },
    {
        title: "Employee Engagement Analytics",
        description: "Advanced AI monitoring of employee satisfaction, engagement levels, and workplace sentiment to proactively improve retention and performance.",
        icon: Heart,
        gradient: "from-pink-500 to-rose-600",
        benefits: [
            "Real-time employee sentiment analysis",
            "Predictive turnover risk identification",
            "Personalized engagement recommendations",
            "Performance correlation insights",
            "Automated pulse survey analysis"
        ]
    },
    {
        title: "Performance Management Optimization",
        description: "AI-driven performance tracking, goal setting, and development planning that adapts to individual employee needs and organizational objectives.",
        icon: TrendingUp,
        gradient: "from-green-500 to-teal-600",
        benefits: [
            "Continuous performance monitoring",
            "Personalized development path recommendations",
            "Skills gap analysis and training suggestions",
            "360-degree feedback automation",
            "Career progression modeling"
        ]
    },
    {
        title: "Compliance & Security Management",
        description: "Ensure complete HR compliance with labor laws, data protection regulations, and industry standards through intelligent monitoring and reporting.",
        icon: Shield,
        gradient: "from-purple-500 to-violet-600",
        benefits: [
            "Automated compliance monitoring",
            "GDPR and privacy regulation adherence",
            "Audit trail maintenance",
            "Risk assessment and mitigation",
            "Secure employee data management"
        ]
    }
];

// ROI Statistics
const roiStats = [
    { metric: "68%", label: "Reduction in Time-to-Hire", icon: Clock },
    { metric: "$2.4M", label: "Annual Savings on Recruitment Costs", icon: DollarSign },
    { metric: "45%", label: "Improvement in Employee Retention", icon: Users },
    { metric: "78%", label: "Increase in HR Team Productivity", icon: TrendingUp },
    { metric: "56%", label: "Better Quality of Hire Rate", icon: Award },
    { metric: "12x", label: "Faster HR Data Processing", icon: Zap }
];

// Industry Impact Stats
const industryStats = [
    { number: "76%", description: "of organizations plan to implement AI in HR operations within the next 24 months" },
    { number: "$89B", description: "projected global HR technology market size by 2027" },
    { number: "340M+", description: "employee records processed by AI-powered HR systems globally" },
    { number: "58%", description: "reduction in HR administrative overhead with AI implementation" }
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
            {hrTimeline.map((item, index) => (
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


// Human Resources ROI statistics interface
interface RoiStat {
    icon: any;
    metric: number | string;
    label: string;
}

// Human Resources ROI statistics
const hrRoiStats: RoiStat[] = [
    {
        icon: TrendingUp,
        metric: 30,
        label: "Talent Acquisition Efficiency"
    },
    {
        icon: HeartHandshake,
        metric: 25,
        label: "Employee Retention Rate"
    },
    {
        icon: DollarSign,
        metric: 15,
        label: "Cost Savings"
    }
];

// Main Component
export default function HumanResourcesPage() {
    const [currentAgentIndex, setCurrentAgentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAgentIndex((prev) => (prev + 1) % hrCategory.agents.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">


            // Navbar Component
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
                            🚀 Revolutionizing Human Resources with AI • Trusted by 30,000+ HR Teams Globally
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight animate-fade-in-up">
                        The Future of<br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                            Intelligent Human Resources
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl lg:text-3xl text-slate-400 max-w-5xl mx-auto leading-relaxed mb-12 animate-fade-in-up delay-200">
                        Transform talent management, employee engagement, and workforce optimization with AI agents that recruit,
                        analyze, and nurture talent 24/7,
                        reducing time-to-hire by up to 68% while improving employee retention by 45%.
                        <span className="text-white font-medium bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            {" "}Experience next-generation people management.
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
                            HR AI Agents are <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Transforming Workforce Management</span>
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

            {/* Human Resources History Section */}
            <section id="history" className="relative w-full py-32 px-4 bg-gradient-to-r from-slate-900/50 to-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <Clock className="w-5 h-5 mr-3 text-blue-400" />
                            HR Evolution Timeline
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold max-w-6xl mx-auto mb-8 leading-tight">
                        From Personnel Management to <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">AI-Powered People Operations</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                        Human Resources has transformed from administrative record-keeping to strategic people intelligence. 
                        Discover the revolutionary timeline that evolved from manual HR processes to AI-driven talent management systems reshaping workforce optimization across global enterprises.
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
                                    <h3 className="text-2xl font-bold text-white">🧠 The AI Human Resources Revolution</h3>
                                </div>
                                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                    Today's AI-powered HR systems represent the pinnacle of decades of innovation in workforce management, behavioral analytics, 
                                    and talent intelligence. From traditional personnel administration to modern predictive people analytics and intelligent recruitment, 
                                    the evolution of HR has reached its most sophisticated form — autonomous, data-driven AI agents that understand human potential.
                                    These AI agents can analyze employee engagement patterns, predict turnover risks, optimize talent acquisition, and personalize career development — 
                                    providing 24/7 strategic workforce intelligence to organizations worldwide.
                                    
                                </p>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                AI HR Agents now improve hiring quality by 68%, reduce employee turnover by 45%, 
                                and boost workforce productivity to 89% efficiency rates.
                                </p>
                            </div>

                            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 hover:bg-slate-800/60 transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                                        <TrendingUp className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">What's Next in HR AI?</h3>
                                </div>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                The future of AI in Human Resources transcends automation — it's about human augmentation and workforce empowerment. AI HR agents will become intelligent people partners, capable of 
                                Predicting employee needs before they express them • Personalizing career paths based on individual strengths and market trends 
                                Creating bias-free recruitment and promotion processes • Fostering inclusive workplace cultures through intelligent insights • 
                                Optimizing team dynamics and collaboration patterns with precision analytics
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced HR Advantages Section */}
            <section id="benefits" className="relative w-full py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <Award className="w-5 h-5 mr-3 text-emerald-400" />
                            Strategic HR Advantages
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold max-w-6xl mx-auto mb-8 leading-tight">
                        Why HR AI Agents are <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">Workforce Transformers</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                        Discover how AI-powered HR systems are revolutionizing talent management, enhancing employee experience, 
                        and delivering people-centered insights at enterprise scale. These agents aren't just HR tools — they're intelligent workforce partners designed to unlock human potential and drive organizational success.
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

            {/* HR AI Agents Showcase */}
            <section id="agents" className="relative w-full py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <Brain className="w-5 h-5 mr-3 text-purple-400" />
                            HR AI Agents Portfolio
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto mb-8 leading-tight">
                            Meet Your <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Human Resources AI</span> Team
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Specialized AI agents designed to optimize every aspect of human capital management — from talent acquisition and employee engagement to performance analytics and workforce planning. 
                        These intelligent HR partners work around the clock to enhance your people operations and drive organizational excellence.
                        </p>
                    </div>

                    {/* Featured Agent Carousel */}
                    <div className="mb-20">
                        <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
                            <div className="relative z-10">
                                <div className="mb-8">
                                    <div className={`inline-flex w-28 h-28 rounded-3xl bg-gradient-to-r ${hrCategory.agents[currentAgentIndex].color} items-center justify-center text-5xl mb-6 animate-pulse shadow-2xl`}>
                                        {hrCategory.agents[currentAgentIndex].icon}
                                    </div>
                                    <h3 className="text-4xl font-bold text-white mb-6">
                                        {hrCategory.agents[currentAgentIndex].name}
                                    </h3>
                                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                        {hrCategory.agents[currentAgentIndex].description}
                                    </p>
                                </div>

                                <div className="flex justify-center space-x-3 mb-8">
                                    {hrCategory.agents[currentAgentIndex].tags.map((tag, index) => (
                                        <span key={index} className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-center space-x-2">
                                    {hrCategory.agents.map((_, index) => (
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
                    <AgentSlider category={hrCategory} />
                </div>
            </section>

            {/* HR ROI Section */}
            <section id="roi" className="relative w-full py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <BarChart3 className="w-5 h-5 mr-3 text-green-400" />
                            HR Investment Returns
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto mb-8 leading-tight">
                            Quantifiable <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">People Impact</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                        Our HR AI agents deliver measurable improvements in talent acquisition, employee retention, and workforce productivity,
                        ensuring your human capital investment generates exceptional value for sustainable organizational growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {hrRoiStats.map((stat, index) => (
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
                            Average HR ROI: <span className="text-green-400">520% in First Year</span>
                        </h3>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
                        Organizations implementing our HR AI Agents achieve an average return of $5.20 for every dollar invested, through enhanced talent acquisition efficiency, 
                        reduced turnover costs, improved employee productivity, and data-driven people decisions that drive sustainable competitive advantage.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative w-full py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto mb-8 leading-tight">
                        Ready to Revolutionize Your <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">People Operations?</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Join thousands of progressive organizations already leveraging HR AI agents to attract top talent, 
                        enhance employee experience, and build high-performance workforce cultures that drive exceptional business results.
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
                                            <p className="text-slate-400">Expert HR guidance anytime</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                                            <Shield className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">GDPR Compliant</h4>
                                            <p className="text-slate-400">Enterprise-grade data security</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center text-slate-300">
                                    <Mail className="w-5 h-5 mr-3 text-blue-400" />
                                    hr@mercato.ai
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