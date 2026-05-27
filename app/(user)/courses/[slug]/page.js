import React from "react";
import Image from "next/image";
import Link from "next/link";
import { coursesData } from "../data";
import { notFound } from "next/navigation";
import CourseEnquiryForm from "@/app/components/CourseEnquiryForm";

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
          <h1 className="text-4xl md:text-5xl font-serif text-center mb-4">
            {course.title}
          </h1>
          <div className="flex items-center space-x-2 text-sm md:text-base tracking-widest uppercase font-medium">
            <Link
              href="/Academy"
              className="hover:text-orange-400 transition-colors"
            >
              Academy
            </Link>
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
                <span className="text-gray-500 uppercase text-xs font-semibold tracking-wider mb-1">
                  Duration
                </span>
                <span className="text-[#333] font-medium">
                  {course.duration}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 uppercase text-xs font-semibold tracking-wider mb-1">
                  Timings
                </span>
                <span className="text-[#333] font-medium">
                  {course.timings}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 uppercase text-xs font-semibold tracking-wider mb-1">
                  Batch
                </span>
                <span className="text-[#333] font-medium">{course.batch}</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-serif text-[#333] mb-6">Syllabus</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {course.syllabus.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 leading-relaxed text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Enquiry Form */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-24">
          <CourseEnquiryForm courseTitle={course.title} />
        </div>
      </div>
    </div>
  );
}

