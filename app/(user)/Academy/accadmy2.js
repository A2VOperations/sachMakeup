import React from "react";
import Image from "next/image";

export default function Accadmy2() {
  return (
    <div className="w-full bg-[#FFF8EE] py-20 px-4 md:px-12 lg:px-24 border-b border-[#dfb76c]/30 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Subtle gold gradient curves on the background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#dfb76c]/2 to-[#dfb76c]/8 pointer-events-none z-0"></div>
      <div className="absolute -left-12 -top-12 w-64 h-64 rounded-full bg-[#dfb76c]/5 blur-3xl pointer-events-none"></div>

      {/* Left Side: Premium Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col text-left z-10 relative">
        <span className="text-[#b89047] text-xs font-bold tracking-[0.25em] uppercase mb-4">
          Sach Makeover Academy
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#132c52] font-light leading-tight mb-6">
          Beauty Academy <br />
          in <span className="font-semibold text-[#b89047]">Delhi</span>
        </h1>
        <div className="w-20 h-[1.5px] bg-[#b89047] mb-6"></div>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light max-w-xl mb-8">
          Discover the art of elegance with <strong className="font-semibold italic text-[#132c52]">Sach Makeover&apos;s</strong> beauty course, where expert guidance meets personalized techniques. Elevate your skills and embrace your creative potential in a vibrant, hands-on environment.
        </p>
        
        {/* Academy details badge */}
        <div className="flex items-center space-x-6 text-xs text-gray-500 font-medium uppercase tracking-[0.1em]">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#b89047]"></span>
            <span>100% Job Assistance</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#b89047]"></span>
            <span>Expert Trainers</span>
          </div>
        </div>
      </div>

      {/* Right Side: Elegant Double Image Layout */}
      <div className="w-full lg:w-1/2 flex items-center justify-center relative z-10 min-h-[350px] md:min-h-[420px]">
        {/* Main Arched Frame (Bride Makeup) */}
        <div className="absolute left-4 md:left-12 top-0 w-[220px] md:w-[280px] h-[300px] md:h-[380px] rounded-t-full overflow-hidden border-[6px] border-white shadow-[0_15px_40px_rgba(184,144,71,0.15)] z-10 transition-transform duration-500 hover:scale-[1.02]">
          <Image
            src="/images/bridal_makeup_course.png"
            alt="Bridal Makeup Work"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Overlapping Frame (Hair Styling) */}
        <div className="absolute right-4 md:right-12 bottom-0 w-[160px] md:w-[220px] h-[160px] md:h-[220px] rounded-2xl overflow-hidden border-[6px] border-white shadow-[0_15px_30px_rgba(0,0,0,0.1)] z-20 transition-transform duration-500 hover:scale-105">
          <Image
            src="/images/hair_styling_course.png"
            alt="Professional Hair Styling"
            fill
            className="object-cover"
          />
        </div>

        {/* Gold Decorative Star */}
        <div className="absolute top-8 right-24 text-[#b89047] opacity-60 hidden md:block">
          <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
