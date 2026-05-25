"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiArrowUpRight, FiCalendar } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

const services = [
  {
    id: "01",
    title: "Cosmetic Dermatology",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    features: [
      "Excellent Laporatery",
      "World Class Infrastructure",
      "Health Checkups",
    ],
    doctor: {
      name: "Nashid Martines",
      specialty: "Cardiac Surgery",
      image: "/photos/img (20).webp",
    },
    image: "/photos/img (21).webp",
  },
  {
    id: "02",
    title: "Dermatologic Surgery",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    features: [
      "Excellent Laporatery",
      "World Class Infrastructure",
      "Health Checkups",
    ],
    doctor: {
      name: "Nashid Martines",
      specialty: "Cardiac Surgery",
      image: "/photos/img (22).webp",
    },
    image: "/photos/img (23).webp",
  },
  {
    id: "03",
    title: "Earlobe Repair",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    features: [
      "Excellent Laporatery",
      "World Class Infrastructure",
      "Health Checkups",
    ],
    doctor: {
      name: "Nashid Martines",
      specialty: "Cardiac Surgery",
      image: "/photos/img (24).webp",
    },
    image: "/photos/img (25).webp",
  },
  {
    id: "04",
    title: "Laser Resurfacing",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    features: [
      "Excellent Laporatery",
      "World Class Infrastructure",
      "Health Checkups",
    ],
    doctor: {
      name: "Nashid Martines",
      specialty: "Cardiac Surgery",
      image: "/photos/img (26).webp",
    },
    image: "/photos/img (27).webp",
  },
  {
    id: "05",
    title: "Anti Aging",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    features: [
      "Excellent Laporatery",
      "World Class Infrastructure",
      "Health Checkups",
    ],
    doctor: {
      name: "Nashid Martines",
      specialty: "Cardiac Surgery",
      image: "/photos/img (28).webp",
    },
    image: "/photos/img (29).webp",
  },
];

const Section5 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#fcf6ee] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1c325b] mb-4">
            Transform Your Skin With Our <br className="hidden md:block" />{" "}
            Advanced Dermatology Treatments
          </h2>
          <p className="text-slate-500 text-base md:text-lg">
            Experience a transformative journey that sculpts your physique and
            unlocks your full potential.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[550px] mb-12 overflow-hidden justify-center">
          {services.map((service, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={service.id}
                className={`relative rounded-[24px] overflow-hidden transition-all duration-500 ease-in-out cursor-pointer flex-shrink-0 flex flex-col md:flex-row ${
                  isActive
                    ? "h-auto md:h-full w-full md:w-[800px] bg-white shadow-sm"
                    : "h-[80px] md:h-full w-full md:w-[100px]"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {isActive ? (
                  <div className="w-full md:w-[800px] flex flex-col md:flex-row p-4 md:p-6 h-full">
                    {/* Left: Image */}
                    <div className="relative w-full md:w-[360px] h-[300px] md:h-full rounded-[20px] overflow-hidden flex-shrink-0">
                      <Image
                        src={service.image}
                        fill
                        className="object-cover"
                        alt={service.title}
                      />
                      <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-3 flex items-center justify-center gap-2 shadow-sm hover:bg-orange-50 transition-colors">
                        <FiCalendar className="text-[#f97316] text-lg" />
                        <span className="text-sm font-semibold text-[#1c325b]">
                          Book An appointment
                        </span>
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1 flex flex-col justify-center relative min-w-0 mt-6 md:mt-0 md:ml-8 px-2 md:px-0">
                      <div className="absolute top-[-20px] md:top-[-40px] right-0 text-[100px] md:text-[180px] font-bold text-slate-100 leading-none select-none z-0">
                        {service.id}
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#1c325b] mb-4 truncate">
                          {service.title}
                        </h3>
                        <p className="text-slate-500 text-sm md:text-base mb-6 leading-relaxed pr-4">
                          {service.description}
                        </p>

                        <ul className="space-y-4 mb-8">
                          {service.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-3 text-sm font-semibold text-[#1c325b]"
                            >
                              <FaCheckCircle className="text-[#f97316] text-lg" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-transparent relative z-10">
                        <div className="flex items-center gap-4">
                          <Image
                            src={service.doctor.image}
                            alt={service.doctor.name}
                            width={48}
                            height={48}
                            className="rounded-full object-cover"
                          />
                          <div>
                            <h4 className="text-sm font-bold text-[#1c325b]">
                              {service.doctor.name}
                            </h4>
                            <p className="text-xs font-semibold text-[#f97316] mt-0.5">
                              {service.doctor.specialty}
                            </p>
                          </div>
                        </div>
                        <button className="w-12 h-12 bg-[#f97316] rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors shadow-md flex-shrink-0">
                          <FiArrowUpRight size={24} />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full relative group">
                    <Image
                      src={service.image}
                      fill
                      className="object-cover"
                      alt={service.title}
                    />
                    <div className="absolute inset-0 bg-[#2b4162]/85 group-hover:bg-[#2b4162]/75 transition-colors"></div>

                    <div className="absolute inset-0 flex flex-row md:flex-col items-center justify-between p-4 md:py-8 md:px-0">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1c325b] shadow-sm flex-shrink-0">
                        <FiArrowUpRight size={20} />
                      </div>

                      <div className="md:hidden text-white text-lg font-medium tracking-wide">
                        {service.title}
                      </div>

                      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-white text-xl font-medium tracking-wide z-10">
                        {service.title}
                      </div>

                      <div className="text-3xl md:text-5xl font-bold text-white/20 select-none">
                        {service.id}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer line with button */}
        <div className="flex items-center justify-center relative mt-16 max-w-4xl mx-auto">
          <div className="absolute w-full h-[1px] bg-[#e6ddd0]"></div>
          <button className="relative z-10 bg-[#fcf6ee] border border-[#d4c9bd] rounded-full px-8 py-2.5 text-sm font-semibold text-[#1c325b] hover:bg-white hover:shadow-sm transition-all">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section5;
