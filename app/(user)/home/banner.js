import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/banner.webp"
          alt="Makeup and Hairstyling Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-10 text-center mt-12 md:mt-20">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal max-w-4xl mx-auto leading-[1.4] tracking-wide" style={{ fontFamily: "Georgia, serif" }}>
          Become a Certified Makeup & Hairstyling Expert <br className="hidden md:block" /> with our Industry-Centric Courses
        </h1>
        
        <button className="mt-8 px-8 py-3 border border-white text-white text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors duration-300">
          ENROLL NOW
        </button>
      </div>
    </section>
  );
};

export default Banner;