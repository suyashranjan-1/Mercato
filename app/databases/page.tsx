"use client";

import { useState, useEffect, useRef } from 'react';
import { Database, Server, Zap, Shield, Globe, BarChart3, Search, Filter, ArrowRight, CheckCircle, Clock, Users, Activity } from 'lucide-react';

interface Database {
    id: number;
    name: string;
    type: string;
    description: string;
    size: string;
    records: string;
    uptime: string;
    color: string;
    icon: React.ReactNode;
    features: string[];
    status: string;
}

export default function DatabasePage() {
    const [activeTab, setActiveTab] = useState('overview');
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const [visibleSections, setVisibleSections] = useState(new Set());
    const [selectedDatabase, setSelectedDatabase] = useState<Database | null>(null);

    useEffect(() => {
        setIsVisible(true);

        // Parallax scroll effect
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);

        // Intersection Observer for scroll animations
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => new Set(Array.from(prev).concat(entry.target.id)));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
        );

        // Observe all sections with IDs
        document.querySelectorAll('[id]').forEach((el) => {
            observerRef.current?.observe(el);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observerRef.current?.disconnect();
        };
    }, []);

    const databases = [
        {
            id: 1,
            name: 'Neural Networks Hub',
            type: 'AI Training Data',
            description: 'Comprehensive dataset for deep learning model training with 10M+ labeled samples',
            size: '2.5TB',
            records: '10.2M',
            uptime: '99.9%',
            color: 'from-blue-500 to-cyan-600',
            icon: '🧠',
            features: ['Real-time Processing', 'Auto-scaling', 'Multi-region Sync'],
            status: 'active'
        },
        {
            id: 2,
            name: 'Customer Intelligence',
            type: 'Analytics Database',
            description: 'Advanced customer behavior analytics with predictive modeling capabilities',
            size: '1.8TB',
            records: '8.7M',
            uptime: '99.8%',
            color: 'from-purple-500 to-pink-600',
            icon: '👥',
            features: ['Behavioral Analytics', 'Predictive Modeling', 'Real-time Insights'],
            status: 'active'
        },
        {
            id: 3,
            name: 'Market Dynamics',
            type: 'Financial Data',
            description: 'Real-time market data processing with advanced algorithmic trading support',
            size: '3.2TB',
            records: '15.4M',
            uptime: '99.95%',
            color: 'from-emerald-500 to-teal-600',
            icon: '📊',
            features: ['High-frequency Trading', 'Risk Analytics', 'Market Prediction'],
            status: 'active'
        },
        {
            id: 4,
            name: 'Natural Language Core',
            type: 'NLP Database',
            description: 'Multilingual text processing database with sentiment analysis capabilities',
            size: '1.2TB',
            records: '5.8M',
            uptime: '99.7%',
            color: 'from-orange-500 to-red-600',
            icon: '💬',
            features: ['Multi-language Support', 'Sentiment Analysis', 'Text Generation'],
            status: 'maintenance'
        },
        {
            id: 5,
            name: 'Vision Processing',
            type: 'Computer Vision',
            description: 'Image and video processing database with object recognition capabilities',
            size: '4.1TB',
            records: '12.9M',
            uptime: '99.9%',
            color: 'from-violet-500 to-purple-600',
            icon: '👁️',
            features: ['Object Recognition', 'Image Classification', 'Video Analytics'],
            status: 'active'
        },
        {
            id: 6,
            name: 'IoT Data Stream',
            type: 'Sensor Data',
            description: 'Internet of Things data collection with real-time monitoring and alerts',
            size: '2.9TB',
            records: '22.1M',
            uptime: '99.8%',
            color: 'from-green-500 to-emerald-600',
            icon: '🌐',
            features: ['Real-time Monitoring', 'Edge Computing', 'Anomaly Detection'],
            status: 'active'
        }
    ];

    const stats = [
        { label: 'Total Databases', value: '50+', icon: Database, color: 'from-blue-500 to-cyan-600' },
        { label: 'Data Processed Daily', value: '2.5PB', icon: Server, color: 'from-purple-500 to-pink-600' },
        { label: 'Query Response Time', value: '<50ms', icon: Zap, color: 'from-emerald-500 to-teal-600' },
        { label: 'Uptime Guarantee', value: '99.9%', icon: Shield, color: 'from-orange-500 to-red-600' },
    ];

    const features = [
        {
            title: 'Multi-Cloud Architecture',
            description: 'Seamlessly distributed across AWS, Azure, and Google Cloud for maximum reliability',
            icon: Globe,
            color: 'from-blue-500 to-cyan-600'
        },
        {
            title: 'Real-time Analytics',
            description: 'Process and analyze data in real-time with sub-second query response times',
            icon: BarChart3,
            color: 'from-purple-500 to-pink-600'
        },
        {
            title: 'Advanced Search',
            description: 'AI-powered search capabilities with natural language query processing',
            icon: Search,
            color: 'from-emerald-500 to-teal-600'
        },
        {
            title: 'Smart Filtering',
            description: 'Intelligent data filtering and categorization using machine learning algorithms',
            icon: Filter,
            color: 'from-orange-500 to-red-600'
        }
    ];

    const isInView = (sectionId: string) => visibleSections.has(sectionId);

    return (
        <>
            {/* SEO Meta Tags */}
            <head>
                <title>Database Solutions - Mercato AI Agency | Advanced Data Management & Analytics</title>
                <meta name="description" content="Explore Mercato Agency's cutting-edge database solutions. Real-time analytics, AI-powered processing, and multi-cloud architecture for enterprise-grade data management." />
                <meta name="keywords" content="database solutions, AI database, real-time analytics, data processing, machine learning data, enterprise database, cloud database" />
                <meta property="og:title" content="Advanced Database Solutions - Mercato AI Agency" />
                <meta property="og:description" content="Discover our comprehensive database ecosystem powering next-generation AI applications with real-time processing and analytics." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Database Solutions - Mercato AI Agency" />
                <meta name="twitter:description" content="Enterprise-grade database solutions with AI-powered analytics and real-time processing capabilities." />
            </head>

            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
                {/* Hero Section */}
                <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-16 sm:py-20 lg:py-32">
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
                    <div
                        className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
                        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                    ></div>
                    <div
                        className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"
                        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
                    ></div>

                    {/* Floating Database Icons */}
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(15)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute text-blue-400/20 text-2xl animate-float"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 5}s`,
                                    animationDuration: `${4 + Math.random() * 4}s`
                                }}
                            >
                                {['🗄️', '💾', '🔗', '⚡', '🔐'][Math.floor(Math.random() * 5)]}
                            </div>
                        ))}
                    </div>

                    <div className={`w-full max-w-7xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300 hover:border-slate-600/50 transition-all duration-300 animate-slideDown">
                            <Database className="w-3 h-3 mr-2 text-blue-400" />
                            Database Solutions
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight animate-slideUp">
                            Intelligent Data
                            <br />
                            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent animate-glow">
                                Infrastructure
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 animate-slideUp animation-delay-200">
                            Power your AI applications with our cutting-edge database ecosystem. 
                            <span className="text-white font-medium"> Real-time processing, advanced analytics, and enterprise-grade security.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 animate-slideUp animation-delay-400">
                            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base inline-flex items-center">
                                Explore Databases
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white font-semibold rounded-2xl hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 text-sm sm:text-base">
                                View Documentation
                            </button>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section id="stats" className="relative py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-slate-900/30 to-slate-800/20">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                            {stats.map((stat, index) => {
                                const IconComponent = stat.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 text-center hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-300 group transform ${isInView('stats') ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-10'}`}
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                        </div>
                                        <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                                            {stat.value}
                                        </div>
                                        <div className="text-slate-300 font-medium text-xs sm:text-sm lg:text-base">
                                            {stat.label}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-16 sm:py-24 lg:py-32 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${isInView('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
                                <Zap className="w-3 h-3 mr-2 text-blue-400" />
                                Core Features
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mx-auto mb-6 sm:mb-8 leading-tight px-4">
                                Built for the
                                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"> future</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                            {features.map((feature, index) => {
                                const IconComponent = feature.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-300 group hover:scale-105 transform ${isInView('features') ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-10'}`}
                                        style={{ animationDelay: `${index * 150}ms` }}
                                    >
                                        <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white">{feature.title}</h3>
                                        <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Database Showcase */}
                <section id="databases" className="py-16 sm:py-24 lg:py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
                    <div className="max-w-7xl mx-auto">
                        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${isInView('databases') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
                                <Server className="w-3 h-3 mr-2 text-purple-400" />
                                Our Database Ecosystem
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-6xl mx-auto mb-6 sm:mb-8 leading-tight px-4">
                                Powering next-generation
                                <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"> AI applications</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {databases.map((db, index) => (
                                <div
                                    key={db.id}
                                    className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer ${isInView('databases') ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-10'}`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    onClick={() => setSelectedDatabase(db)}
                                >
                                    <div className="p-6 sm:p-8">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${db.color} flex items-center justify-center text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300`}>
                                                {db.icon}
                                            </div>
                                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${db.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                                                {db.status === 'active' ? (
                                                    <div className="flex items-center">
                                                        <CheckCircle className="w-3 h-3 mr-1" />
                                                        Active
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center">
                                                        <Clock className="w-3 h-3 mr-1" />
                                                        Maintenance
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{db.name}</h3>
                                        <p className="text-sm sm:text-base text-blue-400 mb-3 font-medium">{db.type}</p>
                                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">{db.description}</p>

                                        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4">
                                            <div className="text-center">
                                                <div className="text-lg sm:text-xl font-bold text-white">{db.size}</div>
                                                <div className="text-xs text-slate-400">Storage</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-lg sm:text-xl font-bold text-white">{db.records}</div>
                                                <div className="text-xs text-slate-400">Records</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-lg sm:text-xl font-bold text-green-400">{db.uptime}</div>
                                                <div className="text-xs text-slate-400">Uptime</div>
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            {db.features.slice(0, 2).map((feature, idx) => (
                                                <div key={idx} className="flex items-center text-xs sm:text-sm text-slate-300">
                                                    <CheckCircle className="w-3 h-3 mr-2 text-green-400" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="cta" className="py-16 sm:py-24 lg:py-32 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className={`relative rounded-2xl sm:rounded-3xl overflow-hidden transform transition-all duration-1000 ${isInView('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                            <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 p-8 sm:p-12 lg:p-16">
                                <div className="text-center">
                                    <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
                                        <Activity className="w-3 h-3 mr-2 text-emerald-400" />
                                        Get Started Today
                                    </div>

                                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-4">
                                        Ready to accelerate your
                                        <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent"> data strategy</span>?
                                    </h2>

                                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
                                        Join leading companies leveraging our intelligent database infrastructure
                                        to power their AI-driven innovations and data analytics.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                                        <button className="px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-xl sm:rounded-2xl hover:shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300 text-base sm:text-lg inline-flex items-center justify-center">
                                            Start Free Trial
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </button>
                                        <button className="px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white font-semibold rounded-xl sm:rounded-2xl hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 text-base sm:text-lg">
                                            Schedule Demo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Database Modal */}
                {selectedDatabase && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={() => setSelectedDatabase(null)}>
                        <div className="bg-slate-900 rounded-3xl p-8 max-w-2xl w-full border border-slate-700/50" onClick={e => e.stopPropagation()}>
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${selectedDatabase.color} flex items-center justify-center text-2xl mr-4`}>
                                        {selectedDatabase.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{selectedDatabase.name}</h3>
                                        <p className="text-blue-400 font-medium">{selectedDatabase.type}</p>
                                    </div>
                                </div>
                                <button onClick={() => setSelectedDatabase(null)} className="text-slate-400 hover:text-white">
                                    ✕
                                </button>
                            </div>
                            
                            <p className="text-slate-300 mb-6">{selectedDatabase.description}</p>
                            
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                                    <div className="text-2xl font-bold text-white">{selectedDatabase.size}</div>
                                    <div className="text-sm text-slate-400">Storage Size</div>
                                </div>
                                <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                                    <div className="text-2xl font-bold text-white">{selectedDatabase.records}</div>
                                    <div className="text-sm text-slate-400">Total Records</div>
                                </div>
                                <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                                    <div className="text-2xl font-bold text-green-400">{selectedDatabase.uptime}</div>
                                    <div className="text-sm text-slate-400">Uptime</div>
                                </div>
                            </div>
                            
                            <div className="space-y-2 mb-6">
                                <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                                {selectedDatabase.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center text-slate-300">
                                        <CheckCircle className="w-4 h-4 mr-3 text-green-400" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                            
                            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                                Access Database
                            </button>
                        </div>
                    </div>
                )};

                {/* Footer Section */}
                <footer className="relative bg-slate-950 border-t border-slate-800/50">
                    {/* Newsletter Section */}
                    <div className="px-4 py-16 sm:py-20 lg:py-24">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-12 lg:mb-16">
                                <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
                                    <Activity className="w-3 h-3 mr-2 text-blue-400" />
                                    Stay Connected
                                </div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                                    Start Building
                                    <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"> Tomorrow&apos;s Agents</span>
                                    <br />
                                    Automate Processes
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10">
                                    Get the latest updates on database innovations, AI breakthroughs, and exclusive insights delivered to your inbox.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                                    <div className="flex-1">
                                        <input 
                                            type="email" 
                                            placeholder="Enter your email address"
                                            className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                                        />
                                    </div>
                                    <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Footer */}
                    <div className="px-4 py-12 sm:py-16 border-t border-slate-800/50">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                                {/* Brand Column */}
                                <div className="lg:col-span-1">
                                    <div className="flex items-center mb-6">
                                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                                            <Database className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-xl font-bold text-white">Mercato</span>
                                    </div>
                                    <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
                                        Empowering businesses with intelligent database solutions and cutting-edge AI infrastructure for the future of data management.
                                    </p>
                                    <div className="flex space-x-4">
                                        {['Twitter', 'LinkedIn', 'GitHub', 'Discord'].map((social) => (
                                            <a 
                                                key={social}
                                                href="#" 
                                                className="w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
                                            >
                                                <span className="text-sm font-medium">{social[0]}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Products Column */}
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-6">Products</h3>
                                    <ul className="space-y-3">
                                        {[
                                            'AI Database Solutions',
                                            'Real-time Analytics',
                                            'Machine Learning Platform',
                                            'Data Visualization',
                                            'Cloud Infrastructure',
                                            'Enterprise Security'
                                        ].map((item) => (
                                            <li key={item}>
                                                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                                                    {item}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Resources Column */}
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
                                    <ul className="space-y-3">
                                        {[
                                            'Documentation',
                                            'API Reference',
                                            'Tutorials',
                                            'Best Practices',
                                            'Case Studies',
                                            'White Papers'
                                        ].map((item) => (
                                            <li key={item}>
                                                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                                                    {item}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Company Column */}
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
                                    <ul className="space-y-3">
                                        {[
                                            'About Us',
                                            'Careers',
                                            'Blog',
                                            'Press',
                                            'Partners',
                                            'Contact'
                                        ].map((item) => (
                                            <li key={item}>
                                                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                                                    {item}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Bottom Bar */}
                            <div className="pt-8 border-t border-slate-800/50">
                                <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                                    <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-400">
                                        <span>© 2025 Mercato AI Agency. All rights reserved.</span>
                                        <div className="flex items-center gap-4">
                                            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                                            <span className="text-slate-600">•</span>
                                            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                                            <span className="text-slate-600">•</span>
                                            <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-slate-400">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                            <span>All systems operational</span>
                                        </div>
                                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                                            Status Page
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl"></div>
                </footer>
            </div>
        </>
    );
}