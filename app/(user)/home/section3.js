"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";

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
    category: "Bridal Makeovers",
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
    category: "Bridal Makeovers",
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
    title: "Engagement & Roka Sagan Glam",
    category: "Party & Occasion",
    description:
      "A glowing, sophisticated look that highlights your natural features perfectly for pre-wedding functions and photo sessions.",
    features: [
      "Dewy or matte radiant glow base",
      "Romantic hair design (buns or waves)",
      "Lehenga or saree pleating & draping",
      "Premium lash application",
    ],
    image: "/photos/img (10).jpg",
  },
  {
    id: 4,
    title: "Celebrity Party & Cocktail Glam",
    category: "Party & Occasion",
    description:
      "Bold, modern makeup featuring striking eyes and high-impact contouring, designed to make you steal the spotlight under evening lights.",
    features: [
      "Dramatic smoky or glitter eyes",
      "Chic updos or glamorous volume curls",
      "Custom statement lashes",
      "Long-wear professional setting finish",
    ],
    image: "/photos/img (5).webp",
  },
  {
    id: 5,
    title: "Editorial & Fashion Runway",
    category: "Editorial & Fashion",
    description:
      "High-fashion, creative, and bold makeup designed specifically for professional portfolios, runway shows, and commercial print shoots.",
    features: [
      "Camera-ready precision matte base",
      "Creative eye artistry & graphic styling",
      "Highly durable waterproof formulation",
      "On-set styling consultation & touchups",
    ],
    image: "/photos/img (6).webp",
  },
  {
    id: 6,
    title: "Traditional Sangeet & Mehendi Look",
    category: "Party & Occasion",
    description:
      "A vibrant, fresh, and playful makeup look crafted to be entirely dance-proof and photogenic for joyful sangeet celebrations.",
    features: [
      "Sweat-resistant long-wear formula",
      "Traditional braided hair or half-updo",
      "Pop of color & eye detailing",
      "Draping & accessory alignment",
    ],
    image: "/photos/img (7).webp",
  },
  {
    id: 7,
    title: "Signature Hairstyling & Extensions",
    category: "Hair & Styling",
    description:
      "Professional high-end hair design ranging from elegant Hollywood waves, braids, to intricate traditional buns paired with custom extensions.",
    features: [
      "Premium extensions styling & volume",
      "Hair accessories & floral placement",
      "Professional-grade setting products",
      "Custom pre-prep hair conditioning",
    ],
    image: "/photos/img (35).webp",
  },
  {
    id: 8,
    title: "Elite Saree & Lehenga Draping",
    category: "Hair & Styling",
    description:
      "Impeccable pleating, alignment, and secured draping of sarees or heavy lehengas in multiple traditional and contemporary styles.",
    features: [
      "Perfect structure & drape security",
      "Traditional & modern fusion styles",
      "Saree pleating & pre-folding preps",
      "Starch styling & layout adjustments",
    ],
    image: "/photos/img (8).webp",
  },
];

const CATEGORIES = [
  "All Services",
  "Bridal Makeovers",
  "Party & Occasion",
  "Editorial & Fashion",
  "Hair & Styling",
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
    <div className="w-full px-4 py-24 bg-[#FFF8EE] font-sans text-[#0A2647] overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-[#ea580c] text-[13px] font-bold tracking-wide mb-3">
            Our Offerings
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[54px] font-extrabold leading-[1.2] tracking-tight">
            Exquisite Makeup & Hair Artistry
          </h2>
          <p className="text-slate-500 mt-4 text-base md:text-lg max-w-2xl leading-relaxed">
            Discover a curation of luxurious beauty transformations, tailored
            meticulously by our expert artists to highlight your best features
            for every special occasion.
          </p>
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
                    ? "bg-gradient-to-r from-[#f26d21] to-[#f05a11] text-white shadow-lg shadow-orange-500/30"
                    : "bg-white border border-gray-200 text-[#0A2647] hover:border-[#f26d21] hover:text-[#f26d21] shadow-sm"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100/80 p-5 flex flex-col group transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Container with Zoom effect */}
              <div className="w-full mb-5 aspect-4/3 bg-linear-to-br from-[#fdf7ed] to-[#fbf1e0] rounded-xl overflow-hidden relative">
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
                  <span className="text-[11px] font-bold tracking-wider text-[#ea580c] uppercase bg-orange-50 px-2.5 py-1 rounded-md">
                    {service.category}
                  </span>
                </div>
                <h3 className="font-extrabold text-[#0A2647] text-lg lg:text-xl group-hover:text-[#f26d21] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="mt-auto">
                  <div className="border-t border-dashed border-gray-100 my-2"></div>
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="text-[#ea580c] hover:text-[#f05a11] cursor-pointer text-sm font-semibold mb-6 text-left w-full transition-colors duration-200"
                  >
                    {expandedServices[service.id] ? "read less" : "read more"}
                  </button>

                  {expandedServices[service.id] && (
                    <ul className="space-y-2 mb-6 transition-all duration-300">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs font-semibold text-slate-700 leading-snug"
                        >
                          <FaCheckCircle className="text-[#f97316] text-[14px] mt-0.5 flex-shrink-0" />
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
