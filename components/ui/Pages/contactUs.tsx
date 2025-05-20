import React from "react";
import { Button } from "../button";
import { Input } from "../input";
import { Textarea } from "../textarea";
import { Label } from "../label";
import { Spotlight } from "../spotlight";
import { HoverEffect } from "../card-hover-effect";

const infoCards = [
    {
        icon: <span className="text-xl">💬</span>,
        title: "Talk to Sales",
        description:
            "Meet our client team for an introduction to the solutions we provide.",
        button: { text: "Book a call", href: "#" },
    },
    {
        icon: <span className="text-xl">📣</span>,
        title: "Marketing & Press",
        description:
            "Talk to us to setup a strategic campaign, marketing, or if you just need our logo.",
        button: { text: "Reach out", href: "#" },
    },
    {
        icon: <span className="text-xl">💼</span>,
        title: "Career",
        description:
            "Talk to the people team, see what roles are live and how we can work together.",
        button: { text: "Talk with us", href: "#" },
    },
];

const ContactUs = () => {
    return (
        <div className="relative min-h-screen w-full bg-black text-white overflow-x-hidden">
            {/* Spotlight background */}
            <Spotlight className="hidden md:block absolute -top-40 left-1/2 -translate-x-1/2 w-[120vw] h-[40vh] opacity-40" fill="#fff" />

            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center pt-24 pb-12 px-4 text-center relative z-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Let's explore how<br />Beam can work for you</h1>
                <p className="max-w-xl text-base md:text-lg text-neutral-300 mb-6">
                    Tell us a little about yourself to turn the best ideas we'll contact you with a best solution and more. You can also directly book a meeting here.
                </p>
                <Button className="px-8 py-2 text-base">Contact Us</Button>
                <div className="mt-12 w-full max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-900/40 to-black/80 h-64 flex items-center justify-center">
                    {/* Placeholder for hero image/gradient */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-700/40 to-black/80 blur-2xl" />
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="flex flex-col items-center justify-center py-16 px-4">
                <div className="max-w-lg w-full bg-black/70 rounded-2xl shadow-xl p-8 border border-white/10">
                    <form className="space-y-6">
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" placeholder="Your name" className="mt-2" required />
                        </div>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" placeholder="you@email.com" className="mt-2" required />
                        </div>
                        <div>
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" name="message" placeholder="How can we help you?" className="mt-2" required />
                        </div>
                        <Button type="submit" className="w-full mt-4">Send Message</Button>
                    </form>
                </div>
            </section>

            {/* Info Cards Section */}
            <section className="py-16 px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Let's explore how<br />Beam can work for you</h2>
                <p className="max-w-xl mx-auto text-base md:text-lg text-neutral-300 text-center mb-10">
                    Tell us a little about yourself to turn the best ideas we'll contact you with a best solution and more. You can also directly book a meeting here.
                </p>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {infoCards.map((card, idx) => (
                            <div key={card.title} className="relative group rounded-3xl bg-gradient-to-br from-blue-900/40 to-black/80 p-6 shadow-lg border border-white/10 hover:border-blue-400 transition-all duration-200">
                                <div className="flex items-center text-3xl mb-4">{card.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                                <p className="text-neutral-300 mb-6">{card.description}</p>
                                <Button asChild className="w-full">
                                    <a href={card.button.href}>{card.button.text}</a>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
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
                    <div>
                        <form className="flex items-center gap-2">
                            <Input type="email" placeholder="Subscribe to our newsletter" className="bg-black/70 border-white/10 text-white placeholder:text-neutral-500" />
                            <Button type="submit" size="sm">Subscribe</Button>
                        </form>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ContactUs;