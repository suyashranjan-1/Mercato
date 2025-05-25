"use client";

import { useState, useEffect, useRef } from 'react';
import { NavbarDemo } from "@/components/navbar";
import Footer from "@/components/Footer";

export default function About() {
    const [activeTab, setActiveTab] = useState('vision');
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

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

    const teamMembers = [
        {
            id: 1,
            name: 'Alex Johnson',
            title: 'CEO & Founder',
            description: 'Visionary leader with 10+ years in AI and digital transformation',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
        },
        {
            id: 2,
            name: 'Mei Lin',
            title: 'CTO',
            description: 'AI expert specializing in machine learning and scalable systems',
            image: 'https://images.unsplash.com/photo-1494790108755-2616b332c796?w=400&h=400&fit=crop&crop=face',
        },
        {
            id: 3,
            name: 'David Smith',
            title: 'Lead Developer',
            description: 'Full-stack architect building next-generation AI solutions',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
        },
    ];

    const stats = [
        { label: 'Companies Served', value: '10+', icon: '🏢' },
        { label: 'Years of Experience', value: '8+', icon: '⏰' },
        { label: 'Global Presence', value: '17', icon: '🌍' },
        { label: 'AI Models Deployed', value: '100+', icon: '🤖' },
    ];

    const values = [
        {
            title: 'Innovation First',
            description: 'We push the boundaries of what\'s possible with AI technology',
            icon: '🚀',
            color: 'from-blue-500 to-purple-600'
        },
        {
            title: 'Ethical AI',
            description: 'Building responsible AI that benefits humanity',
            icon: '⚖️',
            color: 'from-emerald-500 to-teal-600'
        },
        {
            title: 'Collaboration',
            description: 'Working together to create extraordinary solutions',
            icon: '🤝',
            color: 'from-orange-500 to-red-600'
        },
        {
            title: 'Excellence',
            description: 'Delivering exceptional quality in everything we do',
            icon: '⭐',
            color: 'from-purple-500 to-pink-600'
        }
    ];

    const isInView = (sectionId: string) => visibleSections.has(sectionId);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
            <NavbarDemo />

            {/* Hero Section */}
            <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-16 sm:py-20 lg:py-32">
                {/* Enhanced Animated Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
                <div
                    className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
                    style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                ></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"
                    style={{ transform: `translateY(${scrollY * -0.1}px)` }}
                ></div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${3 + Math.random() * 4}s`
                            }}
                        ></div>
                    ))}
                </div>

                <div className={`w-full max-w-7xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300 hover:border-slate-600/50 transition-all duration-300 animate-slideDown">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                        About Our Agency
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight animate-slideUp">
                        Building the Future with
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent animate-glow">
                            Artificial Intelligence
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 animate-slideUp animation-delay-200">
                        We're a team of innovators, dreamers, and builders creating AI solutions that transform businesses
                        and improve lives. <span className="text-white font-medium">Together, we're shaping tomorrow.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 animate-slideUp animation-delay-400">
                        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                            Join Our Mission
                        </button>
                        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white font-semibold rounded-2xl hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 text-sm sm:text-base">
                            Our Story
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section id="stats" className="relative py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-slate-900/30 to-slate-800/20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 text-center hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-300 group transform ${isInView('stats') ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300 animate-bounce-slow">
                                    {stat.icon}
                                </div>
                                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                                    {stat.value}
                                </div>
                                <div className="text-slate-300 font-medium text-xs sm:text-sm lg:text-base">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section id="philosophy" className="py-16 sm:py-24 lg:py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${isInView('philosophy') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                        <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                            Our Philosophy
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mx-auto mb-6 sm:mb-8 leading-tight px-4">
                            Great things start with a
                            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"> vision</span>,
                            built through <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">action</span>
                        </h2>
                    </div>

                    <div className={`relative mb-12 sm:mb-16 transform transition-all duration-1000 delay-300 ${isInView('philosophy') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 via-purple-600/20 to-blue-900/20 rounded-2xl sm:rounded-3xl blur-xl"></div>
                        <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-700/50">
                            <div className="flex flex-wrap justify-center mb-6 sm:mb-8 gap-2 sm:gap-4">
                                {['vision', 'values', 'approach'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 font-semibold text-sm sm:text-base ${activeTab === tab
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                                            : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:scale-105'
                                            }`}
                                    >
                                        {tab === 'vision' && 'Our Vision'}
                                        {tab === 'values' && 'Core Values'}
                                        {tab === 'approach' && 'Our Approach'}
                                    </button>
                                ))}
                            </div>

                            <div className="min-h-64 sm:min-h-80 lg:min-h-96">
                                {activeTab === 'vision' && (
                                    <div className="space-y-4 sm:space-y-6 animate-fadeIn">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 px-4">
                                            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                                                Empowering humanity through intelligent technology
                                            </span>
                                        </h3>
                                        <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto text-center px-4">
                                            We envision a world where artificial intelligence amplifies human potential,
                                            solving complex challenges and creating opportunities for growth, innovation, and prosperity.
                                            Our mission is to develop AI solutions that are not just powerful, but ethical,
                                            accessible, and designed to benefit all of humanity.
                                        </p>
                                    </div>
                                )}

                                {activeTab === 'values' && (
                                    <div className="animate-fadeIn">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 px-4">
                                            <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">
                                                The principles that guide us
                                            </span>
                                        </h3>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                                            {values.map((value, index) => (
                                                <div
                                                    key={index}
                                                    className="p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-300 group hover:scale-105"
                                                >
                                                    <div className="flex items-center mb-3 sm:mb-4">
                                                        <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center text-lg sm:text-xl mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300`}>
                                                            {value.icon}
                                                        </div>
                                                        <h4 className="text-lg sm:text-xl font-bold text-white">{value.title}</h4>
                                                    </div>
                                                    <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{value.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'approach' && (
                                    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 px-4">
                                            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                                                From concept to real-world impact
                                            </span>
                                        </h3>
                                        <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto text-center mb-8 sm:mb-12 px-4">
                                            Our approach combines cutting-edge research with practical application. We start with
                                            deep understanding of your challenges, design intelligent solutions, and iterate
                                            continuously to ensure maximum impact and value.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                                            {[
                                                { title: 'Research & Discovery', desc: 'Deep dive into challenges and opportunities', icon: '🔬' },
                                                { title: 'Design & Build', desc: 'Create scalable, intelligent solutions', icon: '🛠️' },
                                                { title: 'Deploy & Optimize', desc: 'Deliver results and continuous improvement', icon: '🚀' }
                                            ].map((step, index) => (
                                                <div key={index} className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group hover:scale-105">
                                                    <div className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                                                    <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{step.title}</h4>
                                                    <p className="text-slate-300 text-sm sm:text-base">{step.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-16 sm:py-24 lg:py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${isInView('team') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                        <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                            Our Team
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-6xl mx-auto mb-6 sm:mb-8 leading-tight px-4">
                            Meet the minds behind the
                            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"> magic</span>
                        </h2>

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed px-4">
                            Our diverse team of innovators, researchers, and builders work together to create
                            AI solutions that make a difference in the world.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={member.id}
                                className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:transform hover:scale-105 ${isInView('team') ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="aspect-square relative overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                                </div>
                                <div className="p-4 sm:p-6 lg:p-8">
                                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{member.name}</h3>
                                    <p className="text-base sm:text-lg text-blue-400 mb-3 sm:mb-4 font-medium">{member.title}</p>
                                    <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Us Section */}
            <section id="join" className="py-16 sm:py-24 lg:py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className={`relative rounded-2xl sm:rounded-3xl overflow-hidden transform transition-all duration-1000 ${isInView('join') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                        <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 p-8 sm:p-12 lg:p-16">
                            <div className="text-center">
                                <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                                    Join Our Mission
                                </div>

                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-4">
                                    Ready to shape the
                                    <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent"> future</span> with us?
                                </h2>

                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
                                    We're always looking for brilliant minds who share our passion for innovation,
                                    ethics, and making a positive impact through AI technology.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                                    <button className="px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-xl sm:rounded-2xl hover:shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300 text-base sm:text-lg">
                                        View Open Positions
                                    </button>
                                    <button className="px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white font-semibold rounded-xl sm:rounded-2xl hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 text-base sm:text-lg">
                                        Get in Touch
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(180deg);
                    }
                }

                @keyframes glow {
                    0%, 100% {
                        filter: brightness(1);
                    }
                    50% {
                        filter: brightness(1.2);
                    }
                }

                @keyframes bounce-slow {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.6s ease-out forwards;
                }

                .animate-slideUp {
                    animation: slideUp 0.8s ease-out forwards;
                }

                .animate-slideDown {
                    animation: slideDown 0.6s ease-out forwards;
                }

                .animate-float {
                    animation: float linear infinite;
                }

                .animate-glow {
                    animation: glow 2s ease-in-out infinite;
                }
            `}</style>
            <Footer />
        </div>
    );
}