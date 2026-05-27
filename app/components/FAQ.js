"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiChevronRight, FiArrowUpRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const faqData = [
  {
    question: "Do your bridal packages include saree draping and hairstyling?",
    answer:
      "Yes, all our signature bridal packages are all-inclusive. They cover HD or Airbrush makeup, luxury eyelash extensions, intricate bridal hairstyling, dupatta setting, and flawless saree/lehenga draping.",
  },
  {
    question: "When should I start my pre-bridal skin sittings?",
    answer:
      "We highly recommend starting your pre-bridal grooming routine at least 4 to 6 weeks before your wedding day. This allows ample time for de-tan treatments, deep-cleansing facials, and hair spas to work effectively for that natural bridal glow.",
  },
  {
    question: "Can your team travel to outstation destination weddings?",
    answer:
      "Absolutely! Our senior bridal makeup squad travels across India for destination weddings. Outstation bookings require travel and accommodation arrangements to be taken care of by the client.",
  },
  {
    question: "Do you offer makeup trials before booking?",
    answer:
      "Yes, we offer paid bridal trial sessions. If you confirm your booking on the same day by paying the token advance, the full trial amount is adjusted and deducted from your final wedding package billing.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FCFAF7] py-10 px-4 md:px-8 lg:px-16 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left Column: FAQ Content */}
        <div className="flex-1 w-full lg:max-w-2xl flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-[44px] font-bold text-[#0F3057] mb-6 leading-tight tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-sm md:text-base mb-10 leading-relaxed max-w-xl">
              Preparing for your big event or wedding day should be completely stress-free. Here are the answers to everything you need to know about our services.
            </p>

            {/* Accordion List */}
            <div className="border-t border-[#F0E6D8]/80 mb-10">
              {faqData.map((item, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div key={index} className="border-b border-[#F0E6D8]/80">
                    <button
                      className="w-full flex items-center justify-between py-5 text-left text-base md:text-lg font-semibold text-[#0F3057] hover:text-[#b89047] transition-colors duration-300 focus:outline-none group"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="pr-4">{item.question}</span>
                      <FiChevronRight
                        className={`text-[#0F3057] group-hover:text-[#b89047] text-xl transition-transform duration-300 ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 pb-5"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-slate-500 text-sm md:text-base leading-relaxed pr-6">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Artist Card and Ratings Section */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-4">
              {/* Artist Pill Container */}
              <div className="bg-white rounded-full py-2.5 px-6 flex items-center gap-4 shadow-sm border border-[#F0E6D8]/60 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white bg-slate-200">
                    <Image
                      src="/photos/img (2).webp"
                      alt="Senior Makeup Artist"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white bg-slate-200 -ml-2.5">
                    <Image
                      src="/photos/img (3).webp"
                      alt="Saree Styling Expert"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white bg-slate-200 -ml-2.5">
                    <Image
                      src="/photos/img (4).webp"
                      alt="Hair Stylist"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white bg-slate-200 -ml-2.5">
                    <Image
                      src="/photos/img (5).webp"
                      alt="Mehendi Artist"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="w-px h-6 bg-[#F0E6D8]"></div>

                <span className="text-xs md:text-sm font-semibold text-[#0F3057]">
                  Consult with 15+ senior experts
                </span>
              </div>

              <button className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#b89047] hover:bg-[#b89047] hover:text-white transition-all duration-300 border border-[#F0E6D8]/60 cursor-pointer">
                <FiArrowUpRight size={22} />
              </button>
            </div>

            {/* Google Rating */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-[#b89047] text-sm" />
                ))}
              </div>
              <span className="text-[11px] md:text-xs font-semibold text-[#0F3057]/70">
                <strong className="text-[#0F3057] font-bold">(4.8)</strong> 12k+
                happy clients across India
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Treatment Image */}
        <div className="flex-1 w-full lg:max-w-lg">
          <div className="relative w-full aspect-4/5 rounded-[32px] md:rounded-[40px] overflow-hidden shadow-lg border border-[#F0E6D8]/40 bg-slate-100">
            <Image
              src="/photos/img (6).webp"
              alt="Traditional Indian Bridal Glam Makeup Session"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;