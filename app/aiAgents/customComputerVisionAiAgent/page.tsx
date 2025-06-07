"use client";
import { useState, useEffect, useRef } from 'react';
import { Bot, ArrowRight, Play, Clock, Zap, Star, CheckCircle, BarChart3, Globe, Settings, ChevronRight, Brain, Cpu, Database, Image, Camera, Eye, Users, Shield, Smartphone, Mail, Code2, LayoutGrid, FileText, Upload } from 'lucide-react';
import { NavbarDemo } from "@/components/navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// --------- FIX: Deterministic floating dot positions for SSR/CSR match ---------
function getFloatingDotPositions(count: number) {
    function mulberry32(a: number) {
        return function() {
            let t = a += 0x6D2B79F5;
            t = Math.imul(t ^ t >>> 15, t | 1);
            t ^= t + Math.imul(t ^ t >>> 7, t | 61);
            return ((t ^ t >>> 14) >>> 0) / 4294967296;
        };
    }
    const rand = mulberry32(20240605); // Any fixed seed
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push({
            left: rand() * 100,
            top: rand() * 100,
            animationDelay: rand() * 5,
            animationDuration: 3 + rand() * 4,
        });
    }
    return arr;
}

const floatingDots = getFloatingDotPositions(20);


export default function CustomComputerVisionAIAgent() {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [visibleSections, setVisibleSections] = useState(new Set());
    const [activeStep, setActiveStep] = useState(0);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        setIsVisible(true);

        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => new Set([...prev, entry.target.id]));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
        );

        document.querySelectorAll('[id]').forEach((el) => {
            observerRef.current?.observe(el);
        });

        const stepInterval = setInterval(() => {
            setActiveStep(prev => (prev + 1) % 4);
        }, 3000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observerRef.current?.disconnect();
            clearInterval(stepInterval);
        };
    }, []);

    const stats = [
        { label: 'Images Processed', value: '5M+', icon: Image, color: 'from-blue-500 to-cyan-500' },
        { label: 'Avg Detection Time', value: '<0.8s', icon: Clock, color: 'from-yellow-500 to-orange-500' },
        { label: 'Custom Models Deployed', value: '1.2K+', icon: Cpu, color: 'from-emerald-500 to-teal-500' },
        { label: 'Uptime', value: '99.99%', icon: Zap, color: 'from-purple-500 to-pink-500' },
    ];

    const features = [
        {
            title: 'Custom Object Detection',
            description: 'Train and deploy models to detect unique objects, logos, or items in images and video streams.',
            icon: Eye,
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Image Classification',
            description: 'Instantly classify images using custom or pretrained models for any domain.',
            icon: Image,
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Automated Visual QA',
            description: 'Use AI to spot defects, anomalies, and issues in products or processes at scale.',
            icon: CheckCircle,
            gradient: 'from-emerald-500 to-teal-500'
        },
        {
            title: 'Document Scanning & OCR',
            description: 'Extract text, tables, and data from scans, receipts, and forms using advanced OCR.',
            icon: FileText,
            gradient: 'from-orange-500 to-red-500'
        },
        {
            title: 'Face & Emotion Recognition',
            description: 'Detect faces, analyze emotion, and enable smart authentication in real time.',
            icon: Users,
            gradient: 'from-indigo-500 to-purple-500'
        },
        {
            title: 'Video Analytics',
            description: 'Analyze live or recorded video for activity, people counting, safety compliance, and more.',
            icon: Camera,
            gradient: 'from-pink-500 to-rose-500'
        },
        {
            title: 'Edge & Cloud Deployment',
            description: 'Run computer vision models at the edge or in the cloud for speed and scalability.',
            icon: Cpu,
            gradient: 'from-rose-500 to-pink-500'
        },
        {
            title: 'Enterprise Security',
            description: 'SOC 2, GDPR compliance and end-to-end encryption for all media and data.',
            icon: Shield,
            gradient: 'from-amber-500 to-orange-500'
        }
    ];

    const howItWorks = [
        {
            step: 1,
            title: 'Upload or Connect Data',
            description: 'Securely upload images, videos, or connect live camera feeds to the vision agent.',
            icon: Upload,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            step: 2,
            title: 'Configure or Train Models',
            description: 'Choose prebuilt models or train custom AI for your specific use case and classes.',
            icon: Settings,
            color: 'from-purple-500 to-pink-500'
        },
        {
            step: 3,
            title: 'Analyze & Detect',
            description: 'Agent processes visual data, runs analysis, and detects objects, faces, or anomalies.',
            icon: Eye,
            color: 'from-emerald-500 to-teal-500'
        },
        {
            step: 4,
            title: 'Get Results & Automate',
            description: 'Receive real-time results, trigger alerts, or automate workflows based on vision insights.',
            icon: BarChart3,
            color: 'from-orange-500 to-red-500'
        }
    ];

    const integrations = [
        { name: 'AWS Rekognition', category: 'Cloud Vision', logo: '☁️' },
        { name: 'Azure Computer Vision', category: 'Cloud Vision', logo: '🔵' },
        { name: 'Google Vertex AI', category: 'Cloud Vision', logo: '🟢' },
        { name: 'OpenCV', category: 'Open Source', logo: '🧩' },
        { name: 'YOLO', category: 'Detection', logo: '🟠' },
        { name: 'TensorFlow', category: 'AI Framework', logo: '🔶' },
        { name: 'PyTorch', category: 'AI Framework', logo: '🔴' },
        { name: 'Twilio Video', category: 'Video', logo: '📹' },
        { name: 'Slack', category: 'Alerts', logo: '💬' },
        { name: 'Google Drive', category: 'Storage', logo: '📁' },
        { name: 'Dropbox', category: 'Storage', logo: '📦' },
        { name: 'REST API', category: 'Integrations', logo: '🔗' },
        { name: 'Power BI', category: 'Reporting', logo: '📊' },
        { name: 'Notion', category: 'Docs', logo: '📝' },
        { name: 'Shopify', category: 'E-Commerce', logo: '🛒' },
        { name: 'Custom Webhooks', category: 'Automation', logo: '⚡' },
    ];

    const channels = [
        { name: 'Web Dashboard', icon: Globe, description: 'Upload, view, and analyze media from any browser' },
        { name: 'Mobile App', icon: Smartphone, description: 'Capture and analyze images and video on the go' },
        { name: 'API Integration', icon: Code2, description: 'Integrate computer vision with your apps and workflows' },
        { name: 'Email Alerts', icon: Mail, description: 'Get instant alerts and reports when detections occur' }
    ];

    const benefits = [
        {
            title: 'Automate Visual Workflows',
            description: 'Save hours by automating manual review, inspection, and reporting with AI.',
            percentage: '85%',
            metric: 'manual effort saved'
        },
        {
            title: 'Increase Detection Accuracy',
            description: 'Custom-trained models produce more accurate results for your unique needs.',
            percentage: '99%',
            metric: 'precision'
        },
        {
            title: 'Accelerate Response',
            description: 'Detect critical events in real time and trigger instant alerts or actions.',
            percentage: '<1s',
            metric: 'real-time'
        },
        {
            title: 'Reduce Costs',
            description: 'Automate repetitive visual tasks and decrease reliance on manual labor.',
            percentage: '60%',
            metric: 'cost savings'
        },
        {
            title: 'Secure Visual Data',
            description: 'Enterprise-grade encryption and compliance keep images and video protected.',
            percentage: 'SOC 2',
            metric: 'certified'
        }
    ];

    const isInView = (sectionId: string) => visibleSections.has(sectionId);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
            <NavbarDemo />
            {/* Hero Section */}
            <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-16 sm:py-20 lg:py-32">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
                <div
                    className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
                    style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                ></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
                    style={{ transform: `translateY(${scrollY * -0.1}px)`, animationDelay: '1s' }}
                ></div>
                {/* FIX: Hydration-safe floating AI Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {floatingDots.map((dot, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
                            style={{
                                left: `${dot.left}%`,
                                top: `${dot.top}%`,
                                animationDelay: `${dot.animationDelay}s`,
                                animationDuration: `${dot.animationDuration}s`
                            }}
                        ></div>
                    ))}
                </div>
                <div className={`w-full max-w-7xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
                        <Bot className="w-4 h-4 mr-2 text-blue-400 animate-pulse" />
                        Custom Computer Vision AI Agent
                        <div className="ml-2 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight">
                        AI-powered
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent animate-glow">
                            Computer Vision Agent
                        </span>
                    </h1>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
                        Instantly analyze images, video, and documents with custom AI. Detect, classify, and automate visual data across any industry—no ML expertise required.
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 mb-16">
                        {/* Create Agent button now uses router.push */}
                        <button
                            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-2"
                            onClick={() => router.push("/contact")}
                        >
                            Create Agent
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        <Link
                            href="#"
                            target="_blank"
                            className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white font-semibold rounded-2xl hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-2"
                        >
                            <Play className="w-4 h-4" />
                            Watch Demo
                        </Link>
                    </div>
                    {/* Demo Chat/Preview */}
                    <div className="relative max-w-5xl mx-auto">
                        <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 group">
                            <div className="flex items-center justify-between mb-6 p-4 bg-slate-800/40 rounded-2xl">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                                            <Bot className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Vision AI Assistant</h3>
                                        <div className="text-slate-400 text-sm flex items-center gap-2">
                                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                                            Online • Analyzing Visuals
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-right">
                                        <div className="text-sm font-medium text-emerald-400">4.9★</div>
                                        <div className="text-xs text-slate-400">User Rating</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-medium text-blue-400">&lt;0.8s</div>
                                        <div className="text-xs text-slate-400">Detection Time</div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4 mb-6">
                                <div className="flex gap-3 animate-slideInLeft">
                                    <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                                        <Users className="w-4 h-4 text-slate-300" />
                                    </div>
                                    <div className="bg-slate-800/50 rounded-2xl p-3 flex-1 max-w-xs">
                                        <span className="text-sm">Can you detect scratches on these product images?</span>
                                        <span className="text-xs text-slate-400 mt-1 block">10:05 AM</span>
                                    </div>
                                </div>
                                <div className="flex gap-3 justify-end animate-slideInRight" style={{ animationDelay: '0.5s' }}>
                                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-3 max-w-sm">
                                        <span className="text-sm">Yes! Found 3 images with surface scratches. Flagged for QC review.</span>
                                        <span className="text-xs text-blue-100 mt-1 block">10:05 AM</span>
                                    </div>
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                        <Bot className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className="flex gap-3 animate-slideInLeft" style={{ animationDelay: '1s' }}>
                                    <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                                        <Users className="w-4 h-4 text-slate-300" />
                                    </div>
                                    <div className="bg-slate-800/50 rounded-2xl p-3 flex-1 max-w-xs">
                                        <span className="text-sm">Extract text from these scanned receipts.</span>
                                        <span className="text-xs text-slate-400 mt-1 block">10:06 AM</span>
                                    </div>
                                </div>
                                <div className="flex gap-3 justify-end animate-slideInRight" style={{ animationDelay: '1.5s' }}>
                                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-3 max-w-sm">
                                        <span className="text-sm">OCR complete! All receipt data extracted and exported to CSV.</span>
                                        <span className="text-xs text-blue-100 mt-1 block">10:06 AM</span>
                                    </div>
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                        <Bot className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 justify-end">
                                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-3 border border-blue-500/30">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                        <span className="text-xs text-blue-300">AI is typing...</span>
                                    </div>
                                </div>
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                    <Bot className="w-4 h-4 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section id="stats" className="relative py-16 sm:py-20 px-4 bg-gradient-to-r from-slate-900/30 to-slate-800/20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className={`relative p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 text-center hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-500 group transform overflow-hidden ${isInView('stats') ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-10'}`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                    <div className="relative z-10">
                                        <div className="flex justify-center mb-4">
                                            <div className={`p-3 rounded-2xl bg-gradient-to-r ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                                                <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                            </div>
                                        </div>
                                        <div className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                            {stat.value}
                                        </div>
                                        <div className="text-slate-300 font-medium text-xs sm:text-sm lg:text-base">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-16 sm:py-24 lg:py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${isInView('how-it-works') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
                            <Settings className="w-4 h-4 mr-2 text-emerald-400 animate-spin-slow" />
                            How It Works
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mx-auto mb-6 sm:mb-8 leading-tight px-4">
                            From image to insight in
                            <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent"> four steps</span>
                        </h2>
                    </div>
                    <div className="relative">
                        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent transform -translate-y-1/2"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {howItWorks.map((step, index) => {
                                const IconComponent = step.icon;
                                const isActive = activeStep === index;
                                return (
                                    <div
                                        key={index}
                                        className={`relative text-center transform transition-all duration-700 ${isInView('how-it-works') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${isActive ? 'scale-105' : ''}`}
                                        style={{ animationDelay: `${index * 200}ms` }}
                                    >
                                        <div className={`relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center transition-all duration-500 ${isActive ? 'animate-pulse' : ''}`}>
                                            <IconComponent className="w-8 h-8 text-white" />
                                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 border-2 border-slate-700 rounded-full flex items-center justify-center text-xs font-bold">
                                                {step.step}
                                            </div>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">{step.title}</h3>
                                        <div className="text-slate-300 leading-relaxed text-sm sm:text-base">{step.description}</div>
                                        {index < howItWorks.length - 1 && (
                                            <div className="hidden lg:block absolute top-8 -right-4 text-slate-600">
                                                <ChevronRight className="w-6 h-6 animate-pulse" />
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="py-16 sm:py-24 lg:py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${isInView('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
                            <Zap className="w-4 h-4 mr-2 text-emerald-400" />
                            Vision Agent Features
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mx-auto mb-6 sm:mb-8 leading-tight px-4">
                            Everything you need for
                            <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent"> custom computer vision</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className={`relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-500 group hover:scale-105 transform overflow-hidden ${isInView('features') ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-10'}`}
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                                    <div className="relative z-10">
                                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                                        <div className="text-slate-300 leading-relaxed text-sm sm:text-base">{feature.description}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Integration Channels */}
            <section id="channels" className="py-16 sm:py-24 lg:py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${isInView('channels') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
                            <Globe className="w-4 h-4 mr-2 text-blue-400" />
                            Integration Channels
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mx-auto mb-6 sm:mb-8 leading-tight px-4">
                            Launch on every
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent"> visual touchpoint</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {channels.map((channel, index) => {
                            const IconComponent = channel.icon;
                            return (
                                <div
                                    key={index}
                                    className={`relative p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-500 group text-center transform hover:scale-105 ${isInView('channels') ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-10'}`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 text-white">{channel.name}</h3>
                                    <p className="text-slate-300 text-sm">{channel.description}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                        {integrations.map((integration, index) => (
                            <div
                                key={index}
                                className={`relative p-6 rounded-2xl bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 hover:border-slate-600/50 hover:bg-slate-800/40 transition-all duration-500 text-center group transform hover:scale-105 ${isInView('channels') ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-10'}`}
                                style={{ animationDelay: `${400 + index * 50}ms` }}
                            >
                                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                    {integration.logo}
                                </div>
                                <h4 className="text-sm font-semibold text-white mb-1">{integration.name}</h4>
                                <p className="text-xs text-slate-400">{integration.category}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section id="benefits" className="py-16 sm:py-24 lg:py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${isInView('benefits') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
                            <BarChart3 className="w-4 h-4 mr-2 text-emerald-400" />
                            AI Benefits
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mx-auto mb-6 sm:mb-8 leading-tight px-4">
                            See more, do more with
                            <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent"> computer vision AI</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className={`relative p-8 rounded-3xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-500 group transform hover:scale-105 overflow-hidden ${isInView('benefits') ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-10'}`}
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
                                        <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">
                                            {benefit.percentage}
                                        </div>
                                    </div>
                                    <p className="text-slate-300 text-lg leading-relaxed mb-4">{benefit.description}</p>
                                    <div className="text-sm text-emerald-400 font-medium">{benefit.metric}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section id="capabilities" className="py-16 sm:py-24 lg:py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${isInView('capabilities') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
                            <Brain className="w-4 h-4 mr-2 text-purple-400" />
                            Computer Vision AI Capabilities
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mx-auto mb-6 sm:mb-8 leading-tight px-4">
                            AI for every
                            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"> visual workflow</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* AI Visualization */}
                        <div className={`relative transform transition-all duration-1000 ${isInView('capabilities') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <div className="relative">
                                <div className="relative w-80 h-80 mx-auto">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
                                    <div className="relative w-full h-full bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-full border border-slate-600/50 backdrop-blur-sm flex items-center justify-center">
                                        <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                                            <Brain className="w-16 h-16 text-white animate-pulse" />
                                        </div>
                                    </div>
                                    {[
                                        { label: 'Detection', angle: 0, color: 'from-blue-500 to-cyan-500' },
                                        { label: 'OCR', angle: 60, color: 'from-emerald-500 to-teal-500' },
                                        { label: 'Classification', angle: 120, color: 'from-orange-500 to-red-500' },
                                        { label: 'Video', angle: 180, color: 'from-purple-500 to-pink-500' },
                                        { label: 'Security', angle: 240, color: 'from-yellow-500 to-orange-500' },
                                        { label: 'Automation', angle: 300, color: 'from-indigo-500 to-purple-500' }
                                    ].map((node, index) => {
                                        const x = Math.cos((node.angle * Math.PI) / 180) * 120;
                                        const y = Math.sin((node.angle * Math.PI) / 180) * 120;
                                        return (
                                            <div
                                                key={index}
                                                className="absolute w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 animate-float"
                                                style={{
                                                    left: `calc(50% + ${x}px)`,
                                                    top: `calc(50% + ${y}px)`,
                                                    animationDelay: `${index * 0.5}s`
                                                }}
                                            >
                                                <div className={`w-full h-full bg-gradient-to-r ${node.color} rounded-2xl flex items-center justify-center border border-white/20 backdrop-blur-sm hover:scale-110 transition-transform duration-300`}>
                                                    <span className="text-white text-xs font-bold">{node.label}</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        {/* Capabilities List */}
                        <div className={`space-y-8 transform transition-all duration-1000 ${isInView('capabilities') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            {[
                                {
                                    title: 'Object & Defect Detection',
                                    description: 'Detect objects, defects, and anomalies in real time with high accuracy.',
                                    icon: Eye,
                                    color: 'from-blue-500 to-cyan-500'
                                },
                                {
                                    title: 'Optical Character Recognition (OCR)',
                                    description: 'Extract text, numbers, and tables from images, documents, and receipts.',
                                    icon: FileText,
                                    color: 'from-purple-500 to-pink-500'
                                },
                                {
                                    title: 'Image & Video Classification',
                                    description: 'Classify images and video frames by categories, events, or quality.',
                                    icon: Image,
                                    color: 'from-emerald-500 to-teal-500'
                                },
                                {
                                    title: 'Live Video Analytics',
                                    description: 'Process and analyze live video streams for safety, compliance, or activity.',
                                    icon: Camera,
                                    color: 'from-orange-500 to-red-500'
                                },
                                {
                                    title: 'Enterprise Security',
                                    description: 'Keep all visual data encrypted, private, and compliant with regulations.',
                                    icon: Shield,
                                    color: 'from-indigo-500 to-purple-500'
                                },
                                {
                                    title: 'Automated Visual Workflows',
                                    description: 'Trigger alerts, export reports, or launch automations based on vision results.',
                                    icon: Cpu,
                                    color: 'from-cyan-500 to-blue-500'
                                }
                            ].map((capability, index) => {
                                const IconComponent = capability.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex items-start gap-6 p-6 rounded-2xl bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 hover:border-slate-600/50 hover:bg-slate-800/40 transition-all duration-500 group"
                                        style={{ animationDelay: `${index * 200}ms` }}
                                    >
                                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${capability.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{capability.title}</h3>
                                            <p className="text-slate-300 leading-relaxed">{capability.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="cta" className="py-16 sm:py-24 lg:py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
                <div className="max-w-4xl mx-auto text-center">
                    <div className={`transform transition-all duration-1000 ${isInView('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
                            <Zap className="w-4 h-4 mr-2 text-emerald-400" />
                            Ready for smarter vision?
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                            Empower your team with a
                            <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent"> Custom Computer Vision AI Agent</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 leading-relaxed">
                            Join industry leaders automating visual inspection, document processing, and real-time analytics—no ML expertise needed.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-slate-700/50">
                            {[
                                { label: 'Setup Time', value: '< 5 Days' },
                                { label: 'Live Results', value: '< 1s' },
                                { label: 'Enterprise Security', value: 'SOC 2' },
                                { label: 'Support', value: '24/7 Available' }
                            ].map((item, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                                    <div className="text-sm text-slate-400">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0px); }
                }
                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-30px); }
                    to { opacity: 1; transform: translateX(0px); }
                }
                @keyframes slideInRight {
                    from { opacity: 0; transform: translateX(30px); }
                    to { opacity: 1; transform: translateX(0px); }
                }
                @keyframes glow {
                    0%, 100% { filter: brightness(1); }
                    50% { filter: brightness(1.2); }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-slideUp {
                    animation: slideUp 0.8s ease-out forwards;
                }
                .animate-slideInLeft {
                    animation: slideInLeft 0.8s ease-out forwards;
                }
                .animate-slideInRight {
                    animation: slideInRight 0.8s ease-out forwards;
                }
                .animate-glow {
                    animation: glow 3s ease-in-out infinite;
                }
                .animate-spin-slow {
                    animation: spin-slow 3s linear infinite;
                }
            `}</style>
        </div>
    );
}