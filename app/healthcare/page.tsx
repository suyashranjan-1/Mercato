
"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Play, Star, Users, Zap, Shield, Clock, Heart, TrendingUp, Award, CheckCircle, ArrowRight, Calendar, FileText, Brain, Stethoscope, Activity, Database, Lock, Globe, Phone, Mail, MapPin, Microscope, HeartHandshake, Building2, UserCheck, DollarSign, BarChart3 } from "lucide-react";
import { AgentSlider } from "@/components/AgentSlider";
import { NavbarDemo } from "@/components/navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/app/contact/page";
import { useRouter } from "next/navigation";

interface Agent {
    id: number;
    name: string;
    slug : string;
    youtube : string;
    description: string;
    icon: string;
    color: string;
    tags: string[];
    rating: string;
    usage: string;
    speed: string;
}

interface HealthcareCategory {
    name: string;
    description: string;
    agents: Agent[];
}

// Healthcare agents data
const healthcareCategory: HealthcareCategory = {
    "name": "Healthcare AI Agents",
    "description": "Healthcare AI agents designed to assist medical professionals with patient care, diagnosis support, and administrative tasks.",
    "agents": [
        {
            "id": 23,
            "name": "Medical Diagnosis AI Agent",
            "slug": "medicalDiagnosisAiAgent",

            "youtube": "https://www.youtube.com/watch?v=example",
            "description": "Assist healthcare professionals with preliminary diagnosis suggestions based on symptoms, medical history, and test results.",
            "icon": "🩺",
            "color": "from-red-500 to-rose-600",
            "tags": ["Diagnosis", "Medical", "Decision Support"],
            "rating": "4.9",
            "usage": "16.8k",
            "speed": "Fast"
        },
        {
            "id": 24,
            "name": "Patient Scheduling AI Agent",
            "slug": "patientSchedulingAiAgent",
            "youtube": "https://www.youtube.com/watch?v=example2",
            "description": "Optimize patient scheduling, reduce no-shows, and manage appointment calendars with intelligent booking algorithms.",
            "icon": "📅",
            "color": "from-teal-500 to-cyan-600",
            "tags": ["Scheduling", "Appointments", "Optimization"],
            "rating": "4.8",
            "usage": "23.4k",
            "speed": "Instant"
        },
        {
            "id": 25,
            "name": "Medical Records AI Agent",
            "slug": "medicalRecordsAiAgent",
            "youtube": "https://www.youtube.com/watch?v=example3",
            "description": "Process and organize medical records, extract key information, and ensure HIPAA-compliant data management.",
            "icon": "📋",
            "color": "from-blue-500 to-indigo-600",
            "tags": ["Records", "HIPAA", "Data Management"],
            "rating": "4.8",
            "usage": "14.9k",
            "speed": "Medium"
        },
        {
            "id": 26,
            "name": "Medication Reminder AI Agent",
            "slug": "medicationReminderAiAgent",
            "youtube": "https://www.youtube.com/watch?v=example4",
            "description": "Send personalized medication reminders, track adherence, and provide drug interaction warnings to patients.",
            "icon": "💊",
            "color": "from-green-500 to-emerald-600",
            "tags": ["Medication", "Reminders", "Adherence"],
            "rating": "4.7",
            "usage": "11.2k",
            "speed": "Instant"
        },
        {
            "id": 81,
            "name": "Patient Intake Scheduler AI Agent",
            "slug": "patientIntakeSchedulerAiAgent",
            "youtube": "https://www.youtube.com/watch?v=example5",
            "description": "Efficiently manage and schedule patient intake appointments to streamline clinic workflows and reduce waiting times.",
            "icon": "🗓️",
            "color": "from-indigo-500 to-blue-600",
            "tags": ["Scheduling", "Patient Intake", "Appointments"],
            "rating": "4.8",
            "usage": "12.3k",
            "speed": "Instant"
        },
        {
            "id": 82,
            "name": "Lab Results Extraction AI Agent",
            "slug": "labResultsExtractionAiAgent",
            "youtube": "https://www.youtube.com/watch?v=example6",
            "description": "Extract and organize lab test results from various sources for easy access and integration into patient records.",
            "icon": "🧪",
            "color": "from-purple-500 to-violet-600",
            "tags": ["Lab Results", "Data Extraction", "Healthcare"],
            "rating": "4.7",
            "usage": "9.6k",
            "speed": "Fast"
        },
        {
            "id": 83,
            "name": "Healthcare AI Agent",
            "slug": "healthcareAiAgent",
            "youtube": "https://www.youtube.com/watch?v=example7",
            "description": "General-purpose healthcare AI agent providing support for patient management, diagnostics, and administrative tasks.",
            "icon": "🏥",
            "color": "from-red-600 to-pink-700",
            "tags": ["Healthcare", "Support", "Administration"],
            "rating": "4.8",
            "usage": "14.1k",
            "speed": "Fast"
        },
        {
            "id": 84,
            "name": "Patient Service AI Agent",
            "slug": "patientServiceAiAgent",
            "youtube": "https://www.youtube.com/watch?v=example8",
            "description": "Enhance patient experience with real-time support, information provision, and service coordination across healthcare facilities.",
            "icon": "🤝",
            "color": "from-green-600 to-teal-700",
            "tags": ["Patient Service", "Support", "Experience"],
            "rating": "4.7",
            "usage": "11.8k",
            "speed": "Instant"
        }
    ]
};

// Healthcare timeline data
interface TimelineItem {
    year: string;
    title: string;
    description: string;
    icon: any; // Replace with proper icon type if needed
}

const healthcareTimeline: TimelineItem[] = [
    {
        year: "Ancient Times",
        title: "Traditional Medicine",
        description: "Herbal remedies and spiritual healing practices form the foundation of medical care",
        icon: Stethoscope
    },
    {
        year: "1847",
        title: "Anesthesia Revolution",
        description: "First use of ether as anesthesia transforms surgical procedures",
        icon: Activity
    },
    {
        year: "1928",
        title: "Penicillin Discovery",
        description: "Alexander Fleming discovers penicillin, launching the antibiotic era",
        icon: Microscope
    },
    {
        year: "1948",
        title: "WHO Established",
        description: "World Health Organization founded, setting global healthcare standards",
        icon: Globe
    },
    {
        year: "1967",
        title: "First Heart Transplant",
        description: "Dr. Christiaan Barnard performs the first human heart transplant",
        icon: Heart
    },
    {
        year: "1972",
        title: "CT Scanner Invented",
        description: "Computed tomography revolutionizes medical imaging and diagnostics",
        icon: Brain
    },
    {
        year: "1990s",
        title: "Electronic Health Records",
        description: "Digital transformation begins in healthcare documentation and patient management",
        icon: Database
    },
    {
        year: "2000s",
        title: "Telemedicine Rise",
        description: "Remote healthcare delivery becomes mainstream, expanding access to care",
        icon: Phone
    },
    {
        year: "2020+",
        title: "AI Revolution",
        description: "Artificial Intelligence transforms healthcare delivery, diagnosis, and patient care",
        icon: Brain
    }
];

// Enhanced statistics data
const stats = [
    { number: "95%", label: "Reduction in Administrative Tasks", icon: FileText, color: "from-blue-500 to-cyan-500" },
    { number: "24/7", label: "Available Patient Support", icon: Clock, color: "from-green-500 to-emerald-500" },
    { number: "75%", label: "Faster Diagnosis Processing", icon: Zap, color: "from-yellow-500 to-orange-500" },
    { number: "99.9%", label: "Data Security Compliance", icon: Shield, color: "from-purple-500 to-pink-500" }
];

// Enhanced advantages data
const advantages = [
    {
        title: "Enhanced Patient Care & Experience",
        description: "AI agents provide 24/7 personalized support, instant responses, and proactive health monitoring, dramatically improving patient satisfaction and health outcomes.",
        icon: HeartHandshake,
        gradient: "from-pink-500 to-rose-600",
        benefits: [
            "24/7 intelligent patient support",
            "Personalized treatment recommendations",
            "Real-time health monitoring alerts",
            "Reduced wait times and improved access",
            "Multilingual patient communication"
        ]
    },
    {
        title: "Operational Excellence & Efficiency",
        description: "Streamline workflows, eliminate manual tasks, and optimize resource allocation with intelligent automation that learns and adapts to your practice.",
        icon: TrendingUp,
        gradient: "from-blue-500 to-indigo-600",
        benefits: [
            "Automated appointment scheduling",
            "Intelligent resource optimization",
            "Workflow automation and integration",
            "Real-time performance analytics",
            "Predictive capacity planning"
        ]
    },
    {
        title: "Significant Cost Reduction",
        description: "Achieve substantial cost savings while maintaining the highest quality care standards through intelligent automation and optimized operations.",
        icon: DollarSign,
        gradient: "from-green-500 to-teal-600",
        benefits: [
            "60% reduction in administrative costs",
            "Lower staff turnover and training costs",
            "Reduced medical errors and liability",
            "Optimized resource utilization",
            "Improved billing accuracy and speed"
        ]
    },
    {
        title: "Enterprise Security & Compliance",
        description: "Military-grade security ensuring complete HIPAA compliance while protecting sensitive patient information with advanced encryption and access controls.",
        icon: Shield,
        gradient: "from-purple-500 to-violet-600",
        benefits: [
            "Full HIPAA and GDPR compliance",
            "End-to-end encryption protocols",
            "Comprehensive audit trails",
            "Multi-factor authentication",
            "Regular security assessments"
        ]
    }
];

// ROI Statistics
const roiStats = [
    { metric: "87%", label: "Reduction in Patient Wait Times", icon: Clock },
    { metric: "$2.3M", label: "Average Annual Savings", icon: DollarSign },
    { metric: "42%", label: "Increase in Patient Satisfaction", icon: Heart },
    { metric: "68%", label: "Improvement in Diagnostic Accuracy", icon: Activity },
    { metric: "91%", label: "Staff Productivity Increase", icon: TrendingUp },
    { metric: "24x", label: "Faster Data Processing", icon: Zap }
];

// Industry Impact Stats
const industryStats = [
    { number: "78%", description: "of healthcare executives plan to invest in AI within 2 years" },
    { number: "$45B", description: "projected AI healthcare market size by 2026" },
    { number: "150M+", description: "patients already benefiting from healthcare AI globally" },
    { number: "89%", description: "reduction in medical administrative costs with AI implementation" }
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
            {healthcareTimeline.map((item, index) => (
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
export default function HealthcarePage() {
    const router = useRouter();
    const [currentAgentIndex, setCurrentAgentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAgentIndex((prev) => (prev + 1) % healthcareCategory.agents.length);
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
                            🚀 Revolutionizing Healthcare with AI • Trusted by 10,000+ Medical Professionals
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight animate-fade-in-up">
                        The Future of<br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                            Healthcare AI
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl lg:text-3xl text-slate-400 max-w-5xl mx-auto leading-relaxed mb-12 animate-fade-in-up delay-200">
                        Transform patient care with intelligent AI agents that work 24/7 to enhance medical outcomes,
                        reduce costs by up to 87%, and streamline healthcare operations.
                        <span className="text-white font-medium bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            {" "}Experience the next evolution of healthcare.
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
                            Healthcare AI is <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Transforming the Industry</span>
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
                            Healthcare Evolution Timeline
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold max-w-6xl mx-auto mb-8 leading-tight">
                            From Ancient Remedies to <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">AI-Powered Care</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                            Healthcare has evolved dramatically from traditional herbal medicine to today's AI-driven precision care.
                            Witness the remarkable journey that brought us to this revolutionary moment in medical history.
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
                                    <h3 className="text-2xl font-bold text-white">The AI Healthcare Revolution</h3>
                                </div>
                                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                    Today's healthcare AI represents the culmination of centuries of medical advancement.
                                    From ancient herbal remedies to the invention of the stethoscope in 1816, and now to
                                    AI diagnostic systems that can process millions of data points in seconds.
                                </p>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    AI agents now provide 24/7 patient support, assist in complex diagnoses with 95% accuracy,
                                    and reduce administrative tasks by up to 90% - marking the beginning of truly intelligent,
                                    personalized healthcare for everyone.
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
                                    The future holds even more promise with predictive healthcare, personalized treatment protocols,
                                    and AI companions that will monitor and optimize human health in real-time. We're just at the
                                    beginning of this incredible transformation.
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
                            Why Healthcare AI Agents are <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">Game Changers</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                            Discover how AI agents are revolutionizing healthcare delivery, improving patient outcomes by up to 42%,
                            and creating more efficient medical practices that save both time and lives.
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
                            Meet Your <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">AI Healthcare</span> Team
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Specialized AI agents designed to handle every aspect of healthcare operations,
                            from patient care to administrative tasks, working 24/7 to optimize your practice.
                        </p>
                    </div>

                    {/* Featured Agent Carousel */}
                    <div className="mb-20">
                        <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
                            <div className="relative z-10">
                                <div className="mb-8">
                                    <div className={`inline-flex w-28 h-28 rounded-3xl bg-gradient-to-r ${healthcareCategory.agents[currentAgentIndex].color} items-center justify-center text-5xl mb-6 animate-pulse shadow-2xl`}>
                                        {healthcareCategory.agents[currentAgentIndex].icon}
                                    </div>
                                    <h3 className="text-4xl font-bold text-white mb-6">
                                        {healthcareCategory.agents[currentAgentIndex].name}
                                    </h3>
                                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                        {healthcareCategory.agents[currentAgentIndex].description}
                                    </p>
                                </div>

                                <div className="flex justify-center space-x-3 mb-8">
                                    {healthcareCategory.agents[currentAgentIndex].tags.map((tag, index) => (
                                        <span key={index} className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-center space-x-2">
                                    {healthcareCategory.agents.map((_, index) => (
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
                    <AgentSlider category={healthcareCategory} />
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
                            Our healthcare AI agents deliver quantifiable improvements across all key metrics,
                            ensuring your investment generates real value for your practice and patients.
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
                            Average ROI: <span className="text-green-400">340% in First Year</span>
                        </h3>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
                            Healthcare practices using our AI agents see an average return of $3.40 for every dollar invested,
                            with most organizations breaking even within the first 3 months.
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
                            Ready to Transform Your <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Healthcare Practice?</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Join thousands of healthcare professionals who are already using AI to improve patient outcomes and reduce costs.
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
                                    contact@mercato.agency
                                </div>
                                {/* <div className="flex items-center text-slate-300">
                                    <Phone className="w-5 h-5 mr-3 text-green-400" />
                                    +1 (555) 123-4567
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

