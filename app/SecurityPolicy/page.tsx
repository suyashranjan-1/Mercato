"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Shield, Lock, Eye, AlertTriangle, Users, Cloud, Server, FileText, Mail, Globe, Clock, CheckCircle, Key, Monitor, Database, Wifi, HardDrive, RefreshCw } from 'lucide-react';
import { NavbarDemo } from "@/components/navbar";
import Footer from "@/components/Footer";

const SecurityPolicyPage = () => {
    const [activeSection, setActiveSection] = useState('');
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

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
        { id: 'overview', title: 'Overview', icon: Shield },
        { id: 'governance', title: 'Security Governance', icon: Users },
        { id: 'technical', title: 'Technical Controls', icon: Lock },
        { id: 'organizational', title: 'Organizational Measures', icon: FileText },
        { id: 'incident', title: 'Incident Response', icon: AlertTriangle },
        { id: 'monitoring', title: 'Monitoring & Auditing', icon: Eye },
        { id: 'physical', title: 'Physical Security', icon: Server },
        // { id: 'contact', title: 'Contact', icon: Mail }
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
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
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
                                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
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
                        <Shield className="w-4 h-4 mr-2" />
                        Data Protection & Security
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight">
                        Security Policy
                    </h1>

                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Mercato Agency is committed to maintaining the highest standards of security and data protection for all information it processes. This Security Policy outlines our comprehensive practices for protecting data against unauthorized access, disclosure, alteration, and loss.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 text-sm text-slate-500">
                        <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>Last Updated: January 2025</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Globe className="w-4 h-4" />
                            <span>Global Compliance</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4" />
                            <span>ISO 27001 Aligned</span>
                        </div>
                    </div>
                </div>

                {/* Overview Section */}
                <section id="overview" className="mb-16 scroll-mt-20">
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Shield className="w-8 h-8 text-emerald-400" />
                            Security Overview
                        </h2>
                        <div className="space-y-6 text-slate-300 leading-relaxed">
                            <p className="text-lg">This Security Policy applies to all Mercato employees, contractors, systems, and operations worldwide. We maintain documented policies and procedures aligned with international best practices.</p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
                                    <div className="flex items-center mb-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                                        <h3 className="font-semibold text-emerald-300">Standards Compliance</h3>
                                    </div>
                                    <ul className="space-y-2 text-sm">
                                        <li>• ISO/IEC 27001 Framework</li>
                                        <li>• NIST Cybersecurity Framework</li>
                                        <li>• GDPR Requirements</li>
                                        <li>• SOC 2 Controls</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                                    <div className="flex items-center mb-3">
                                        <RefreshCw className="w-5 h-5 text-blue-400 mr-2" />
                                        <h3 className="font-semibold text-blue-300">Continuous Improvement</h3>
                                    </div>
                                    <ul className="space-y-2 text-sm">
                                        <li>• Annual Policy Reviews</li>
                                        <li>• Regular Security Training</li>
                                        <li>• Threat Assessment Updates</li>
                                        <li>• Compliance Monitoring</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Governance Section */}
                <section id="governance" className="mb-16 scroll-mt-20">
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Users className="w-8 h-8 text-purple-400" />
                            Security Governance
                        </h2>
                        <div className="space-y-6 text-slate-300 leading-relaxed">
                            <p>Security of customer and company data is overseen by our Information Security Committee and Data Protection Officer.</p>

                            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4 text-purple-300">Key Responsibilities</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                        <div className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                                            <span>Information Security Committee oversight</span>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                                            <span>Data Protection Officer guidance</span>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                                            <span>Annual policy reviews and updates</span>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                                            <span>Mandatory security awareness training</span>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                                            <span>Confidentiality agreements for all staff</span>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                                            <span>Regular compliance assessments</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Controls Section */}
                <section id="technical" className="mb-16 scroll-mt-20">
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Lock className="w-8 h-8 text-cyan-400" />
                            Technical Security Controls
                        </h2>
                        <div className="space-y-8 text-slate-300 leading-relaxed">

                            {/* Encryption */}
                            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6">
                                <div className="flex items-center mb-4">
                                    <Key className="w-6 h-6 text-cyan-400 mr-3" />
                                    <h3 className="text-xl font-semibold text-cyan-300">Encryption</h3>
                                </div>
                                <p className="mb-4">Mercato uses strong encryption to protect data at rest and in transit. This is a critical technical measure to ensure appropriate security levels.</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-slate-800/50 rounded-lg p-4">
                                        <h4 className="font-semibold mb-2 text-cyan-200">Data at Rest</h4>
                                        <ul className="space-y-1 text-sm">
                                            <li>• AES-256 encryption for databases</li>
                                            <li>• Encrypted backups and files</li>
                                            <li>• Secure key management</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-800/50 rounded-lg p-4">
                                        <h4 className="font-semibold mb-2 text-cyan-200">Data in Transit</h4>
                                        <ul className="space-y-1 text-sm">
                                            <li>• Industry-standard TLS/SSL</li>
                                            <li>• Secure API communications</li>
                                            <li>• VPN for remote access</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Access Control */}
                            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                                <div className="flex items-center mb-4">
                                    <Users className="w-6 h-6 text-green-400 mr-3" />
                                    <h3 className="text-xl font-semibold text-green-300">Access Control</h3>
                                </div>
                                <p className="mb-4">Access to systems and data is granted on a least-privilege basis with comprehensive authentication measures.</p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {[
                                        { title: 'Authentication', items: ['Strong passwords required', 'Multi-factor authentication (MFA)', 'Regular access reviews'] },
                                        { title: 'Authorization', items: ['Role-based permissions', 'Least-privilege principle', 'Automated access management'] },
                                        { title: 'Monitoring', items: ['Account activity tracking', 'Unused account detection', 'Prompt access revocation'] }
                                    ].map((section, idx) => (
                                        <div key={idx} className="bg-slate-800/50 rounded-lg p-4">
                                            <h4 className="font-semibold mb-2 text-green-200">{section.title}</h4>
                                            <ul className="space-y-1 text-sm">
                                                {section.items.map((item, i) => <li key={i}>• {item}</li>)}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Network Security */}
                            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                                <div className="flex items-center mb-4">
                                    <Wifi className="w-6 h-6 text-blue-400 mr-3" />
                                    <h3 className="text-xl font-semibold text-blue-300">Network & Infrastructure Security</h3>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-3 text-blue-200">Network Protection</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" />Firewall protection</li>
                                            <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" />Intrusion detection/prevention</li>
                                            <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" />Network segmentation</li>
                                            <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" />Traffic monitoring</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-blue-200">Server Security</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" />Server hardening</li>
                                            <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" />Prompt patching</li>
                                            <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" />Automatic updates</li>
                                            <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" />Vulnerability scanning</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Cloud Security */}
                            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-6">
                                <div className="flex items-center mb-4">
                                    <Cloud className="w-6 h-6 text-indigo-400 mr-3" />
                                    <h3 className="text-xl font-semibold text-indigo-300">Cloud Services & Third-Party Security</h3>
                                </div>
                                <p className="mb-4">We use reputable cloud providers and maintain strict security standards for all integrations.</p>
                                <div className="bg-indigo-500/5 rounded-lg p-4">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {['Google Cloud Platform', 'LinkedIn API', 'Airtable', 'ISO 27001', 'SOC 2', 'GDPR'].map((item, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">{item}</span>
                                        ))}
                                    </div>
                                    <p className="text-sm">All third-party integrations require data processing agreements and equivalent security controls.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Organizational Measures */}
                <section id="organizational" className="mb-16 scroll-mt-20">
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <FileText className="w-8 h-8 text-orange-400" />
                            Organizational Security Measures
                        </h2>
                        <div className="space-y-6 text-slate-300 leading-relaxed">
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: 'Security Training',
                                        icon: Users,
                                        color: 'orange',
                                        items: ['Annual security training for all staff', 'Phishing awareness programs', 'Data handling procedures', 'Incident reporting protocols']
                                    },
                                    {
                                        title: 'Physical Security',
                                        icon: Server,
                                        color: 'red',
                                        items: ['Badge access control', 'Surveillance cameras', 'Visitor logs', 'Encrypted portable devices']
                                    },
                                    {
                                        title: 'Change Management',
                                        icon: RefreshCw,
                                        color: 'green',
                                        items: ['Formal change control processes', 'Emergency change procedures', 'Documentation requirements', 'Testing prior to implementation']
                                    },
                                    {
                                        title: 'Data Handling',
                                        icon: Database,
                                        color: 'purple',
                                        items: ['Secure vault systems for sensitive data', 'Cryptographic erasure procedures', 'Locked cabinet storage', 'Secure disposal methods']
                                    }
                                ].map((section, idx) => (
                                    <div key={idx} className={`bg-${section.color}-500/10 border border-${section.color}-500/20 rounded-xl p-6`}>
                                        <div className="flex items-center mb-4">
                                            <section.icon className={`w-6 h-6 text-${section.color}-400 mr-3`} />
                                            <h3 className={`text-xl font-semibold text-${section.color}-300`}>{section.title}</h3>
                                        </div>
                                        <ul className="space-y-2 text-sm">
                                            {section.items.map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <div className={`w-2 h-2 bg-${section.color}-400 rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-slate-700/20 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4 text-yellow-300">Vendor Management</h3>
                                <p className="mb-4">Before engaging any vendor or service provider that processes personal data, Mercato conducts thorough due diligence.</p>
                                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                                    <ul className="space-y-2 text-sm">
                                        <li>• Security posture confirmation before engagement</li>
                                        <li>• GDPR Article 28-type clauses in all contracts</li>
                                        <li>• Mandatory data protection and confidentiality requirements</li>
                                        <li>• Immediate incident reporting obligations</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Incident Response */}
                <section id="incident" className="mb-16 scroll-mt-20">
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <AlertTriangle className="w-8 h-8 text-red-400" />
                            Incident Response & Breach Protocol
                        </h2>
                        <div className="space-y-6 text-slate-300 leading-relaxed">
                            <p className="text-lg">Mercato has a documented Incident Response Plan that ensures rapid and effective response to security incidents.</p>

                            <div className="grid md:grid-cols-1 gap-4">
                                {[
                                    {
                                        step: '1',
                                        title: 'Detection & Analysis',
                                        description: 'Security teams are alerted through monitoring systems and user reports. The incident is logged and classified by severity.',
                                        color: 'blue'
                                    },
                                    {
                                        step: '2',
                                        title: 'Containment & Eradication',
                                        description: 'Immediate steps to isolate affected systems, stop attacks (disconnect networks, revoke credentials), and remove malicious elements.',
                                        color: 'orange'
                                    },
                                    {
                                        step: '3',
                                        title: 'Recovery',
                                        description: 'Systems are restored from secure backups, and affected data is recovered or rebuilt to resume normal operations.',
                                        color: 'green'
                                    },
                                    {
                                        step: '4',
                                        title: 'Notification',
                                        description: 'GDPR-compliant notification to authorities within 72 hours and affected individuals when high-risk breaches occur.',
                                        color: 'purple'
                                    },
                                    {
                                        step: '5',
                                        title: 'Post-Incident Review',
                                        description: 'Formal review to document root causes, evaluate response effectiveness, and update defenses to prevent recurrence.',
                                        color: 'cyan'
                                    }
                                ].map((phase) => (
                                    <div key={phase.step} className={`bg-${phase.color}-500/10 border border-${phase.color}-500/20 rounded-xl p-6 hover:bg-${phase.color}-500/15 transition-all duration-300`}>
                                        <div className="flex items-start space-x-4">
                                            <div className={`w-10 h-10 bg-${phase.color}-500/20 text-${phase.color}-400 rounded-full flex items-center justify-center font-bold flex-shrink-0`}>
                                                {phase.step}
                                            </div>
                                            <div>
                                                <h3 className={`text-lg font-semibold mb-2 text-${phase.color}-300`}>{phase.title}</h3>
                                                <p className="text-sm">{phase.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-3 text-red-300">GDPR Compliance</h3>
                                <p className="mb-3">All security incidents are recorded in an internal register as required by GDPR Article 33.</p>
                                <div className="bg-red-500/5 rounded-lg p-4">
                                    <p className="text-sm font-semibold text-red-200">72-Hour Notification Rule</p>
                                    <p className="text-sm mt-2">Under GDPR, we notify the lead data protection authority &quot;without undue delay and, where feasible, not later than 72 hours&quot; after becoming aware of any breach involving personal data.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Monitoring Section */}
                <section id="monitoring" className="mb-16 scroll-mt-20">
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Eye className="w-8 h-8 text-indigo-400" />
                            Continuous Monitoring & Auditing
                        </h2>
                        <div className="space-y-6 text-slate-300 leading-relaxed">
                            <p>Mercato conducts regular internal audits of security controls and maintains continuous compliance monitoring.</p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold mb-4 text-indigo-300">Internal Monitoring</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex items-center">
                                            <Monitor className="w-4 h-4 text-indigo-400 mr-3" />
                                            System logs monitoring
                                        </li>
                                        <li className="flex items-center">
                                            <Eye className="w-4 h-4 text-indigo-400 mr-3" />
                                            Access records analysis
                                        </li>
                                        <li className="flex items-center">
                                            <HardDrive className="w-4 h-4 text-indigo-400 mr-3" />
                                            Storage device monitoring
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold mb-4 text-indigo-300">External Audits</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex items-center">
                                            <Database className="w-4 h-4 text-indigo-400 mr-3" />
                                            Third-party security assessments
                                        </li>
                                        <li className="flex items-center">
                                            <Server className="w-4 h-4 text-indigo-400 mr-3" />
                                            Penetration testing
                                        </li>
                                        <li className="flex items-center">
                                            <Cloud className="w-4 h-4 text-indigo-400 mr-3" />
                                            Cloud compliance reviews
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Physical Security Section */}
                <section id="physical" className="mb-16 scroll-mt-20">
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Server className="w-8 h-8 text-yellow-400" />
                            Physical Security
                        </h2>
                        <div className="space-y-6 text-slate-300 leading-relaxed">
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center"><Lock className="w-4 h-4 text-yellow-400 mr-3" />Secured data centers with 24/7 monitoring</li>
                                <li className="flex items-center"><Monitor className="w-4 h-4 text-yellow-400 mr-3" />Surveillance cameras and access logs</li>
                                <li className="flex items-center"><Key className="w-4 h-4 text-yellow-400 mr-3" />Restricted badge access</li>
                                <li className="flex items-center"><HardDrive className="w-4 h-4 text-yellow-400 mr-3" />Secure disposal of hardware</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                {/* <section id="contact" className="mb-16 scroll-mt-20">
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Mail className="w-8 h-8 text-cyan-400" />
                            Contact & Questions
                        </h2>
                        <div className="space-y-4 text-slate-300 leading-relaxed">
                            <p>For questions about this Security Policy, please contact Mercato at <a href="mailto:contact@mercato.agency" className="text-cyan-400 underline">contact@mercato.agency</a> or by mail at Mercato Agency, Attn: Security, [Street Address], [City, Country].</p>
                        </div>
                    </div>
                </section> */}
            </div>
            <Footer />
        </div>
    );
};

export default SecurityPolicyPage;