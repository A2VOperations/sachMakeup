"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const testimonials = [
  {
    id: 1,
    quote:
      "I booked them for my wedding and reception makeup, and it was the best decision! The HD makeup looked flawless even after 12 hours of functions, and my lehenga draping didn't budge. They made me feel like an absolute queen on my big day.",
    author: "Priya Sharma",
    role: "Recent Bride",
    image: "/photos/img (30).webp",
    ratingText: "Flawless Bridal Makeup",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Been coming here for my pre-bridal sittings and regular grooming for the last 3 months. The O3+ facials and keratin hair spa services are just amazing. The staff is incredibly polite and maintains superb hygiene. Highly recommended!",
    author: "Ananya Desai",
    role: "Regular Client",
    image: "/photos/img (31).webp",
    ratingText: "Best Pre-Bridal Services",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Got my party makeup and hairstyle done here for my sister's Sangeet ceremony. They gave me a beautiful soft glam look that perfectly matched my outfit without looking cakey. I received so many compliments throughout the night!",
    author: "Sneha Kapoor",
    role: "Bridesmaid",
    image: "/photos/img (32).webp",
    ratingText: "Stunning Party Glam",
    rating: 5,
  },
];

export default function Testimonial() {
  const archImages = [
    "/photos/img (1).webp",
    "/photos/img (2).webp",
    "/photos/img (3).webp",
    "/photos/img (4).webp",
    "/photos/img (5).webp",
    "/photos/img (6).webp",
    "/photos/img (7).webp",
    "/photos/img (8).webp",
    "/photos/img (9).webp",
    "/photos/img (10).webp",
  ];

  return (
    <section className="bg-white overflow-hidden py-16">
      <style>
        {`
          .testimonial-swiper {
            padding-bottom: 3rem !important;
          }
          .testimonial-swiper .swiper-pagination {
            display: flex;
            justify-content: flex-start;
            gap: 8px;
            bottom: 0px !important;
          }
          .testimonial-swiper .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background-color: #E5E7EB;
            opacity: 1;
            transition: all 0.3s ease;
            border-radius: 9999px;
            margin: 0 !important;
          }
          .testimonial-swiper .swiper-pagination-bullet-active {
            width: 24px;
            background-color: #1B2559;
          }
          @media (max-width: 768px) {
            .testimonial-swiper .swiper-pagination {
              justify-content: center;
            }
          }
        `}
      </style>

      {/* Arch Gallery */}
      <div className="w-full relative overflow-hidden pb-16 flex justify-center">
        <div className="flex justify-center items-center gap-1 sm:gap-2 md:gap-4 w-max min-w-max shrink-0 px-4 pt-15 -mt-10 sm:mt-0">
          {archImages.map((src, i) => {
            const x = i - (archImages.length - 1) / 2;
            const rot = x * 4;
            const ty = Math.pow(Math.abs(x), 2) * 4;
            return (
              <div
                key={i}
                className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 shrink-0"
                style={{ transform: `rotate(${rot}deg) translateY(${ty}px)` }}
              >
                <Image
                  src={src}
                  alt={`Happy Client ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-12 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1B2559] mb-4">
            What Our Gorgeous Clients Say
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            From intimate Haldi ceremonies to grand wedding receptions, hear from the beautiful women who trusted our studio with their biggest moments.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="w-full testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* Left Text Column */}
                <div className="flex flex-col">
                  <svg
                    className="mb-6"
                    width="56"
                    height="56"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 11C10 13.7614 7.76142 16 5 16C4.42597 16 3.87455 15.9034 3.36446 15.727C3.96677 17.5877 5.75168 19 7.85714 19V21C4.62121 21 2 18.3137 2 15V9C2 6.79086 3.79086 5 6 5C8.20914 5 10 6.79086 10 9V11Z"
                      stroke="#b89047"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 11C22 13.7614 19.7614 16 17 16C16.426 16 15.8746 15.9034 15.3645 15.727C15.9668 17.5877 17.7517 19 19.8571 19V21C16.6212 21 14 18.3137 14 15V9C14 6.79086 15.7909 5 18 5C20.2091 5 22 6.79086 22 9V11Z"
                      stroke="#b89047"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="text-lg md:text-xl font-medium leading-relaxed text-[#1B2559] mb-8 min-h-[120px]">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  <div>
                    <h4 className="text-lg font-bold text-[#1B2559]">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                {/* Right Image Column */}
                <div className="relative pb-6">
                  {/* The main image background / container */}
                  <div className="relative w-full max-w-[400px] mx-auto md:mr-auto lg:mr-0 aspect-4/5 rounded-4xl overflow-hidden bg-[#E2D4C8]">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.author} Testimonial`}
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Floating Review Card */}
                  <div className="absolute bottom-0 -left-4 sm:left-4 lg:-left-12 bg-white px-6 py-4 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex flex-col gap-1 z-10">
                    <div className="flex gap-1 mb-1">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <svg
                            key={i}
                            width="16"
                            height="16"
                            viewBox="0 0 20 20"
                            fill="#b89047"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ),
                      )}
                    </div>
                    <span className="font-bold text-[#1B2559] text-sm">
                      {testimonial.ratingText}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}