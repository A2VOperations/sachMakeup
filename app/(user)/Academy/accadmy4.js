"use client";
import React from "react";
import Image from "next/image";

const checklistItems = [
  "Advanced Curriculum",
  "Practical & Theoretical Training",
  "International Certification",
  "Personal Portfolio Building",
  "Lifetime Support & Guidance",
];

const Accadmy4 = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap items-center gap-12 lg:gap-16">

        {/* ─── Left Column: Text Content ─── */}
        <div className="flex-1 min-w-[320px]" style={{ flexBasis: "500px" }}>

          {/* Gold Subtitle */}
          <p
            className="mb-3 tracking-[3px] uppercase font-semibold"
            style={{ color: "#b89047", fontSize: "12px" }}
          >
            Why Choose Our Academy?
          </p>

          {/* Main Heading */}
          <h2
            className="font-bold leading-[1.15] mb-5 max-w-[440px]"
            style={{
              color: "#1a1a1a",
              fontSize: "clamp(30px, 4.5vw, 46px)",
              fontStyle: "italic",
            }}
          >
            Where Passion{" "}
            <br />
            Meets Profession
          </h2>

          {/* Description Paragraph */}
          <p
            className="leading-relaxed mb-8 max-w-[460px]"
            style={{ color: "#666666", fontSize: "14px" }}
          >
            We provide world-class education, practical training and
            personalized guidance to help you become a successful
            makeup artist.
          </p>

          {/* Checklist */}
          <ul className="flex flex-col gap-3.5 mb-10">
            {checklistItems.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                {/* Gold Checkmark */}
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    border: "1.5px solid #b89047",
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#b89047"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span
                  className="font-medium"
                  style={{ color: "#333333", fontSize: "14px" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            className="px-8 py-3.5 tracking-[2px] uppercase font-semibold text-xs transition-all duration-300 cursor-pointer"
            style={{
              color: "#b89047",
              border: "1.5px solid #b89047",
              background: "transparent",
              borderRadius: "2px",
              letterSpacing: "2px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#b89047";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#b89047";
            }}
          >
            Know More About Us
          </button>
        </div>

        {/* ─── Right Column: Image Collage ─── */}
        <div
          className="flex-1 min-w-[300px] flex items-center justify-center"
          style={{ flexBasis: "420px" }}
        >
          <div className="relative w-full max-w-[480px]" style={{ height: "420px" }}>

            {/* ── Top-Right Image (larger, slightly overlapping) ── */}
            <div
              className="absolute overflow-hidden"
              style={{
                top: "0",
                right: "0",
                width: "65%",
                height: "60%",
                borderRadius: "16px",
                border: "2.5px solid #b89047",
                boxShadow: "0 8px 30px rgba(184,144,71,0.15), 0 2px 8px rgba(0,0,0,0.05)",
                zIndex: 2,
              }}
            >
              <Image
                src="/photos/img (34).webp"
                alt="Makeup artist applying bridal makeup"
                fill
                sizes="(max-width: 768px) 60vw, 300px"
                className="object-cover"
                style={{ objectPosition: "center top" }}
              />
            </div>

            {/* ── Bottom-Left Image (slightly behind) ── */}
            <div
              className="absolute overflow-hidden"
              style={{
                bottom: "0",
                left: "0",
                width: "58%",
                height: "58%",
                borderRadius: "16px",
                border: "2.5px solid #b89047",
                boxShadow: "0 8px 30px rgba(184,144,71,0.15), 0 2px 8px rgba(0,0,0,0.05)",
                zIndex: 1,
              }}
            >
              <Image
                src="/photos/img (33).webp"
                alt="Beautiful bridal makeup look"
                fill
                sizes="(max-width: 768px) 55vw, 270px"
                className="object-cover"
                style={{ objectPosition: "center top" }}
              />
            </div>

            {/* ── 8+ Years Badge ── */}
            <div
              className="absolute flex flex-col items-center justify-center"
              style={{
                bottom: "30%",
                left: "38%",
                width: "110px",
                height: "110px",
                borderRadius: "16px",
                background: "#ffffff",
                border: "2px solid #b89047",
                boxShadow: "0 6px 24px rgba(0,0,0,0.08), 0 2px 8px rgba(184,144,71,0.12)",
                zIndex: 3,
              }}
            >
              <span
                className="font-bold leading-none"
                style={{ color: "#b89047", fontSize: "32px" }}
              >
                8+
              </span>
              <span
                className="text-center mt-1 font-medium leading-tight"
                style={{ color: "#555555", fontSize: "11px" }}
              >
                Years of
                <br />
                Excellence
              </span>
            </div>

            {/* ── Decorative Gold Corner Accent (top-left) ── */}
            <div
              className="absolute"
              style={{
                top: "8px",
                left: "12%",
                width: "50px",
                height: "50px",
                borderTop: "2px solid #b89047",
                borderLeft: "2px solid #b89047",
                borderRadius: "4px 0 0 0",
                opacity: 0.4,
                zIndex: 0,
              }}
            />

            {/* ── Decorative Gold Corner Accent (bottom-right) ── */}
            <div
              className="absolute"
              style={{
                bottom: "8px",
                right: "4%",
                width: "50px",
                height: "50px",
                borderBottom: "2px solid #b89047",
                borderRight: "2px solid #b89047",
                borderRadius: "0 0 4px 0",
                opacity: 0.4,
                zIndex: 0,
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Accadmy4;
