import React from "react";
import Image from "next/image";
import Gallery from "@/app/components/Gallery";

const page = () => {
  return (
    <div>
      {/* Header */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/photos/img (22).webp"
          alt="Gallery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-linear-to-r from-[#6b2b36] via-transparent to-transparent"></div>

        <div className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-3xl md:text-5xl font-light text-white mb-4 px-6">
            Our Gallery
          </h1>
          <p className="text-sm md:text-base text-white/90 tracking-[0.2em] uppercase">
            Home - Gallery
          </p>
        </div>
      </div>
      <Gallery />
    </div>
  );
};

export default page;
