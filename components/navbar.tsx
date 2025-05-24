
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
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
  const { scrollYProgress } = useScroll();

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Handle scroll visibility
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
          setMobileMenuOpen(false); // Close mobile menu when scrolling down
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
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  const menuItems = [
    {
      title: "AI Agents",
      items: [
        { name: "View All Agents", href: "/hobby" },
        { name: "About Agents", href: "/individual" }
      ]
    },
    {
      title: "Solutions",
      items: [
        { name: "General Problem Solver", href: "/web-dev" },
        { name: "Data Extractor", href: "/interface-design" },
        { name: "Customer Service", href: "/seo" },
        { name: "E-Commerce", href: "/seo" },
        { name: "Sales", href: "/seo" },
        { name: "Finance & Accounting", href: "/seo" },
        { name: "Human Resources", href: "/seo" },
        { name: "Others", href: "/seo" }
      ]
    },
    {
      title: "About",
      items: [
        { name: "About Us", href: "/ui/Pages/aboutUs" }
      ]
    },
    {
      title: "Contact",
      items: [
        { name: "Contact Us", href: "/ui/Pages/contactUs" }
      ]
    }
  ];

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
          <motion.div
            className="flex items-center flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={isMobile ? 80 : 100}
              height={isMobile ? 80 : 100}
              className="w-auto h-8 sm:h-10 lg:h-12"
            />
          </motion.div>

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

          {/* Desktop Sign Up Button */}
          {!isMobile && (
            <motion.div
              className="hidden md:flex items-center flex-shrink-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <motion.button
                className="relative inline-flex h-10 lg:h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 lg:px-8 py-1 text-sm lg:text-base font-medium text-white backdrop-blur-3xl hover:bg-gray-900 transition-colors duration-200">
                  Sign Up
                </span>
              </motion.button>
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobile && mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/10 mobile-menu-container max-h-[50vh] overflow-y-auto"
            >
              <div className="px-4 py-4 space-y-4">
                {menuItems.map((menuItem, index) => (
                  <motion.div
                    key={menuItem.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="space-y-2"
                  >
                    <h3 className="text-white font-semibold text-base border-b border-white/20 pb-1">
                      {menuItem.title}
                    </h3>
                    <div className="space-y-1 ml-3">
                      {menuItem.items.map((item, itemIndex) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.1) + (itemIndex * 0.05), duration: 0.2 }}
                        >
                          <Link
                            href={item.href}
                            className="block text-gray-300 hover:text-white py-1.5 px-2 rounded-md hover:bg-white/10 transition-colors duration-200 text-sm"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}

                {/* Mobile Sign Up Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="pt-3 border-t border-white/20"
                >
                  <motion.button
                    className="w-full relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-purple-500"
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black text-sm font-medium text-white backdrop-blur-3xl">
                      Sign Up
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}