"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { sendAppointmentEmail } from "../actions";

const Popup = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState(null);
  const [isPending, setIsPending] = useState(false);

  if (!isOpen) return null;

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsPending(true);
    setStatus(null);

    const formData = new FormData(form);
    const result = await sendAppointmentEmail(formData);

    setIsPending(false);
    if (result.success) {
      setStatus({ type: "success", text: "Appointment requested successfully!" });
      form.reset();
      // Auto close after 2 seconds to let the user see the success message
      setTimeout(() => {
        setStatus(null);
        onClose();
      }, 2000);
    } else {
      setStatus({
        type: "error",
        text: result.error || "Failed to request appointment. Please try again.",
      });
    }
  }

  const handleClose = () => {
    setStatus(null);
    onClose();
  };

  return (
    <>
      <div
        className="fixed inset-0 w-screen h-screen bg-black/50 backdrop-blur-[3px] flex justify-center items-center z-99999 p-5"
        onClick={handleClose}
      >
        <div
          className="relative w-full max-w-[420px] animate-[slideUp_0.3s_ease-out]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-[15px] right-[15px] cursor-pointer z-10 text-[#b89047] bg-transparent border-none p-[5px] flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#b89047]/10"
            onClick={handleClose}
            aria-label="Close popup"
          >
            <X size={24} />
          </button>

          <form
            className="flex flex-col gap-3 w-full p-[30px] rounded-[20px] relative bg-[#f5f5f5] text-[#212121] border border-[#333] shadow-[0_15px_35px_rgba(0,0,0,0.25)]"
            onSubmit={handleSubmit}
          >
            <p className="text-[28px] font-semibold tracking-[-1px] relative flex items-center pl-[30px] text-[#b89047] m-0 before:absolute before:content-[''] before:h-4 before:w-4 before:rounded-full before:left-0 before:bg-[#b89047] after:absolute after:content-[''] after:h-4 after:w-4 after:rounded-full after:left-0 after:bg-[#b89047] after:animate-[customPulse_1s_linear_infinite]">
              Appointment
            </p>
            <p className="text-[14.5px] text-[#333] m-0 mb-[10px]">
              Book your appointment with us.
            </p>

            <div className="flex w-full gap-3">
              <label className="flex-1 relative flex flex-col">
                <input
                  required
                  name="name"
                  placeholder=" "
                  type="text"
                  disabled={isPending}
                  className="peer bg-[#3333330b] text-black w-full pt-[22px] px-[10px] pb-[8px] outline-none border border-[#69696965] rounded-[10px] font-inherit text-[15px] disabled:opacity-60"
                />
                <span className="absolute left-[10px] top-[15px] text-[0.9em] text-black/50 transition-all duration-300 pointer-events-none peer-focus:top-[4px] peer-focus:text-[0.7em] peer-focus:font-semibold peer-focus:text-[#b89047] peer-valid:top-[4px] peer-valid:text-[0.7em] peer-valid:font-semibold">
                  Name
                </span>
              </label>
              <label className="flex-1 relative flex flex-col">
                <input
                  required
                  name="email"
                  placeholder=" "
                  type="email"
                  disabled={isPending}
                  className="peer bg-[#3333330b] text-black w-full pt-[22px] px-[10px] pb-[8px] outline-none border border-[#69696965] rounded-[10px] font-inherit text-[15px] disabled:opacity-60"
                />
                <span className="absolute left-[10px] top-[15px] text-[0.9em] text-black/50 transition-all duration-300 pointer-events-none peer-focus:top-[4px] peer-focus:text-[0.7em] peer-focus:font-semibold peer-focus:text-[#b89047] peer-valid:top-[4px] peer-valid:text-[0.7em] peer-valid:font-semibold">
                  Email
                </span>
              </label>
            </div>

            <div className="flex w-full gap-3">
              <label className="flex-1 relative flex flex-col">
                <input
                  required
                  name="phone"
                  placeholder=" "
                  type="tel"
                  disabled={isPending}
                  className="peer bg-[#3333330b] text-black w-full pt-[22px] px-[10px] pb-[8px] outline-none border border-[#69696965] rounded-[10px] font-inherit text-[15px] disabled:opacity-60"
                />
                <span className="absolute left-[10px] top-[15px] text-[0.9em] text-black/50 transition-all duration-300 pointer-events-none peer-focus:top-[4px] peer-focus:text-[0.7em] peer-focus:font-semibold peer-focus:text-[#b89047] peer-valid:top-[4px] peer-valid:text-[0.7em] peer-valid:font-semibold">
                  Phone number
                </span>
              </label>
              <label className="flex-1 relative flex flex-col">
                <input
                  required
                  name="date"
                  placeholder=" "
                  type="date"
                  disabled={isPending}
                  className="peer bg-[#3333330b] text-black w-full pt-[22px] px-[10px] pb-[8px] outline-none border border-[#69696965] rounded-[10px] font-inherit text-[15px] [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:cursor-pointer disabled:opacity-60"
                />
                <span className="absolute left-[10px] top-[4px] text-[0.7em] font-semibold text-black/50 transition-all duration-300 pointer-events-none peer-focus:text-[#b89047]">
                  Date
                </span>
              </label>
            </div>

            <label className="relative flex flex-col w-full">
              <input
                required
                name="timings"
                placeholder=" "
                type="time"
                disabled={isPending}
                className="peer bg-[#3333330b] text-black w-full pt-[22px] px-[10px] pb-[8px] outline-none border border-[#69696965] rounded-[10px] font-inherit text-[15px] [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:cursor-pointer disabled:opacity-60"
              />
              <span className="absolute left-[10px] top-[4px] text-[0.7em] font-semibold text-black/50 transition-all duration-300 pointer-events-none peer-focus:text-[#b89047]">
                Timings
              </span>
            </label>

            <label className="relative flex flex-col w-full">
              <textarea
                required
                name="message"
                placeholder=" "
                rows="3"
                disabled={isPending}
                className="peer bg-[#3333330b] text-black w-full pt-[22px] px-[10px] pb-[8px] outline-none border border-[#69696965] rounded-[10px] font-inherit text-[15px] resize-none h-auto disabled:opacity-60"
              />
              <span className="absolute left-[10px] top-[15px] text-[0.9em] text-black/50 transition-all duration-300 pointer-events-none peer-focus:top-[4px] peer-focus:text-[0.7em] peer-focus:font-semibold peer-focus:text-[#b89047] peer-valid:top-[4px] peer-valid:text-[0.7em] peer-valid:font-semibold">
                Message
              </span>
            </label>

            <button
              className="border border-[#b89047] outline-none p-[12px] rounded-[10px] text-[#b89047] text-[16px] font-semibold transition-all duration-300 bg-[#f5f5f5] mt-[5px] cursor-pointer hover:bg-[#b89047] hover:text-[#f5f5f5] disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Booking..." : "Submit"}
            </button>

            {/* Submit Status Notification */}
            {status && (
              <div
                className={`p-2.5 rounded-lg text-sm text-center font-medium transition-all ${
                  status.type === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {status.text}
              </div>
            )}
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
};

export default Popup;

