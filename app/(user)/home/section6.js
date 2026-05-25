"use client";
import React, { useState } from "react";
import Image from "next/image";

const CompareSlider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="relative w-full aspect-[4/5] sm:aspect-[4/4] md:aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden group select-none shadow-lg">
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt="After Treatment"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Before Image (Foreground overlay with clip-path) */}
      <div
        className="absolute inset-0 z-10"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt="Before Treatment"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Slider Range Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0"
      />

      {/* Custom Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white z-10 pointer-events-none flex flex-col justify-center items-center"
        style={{ left: `calc(${sliderPosition}% - 1px)` }}
      >
        {/* The Triangles */}
        <div className="flex items-center justify-between gap-1.5 drop-shadow-md">
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-r-[8px] border-r-white border-b-[6px] border-b-transparent"></div>
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-white border-b-[6px] border-b-transparent"></div>
        </div>
      </div>

      {/* BEFORE Label */}
      <div
        className={`absolute left-3 top-1/2 -translate-y-1/2 bg-white/40 backdrop-blur-md text-white px-1.5 py-6 rounded-md text-[10px] md:text-xs font-bold tracking-[0.2em] z-10 pointer-events-none [writing-mode:vertical-lr] rotate-180 transition-opacity duration-300 ${sliderPosition < 15 ? "opacity-0" : "opacity-100"}`}
      >
        BEFORE
      </div>

      {/* AFTER Label */}
      <div
        className={`absolute right-3 top-1/2 -translate-y-1/2 bg-white/40 backdrop-blur-md text-white px-1.5 py-6 rounded-md text-[10px] md:text-xs font-bold tracking-[0.2em] z-10 pointer-events-none [writing-mode:vertical-lr] rotate-180 transition-opacity duration-300 ${sliderPosition > 85 ? "opacity-0" : "opacity-100"}`}
      >
        AFTER
      </div>
    </div>
  );
};

const Section6 = () => {
  return (
    <section className="relative w-full pt-16 md:pt-24 pb-16 md:pb-24">
      {/* Background Split */}
      <div className="absolute inset-0 z-0 flex flex-col">
        <div className="h-[65%] w-full bg-[#FAF5EE]"></div>
        <div className="h-[35%] w-full bg-white"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-[1000px]">
        <h2 className="text-3xl md:text-[42px] font-bold text-center text-[#0F3057] mb-12 md:mb-16">
          After Treatment
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <CompareSlider
            beforeImage="/photos/img (12).webp"
            afterImage="/photos/img (13).webp"
          />
          <CompareSlider
            beforeImage="/photos/img (14).webp"
            afterImage="/photos/img (15).webp"
          />
        </div>
      </div>
    </section>
  );
};

export default Section6;
