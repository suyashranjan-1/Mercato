"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "./ui/navbar-menu"; 

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item="Products">
        <div className="grid grid-cols-1 gap-4">
          <ProductItem
            title="Awesome Product"
            description="This is a really cool product."
            href="/product"
            src="https://via.placeholder.com/140x70"
          />
          <ProductItem
            title="Next Level"
            description="Unlock your potential."
            href="/next"
            src="https://via.placeholder.com/140x70"
          />
        </div>
      </MenuItem>

      <MenuItem setActive={setActive} active={active} item="Resources">
        <div className="flex flex-col space-y-2">
          <HoveredLink href="/docs">Documentation</HoveredLink>
          <HoveredLink href="/tutorials">Tutorials</HoveredLink>
        </div>
      </MenuItem>

      <MenuItem setActive={setActive} active={active} item="About">
        <div className="text-sm text-neutral-700 dark:text-neutral-200">
          Learn more about our mission and vision.
        </div>
      </MenuItem>
    </Menu>
  );
};

export default Navbar;
