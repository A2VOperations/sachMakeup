"use client";
import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <div className="w-full px-4 py-20 bg-[#FFF8EE] font-sans text-[#0A2647] overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-[54px] font-extrabold leading-[1.2]">
            Over 1000+ Beauty Enthusiasts & Professionals
          </h2>
        </div>

        {/* Category Pills Row */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="bg-gradient-to-r from-[#f26d21] to-[#f05a11] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg shadow-orange-500/30 cursor-pointer transform hover:scale-105 transition-transform">
            All Categories
          </div>
          <div className="bg-transparent border-[1.5px] border-gray-300 text-[#0A2647] px-6 py-3 rounded-full text-lg font-semibold cursor-pointer transform hover:border-[#f26d21] hover:text-[#f26d21] transition-all hover:scale-105">
            Skin Care
          </div>
          <div className="bg-transparent border-[1.5px] border-gray-300 text-[#0A2647] px-6 py-3 rounded-full text-lg font-semibold cursor-pointer transform hover:border-[#f26d21] hover:text-[#f26d21] transition-all hover:scale-105">
            Hair Care
          </div>
          <div className="bg-transparent border-[1.5px] border-gray-300 text-[#0A2647] px-6 py-3 rounded-full text-lg font-semibold cursor-pointer transform hover:border-[#f26d21] hover:text-[#f26d21] transition-all hover:scale-105">
            Makeup
          </div>
          <div className="bg-transparent border-[1.5px] border-gray-300 text-[#0A2647] px-6 py-3 rounded-full text-lg font-semibold cursor-pointer transform hover:border-[#f26d21] hover:text-[#f26d21] transition-all hover:scale-105">
            Fragrances
          </div>
          <div className="bg-transparent border-[1.5px] border-gray-300 text-[#0A2647] px-6 py-3 rounded-full text-lg font-semibold cursor-pointer transform hover:border-[#f26d21] hover:text-[#f26d21] transition-all hover:scale-105">
            Tools
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col">
            <div className="w-full mb-4 aspect-square bg-gradient-to-br from-[#fdf7ed] to-[#fbf1e0] rounded-xl overflow-hidden">
              <Image
                src="/photos/img (9).webp"
                className="w-full h-full object-cover"
                alt="product"
                width={110}
                height={110}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-[#0A2647] text-lg">
                Vitamin C Facial Serum
              </h3>
              <p className="text-gray-500 text-sm">
                Brighten and firm skin with powerful antioxidants.
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="font-bold text-[#0A2647] text-xl">$29.00</span>
                <button className="bg-gradient-to-r from-[#f26d21] to-[#f05a11] text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col">
            <div className="w-full mb-4 aspect-square bg-gradient-to-br from-[#fdf7ed] to-[#fbf1e0] rounded-xl overflow-hidden">
              <Image
                src="/photos/img (10).webp"
                className="w-full h-full object-cover"
                alt="product"
                width={110}
                height={110}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-[#0A2647] text-lg">
                Hyaluronic Acid
              </h3>
              <p className="text-gray-500 text-sm">
                Deep hydration booster serum.
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="font-bold text-[#0A2647] text-xl">$32.00</span>
                <button className="bg-gradient-to-r from-[#f26d21] to-[#f05a11] text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col">
            <div className="w-full mb-4 aspect-square bg-gradient-to-br from-[#fdf7ed] to-[#fbf1e0] rounded-xl overflow-hidden">
              <Image
                src="/photos/img (11).webp"
                className="w-full h-full object-cover"
                alt="product"
                width={110}
                height={110}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-[#0A2647] text-lg">
                Retinol Cream
              </h3>
              <p className="text-gray-500 text-sm">
                Anti-aging night treatment for smoother skin.
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="font-bold text-[#0A2647] text-xl">$35.00</span>
                <button className="bg-gradient-to-r from-[#f26d21] to-[#f05a11] text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col">
            <div className="w-full mb-4 aspect-square bg-gradient-to-br from-[#fdf7ed] to-[#fbf1e0] rounded-xl overflow-hidden">
              <Image
                src="/photos/img (12).webp"
                className="w-full h-full object-cover"
                alt="product"
                width={110}
                height={110}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-[#0A2647] text-lg">
                Clay Face Mask
              </h3>
              <p className="text-gray-500 text-sm">
                Purifying and pore-minimizing mask.
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="font-bold text-[#0A2647] text-xl">$24.00</span>
                <button className="bg-gradient-to-r from-[#f26d21] to-[#f05a11] text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
