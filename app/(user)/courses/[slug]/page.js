import React from "react";
import Image from "next/image";
import Link from "next/link";
import { coursesData } from "../data";
import { notFound } from "next/navigation";

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="w-full bg-[#fdfaf6] min-h-screen">
      {/* Hero Header */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-gray-900">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-center mb-4">{course.title}</h1>
          <div className="flex items-center space-x-2 text-sm md:text-base tracking-widest uppercase font-medium">
            <Link href="/Academy" className="hover:text-orange-400 transition-colors">Academy</Link>
            <span>-</span>
            <span className="text-orange-400">Courses</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Content */}
        <div className="w-full lg:w-2/3 flex flex-col space-y-12">
          {/* Course Details Block */}
          <div className="flex flex-col space-y-6">
            <div className="w-full h-[300px] md:h-[450px] relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>
            
            <h2 className="text-3xl font-serif text-[#333]">{course.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-y border-gray-200">
              <div className="flex flex-col">
                <span className="text-gray-500 uppercase text-xs font-semibold tracking-wider mb-1">Duration</span>
                <span className="text-[#333] font-medium">{course.duration}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 uppercase text-xs font-semibold tracking-wider mb-1">Timings</span>
                <span className="text-[#333] font-medium">{course.timings}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 uppercase text-xs font-semibold tracking-wider mb-1">Batch</span>
                <span className="text-[#333] font-medium">{course.batch}</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-serif text-[#333] mb-6">Syllabus</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {course.syllabus.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 leading-relaxed text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Enquiry Form */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-24">
          <div className="bg-white p-8 rounded-xl shadow-xl shadow-orange-900/5 border border-gray-100 flex flex-col">
            <div className="flex items-center space-x-3 mb-8">
              <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
              <h3 className="text-2xl font-serif text-[#333]">ENQUIRY NOW</h3>
            </div>
            
            <form className="flex flex-col space-y-5">
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Name</label>
                <input 
                  type="text" 
                  placeholder="Your full name"
                  className="w-full bg-[#f8f5f0] border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-orange-300 outline-none transition-all placeholder:text-gray-400 text-gray-800"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</label>
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="w-full bg-[#f8f5f0] border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-orange-300 outline-none transition-all placeholder:text-gray-400 text-gray-800"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Phone No.</label>
                <input 
                  type="tel" 
                  placeholder="Your phone number"
                  className="w-full bg-[#f8f5f0] border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-orange-300 outline-none transition-all placeholder:text-gray-400 text-gray-800"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Your message..."
                  className="w-full bg-[#f8f5f0] border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-orange-300 outline-none transition-all placeholder:text-gray-400 text-gray-800 resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#9b2c2c] hover:bg-red-900 text-white font-medium text-sm tracking-widest uppercase py-4 rounded-lg mt-4 transition-colors shadow-lg shadow-red-900/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
