"use client";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useState, useRef } from "react";
import { NavbarDemo } from "@/components/navbar";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
import { HeroImage } from "@/components/HeroImage";
import { BentoGridThirdDemo } from "./_components/imageGrid";
import { InfiniteMovingCardsDemo } from "../snippets/infinite-moving-card-snippet";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import { HeroParallaxDemo } from "./_components/heroParalex";

export default function Home() {
    return (
        <main className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
            <NavbarDemo />
            <div className="flex flex-col">
                {/* Hero Section - Enhanced */}
                <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-32">
                    {/* Background Elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center px-6 py-2 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300 hover:border-slate-600/50 transition-all duration-300">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                            Healthcare Solutions
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight">
                            AI Agents for<br />
                            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                                Healthcare
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
                            Your patients require undivided attention. The only way to deliver that is by
                            reducing the clutter in your workflows. <span className="text-white font-medium">That's where we come in.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
                                Get Started Free
                            </button>
                            <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white font-semibold rounded-2xl hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                                Watch Demo
                            </button>
                        </div>
                    </div>

                    {/* Hero Image - Enhanced */}
                    <div className="w-full max-w-7xl mx-auto mt-8 relative z-10">
                        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl shadow-black/20 border border-slate-800/50">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10"></div>
                            <HeroImage />
                        </div>
                    </div>
                </section>

                {/* Platform Features Section - Enhanced */}
                <section className="relative w-full py-32 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center px-6 py-2 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                                Platform Features
                            </div>

                            <h2 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto mb-8 leading-tight">
                                One <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">AI-native platform</span> to begin the patients' journey
                            </h2>

                            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                Beam's healthcare agents are trained on your existing documentation, past support cases,
                                and ask questions to understand better; <span className="text-white font-medium">just like a human!</span>
                            </p>
                        </div>
                    </div>

                    <div className="mb-32">
                        <BentoGridThirdDemo />
                    </div>
                </section>

                {/* Workflows Section - Enhanced */}
                <section className="relative w-full py-32 px-4 bg-gradient-to-r from-slate-900/50 to-slate-800/30">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="inline-flex items-center px-6 py-2 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                            Workflows
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto mb-8 leading-tight">
                            A history of healthcare success built through <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">AI</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            The capabilities of an AI Agent are only limited to your imagination. Use them to help you with any part of a certain task.
                            Beam's customizable agents are already being used in various ways across the healthcare industry.
                        </p>
                    </div>
                </section>

                <div className="py-16">
                    <InfiniteMovingCardsDemo />
                </div>

                {/* AI Agents Section - Enhanced */}
                <section className="relative w-full py-32 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-6 py-2 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                                AI Agents
                            </div>

                            <h2 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto mb-8 leading-tight">
                                Relying on an <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">ever-present</span> AI healthcare staff
                            </h2>

                            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
                                For every step in your workflow, there is an agent to assist you. Customize an agent according to what you need and where you need it.
                                Or deploy an Appointment Support Specialist or a Patient Care Planner among a host of pre-trained agents.
                            </p>

                            <button className="px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-slate-100 hover:shadow-2xl hover:shadow-white/10 transform hover:scale-105 transition-all duration-300">
                                See all agents
                            </button>
                        </div>
                    </div>
                </section>

                <div className="py-16">
                    <AppleCardsCarouselDemo />
                </div>

                {/* Benefits Section - Enhanced */}
                <section className="relative w-full py-32 px-4 bg-gradient-to-br from-slate-900/30 to-slate-800/20">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center px-6 py-2 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                                Benefits
                            </div>

                            <h2 className="text-5xl md:text-7xl font-bold max-w-6xl mx-auto mb-8 leading-tight">
                                For better care and happier patients, at a <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">fraction of the cost</span>
                            </h2>

                            <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-16">
                                AI Agents significantly enhance patient experiences by enabling high-quality healthcare delivery, instant, accurate responses and support,
                                around the clock, in any language. For healthcare practitioners, agents automate repetitive tasks, reducing clinical burnout.
                            </p>
                        </div>

                        {/* Benefits Grid - Enhanced */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                            {[
                                { title: "Increase Patient Satisfaction", icon: "❤️" },
                                { title: "Faster Task Execution", icon: "⚡" },
                                { title: "Reduce Cost of Care", icon: "💰" },
                                { title: "Multilingual Support", icon: "🌍" },
                                { title: "Reduce Load on Critical Staff", icon: "👥" },
                                { title: "Reduce Administrative Errors", icon: "✨" },
                            ].map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-4 p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-300 group"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                                            {benefit.icon}
                                        </div>
                                    </div>
                                    <span className="text-lg text-white font-medium">
                                        {benefit.title}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Stats Cards - Enhanced */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-12 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 text-center hover:border-slate-600/50 hover:bg-slate-800/60 transition-all duration-300 group">
                                <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                    &lt;1min
                                </div>
                                <div className="text-xl text-slate-300 font-medium">
                                    Task Execution Time
                                </div>
                            </div>
                            <div className="p-12 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 text-center hover:border-slate-600/50 hover:bg-slate-800/60 transition-all duration-300 group">
                                <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                    70%
                                </div>
                                <div className="text-xl text-slate-300 font-medium">
                                    Reduction in Operational Costs
                                </div>
                            </div>
                            <div className="p-12 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 text-center hover:border-slate-600/50 hover:bg-slate-800/60 transition-all duration-300 group">
                                <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                    ∞
                                </div>
                                <div className="text-xl text-slate-300 font-medium">
                                    Instantly Infinitely Scalable
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integrations Section - Enhanced */}
                <section className="relative w-full py-32 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="inline-flex items-center px-6 py-2 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                            Integrations
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold max-w-6xl mx-auto mb-8 leading-tight">
                            Whether <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">EHR or RCM</span>, integrate existing systems into your healthcare automation
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
                            Our platform integrates with most major healthcare and operations-based SaaS services,
                            allowing you to pick up where you left off, seamlessly.
                        </p>

                        <button className="px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-slate-100 hover:shadow-2xl hover:shadow-white/10 transform hover:scale-105 transition-all duration-300">
                            See all integrations
                        </button>
                    </div>
                </section>

                <div className="py-16">
                    <InfiniteMovingCardsDemo />
                </div>

                {/* Customers Section - Enhanced */}
                <section className="relative w-full py-32 px-4 bg-gradient-to-r from-slate-900/30 to-slate-800/20">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="inline-flex items-center px-6 py-2 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                            Our Customers
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold max-w-6xl mx-auto mb-8 leading-tight">
                            Automate to lower administrative healthcare costs by over <span className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">40%</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-12">
                            For every step in your workflow, there is an agent to assist you. Customize an agent according to what you need and where you need it.
                            Or deploy pre-trained agents to help you automate your healthcare business from the get-go.
                        </p>

                        <button className="px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-slate-100 hover:shadow-2xl hover:shadow-white/10 transform hover:scale-105 transition-all duration-300">
                            See all case studies
                        </button>
                    </div>
                </section>

                <div className="py-16">
                    <AppleCardsCarouselDemo />
                </div>

                {/* Custom Solutions CTA - Enhanced */}
                <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-blue-600/5"></div>

                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center px-6 py-2 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                            Healthcare Solutions
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                            Custom AI healthcare solutions? <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Yes</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
                            Want an AI Agent that is tailor-made for your hospital, clinic, or other medical practice?
                        </p>

                        <button className="px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 text-lg">
                            Talk to solutions
                        </button>
                    </div>
                </section>

                <div className="py-16">
                    <HeroParallaxDemo />
                </div>

                {/* Start Today CTA - Enhanced */}
                <section className="relative w-full flex flex-col items-center justify-center px-4 py-32">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="inline-flex items-center px-6 py-2 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                            Start Today
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                            Start building <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">AI agents</span> to automate processes
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
                            Join our platform and start building AI agents for various types of automations.
                        </p>

                        <button className="px-12 py-6 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300 text-lg">
                            Request Access
                        </button>
                    </div>
                </section>

                {/* FAQ Section - Enhanced */}
                <section className="relative w-full flex flex-col items-center justify-center px-4 py-32 bg-gradient-to-r from-slate-900/30 to-slate-800/20">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="inline-flex items-center px-6 py-2 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                            FAQ
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                            Frequently Asked <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Questions</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                            Learn the answers to common questions about our AI solutions, tools, and services,
                            helping you understand how they can benefit your business and streamline operations.
                        </p>
                    </div>
                </section>

                {/* AI Healthcare Transformation Section - Enhanced */}
                <section className="relative w-full py-32 px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-5xl md:text-7xl font-bold mb-12 leading-tight">
                            How can <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">AI Agents</span> transform healthcare — scalable, secure, and fully integrated?
                        </h2>

                        <div className="space-y-8 text-slate-400">
                            <p className="text-xl md:text-2xl leading-relaxed">
                                As healthcare evolves, so does the need for intelligent automation. Beam AI Healthcare Agents are designed to
                                reduce administrative burdens, streamline processes, and enhance patient care—all while ensuring compliance,
                                security, and scalability.
                            </p>
                            <p className="text-xl md:text-2xl leading-relaxed">
                                With automation through artificial intelligence, businesses can transform traditional processes into automated,
                                intelligent workflows. The integration of AI Agents into daily operations not only speeds up routine tasks
                                but also enhances faster decision-making by offering data-driven insights in real-time.
                            </p>
                        </div>
                    </div>
                </section>

                {/* AI-powered Workflows Detailed Section - Enhanced */}
                <section className="relative w-full py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-5xl md:text-7xl font-bold mb-12 leading-tight">
                            How can <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">AI-powered workflows</span> enable smarter healthcare operations?
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 mb-20 leading-relaxed">
                            From small clinics to large hospital networks, Beam AI integrates into your existing workflows,
                            optimizing everything from patient onboarding to insurance verification. Our intelligent AI agents
                            work autonomously or alongside your staff, handling complex processes with speed, accuracy, and reliability.
                        </p>

                        <div className="space-y-32">
                            {/* End-to-End Automation Section - Enhanced */}
                            <div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-8">
                                    1. End-to-End Automation for Healthcare Workflows
                                </h3>
                                <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                                    Beam AI doesn't just automate individual tasks—it orchestrates entire workflows to reduce
                                    inefficiencies and improve operational performance. Our AI agents assist in:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[
                                        {
                                            title: "Patient Data Processing",
                                            description: "Automatic collection, validation, and structuring of patient records.",
                                            icon: "📊"
                                        },
                                        {
                                            title: "Appointment Coordination",
                                            description: "AI-driven scheduling, reminders, and real-time availability updates.",
                                            icon: "📅"
                                        },
                                        {
                                            title: "Medical Report Analysis",
                                            description: "Extracting key insights from lab reports, prescriptions, and EHRs.",
                                            icon: "🔬"
                                        },
                                        {
                                            title: "Billing & Insurance Processing",
                                            description: "Automating claims verification and fraud detection.",
                                            icon: "💳"
                                        }
                                    ].map((item, index) => (
                                        <div key={index} className="p-8 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-300 group">
                                            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                                {item.icon}
                                            </div>
                                            <h4 className="text-2xl font-bold mb-4 text-white">
                                                {item.title}
                                            </h4>
                                            <p className="text-slate-400 text-lg leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Security Section - Enhanced */}
                            <div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-8">
                                    2. AI Agents Built for Compliance & Security
                                </h3>
                                <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                                    Healthcare data is sensitive, and privacy is non-negotiable. Beam AI is built with enterprise-grade
                                    security features, ensuring that all AI-driven processes comply with HIPAA, GDPR, and other global
                                    healthcare regulations. Key security features include:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {[
                                        {
                                            title: "End-to-End Encryption",
                                            description: "Protects patient data during storage and transmission.",
                                            icon: "🔒"
                                        },
                                        {
                                            title: "Role-Based Access Control",
                                            description: "Ensures that only authorized personnel can access information.",
                                            icon: "👤"
                                        },
                                        {
                                            title: "Secure Deployment Options",
                                            description: "Choose between cloud and on-premises setup that aligns with your compliance needs.",
                                            icon: "☁️"
                                        }
                                    ].map((item, index) => (
                                        <div key={index} className="p-8 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-300 group">
                                            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                                {item.icon}
                                            </div>
                                            <h4 className="text-2xl font-bold mb-4 text-white">
                                                {item.title}
                                            </h4>
                                            <p className="text-slate-400 text-lg leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Analytics />
            <SpeedInsights />
        </main>
    );
}