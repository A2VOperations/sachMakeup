import React from "react";
import Image from "next/image";
import Link from "next/link";

const Section1 = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#FFF8EE] overflow-hidden flex justify-around font-sans text-[#0A2647]">
      {/* Left Sidebar - Social Links */}
      <div className="hidden md:flex flex-col items-center justify-between w-16 border-r border-[#EADAC5] py-12 shrink-0 z-20 bg-[#FFF8EE]">
        <div className="flex-1 relative w-full flex items-start justify-center mt-32">
          <div className="absolute transform -rotate-90 flex gap-12 whitespace-nowrap">
            <a
              href="#"
              className="text-[10px] font-bold tracking-[0.2em] text-[#4A5D75] hover:text-[#0F2A4A] transition-colors"
            >
              INSTAGRAM
            </a>
            <a
              href="#"
              className="text-[10px] font-bold tracking-[0.2em] text-[#4A5D75] hover:text-[#0F2A4A] transition-colors"
            >
              FACEBOOK
            </a>
            <a
              href="#"
              className="text-[10px] font-bold tracking-[0.2em] text-[#4A5D75] hover:text-[#0F2A4A] transition-colors"
            >
              TWITTER
            </a>
          </div>
        </div>

        <div className="relative h-32 w-full flex items-end justify-center mb-8">
          <button className="absolute transform -rotate-90 bg-white px-6 py-2 rounded-full shadow-sm text-[10px] font-bold tracking-wider whitespace-nowrap text-[#0A2647] border border-gray-100 hover:bg-gray-50 transition-colors">
            LETS TALK
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative flex flex-col justify-around items-center lg:flex-row pt-10 md:pt-0 px-4 sm:px-8 md:px-12 lg:px-0">
        {/* Background Decorative Elements */}
        {/* Thin curved lines (simulated with SVG) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
          >
            <path
              d="M-100,200 C300,50 600,300 1100,100"
              fill="none"
              stroke="#F47514"
              strokeWidth="1"
            />
            <path
              d="M-100,600 C400,800 800,400 1100,700"
              fill="none"
              stroke="#F47514"
              strokeWidth="1"
            />
            <path
              d="M200,1000 C400,600 800,800 1100,400"
              fill="none"
              stroke="#F47514"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Orange crosses */}
        <div className="absolute top-[15%] right-[40%] text-[#F47514] z-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11 0h2v11h11v2H13v11h-2V13H0v-2h11V0z" />
          </svg>
        </div>
        <div className="absolute top-[45%] right-[10%] text-[#F47514] scale-75 z-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11 0h2v11h11v2H13v11h-2V13H0v-2h11V0z" />
          </svg>
        </div>

        {/* Top small avatar */}
        <div className="hidden sm:block absolute top-12 left-12 lg:top-16 lg:left-20 w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden mb-8 border-[6px] border-[#F2E5D5] shadow-sm ml-4">
          <Image
            src="/photos/img (20).webp"
            alt="Small avatar"
            fill
            className="object-cover"
          />
        </div>

        {/* Left Side (Text content) */}
        <div className="relative">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] text-[#0A2647] max-w-2xl tracking-tight">
            Skincare is Like <br />
            A Workout For <br />
            Your Skin
          </h1>

          <div className="mt-10 border-l-[3px] border-[#0A2647] pl-5 max-w-md ">
            <p className="text-[#4A5D75] text-sm lg:text-base leading-relaxed font-medium bg-linear-to-r from-transparent via-gray-300/20 to-transparent">
              Experienced staff is dedicated to improving our patients&apos;
              skin health and enhancing beauty through personalized care.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <Link href="/Contact" className="bg-[#F47514] text-white pl-6 pr-2 py-2 rounded-full flex items-center gap-4 hover:bg-[#d56612] transition-all shadow-lg shadow-orange-500/30">
              <span className="font-semibold text-sm">Appointment</span>
              <span className="bg-white text-[#F47514] w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Avatars */}
            <div className="flex items-center">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-[3px] border-[#FFF8EE] overflow-hidden relative bg-gray-200 shadow-sm"
                  >
                    <Image
                      src={`/photos/img (${i + 15}).webp`}
                      alt={`User ${i}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
              <div className="w-12 h-12 rounded-full border-[3px] border-[#FFF8EE] bg-white flex items-center justify-center -ml-4 z-10 shadow-sm relative text-[#0A2647]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Main Model & Decorative elements) */}
        <div className="relative w-full max-w-[320px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[800px]">
          {/* Main model image */}
          <div className="relative z-10 bottom-0 w-full h-auto">
            <Image
              src="/images/main_model.png"
              alt="Beautiful woman with clear skin"
              width={800}
              height={800}
              className="w-full h-auto object-contain object-bottom"
              priority
            />
          </div>

          {/* Circular Play Button "EXPLORE MORE COLLECTION" */}
          <div className="absolute bottom-16 right-4 sm:bottom-24 sm:right-10 lg:right-[10%] z-20 w-24 h-24 lg:w-36 lg:h-36 rounded-full bg-white/70 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex items-center justify-center group cursor-pointer hover:bg-white/90 transition-all border border-white/40">
            <div className="absolute w-full h-full animate-[spin_12s_linear_infinite]">
              {/* Circular Text SVG */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-[#0A2647] scale-[0.85]"
              >
                <path
                  id="circlePath"
                  d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  fill="none"
                />
                <text
                  className="text-[10px] font-bold tracking-[0.25em] uppercase"
                  fill="currentColor"
                >
                  <textPath href="#circlePath" startOffset="0%">
                    Explore More Collection • Explore More Collection •
                  </textPath>
                </text>
              </svg>
            </div>
            {/* Play Icon */}
            <div className="w-8 h-8 lg:w-12 lg:h-12 bg-[#0A2647] rounded-full flex items-center justify-center text-white pl-1 group-hover:scale-110 transition-transform shadow-md">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="lg:w-[18px] lg:h-[18px]"
              >
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Floating images bottom left */}
        <div className="absolute left-0 bottom-0 w-[100px] h-[150px] rounded-tr-4xl rounded-br-4xl overflow-hidden shadow-xl hidden lg:block ">
          <Image
            src="/photos/img (21).webp"
            alt="Arched image"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute left-[25%] bottom-10 w-[130px] h-[130px] overflow-hidden shadow-lg hidden lg:block rounded-br-full rounded-tl-none rounded-tr-xl rounded-bl-none">
          <Image
            src="/photos/img (22).webp"
            alt="Square image"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Right Sidebar - Reviews */}
      <div className="hidden lg:flex flex-col items-center justify-center w-16 shrink-0 z-20 bg-[#FFF8EE] relative">
        {/* Background vertical line placed properly */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-[#EADAC5]"></div>

        <div className="relative h-96 w-full flex items-center justify-center">
          <div className="absolute transform -rotate-90 flex items-center gap-5 whitespace-nowrap bg-white py-2 px-6 rounded-full shadow-sm border border-gray-100">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="#FFC107"
                  stroke="#FFC107"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="text-[11px] text-[#4A5D75] font-bold tracking-wider uppercase">
              <strong className="text-[#F47514]">(4.8)</strong> 12k+ ratings on
              google
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
