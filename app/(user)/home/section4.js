import React from "react";

const Section4 = () => {
  const items = [
    { text: "Accessories", isOutline: false, color: "text-[#b89047]" },
    { text: "Skincare", isOutline: true },
    { text: "Haircare", isOutline: true },
    { text: "Bodycare", isOutline: false, color: "text-[#b89047]" },
    { text: "Nailcare", isOutline: true },
    { text: "Makeup", isOutline: true },
    { text: "Beautycare", isOutline: false, color: "text-[#b89047]" },
    { text: "Skin tools", isOutline: true },
  ];

  const marqueeItems = [...items, ...items];

  return (
    <section className="overflow-hidden bg-[#FFF8EE] py-6 lg:py-5">
      <div className="flex w-max animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex whitespace-nowrap items-center">
            {marqueeItems.map((item, idx) => (
              <div key={idx} className="flex items-center shrink-0">
                <p
                  className={`text-5xl sm:text-6xl lg:text-[80px] font-extrabold ${
                    item.isOutline ? "" : item.color
                  } leading-none`}
                  style={
                    item.isOutline
                      ? {
                          WebkitTextStroke: "2.5px #0A2647",
                          color: "transparent",
                        }
                      : {}
                  }
                >
                  {item.text}
                </p>
                <div className="mx-6 lg:mx-10 shrink-0">
                  <svg
                    className="w-6 h-6 lg:w-8 lg:h-8 text-[#0A2647] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section4;
