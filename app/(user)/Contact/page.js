"use client";
import React from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import { sendContactEmail } from "../../actions";

const ContactPage = () => {
  const [status, setStatus] = useState(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(formData) {
    setIsPending(true);
    setStatus(null);

    const result = await sendContactEmail(formData);

    setIsPending(false);
    if (result.success) {
      setStatus({ type: "success", text: "Message sent successfully!" });
    } else {
      setStatus({
        type: "error",
        text: "Something went wrong. Please try again.",
      });
    }
  }
  return (
    <div className="w-full bg-[#FDFBF9] font-sans text-[#0A2647] ">
      {/* Hero Section */}
      <div className="relative py-35 px-4 bg-[#183c66] text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1920&q=80')] bg-cover bg-center" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We&apos;d love to hear from you. Whether you have a question about
            our services, academy, or anything else, our team is ready to answer
            all your questions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10">
          {/* Left: Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-blue-900/5 border border-gray-100">
            <h2 className="text-3xl font-extrabold mb-2">Send a Message</h2>
            <p className="text-gray-500 mb-8">
              Fill out the form below and we will get back to you shortly.
            </p>

            <form action={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-bold text-[#0A2647] mb-2"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName" // <-- Added name attribute
                    required
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#b89047]/50 focus:border-[#b89047] transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-bold text-[#0A2647] mb-2"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName" // <-- Added name attribute
                    required
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#b89047]/50 focus:border-[#b89047] transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-bold text-[#0A2647] mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email" // <-- Added name attribute
                  required
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#b89047]/50 focus:border-[#b89047] transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-bold text-[#0A2647] mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone" // <-- Added name attribute
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#b89047]/50 focus:border-[#b89047] transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-bold text-[#0A2647] mb-2"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message" // <-- Added name attribute
                  required
                  rows="5"
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#b89047]/50 focus:border-[#b89047] transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit" // <-- Changed from "button" to "submit"
                disabled={isPending}
                className="w-full bg-[#b89047] hover:bg-[#e05e10] text-white py-4 rounded-xl font-bold text-[17px] flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-xl shadow-[#b89047]/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isPending ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5" />
              </button>

              {/* Status Message Display */}
              {status && (
                <p
                  className={`text-center mt-4 font-bold text-sm ${status.type === "success" ? "text-green-600" : "text-red-500"}`}
                >
                  {status.text}
                </p>
              )}
            </form>
          </div>

          {/* Right: Contact Information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.2] mb-6">
              Contact Information
            </h2>
            <p className="text-gray-500 text-lg mb-12 max-w-xl leading-relaxed">
              We are available to answer any questions you might have. Feel free
              to reach out to us directly through any of the channels below.
            </p>

            <div className="space-y-8 mb-12">
              {/* Address */}
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#0A2647] text-white flex items-center justify-center shadow-lg shadow-blue-900/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Our Location</h4>
                  <p className="text-gray-500 leading-relaxed">
                    Main, 25 Feet Rd, near gopeshwarnath mandir, opp. vishal
                    <br />
                    mega mart, Bhagat Colony, Sant Nagar, Burari,
                    <br />
                    New Delhi, Delhi - 110084
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#0A2647] text-white flex items-center justify-center shadow-lg shadow-blue-900/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Phone Number</h4>
                  <p className="text-gray-500 leading-relaxed">
                    +91 9971853904
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#0A2647] text-white flex items-center justify-center shadow-lg shadow-blue-900/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Email Address</h4>
                  <p className="text-gray-500 leading-relaxed">
                    info@sachmakeover.com
                    <br />
                    support@sachmakeover.com
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#0A2647] text-white flex items-center justify-center shadow-lg shadow-blue-900/20">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Working Hours</h4>
                  <p className="text-gray-500 leading-relaxed">
                    Mon - Sat: 9:00 AM - 8:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#0A2647] hover:bg-[#b89047] hover:text-white hover:border-[#b89047] transition-all shadow-sm"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#0A2647] hover:bg-[#b89047] hover:text-white hover:border-[#b89047] transition-all shadow-sm"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#0A2647] hover:bg-[#b89047] hover:text-white hover:border-[#b89047] transition-all shadow-sm"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Map Section */}
      <div className="w-full h-[400px] bg-gray-200 mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11766.455031578736!2d77.19525652511733!3d28.74380307391163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01d81b72b221%3A0x8b448ba1e6447b70!2sSach%20Makeovers!5e0!3m2!1sen!2sin!4v1779859466188!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        />
      </div>
    </div>
  );
};

export default ContactPage;
