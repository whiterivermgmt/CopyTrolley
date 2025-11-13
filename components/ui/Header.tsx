"use client";

import React, { useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import Contactbutton from "./Contactbutton";
import SideMenu from "./SideMenu";
import { AlignLeft } from "lucide-react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <header className="w-full z-40 sticky top-0 backdrop-blur-md bg-white/70 shadow-md transition-all duration-300">
        <Container fullWidth className="flex items-center justify-between py-4 md:py-6 lg:px-16 relative">

          {/* Left: Logo */}
          <div className="flex items-center justify-start w-1/3 shrink-0">
            <Logo />
          </div>

          {/* Center: Hamburger on mobile, Desktop menu on md+ */}
          <div className="flex justify-center w-1/3 relative">
            {/* Mobile Hamburger */}
            <div
              className="md:hidden cursor-pointer hover:text-shop-orange transition-colors"
              onClick={openSidebar}
            >
              <AlignLeft className="w-6 h-6" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-center w-full max-w-[500px]">
              <HeaderMenu />
            </div>
          </div>

          {/* Right: Contact button */}
          <div className="flex items-center justify-end w-1/3 shrink-0">
            {/* Mobile smaller contact button */}
            <div className="md:hidden scale-90 ml-4">
              <Contactbutton />
            </div>

            {/* Desktop contact button */}
            <div className="hidden md:block">
              <Contactbutton />
            </div>
          </div>

        </Container>
      </header>

      {/* Side Menu */}
      <SideMenu isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Header;
