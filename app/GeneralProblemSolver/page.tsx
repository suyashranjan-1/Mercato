
"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Play, Star, Users, Zap, Shield, Clock, Heart, TrendingUp, Award, CheckCircle, ArrowRight, Calendar, FileText, Brain, Layers, Lightbulb, Activity, Database, Lock, Globe, Phone, Mail, MapPin, Target, RefreshCw, HeartHandshake, Building2, UserCheck, DollarSign, BarChart3 } from "lucide-react";
import { AgentSlider } from "@/components/AgentSlider";
import { NavbarDemo } from "@/components/navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

interface Agent {
    id: number;
    name: string;
    slug: string;
    youtubeUrl: string;
    description: string;
    icon: JSX.Element;
    color: string;
    tags: string[];
    rating: string;
    usage: string;
    speed: string;
    path?: string;
}

interface ProblemSolvingCategory {
    name: string;
    description: string;
    agents: Agent[];
}

interface Category {
    name: string;
    description: string;
    agents: Agent[];
}

// Problem Solving agents data
export const problemSolvingCategory: Category = {
    name: "Problem Solving AI Agents",
    description: "Intelligent AI agents designed to tackle complex challenges across industries, providing innovative solutions and strategic insights.",
    agents: [
        {
            id: 1,
            name: "Universal Problem Solver",
            slug:"universalProblemSolverAiAgent",
            youtubeUrl: "https://www.youtube.com/watch?v=example",
            description: "Advanced AI agent capable of analyzing complex problems across multiple domains and providing actionable solutions with detailed reasoning.",
            icon: <>🧠</>,
            color: "from-blue-500 to-purple-600",
            tags: ["Problem Solving", "Analysis", "Multi-domain"],
            rating: "4.9",
            usage: "12.5k",
            speed: "Fast",
            path: "/agents/universal-problem-solver"
        },
        {
            id: 2,
            name: "Task Automation AI Agent",
            slug: "taskAutomationAiAgent",
            youtubeUrl: "https://www.youtube.com/watch?v=example2",
            description: "Streamline your workflow by automating repetitive tasks and optimizing business processes with intelligent task management.",
            icon: <>⚡</>,
            color: "from-emerald-500 to-blue-600",
            tags: ["Automation", "Workflow", "Efficiency"],
            rating: "4.8",
            usage: "8.3k",
            speed: "Ultra Fast",
            path: "/agents/task-automation-ai-agent"
        },
        {
            id: 3,
            name: "Smart Decision Maker",
            slug: "smartDecisionMakerAiAgent",
            youtubeUrl: "https://www.youtube.com/watch?v=example3",
            description: "Make informed decisions with AI-powered analysis that evaluates multiple factors and provides recommendations.",
            icon: <>🎯</>,
            color: "from-orange-500 to-red-600",
            tags: ["Decision Making", "Analysis", "Strategy"],
            rating: "4.7",
            usage: "6.8k",
            speed: "Fast",
            path: "/agents/smart-decision-maker"
        },
        {
            id: 44,
            name: "Customer Service AI Agent",
            slug: "customerServiceAiAgent",
            youtubeUrl: "https://www.youtube.com/watch?v=example4",
            description: "Automate and personalize customer support with 24/7 AI-driven interaction.",
            icon: <>💬</>,
            color: "from-blue-400 to-indigo-500",
            tags: ["Customer Support", "Chatbot", "Service"],
            rating: "4.8",
            usage: "14.2k",
            speed: "Fast",
            path: "/agents/customer-service-ai-agent"
        },
        {
            id: 45,
            name: "Data Extraction AI Agent",
            slug: "dataExtractionAiAgent",
            youtubeUrl: "https://www.youtube.com/watch?v=example5",
            description: "Extract structured data from unstructured documents like PDFs, emails, and reports.",
            icon: <>📄</>,
            color: "from-teal-500 to-cyan-600",
            tags: ["Data Extraction", "OCR", "Documents"],
            rating: "4.7",
            usage: "10.9k",
            speed: "Medium",
            path: "/agents/data-extraction-ai-agent"
        },
        {
            id: 46,
            name: "Email Categorization & Triage AI Agent",
            slug: "emailCategorizationAndTriageAiAgent",
            youtubeUrl: "https://www.youtube.com/watch?v=example6",
            description: "Organize and prioritize incoming emails for better workflow efficiency.",
            icon: <>📧</>,
            color: "from-green-400 to-blue-500",
            tags: ["Email", "Productivity", "Categorization"],
            rating: "4.6",
            usage: "9.3k",
            speed: "Fast",
            path: "/agents/email-categorization-and-triage-ai-agent"
        },
        {
            id: 47,
            name: "Appointment Management AI Agent",
            slug: "appointmentManagementAiAgent",
            youtubeUrl: "https://www.youtube.com/watch?v=example7",
            description: "Automatically schedule, reschedule, and send reminders for appointments.",
            icon: <>📆</>,
            color: "from-indigo-500 to-blue-600",
            tags: ["Calendar", "Scheduling", "Productivity"],
            rating: "4.7",
            usage: "8.5k",
            speed: "Fast",
            path: "/agents/appointment-management-ai-agent"
        },
        {
            id: 48,
            name: "Interview Scheduler AI Agent",
            slug: "interviewSchedulerAiAgent",
            youtubeUrl: "https://www.youtube.com/watch?v=example8",
            description: "Coordinate interview times between candidates and recruiters efficiently.",
            icon: <>🗓️</>,
            color: "from-purple-500 to-pink-500",
            tags: ["HR", "Scheduling", "Interviews"],
            rating: "4.8",
            usage: "7.4k",
            speed: "Medium",
            path: "/agents/interview-scheduler-ai-agent"
        },
        {
            id: 49,
            name: "Data Entry AI Agent",
            slug: "dataEntryAiAgent",
            youtubeUrl: "https://www.youtube.com/watch?v=example9",
            description: "Automate repetitive data entry tasks with high speed and accuracy.",
            icon: <>⌨️</>,
            color: "from-gray-500 to-blue-500",
            tags: ["Data Entry", "Automation", "Efficiency"],
            rating: "4.6",
            usage: "13.1k",
            speed: "Ultra Fast",
            path: "/agents/data-entry-ai-agent"
        },
        {
            id: 50,
            name: "Billing Management AI Agent",
            slug: "billingManagementAiAgent",
            youtubeUrl: "https://www.youtube.com/watch?v=example10",
            description: "Handle invoices, billing cycles, and payment reminders seamlessly.",
            icon: <>🧾</>,
            color: "from-amber-500 to-orange-500",
            tags: ["Billing", "Finance", "Automation"],
            rating: "4.7",
            usage: "10.3k",
            speed: "Fast",
            path: "/agents/billing-management-ai-agent"
        },
        {
            id: 51,
            name: "Transaction Monitoring AI Agent",
            slug: "transactionMonitoringAiAgent",
            youtubeUrl: "https://www.youtube.com/watch?v=example11",
            description: "Detect and report suspicious transactions in real time.",
            icon: <>💳</>,
            color: "from-red-500 to-pink-600",
            tags: ["Finance", "Fraud Detection", "Monitoring"],
            rating: "4.9",
            usage: "11.7k",
            speed: "Instant",
            path: "/agents/transaction-monitoring-ai-agent"
        },
        {
            id: 52,
            name: "Budget Management AI Agent",
            slug: "budgetManagementAiAgent",
            youtubeUrl: "https://www.youtube.com/watch?v=example12",
            description: "Track expenses, analyze budgets, and suggest savings opportunities.",
            icon: <>📊</>,
            color: "from-lime-500 to-green-600",
            tags: ["Budget", "Finance", "Tracking"],
            rating: "4.8",
            usage: "9.6k",
            speed: "Fast",
            path: "/agents/budget-management-ai-agent"
        },
        {
            id: 53,
            name: "Document Review AI Agent",
            slug: "documentReviewAiAgent",
            youtubeUrl: "https://www.youtube.com/watch?v=example13",
            description: "Analyze and summarize lengthy documents with legal or technical content.",
            icon: <>📚</>,
            color: "from-blue-600 to-indigo-700",
            tags: ["Documents", "Review", "Summarization"],
            rating: "4.6",
            usage: "7.2k",
            speed: "Medium",
            path: "/agents/document-review-ai-agent"
        },
        {
            id: 54,
            name: "Contract Management AI Agent",
            slug: "contractManagementAiAgent",
            youtubeUrl: "https://www.youtube.com/watch?v=example14",
            description: "Automate contract lifecycle management and compliance monitoring.",
            icon: <>📝</>,
            color: "from-gray-600 to-blue-700",
            tags: ["Contracts", "Legal", "Compliance"],
            rating: "4.8",
            usage: "8.6k",
            speed: "Fast",
            path: "/agents/contract-management-ai-agent"
        },
        {
            id: 55,
            name: "Data Collection AI Agent",
            slug: "dataCollectionAiAgent",
            youtubeUrl: "https://www.youtube.com/watch?v=example15",
            description: "Collect structured and unstructured data from multiple sources automatically.",
            icon: <>🔍</>,
            color: "from-purple-400 to-blue-500",
            tags: ["Data", "Automation", "Collection"],
            rating: "4.7",
            usage: "11.0k",
            speed: "Medium",
            path: "/agents/data-collection-ai-agent"
        },
        {
            id: 56,
            name: "Invoice Processing AI Agent",
            slug: "invoiceProcessingAiAgent",
            youtubeUrl: "https://www.youtube.com/watch?v=example16",
            description: "Extract and process data from invoices with automated validation.",
            icon: <>🧮</>,
            color: "from-pink-400 to-red-500",
            tags: ["Invoices", "Finance", "Processing"],
            rating: "4.9",
            usage: "10.8k",
            speed: "Fast",
            path: "/agents/invoice-processing-ai-agent"
        },
        {
            id: 57,
            name: "Payroll Calculation AI Agent",
            slug: "payrollCalculationAiAgent",
            youtubeUrl: "https://www.youtube.com/watch?v=example17",
            description: "Calculate employee salaries, tax deductions, and generate payslips.",
            icon: <>💼</>,
            color: "from-yellow-400 to-orange-500",
            tags: ["Payroll", "HR", "Finance"],
            rating: "4.8",
            usage: "9.1k",
            speed: "Medium",
            path: "/agents/payroll-calculation-ai-agent"
        },
        {
            id: 58,
            name: "Legal Document Classifier AI Agent",
            slug: "legalDocumentClassifierAiAgent",
            youtubeUrl: "https://www.youtube.com/watch?v=example18",
            description: "Automatically categorize legal documents for faster retrieval and compliance.",
            icon: <>⚖️</>,
            color: "from-indigo-600 to-blue-700",
            tags: ["Legal", "Classification", "AI"],
            rating: "4.7",
            usage: "6.4k",
            speed: "Fast",
            path: "/agents/legal-document-classifier-ai-agent"
        },
        {
            id: 59,
            name: "Social Media Content AI Agent",
            slug: "socialMediaContentAiAgent",
            youtubeUrl: "https://www.youtube.com/watch?v=example19",

            description: "Create, schedule, and analyze social media content using AI.",
            icon: <>📱</>,
            color: "from-pink-500 to-yellow-500",
            tags: ["Social Media", "Content", "Marketing"],
            rating: "4.8",
            usage: "13.2k",
            speed: "Fast",
            path: "/agents/social-media-content-ai-agent"
        },
        {
            id: 60,
            name: "ETL (Extract, Transform, Load) AI Agent",
            slug: "etlExtractTransformLoadAiAgent",
            youtubeUrl: "https://www.youtube.com/watch?v=example20",
            description: "Automate ETL pipelines for seamless data migration and analytics workflows.",
            icon: <>🔄</>,
            color: "from-green-500 to-teal-600",
            tags: ["ETL", "Data", "Pipeline"],
            rating: "4.7",
            usage: "7.8k",
            speed: "Fast",
            path: "/agents/etl-extract-transform-load-ai-agent"
        },
        {
            id: 61,
            name: "RFP AI Agent",
            slug: "rfpAiAgent",
            youtubeUrl: "https://www.youtube.com/watch?v=example21",
            description: "Generate, evaluate, and respond to Requests for Proposals using AI.",
            icon: <>📌</>,
            color: "from-red-500 to-orange-600",
            tags: ["RFP", "Bidding", "Automation"],
            rating: "4.6",
            usage: "6.2k",
            speed: "Medium",
            path: "/agents/rfp-ai-agent"
        },
        {
            id: 62,
            name: "Loan Processing AI Agent",
            slug: "loanProcessingAiAgent",
            youtubeUrl: "https://www.youtube.com/watch?v=example22",
            description: "Automate credit assessment, documentation, and loan approval workflows.",
            icon: <>🏦</>,
            color: "from-blue-400 to-indigo-500",
            tags: ["Loans", "Finance", "Automation"],
            rating: "4.7",
            usage: "9.5k",
            speed: "Fast",
            path: "/agents/loan-processing-ai-agent"
        },
        {
            id: 63,
            name: "Suspicious Activity Reporting AI Agent",
            slug: "suspiciousActivityReportingAiAgent",
            youtubeUrl: "https://www.youtube.com/watch?v=example23",
            description: "Identify and report suspicious activities for regulatory compliance.",
            icon: <>🚨</>,
            color: "from-red-600 to-pink-600",
            tags: ["Compliance", "Monitoring", "Security"],
            rating: "4.9",
            usage: "8.8k",
            speed: "Fast",
            path: "/agents/suspicious-activity-reporting-ai-agent"
        }
    ]
};


// Problem solving timeline data
interface TimelineItem {
    year: string;
    title: string;
    description: string;
    icon: any;
}

const problemSolvingTimeline: TimelineItem[] = [
    {
        year: "Ancient Times",
        title: "Philosophical Inquiry",
        description: "Early civilizations develop systematic approaches to understanding and solving complex problems through logic and reasoning",
        icon: Brain
    },
    {
        year: "1940s",
        title: "Operations Research",
        description: "Mathematical and scientific methods applied to operational problems during World War II, birth of systematic problem-solving",
        icon: Target
    },
    {
        year: "1960s",
        title: "Systems Thinking",
        description: "Holistic approach to problem-solving considering interconnected systems and relationships emerges in business",
        icon: Layers
    },
    {
        year: "1970s",
        title: "Design Thinking",
        description: "Human-centered approach to innovation and creative problem-solving becomes mainstream in organizations",
        icon: Lightbulb
    },
    {
        year: "1980s",
        title: "Total Quality Management",
        description: "Systematic approach to continuous improvement and problem prevention transforms organizational thinking",
        icon: Award
    },
    {
        year: "1990s",
        title: "Lean Methodology",
        description: "Waste elimination and value optimization principles revolutionize how organizations approach problem-solving",
        icon: TrendingUp
    },
    {
        year: "2000s",
        title: "Agile Framework",
        description: "Iterative and adaptive problem-solving approaches transform project management and solution development",
        icon: RefreshCw
    },
    {
        year: "2010s",
        title: "Data-Driven Solutions",
        description: "Big data and analytics enable evidence-based problem-solving and predictive decision making",
        icon: BarChart3
    },
    {
        year: "2020+",
        title: "AI Problem Solving",
        description: "Artificial Intelligence agents provide intelligent, scalable solutions to complex multi-dimensional challenges",
        icon: Brain
    }
];

// Enhanced statistics data
const stats = [
    { number: "89%", label: "Problem Resolution Rate", icon: CheckCircle, color: "from-green-500 to-emerald-500" },
    { number: "24/7", label: "Continuous Problem Monitoring", icon: Clock, color: "from-blue-500 to-cyan-500" },
    { number: "67%", label: "Faster Solution Implementation", icon: Zap, color: "from-yellow-500 to-orange-500" },
    { number: "95%", label: "Client Satisfaction Rate", icon: Star, color: "from-purple-500 to-pink-500" }
];


// Enhanced advantages data
const advantages = [
    {
        title: "Intelligent Problem Analysis",
        description: "AI agents analyze complex problems from multiple angles, identifying root causes and hidden patterns that human analysis might miss.",
        icon: Brain,
        gradient: "from-blue-500 to-indigo-600",
        benefits: [
            "Multi-dimensional problem analysis",
            "Root cause identification",
            "Pattern recognition and insights",
            "Data-driven problem mapping",
            "Predictive problem forecasting"
        ]
    },
    {
        title: "Rapid Solution Generation",
        description: "Generate multiple solution alternatives quickly, evaluate feasibility, and recommend optimal approaches based on your specific constraints.",
        icon: Zap,
        gradient: "from-yellow-500 to-orange-600",
        benefits: [
            "Multiple solution alternatives",
            "Feasibility assessment",
            "Risk-benefit analysis",
            "Implementation roadmaps",
            "Success probability scoring"
        ]
    },
    {
        title: "Continuous Learning & Adaptation",
        description: "AI agents learn from each problem-solving experience, continuously improving recommendations and adapting to your organization's unique context.",
        icon: TrendingUp,
        gradient: "from-green-500 to-teal-600",
        benefits: [
            "Machine learning optimization",
            "Contextual adaptation",
            "Historical pattern analysis",
            "Performance improvement tracking",
            "Personalized recommendations"
        ]
    },
    {
        title: "Enterprise-Grade Security",
        description: "Protect sensitive problem-solving data with military-grade encryption while maintaining complete transparency in the solution process.",
        icon: Shield,
        gradient: "from-purple-500 to-violet-600",
        benefits: [
            "End-to-end encryption",
            "Secure data processing",
            "Compliance with regulations",
            "Audit trail maintenance",
            "Access control management"
        ]
    }
];

// ROI Statistics
const roiStats = [
    { metric: "73%", label: "Reduction in Problem Resolution Time", icon: Clock },
    { metric: "$1.8M", label: "Average Annual Cost Savings", icon: DollarSign },
    { metric: "56%", label: "Increase in Solution Effectiveness", icon: Target },
    { metric: "82%", label: "Improvement in Decision Quality", icon: Brain },
    { metric: "64%", label: "Team Productivity Increase", icon: TrendingUp },
    { metric: "18x", label: "Faster Problem Analysis", icon: Zap }
];

// Industry Impact Stats
const industryStats = [
    { number: "84%", description: "of Fortune 500 companies plan to invest in AI problem-solving within 18 months" },
    { number: "$127B", description: "projected AI problem-solving market size by 2027" },
    { number: "280M+", description: "business problems solved using AI globally in the past year" },
    { number: "71%", description: "reduction in operational inefficiencies with AI implementation" }
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

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
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
    const itemRefs = useRef<HTMLDivElement[]>([])

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
            {problemSolvingTimeline.map((item, index) => (
                <div
                    key={index}
                    ref={el => { if (el) itemRefs.current[index] = el; }}
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

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
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
export default function ProblemSolvingPage() {
    const router = useRouter();
    const [currentAgentIndex, setCurrentAgentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAgentIndex((prev) => (prev + 1) % problemSolvingCategory.agents.length);
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
                            🚀 Transforming Problem-Solving with AI • Trusted by 25,000+ Organizations Worldwide
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight animate-fade-in-up">
                        The Future of<br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                            Intelligent Problem Solving
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl lg:text-3xl text-slate-400 max-w-5xl mx-auto leading-relaxed mb-12 animate-fade-in-up delay-200">
                        Transform complex challenges into strategic opportunities with AI agents that analyze,
                        strategize, and solve problems 24/7,
                        reducing resolution time by up to 73% while improving solution quality.
                        <span className="text-white font-medium bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            {" "}Experience next-generation solution engineering.
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
                            General Problem Solver AI is <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Transforming the Industry</span>
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
                            Problem Solving Timeline
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold max-w-6xl mx-auto mb-8 leading-tight">
                            From Philosophical Logic to <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">AI-Powered Problem Solving</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                            Problem-solving has evolved from ancient philosophical inquiry to today&apos;s AI-driven strategic intelligence.
                            Explore the fascinating timeline that brought us from human intuition to machine-powered solutions transforming every industry.
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
                                    <h3 className="text-2xl font-bold text-white">🧠 The AI Problem-Solving Revolution</h3>
                                </div>
                                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                    Today’s AI-powered problem solvers represent the culmination of centuries of innovation in logic, decision science,
                                    and strategic analysis. From ancient philosophical reasoning to modern systems thinking and agile innovation,
                                    the evolution of problem-solving has reached its most powerful form yet — autonomous, intelligent AI agents.
                                    These AI agents can analyze millions of data points, generate optimized solutions in real time, and adapt continuously —
                                    providing round-the-clock strategic support to businesses, governments, and industries worldwide.

                                </p>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    AI Problem-Solving Agents now resolve up to 73% of complex challenges faster, reduce inefficiencies by 71%,
                                    and boost decision accuracy to 95%.
                                </p>
                            </div>

                            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 hover:bg-slate-800/60 transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                                        <TrendingUp className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">What&apos;s Next?</h3>
                                </div>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    The future of AI in problem-solving is not just automation — it’s augmentation. AI agents will become real-time collaborators, capable of
                                    Predicting complex issues before they arise Tailoring solutions to organization-specific environments
                                    Learning from every decision made Coordinating teams and systems with intelligent precision
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
                            Why General Problem Solver AI Agents are <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">Game Changers</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                            Discover how AI-powered problem solvers are transforming organizational decision-making, accelerating innovation,
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

            {/* AI Agents Showcase */}
            <section id="agents" className="relative w-full py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <Brain className="w-5 h-5 mr-3 text-purple-400" />
                            AI Agents Portfolio
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto mb-8 leading-tight">
                            Meet Your <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">General Problem Solver AI</span> Team
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Specialized AI agents engineered to tackle complex challenges across departments and industries — from strategic bottlenecks to operational inefficiencies.
                            These always-on problem solvers work 24/7 to keep your business agile, intelligent, and resilient.
                        </p>
                    </div>

                    {/* Featured Agent Carousel */}
                    <div className="mb-20">
                        <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
                            <div className="relative z-10">
                                <div className="mb-8">
                                    <div className={`inline-flex w-28 h-28 rounded-3xl bg-gradient-to-r ${problemSolvingCategory.agents[currentAgentIndex].color} items-center justify-center text-5xl mb-6 animate-pulse shadow-2xl`}>
                                        {problemSolvingCategory.agents[currentAgentIndex].icon}
                                    </div>
                                    <h3 className="text-4xl font-bold text-white mb-6">
                                        {problemSolvingCategory.agents[currentAgentIndex].name}
                                    </h3>
                                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                        {problemSolvingCategory.agents[currentAgentIndex].description}
                                    </p>
                                </div>

                                <div className="flex justify-center space-x-3 mb-8">
                                    {problemSolvingCategory.agents[currentAgentIndex].tags.map((tag: string, index: number) => (
                                        <span key={index} className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-center space-x-2">
                                    {problemSolvingCategory.agents.map((_: any, index: number) => (
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
                    <AgentSlider category={problemSolvingCategory as ProblemSolvingCategory} />

                    {/* <div className="text-center">
                        <button className="px-10 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-slate-100 hover:shadow-2xl hover:shadow-white/10 transform hover:scale-105 transition-all duration-300 text-lg">
                            Explore All {problemSolvingCategory.agents.length} AI Agents
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
                            Our AI problem solvers deliver quantifiable improvements across all key metrics,
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
                            Organizations leveraging our General Problem Solver AI Agents experience an
                            average return of $4.30 for every dollar invested, thanks to rapid resolution cycles,
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


                        {/* Demo Form section  */}

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

