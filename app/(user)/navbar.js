"use client";

import React, { useState } from "react";
import { GiStarShuriken } from "react-icons/gi";
import { PhoneCall, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Academy", path: "/Academy" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <nav className="w-full h-[90px] relative z-50 bg-linear-to-r from-[#fdf7ed] to-[#fbf1e0] flex items-center justify-between px-4 md:px-20 lg:px-30 border-b border-[#f0e3ce]">
      {/* Logo Section */} 
      <div className="flex justify-between items-center gap-10">
        <div className="flex items-center space-x-3 cursor-pointer">
          {/* Logo Icon */}
          <Image
            src="/logo/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="cursor-pointer"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, idx) => (
            <Link
              href={link.path}
              key={idx}
              className="flex items-center space-x-1.5 group"
            >
              <span className="text-[#132c52] font-medium text-[22px] group-hover:text-[#f26d21] transition-colors">
                {link.name}
              </span>
              <GiStarShuriken className="w-[14px] h-[14px] text-[#132c52]/60 group-hover:text-[#f26d21] stroke-[3.5]" />
            </Link>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 md:space-x-8 lg:space-x-10">
        {/* Contact Info */}
        <div className="hidden md:flex items-center space-x-5">
          <PhoneCall
            className="w-[35px] h-[35px] text-[#132c52] animate-ring"
            strokeWidth={2}
          />
          <div className="flex flex-col leading-tight">
            <span className="text-[#f26d21] text-[16px] font-semibold">
              Contact us?
            </span>
            <span className="text-[#132c52] text-[20px] font-semibold">
              +1 123 456 7890
            </span>
          </div>
        </div>

        {/* Appointment Button */}
        <button className="bg-[#f26d21] hover:bg-[#e05b10] text-white font-semibold text-[14px] md:text-[18px] py-2 px-4 md:py-3.5 md:px-7 rounded-xl md:rounded-2xl transition-colors shadow-md shadow-orange-500/20">
          Appointment
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="block lg:hidden text-[#132c52] p-1"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-[90px] left-0 w-full bg-[#fdf7ed] border-b border-[#f0e3ce] shadow-lg lg:hidden z-40 flex flex-col items-center py-6 space-y-6">
          {navLinks.map((link, idx) => (
            <Link
              href={link.path}
              key={idx}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center space-x-1.5 group"
            >
              <span className="text-[#132c52] font-medium text-[22px] group-hover:text-[#f26d21] transition-colors">
                {link.name}
              </span>
              <GiStarShuriken className="w-[14px] h-[14px] text-[#132c52]/60 group-hover:text-[#f26d21] stroke-[3.5]" />
            </Link>
          ))}

          {/* Mobile Contact Info */}
          <div className="flex md:hidden items-center space-x-3 pt-4 border-t border-[#f0e3ce]/50 w-3/4 justify-center">
            <PhoneCall
              className="w-[25px] h-[25px] text-[#132c52] animate-ring"
              strokeWidth={2}
            />
            <div className="flex flex-col leading-tight">
              <span className="text-[#f26d21] text-[14px] font-semibold">
                Contact us?
              </span>
              <span className="text-[#132c52] text-[16px] font-semibold">
                +1 123 456 7890
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
