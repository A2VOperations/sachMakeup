"use client";
import React from 'react';
import { X } from 'lucide-react';

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 w-screen h-screen bg-black/50 backdrop-blur-[3px] flex justify-center items-center z-[99999] p-5" onClick={onClose}>
        <div className="relative w-full max-w-[420px] animate-[slideUp_0.3s_ease-out]" onClick={(e) => e.stopPropagation()}>
          <button className="absolute top-[15px] right-[15px] cursor-pointer z-10 text-[#F26D21] bg-transparent border-none p-[5px] flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#F26D21]/10" onClick={onClose} aria-label="Close popup">
            <X size={24} />
          </button>
          
          <form className="flex flex-col gap-3 w-full p-[30px] rounded-[20px] relative bg-[#f5f5f5] text-[#212121] border border-[#333] shadow-[0_15px_35px_rgba(0,0,0,0.25)]" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            <p className="text-[28px] font-semibold tracking-[-1px] relative flex items-center pl-[30px] text-[#F26D21] m-0 before:absolute before:content-[''] before:h-4 before:w-4 before:rounded-full before:left-0 before:bg-[#F26D21] after:absolute after:content-[''] after:h-4 after:w-4 after:rounded-full after:left-0 after:bg-[#F26D21] after:animate-[customPulse_1s_linear_infinite]">
              Appointment
            </p>
            <p className="text-[14.5px] text-[#333] m-0 mb-[10px]">Book your appointment with us.</p>
            
            <div className="flex w-full gap-3">
              <label className="flex-1 relative flex flex-col">
                <input required placeholder=" " type="text" className="peer bg-[#3333330b] text-black w-full pt-[22px] px-[10px] pb-[8px] outline-none border border-[#69696965] rounded-[10px] font-inherit text-[15px]" />
                <span className="absolute left-[10px] top-[15px] text-[0.9em] text-black/50 transition-all duration-300 pointer-events-none peer-focus:top-[4px] peer-focus:text-[0.7em] peer-focus:font-semibold peer-focus:text-[#F26D21] peer-valid:top-[4px] peer-valid:text-[0.7em] peer-valid:font-semibold">Name</span>
              </label>
              <label className="flex-1 relative flex flex-col">
                <input required placeholder=" " type="email" className="peer bg-[#3333330b] text-black w-full pt-[22px] px-[10px] pb-[8px] outline-none border border-[#69696965] rounded-[10px] font-inherit text-[15px]" />
                <span className="absolute left-[10px] top-[15px] text-[0.9em] text-black/50 transition-all duration-300 pointer-events-none peer-focus:top-[4px] peer-focus:text-[0.7em] peer-focus:font-semibold peer-focus:text-[#F26D21] peer-valid:top-[4px] peer-valid:text-[0.7em] peer-valid:font-semibold">Email</span>
              </label>
            </div>
            
            <div className="flex w-full gap-3">
              <label className="flex-1 relative flex flex-col">
                <input required placeholder=" " type="tel" className="peer bg-[#3333330b] text-black w-full pt-[22px] px-[10px] pb-[8px] outline-none border border-[#69696965] rounded-[10px] font-inherit text-[15px]" />
                <span className="absolute left-[10px] top-[15px] text-[0.9em] text-black/50 transition-all duration-300 pointer-events-none peer-focus:top-[4px] peer-focus:text-[0.7em] peer-focus:font-semibold peer-focus:text-[#F26D21] peer-valid:top-[4px] peer-valid:text-[0.7em] peer-valid:font-semibold">Phone number</span>
              </label>
              <label className="flex-1 relative flex flex-col">
                <input required placeholder=" " type="date" className="peer bg-[#3333330b] text-black w-full pt-[22px] px-[10px] pb-[8px] outline-none border border-[#69696965] rounded-[10px] font-inherit text-[15px] [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:cursor-pointer" />
                <span className="absolute left-[10px] top-[4px] text-[0.7em] font-semibold text-black/50 transition-all duration-300 pointer-events-none peer-focus:text-[#F26D21]">Date</span>
              </label>
            </div>

            <label className="relative flex flex-col w-full">
              <input required placeholder=" " type="time" className="peer bg-[#3333330b] text-black w-full pt-[22px] px-[10px] pb-[8px] outline-none border border-[#69696965] rounded-[10px] font-inherit text-[15px] [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:cursor-pointer" />
              <span className="absolute left-[10px] top-[4px] text-[0.7em] font-semibold text-black/50 transition-all duration-300 pointer-events-none peer-focus:text-[#F26D21]">Timings</span>
            </label>

            <label className="relative flex flex-col w-full">
              <textarea required placeholder=" " rows="3" className="peer bg-[#3333330b] text-black w-full pt-[22px] px-[10px] pb-[8px] outline-none border border-[#69696965] rounded-[10px] font-inherit text-[15px] resize-none h-auto" />
              <span className="absolute left-[10px] top-[15px] text-[0.9em] text-black/50 transition-all duration-300 pointer-events-none peer-focus:top-[4px] peer-focus:text-[0.7em] peer-focus:font-semibold peer-focus:text-[#F26D21] peer-valid:top-[4px] peer-valid:text-[0.7em] peer-valid:font-semibold">Message</span>
            </label>
            
            <button className="border border-[#F26D21] outline-none p-[12px] rounded-[10px] text-[#F26D21] text-[16px] font-semibold transition-all duration-300 bg-[#f5f5f5] mt-[5px] cursor-pointer hover:bg-[#F26D21] hover:text-[#f5f5f5]" type="submit">Submit</button>
          </form>
        </div>
      </div>
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes customPulse {
          from { transform: scale(0.9); opacity: 1; }
          to { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
    </>
  );
}

export default Popup;
