'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Linkedin,
    Target,
    Twitter,
    Youtube,
    Instagram
} from 'lucide-react';
import { useRouter } from "next/navigation";

const Footer = () => {
    const router = useRouter();
    const platformLinks = [
        { name: 'AI Agents', href: '/aboutMercatoAIAgent' },
        // { name: 'Agentic Workflows', href: '/agenticWorkflows' },
        { name: 'Database, Memory & Rag', href: '/databases' }
    ];

    const solutionLinks = [
        { name: 'Customer Service', href: '/CustomerService' },
        { name: "E-Commerce", href: "/E-Commerce" },
        { name: "Human Resources", href: "/HumanResources" },
        { name: "Healthcare", href: "/healthcare" },
        { name: "Legal", href: "/legal" },
        { name: "Custom AI Solutions", href: "/customMercatoAiAgent" }
    ];

    const companyLinks = [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Request Demo', href: '/contact' }
    ];

    const legalLinks = [
        { name: 'Privacy Policy', href: '/PrivacyPolicy' },
        { name: 'Security', href: '/SecurityPolicy' },
        { name: 'Terms of Use', href: '/TermsOfUse' },
        { name: 'Data Protection', href: '/databases' },
        // { name: 'Imprint', href: '#' }
    ];

    const socialLinks = [
        { name: 'LinkedIn', href: 'https://in.linkedin.com/company/mercato-ai-agency', icon: Linkedin },
        { name: 'Twitter', href: '#', icon: Twitter },
        { name: 'YouTube', href: '#', icon: Youtube },
        { name: 'Instagram', href: 'https://www.instagram.com/mercato.agency/', icon: Instagram }
    ];

    return (
        <footer className="bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Header Section with Logo and Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-16 pb-8"
                >
                    {/* Logo */}
                    <div className="mb-6 sm:mb-0">
                        <img 
                            src="/logo/logo.png" 
                            alt="Mercato Logo" 
                            className="h-12 w-auto" 
                        />
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, index) => {
                            const IconComponent = social.icon;
                            return (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-600 transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    <IconComponent className="w-5 h-5" />
                                </motion.a>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Main Footer Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-16">
                    {/* Platform Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-6 text-white">Platform</h4>
                        <ul className="space-y-3">
                            {platformLinks.map((link, index)    => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Solutions Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-6 text-white">Solutions</h4>
                        <ul className="space-y-3">
                            {solutionLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
                        <ul className="space-y-3">
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Legal Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-6 text-white">Legal</h4>
                        <ul className="space-y-3">
                            {legalLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Copyright Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center pt-8 border-t border-gray-700"
                >
                    <p className="text-gray-400 text-sm">
                        © Mercato Agency. All rights reserved 2025
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;