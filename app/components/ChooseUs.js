"use client";
import Image from "next/image";
import React, { useState } from "react";
import Popup from "./Popup";
import {
  Check,
  ArrowRight,
  PhoneCall,
  Video,
  Camera,
  MessageSquare,
  Phone,
  Mic,
  Monitor,
} from "lucide-react";

const ChooseUs = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const features = [
    "Comprehensive Specialties",
    "Research and Development",
    "Emergency Services",
    "Advanced Imaging Services",
    "Intensive Care Units (ICUs)",
    "Rehabilitation Services",
    "Telemedicine Facilities",
    "Patient-Centric Approach",
    "Multidisciplinary Team",
    "Health Information Technology",
  ];

  return (
    <div className="w-full px-4 py-20 bg-[#FDFBF9] font-sans text-[#0A2647] overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-[1.2] text-[#0A2647] mb-6">
            Why Choose Us
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-xl leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="shrink-0 w-5 h-5 rounded-full bg-[#b89047] text-white flex items-center justify-center shadow-sm shadow-[#b89047]/30">
                  <Check className="w-3.5 h-3.5 stroke-3" />
                </div>
                <span className="text-[#0A2647] font-bold text-[15px]">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            <button
              onClick={() => setIsPopupOpen(true)}
              className="bg-[#0A2647] hover:bg-[#0A2647]/90 text-white pl-7 pr-2.5 py-2.5 rounded-xl flex items-center gap-4 font-semibold text-[17px] transition-all hover:scale-105 shadow-xl shadow-blue-900/10"
            >
              Appointment
              <div className="bg-white text-[#0A2647] p-2 rounded-lg">
                <ArrowRight className="w-5 h-5" />
              </div>
            </button>

            <div className="flex items-center gap-4">
              <div className="text-[#b89047]">
                <PhoneCall className="w-10 h-10 stroke-[1.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm font-medium mb-0.5">
                  Contact us?
                </span>
                <span className="text-[#0A2647] font-extrabold text-[22px] tracking-tight">
                  +91 9971853904
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Images */}
        <div className="relative w-full aspect-4/5 md:aspect-square lg:h-[650px] flex mt-10 lg:mt-0">
          {/* Doctor Image Container */}
          <div className="absolute left-0 lg:left-4 top-0 w-[65%] sm:w-[60%] h-[75%] rounded-[2.5rem] overflow-hidden shadow-2xl z-0">
            <Image
              src="/photos/img (7).webp"
              className="w-full h-full object-cover"
              alt="Doctor Video Call"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Video call controls */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/40 backdrop-blur-md border border-white/30 rounded-2xl px-5 py-3 flex items-center justify-between w-[85%] z-10 shadow-lg">
              <Camera className="w-5 h-5 text-white" />
              <MessageSquare className="w-5 h-5 text-white" />
              <div className="bg-[#ff4b4b] rounded-full p-2.5 shadow-lg cursor-pointer hover:bg-red-600 transition-colors">
                <Phone className="w-5 h-5 text-white fill-current rotate-135" />
              </div>
              <Mic className="w-5 h-5 text-white" />
              <Monitor className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Patient Image Container */}
          <div className="absolute right-0 lg:-right-4 bottom-0 w-[55%] h-[75%] rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border-[6px] border-[#FDFBF9]">
            <Image
              src="/photos/img (8).webp"
              className="w-full h-full object-cover"
              alt="Treatment"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Video Call Support Badge */}
          <div className="absolute top-[35%] -left-2 sm:-left-6 lg:-left-12 z-20 bg-white rounded-[1.25rem] shadow-xl p-2.5 sm:p-4 flex items-center gap-2 sm:gap-4">
            <div className="text-[#b89047] border-[1.5px] border-[#b89047] rounded-xl p-2">
              <Video className="w-6 h-6 stroke-2" />
            </div>
            <p className="text-[#0A2647] font-bold text-[13px] sm:text-[15px] leading-[1.2]">
              Video Call
              <br />
              Support
            </p>
          </div>

          {/* Google Rating Badge */}
          <div className="absolute top-4 -right-2 sm:-right-4 lg:-right-8 z-20 bg-white rounded-3xl shadow-xl p-3 sm:p-5 flex items-center gap-3 sm:gap-5 border border-gray-100">
            <div className="w-12 h-12 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-full h-full"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#FFC107] mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-[#0A2647] font-extrabold ml-2 text-[15px]">
                  (4.8)
                </span>
              </div>
              <p className="text-[#0A2647] text-[13px] font-bold opacity-80">
                12k+ ratings on google
              </p>
            </div>
          </div>
        </div>
      </div>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
};

export default ChooseUs;
