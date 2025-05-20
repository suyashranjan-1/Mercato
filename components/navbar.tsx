"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Link } from "react-router-dom";

export function NavbarDemo() {
  return <Navbar className="top-2" />;
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-0 w-full z-50", className)}>
      <div className="flex items-center justify-between bg-transparent px-6 py-2 border-b border-white/[0.2] backdrop-blur-lg">
        {/* Logo on the left */}
        <div className="flex items-center px-2">
          {/* <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-8 w-8 rounded-full" 
          /> */}
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </div>

        {/* Menu items in the middle */}
        <Menu setActive={setActive} >


          {/* <MenuItem setActive={setActive} active={active} item="Ai Agents">
            <div className="text-sm grid grid-cols-2 gap-10 p-4 backdrop-blur-sm">
              <ProductItem
                title="Agent Studio"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Autonomous Engine"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Knowledge Base"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
            </div>
          </MenuItem> */}

          <MenuItem setActive={setActive} active={active} item="Ai Agents">
            <div className="flex flex-col space-y-4 text-sm bg-transparent">
              <HoveredLink href="/hobby">View All Agents</HoveredLink>
              <HoveredLink href="/individual">About Agents</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Solutions">
            <div className="flex flex-col space-y-4 text-sm bg-transparent">
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
            <div className="flex flex-col space-y-4 text-sm bg-transparent">
              <HoveredLink href="/ui/Pages/aboutUs">About Us</HoveredLink>
            </div>
          </MenuItem>


          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-4 text-sm bg-transparent">
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
    </div>
  );
}
