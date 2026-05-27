import Image from "next/image";
import Link from "next/link";

export default function Accadmy1() {
  return (
    <div className="w-full flex flex-col bg-[#FFF8EE] font-sans">
      {/* Job Assistance Section */}
      <div className="w-full relative h-[450px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Left Split Background Image */}
        <div className="absolute left-0 top-0 w-1/2 h-full">
          <Image
            src="/photos/img (34).webp"
            alt="Makeup training"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/15"></div>
        </div>

        {/* Right Split Background Image */}
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <Image
            src="/photos/img (35).webp"
            alt="Hair styling training"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/15"></div>
        </div>

        {/* Asymmetrical Floating Card */}
        <div className="relative z-10 bg-white max-w-[580px] mx-4 p-8 md:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.15)] rounded-tr-[80px] rounded-bl-[80px] rounded-tl-2xl rounded-br-2xl border border-gray-100/50">
          <h2 className="text-3xl md:text-[42px] font-bold text-gray-900 leading-none mb-5 font-sans tracking-tight">
            100% Job <br /> Assistance!
          </h2>
          <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed font-light mb-8">
            Kickstart your career in the beauty industry with our dedicated support. We provide <span className="text-[#a82a2a] font-semibold">100% Job Assistance</span> opportunities to help you secure your dream job and excel in your field. Don&apos;t miss this chance to benefit from our network and expertise!
          </p>
          <Link
            href="/Contact"
            className="inline-block bg-[#111111] hover:bg-black text-white font-medium py-3 px-8 rounded-lg text-sm transition-colors duration-300 shadow-sm"
          >
            Join Us Now
          </Link>
        </div>
      </div>

      {/* Testimonials Section (Luxury Light Theme) */}
      <div className="bg-white py-24 w-full flex flex-col items-center border-t border-gray-100">
        {/* Section Headers */}
        <span className="text-[#b89047] text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase mb-3">
          Our Students Love Us
        </span>
        
        {/* Title with lines */}
        <div className="flex items-center justify-center space-x-4 mb-16">
          <div className="w-8 md:w-12 h-1px bg-[#b89047]/40"></div>
          <h2 className="text-2xl md:text-4xl font-sans text-[#132c52] font-light tracking-wide text-center">
            What Our Students Say
          </h2>
          <div className="w-8 md:w-12 h-1px bg-[#b89047]/40"></div>
        </div>

        {/* Carousel Grid with Arrows */}
        <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 xl:px-12 flex items-center justify-between">
          {/* Left Arrow */}
          <button className="hidden xl:flex items-center justify-center w-10 h-10 text-[#b89047] hover:text-[#997733] transition-colors shrink-0 cursor-pointer">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Testimonial Cards Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 mx-2 md:mx-6">
            {/* Card 1 */}
            <div className="bg-[#FDFBF7] border border-[#dfb76c]/20 hover:border-[#b89047]/40 transition-all duration-300 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.02)] h-full group">
              <div>
                {/* 5 Stars */}
                <div className="flex space-x-1 text-[#b89047] mb-5">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
                {/* Review */}
                <p className="text-gray-600 text-sm md:text-[15px] font-light leading-relaxed mb-8">
                  This academy changed my life! The trainers are amazing and the practical exposure is unmatched.
                </p>
              </div>
              {/* Profile */}
              <div className="flex items-center space-x-4 mt-auto">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#b89047]/20 shrink-0">
                  <Image
                    src="/photos/img (15).webp"
                    alt="Anjali Sharma"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#132c52] text-sm font-semibold tracking-wide">
                    - Anjali Sharma
                  </span>
                  <span className="text-[#b89047] text-[11px] font-medium tracking-wide mt-0.5">
                    Delhi
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FDFBF7] border border-[#dfb76c]/20 hover:border-[#b89047]/40 transition-all duration-300 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.02)] h-full group">
              <div>
                {/* 5 Stars */}
                <div className="flex space-x-1 text-[#b89047] mb-5">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
                {/* Review */}
                <p className="text-gray-600 text-sm md:text-[15px] font-light leading-relaxed mb-8">
                  I learned so many professional techniques and now I am a successful freelance makeup artist.
                </p>
              </div>
              {/* Profile */}
              <div className="flex items-center space-x-4 mt-auto">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#b89047]/20 shrink-0">
                  <Image
                    src="/photos/img (16).webp"
                    alt="Riya Mehta"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#132c52] text-sm font-semibold tracking-wide">
                    - Riya Mehta
                  </span>
                  <span className="text-[#b89047] text-[11px] font-medium tracking-wide mt-0.5">
                    Mumbai
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FDFBF7] border border-[#dfb76c]/20 hover:border-[#b89047]/40 transition-all duration-300 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.02)] h-full group">
              <div>
                {/* 5 Stars */}
                <div className="flex space-x-1 text-[#b89047] mb-5">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
                {/* Review */}
                <p className="text-gray-600 text-sm md:text-[15px] font-light leading-relaxed mb-8">
                  Best decision ever! Highly recommended for anyone who wants to build a career in makeup.
                </p>
              </div>
              {/* Profile */}
              <div className="flex items-center space-x-4 mt-auto">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#b89047]/20 shrink-0">
                  <Image
                    src="/photos/img (17).webp"
                    alt="Neha Verma"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#132c52] text-sm font-semibold tracking-wide">
                    - Neha Verma
                  </span>
                  <span className="text-[#b89047] text-[11px] font-medium tracking-wide mt-0.5">
                    Lucknow
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button className="hidden xl:flex items-center justify-center w-10 h-10 text-[#b89047] hover:text-[#997733] transition-colors shrink-0 cursor-pointer">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      


      {/* Call to Action Banner (Luxury Light Theme with Gold Lines) */}
      <div className="w-full bg-[#FDFBF7] border-y border-[#dfb76c]/40 relative overflow-hidden flex flex-col md:flex-row items-center">
        {/* Left side: Bride Image */}
        <div className="w-full md:w-[35%] lg:w-[30%] h-[300px] md:h-[350px] relative shrink-0">
          <Image
            src="/images/bridal_makeup_course.png"
            alt="Bride model"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Right side: Text Content & Button */}
        <div className="w-full md:w-[65%] lg:w-[70%] py-12 px-6 md:pl-16 md:pr-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8 z-10 relative">
          {/* Subtle gold gradient glow layer */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#dfb76c]/2 to-[#dfb76c]/5 pointer-events-none z-0"></div>
          
          {/* Gold wave decorative curves */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-5 hidden lg:block z-0">
            <svg
              className="w-full h-full text-[#b89047]"
              viewBox="0 0 200 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            >
              <path d="M50,-10 C80,40 120,60 210,30" />
              <path d="M30,-20 C70,30 110,50 210,15" strokeDasharray="3 3" />
              <path d="M70,0 C100,50 140,70 210,45" />
            </svg>
          </div>

          <div className="flex flex-col text-left max-w-xl z-10">
            <h2 className="text-2xl md:text-3xl lg:text-[34px] font-sans text-[#132c52] font-light tracking-wide mb-3 leading-snug">
              Start Your Journey in the <br className="hidden md:block" /> Beauty Industry Today!
            </h2>
            <p className="text-xs md:text-sm text-gray-600 font-light leading-relaxed">
              Join our academy and turn your passion into a successful career.
            </p>
          </div>

          <div className="shrink-0 z-10">
            <Link
              href="/Contact"
              className="inline-flex items-center space-x-2 bg-[#b89047] hover:bg-[#997733] text-white font-semibold uppercase py-3.5 px-8 rounded-lg text-xs tracking-widest transition-all duration-300 shadow-md hover:shadow-[#b89047]/10"
            >
              <span>Enroll Now</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
