"use client";
import { useState } from "react";
import { NavbarDemo } from "@/components/navbar";

export default function AIAgentPage() {
    const [activeFeature, setActiveFeature] = useState(0);

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

    return (
        <main className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
            <NavbarDemo />
            {/* Hero Section */}
            <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-32">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center px-6 py-2 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300 hover:border-slate-600/50 transition-all duration-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                        AI Agents
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight">
                        AI Agents: General Problem<br />
                        <span className="bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
                            Solvers for your Organization
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
                        Deploy intelligent AI agents that can understand, analyze, and solve complex problems autonomously.
                        <span className="text-white font-medium"> Transform your workflow with AI that thinks and acts like your best employee.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
                            Get Started
                        </button>
                        <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white font-semibold rounded-2xl hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                            Watch Demo
                        </button>
                    </div>
                </div>

                {/* Hero Image Placeholder */}
                <div className="w-full max-w-6xl mx-auto mt-8 relative z-10">
                    <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl shadow-black/20 border border-slate-800/50 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl">
                                    🤖
                                </div>
                                <h3 className="text-2xl font-bold mb-2">AI Agent Interface</h3>
                                <p className="text-slate-400">Intelligently Automate Anything you can Imagine</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features Section */}
            <section className="relative w-full py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-6 py-2 mb-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-sm text-slate-300">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                            Core Capabilities
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto mb-8 leading-tight">
                            How <span className="bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">AI Agents</span> solve complex problems
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Our AI agents don't just execute tasks—they understand context, make decisions, and adapt to solve problems autonomously.
                        </p>
                    </div>

                    {/* Interactive Feature Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-8 rounded-3xl border backdrop-blur-sm transition-all duration-300 cursor-pointer group ${activeFeature === index
                                    ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/50'
                                    : 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50'
                                    }`}
                                onClick={() => setActiveFeature(index)}
                            >
                                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                    {feature.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {feature.benefits.map((benefit, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-sm bg-slate-700/50 rounded-full text-slate-300"
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
            <section className="relative w-full py-32 px-4 bg-gradient-to-r from-slate-900/50 to-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                            Integrations, Tools & <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Triggers</span>
                        </h2>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Connect with your existing tools and platforms. Our AI agents work seamlessly with your current workflow.
                        </p>
                    </div>

                    <div className="flex justify-center mb-16">
                        <div className="flex flex-wrap gap-6 justify-center">
                            {integrations.map((integration, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-3 px-6 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-slate-600/50 hover:bg-slate-800/70 transition-all duration-300 group"
                                >
                                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                        {integration.icon}
                                    </span>
                                    <span className="text-white font-medium">
                                        {integration.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Agent Character Section */}
            <section className="relative w-full py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                            Agent <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Character</span>
                        </h2>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
                            Customize your AI agent's personality and capabilities to match your specific needs and workflow requirements.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center mb-8">
                            {agentCapabilities.map((capability, index) => (
                                <button
                                    key={index}
                                    className="px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl text-white font-medium hover:border-purple-400/50 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300"
                                >
                                    {capability}
                                </button>
                            ))}
                        </div>

                        <div className="inline-flex items-center px-6 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 text-sm">
                            INSTRUCTIONS: Agent is multilingual and can solve both problems
                        </div>
                    </div>
                </div>
            </section>

            {/* Templates Section */}
            <section className="relative w-full py-32 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                        Use Templates or Create in <span className="bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">Seconds</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-16">
                        Start with proven templates or build custom agents from scratch. Our intuitive interface makes it easy to deploy AI agents in minutes.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {[
                            { title: "Quick Setups", icon: "⚡", description: "Pre-built templates for common use cases" },
                            { title: "Easy Builder", icon: "🛠️", description: "Drag-and-drop agent configuration" },
                            { title: "Immediate Results", icon: "🚀", description: "Deploy and see results instantly" }
                        ].map((item, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-300 group">
                                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Agent Section */}
            <section className="relative w-full py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                            Learning <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">Agent</span>
                        </h2>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Our AI agents continuously learn from interactions, improving their performance and adapting to your specific business needs over time.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Learns Feedback", icon: "📈", description: "Improves responses based on user feedback" },
                            { title: "Adapts Over Time", icon: "🔄", description: "Evolves to match your workflow patterns" },
                            { title: "Gets Smarter", icon: "🧠", description: "Becomes more efficient with each interaction" }
                        ].map((item, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-300 group">
                                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Human in the Loop Section */}
            <section className="relative w-full py-32 px-4 bg-gradient-to-r from-slate-900/50 to-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                            Human in the <span className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">Loop</span>
                        </h2>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            The perfect balance of AI automation and human oversight. Your team stays in control while AI handles the heavy lifting.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "AI Generation", icon: "🤖", description: "AI handles routine tasks automatically" },
                            { title: "Human Oversight", icon: "👥", description: "Human review for critical decisions" },
                            { title: "Collaborative AI", icon: "🤝", description: "Seamless human-AI collaboration" }
                        ].map((item, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-300 group">
                                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security & Privacy Section */}
            <section className="relative w-full py-32 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                        Security & <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">Privacy</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-16">
                        Enterprise-grade security with complete data privacy. Your information stays secure and confidential at all times.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Enterprise Ready", icon: "🏢", description: "Built for enterprise-scale deployments" },
                            { title: "EU Privacy", icon: "🔒", description: "GDPR compliant and privacy-focused" },
                            { title: "SOC 2", icon: "🛡️", description: "SOC 2 Type II certified security" }
                        ].map((item, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-300 group">
                                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="relative w-full py-32 px-4 bg-gradient-to-br from-purple-900/30 to-blue-900/30">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                        Start Building Custom <span className="bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">AI Agents</span> to Automate Processes
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
                        Join thousands of organizations already using AI agents to transform their workflows and boost productivity.
                    </p>
                    <button className="px-12 py-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 text-lg">
                        Get Started Today
                    </button>
                </div>
            </section>
        </main>
    );
}