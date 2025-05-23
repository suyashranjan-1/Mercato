
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Link } from "react-router-dom";

export function NavbarDemo() {
  return <FloatingNavbar className="" />;
}

function FloatingNavbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true); // Start visible at top

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // At the top of the page, always show navbar
        setVisible(true);
      } else {
        // When scrolling up, show navbar
        // When scrolling down, hide navbar
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn("fixed top-0 w-full z-50", className)}
      >
        <div className="flex items-center justify-between bg-transparent backdrop-blur-md px-6 py-2">
          {/* Logo on the left */}
          <div className="flex items-center px-2">
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
          </div>

          {/* Menu items in the middle */}
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Ai Agents">
              <div className="flex flex-col space-y-4 text-sm bg-black/90 backdrop-blur-sm rounded-lg p-4 text-white">
                <HoveredLink href="/hobby">View All Agents</HoveredLink>
                <HoveredLink href="/individual">About Agents</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Solutions">
              <div className="flex flex-col space-y-4 text-sm bg-black/90 backdrop-blur-sm rounded-lg p-4 text-white">
                <HoveredLink href="/web-dev">General Problem Solver</HoveredLink>
                <HoveredLink href="/interface-design">Data Extractor</HoveredLink>
                <HoveredLink href="/seo">Customer Service</HoveredLink>
                <HoveredLink href="/seo">E-Commerce</HoveredLink>
                <HoveredLink href="/seo">Sales</HoveredLink>
                <HoveredLink href="/seo">Finance & Accounting</HoveredLink>
                <HoveredLink href="/seo">Human Resources</HoveredLink>
                <HoveredLink href="/seo">Others</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="About">
              <div className="flex flex-col space-y-4 text-sm bg-black/90 backdrop-blur-sm rounded-lg p-4 text-white">
                <HoveredLink href="/ui/Pages/aboutUs">About Us</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Contact">
              <div className="flex flex-col space-y-4 text-sm bg-black/90 backdrop-blur-sm rounded-lg p-4 text-white">
                <HoveredLink href="/ui/Pages/contactUs">Contact Us</HoveredLink>
              </div>
            </MenuItem>
          </Menu>

          {/* Signup button on the right */}
          <div className="ml-4 px-2">
            <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Sign Up
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}