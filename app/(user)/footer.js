"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaPaperPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Popup from "../components/Popup";

const Footer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <footer className="bg-[#141d2e] text-white pt-16 pb-8 font-sans relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 opacity-20 bg-linear-to-tr from-[#141d2e] via-[#1a253a] to-[#141d2e] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10">

        {/* ── Top Section ── */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 border-b border-gray-700/50 pb-8 gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16 2.45C16.89 1.5 18.3 1.5 19.18 2.45L23.47 7.07C24.35 8.01 24.35 9.55 23.47 10.49L10.5 24.46C9.61 25.41 8.2 25.41 7.32 24.46L3.03 19.84C2.15 18.9 2.15 17.36 3.03 16.42L16 2.45Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M37.55 16.42C38.43 17.36 38.43 18.9 37.55 19.84L33.26 24.46C32.38 25.41 30.97 25.41 30.08 24.46L17.11 10.49C16.23 9.55 16.23 8.01 17.11 7.07L21.4 2.45C22.28 1.5 23.69 1.5 24.58 2.45L37.55 16.42Z" fill="#b89047"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M16 38.45C16.89 39.4 18.3 39.4 19.18 38.45L23.47 33.83C24.35 32.89 24.35 31.35 23.47 30.41L10.5 16.44C9.61 15.49 8.2 15.49 7.32 16.44L3.03 21.06C2.15 22 2.15 23.54 3.03 24.48L16 38.45Z" fill="#b89047"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M37.55 24.48C38.43 23.54 38.43 22 37.55 21.06L33.26 16.44C32.38 15.49 30.97 15.49 30.08 16.44L17.11 30.41C16.23 31.35 16.23 32.89 17.11 33.83L21.4 38.45C22.28 39.4 23.69 39.4 24.58 38.45L37.55 24.48Z" fill="white"/>
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-[28px] font-extrabold tracking-tight text-white leading-none mb-0">Clinic</h2>
              <h2 className="text-[17px] font-bold tracking-widest text-[#b89047] leading-none mt-1">Master</h2>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <Link
              href="/Contact"
              className="px-7 py-2.5 border border-gray-400 text-white rounded-xl hover:bg-white hover:text-[#141d2e] transition-colors font-medium text-sm"
            >
              Contact Us
            </Link>
            <button
              onClick={() => setIsPopupOpen(true)}
              className="px-7 py-2.5 bg-white text-[#141d2e] rounded-xl hover:bg-gray-200 transition-colors font-medium text-sm"
            >
              Appointment
            </button>
          </div>
        </div>

        {/* ── Middle Section ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-10 mb-16">

          {/* Newsletter + Social */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left lg:pr-8">
            <h3 className="text-[17px] font-bold mb-4 leading-snug">
              Important Updates<br />Waiting for you
            </h3>
            <p className="text-gray-300 text-[13px] mb-6 leading-relaxed">
              Get our latest and best contents right into your inbox
            </p>
            <div className="relative w-full max-w-[320px] sm:max-w-full">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-[#0b101a] text-[13px] text-white px-5 py-3.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#b89047] border border-transparent"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#b89047] transition-colors">
                <FaPaperPlane className="text-sm" />
              </button>
            </div>

            {/* Social */}
            <div className="mt-8 w-full">
              <h4 className="text-[13px] font-bold text-gray-300 mb-3 tracking-wider uppercase">
                Follow Us
              </h4>
              <div className="flex gap-3 justify-center sm:justify-start">
                <a href="https://wa.me/11234567890" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white flex items-center justify-center transition-all duration-300 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:scale-105"
                  title="WhatsApp">
                  <FaWhatsapp className="w-[18px] h-[18px]" />
                </a>
                <a href="https://instagram.com/sachmakeover" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-pink-500/10 text-pink-400 hover:bg-pink-500 hover:text-white flex items-center justify-center transition-all duration-300 border border-pink-500/20 shadow-[0_0_15px_rgba(236,72,153,0.1)] hover:scale-105"
                  title="Instagram">
                  <FaInstagram className="w-[18px] h-[18px]" />
                </a>
                <a href="https://facebook.com/sachmakeover" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white flex items-center justify-center transition-all duration-300 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:scale-105"
                  title="Facebook">
                  <FaFacebookF className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Our Studio */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h3 className="text-[16px] font-bold mb-6">Our Studio</h3>
            <ul className="space-y-4 text-[13px] font-medium text-gray-300 w-full">
              <li className="flex flex-col sm:flex-row gap-2.5 items-center sm:items-start">
                <FaMapMarkerAlt className="text-[#b89047] shrink-0 mt-1 hidden sm:block" size={14} />
                <FaMapMarkerAlt className="text-[#b89047] shrink-0 sm:hidden mb-1" size={14} />
                <span className="leading-relaxed">
                  Main, 25 Feet Rd, near gopeshwarnath mandir, opp. vishal mega mart, Bhagat Colony, Sant Nagar, Burari, New Delhi, Delhi - 110084
                </span>
              </li>
              <li className="pt-3 border-t border-gray-800/80">
                <span className="text-[#b89047] block mb-2 font-bold text-[12px] tracking-wider uppercase">
                  Locations Served
                </span>
                <p className="text-gray-400 leading-relaxed text-[12px]">
                  New Delhi • Gurugram • Noida<br />Haryana • Punjab
                </p>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h3 className="text-[16px] font-bold mb-6">Our Services</h3>
            <ul className="space-y-3.5 text-[13px] font-medium text-gray-300">
              {["Bridal Makeovers", "Party & Occasion", "Editorial & Fashion", "Hair & Styling"].map((s) => (
                <li key={s}>
                  <Link href="#" className="hover:text-[#b89047] transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h3 className="text-[16px] font-bold mb-6">Useful Links</h3>
            <ul className="space-y-3.5 text-[13px] font-medium text-gray-300">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Contact Us", href: "#" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-[#b89047] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h3 className="text-[16px] font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3.5 text-[13px] font-medium text-gray-300">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/About" },
                { label: "Gallery", href: "/Gallery" },
                { label: "Academy", href: "/Academy" },
                { label: "Contact Us", href: "/Contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-[#b89047] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Info Banner ── */}
        <div className="bg-[#0b101a] rounded-[24px] p-6 md:p-8 flex flex-col lg:flex-row justify-between items-center gap-8 mb-10 shadow-lg">
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-[20px] font-bold mb-1">Get in Touch with us</h3>
            <p className="text-gray-400 text-[13px]">Have any questions or want to book an appointment?</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-10 items-center w-full lg:w-auto justify-center">
            {/* Phone */}
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <div className="w-[44px] h-[44px] rounded-full bg-[#b89047] flex items-center justify-center text-white text-lg shrink-0 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                <FaPhoneAlt size={16} />
              </div>
              <div>
                <h4 className="font-bold text-[14px] mb-0.5">Call Us</h4>
                <p className="text-gray-400 text-[12px] tracking-wide">+91 9971853904</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <div className="w-[44px] h-[44px] rounded-full bg-[#b89047] flex items-center justify-center text-white text-lg shrink-0 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                <FaEnvelope size={16} />
              </div>
              <div>
                <h4 className="font-bold text-[14px] mb-0.5">Send us a Mail</h4>
                <p className="text-gray-400 text-[12px] tracking-wide">info@sachmakeover.com</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <div className="w-[44px] h-[44px] rounded-full bg-[#b89047] flex items-center justify-center text-white text-lg shrink-0 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                <FaClock size={16} />
              </div>
              <div>
                <h4 className="font-bold text-[14px] mb-0.5">Opening Time</h4>
                <p className="text-gray-400 text-[12px] tracking-wide">Mon - Sat: 9:00 - 20:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[13px] text-gray-400 pt-2 border-t border-gray-800/0 gap-4">
          <p className="text-center md:text-left">
            © 2026 <span className="text-[#b89047]">DexignZone</span> Theme. All Rights Reserved.
          </p>
          <div className="flex gap-1.5 items-center flex-wrap justify-center">
            <div className="h-[22px] w-[34px] bg-[#61245e] rounded-[3px] flex items-center justify-center text-[8px] font-bold text-white tracking-wider">Skrill</div>
            <div className="h-[22px] w-[34px] bg-white rounded-[3px] flex items-center justify-center text-[#ff6000] text-[7px] font-extrabold border border-gray-300">Discover</div>
            <div className="h-[22px] w-[34px] bg-[#0070CE] rounded-[3px] flex items-center justify-center text-[8px] font-bold text-white">AMEX</div>
            <div className="h-[22px] w-[34px] bg-white rounded-[3px] flex items-center justify-center text-[#003087] text-[9px] font-bold italic border border-gray-300">PayPal</div>
            <div className="h-[22px] w-[34px] bg-[#222222] rounded-[3px] flex items-center justify-center text-white border border-gray-700">
              <div className="flex space-x-[-3px]">
                <div className="w-[10px] h-[10px] bg-[#EB001B] rounded-full opacity-90"></div>
                <div className="w-[10px] h-[10px] bg-[#F79E1B] rounded-full opacity-90"></div>
              </div>
            </div>
            <div className="h-[22px] w-[34px] bg-white rounded-[3px] flex items-center justify-center text-[#1A1F71] text-[10px] font-bold italic border border-gray-300">VISA</div>
          </div>
        </div>
      </div>

      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </footer>
  );
};

export default Footer;