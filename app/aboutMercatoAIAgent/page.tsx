"use client";
import { useState, useEffect } from "react";
import { NavbarDemo } from "@/components/navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

// Add interface for isVisible state
interface VisibilityState {
    features?: boolean;
    integrations?: boolean;
    character?: boolean;
    templates?: boolean;
    learning?: boolean;
    'human-loop'?: boolean;
    security?: boolean;
    cta?: boolean;
}

export default function AIAgentPage() {
    const [activeFeature, setActiveFeature] = useState(0);
    const [isVisible, setIsVisible] = useState<VisibilityState>({});

    const features = [
        {
            title: "General Problem Solver",
            description: "AI Agents can diagnose and resolve complex business problems through advanced reasoning and data analysis.",
            icon: "🎯",
            benefits: ["Self-Directed", "Highly Adaptive", "Resource and Data"]
        },
        {
            title: "Intelligent Task Planning",
            description: "Break down complex workflows into manageable steps with intelligent task prioritization.",
            icon: "🧠",
            benefits: ["Smart Scheduling", "Auto Prioritize", "Resource Balancing"]
        },
        {
            title: "Agentic Workflow Execution",
            description: "Execute workflows autonomously with real-time monitoring and adaptive decision making.",
            icon: "⚡",
            benefits: ["Workflow Blocks", "Feedback Quality", "Latest Data"]
        }
    ];

    const integrations = [
        { name: "Slack", icon: "💬" },
        { name: "Discord", icon: "🎮" },
        { name: "Zapier", icon: "⚡" },
        { name: "Gmail", icon: "📧" },
        { name: "Notion", icon: "📝" },
        { name: "GitHub", icon: "🐙" }
    ];

    const agentCapabilities = [
        "Python", "Creative", "Bold", "Analytical"
    ];

    // Auto-rotate active feature for better engagement
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % features.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [features.length]);

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({
                            ...prev,
                            [entry.target.id]: true
                        }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <main className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
            <NavbarDemo />

            {/* Hero Section */}
            <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 pt-24 sm:py-32">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10"></div>
                <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-80 sm:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10 animate-fade-in">
                    <div className="inline-flex items-center px-4 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300 hover:border-slate-600/50 transition-all duration-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                        AI Agents
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight animate-slide-up">
                        AI Agents: General Problem<br />
                        <span className="bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
                            Solvers for your Organization
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 animate-slide-up delay-200">
                        Deploy intelligent AI agents that can understand, analyze, and solve complex problems autonomously.
                        <span className="text-white font-medium"> Transform your workflow with AI that thinks and acts like your best employee.</span>
                    </p>

                    {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4 animate-slide-up delay-400">
                        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl sm:rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                            Get Started
                        </button>
                        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white font-semibold rounded-xl sm:rounded-2xl hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 text-sm sm:text-base">
                            Watch Demo
                        </button>
                    </div> */}
                </div>

                {/* Hero Image Placeholder */}
                <div className="w-full max-w-6xl mx-auto mt-4 sm:mt-8 relative z-10 px-4 animate-slide-up delay-600">
                    <div className="relative aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/20 border border-slate-800/50 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center p-4">
                                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center text-2xl sm:text-3xl animate-bounce">
                                    🤖
                                </div>
                                <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">AI Agent Interface</h3>
                                <p className="text-slate-400 text-sm sm:text-base">Intelligently Automate Anything you can Imagine</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features Section */}
            <section className="relative w-full py-16 sm:py-24 lg:py-32 px-4" id="features" data-animate>
                <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-12 sm:mb-20">
                        <div className="inline-flex items-center px-4 sm:px-6 py-2 mb-6 sm:mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 sm:mr-3"></div>
                            Core Capabilities
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold max-w-5xl mx-auto mb-6 sm:mb-8 leading-tight">
                            How <span className="bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">AI Agents</span> solve complex problems
                        </h2>

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
                            Our AI agents don&apos;t just execute tasks—they understand context, make decisions, and adapt to solve problems autonomously.
                        </p>
                    </div>

                    {/* Interactive Feature Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border backdrop-blur-sm transition-all duration-500 cursor-pointer group ${activeFeature === index
                                    ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/50 scale-105'
                                    : 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50'
                                    }`}
                                onClick={() => setActiveFeature(index)}
                                style={{
                                    animationDelay: `${index * 200}ms`
                                }}
                            >
                                <div className="text-3xl sm:text-4xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                                    {feature.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {feature.benefits.map((benefit, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-slate-700/50 rounded-full text-slate-300"
                                        >
                                            {benefit}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integrations Section */}
            <section className="relative w-full py-16 sm:py-24 lg:py-32 px-4 bg-gradient-to-r from-slate-900/50 to-slate-800/30" id="integrations" data-animate>
                <div className={`max-w-7xl mx-auto transition-all duration-1000 delay-200 ${isVisible.integrations ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                            Integrations, Tools & <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Triggers</span>
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
                            Connect with your existing tools and platforms. Our AI agents work seamlessly with your current workflow.
                        </p>
                    </div>

                    <div className="flex justify-center mb-12 sm:mb-16">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-3 sm:gap-4 lg:gap-6 justify-center max-w-4xl">
                            {integrations.map((integration, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl sm:rounded-2xl hover:border-slate-600/50 hover:bg-slate-800/70 transition-all duration-300 group animate-float"
                                    style={{
                                        animationDelay: `${index * 100}ms`
                                    }}
                                >
                                    <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">
                                        {integration.icon}
                                    </span>
                                    <span className="text-white font-medium text-sm sm:text-base">
                                        {integration.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Agent Character Section */}
            <section className="relative w-full py-16 sm:py-24 lg:py-32 px-4" id="character" data-animate>
                <div className={`max-w-7xl mx-auto transition-all duration-1000 delay-400 ${isVisible.character ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                            Agent <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Character</span>
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
                            Customize your AI agent&apos;s personality and capabilities to match your specific needs and workflow requirements.
                        </p>

                        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4">
                            {agentCapabilities.map((capability, index) => (
                                <button
                                    key={index}
                                    className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg sm:rounded-xl text-white font-medium hover:border-purple-400/50 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 text-sm sm:text-base transform hover:scale-105"
                                    style={{
                                        animationDelay: `${index * 150}ms`
                                    }}
                                >
                                    {capability}
                                </button>
                            ))}
                        </div>

                        <div className="inline-flex items-center px-4 sm:px-6 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 text-xs sm:text-sm text-center">
                            INSTRUCTIONS: Agent is multilingual and can solve both problems
                        </div>
                    </div>
                </div>
            </section>

            {/* Templates Section */}
            <section className="relative w-full py-16 sm:py-24 lg:py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30" id="templates" data-animate>
                <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 delay-200 ${isVisible.templates ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                        Use Templates or Create in <span className="bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">Seconds</span>
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12 sm:mb-16 px-4">
                        Start with proven templates or build custom agents from scratch. Our intuitive interface makes it easy to deploy AI agents in minutes.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
                        {[
                            { title: "Quick Setups", icon: "⚡", description: "Pre-built templates for common use cases" },
                            { title: "Easy Builder", icon: "🛠️", description: "Drag-and-drop agent configuration" },
                            { title: "Immediate Results", icon: "🚀", description: "Deploy and see results instantly" }
                        ].map((item, index) => (
                            <div key={index} className="p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-300 group transform hover:scale-105" style={{
                                animationDelay: `${index * 200}ms`
                            }}>
                                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 text-sm sm:text-base">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Agent Section */}
            <section className="relative w-full py-16 sm:py-24 lg:py-32 px-4" id="learning" data-animate>
                <div className={`max-w-7xl mx-auto transition-all duration-1000 delay-300 ${isVisible.learning ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                            Learning <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">Agent</span>
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
                            Our AI agents continuously learn from interactions, improving their performance and adapting to your specific business needs over time.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {[
                            { title: "Learns Feedback", icon: "📈", description: "Improves responses based on user feedback" },
                            { title: "Adapts Over Time", icon: "🔄", description: "Evolves to match your workflow patterns" },
                            { title: "Gets Smarter", icon: "🧠", description: "Becomes more efficient with each interaction" }
                        ].map((item, index) => (
                            <div key={index} className="p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-300 group transform hover:scale-105" style={{
                                animationDelay: `${index * 200}ms`
                            }}>
                                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 text-sm sm:text-base">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Human in the Loop Section */}
            <section className="relative w-full py-16 sm:py-24 lg:py-32 px-4 bg-gradient-to-r from-slate-900/50 to-slate-800/30" id="human-loop" data-animate>
                <div className={`max-w-7xl mx-auto transition-all duration-1000 delay-100 ${isVisible['human-loop'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                            Human in the <span className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">Loop</span>
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
                            The perfect balance of AI automation and human oversight. Your team stays in control while AI handles the heavy lifting.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {[
                            { title: "AI Generation", icon: "🤖", description: "AI handles routine tasks automatically" },
                            { title: "Human Oversight", icon: "👥", description: "Human review for critical decisions" },
                            { title: "Collaborative AI", icon: "🤝", description: "Seamless human-AI collaboration" }
                        ].map((item, index) => (
                            <div key={index} className="p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-300 group transform hover:scale-105" style={{
                                animationDelay: `${index * 200}ms`
                            }}>
                                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 text-sm sm:text-base">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security & Privacy Section */}
            <section className="relative w-full py-16 sm:py-24 lg:py-32 px-4" id="security" data-animate>
                <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 delay-400 ${isVisible.security ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                        Security & <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">Privacy</span>
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12 sm:mb-16 px-4">
                        Enterprise-grade security with complete data privacy. Your information stays secure and confidential at all times.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {[
                            { title: "Enterprise Ready", icon: "🏢", description: "Built for enterprise-scale deployments" },
                            { title: "EU Privacy", icon: "🔒", description: "GDPR compliant and privacy-focused" },
                            { title: "SOC 2", icon: "🛡️", description: "SOC 2 Type II certified security" }
                        ].map((item, index) => (
                            <div key={index} className="p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-300 group transform hover:scale-105" style={{
                                animationDelay: `${index * 200}ms`
                            }}>
                                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 text-sm sm:text-base">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="relative w-full py-16 sm:py-24 lg:py-32 px-4 bg-gradient-to-br from-purple-900/30 to-blue-900/30" id="cta" data-animate>
                <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 delay-200 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
                        Start Building Custom <span className="bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">AI Agents</span> to Automate Processes
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
                        Join thousands of organizations already using AI agents to transform their workflows and boost productivity.
                    </p>
                    <button className="px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl sm:rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 text-base sm:text-lg animate-pulse">
                        <Link href="/contact">Contact Us</Link>
                    </button>
                </div>
            </section>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slide-up {
                    from {
                        opacity: 0;
                        transform: translateY(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }

                .animate-slide-up {
                    animation: slide-up 1s ease-out;
                }

                .animate-slide-up.delay-200 {
                    animation-delay: 0.2s;
                    animation-fill-mode: both;
                    opacity: 0;
                }

                .animate-slide-up.delay-400 {
                    animation-delay: 0.4s;
                    animation-fill-mode: both;
                    opacity: 0;
                }

                .animate-slide-up.delay-600 {
                    animation-delay: 0.6s;
                    animation-fill-mode: both;
                    opacity: 0;
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }

                /* Responsive text scaling */
                @media (max-width: 640px) {
                    .text-responsive-hero {
                        font-size: clamp(1.875rem, 8vw, 3rem);
                    }
                    
                    .text-responsive-section {
                        font-size: clamp(1.5rem, 6vw, 2.25rem);
                    }
                }

                /* Custom scrollbar for webkit browsers */
                ::-webkit-scrollbar {
                    width: 8px;
                }

                ::-webkit-scrollbar-track {
                    background: #0f172a;
                }

                ::-webkit-scrollbar-thumb {
                    background: #475569;
                    border-radius: 4px;
                }

                ::-webkit-scrollbar-thumb:hover {
                    background: #64748b;
                }

                /* Mobile touch improvements */
                @media (max-width: 768px) {
                    .touch-target {
                        min-height: 44px;
                        min-width: 44px;
                    }
                    
                    /* Improve touch scrolling */
                    body {
                        -webkit-overflow-scrolling: touch;
                    }
                    
                    /* Prevent horizontal scroll on mobile */
                    html, body {
                        overflow-x: hidden;
                    }
                }

                /* High contrast mode support */
                @media (prefers-contrast: high) {
                    .bg-slate-800\/30 {
                        background-color: rgba(30, 41, 59, 0.8);
                    }
                    
                    .border-slate-700\/50 {
                        border-color: rgba(51, 65, 85, 0.8);
                    }
                }

                /* Reduced motion support */
                @media (prefers-reduced-motion: reduce) {
                    * {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                    
                    .animate-pulse,
                    .animate-bounce,
                    .animate-float {
                        animation: none;
                    }
                }

                /* Focus styles for accessibility */
                button:focus,
                [role="button"]:focus {
                    outline: 2px solid #8b5cf6;
                    outline-offset: 2px;
                }

                /* Loading states */
                .loading-shimmer {
                    background: linear-gradient(90deg, 
                        rgba(148, 163, 184, 0.1) 25%, 
                        rgba(148, 163, 184, 0.2) 50%, 
                        rgba(148, 163, 184, 0.1) 75%);
                    background-size: 200% 100%;
                    animation: shimmer 1.5s infinite;
                }

                @keyframes shimmer {
                    0% {
                        background-position: -200% 0;
                    }
                    100% {
                        background-position: 200% 0;
                    }
                }

                /* Print styles */
                @media print {
                    .no-print {
                        display: none;
                    }
                    
                    body {
                        background: white;
                        color: black;
                    }
                    
                    .bg-gradient-to-r,
                    .bg-gradient-to-br {
                        background: white;
                    }
                }
            `}</style>
            <Footer />
        </main>
    );
}