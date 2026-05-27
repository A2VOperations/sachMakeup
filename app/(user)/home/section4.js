import React from "react";

const Section4 = () => {
  return (
    <>
      {" "}
      <section className="font-aldrich overflow-hidden bg-[#FFF8EE]">
        <div className="flex w-max animate-marquee ">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex whitespace-nowrap ">
              <p className="mx-4 text-4xl font-semibold text-[#b89047] sm:text-6xl md:text-8xl lg:text-6xl">
                Haircare
              </p>
              <p className="mx-4 text-4xl font-semibold text-[#0A2647] sm:text-6xl md:text-8xl lg:text-6xl">
                Nailcare
              </p>
              <p className="mx-4 text-4xl font-semibold text-[#b89047] sm:text-6xl md:text-8xl lg:text-6xl">
                Makeup
              </p>
              <p className="mx-4 text-4xl font-semibold text-[#0A2647] sm:text-6xl md:text-8xl lg:text-6xl">
                Beautycare
              </p>
              <p className="mx-4 text-4xl font-semibold text-[#b89047] sm:text-6xl md:text-8xl lg:text-6xl">
                Bodycare
              </p>
              <p className="mx-4 text-4xl font-semibold text-[#0A2647] sm:text-6xl md:text-8xl lg:text-6xl">
                Skincare
              </p>
              <p className="mx-4 text-4xl font-semibold text-[#b89047] sm:text-6xl md:text-8xl lg:text-6xl">
                Accessories
              </p>
              <p className="mx-4 text-4xl font-semibold text-[#0A2647] sm:text-6xl md:text-8xl lg:text-6xl">
                Skin tools
              </p>
              <p className="mx-4 text-4xl font-semibold text-[#b89047] sm:text-6xl md:text-8xl lg:text-6xl">
                Haircare
              </p>
              <p className="mx-4 text-4xl font-semibold text-[#0A2647] sm:text-6xl md:text-8xl lg:text-6xl">
                Nailcare
              </p>
              <p className="mx-4 text-4xl font-semibold text-[#b89047] sm:text-6xl md:text-8xl lg:text-6xl">
                Makeup
              </p>
              <p className="mx-4 text-4xl font-semibold text-[#0A2647] sm:text-6xl md:text-8xl lg:text-6xl">
                Beautycare
              </p>
              <p className="mx-4 text-4xl font-semibold text-[#b89047] sm:text-6xl md:text-8xl lg:text-6xl">
                Bodycare
              </p>
              <p className="mx-4 text-4xl font-semibold text-[#0A2647] sm:text-6xl md:text-8xl lg:text-6xl">
                Skincare
              </p>
              <p className="mx-4 text-4xl font-semibold text-[#b89047] sm:text-6xl md:text-8xl lg:text-6xl">
                Accessories
              </p>
              <p className="mx-4 text-4xl font-semibold text-[#0A2647] sm:text-6xl md:text-8xl lg:text-6xl">
                Skin tools
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Section4;
