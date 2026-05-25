import Image from "next/image";
import Link from "next/link";
import {
  PiPaintBrushLight,
  PiCertificateLight,
  PiMapPinLineLight,
  PiBriefcaseLight,
} from "react-icons/pi";

export default function Section7() {
  const courses = [
    {
      title: "08 Weeks Professional Makeup And Hair Styling Course",
      duration: "08 WEEKS",
      image: "/photos/img (33).webp",
      slug: "08-weeks-professional-makeup-and-hair-styling",
    },
    {
      title: "06 Weeks Bridal Makeup And Hair Styling Course",
      duration: "06 WEEKS",
      image: "/photos/img (34).webp",
      slug: "06-weeks-bridal-makeup-and-hair-styling",
    },
    {
      title: "04 Weeks Professional Hair Styling Course",
      duration: "04 WEEKS",
      image: "/photos/img (35).webp",
      slug: "04-weeks-professional-hair-styling",
    },
    {
      title: "Weekend Professional Makeup And Hair Styling Course",
      duration: "WEEKEND",
      image: "/photos/img (1).webp",
      slug: "weekend-professional-makeup-and-hair-styling",
    },
    {
      title: "Personal Grooming Course",
      duration: "PERSONAL GROOMING",
      image: "/photos/img (2).webp",
      slug: "personal-grooming-course",
    },
  ];

  return (
    <section className="w-full flex flex-col">
      {/* Top Stats Bar */}
      <div className="bg-[#FFF8EE] py-12 flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-gray-300 w-full">
        <div className="px-8 md:px-16 py-6 md:py-0 flex items-center justify-center space-x-3 w-full md:w-auto">
          <span className="text-5xl font-medium text-gray-900">500+</span>
          <span className="text-[10px] text-gray-500 tracking-[0.2em] w-24 leading-tight uppercase font-medium">
            STUDENTS TRAINED
          </span>
        </div>
        <div className="px-8 md:px-16 py-6 md:py-0 flex items-center justify-center space-x-3 w-full md:w-auto">
          <span className="text-5xl font-medium text-gray-900">1000+</span>
          <span className="text-[10px] text-gray-500 tracking-[0.2em] w-28 leading-tight uppercase font-medium">
            BRIDAL MAKEOVER
          </span>
        </div>
        <div className="px-8 md:px-16 py-6 md:py-0 flex items-center justify-center space-x-3 w-full md:w-auto">
          <span className="text-5xl font-medium text-gray-900">10+</span>
          <span className="text-[10px] text-gray-500 tracking-[0.2em] w-24 leading-tight uppercase font-medium">
            YEARS OF EXISTENCE
          </span>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="w-full flex flex-col md:flex-row h-auto md:h-[500px]">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative w-full md:w-1/5 h-[400px] md:h-full group overflow-hidden cursor-pointer"
          >
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#f9eae7] via-[#f9eae7]/60 to-transparent pointer-events-none transition-opacity duration-500 opacity-90 group-hover:opacity-100"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end text-gray-900 transition-transform duration-300">
              <h3 className="text-xl font-serif leading-snug mb-4 pr-2 font-light text-gray-900">
                {course.title}
              </h3>
              <p className="text-[10px] font-medium tracking-[0.15em] text-gray-800 mb-3 uppercase">
                {course.duration}
              </p>
              <Link
                href={`/courses/${course.slug}`}
                className="text-[#9b2c2c] text-xs font-semibold border-b border-[#9b2c2c] w-max pb-0.5 hover:text-red-900 hover:border-red-900 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Features Bar */}
      <div className="bg-[#FFF8EE] py-16 px-4 md:px-0 flex flex-col md:flex-row justify-center items-start md:items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-300 w-full">
        <div className="px-6 md:px-12 py-8 md:py-0 flex flex-col items-center text-center max-w-[280px] w-full group">
          <div className="mb-5 text-gray-600 group-hover:-translate-y-1 transition-transform duration-300">
            <PiPaintBrushLight size={64} />
          </div>
          <span className="text-[10px] font-semibold text-gray-700 tracking-[0.15em] uppercase w-full">
            HANDS ON TRAINING
          </span>
        </div>
        <div className="px-6 md:px-12 py-8 md:py-0 flex flex-col items-center text-center max-w-[280px] w-full group">
          <div className="mb-5 text-gray-600 group-hover:-translate-y-1 transition-transform duration-300">
            <PiCertificateLight size={64} />
          </div>
          <span className="text-[10px] font-semibold text-gray-700 tracking-[0.15em] uppercase w-full">
            INTERNATIONAL CERTIFICATE ON
            <br className="hidden md:block" /> COURSE COMPLETION
          </span>
        </div>
        <div className="px-6 md:px-12 py-8 md:py-0 flex flex-col items-center text-center max-w-[280px] w-full group">
          <div className="mb-5 text-gray-600 group-hover:-translate-y-1 transition-transform duration-300">
            <PiMapPinLineLight size={64} />
          </div>
          <span className="text-[10px] font-semibold text-gray-700 tracking-[0.15em] uppercase w-full">
            GUIDANCE ON PLACEMENTS
          </span>
        </div>
        <div className="px-6 md:px-12 py-8 md:py-0 flex flex-col items-center text-center max-w-[280px] w-full group">
          <div className="mb-5 text-gray-600 group-hover:-translate-y-1 transition-transform duration-300">
            <PiBriefcaseLight size={64} />
          </div>
          <span className="text-[10px] font-semibold text-gray-700 tracking-[0.15em] uppercase w-full">
            GUARANTEED INTERNSHIP
          </span>
        </div>
      </div>
    </section>
  );
}
