"use client";

import React, { useState } from "react";
import { sendEnquiryEmail } from "../actions";
import { Send } from "lucide-react";

export default function CourseEnquiryForm({ courseTitle }) {
  const [status, setStatus] = useState(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsPending(true);
    setStatus(null);

    const formData = new FormData(form);
    const result = await sendEnquiryEmail(formData);

    setIsPending(false);
    if (result.success) {
      setStatus({ type: "success", text: "Enquiry submitted successfully! We will contact you soon." });
      form.reset();
    } else {
      setStatus({
        type: "error",
        text: result.error || "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-xl shadow-orange-900/5 border border-gray-100 flex flex-col">
      <div className="flex items-center space-x-3 mb-8">
        <span className="w-1 h-6 bg-[#b89047] rounded-full"></span>
        <h3 className="text-2xl font-serif text-[#333] tracking-wide uppercase">ENQUIRY NOW</h3>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
        {/* Selected Course Field - Read-only / Attached */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Selected Course
          </label>
          <input
            type="text"
            name="courseTitle"
            value={courseTitle}
            readOnly
            className="w-full bg-[#f1ede6] border-0 rounded-lg px-4 py-3 text-sm outline-none text-[#b89047] font-semibold cursor-not-allowed border-l-4 border-[#b89047]"
          />
        </div>

        {/* Name Field */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your full name"
            className="w-full bg-[#f8f5f0] border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-orange-300 outline-none transition-all placeholder:text-gray-400 text-gray-800"
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Your email address"
            className="w-full bg-[#f8f5f0] border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-orange-300 outline-none transition-all placeholder:text-gray-400 text-gray-800"
          />
        </div>

        {/* Phone Field */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Phone No.
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="Your phone number"
            className="w-full bg-[#f8f5f0] border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-orange-300 outline-none transition-all placeholder:text-gray-400 text-gray-800"
          />
        </div>

        {/* Message Field */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Message
          </label>
          <textarea
            rows={4}
            name="message"
            required
            placeholder="Your message..."
            className="w-full bg-[#f8f5f0] border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-orange-300 outline-none transition-all placeholder:text-gray-400 text-gray-800 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-[#9b2c2c] hover:bg-red-900 text-white font-medium text-sm tracking-widest uppercase py-4 rounded-lg mt-4 transition-all duration-300 shadow-lg shadow-red-900/20 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isPending ? (
            <span>Sending...</span>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

        {/* Status Notification */}
        {status && (
          <div
            className={`p-3 rounded-lg text-sm text-center font-medium transition-all ${
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
  );
}
