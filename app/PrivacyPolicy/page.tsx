"use client";
import Footer from "@/components/Footer";

import React, { useState, useEffect, useRef } from 'react';
import { NavbarDemo } from "@/components/navbar";
import { X, Menu, ChevronRight, Shield, Lock, Eye, Globe, Clock, Users, FileText, AlertCircle, CheckCircle } from 'lucide-react';

const PrivacyPolicyPage = () => {
    const [activeSection, setActiveSection] = useState('');
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
    const footerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);

            // Check if footer is in view to hide sidebar
            if (footerRef.current) {
                const footerRect = footerRef.current.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                const isFooterVisible = footerRect.top < viewportHeight;
                setIsSidebarVisible(!isFooterVisible);
            }

            // Update active section
            const sectionIds = sections.map(s => s.id);
            let current = sectionIds[0];
            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150) {
                        current = id;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sections = [
        { id: 'overview', title: 'Overview', icon: Shield },
        { id: 'information', title: 'Information We Collect', icon: FileText },
        { id: 'usage', title: 'How We Use Data', icon: Eye },
        { id: 'sharing', title: 'Data Sharing', icon: Users },
        { id: 'security', title: 'Security Measures', icon: Lock },
        { id: 'rights', title: 'Your Rights', icon: CheckCircle },
        { id: 'contact', title: 'Contact Us', icon: Globe }
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navHeight = 80; // Account for fixed navbar
            const elementPosition = element.offsetTop - navHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
            setActiveSection(sectionId);
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white relative overflow-hidden">
            <NavbarDemo />
            {/* Animated Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="fixed top-20 left-4 z-50 lg:hidden bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-3 hover:bg-slate-700/80 transition-all duration-300"
            >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Desktop Navigation Sidebar */}
            <div className={`fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block transition-all duration-500 ${
                isSidebarVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            }`}>
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 shadow-2xl">
                    <nav className="space-y-2">
                        {sections.map((section) => {
                            const IconComponent = section.icon;
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`flex items-center space-x-3 w-full p-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                                        activeSection === section.id
                                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30 shadow-lg shadow-blue-500/20'
                                            : 'hover:bg-slate-700/50 text-slate-400 hover:text-slate-200'
                                    }`}
                                >
                                    <IconComponent className="w-4 h-4 relative z-10" />
                                    <span className="text-sm font-medium hidden xl:block relative z-10">{section.title}</span>
                                    {activeSection === section.id && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-xl animate-pulse" />
                                    )}
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-4xl relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 animate-fade-in">
                    <div className="inline-flex items-center px-6 py-2 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                        <Shield className="w-4 h-4 mr-2" />
                        Privacy & Security
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight">
                        Privacy Policy
                    </h1>

                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Your privacy and data security are our top priorities. Learn how we protect your healthcare information
                        in compliance with global regulations including HIPAA, GDPR, and other privacy laws.
                    </p>

                    <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-slate-500">
                        <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>Last Updated: January 2025</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Globe className="w-4 h-4" />
                            <span>Applies Globally</span>
                        </div>
                    </div>
                </div>

                {/* Overview Section */}
                <section id="overview" className="mb-16 scroll-mt-20" ref={(el) => { if (el) sectionRefs.current['overview'] = el; }}>
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold">Our Commitment to Privacy</h2>
                        </div>

                        <div className="space-y-4 text-slate-300 leading-relaxed">
                            <p>
                                Mercato Agency (&quot;Mercato&quot;, &quot;we&quot;, &quot;us&quot;) is committed to protecting the personal data of our clients, partners,
                                and website users. We are the data controller for personal information collected through our website and related
                                services globally.
                            </p>
                            <p>
                                Our practices comply with applicable data protection laws including the EU General Data Protection Regulation (GDPR),
                                the California Consumer Privacy Act (CCPA/CPRA), the Australian Privacy Act (APPs), the New Zealand Privacy Act,
                                and other relevant regulations.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                                {[
                                    { icon: Lock, title: "Secure by Design", desc: "Enterprise-grade security measures" },
                                    { icon: CheckCircle, title: "Compliant", desc: "HIPAA, GDPR, CCPA certified" },
                                    { icon: Shield, title: "Transparent", desc: "Clear data handling practices" }
                                ].map((item, index) => (
                                    <div key={index} className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300">
                                        <item.icon className="w-8 h-8 text-blue-400 mb-3" />
                                        <h4 className="font-semibold mb-2">{item.title}</h4>
                                        <p className="text-sm text-slate-400">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Information Collection Section */}
                <section id="information" className="mb-16 scroll-mt-20" ref={(el) => { if (el) sectionRefs.current['information'] = el; }}>
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                                <FileText className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold">Information We Collect</h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-slate-300 leading-relaxed">
                                We collect various categories of personal data when you use Mercato&apos;s website or services,
                                or when we otherwise interact with you:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "Contact Information",
                                        items: ["Name and email address", "Postal address", "Phone number", "Business contact details"]
                                    },
                                    {
                                        title: "Professional Data",
                                        items: ["Job title and employer", "Business email", "Industry information", "LinkedIn profile data"]
                                    },
                                    {
                                        title: "Account Information",
                                        items: ["Login credentials", "Marketing preferences", "Communication history", "Account settings"]
                                    },
                                    {
                                        title: "Technical Data",
                                        items: ["IP address", "Device and browser data", "Cookie identifiers", "Website usage patterns"]
                                    }
                                ].map((category, index) => (
                                    <div key={index} className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300">
                                        <h4 className="font-semibold mb-4 text-lg">{category.title}</h4>
                                        <ul className="space-y-2">
                                            {category.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="flex items-center space-x-2 text-slate-400">
                                                    <ChevronRight className="w-4 h-4 text-blue-400" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mt-6">
                                <div className="flex items-start space-x-3">
                                    <AlertCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-300 mb-2">Special Categories of Data</h4>
                                        <p className="text-slate-300">
                                            We may collect sensitive categories of data (health, race, etc.) only if you voluntarily provide them
                                            and only with explicit consent. We never collect children&apos;s data under 16 without parental consent.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Data Usage Section */}
                <section id="usage" className="mb-16 scroll-mt-20" ref={(el) => { if (el) sectionRefs.current['usage'] = el; }}>
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center">
                                <Eye className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold">How We Use Your Data</h2>
                        </div>

                        <p className="text-slate-300 leading-relaxed mb-6">
                            Mercato uses personal data only for legitimate business purposes, based on lawful grounds under GDPR Article 6:
                        </p>

                        <div className="space-y-4">
                            {[
                                {
                                    title: "Service Provision & Improvement",
                                    description: "Providing and improving our AI-powered marketing and lead-generation services",
                                    basis: "Performance of contract & legitimate interests"
                                },
                                {
                                    title: "Communication & Support",
                                    description: "Emails, customer support, billing and account management",
                                    basis: "Contractual necessity & legitimate interests"
                                },
                                {
                                    title: "Marketing & Analytics",
                                    description: "Understanding usage patterns and tailoring content to your preferences",
                                    basis: "Consent or legitimate interests"
                                },
                                {
                                    title: "Security & Compliance",
                                    description: "Verifying identity, preventing abuse, and complying with legal obligations",
                                    basis: "Legal obligation & legitimate interests"
                                }
                            ].map((purpose, index) => (
                                <div key={index} className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                            <CheckCircle className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold mb-2">{purpose.title}</h4>
                                            <p className="text-slate-400 mb-3">{purpose.description}</p>
                                            <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-lg">
                                                <span className="font-medium">Legal Basis:</span>
                                                <span className="ml-2">{purpose.basis}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Data Sharing Section */}
                <section id="sharing" className="mb-16 scroll-mt-20" ref={(el) => { if (el) sectionRefs.current['sharing'] = el; }}>
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold">Data Sharing & Transfers</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                                <div className="flex items-center space-x-3 mb-3">
                                    <CheckCircle className="w-6 h-6 text-green-400" />
                                    <h4 className="font-semibold text-green-300">We Don&apos;t Sell Your Data</h4>
                                </div>
                                <p className="text-slate-300">
                                    We do not sell personal data to third parties for profit. Your information is only shared with
                                    trusted service providers who help us deliver our services.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-4 text-lg">Trusted Service Providers</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { name: "Cloud Hosting", provider: "Google Cloud", purpose: "Secure data storage and processing" },
                                        { name: "Analytics", provider: "Google Analytics", purpose: "Website usage analysis" },
                                        { name: "CRM Services", provider: "Airtable", purpose: "Customer relationship management" },
                                        { name: "Support Systems", provider: "Various", purpose: "Customer service delivery" }
                                    ].map((service, index) => (
                                        <div key={index} className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
                                            <h5 className="font-medium mb-1">{service.name}</h5>
                                            <p className="text-sm text-blue-400 mb-2">{service.provider}</p>
                                            <p className="text-sm text-slate-400">{service.purpose}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
                                <div className="flex items-start space-x-3">
                                    <Globe className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-yellow-300 mb-2">International Transfers</h4>
                                        <p className="text-slate-300">
                                            Mercato operates globally; personal data may be transferred to countries outside your jurisdiction.
                                            For EU/UK transfers, we use EU Commission-approved Standard Contractual Clauses and other approved safeguards.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Security Section */}
                <section id="security" className="mb-16 scroll-mt-20" ref={(el) => { if (el) sectionRefs.current['security'] = el; }}>
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center">
                                <Lock className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold">Security Measures</h2>
                        </div>

                        <p className="text-slate-300 leading-relaxed mb-6">
                            We implement appropriate technical and organizational measures to protect personal data against
                            unauthorized access, alteration, disclosure, or destruction:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: Lock,
                                    title: "Encryption",
                                    description: "TLS for data in transit, AES-256 for data at rest",
                                    color: "from-blue-500 to-cyan-500"
                                },
                                {
                                    icon: Shield,
                                    title: "Access Controls",
                                    description: "Multi-factor authentication and principle of least privilege",
                                    color: "from-emerald-500 to-green-500"
                                },
                                {
                                    icon: Eye,
                                    title: "Monitoring",
                                    description: "Continuous security monitoring and intrusion detection",
                                    color: "from-purple-500 to-pink-500"
                                },
                                {
                                    icon: CheckCircle,
                                    title: "Compliance",
                                    description: "ISO/IEC 27001 and NIST framework alignment",
                                    color: "from-orange-500 to-red-500"
                                },
                                {
                                    icon: Users,
                                    title: "Staff Training",
                                    description: "Regular security awareness and best practices training",
                                    color: "from-indigo-500 to-purple-500"
                                },
                                {
                                    icon: AlertCircle,
                                    title: "Incident Response",
                                    description: "Comprehensive breach notification and response plan",
                                    color: "from-yellow-500 to-orange-500"
                                }
                            ].map((measure, index) => (
                                <div key={index} className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group">
                                    <div className={`w-12 h-12 bg-gradient-to-r ${measure.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <measure.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="font-semibold mb-2">{measure.title}</h4>
                                    <p className="text-slate-400 text-sm">{measure.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Rights Section */}
                <section id="rights" className="mb-16 scroll-mt-20" ref={(el) => { if (el) sectionRefs.current['rights'] = el; }}>
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                                <CheckCircle className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold">Your Privacy Rights</h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-slate-300 leading-relaxed">
                                Mercato respects your privacy rights under applicable laws. Depending on your location, you may have the following rights:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <h4 className="font-semibold text-lg text-blue-300">EU/EEA Residents (GDPR)</h4>
                                    {[
                                        "Access your personal data",
                                        "Correct inaccuracies",
                                        "Erase your data (right to be forgotten)",
                                        "Restrict processing",
                                        "Object to processing",
                                        "Data portability",
                                        "Withdraw consent",
                                        "Complain to supervisory authority"
                                    ].map((right, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                            <span className="text-slate-300">{right}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-semibold text-lg text-purple-300">California Residents (CCPA/CPRA)</h4>
                                    {[
                                        "Know what personal information we collect",
                                        "Delete personal information",
                                        "Opt out of sale (not applicable - we don't sell)",
                                        "Limit use of sensitive data",
                                        "Non-discrimination for exercising rights"
                                    ].map((right, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                                            <span className="text-slate-300">{right}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                                <h4 className="font-semibold text-blue-300 mb-3">How to Exercise Your Rights</h4>
                                <p className="text-slate-300 mb-4">
                                    To exercise any of these rights, please contact us using the information provided in the Contact section below.
                                    We will verify your identity and respond within legal timeframes (typically 30 days).
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm">
                                        <Clock className="w-4 h-4 mr-2" />
                                        Response: Within 30 days
                                    </div>
                                    <div className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-300 rounded-lg text-sm">
                                        <Shield className="w-4 h-4 mr-2" />
                                        No discrimination
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="mb-16 scroll-mt-20" ref={(el) => { if (el) sectionRefs.current['contact'] = el; }}>
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                                <Globe className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold">Contact Us</h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-slate-300 leading-relaxed">
                                If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold mb-3 text-lg">Data Protection Officer</h4>
                                        <div className="space-y-2 text-slate-300">
                                            <p>📧 privacy@mercato.com</p>
                                            <p>🏢 Mercato Agency</p>
                                            <p>📍 Attn: Privacy Department</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold mb-3 text-lg">Regulatory Authorities</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">
                                            You may also lodge a complaint with your local data protection authority if you believe
                                            your privacy rights have been violated. We are committed to working with authorities
                                            to resolve any concerns.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-emerald-300 mb-2">Policy Updates</h4>
                                        <p className="text-slate-300">
                                            We may update this Privacy Policy from time to time. Significant changes will be notified
                                            on our website or via email. This policy applies globally and incorporates all applicable
                                            data protection regulations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                {/* <div className="text-center py-16">
                    <div className="inline-flex items-center px-6 py-2 mb-6 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                        <Shield className="w-4 h-4 mr-2" />
                        Questions about your data?
                    </div>

                    <h3 className="text-3xl font-bold mb-4">Ready to learn more about our privacy practices?</h3>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        Contact our privacy team for detailed information about how we protect your healthcare data.
                    </p>

                    <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
                        Contact Privacy Team
                    </button>
                </div> */}
            </div>

            <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
      <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;


// "use client";

// import React, { useState, useEffect, useRef } from 'react';
// import { NavbarDemo } from "@/components/navbar";
// import { ChevronRight, Shield, Lock, Eye, Globe, Clock, Users, FileText, AlertCircle, CheckCircle } from 'lucide-react';

// const PrivacyPolicyPage = () => {
//     const [activeSection, setActiveSection] = useState('');
//     const [scrollProgress, setScrollProgress] = useState(0);
//     const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

//     useEffect(() => {
//         const handleScroll = () => {
//             const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
//             const progress = (window.scrollY / totalHeight) * 100;
//             setScrollProgress(progress);

//             const sectionIds = sections.map(s => s.id);
//             let current = sectionIds[0];
//             for (const id of sectionIds) {
//                 const el = document.getElementById(id);
//                 if (el) {
//                     const rect = el.getBoundingClientRect();
//                     if (rect.top <= 100) {
//                         current = id;
//                     }
//                 }
//             }
//             setActiveSection(current);
//         };

//         window.addEventListener('scroll', handleScroll, { passive: true });
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const sections = [
//         { id: 'overview', title: 'Overview', icon: Shield },
//         { id: 'information', title: 'Information We Collect', icon: FileText },
//         { id: 'usage', title: 'How We Use Data', icon: Eye },
//         { id: 'sharing', title: 'Data Sharing', icon: Users },
//         { id: 'security', title: 'Security Measures', icon: Lock },
//         { id: 'rights', title: 'Your Rights', icon: CheckCircle },
//         { id: 'contact', title: 'Contact Us', icon: Globe }
//     ];

//     const scrollToSection = (sectionId: string) => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });
//             setActiveSection(sectionId);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white relative overflow-hidden">
//             <NavbarDemo />
//             {/* Animated Background Elements */}
//             <div className="fixed inset-0 pointer-events-none">
//                 <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
//                 <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
//                 <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
//             </div>

//             {/* Navigation Sidebar */}
//             <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
//                 <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4">
//                     <nav className="space-y-2">
//                         {sections.map((section) => {
//                             const IconComponent = section.icon;
//                             return (
//                                 <button
//                                     key={section.id}
//                                     onClick={() => scrollToSection(section.id)}
//                                     className={`flex items-center space-x-3 w-full p-3 rounded-xl transition-all duration-300 group ${activeSection === section.id
//                                         ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
//                                         : 'hover:bg-slate-700/50 text-slate-400'
//                                         }`}
//                                 >
//                                     <IconComponent className="w-4 h-4" />
//                                     <span className="text-sm font-medium hidden xl:block">{section.title}</span>
//                                 </button>
//                             );
//                         })}
//                     </nav>
//                 </div>
//             </div>

//             <div className="container mx-auto px-4 py-16 max-w-4xl relative z-10">
//                 {/* Header Section */}
//                 <div className="text-center mb-16 animate-fade-in">
//                     <div className="inline-flex items-center px-6 py-2 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
//                         <Shield className="w-4 h-4 mr-2" />
//                         Privacy & Security
//                     </div>

//                     <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight">
//                         Privacy Policy
//                     </h1>

//                     <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
//                         Mercato Agency ("Mercato", "we", "us") is committed to protecting the personal data of our clients, partners, and website users. This policy explains how we collect, use, share, and protect your information in compliance with global data protection laws.
//                     </p>

//                     <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-slate-500">
//                         <div className="flex items-center space-x-2">
//                             <Clock className="w-4 h-4" />
//                             <span>Last Updated: January 2025</span>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                             <Globe className="w-4 h-4" />
//                             <span>Applies Globally</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Overview Section */}
//                 <section id="overview" className="mb-16 scroll-mt-20" ref={el => sectionRefs.current['overview'] = el}>
//                     <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
//                         <h2 className="text-3xl font-bold mb-4 flex items-center gap-3"><Shield className="w-6 h-6 text-blue-400" /> Our Commitment to Privacy</h2>
//                         <div className="space-y-4 text-slate-300 leading-relaxed">
//                             <p>Mercato is the data controller for personal information collected through our website and related services globally. Our practices comply with the EU General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA/CPRA), Australian Privacy Act (APPs), New Zealand Privacy Act, and other relevant regulations.</p>
//                             <p>We process data lawfully, fairly, and transparently, for specified explicit purposes. We do not sell personal information for profit. All processing is based on a lawful basis under GDPR Article 6, such as your consent, performance of a contract, compliance with legal obligations, and our legitimate interests in operating the business.</p>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Information Collection Section */}
//                 <section id="information" className="mb-16 scroll-mt-20" ref={el => sectionRefs.current['information'] = el}>
//                     <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
//                         <h2 className="text-3xl font-bold mb-4 flex items-center gap-3"><FileText className="w-6 h-6 text-purple-400" /> Information We Collect</h2>
//                         <div className="space-y-4 text-slate-300 leading-relaxed">
//                             <p>We collect various categories of personal data when you use Mercato's website or services, or when we otherwise interact with you. This may include:</p>
//                             <ul className="list-disc pl-6 space-y-1">
//                                 <li>Contact details (name, email address, postal address, phone)</li>
//                                 <li>Business/professional information (job title, employer, business email)</li>
//                                 <li>Account login credentials, marketing preferences, communication history</li>
//                                 <li>Transactional data (billing, purchase records)</li>
//                                 <li>Online/technical data (IP address, device/browser data, cookies, location, website usage, behavioral data)</li>
//                                 <li>Lead information (business interests, public profile data via LinkedIn API, etc.)</li>
//                                 <li>Sensitive data (health, race, etc.) only if you voluntarily provide it and with explicit consent</li>
//                             </ul>
//                             <p>We never collect children's data under 16 without parental consent.</p>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Data Collection Methods Section */}
//                 <section id="usage" className="mb-16 scroll-mt-20" ref={el => sectionRefs.current['usage'] = el}>
//                     <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
//                         <h2 className="text-3xl font-bold mb-4 flex items-center gap-3"><Eye className="w-6 h-6 text-emerald-400" /> How We Collect & Use Data</h2>
//                         <div className="space-y-4 text-slate-300 leading-relaxed">
//                             <p>Data may be collected directly (e.g. forms, subscriptions, contact), and indirectly (e.g. cookies, analytics, server logs). We use cookies and similar technologies to log usage and improve our services. We also receive data from third-party sources such as LinkedIn, Google (sign-in, Analytics), and Airtable (data storage).</p>
//                             <p>Mercato uses personal data only for legitimate business purposes, such as:</p>
//                             <ul className="list-disc pl-6 space-y-1">
//                                 <li>Providing and improving our AI-powered marketing and lead-generation services</li>
//                                 <li>Communicating with you (emails, support, billing, account management)</li>
//                                 <li>Marketing and analytics (with your consent or legitimate interest)</li>
//                                 <li>Security, fraud prevention, and legal compliance</li>
//                                 <li>Any other purpose disclosed at the time of collection</li>
//                             </ul>
//                             <p>All processing is based on a lawful basis under GDPR Article 6.</p>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Data Sharing Section */}
//                 <section id="sharing" className="mb-16 scroll-mt-20" ref={el => sectionRefs.current['sharing'] = el}>
//                     <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
//                         <h2 className="text-3xl font-bold mb-4 flex items-center gap-3"><Users className="w-6 h-6 text-orange-400" /> Data Sharing & Transfers</h2>
//                         <div className="space-y-4 text-slate-300 leading-relaxed">
//                             <p>We may share your personal data with trusted third-party service providers who perform services on our behalf, such as:</p>
//                             <ul className="list-disc pl-6 space-y-1">
//                                 <li>Cloud hosting providers (e.g. Google Cloud)</li>
//                                 <li>CRM/database services (e.g. Airtable)</li>
//                                 <li>Analytics providers (e.g. Google Analytics)</li>
//                                 <li>Customer support and marketing platforms</li>
//                             </ul>
//                             <p>We require these providers to process your data in accordance with our instructions and with appropriate security measures. We do not sell personal data to third parties. When required, we share data with law enforcement or government authorities to comply with legal obligations.</p>
//                             <p>Mercato operates globally; personal data may be transferred to or stored in countries outside your jurisdiction. For EU/UK, we use EU Commission-approved Standard Contractual Clauses or other approved safeguards. We will inform you if we transfer data to a country without an EU adequacy decision and provide details of safeguards as required by GDPR Article 13.</p>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Security Section */}
//                 <section id="security" className="mb-16 scroll-mt-20" ref={el => sectionRefs.current['security'] = el}>
//                     <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
//                         <h2 className="text-3xl font-bold mb-4 flex items-center gap-3"><Lock className="w-6 h-6 text-red-400" /> Security of Data & Breach Notification</h2>
//                         <div className="space-y-4 text-slate-300 leading-relaxed">
//                             <p>We implement appropriate technical and organizational measures to protect personal data against unauthorized access, alteration, disclosure, or destruction. These include:</p>
//                             <ul className="list-disc pl-6 space-y-1">
//                                 <li>TLS encryption for data in transit and AES-256 encryption for data at rest</li>
//                                 <li>Firewalls, intrusion detection, multi-factor authentication, strict access controls</li>
//                                 <li>Employee device encryption, password protection, VPN-secured remote access</li>
//                                 <li>Regular system updates, security audits, vulnerability scans, and staff training</li>
//                                 <li>Policies aligned with ISO/IEC 27001 and NIST standards</li>
//                             </ul>
//                             <p>In the event of a data breach, Mercato has an incident response plan. We will promptly notify affected individuals and regulators as required by law, describing the nature of the breach, data affected, and mitigation steps taken. All incidents are documented to comply with GDPR accountability.</p>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Rights Section */}
//                 <section id="rights" className="mb-16 scroll-mt-20" ref={el => sectionRefs.current['rights'] = el}>
//                     <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
//                         <h2 className="text-3xl font-bold mb-4 flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-400" /> Your Privacy Rights</h2>
//                         <div className="space-y-4 text-slate-300 leading-relaxed">
//                             <p>Mercato respects your privacy rights under applicable laws. Depending on your location, you may have the following rights:</p>
//                             <ul className="list-disc pl-6 space-y-1">
//                                 <li>Access your personal data</li>
//                                 <li>Correct inaccuracies</li>
//                                 <li>Erase your data ("right to be forgotten")</li>
//                                 <li>Restrict or object to processing</li>
//                                 <li>Data portability (receive a copy of your data)</li>
//                                 <li>Withdraw consent (without affecting prior processing)</li>
//                                 <li>Complain to a supervisory authority</li>
//                                 <li>California residents: know, delete, or opt out of sale (Mercato does not sell personal data)</li>
//                             </ul>
//                             <p>To exercise any rights, contact us at the address below. We will verify your identity, respond within legal timeframes (e.g. 30 days), and not discriminate against you for exercising rights.</p>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Contact Section */}
//                 <section id="contact" className="mb-16 scroll-mt-20" ref={el => sectionRefs.current['contact'] = el}>
//                     <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
//                         <h2 className="text-3xl font-bold mb-4 flex items-center gap-3"><Globe className="w-6 h-6 text-cyan-400" /> Contact Us & Policy Updates</h2>
//                         <div className="space-y-4 text-slate-300 leading-relaxed">
//                             <p>Mercato Agency is responsible for this policy and our data practices. Our Data Protection Officer (or privacy team) can be reached at <a href="mailto:privacy@mercato.com" className="text-blue-400 underline">privacy@mercato.com</a> or: Mercato Agency, Attn: Privacy, [Street Address], [City, Country].</p>
//                             <p>You may also lodge a complaint with your local data protection authority if you believe your rights have been violated.</p>
//                             <p>This policy applies globally (EU, US, Australia, Middle East, NZ) and incorporates all applicable data protection regulations. We may update this Privacy Policy from time to time. Significant changes will be notified on our website or via email. Please check this page for the latest version.</p>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Footer CTA */}
//                 <div className="text-center py-16">
//                     <div className="inline-flex items-center px-6 py-2 mb-6 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
//                         <Shield className="w-4 h-4 mr-2" />
//                         Questions about your data?
//                     </div>

//                     <h3 className="text-3xl font-bold mb-4">Ready to learn more about our privacy practices?</h3>
//                     <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
//                         Contact our privacy team for detailed information about how we protect your healthcare data.
//                     </p>

//                     <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
//                         Contact Privacy Team
//                     </button>
//                 </div>
//             </div>

//             <style jsx>{`
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out;
//         }
//       `}</style>
//         </div>
//     );
// };

// export default PrivacyPolicyPage;