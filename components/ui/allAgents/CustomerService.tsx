import React from "react";
import { Button } from "../button";

const integrations = [
    // Example: { src: "/assets/salesforce.svg", alt: "Salesforce" }
    // Add your integration icons here
    { src: "/assets/salesforce.svg", alt: "Salesforce" },
    { src: "/assets/slack.svg", alt: "Slack" },
    { src: "/assets/zoom.svg", alt: "Zoom" },
    // ...more
];

const agentTasks = [
    "Conversational AI to quickly resolve queries",
    "Automated ticket routing & escalation",
    "Order status, returns, and refund processing",
    "FAQ and knowledge base support",
    "Reviewing and validating product reviews",
    "Help in software demos",
];

const features = [
    {
        title: "Customer Feedback Processing",
        desc: "Automatically analyze and categorize customer feedback for actionable insights.",
        icon: "📝",
    },
    {
        title: "FAQ Assistance",
        desc: "Instantly answer common customer questions using your knowledge base.",
        icon: "💡",
    },
    {
        title: "Exchange Coordination",
        desc: "Seamlessly manage product exchanges and returns with automated workflows.",
        icon: "🔄",
    },
    {
        title: "Omnichannel Customer Support",
        desc: "Provide consistent support across chat, email, and social platforms.",
        icon: "🌐",
    },
];

const scaleFeatures = [
    {
        title: "99%+ Resolved on 1st Contact",
        desc: "AI agents resolve most queries without human intervention.",
        icon: "✅",
    },
    {
        title: "Seamless Workflow Automations",
        desc: "Integrate with your tools to automate repetitive tasks.",
        icon: "⚙️",
    },
    {
        title: "<1 Min Task Escalation",
        desc: "Quickly escalate complex issues to human agents.",
        icon: "⏱️",
    },
];

const exploreAgents = [
    {
        title: "Data Extraction AI Agent",
        desc: "Extracts and organizes data from customer interactions and tickets.",
    },
    {
        title: "Email Triage AI Agent",
        desc: "Sorts and prioritizes incoming customer emails for faster response.",
    },
    {
        title: "Appointment Management AI Agent",
        desc: "Schedules and manages appointments with customers automatically.",
    },
    {
        title: "Interview Scheduler AI Agent",
        desc: "Coordinates interview times and reminders for candidates and staff.",
    },
];

const network = [
    { label: "Sales Order AI Agent" },
    { label: "Ticketing Support AI Agent" },
    { label: "Customer Support Representative" },
    { label: "Customer Success Manager" },
    { label: "Returns/Cancellations AI Agent" },
    { label: "Data Extraction AI Agent" },
    { label: "Customer Service AI Agent" },
];

const CustomerService = () => (
    <div className="bg-black text-white min-h-screen w-full overflow-x-hidden">
        {/* Navbar would be included at the app level */}
        {/* Hero Section */}
        <section className="pt-24 pb-10 px-4 text-center">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Service AI Agent</h1>
                <p className="text-neutral-300 mb-6">
                    The Customer Service AI Agent resolves customer queries, automates ticketing, and integrates with your favorite tools. Deliver exceptional support at scale with real-time analytics and seamless workflow automation.
                </p>
                <Button className="px-8 py-2 text-base">Get Started</Button>
            </div>
            {/* Main Card */}
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 max-w-5xl mx-auto">
                <div className="bg-black/80 rounded-2xl p-6 flex-1 min-w-[260px] shadow-lg border border-white/10">
                    <h3 className="text-lg font-semibold mb-4">Agent Tasks</h3>
                    <ul className="text-neutral-300 text-left space-y-2">
                        {agentTasks.map((task) => (
                            <li key={task} className="flex items-center gap-2">
                                <span className="text-blue-400">•</span> {task}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-900/60 to-black/80 rounded-2xl p-8 flex-1 min-w-[260px] flex flex-col items-center justify-center shadow-lg border border-white/10">
                    <img src="/assets/ai-customer-service.png" alt="AI Agent" className="w-40 h-40 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Customer Service AI Agent</h3>
                    <div className="flex gap-4 mt-4">
                        <div>
                            <div className="text-2xl font-bold text-blue-400">4.68</div>
                            <div className="text-xs text-neutral-400">Avg. Rating</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-blue-400">99%</div>
                            <div className="text-xs text-neutral-400">Resolution Rate</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
            <div className="max-w-2xl mx-auto text-center mb-10">
                <span className="block text-xs text-blue-400 mb-2">Features</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">From First Query to Full Resolution in Minutes</h2>
                <p className="text-neutral-300">
                    The AI agent is capable of resolving queries, routing tickets, and providing analytics in real time. Integrate with your existing tools for a seamless support experience.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {features.map((f) => (
                    <div key={f.title} className="bg-black/80 rounded-2xl p-6 shadow-lg border border-white/10">
                        <div className="text-3xl mb-4">{f.icon}</div>
                        <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                        <p className="text-neutral-300 text-sm">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Scale Section */}
        <section className="py-16 px-4">
            <div className="max-w-2xl mx-auto text-center mb-10">
                <span className="block text-xs text-blue-400 mb-2">Benefits</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Deliver Exceptional Customer Service at Scale</h2>
                <p className="text-neutral-300">
                    Automate repetitive tasks, resolve queries instantly, and escalate only the most complex issues to your human team. Scale your support without scaling your costs.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {scaleFeatures.map((f) => (
                    <div key={f.title} className="bg-black/80 rounded-2xl p-6 shadow-lg border border-white/10">
                        <div className="text-3xl mb-4">{f.icon}</div>
                        <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                        <p className="text-neutral-300 text-sm">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Integrations */}
        <section className="py-16 px-4">
            <div className="max-w-2xl mx-auto text-center mb-10">
                <span className="block text-xs text-blue-400 mb-2">Integrations</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Integrate with Leading Customer Service Tools</h2>
                <p className="text-neutral-300">
                    Get your Customer Service AI Agent up and running quickly by connecting to your favorite tools. Integrate with CRMs, ticketing systems, chat platforms, and more.
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {integrations.map((icon) => (
                    <img key={icon.alt} src={icon.src} alt={icon.alt} className="h-10 w-10 object-contain" />
                ))}
            </div>
        </section>

        {/* Collaborative AI Network */}
        <section className="py-16 px-4">
            <div className="max-w-2xl mx-auto text-center mb-10">
                <span className="block text-xs text-blue-400 mb-2">Multi-Agent</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Collaborative AI for Optimized Service</h2>
                <p className="text-neutral-300">
                    This AI agent doesn't work alone! It collaborates with other specialized agents and your human support team for the best results.
                </p>
            </div>
            {/* Example network graph (replace with your own SVG/visual if available) */}
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                {network.map((n, i) => (
                    <div key={n.label} className="bg-black/80 rounded-full px-6 py-3 shadow-lg border border-white/10 text-sm font-semibold text-white">
                        {n.label}
                    </div>
                ))}
            </div>
        </section>

        {/* Explore Other Agents */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-900/60 to-black/80">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <img src="/assets/ai-explore.png" alt="Explore AI Agents" className="w-80 h-80 object-contain" />
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {exploreAgents.map((agent) => (
                        <div key={agent.title} className="bg-black/70 rounded-2xl p-6 shadow-lg border border-white/10">
                            <h3 className="text-lg font-semibold mb-2">{agent.title}</h3>
                            <p className="text-neutral-300 text-sm">{agent.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-black/90 border-t border-white/10 py-10 mt-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-neutral-400 text-sm">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-white">© Beam</span>
                    <span>{new Date().getFullYear()}</span>
                </div>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-white transition">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition">Terms of Service</a>
                </div>
                <div>
                    <form className="flex items-center gap-2">
                        <input type="email" placeholder="Subscribe to our newsletter" className="bg-black/70 border-white/10 text-white placeholder:text-neutral-500 rounded px-3 py-2" />
                        <Button type="submit" size="sm">Subscribe</Button>
                    </form>
                </div>
            </div>
        </footer>
    </div>
);

export default CustomerService;
