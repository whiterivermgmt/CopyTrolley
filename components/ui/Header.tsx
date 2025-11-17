"use client";

import React, { useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SideMenu from "./SideMenu";
import Contactbutton from "./Contactbutton";
import { AlignLeft, Phone, Calendar } from "lucide-react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="w-full sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-md transition-all duration-300">

        {/* Desktop Header */}
        <Container fullWidth className="hidden md:flex items-end justify-between py-4 h-[120px] lg:px-16">
          
          {/* Left side CTA + Menu */}
          <div className="flex flex-col justify-end items-start">
            <div
              className="flex items-center gap-2 text-red-800 font-bold text-lg cursor-pointer mb-1"
              onClick={() => window.location.href="#contact"}
            >
              <Calendar className="w-5 h-5 text-red-800" />
              Request Appointment
            </div>
            <div className="flex space-x-6">
              <HeaderMenu side="left" />
            </div>
          </div>

          {/* Center Logo */}
          <div className="flex justify-center h-full">
            <Logo />
          </div>

          {/* Right side CTA + Menu */}
          <div className="flex flex-col justify-end items-end">
            <div
              className="flex items-center gap-2 text-red-800 font-bold text-lg cursor-pointer mb-1"
              onClick={() => window.location.href="tel:8125831318"}
            >
              <Phone className="w-5 h-5 text-red-800" />
              Call Today
            </div>
            <div className="flex space-x-6">
              <HeaderMenu side="right" />
            </div>
          </div>

        </Container>

        {/* Mobile Header */}
        <div className="flex md:hidden w-full justify-between items-center px-4 py-4 h-[75px] relative">
          
          {/* Logo left */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* Hamburger centered */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer z-50"
            onClick={() => setIsSidebarOpen(true)}
          >
            <AlignLeft className="w-6 h-6" />
          </div>

          {/* Contact button right */}
          <div className="shrink-0">
            <Contactbutton />
          </div>
        </div>

      </header>

      {/* Side Menu */}
      <SideMenu isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Header;
