import React from "react";
import { Button } from "../button";

const team = [
    { name: "Alice Johnson", role: "CEO", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Bob Smith", role: "CTO", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Carol Lee", role: "Lead Designer", img: "https://randomuser.me/api/portraits/women/68.jpg" },
];

const stats = [
    { label: "Years in Business", value: "5+" },
    { label: "Projects Delivered", value: "120+" },
    { label: "Team Members", value: "20+" },
    { label: "Global Clients", value: "15+" },
];

const AboutUs = () => {
    return (
        <div className="relative min-h-screen w-full bg-black text-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center pt-24 pb-10 px-4 text-center relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">On a path past human AI</h1>
                <p className="max-w-xl text-lg md:text-xl text-neutral-300 mb-6">
                    We are a passionate team building the future of AI-driven solutions for businesses and creators.
                </p>
                <Button className="px-8 py-2 text-base">Learn More</Button>
            </section>

            {/* Company Story / Mission */}
            <section className="py-12 px-4 max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Mission</h2>
                <p className="text-neutral-300 text-base md:text-lg">
                    Our mission is to empower people and organizations to achieve more with the help of advanced, ethical, and accessible AI technology. We believe in innovation, transparency, and making a positive impact on the world.
                </p>
            </section>

            {/* Team Section */}
            <section className="py-12 px-4 max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Meet Our Team</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {team.map((member) => (
                        <div key={member.name} className="flex flex-col items-center bg-black/60 rounded-2xl p-6 shadow-lg w-60 border border-white/10">
                            <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-blue-500" />
                            <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                            <p className="text-neutral-400 text-sm">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats / Highlights Section */}
            <section className="py-12 px-4 max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Our Impact</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat) => (
                        <div key={stat.label} className="bg-black/60 rounded-2xl p-6 shadow-lg border border-white/10">
                            <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                            <div className="text-neutral-300 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Large Visual Section */}
            <section className="w-full flex justify-center items-center py-12 px-4">
                <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                    alt="Team working"
                    className="rounded-2xl shadow-2xl w-full max-w-4xl object-cover"
                />
            </section>

            {/* Footer Section */}
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
                </div>
            </footer>
        </div>
    );
};

export default AboutUs;