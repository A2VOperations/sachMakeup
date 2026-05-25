"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiChevronRight, FiArrowUpRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const faqData = [
  {
    question: "How much do you charge for pedicure ?",
    answer:
      "Our pedicure treatments range from $45 to $85 depending on the specific package and add-ons selected (such as paraffin wax, hot stone massage, or gel polish).",
  },
  {
    question: "What types of treatments do you offer?",
    answer:
      "We offer a wide range of services including medical facials, chemical peels, dermal fillers, botox injections, microdermabrasion, and advanced laser therapy tailored to your skin type.",
  },
  {
    question: "How do i book my appointment ?",
    answer:
      "You can easily book your appointment online through our website's booking portal, call our reception directly, or visit us in person to schedule your session.",
  },
  {
    question: "Can i cancel my appointment",
    answer:
      "Yes, you can cancel or reschedule your appointment up to 24 hours in advance without any penalty. Cancellations made within 24 hours may incur a small fee.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FCFAF7] py-20 px-4 md:px-8 lg:px-16 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left Column: FAQ Content */}
        <div className="flex-1 w-full lg:max-w-2xl flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-[44px] font-bold text-[#0F3057] mb-6 leading-tight tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-sm md:text-base mb-10 leading-relaxed max-w-xl">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            {/* Accordion List */}
            <div className="border-t border-[#F0E6D8]/80 mb-10">
              {faqData.map((item, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div key={index} className="border-b border-[#F0E6D8]/80">
                    <button
                      className="w-full flex items-center justify-between py-5 text-left text-base md:text-lg font-semibold text-[#0F3057] hover:text-[#f97316] transition-colors duration-300 focus:outline-none group"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="pr-4">{item.question}</span>
                      <FiChevronRight
                        className={`text-[#0F3057] group-hover:text-[#f97316] text-xl transition-transform duration-300 ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    {/* Animated accordion panel using CSS grid for perfect smooth transitions */}
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

          {/* Doctor Card and Ratings Section */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-4">
              {/* Doctor Pill Container */}
              <div className="bg-white rounded-full py-2.5 px-6 flex items-center gap-4 shadow-sm border border-[#F0E6D8]/60 hover:shadow-md transition-shadow duration-300">
                {/* Overlapping Avatars */}
                <div className="flex items-center">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white bg-slate-200">
                    <Image
                      src="/photos/img (2).webp"
                      alt="Doctor 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white bg-slate-200 -ml-2.5">
                    <Image
                      src="/photos/img (3).webp"
                      alt="Doctor 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white bg-slate-200 -ml-2.5">
                    <Image
                      src="/photos/img (4).webp"
                      alt="Doctor 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white bg-slate-200 -ml-2.5">
                    <Image
                      src="/photos/img (5).webp"
                      alt="Doctor 4"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="w-[1px] h-6 bg-[#F0E6D8]"></div>

                {/* Text */}
                <span className="text-xs md:text-sm font-semibold text-[#0F3057]">
                  Talk to over 215 doctor
                </span>
              </div>

              {/* Diagonal Arrow Round Button */}
              <button className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#f97316] hover:bg-[#f97316] hover:text-white transition-all duration-300 border border-[#F0E6D8]/60 cursor-pointer">
                <FiArrowUpRight size={22} />
              </button>
            </div>

            {/* Google Rating */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-[#f97316] text-sm" />
                ))}
              </div>
              <span className="text-[11px] md:text-xs font-semibold text-[#0F3057]/70">
                <strong className="text-[#0F3057] font-bold">(4.8)</strong> 12k+
                ratings on google
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Skincare Treatment Image */}
        <div className="flex-1 w-full lg:max-w-lg">
          <div className="relative w-full aspect-[4/5] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-lg border border-[#F0E6D8]/40 bg-slate-100">
            <Image
              src="/photos/img (6).webp"
              alt="Skincare jade roller facial treatment"
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
