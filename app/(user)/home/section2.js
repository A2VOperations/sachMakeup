import React from "react";
import Image from "next/image";

const Section2 = () => {
  return (
    <section className="bg-[#FFF8EE] font-sans text-[#0A2647] w-full py-10 px-4 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left Column: Main Image */}
        <div className="relative w-full max-w-md mx-auto lg:ml-0 xl:ml-10 mt-10 lg:mt-0">
          {/* Background Decorative Line */}
          <div className="absolute hidden md:block -top-6 -left-6 md:-left-8 -bottom-10 w-[50%] border-l-[1.5px] border-b-[1.5px] border-[#0A2647] rounded-bl-[40px] pointer-events-none">
            {/* Star Icon */}
            <div className="absolute left-[-14px] bottom-10 bg-[#FFF8EE] py-2">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="#0A2647"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative z-10 w-full aspect-4/5 bg-gray-200 shadow-sm">
            <Image
              src="/photos/img (37).jpg"
              alt="Flawless professional makeup application"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>

          {/* Circular Badge */}
          <div className="absolute bottom-2 -left-4 sm:left-12 md:left-24 z-20 w-36 h-36 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-lg">
            {/* Circular Text SVG */}
            <div className="absolute left inset-0 animate-spin-slow p-2">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-[#0A2647] overflow-visible"
              >
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                />
                <text
                  className="text-[11px] font-bold tracking-[0.22em] uppercase"
                  fill="currentColor"
                >
                  <textPath href="#circlePath" startOffset="0%">
                    Glamour Studio • Book Now • Glamour Studio • Book Now •
                  </textPath>
                </text>
              </svg>
            </div>
            {/* Play Button */}
            <button className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center z-10 hover:scale-110 transition-transform">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3L19 12L5 21V3Z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="relative flex flex-col gap-6 lg:gap-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.2] font-extrabold tracking-tight">
            Elevate Your Glamour Bespoke Artistry For Your Unique Style Journey
            At Sach Makeover
          </h2>

          <p className="text-base md:text-[17px] text-gray-500 leading-relaxed max-w-2xl font-light">
            We believe your face is a unique canvas meant to be celebrated. We
            combine premium, luxury cosmetics with innovative application
            techniques to accentuate your natural features. Our team of
            certified makeup artists and bridal stylists create personalized
            looks tailored to your personality—whether it&apos;s a timeless
            bridal glow, a high-fashion editorial look, or effortless evening
            glam. Explore our studio services and discover the confidence that
            comes with a flawless, professional makeover.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mt-2 gap-8">
            <div className="flex flex-col gap-6">
              {/* Pill and Arrow row */}
              <div className="flex flex-wrap items-center gap-4">
                {/* Pill container */}
                <div className="flex items-center gap-4 border-[1.5px] border-gray-300 rounded-full p-1.5 pr-6 bg-transparent">
                  {/* Avatars */}
                  <div className="flex -space-x-3">
                    <Image
                      src="/photos/img (14).webp"
                      className="w-9 h-9 rounded-full border-2 border-[#FFF8EE] object-cover"
                      alt="makeup artist"
                      width={110}
                      height={110}
                    />
                    <Image
                      src="/photos/img (15).webp"
                      className="w-9 h-9 rounded-full border-2 border-[#FFF8EE] object-cover"
                      alt="makeup artist"
                      width={110}
                      height={110}
                    />
                    <Image
                      src="/photos/img (16).webp"
                      className="w-9 h-9 rounded-full border-2 border-[#FFF8EE] object-cover"
                      alt="makeup artist"
                      width={110}
                      height={110}
                    />
                    <Image
                      src="/photos/img (17).webp"
                      className="w-9 h-9 rounded-full border-2 border-[#FFF8EE] object-cover"
                      alt="makeup artist"
                      width={110}
                      height={110}
                    />
                  </div>
                  <div className="w-px h-6 bg-gray-300"></div>
                  <span className="text-sm md:text-[15px] font-semibold text-[#0A2647]">
                    Consult our 25+ top artists
                  </span>
                </div>

                {/* Arrow Button */}
                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF7A00"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </button>
              </div>

              {/* Ratings */}
              <div className="flex items-center gap-2">
                <div className="flex gap-1 text-[#FF9500]">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-bold text-[#0A2647] ml-1">
                  (4.9)
                </span>
                <span className="text-sm text-gray-500 font-medium">
                  12k+ reviews on google
                </span>
              </div>
            </div>

            {/* Floating Small Images */}
            <div className="relative w-48 h-32 hidden lg:block shrink-0">
              <Image
                src="/photos/img (18).webp"
                alt="eyeshadow palette detail"
                className="absolute right-23 top-0 w-[150px] h-[150px] object-cover border-[6px] border-white shadow-lg transform rotate-[-15deg] z-0"
                width={150}
                height={150}
              />
              <Image
                src="/photos/img (19).webp"
                alt="glam transformation preview"
                className="absolute right-0 top-4 w-[150px] h-[150px] object-cover border-[6px] border-[#FFF8EE] shadow-xl transform rotate-10 z-10"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `,
        }}
      />
    </section>
  );
};

export default Section2;
