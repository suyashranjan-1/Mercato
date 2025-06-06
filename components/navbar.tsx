"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function NavbarDemo() {
  return <FloatingNavbar className="" />;
}

function FloatingNavbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();

  // Responsive check for mobile/desktop
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Hide/show navbar on scroll and close mobile menu when scrolling down
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
          setMobileMenuOpen(false);
        }
      }
    }
  });

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (mobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
        setExpandedSection(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  // Menu structure
  const menuItems = [
    {
      title: "AI Agents",
      items: [
        { name: "View All Agents", href: "/AllAgents" },
        { name: "About Agents", href: "/aboutMercatoAIAgent" }
      ]
    },
    {
      title: "Solutions",
      items: [
        { name: "General Problem Solver", href: "/GeneralProblemSolver" },
        { name: "Data Extraction", href: "/DataExtraction" },
        { name: "Customer Service", href: "/CustomerService" },
        { name: "E-Commerce", href: "/E-Commerce" },
        { name: "Sales", href: "/Sales" },
        { name: "Human Resources", href: "/HumanResources" },
        { name: "Finance & Accounting", href: "/financeAndAccounting" },
        { name: "Healthcare", href: "/healthcare" },
        { name: "Legal", href: "/legal" },
        { name: "Property Management", href: "/propertyManagements" },
        { name: "Insurance", href: "/Insurance" },
        { name: "Custom AI Agents", href: "/customMercatoAiAgent" }
      ]
    },
    // {
    //   title: "Social Media",
    //   items: [
    //     { name: "Instagram", href: "/social-media/instagram" },
    //     { name: "Facebook", href: "/social-media/facebook" },
    //     { name: "LinkedIn", href: "/social-media/linkedin" },
    //     { name: "Twitter (X)", href: "/social-media/twitter" },
    //     { name: "YouTube", href: "/social-media/youtube" },
    //     { name: "TikTok", href: "/social-media/tiktok" }
    //   ]
    // },
    {
      title: "About",
      items: [
        { name: "About Us", href: "/about" }
      ]
    },
    {
      title: "Contact",
      items: [
        { name: "Contact Us", href: "/contact" }
      ]
    }
  ];

  // Hamburger icon for mobile menu
  const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
    <div className="flex flex-col justify-center items-center w-6 h-6 cursor-pointer relative">
      <motion.span
        animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute w-6 h-0.5 bg-white"
      />
      <motion.span
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute w-6 h-0.5 bg-white"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute w-6 h-0.5 bg-white"
      />
    </div>
  );

  // Chevron icon for collapsible sections
  const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => (
    <motion.svg
      animate={{ rotate: isExpanded ? 180 : 0 }}
      transition={{ duration: 0.2 }}
      className="w-4 h-4 text-white/70"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </motion.svg>
  );

  const toggleSection = (sectionTitle: string) => {
    setExpandedSection(expandedSection === sectionTitle ? null : sectionTitle);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className={cn("fixed top-0 w-full z-50", className)}
      >
        {/* Main Navbar */}
        <div className="flex items-center justify-between bg-black/20 backdrop-blur-lg border-b border-white/10 px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          {/* Logo */}

          <Link href="/" passHref>
  <motion.div
    className="flex items-center flex-shrink-0 cursor-pointer"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <Image
      src="/logo/logo.png"
      alt="Logo"
      width={isMobile ? 80 : 100}
      height={isMobile ? 80 : 100}
      className="w-auto h-8 sm:h-10 lg:h-12"
    />
  </motion.div>
</Link>

          {/* Desktop Menu */}
          {!isMobile && (
            <div className="hidden md:flex items-center justify-center flex-1 px-8">
              <Menu setActive={setActive}>
                {menuItems.map((menuItem, index) => (
                  <motion.div
                    key={menuItem.title}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <MenuItem setActive={setActive} active={active} item={menuItem.title}>
                      <motion.div
                        className="flex flex-col space-y-3 text-sm bg-black/95 backdrop-blur-lg rounded-xl p-6 text-white border border-white/10 shadow-2xl"
                        initial={{ opacity: 0, scale: 0.9, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        {menuItem.items.map((item, itemIndex) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: itemIndex * 0.05, duration: 0.2 }}
                          >
                            <HoveredLink href={item.href}>{item.name}</HoveredLink>
                          </motion.div>
                        ))}
                      </motion.div>
                    </MenuItem>
                  </motion.div>
                ))}
              </Menu>
            </div>
          )}

          {/* Desktop Login Button */}
          {!isMobile && (
            <motion.div
              className="hidden md:flex items-center gap-3 flex-shrink-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <Link
                href="/LoginSignUp"
                className="relative inline-flex h-10 lg:h-11 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-2 focus:ring-offset-transparent"
              >
                <motion.span
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 lg:px-7 py-1 text-sm lg:text-base font-medium text-white backdrop-blur-3xl hover:bg-gray-900/80 transition-all duration-300">
                  Login
                </span>
              </Link>
            </motion.div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <motion.button
              className="md:hidden p-2 mobile-menu-container"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <HamburgerIcon isOpen={mobileMenuOpen} />
            </motion.button>
          )}
        </div>

        {/* Mobile Menu with Foldable Sections */}
        <AnimatePresence>
          {isMobile && mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/10 mobile-menu-container max-h-[70vh] overflow-y-auto"
            >
              <div className="px-4 py-4 space-y-2">
                {menuItems.map((menuItem, index) => (
                  <motion.div
                    key={menuItem.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="border-b border-white/10 last:border-b-0"
                  >
                    {/* Foldable Section Header */}
                    <motion.button
                      className="w-full flex items-center justify-between py-3 px-2 text-white font-medium text-left hover:bg-white/5 transition-colors duration-200"
                      onClick={() => toggleSection(menuItem.title)}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-base">{menuItem.title}</span>
                      <ChevronIcon isExpanded={expandedSection === menuItem.title} />
                    </motion.button>

                    {/* Collapsible Content */}
                    <AnimatePresence>
                      {expandedSection === menuItem.title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-3 pl-4 space-y-1">
                            {menuItem.items.map((item, itemIndex) => (
                              <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: itemIndex * 0.05, duration: 0.2 }}
                              >
                                <Link
                                  href={item.href}
                                  className="block text-gray-300 hover:text-white py-2 px-3 rounded-md hover:bg-white/10 transition-colors duration-200 text-sm"
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setExpandedSection(null);
                                  }}
                                >
                                  {item.name}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                {/* Mobile Auth Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="pt-4 mt-4 border-t border-white/20 space-y-3"
                >
                  {/* Login Button - Primary */}
                  <Link
                    href="/LoginSignUp"
                    className="w-full relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-purple-400/50"
                  >
                    <motion.span
                      whileTap={{ scale: 0.97 }}
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                    />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black text-base font-medium text-white backdrop-blur-3xl">
                      Login
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}