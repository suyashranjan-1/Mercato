"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Home, Users, Globe, Clock, Monitor, Calendar, MapPin, Shield, CheckCircle, AlertCircle, Briefcase, Coffee, Laptop, Video, Heart } from 'lucide-react';
import { NavbarDemo } from "@/components/navbar";
import Footer from "@/components/Footer";

const WorkplacePolicyPage = () => {
    const [activeSection, setActiveSection] = useState('');
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRefs = useRef<{[key: string]: HTMLElement | null}>({} as {[key: string]: HTMLElement | null});

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
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sections = [
        { id: 'overview', title: 'Overview', icon: Home },
        { id: 'hybrid', title: 'Hybrid Structure', icon: Monitor },
        { id: 'communication', title: 'Communication', icon: Video },
        { id: 'inperson', title: 'In-Person Expectations', icon: Users },
        { id: 'wellbeing', title: 'Health & Wellbeing', icon: Heart },
        { id: 'equality', title: 'Equality & Inclusion', icon: Globe },
        { id: 'compliance', title: 'Legal Compliance', icon: Shield }
    ];

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
            <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
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
                        <Briefcase className="w-4 h-4 mr-2" />
                        Work Flexibility & Balance
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight">
                        Workplace Policy
                    </h1>

                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Mercato Agency embraces a flexible, hybrid work model that balances productivity with work–life balance.
                        Our policy ensures transparency for employees and candidates while complying with global labor laws.
                    </p>

                    <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-slate-500">
                        <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>Updated: January 2025</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Globe className="w-4 h-4" />
                            <span>Global Policy</span>
                        </div>
                    </div>
                </div>

                {/* Overview Section */}
                <section id="overview" className="mb-16 scroll-mt-20" ref={(el) => { if (el) sectionRefs.current['overview'] = el; }}>
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                                <Home className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold">Our Flexible Work Philosophy</h2>
                        </div>

                        <div className="space-y-6 text-slate-300 leading-relaxed">
                            <p>
                                At Mercato Agency, we believe that great work happens when people have the flexibility to work
                                in ways that suit their lives and maximize their productivity. Our hybrid work model is designed
                                to foster collaboration, creativity, and well-being across all our global locations.
                            </p>

                            <p>
                                We operate in compliance with labor laws across our regions including the EU, UK, US, Australia,
                                Middle East, and New Zealand, incorporating best practices for modern work arrangements and
                                supporting initiatives like the EU Work–Life Balance Directive.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                {[
                                    {
                                        icon: Monitor,
                                        title: "Hybrid Flexibility",
                                        desc: "Work from home, office, or co-working spaces",
                                        color: "from-blue-500 to-cyan-500"
                                    },
                                    {
                                        icon: Clock,
                                        title: "Flexible Hours",
                                        desc: "Adaptable schedules around core business hours",
                                        color: "from-emerald-500 to-green-500"
                                    },
                                    {
                                        icon: Globe,
                                        title: "Global Standards",
                                        desc: "Consistent policies across all regions",
                                        color: "from-purple-500 to-pink-500"
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group">
                                        <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            <item.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="font-semibold mb-2 text-lg">{item.title}</h4>
                                        <p className="text-slate-400">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hybrid Work Structure Section */}
                <section id="hybrid" className="mb-16 scroll-mt-20" ref={(el) => {sectionRefs.current['hybrid'] = el}}>
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                                <Monitor className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold">Hybrid Work Structure</h2>
                        </div>

                        <div className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <MapPin className="w-6 h-6 text-blue-400" />
                                            <h4 className="font-semibold text-lg">Office Locations</h4>
                                        </div>
                                        <p className="text-slate-300 mb-4">
                                            Mercato maintains offices globally with approved co-working spaces and home office options available.
                                        </p>
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2 text-slate-400">
                                                <ChevronRight className="w-4 h-4 text-blue-400" />
                                                <span>EU Headquarters</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-slate-400">
                                                <ChevronRight className="w-4 h-4 text-blue-400" />
                                                <span>US Office</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-slate-400">
                                                <ChevronRight className="w-4 h-4 text-blue-400" />
                                                <span>Approved Co-working Spaces</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-slate-400">
                                                <ChevronRight className="w-4 h-4 text-blue-400" />
                                                <span>Home Office Setup</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <Clock className="w-6 h-6 text-emerald-400" />
                                            <h4 className="font-semibold text-lg">Flexible Schedule</h4>
                                        </div>
                                        <p className="text-slate-300 mb-3">
                                            Work hours flexibility with core business hours coordination (9am–5pm local time).
                                        </p>
                                        <div className="inline-flex items-center px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-lg">
                                            <CheckCircle className="w-4 h-4 mr-2" />
                                            EU Work–Life Balance Directive Compliant
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <Laptop className="w-6 h-6 text-purple-400" />
                                            <h4 className="font-semibold text-lg">Remote Work Support</h4>
                                        </div>
                                        <p className="text-slate-300 mb-4">
                                            Complete equipment and technology support for remote work with secure workspace requirements.
                                        </p>
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2 text-slate-400">
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                                <span>Laptops & Monitors</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-slate-400">
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                                <span>VPN Access</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-slate-400">
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                                <span>Secure Workspace</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-slate-400">
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                                <span>Distraction-Free Environment</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <Users className="w-6 h-6 text-orange-400" />
                                            <h4 className="font-semibold text-lg">Team Collaboration</h4>
                                        </div>
                                        <p className="text-slate-300 mb-3">
                                            Regular in-person activities to foster team cohesion and collaboration.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-lg">Monthly Meetings</span>
                                            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-lg">Project Kick-offs</span>
                                            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-lg">Training Days</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Communication & Transparency Section */}
                <section id="communication" className="mb-16 scroll-mt-20" ref={(el) => { sectionRefs.current['communication'] = el; }}>
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center">
                                <Video className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold">Transparency & Communication</h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-slate-300 leading-relaxed">
                                Clear communication and transparency are fundamental to our remote and hybrid work success.
                                We ensure all team members are informed, connected, and supported regardless of their work location.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "Clear Expectations",
                                        description: "Transparent communication of work location expectations, required office days, core hours, and equipment support during recruitment and onboarding.",
                                        icon: CheckCircle,
                                        color: "from-blue-500 to-cyan-500",
                                        details: [
                                            "Employment agreement details",
                                            "Work arrangement specifications",
                                            "Equipment allowances",
                                            "Essential work aspects documentation"
                                        ]
                                    },
                                    {
                                        title: "Team Coordination",
                                        description: "Maintaining accessibility during agreed work hours through company communication tools with regular check-ins for alignment.",
                                        icon: Users,
                                        color: "from-emerald-500 to-green-500",
                                        details: [
                                            "Email & Slack accessibility",
                                            "Video conferencing availability",
                                            "One-on-one meetings",
                                            "Team stand-ups"
                                        ]
                                    },
                                    {
                                        title: "Performance Focus",
                                        description: "Evaluation based on results and deliverables rather than physical presence, focusing on output, collaboration, and work quality.",
                                        icon: Briefcase,
                                        color: "from-purple-500 to-pink-500",
                                        details: [
                                            "Results-driven assessments",
                                            "Quality-based evaluations",
                                            "Collaboration metrics",
                                            "Deliverable-focused reviews"
                                        ]
                                    },
                                    {
                                        title: "Support & Resources",
                                        description: "Comprehensive support for work–life balance including parental leave, caregiver leave, and family-friendly policies in accordance with local laws.",
                                        icon: Heart,
                                        color: "from-orange-500 to-red-500",
                                        details: [
                                            "Parental leave support",
                                            "Caregiver accommodations",
                                            "Modified schedule requests",
                                            "Remote-only work options"
                                        ]
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group">
                                        <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            <item.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="font-semibold mb-3 text-lg">{item.title}</h4>
                                        <p className="text-slate-400 mb-4 text-sm">{item.description}</p>
                                        <div className="space-y-2">
                                            {item.details.map((detail, detailIndex) => (
                                                <div key={detailIndex} className="flex items-center space-x-2">
                                                    <ChevronRight className="w-3 h-3 text-blue-400 flex-shrink-0" />
                                                    <span className="text-slate-400 text-sm">{detail}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* In-Person Expectations Section */}
                <section id="inperson" className="mb-16 scroll-mt-20" ref={(el) => { if (el) sectionRefs.current['inperson'] = el; }}>
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold">In-Person Expectations</h2>
                        </div>

                        <div className="space-y-8">
                            <p className="text-slate-300 leading-relaxed">
                                While we embrace remote work, certain activities benefit from in-person collaboration.
                                Here are our guidelines for when physical presence is expected or beneficial.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    {
                                        title: "Mandatory Gatherings",
                                        icon: Calendar,
                                        color: "from-blue-500 to-cyan-500",
                                        description: "Events requiring physical attendance with advance notice for travel accommodation.",
                                        examples: ["Annual retreats", "Product launches", "Quarterly meetings", "Team building events"]
                                    },
                                    {
                                        title: "Client Interactions",
                                        icon: Briefcase,
                                        color: "from-emerald-500 to-green-500",
                                        description: "On-site client meetings and partner interactions with coordinated travel and safety guidelines.",
                                        examples: ["Client presentations", "Partner meetings", "Site visits", "Project consultations"]
                                    },
                                    {
                                        title: "Office Etiquette",
                                        icon: Shield,
                                        color: "from-purple-500 to-pink-500",
                                        description: "Security, health, and safety protocols when working from office locations.",
                                        examples: ["Badge access protocols", "Shared space consideration", "Device security", "Health guidelines"]
                                    }
                                ].map((expectation, index) => (
                                    <div key={index} className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group">
                                        <div className={`w-12 h-12 bg-gradient-to-r ${expectation.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            <expectation.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="font-semibold mb-3 text-lg">{expectation.title}</h4>
                                        <p className="text-slate-400 mb-4 text-sm">{expectation.description}</p>
                                        <div className="space-y-2">
                                            {expectation.examples.map((example, exampleIndex) => (
                                                <div key={exampleIndex} className="flex items-center space-x-2">
                                                    <ChevronRight className="w-3 h-3 text-blue-400 flex-shrink-0" />
                                                    <span className="text-slate-400 text-sm">{example}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
                                <div className="flex items-start space-x-3">
                                    <AlertCircle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-yellow-300 mb-2">Travel & Expenses</h4>
                                        <p className="text-slate-300">
                                            Business travel expenses are reimbursed according to company policy. We provide appropriate
                                            notice for mandatory events and ensure travel arrangements meet health and safety guidelines.
                                            Client-facing and technical support roles may have specified in-office requirements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Health & Wellbeing Section */}
                <section id="wellbeing" className="mb-16 scroll-mt-20" ref={(el) => {sectionRefs.current['wellbeing'] = el}}>
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center">
                                <Heart className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold">Health, Safety & Well-being</h2>
                        </div>
                        <div className="space-y-6">
                            <p className="text-slate-300 leading-relaxed">
                                Mercato is committed to providing a safe and healthy work environment, whether at home or in the office.
                                We prioritize employee well-being through comprehensive health and safety guidelines and wellness resources.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <h4 className="font-semibold text-lg text-pink-300">Health & Safety Guidelines</h4>
                                    {[
                                        { title: "Cybersecurity Hygiene", desc: "Secure practices for remote work environments" },
                                        { title: "Ergonomic Setup", desc: "Proper workstation configuration guidelines" },
                                        { title: "Public Health Compliance", desc: "Adherence to current health advisories" },
                                        { title: "Equipment Safety", desc: "Proper use and maintenance of work equipment" }
                                    ].map((guideline, index) => (
                                        <div key={index} className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300">
                                            <div className="flex items-start space-x-3">
                                                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h5 className="font-medium mb-1">{guideline.title}</h5>
                                                    <p className="text-sm text-slate-400">{guideline.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-semibold text-lg text-emerald-300">Wellness Resources</h4>
                                    {[
                                        { title: "Mental Health Support", desc: "Professional counseling services available" },
                                        { title: "Flexible Leave Options", desc: "Accommodating personal and family needs" },
                                        { title: "Work-Life Balance", desc: "Encouraging healthy boundaries and rest" },
                                        { title: "Wellness Programs", desc: "Health and wellness initiatives and resources" }
                                    ].map((resource, index) => (
                                        <div key={index} className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300">
                                            <div className="flex items-start space-x-3">
                                                <Heart className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h5 className="font-medium mb-1">{resource.title}</h5>
                                                    <p className="text-sm text-slate-400">{resource.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Equality & Inclusion Section */}
                <section id="equality" className="mb-16 scroll-mt-20" ref={(el) => { sectionRefs.current['equality'] = el; }}>
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                                <Globe className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold">Equality & Non-Discrimination</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl">
                                <div className="flex items-start space-x-3">
                                    <Globe className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-cyan-300 mb-2">Inclusive Workplace Commitment</h4>
                                        <p className="text-slate-300">
                                            All Mercato workplaces are inclusive environments where remote or hybrid arrangements are
                                            offered equitably to employees based on role and performance, without discrimination.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "Equitable Access",
                                        icon: Users,
                                        color: "from-emerald-500 to-green-500",
                                        description: "Fair access to work arrangements regardless of background or personal characteristics.",
                                        points: [
                                            "Role-based work arrangements",
                                            "Performance-driven decisions",
                                            "Equal opportunity access",
                                            "Merit-based evaluations"
                                        ]
                                    },
                                    {
                                        title: "Location Independence",
                                        icon: MapPin,
                                        color: "from-purple-500 to-pink-500",
                                        description: "Career advancement opportunities independent of physical work location.",
                                        points: [
                                            "Promotion equity",
                                            "Salary parity",
                                            "Role development",
                                            "Leadership opportunities"
                                        ]
                                    },
                                    {
                                        title: "Global Compliance",
                                        icon: Shield,
                                        color: "from-orange-500 to-red-500",
                                        description: "Adherence to non-discrimination laws and respectful workplace culture standards.",
                                        points: [
                                            "Multi-jurisdiction compliance",
                                            "Cultural sensitivity",
                                            "Legal protections",
                                            "Respectful environment"
                                        ]
                                    },
                                    {
                                        title: "Performance Fairness",
                                        icon: CheckCircle,
                                        color: "from-blue-500 to-cyan-500",
                                        description: "Decisions on promotions, raises, and role changes independent of work location.",
                                        points: [
                                            "Merit-based promotions",
                                            "Equal compensation review",
                                            "Fair performance assessment",
                                            "Transparent career pathways"
                                        ]
                                    }
                                ].map((principle, index) => (
                                    <div key={index} className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group">
                                        <div className={`w-12 h-12 bg-gradient-to-r ${principle.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            <principle.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="font-semibold mb-3 text-lg">{principle.title}</h4>
                                        <p className="text-slate-400 mb-4 text-sm">{principle.description}</p>
                                        <div className="space-y-2">
                                            {principle.points.map((point, pointIndex) => (
                                                <div key={pointIndex} className="flex items-center space-x-2">
                                                    <ChevronRight className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                                                    <span className="text-slate-400 text-sm">{point}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Legal Compliance Section */}
                <section id="compliance" className="mb-16 scroll-mt-20" ref={(el) => { sectionRefs.current['compliance'] = el }}>
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold">Legal Compliance & Governance</h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-slate-300 leading-relaxed">
                                Mercato&apos;s workplace policies comply with relevant employment regulations across all operating jurisdictions.
                                We ensure full legal compliance while maintaining our commitment to flexible work arrangements.
                            </p>

                            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-6">
                                <div className="flex items-start space-x-3">
                                    <Shield className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-300 mb-2">EU Legal Framework</h4>
                                        <p className="text-slate-300 mb-3">
                                            Under EU law, eligible employees have the right to request flexible work arrangements
                                            and to receive clear, advance information about work conditions. We fully comply with
                                            the EU Work–Life Balance Directive and related employment regulations.
                                        </p>
                                        <div className="inline-flex items-center px-3 py-1 bg-indigo-500/20 text-indigo-300 text-sm rounded-lg">
                                            <CheckCircle className="w-4 h-4 mr-2" />
                                            EU Work–Life Balance Directive Compliant
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    {
                                        title: "Employment Standards",
                                        icon: Briefcase,
                                        color: "from-blue-500 to-cyan-500",
                                        regulations: [
                                            "Minimum wage compliance",
                                            "Overtime regulations",
                                            "Leave entitlements",
                                            "Contract transparency"
                                        ]
                                    },
                                    {
                                        title: "Regional Compliance",
                                        icon: Globe,
                                        color: "from-emerald-500 to-green-500",
                                        regulations: [
                                            "EU employment law",
                                            "UK working regulations",
                                            "US labor standards",
                                            "Local jurisdiction rules"
                                        ]
                                    },
                                    {
                                        title: "Worker Rights",
                                        icon: Users,
                                        color: "from-purple-500 to-pink-500",
                                        regulations: [
                                            "Flexible work requests",
                                            "Work condition information",
                                            "Non-discrimination protection",
                                            "Family-friendly policies"
                                        ]
                                    }
                                ].map((area, index) => (
                                    <div key={index} className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group">
                                        <div className={`w-12 h-12 bg-gradient-to-r ${area.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            <area.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="font-semibold mb-4 text-lg">{area.title}</h4>
                                        <div className="space-y-2">
                                            {area.regulations.map((regulation, regIndex) => (
                                                <div key={regIndex} className="flex items-center space-x-2">
                                                    <ChevronRight className="w-3 h-3 text-blue-400 flex-shrink-0" />
                                                    <span className="text-slate-400 text-sm">{regulation}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
                                <div className="flex items-start space-x-3">
                                    <AlertCircle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-yellow-300 mb-2">Local Law Precedence</h4>
                                        <p className="text-slate-300 mb-3">
                                            Where local employment law grants greater benefits than described in this policy,
                                            the local law will apply. Employees may obtain more detailed local policy documents,
                                            employee handbooks, and country-specific addenda upon request.
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-lg">Employee Handbook Available</span>
                                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-lg">Country Addenda</span>
                                            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-lg">Local Policy Docs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Closing Statement */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 text-center">
                        <div className="max-w-3xl mx-auto">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Coffee className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Balancing Flexibility with Collaboration</h3>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                Mercato&apos;s hybrid work policy is designed to attract talent and maintain productivity while respecting
                                personal needs. We strive for transparency by informing all candidates and employees of our flexible
                                work model and any expected in-office commitments before they join.
                            </p>
                            <p className="text-slate-400">
                                By balancing flexibility with collaboration, Mercato creates a work environment that meets both
                                employee expectations and business needs while maintaining full legal compliance across all jurisdictions.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default WorkplacePolicyPage;