"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  "Show All",
  "Beauty",
  "Massage",
  "Spa & Foot",
  "Hair Colors",
  "Treatments",
];

const images = [
  {
    id: 1,
    category: "Beauty",
    src: "/photos/img (3).webp",
    alt: "Spa products",
    ratio: "aspect-[3/4]",
  },
  {
    id: 2,
    category: "Beauty",
    src: "/photos/img (4).webp",
    alt: "Woman behind leaf",
    ratio: "aspect-[2/3]",
  },
  {
    id: 3,
    category: "Massage",
    src: "/photos/img (5).webp",
    alt: "Massage setup",
    ratio: "aspect-[4/3]",
  },
  {
    id: 4,
    category: "Treatments",
    src: "/photos/img (6).webp",
    alt: "Cucumber treatment",
    ratio: "aspect-[4/3]",
  },
  {
    id: 5,
    category: "Treatments",
    src: "/photos/img (7).webp",
    alt: "Stones and flower",
    ratio: "aspect-[3/4]",
  },
  {
    id: 6,
    category: "Spa & Foot",
    src: "/photos/img (8).webp",
    alt: "Candles and oils",
    ratio: "aspect-[2/3]",
  },
  {
    id: 7,
    category: "Beauty",
    src: "/photos/img (9).webp",
    alt: "Lilacs and candles",
    ratio: "aspect-[3/4]",
  },
  {
    id: 8,
    category: "Treatments",
    src: "/photos/img (10).webp",
    alt: "Water therapy",
    ratio: "aspect-[3/4]",
  },
  {
    id: 9,
    category: "Spa & Foot",
    src: "/photos/img (11).webp",
    alt: "Relaxing in bathrobe",
    ratio: "aspect-[4/3]",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Show All");

  const filteredImages =
    activeCategory === "Show All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div className=" bg-[#FFF8EE]">
      <section className="py-24 px-4 md:px-8 max-w-[1000px] mx-auto">
        <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
          .font-cursive {
            font-family: 'Great Vibes', cursive;
          }
        `}
        </style>

        {/* Header section */}
        <div className="relative text-center mb-16 flex flex-col items-center justify-center">
          <h2 className="absolute text-7xl md:text-[10rem] text-gray-120 font-cursive tracking-wider z-0 whitespace-nowrap select-none -translate-y-8">
            Sach Study
          </h2>
          <div className="relative z-10">
            <p className="text-gray-500 text-sm md:text-base mb-3 font-medium">
              Photo Gallery
            </p>
            <h3 className="text-3xl md:text-4xl font-normal tracking-wide text-gray-900 uppercase">
              LATEST WORKING PROJECTS
            </h3>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 relative z-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#cba465] text-white shadow-sm"
                  : "bg-[#f8f8f8] text-gray-600 hover:bg-[#e0e0e0] hover:text-gray-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              className="relative break-inside-avoid overflow-hidden group cursor-pointer animate-in fade-in zoom-in duration-500"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`relative w-full ${img.ratio}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
