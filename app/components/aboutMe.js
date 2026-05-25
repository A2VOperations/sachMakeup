import Image from "next/image";
import { Check } from "lucide-react";

export default function AboutMe() {
  return (
    <section className="relative bg-[#fcf9f4] py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side: Image and Floating Badges */}
        <div className="relative w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          {/* Background Concentric Circles with Dots */}
          <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-80">
            {/* Circle 1 */}
            <div
              className="absolute w-[250px] h-[250px] rounded-full border-2 border-dashed border-orange-300/90 animate-spin"
              style={{ animationDuration: "30s" }}
            >
              <div className="absolute inset-0 rotate-210">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#ea580c] rounded-full shadow-[0_0_12px_rgba(234,88,12,0.8)]"></div>
              </div>
            </div>
            {/* Circle 2 */}
            <div
              className="absolute w-[350px] h-[350px] rounded-full border-2 border-dashed border-orange-300/70 animate-spin"
              style={{
                animationDuration: "45s",
                animationDirection: "reverse",
              }}
            >
              <div className="absolute inset-0 rotate-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#f97316] rounded-full"></div>
              </div>
            </div>
            {/* Circle 3 */}
            <div
              className="absolute w-[450px] h-[450px] rounded-full border-2 border-dashed border-orange-300/50 animate-spin"
              style={{ animationDuration: "60s" }}
            >
              <div className="absolute inset-0 rotate-45">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#f97316] rounded-full"></div>
              </div>
            </div>
            {/* Circle 4 */}
            <div
              className="absolute w-[550px] h-[550px] rounded-full border border-dashed border-orange-300/50 animate-spin"
              style={{
                animationDuration: "75s",
                animationDirection: "reverse",
              }}
            >
              <div className="absolute inset-0 rotate-70">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#fdba74] rounded-full"></div>
              </div>
            </div>
            {/* Circle 5 */}
            <div
              className="absolute w-[650px] h-[650px] rounded-full border border-dashed border-orange-300/40 animate-spin"
              style={{ animationDuration: "90s" }}
            >
              <div className="absolute inset-0 rotate-240">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#fdba74] rounded-full"></div>
              </div>
            </div>
            {/* Circle 6 */}
            <div
              className="absolute w-[750px] h-[750px] rounded-full border border-dashed border-orange-300/30 animate-spin"
              style={{
                animationDuration: "105s",
                animationDirection: "reverse",
              }}
            ></div>
          </div>

          {/* Main Image */}
          <div className="relative z-10 w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] aspect-3/4 md:aspect-auto md:h-[600px] flex justify-center items-end">
            <Image
              src="/images/main_model-removebg-preview.png"
              alt="Dr. Nashid Martines"
              fill
              className="object-cover object-top mix-blend-multiply drop-shadow-lg filter contrast-125"
            />
            {/* 20+ Years Experienced Badge */}
            <div className="absolute top-[40%] -left-2 sm:-left-6 md:-left-12 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-3 sm:p-5 flex items-center gap-2 sm:gap-4 z-20 hover:scale-105 transition-transform duration-300">
              <span className="text-[2.5rem] sm:text-[2.5rem] font-extrabold text-[#f97316] leading-none">
                20+
              </span>
              <div className="flex flex-col text-xs sm:text-sm font-bold text-[#1e293b] leading-tight">
                <span>Years</span>
                <span>Experienced</span>
              </div>
            </div>

            {/* ClinicMaster Badge */}
            <div className="absolute bottom-10 -right-2 sm:-right-4 md:-right-8 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-3 sm:p-5 flex items-center gap-2 sm:gap-4 z-20 hover:scale-105 transition-transform duration-300">
              {/* Hexagon WHO Logo Placeholder */}
              <div className="w-16 h-16 shrink-0 relative flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-blue-900 absolute inset-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polygon
                    points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                    fill="#f8fafc"
                    stroke="#1e3a8a"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  <polygon
                    points="50,12 88,33 88,67 50,88 12,67 12,33"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                  />
                </svg>
                <div className="relative z-10 flex flex-col items-center">
                  <span className="text-[10px] font-bold text-[#1e3a8a] tracking-wider leading-none">
                    WHO
                  </span>
                  <span className="text-[6px] text-[#1e3a8a] font-medium leading-none mt-1">
                    Medicine 2024
                  </span>
                </div>
              </div>

              <div className="flex flex-col border-l border-slate-200 pl-4">
                <span className="font-extrabold text-[#0f172a] text-[15px]">
                  ClinicMaster 2024
                </span>
                <span className="text-[11px] text-slate-500 mt-0.5 leading-snug w-[110px]">
                  Quality and Accreditation Institute
                </span>
                <span className="text-[12px] font-bold text-[#f97316] mt-1">
                  Best Dermatologists
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5 relative z-20">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-[#ea580c] text-[13px] font-bold tracking-wide">
              Best Dentist
            </span>
          </div>

          <h2 className="text-4xl md:text-[2.75rem] font-extrabold text-[#0f172a]">
            About Dr. Nashid Martines
          </h2>

          <p className="text-slate-500 text-[16px] leading-relaxed">
            <strong className="text-[#0f172a]">Dr. Nashid Martines</strong>{" "}
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>

          <div className="mt-2">
            <h3 className="text-lg font-bold text-[#ea580c] mb-3">
              About Skills
            </h3>
            {/* Dotted Divider */}
            <div className="border-b border-dashed border-slate-300/80 w-full mb-6"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-slate-700 font-semibold text-[15px]">
              <SkillItem text="Radiant Skin Dermatology" />
              <SkillItem text="Flawless Dermatology" />
              <SkillItem text="Luminous Dermatology" />
              <SkillItem text="Laser Resurfacing" />
              <SkillItem text="Refined Skin Dermatology" />
              <SkillItem text="Anti Aging" />
            </div>
          </div>

          {/* Bottom Action Row */}
          <div className="flex flex-wrap items-center gap-10 mt-6 border-t border-slate-200/50 pt-8">
            {/* Signature Block */}
            <div className="flex flex-col items-center">
              {/* Simulated Signature Using SVG or Cursive Font Style */}
              <div className="relative h-14 w-40 flex items-center justify-center opacity-80">
                <svg
                  viewBox="0 0 300 100"
                  className="w-full h-full text-slate-800"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M40,70 C40,70 50,30 70,30 C90,30 80,60 100,60 C120,60 110,40 130,40 C150,40 140,70 160,70 C180,70 190,30 200,30 C210,30 200,60 220,60 C240,60 230,40 260,40" />
                  <path d="M120,20 C120,20 130,10 140,30" />
                  <path d="M195,20 C195,20 205,10 215,30" />
                </svg>
              </div>
              <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-1">
                Dr. Nashid Martines
              </span>
            </div>

            {/* Appointment Button */}
            <button className="bg-[#f97316] hover:bg-[#ea580c] transition-colors shadow-[0_8px_20px_-6px_rgba(249,115,22,0.6)] text-white rounded-lg px-7 py-3.5 font-bold flex items-center gap-3 group">
              Appointment
              <span className="bg-white text-[#f97316] w-6 h-6 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillItem({ text }) {
  return (
    <div className="flex items-center gap-2.5">
      <Check strokeWidth={3} className="text-[#f97316] w-4 h-4" />
      <span>{text}</span>
    </div>
  );
}
