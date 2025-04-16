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
        <main className="w-full min-h-screen bg-black text-white">
            <NavbarDemo />

            {/* Hero Section */}
            <section className=" relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-28">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-block px-4 py-1 mb-6 rounded-full border border-neutral-800 text-sm text-neutral-300">
                        Healthcare Solutions
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        AI Agents for Healthcare
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
                        Your patients require undivided attention. The only way
                        to deliver that is by reducing the clutter in your
                        workflows. That's where we come in.
                    </p>
                </div>

                {/* Hero Image */}
                <div className="w-full max-w-6xl mx-auto mt-16">
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                        <HeroImage />
                    </div>
                </div>
            </section>

            {/* Platform Features Section */}
            <section className="relative w-full py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="inline-block px-4 py-1 mb-6 rounded-full border border-neutral-800 text-sm text-neutral-300">
                        Platform Features
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold max-w-4xl mb-6">
                        One AI-native platform to begin the patients' journey
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-400 max-w-2xl">
                        Beam's healthcare agents are trained on your existing
                        documentation, past support cases, and ask questions to
                        understand better; just like a human!
                    </p>
                </div>
            </section>
            <div className="mb-15">
                <BentoGridThirdDemo />
            </div>

            <section className="relative w-full py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="inline-block px-4 py-1 mb-6 rounded-full border border-neutral-800 text-sm text-neutral-300">
                        Workflows
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold max-w-4xl mb-6">
                        A history of healthcare success built through AI{" "}
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-400 max-w-2xl">
                        The capabilities of an AI Agent are only limited to your
                        imagination. Use them to help you with any part of a
                        certain task. Beam's customizable agents are already
                        being used in various ways across the healthcare
                        industry.
                    </p>
                </div>
            </section>
            <Analytics />
            <InfiniteMovingCardsDemo />
            <section className="relative w-full py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="inline-block px-4 py-1 mb-6 rounded-full border border-neutral-800 text-sm text-neutral-300">
                        AI Agents
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold max-w-4xl mb-6">
                        Relying on an ever-present AI healthcare staff
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-6">
                        For every step in your workflow, there is an agent to
                        assist you. Customize an agent according to what you
                        need and where you need it. Or deploy an Appointment
                        Support Specialist or a Patient Care Planner among a
                        host of pre-trained agents to help you automate your
                        healthcare business from the get-go.
                    </p>
                    <button className="bg-white text-black px-4 py-2 rounded-full">
                        See all agents
                    </button>
                </div>
            </section>
            <AppleCardsCarouselDemo />
            <section className="relative w-full py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="inline-block px-4 py-1 mb-6 rounded-full border border-neutral-800 text-sm text-neutral-300">
                        Benefits
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold max-w-4xl mb-6">
                        For better care and happier patients, at a fraction of
                        the cost{" "}
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-6">
                        AI Agents significantly enhance patient experiences by
                        enabling high-quality healthcare delivery, instant,
                        accurate responses and support, around the clock, in any
                        language. For healthcare practitioners, agents automate
                        repetitive tasks, reducing clinical burnout, manual
                        workload, while improving system efficiency and allowing
                        more time for direct patient care.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {[
                            "Increase Patient Satisfaction",
                            "Faster Task Execution",
                            "Reduce Cost of Care",
                            "Multilingual",
                            "Reduce Load on Critical Staff",
                            "Reduce Administrative Errors",
                        ].map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-3 p-4 rounded-lg"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                                        <svg
                                            className="w-4 h-4 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <span className="text-lg text-white">
                                    {benefit}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="p-14 rounded-3xl border border-neutral-800 text-left">
                            <div className="text-5xl font-bold mb-4">
                                &lt;1min
                            </div>
                            <div className="text-xl text-neutral-400">
                                Task Execution Time
                            </div>
                        </div>
                        <div className="p-14 rounded-3xl border border-neutral-800 text-left">
                            <div className="text-5xl font-bold mb-4">70%</div>
                            <div className="text-xl text-neutral-400">
                                Reduction in Operational Costs
                            </div>
                        </div>
                        <div className="p-14 rounded-3xl border border-neutral-800 text-left">
                            <div className="text-5xl font-bold mb-4">∞</div>
                            <div className="text-xl text-neutral-400">
                                Instantly Infinitely Scalable
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative w-full py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="inline-block px-4 py-1 mb-6 rounded-full border border-neutral-800 text-sm text-neutral-300">
                        Integrations
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold max-w-4xl mb-6">
                        Whether EHR or RCM, integrate existing systems into your
                        healthcare automation{" "}
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-6">
                        Our platform integrates with most major healthcare and
                        operations-based SaaS services, allowing you to pick up
                        where you left off, seamlessly.
                    </p>
                    <button className="bg-white text-black px-4 py-2 rounded-full">
                        See all integrations
                    </button>
                </div>
            </section>
            <InfiniteMovingCardsDemo />
            <section className="relative w-full py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="inline-block px-4 py-1 mb-6 rounded-full border border-neutral-800 text-sm text-neutral-300">
                        Our Customers
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold max-w-4xl mb-6">
                        Automate to lower administrative healthcare costs by
                        over 40%{" "}
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-6">
                        For every step in your workflow, there is an agent to
                        assist you. Customize an agent according to what you
                        need and where you need it. Or deploy an Appointment
                        Support Specialist or a Patient Care Planner among a
                        host of pre-trained agents to help you automate your
                        healthcare business from the get-go.
                    </p>
                    <button className="bg-white text-black px-4 py-2 rounded-full">
                        See all case studies
                    </button>
                </div>
            </section>
            <AppleCardsCarouselDemo />
            <section className=" relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-15">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-block px-4 py-1 mb-6 rounded-full border border-neutral-800 text-sm text-neutral-300">
                        Healthcare Solutions
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Custom AI healthcare solutions? Yes{" "}
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
                        Want an AI Agent that is tailor-made for your hospital,
                        clinic, or other medical practice?
                    </p>
                </div>
                <button className="bg-white text-black px-4 py-2 rounded-full mt-6">
                    Talk to solutions
                </button>
            </section>
            <HeroParallaxDemo />
            <section className=" relative w-full flex flex-col items-center justify-center px-4 py-9 mt-10">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-block px-4 py-1 mb-6 rounded-full border border-neutral-800 text-sm text-neutral-300">
                        Start Today
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Start building AI agents to automate processes{" "}
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
                        Join our platform and start building AI agents for
                        various types of automations.
                    </p>
                </div>
                <button className="bg-white text-black px-4 py-2 rounded-full mt-6">
                    Request Access
                </button>
            </section>
            <section className="  relative w-full flex flex-col items-center justify-center px-4 py-9 mt-10">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-block px-4 py-1 mb-6 rounded-full border border-neutral-800 text-sm text-neutral-300">
                        FAQ
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Frequently Asked Questions{" "}
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
                        Learn the answers to common questions about our AI
                        solutions, tools, and services, helping you understand
                        how they can benefit your business and streamline
                        operations.
                    </p>
                </div>
            </section>
            <SpeedInsights />

            {/* AI Healthcare Transformation Section */}
            <section className="relative w-full py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">
                        How can AI Agents transform healthcare — scalable,
                        secure, and fully integrated?
                    </h2>
                    <div className="space-y-8 text-neutral-400">
                        <p className="text-lg md:text-xl">
                            As healthcare evolves, so does the need for
                            intelligent automation. Beam AI Healthcare Agents
                            are designed to reduce administrative burdens,
                            streamline processes, and enhance patient care—all
                            while ensuring compliance, security, and
                            scalability.
                        </p>
                        <p className="text-lg md:text-xl">
                            With automation through artificial intelligence,
                            businesses can transform traditional processes into
                            automated, intelligent workflows. The integration of
                            AI Agents into daily operations not only speeds up
                            routine tasks but also enhances faster
                            decision-making by offering data-driven insights in
                            real-time. To stay competitive, this becomes more
                            and more necessary for businesses.
                        </p>
                    </div>
                </div>
            </section>

            {/* AI-powered Workflows Section */}
            <section className="relative w-full py-24 px-4 bg-neutral-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">
                        How can AI-powered workflows enable smarter healthcare
                        operations?
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-400 mb-12">
                        From small clinics to large hospital networks, Beam AI
                        integrates into your existing workflows, optimizing
                        everything from patient onboarding to insurance
                        verification. Our intelligent AI agents work
                        autonomously or alongside your staff, handling complex
                        processes with speed, accuracy, and reliability.
                    </p>

                    <div className="space-y-16">
                        {/* End-to-End Automation Section */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                                1. End-to-End Automation for Healthcare
                                Workflows
                            </h3>
                            <p className="text-lg text-neutral-400 mb-6">
                                Beam AI doesn't just automate individual
                                tasks—it orchestrates entire workflows to reduce
                                inefficiencies and improve operational
                                performance. Our AI agents assist in:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 rounded-xl border border-neutral-800">
                                    <h4 className="text-xl font-semibold mb-2">
                                        Patient Data Processing
                                    </h4>
                                    <p className="text-neutral-400">
                                        Automatic collection, validation, and
                                        structuring of patient records.
                                    </p>
                                </div>
                                <div className="p-6 rounded-xl border border-neutral-800">
                                    <h4 className="text-xl font-semibold mb-2">
                                        Appointment Coordination
                                    </h4>
                                    <p className="text-neutral-400">
                                        AI-driven scheduling, reminders, and
                                        real-time availability updates.
                                    </p>
                                </div>
                                <div className="p-6 rounded-xl border border-neutral-800">
                                    <h4 className="text-xl font-semibold mb-2">
                                        Medical Report Analysis
                                    </h4>
                                    <p className="text-neutral-400">
                                        Extracting key insights from lab
                                        reports, prescriptions, and EHRs.
                                    </p>
                                </div>
                                <div className="p-6 rounded-xl border border-neutral-800">
                                    <h4 className="text-xl font-semibold mb-2">
                                        Billing & Insurance Processing
                                    </h4>
                                    <p className="text-neutral-400">
                                        Automating claims verification and fraud
                                        detection.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Security Section */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                                2. AI Agents Built for Compliance & Security
                            </h3>
                            <p className="text-lg text-neutral-400 mb-6">
                                Healthcare data is sensitive, and privacy is
                                non-negotiable. Beam AI is built with
                                enterprise-grade security features, ensuring
                                that all AI-driven processes comply with HIPAA,
                                GDPR, and other global healthcare regulations.
                                Key security features include:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-6 rounded-xl border border-neutral-800">
                                    <h4 className="text-xl font-semibold mb-2">
                                        End-to-End Encryption
                                    </h4>
                                    <p className="text-neutral-400">
                                        Protects patient data during storage and
                                        transmission.
                                    </p>
                                </div>
                                <div className="p-6 rounded-xl border border-neutral-800">
                                    <h4 className="text-xl font-semibold mb-2">
                                        Role-Based Access Control
                                    </h4>
                                    <p className="text-neutral-400">
                                        Ensures that only authorized personnel
                                        can access information.
                                    </p>
                                </div>
                                <div className="p-6 rounded-xl border border-neutral-800">
                                    <h4 className="text-xl font-semibold mb-2">
                                        Secure Deployment Options
                                    </h4>
                                    <p className="text-neutral-400">
                                        Choose between cloud and on-premises
                                        setup that aligns with your compliance
                                        needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SpeedInsights />
        </main>
    );
}
