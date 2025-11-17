"use client";

import { headerData } from "@/Constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ChevronDown } from "lucide-react";
import DropdownMenu from "./DropdownMenu";

type HeaderMenuProps = {
  side?: "left" | "right";
};

const HeaderMenu: React.FC<HeaderMenuProps> = ({ side }) => {
  const pathName = usePathname();

  const filteredMenu = side
    ? headerData.filter((item) => item.side === side)
    : headerData;

  return (
    <nav className="hidden md:flex items-center gap-4 relative">
      {filteredMenu.map((item, index) => {
        const isActive = pathName === item.href;
        const hasSubmenu = !!item.submenu;

        return (
          <div key={item.title} className="relative group flex items-center">
            <Link
              href={item.href}
              className={`
                relative flex items-center gap-1 px-2 py-1 border-b-2 border-transparent
                hover:border-red-800 transition-colors duration-300
                text-black font-bold text-lg
              `}
            >
              <span className="whitespace-nowrap">{item.title}</span>
              {hasSubmenu && (
                <ChevronDown className="w-4 h-4 mt-0.5 text-red-800 transition-transform duration-300 group-hover:rotate-180" />
              )}
            </Link>

            {hasSubmenu && (
              <div className="absolute top-full left-0 w-screen z-50">
                <DropdownMenu parentIndex={index} menuTitle={item.title} />
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default HeaderMenu;
