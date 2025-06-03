"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { NavbarDemo } from "@/components/navbar";
import { ChevronRight, FileText, User, CreditCard, Shield, AlertTriangle, Scale, Settings, Mail, Globe, Clock, CheckCircle, Lock, Users, Cloud, Server } from 'lucide-react';
import Footer from "@/components/Footer";

const TermsOfUsePage = () => {
    const [activeSection, setActiveSection] = useState('');
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const sections = useMemo(()=> [
        { id: 'overview', title: 'Overview', icon: FileText },
        { id: 'service-use', title: 'Use of Service', icon: User },
        { id: 'content-ip', title: 'Content & IP', icon: Shield },
        { id: 'subscriptions', title: 'Subscriptions', icon: CreditCard },
        { id: 'warranties', title: 'Warranties', icon: AlertTriangle },
        { id: 'liability', title: 'Liability', icon: Scale },
        { id: 'termination', title: 'Termination', icon: Settings },
        { id: 'contact', title: 'Contact', icon: Mail }
    ],[]);

    const sectionsMemo = React.useMemo(() => sections, [sections]);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);

            const sectionIds = sections.map(s => s.id);
            let current = sectionIds[0];
            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100) {
                        current = id;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
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

            {/* Navigation Sidebar */}
            <div className="fixed left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4">
                    <nav className="space-y-2">
                        {sections.map((section) => {
                            const IconComponent = section.icon;
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`flex items-center space-x-3 w-full p-3 rounded-xl transition-all duration-300 group ${activeSection === section.id
                                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                        : 'hover:bg-slate-700/50 text-slate-400'
                                        }`}
                                >
                                    <IconComponent className="w-4 h-4" />
                                    <span className="text-sm font-medium hidden xl:block">{section.title}</span>
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
                        <FileText className="w-4 h-4 mr-2" />
                        Legal Agreement
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight">
                        Terms of Use
                    </h1>

                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Effective Date: [Month Day, 2025]<br />
                        These Terms of Use (&quot;Terms&quot;) govern your access to and use of the Mercato Agency website, platform, and services (collectively, the &quot;Service&quot;). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service. These Terms apply to all users, including individuals and businesses (B2B and D2C clients).
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 text-sm text-slate-500">
                        <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>Effective Date: January 2025</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Globe className="w-4 h-4" />
                            <span>Applies Globally</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4" />
                            <span>Legal Compliance</span>
                        </div>
                    </div>
                </div>

                {/* Overview Section */}
                <section id="overview" className="mb-16 scroll-mt-20" ref={(el) => { if (el) sectionRefs.current['overview'] = el; }}>
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <FileText className="w-8 h-8 text-blue-400" />
                            Agreement Overview
                        </h2>
                        <div className="space-y-6 text-slate-300 leading-relaxed">
                            <p className="text-lg">These Terms of Use (&quot;Terms&quot;) govern your access to and use of the Mercato Agency website, platform, and services (collectively, the &quot;Service&quot;). Please read these Terms carefully. By accessing or using the Service (by browsing our website, using our software or APIs, or engaging our consulting services), you agree to be bound by these Terms. If you do not agree, do not use the Service. These Terms apply to all users, including individuals and businesses (B2B and D2C clients).</p>
                        </div>
                    </div>
                </section>

                {/* Service Use Section */}
                <section id="service-use" className="mb-16 scroll-mt-20" ref={(el) => { if (el) sectionRefs.current['service-use'] = el; }}>
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <User className="w-8 h-8 text-purple-400" />
                            Use of the Service
                        </h2>
                        <div className="space-y-6 text-slate-300 leading-relaxed">
                            <p>Mercato provides AI-driven marketing and lead generation tools and services via our website and related software (&quot;Platform&quot;), as well as consulting services (&quot;Consulting Services&quot;). Subject to these Terms, Mercato grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Platform for your internal business purposes only. You may also access Mercato&apos;s public content and documentation. All rights not expressly granted herein are reserved by Mercato.</p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
                                    <div className="flex items-center mb-3">
                                        <Users className="w-5 h-5 text-purple-400 mr-2" />
                                        <h3 className="font-semibold text-purple-300">Account Registration</h3>
                                    </div>
                                    <ul className="space-y-2 text-sm">
                                        <li>• Provide accurate registration information</li>
                                        <li>• Maintain password security</li>
                                        <li>• Account activity responsibility</li>
                                        <li>• Security breach notification</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                                    <div className="flex items-center mb-3">
                                        <Lock className="w-5 h-5 text-blue-400 mr-2" />
                                        <h3 className="font-semibold text-blue-300">User Conduct</h3>
                                    </div>
                                    <ul className="space-y-2 text-sm">
                                        <li>• Follow applicable laws</li>
                                        <li>• No unauthorized access</li>
                                        <li>• No malicious activities</li>
                                        <li>• Respect intellectual property</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
                                <div className="flex items-center mb-3">
                                    <Cloud className="w-5 h-5 text-emerald-400 mr-2" />
                                    <h3 className="font-semibold text-emerald-300">Third-Party Services</h3>
                                </div>
                                <p className="text-sm">The Service may integrate with or link to third-party tools and content (for example, LinkedIn APIs, Google services, social media platforms, or analytics tools). Mercato does not endorse and is not responsible for any third-party services. You use such services at your own risk and subject to the third party&apos;s terms.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content & IP Section */}
                <section id="content-ip" className="mb-16 scroll-mt-20" ref={(el) => { if (el) sectionRefs.current['content-ip'] = el; }}>
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Shield className="w-8 h-8 text-emerald-400" />
                            Content and Intellectual Property
                        </h2>
                        <div className="space-y-6 text-slate-300 leading-relaxed">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
                                    <div className="flex items-center mb-3">
                                        <FileText className="w-5 h-5 text-emerald-400 mr-2" />
                                        <h3 className="font-semibold text-emerald-300">Mercato Content</h3>
                                    </div>
                                    <p className="text-sm">All content on the Service—such as text, graphics, logos, images, videos, software, AI models, and documentation—is owned by Mercato or its licensors and is protected by copyright, trademark, and other intellectual property laws.</p>
                                </div>

                                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                                    <div className="flex items-center mb-3">
                                        <Users className="w-5 h-5 text-blue-400 mr-2" />
                                        <h3 className="font-semibold text-blue-300">Your Content</h3>
                                    </div>
                                    <p className="text-sm">If you submit any content to Mercato, you grant Mercato a perpetual, worldwide, royalty-free, non-exclusive license to use, reproduce, modify, and incorporate such content into our services or marketing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Subscriptions Section */}
                <section id="subscriptions" className="mb-16 scroll-mt-20" ref={(el) => { if (el) sectionRefs.current['subscriptions'] = el; }}>
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <CreditCard className="w-8 h-8 text-green-400" />
                            Subscriptions and Fees
                        </h2>
                        <div className="space-y-6 text-slate-300 leading-relaxed">
                            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                                <p>Access to certain Platform features may require a subscription or payment. If you purchase a subscription or service, you agree to our pricing and payment terms, which will be provided separately. All fees are in [Currency] and non-refundable except as required by law.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Warranties Section */}
                <section id="warranties" className="mb-16 scroll-mt-20" ref={(el) => { if (el) sectionRefs.current['warranties'] = el; }}>
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <AlertTriangle className="w-8 h-8 text-yellow-400" />
                            Disclaimer of Warranties
                        </h2>
                        <div className="space-y-6 text-slate-300 leading-relaxed">
                            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
                                <p>The Service is provided &quot;AS IS&quot; and &quot;AS AVAILABLE,&quot; without warranties of any kind. Mercato expressly disclaims all warranties, whether express, implied, statutory or otherwise, including any implied warranties of merchantability, fitness for a particular purpose, accuracy, or non-infringement.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Liability Section */}
                <section id="liability" className="mb-16 scroll-mt-20" ref={(el) => { if (el) sectionRefs.current['liability'] = el; }}>
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Scale className="w-8 h-8 text-red-400" />
                            Limitation of Liability & Indemnification
                        </h2>
                        <div className="space-y-6 text-slate-300 leading-relaxed">
                            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                                <p>To the fullest extent permitted by law, Mercato shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data or business opportunity, arising out of or related to these Terms or the Service.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Termination Section */}
                <section id="termination" className="mb-16 scroll-mt-20" ref={(el) => { if (el) sectionRefs.current['termination'] = el; }}>
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Settings className="w-8 h-8 text-indigo-400" />
                            Termination & Governing Law
                        </h2>
                        <div className="space-y-6 text-slate-300 leading-relaxed">
                            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-6">
                                <p>Mercato may suspend or terminate your access to the Service at any time, with or without notice, if you violate these Terms or if we choose to discontinue the Service. These Terms are governed by the laws of Ireland.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="mb-16 scroll-mt-20" ref={(el) => { if (el) sectionRefs.current['contact'] = el; }}>
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Mail className="w-8 h-8 text-cyan-400" />
                            Contact Information
                        </h2>
                        <div className="space-y-4 text-slate-300 leading-relaxed">
                            <p>For questions about these Terms, please contact Mercato at <a href="mailto:legal@mercato.com" className="text-cyan-400 underline">legal@mercato.com</a> or by mail at Mercato Agency, Attn: Legal, [Street Address], [City, Country].</p>
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                <div className="text-center py-16">
                    <div className="inline-flex items-center px-6 py-2 mb-6 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                        <FileText className="w-4 h-4 mr-2" />
                        Questions about these terms?
                    </div>

                    <h3 className="text-3xl font-bold mb-4">Need clarification on our Terms?</h3>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        Contact our legal team for detailed information about your rights and obligations under these Terms of Use.
                    </p>
                </div>
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


export default TermsOfUsePage;