"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Easily configurable WhatsApp configuration
const WHATSAPP_CONFIG = {
  number: "919999999999", // Replace with actual business WhatsApp number (include country code, e.g. 91 for India)
  messageTemplate:
    "Hi Sach Makeover, I would like to enquire about your [SERVICE] service. Please share details and availability.",
};

const SERVICES_DATA = [
  {
    id: 1,
    title: "Signature HD Bridal Makeover",
    category: "Bridal & Events",
    description:
      "Flawless High-Definition makeup tailored to match your bridal outfit, skin type, and overall theme, ensuring you look luminous in every light.",
    features: [
      "High-Definition flawless base",
      "Premium mink lash extensions",
      "Signature hairstyling & padding",
      "Immaculate dupatta & outfit draping",
    ],
    image: "/photos/img (43).jpg",
  },
  {
    id: 2,
    title: "Luxury Airbrush Bridal Makeup",
    category: "Bridal & Events",
    description:
      "Long-lasting, sweat-proof, and water-resistant airbrush makeup for an ultra-smooth, lightweight, and camera-ready bridal appearance.",
    features: [
      "Premium airbrush base application",
      "High-Definition details & contouring",
      "Luxury hair design with floral settings",
      "Exquisite jewelry & dupatta setting",
    ],
    image: "/photos/img (18).webp",
  },
  {
    id: 3,
    title: "Grand Wedding Prep Packages",
    category: "Bridal & Events",
    description:
      "All-in-one beauty preparations spanning deep hydration facials, body polishing, manicures, and pedicures ahead of your big day.",
    features: [
      "Full-body brightening polish",
      "Luminous gold-infusion facial",
      "Spa manicure & pedicure pack",
      "Detailed wedding look rehearsal",
    ],
    image: "/photos/img (33).webp",
  },
  {
    id: 4,
    title: "Keratin Lash Lift & Tint",
    category: "Makeup & Lashes",
    description:
      "Give your natural lashes a beautiful curl and volume boost that lasts up to 6-8 weeks with zero maintenance.",
    features: [
      "Premium Keratin infusion",
      "Natural lifting & curling",
      "Deep black lash tinting",
      "Gentle & organic formulations",
    ],
    image: "/photos/img (3).webp",
  },
  {
    id: 5,
    title: "Signature Eyelashes Grooming",
    category: "Makeup & Lashes",
    description:
      "Complete eyelash framing, combing, styling, and semi-permanent coloring for an everyday makeup-free bright eyed look.",
    features: [
      "Precision tinting and lift",
      "Nourishing lash conditioning",
      "Tailored to eye structure",
      "Safe for contact lens wearers",
    ],
    image: "/photos/img (4).webp",
  },
  {
    id: 6,
    title: "Premium Eyelash Extensions (Volume)",
    category: "Makeup & Lashes",
    description:
      "Dramatic volume, classic, or hybrid individual extensions meticulously applied for a fuller, bolder, and stunning gaze.",
    features: [
      "Individually customized lashes",
      "Medical-grade hypoallergenic glue",
      "Classic, Hybrid, & Volume styles",
      "Lightweight, soft natural fibers",
    ],
    image: "/photos/img (10).webp",
  },
  {
    id: 7,
    title: "Semi-Permanent Makeup",
    category: "Makeup & Lashes",
    description:
      "Flawless smudge-free permanent lip blushing and eyeliner definition designed to highlight your natural contours daily.",
    features: [
      "Premium organic pigments",
      "Precision micro-needling comfort",
      "Custom contour color blending",
      "Waterproof and smudge-free results",
    ],
    image: "/photos/img (11).webp",
  },
  {
    id: 8,
    title: "Precision Eyebrow Microblading",
    category: "Makeup & Lashes",
    description:
      "Semi-permanent 3D hair-like eyebrow strokes meticulously drawn to restore density and shape sparse eyebrows naturally.",
    features: [
      "Hyper-realistic 3D hair strokes",
      "Precision brow mapping layout",
      "Hypoallergenic organic pigment",
      "Complimentary touch-up session",
    ],
    image: "/photos/img (5).webp",
  },
  {
    id: 9,
    title: "Couture Evening & Party Makeup",
    category: "Makeup & Lashes",
    description:
      "Stunning professional makeup featuring flawless contouring, luminous details, and beautiful lashes for any formal affair.",
    features: [
      "Tailored premium skin preparation",
      "High-performance camera-ready wear",
      "Dramatic or elegant eye focus",
      "Premium mink strip eyelashes",
    ],
    image: "/photos/img (6).webp",
  },
  {
    id: 10,
    title: "Precision Couture Haircut",
    category: "Hair & Styling",
    description:
      "Expert structural haircuts designed to complement your unique face shape, hair density, and lifestyle preferences.",
    features: [
      "Detailed 1-on-1 style consultation",
      "Luxury deep hair wash included",
      "Professional blow dry & styling",
      "Texturizing and volume layers",
    ],
    image: "/photos/img (34).webp",
  },
  {
    id: 11,
    title: "Volume & Wave Perms",
    category: "Hair & Styling",
    description:
      "Add permanent bounce, gorgeous texture, and natural-looking waves to straight hair using premium-grade restructuring formulas.",
    features: [
      "Custom wave size adjustment",
      "Damage-preventing bond formulas",
      "Long-lasting bounce and texture",
      "Post-perm structural hydration",
    ],
    image: "/photos/img (35).webp",
  },
  {
    id: 12,
    title: "Luxury Signature Blow Dry",
    category: "Hair & Styling",
    description:
      "Professional wash and sleek, bouncy, or voluminous blowout styling that lasts for days and eliminates unwanted frizz.",
    features: [
      "Scalp-stimulating shampoo wash",
      "Frizz-controlling hydration serum",
      "High-volume or sleek smooth styles",
      "Thermal protection barrier styling",
    ],
    image: "/photos/img (1).webp",
  },
  {
    id: 13,
    title: "Seamless Premium Hair Extensions",
    category: "Hair & Styling",
    description:
      "Transform your hair with luxurious, high-grade 100% human Remy hair extensions for outstanding length and dynamic volume.",
    features: [
      "High-grade human Remy hair",
      "Invisible tape or micro-ring bonding",
      "Custom color match & styling",
      "Blends naturally for full density",
    ],
    image: "/photos/img (15).webp",
  },
  {
    id: 14,
    title: "Couture Balayage & Highlights",
    category: "Hair & Styling",
    description:
      "Sun-kissed, hand-painted seamless highlights creating a natural, soft dimensional hair gradient tailored to your base tone.",
    features: [
      "Artistic hand-painted placement",
      "Smart bond-building protectors",
      "Seamless multi-dimensional tones",
      "Gloss overlay and toner wash",
    ],
    image: "/photos/img (16).webp",
  },
  {
    id: 15,
    title: "Artisanal Box Braids",
    category: "Hair & Styling",
    description:
      "Beautiful, clean, and perfectly sectioned protective braids crafted to secure and nurture your natural hair structure.",
    features: [
      "Clean precise parting grids",
      "Custom length & thickness options",
      "Scalp protection oil treatment",
      "Long-lasting light-weight style",
    ],
    image: "/photos/img (17).webp",
  },
  {
    id: 16,
    title: "Classic & Designer Braids",
    category: "Hair & Styling",
    description:
      "From elegant French and Dutch braids to gorgeous bohemian accent styling for casual days or formal celebrations.",
    features: [
      "Custom boho or clean sporty styles",
      "Holds all day with premium spray",
      "Ideal for events and humid days",
      "Accented hair-ring accessorizing",
    ],
    image: "/photos/img (31).webp",
  },
  {
    id: 17,
    title: "Deep Hydration Wash & Conditioning",
    category: "Hair & Styling",
    description:
      "Revitalize flat or parched locks with our signature sulfate-free shampoo massage and luxurious deep conditioning masque therapy.",
    features: [
      "Relaxing acupressure wash massage",
      "Sulfate-free premium hydration",
      "Intense repair keratin masque",
      "Restores shine, bounce and health",
    ],
    image: "/photos/img (12).webp",
  },
  {
    id: 18,
    title: "Elite Occasion Hairstyling",
    category: "Hair & Styling",
    description:
      "Intricate Hollywood waves, messy chic updos, traditional floral buns, or sophisticated half-ups tailored to your outfit.",
    features: [
      "Tailored face-framing curls",
      "Advanced frizz-free lock sprays",
      "Secure floral & accessory pins",
      "Excellent styling that holds all day",
    ],
    image: "/photos/img (8).webp",
  },
  {
    id: 19,
    title: "Couture Acrylic Nails & Overlays",
    category: "Nail Artistry",
    description:
      "Premium, durable acrylic extensions shaped to perfection, providing maximum strength and an ultra-glamorous finish.",
    features: [
      "Custom shape & length extension",
      "Non-chipping overlay structure",
      "Wide array of gel color coats",
      "Nail strengthening base care",
    ],
    image: "/photos/img (12).webp",
  },
  {
    id: 20,
    title: "Classic Gel Manicure",
    category: "Nail Artistry",
    description:
      "Nail shaping, cuticle trimming, exfoliating sugar scrub, hand massage, and professional UV gel polish that stays shine-bright.",
    features: [
      "Long-wear shiny gel polish",
      "Soothing hand scrub & massage",
      "Hydrating cuticles oil treatment",
      "Precision nail file shaping",
    ],
    image: "/photos/img (32).webp",
  },
  {
    id: 21,
    title: "Restorative Spa Pedicure",
    category: "Nail Artistry",
    description:
      "Relaxing foot soak, exfoliation scrub, callus treatment, and therapeutic massage followed by a professional polish overlay.",
    features: [
      "Soothing aromatic foot bath",
      "Hydrating massage with warm oils",
      "Expert cuticle and heel care",
      "Premium long-wear gel polish",
    ],
    image: "/photos/img (14).webp",
  },
  {
    id: 22,
    title: "Luxury Custom Nail & Hair Integration",
    category: "Nail Artistry",
    description:
      "Ultimate transformation combo combining professional premium gel nail extensions with seamlessly bonded high-density hair extensions.",
    features: [
      "Custom hand-painted gel nail art",
      "Seamless hair extension bonding",
      "Full thickness and density boost",
      "Maximum durability and premium feel",
    ],
    image: "/photos/img (39).jpg",
  },
  {
    id: 23,
    title: "Luxury Skin Care Treatment",
    category: "Skin Care & Spa",
    description:
      "Rejuvenating cellular-level skin therapies that cleanse, hydrate, and restore a youthful, dewy, radiant glow.",
    features: [
      "Deep pore sonic cleansing",
      "Hydrating botanical serum",
      "Relaxing facial massage",
      "Premium barrier protection",
    ],
    image: "/photos/img (21).webp",
  },
  {
    id: 24,
    title: "Aura Signature Glow Facial",
    category: "Skin Care & Spa",
    description:
      "Dermatologist-formulated skin facials that detoxify, stimulate collagen, and instantly revive fatigued, dull complexions.",
    features: [
      "Deep double-steam extraction",
      "Exfoliating enzyme peel mask",
      "Vitamin C antioxidant boost",
      "Lymphatic drainage face massage",
    ],
    image: "/photos/img (25).webp",
  },
  {
    id: 25,
    title: "Clinical Acne & Peel Treatments",
    category: "Skin Care & Spa",
    description:
      "Highly effective targeted acne-clearing facials and chemical peels that regulate sebum production and reduce scarring.",
    features: [
      "Salicylic & Glycolic peel cycles",
      "Gentle high-frequency sterilization",
      "Soothing anti-redness cooling gel",
      "Clarifies active breakouts fast",
    ],
    image: "/photos/img (29).webp",
  },
  {
    id: 26,
    title: "Sunless Glow Spray Tanning",
    category: "Skin Care & Spa",
    description:
      "Achieve an even, flawless, golden sun-kissed bronze complexion without any harmful UV ray exposure.",
    features: [
      "Streak-free even application",
      "Organic aloe vera active base",
      "Tailored shades & depth control",
      "Long-lasting hydration formula",
    ],
    image: "/photos/img (13).webp",
  },
  {
    id: 27,
    title: "Therapeutic Deep Tissue Massage",
    category: "Skin Care & Spa",
    description:
      "Deeply restorative body massage focusing on chronic tension relief, improved circulation, and complete mind-body peace.",
    features: [
      "Custom organic aromatic oils",
      "Heated treatment tables & spa",
      "Focuses on high-tension knots",
      "Relieves muscle soreness entirely",
    ],
    image: "/photos/img (28).webp",
  },
  {
    id: 28,
    title: "Luxe Rejuvenating Spa Day",
    category: "Skin Care & Spa",
    description:
      "Indulge in a curated day of full-body exfoliation, steam treatments, custom wraps, and relaxing aromatherapy.",
    features: [
      "Full body marine salt scrub",
      "Detoxifying thermal clay wrap",
      "Soothing dry sauna steam session",
      "Complimentary herbal tea infusion",
    ],
    image: "/photos/img (24).webp",
  },
  {
    id: 29,
    title: "Nourishing Full Body Waxing",
    category: "Waxing & Hair Removal",
    description:
      "Ultra-smooth body waxing using honey or chocolate formulations that exfoliate and leave skin baby-soft for weeks.",
    features: [
      "Warm premium honey/chocolate wax",
      "Gentle quick pull technique",
      "Exfoliates dead skin cells",
      "Calming tea-tree post wax oils",
    ],
    image: "/photos/img (19).webp",
  },
  {
    id: 30,
    title: "Luxury Brazilian Waxing",
    category: "Waxing & Hair Removal",
    description:
      "Soothe and protect sensitive areas with our premium hard stripless wax designed for ultimate comfort and clean results.",
    features: [
      "Premium stripless hot hard wax",
      "Formulated for highly sensitive skin",
      "Strict sanitary double-dip rules",
      "Instant soothing mist therapy",
    ],
    image: "/photos/img (2).webp",
  },
  {
    id: 31,
    title: "Precision Facial Threading",
    category: "Waxing & Hair Removal",
    description:
      "Clean and quick organic cotton threading for perfect eyebrow arches and flawless facial hair removal.",
    features: [
      "High-precision eyebrow shaping",
      "Organic gentle cotton threads",
      "Soothes skin with organic gel",
      "Ideal for ultra-sensitive skin",
    ],
    image: "/photos/img (9).webp",
  },
  {
    id: 32,
    title: "Silky Smooth Area Waxing",
    category: "Waxing & Hair Removal",
    description:
      "Quick and hygienic underarm, arm, or leg waxing to eliminate stubble and provide sleek, soft skin with delayed regrowth.",
    features: [
      "Hygienic single-use wax kits",
      "Minimizes ingrown hair growth",
      "Smooth stubble-free finish",
      "Soothes skin redness immediately",
    ],
    image: "/photos/img (26).webp",
  },
  {
    id: 33,
    title: "Permanent Laser Hair Reduction",
    category: "Waxing & Hair Removal",
    description:
      "Advanced targeted laser/IPL treatment to safely and effectively reduce unwanted hair growth permanently across body areas.",
    features: [
      "FDA-approved safe cooling laser",
      "Fast pain-free pulse technology",
      "Suitable for multiple skin zones",
      "Gradual permanent reduction",
    ],
    image: "/photos/img (27).webp",
  },
  {
    id: 34,
    title: "Elite Beauty Parlour Consultation",
    category: "Consultations",
    description:
      "Personalized head-to-toe beauty analysis and bespoke treatment planning by our senior stylist experts.",
    features: [
      "Custom skin & hair assessment",
      "Bespoke beauty routine setup",
      "1-on-1 consultation session",
      "Priority salon service booking",
    ],
    image: "/photos/img (30).webp",
  },
  {
    id: 35,
    title: "Online Beauty Salon Booking",
    category: "Consultations",
    description:
      "Effortless instant booking for all premium makeover, styling, and clinical services with digital reminders and priority slot locks.",
    features: [
      "24/7 online scheduling portal",
      "Zero waiting time guaranteed",
      "Instant SMS & Email confirmation",
      "Reschedule with a single click",
    ],
    image: "/photos/img (20).webp",
  },
];

const CATEGORIES = [
  "All Services",
  "Bridal & Events",
  "Makeup & Lashes",
  "Hair & Styling",
  "Nail Artistry",
  "Skin Care & Spa",
  "Waxing & Hair Removal",
  "Consultations",
];

const Section3 = () => {
  const [expandedServices, setExpandedServices] = useState({});
  const [activeCategory, setActiveCategory] = useState("All Services");

  const toggleExpand = (id) => {
    setExpandedServices((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredServices =
    activeCategory === "All Services"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((service) => service.category === activeCategory);

  const getWhatsAppLink = (serviceTitle) => {
    const text = WHATSAPP_CONFIG.messageTemplate.replace(
      "[SERVICE]",
      serviceTitle,
    );
    return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      id="services"
      className="w-full px-4 py-24 bg-[#FFF8EE] font-sans text-[#0A2647] overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-[#b89047] text-[13px] font-bold tracking-wide mb-3">
            Our Service
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[54px] font-extrabold leading-[1.2] tracking-tight">
            Exquisite Makeup & Hair Artistry
          </h2>
        </div>

        {/* Category Pills Row */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-base font-semibold transition-all cursor-pointer transform hover:scale-[1.03] active:scale-[0.98] duration-300 ${
                  isActive
                    ? "bg-linear-to-r from-[#b89047] to-[#f05a11] text-white shadow-lg shadow-[#b89047]/30"
                    : "bg-white border border-gray-200 text-[#0A2647] hover:border-[#b89047] hover:text-[#b89047] shadow-sm"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Swiper Custom Styles */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .services-swiper {
            padding-bottom: 4rem !important;
            padding-top: 1rem !important;
          }
          .services-swiper .swiper-slide {
            height: auto !important;
            display: flex;
          }
          .services-swiper .swiper-pagination {
            bottom: 10px !important;
            display: flex;
            justify-content: center;
            gap: 8px;
          }
          .services-swiper .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background-color: #E2D4C8;
            opacity: 1;
            transition: all 0.3s ease;
            margin: 0 !important;
            border-radius: 9999px;
          }
          .services-swiper .swiper-pagination-bullet-active {
            width: 24px;
            background-color: #b89047;
            border-radius: 4px;
          }
        `,
          }}
        />

        {/* Cards Swiper Slider Wrapper with Side Padding */}
        <div className="relative px-0 lg:px-14">
          {/* Custom Navigation Arrows */}
          <button className="swiper-button-prev-custom absolute left-0 top-[45%] -translate-y-1/2 z-20 w-12 h-12 bg-white text-[#b89047] rounded-full hidden lg:flex items-center justify-center shadow-md border border-orange-50 hover:bg-[#b89047] hover:text-white transition-all duration-300 cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-[45%] -translate-y-1/2 z-20 w-12 h-12 bg-white text-[#b89047] rounded-full hidden lg:flex items-center justify-center shadow-md border border-orange-50 hover:bg-[#b89047] hover:text-white transition-all duration-300 cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="w-full services-swiper"
          >
            {filteredServices.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100/80 p-5 flex flex-col group transition-all duration-300 transform hover:-translate-y-1 h-full w-full">
                  {/* Image Container with Zoom effect */}
                  <div className="w-full mb-5 aspect-4/3 bg-linear-to-br from-[#fdf7ed] to-[#fbf1e0] rounded-xl overflow-hidden relative shrink-0">
                    <Image
                      src={service.image}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Service Details */}
                  <div className="flex flex-col flex-1 gap-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold tracking-wider text-[#b89047] uppercase bg-orange-50 px-2.5 py-1 rounded-md">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-[#0A2647] text-lg lg:text-xl group-hover:text-[#b89047] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="mt-auto">
                      <div className="border-t border-dashed border-gray-100 my-2"></div>
                      <button
                        onClick={() => toggleExpand(service.id)}
                        className="text-[#b89047] hover:text-[#f05a11] cursor-pointer text-sm font-semibold mb-6 text-left w-full transition-colors duration-200"
                      >
                        {expandedServices[service.id]
                          ? "read less"
                          : "read more"}
                      </button>

                      {expandedServices[service.id] && (
                        <ul className="space-y-2 mb-6 transition-all duration-300">
                          {service.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-xs font-semibold text-slate-700 leading-snug"
                            >
                              <FaCheckCircle className="text-[#b89047] text-[14px] mt-0.5 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* WhatsApp Enquiry Button */}
                      <a
                        href={getWhatsAppLink(service.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2.5 transition-all shadow-sm hover:shadow-lg active:scale-[0.98] transform"
                      >
                        <FaWhatsapp className="text-xl" />
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Section3;
