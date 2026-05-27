"use client";

import React, { useState } from "react";
import Image from "next/image";
import Popup from "../../components/Popup";

const Section1 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section className="relative w-full min-h-screen bg-[#FFF8EE] overflow-hidden flex justify-around font-sans text-[#0A2647]">

        {/* ── Background small image (new) ── */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] md:w-[520px] md:h-[520px] lg:w-[640px] lg:h-[640px] rounded-full overflow-hidden opacity-[0.06]">
            <Image
              src="/photos/img (20).webp"
              alt=""
              fill
              className="object-cover"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* ── Left Sidebar – Social Links ── */}
        <div className="hidden md:flex flex-col items-center justify-between w-14 lg:w-16 border-r border-[#EADAC5] py-12 shrink-0 z-20 bg-[#FFF8EE]">
          <div className="flex-1 relative w-full flex items-start justify-center mt-32">
            <div className="absolute transform -rotate-90 flex gap-10 whitespace-nowrap">
              {["INSTAGRAM", "FACEBOOK", "TWITTER"].map((s) => (
                <a key={s} href="#"
                   className="text-[9px] lg:text-[10px] font-bold tracking-[0.2em] text-[#4A5D75] hover:text-[#0F2A4A] transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div className="relative h-32 w-full flex items-end justify-center mb-8">
            <button className="absolute transform -rotate-90 bg-white px-5 py-2 rounded-full shadow-sm text-[9px] lg:text-[10px] font-bold tracking-wider whitespace-nowrap text-[#0A2647] border border-gray-100 hover:bg-gray-50 transition-colors">
              LETS TALK
            </button>
          </div>
        </div>

        {/* ── Main Content Area ── */}
        <div className="flex-1 relative flex flex-col justify-around items-center lg:flex-row pt-8 sm:pt-10 md:pt-0 px-4 sm:px-8 md:px-10 lg:px-0 gap-6 lg:gap-0">

          {/* Decorative SVG lines */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0">
            <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
              <path d="M-100,200 C300,50 600,300 1100,100"  fill="none" stroke="#F47514" strokeWidth="1"/>
              <path d="M-100,600 C400,800 800,400 1100,700" fill="none" stroke="#F47514" strokeWidth="1"/>
              <path d="M200,1000 C400,600 800,800 1100,400" fill="none" stroke="#F47514" strokeWidth="1"/>
            </svg>
          </div>

          {/* Orange crosses */}
          <div className="absolute top-[12%] sm:top-[15%] right-[42%] sm:right-[40%] text-[#F47514] z-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="sm:w-5 sm:h-5">
              <path d="M11 0h2v11h11v2H13v11h-2V13H0v-2h11V0z"/>
            </svg>
          </div>
          <div className="absolute top-[45%] right-[6%] sm:right-[10%] text-[#F47514] scale-75 z-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="sm:w-5 sm:h-5">
              <path d="M11 0h2v11h11v2H13v11h-2V13H0v-2h11V0z"/>
            </svg>
          </div>

          {/* Top small avatar */}
          <div className="hidden sm:block absolute top-10 left-8 sm:top-12 sm:left-10 lg:top-16 lg:left-16 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-[5px] border-[#F2E5D5] shadow-sm z-10">
            <Image src="/photos/img (20).webp" alt="Small avatar" fill className="object-cover"/>
          </div>

          {/* ── Left: Text Content ── */}
          <div className="relative z-10 w-full lg:w-auto text-center lg:text-left max-w-xl lg:max-w-none">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.1] text-[#0A2647] tracking-tight">
              Skincare is Like <br/>
              A Workout For <br/>
              Your Skin
            </h1>

            <div className="mt-6 sm:mt-8 lg:mt-10 border-l-[3px] border-[#0A2647] pl-4 sm:pl-5 max-w-sm sm:max-w-md mx-auto lg:mx-0">
              <p className="text-[#4A5D75] text-sm lg:text-base leading-relaxed font-medium">
                Experienced staff is dedicated to improving our patients&apos;
                skin health and enhancing beauty through personalized care.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col xs:flex-row sm:flex-row items-center justify-center lg:justify-start gap-5 sm:gap-8">
              {/* Appointment button */}
              <button
                onClick={() => setIsPopupOpen(true)}
                className="bg-[#b89047] text-white pl-5 sm:pl-6 pr-2 py-2 rounded-full flex items-center gap-3 sm:gap-4 hover:bg-[#dc9e2d] transition-all shadow-lg shadow-[#b89047]/30 cursor-pointer text-sm sm:text-base whitespace-nowrap"
              >
                <span className="font-semibold text-sm">Appointment</span>
                <span className="bg-white text-[#b89047] w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[18px] sm:h-[18px]">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </button>

              {/* Avatars row */}
              <div className="flex items-center">
                <div className="flex -space-x-3 sm:-space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-[#FFF8EE] overflow-hidden relative bg-gray-200 shadow-sm">
                      <Image src={`/photos/img (${i + 15}).webp`} alt={`User ${i}`} fill className="object-cover" unoptimized/>
                    </div>
                  ))}
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-[#FFF8EE] bg-white flex items-center justify-center -ml-3 sm:-ml-4 z-10 shadow-sm text-[#0A2647]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-4 sm:h-4">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Model Image ── */}
          <div className="relative w-full max-w-[260px] xs:max-w-[300px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[560px] xl:max-w-[680px] z-10 mt-2 lg:mt-0">
            <div className="relative z-10 w-full h-auto">
              <Image
                src="/images/main_model.png"
                alt="Beautiful woman with clear skin"
                width={800}
                height={800}
                className="w-full h-auto object-contain object-bottom"
                priority
              />
            </div>

            {/* Circular "Explore More" button */}
            <div className="absolute bottom-10 right-2 sm:bottom-16 sm:right-6 lg:bottom-20 lg:right-[6%] z-20 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-full bg-white/70 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex items-center justify-center group cursor-pointer hover:bg-white/90 transition-all border border-white/40">
              <div className="absolute w-full h-full animate-[spin_12s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#0A2647] scale-[0.85]">
                  <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none"/>
                  <text className="text-[10px] font-bold tracking-[0.25em] uppercase" fill="currentColor">
                    <textPath href="#circlePath" startOffset="0%">
                      Explore More Collection • Explore More Collection •
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-11 lg:h-11 xl:w-12 xl:h-12 bg-[#0A2647] rounded-full flex items-center justify-center text-white pl-0.5 group-hover:scale-110 transition-transform shadow-md">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"
                     className="sm:w-[14px] sm:h-[14px] lg:w-[18px] lg:h-[18px]">
                  <path d="M5 3l14 9-14 9V3z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Floating bottom-left images – visible on large screens only */}
          <div className="absolute left-0 bottom-0 w-[80px] h-[120px] lg:w-[100px] lg:h-[150px] rounded-tr-4xl rounded-br-4xl overflow-hidden shadow-xl hidden lg:block">
            <Image src="/photos/img (21).webp" alt="Arched image" fill className="object-cover"/>
          </div>
          <div className="absolute left-[22%] xl:left-[25%] bottom-8 w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] overflow-hidden shadow-lg hidden lg:block rounded-br-full rounded-tr-xl">
            <Image src="/photos/img (22).webp" alt="Square image" fill className="object-cover object-top"/>
          </div>
        </div>

        {/* ── Right Sidebar – Reviews ── */}
        <div className="hidden lg:flex flex-col items-center justify-center w-14 xl:w-16 shrink-0 z-20 bg-[#FFF8EE] relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#EADAC5]"/>
          <div className="relative h-96 w-full flex items-center justify-center">
            <div className="absolute transform -rotate-90 flex items-center gap-4 xl:gap-5 whitespace-nowrap bg-white py-2 px-5 xl:px-6 rounded-full shadow-sm border border-gray-100">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} width="12" height="12" viewBox="0 0 24 24"
                       fill="#FFC107" stroke="#FFC107" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                       className="xl:w-[14px] xl:h-[14px]">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <span className="text-[10px] xl:text-[11px] text-[#4A5D75] font-bold tracking-wider uppercase">
                <strong className="text-[#F47514]">(4.8)</strong> 12k+ ratings on google
              </span>
            </div>
          </div>
        </div>

        {/* Mobile ratings bar (shown on < lg) */}
        <div className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-white py-2 px-5 rounded-full shadow-md border border-gray-100">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map((star) => (
              <svg key={star} width="12" height="12" viewBox="0 0 24 24"
                   fill="#FFC107" stroke="#FFC107" strokeWidth="1">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
          </div>
          <span className="text-[10px] text-[#4A5D75] font-bold tracking-wider uppercase whitespace-nowrap">
            <strong className="text-[#F47514]">(4.8)</strong> 12k+ ratings on google
          </span>
        </div>

      </section>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default Section1;