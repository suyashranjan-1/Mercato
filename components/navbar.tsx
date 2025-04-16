"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "./ui/navbar-menu"; 

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item="Platform">
        <div className="grid grid-cols-1 gap-4">
          <ProductItem
            title="Agent Studio"
            description="This is a really cool studio"
            href="/product"
            src="https://via.placeholder.com/140x70"
          />
          <ProductItem
            title="Autonomous Engine"
            description="Unlock your potential."
            href="/next"
            src="https://via.placeholder.com/140x70"
          />
          <ProductItem
            title="Knowledge Base"
            description="Unlock your potential."
            href="/next"
            src="https://via.placeholder.com/140x70"
          />
        </div>
      </MenuItem>

      <MenuItem setActive={setActive} active={active} item="Solutions">
        <div className="flex flex-col space-y-2">
          <HoveredLink href="/docs">General Problem Solver</HoveredLink>
          <HoveredLink href="/tutorials">Data Extractor</HoveredLink>
          <HoveredLink href="/tutorials">Customer Service</HoveredLink>
          <HoveredLink href="/tutorials">E-Commerce</HoveredLink>
          <HoveredLink href="/tutorials">Sales</HoveredLink>
          <HoveredLink href="/tutorials">Finance & Accounting</HoveredLink>
          <HoveredLink href="/tutorials">Human Resources</HoveredLink>
          <HoveredLink href="/tutorials">Others</HoveredLink>
        </div>
      </MenuItem>

      <MenuItem setActive={setActive} active={active} item="Products">
      <div className="flex flex-col space-y-2">
          <HoveredLink href="/docs">Instagram</HoveredLink>
          <HoveredLink href="/tutorials">Whatsapp</HoveredLink>
          <HoveredLink href="/tutorials">Messenger</HoveredLink>
          <HoveredLink href="/tutorials">TikTok</HoveredLink>
        </div>
      </MenuItem>

      <MenuItem setActive={setActive} active={active} item="Resouces">
      <div className="flex flex-col space-y-2">
          <HoveredLink href="/docs">Resources</HoveredLink>
          
        </div>
      </MenuItem>

      <MenuItem setActive={setActive} active={active} item="About">
      <div className="flex flex-col space-y-2">
          <HoveredLink href="/docs">About Us</HoveredLink>
          <HoveredLink href="/tutorials">Carrer</HoveredLink>
          <HoveredLink href="/tutorials">Contact</HoveredLink>
        </div>
      </MenuItem>
    </Menu>
  );
};

export default Navbar;
