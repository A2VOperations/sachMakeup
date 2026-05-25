"use client";
import React from "react";
import Image from "next/image";

const features = [
  {
    title: "Expert Faculty",
    desc: "Learn from award winning artists",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b89047" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    title: "Personal Attention",
    desc: "Small batches for better learning",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b89047" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: "Practical Exposure",
    desc: "Work on real clients & events",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b89047" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
  },
  {
    title: "Global Certification",
    desc: "Get recognized worldwide",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b89047" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    ),
  },
  {
    title: "Career Guidance",
    desc: "We help you build your future",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b89047" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="16"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
    ),
  },
  {
    title: "Lifetime Support",
    desc: "We are with you always",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b89047" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
];

const Accadmy3 = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
      <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap items-stretch gap-12">

        {/* Left Column */}
        <div className="flex-1 min-w-[320px]" style={{ flexBasis: "480px" }}>
          {/* Subtitle */}
          <p
            style={{
              color: "#b89047",
              fontSize: "13px",
              fontWeight: "600",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Why Our Academy Stands Out?
          </p>

          {/* Title */}
          <h2
            className="text-[#1a1a1a] font-bold leading-tight mb-10 max-w-[400px]"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            We Provide More Than Just Education
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl p-4 md:p-5 transition-all duration-300 cursor-default hover:-translate-y-0.5"
                style={{
                  background: "#f8f8f8",
                  border: "1px solid #e8e0d0",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f0ebe0";
                  e.currentTarget.style.borderColor = "#b89047";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(184,144,71,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#f8f8f8";
                  e.currentTarget.style.borderColor = "#e8e0d0";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center mb-3.5"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    border: "1.5px solid #b89047",
                  }}
                >
                  {feature.icon}
                </div>

                {/* Feature Title */}
                <h3
                  className="text-[#1a1a1a] text-sm font-bold italic mb-1.5 leading-tight"
                >
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="text-[#777777] text-xs leading-relaxed m-0">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Image Card */}
        <div className="flex-1 min-w-[300px] flex items-center justify-center" style={{ flexBasis: "380px" }}>
          <div
            className="relative w-full max-w-[420px] rounded-2xl overflow-hidden"
            style={{
              aspectRatio: "3/4",
              border: "2.5px solid #b89047",
              boxShadow: "0 8px 32px rgba(184,144,71,0.18), 0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            {/* Image */}
            <Image
              src="/photos/img (34).webp"
              alt="Makeup artist working on a bridal client"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              style={{
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />

            {/* Bottom Gradient Overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 flex items-end justify-center p-5"
              style={{
                height: "120px",
                background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
              }}
            >
              {/* Play Button + Text */}
              <div className="flex items-center gap-3 cursor-pointer">
                {/* Play Circle */}
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #b89047, #d4a853)",
                    boxShadow: "0 2px 12px rgba(184,144,71,0.4)",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="none">
                    <polygon points="6,3 20,12 6,21" />
                  </svg>
                </div>

                {/* Text */}
                <div>
                  <p className="text-white text-[13px] font-semibold m-0 leading-tight">
                    
                  </p>
                  <p className="text-white/70 text-[11px] m-0 leading-tight">
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accadmy3;
