"use client";

import Image from "next/image";

export default function Collabo() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 w-full">
      <div className="flex flex-col items-center text-center gap-16">
        <h2 className="text-xl md:text-3xl font-normal font-serif text-[#4B5320] px-2 md:px-70">
          We’re a highly collaborative and supportive team, coming together on every project 
          to ensure our clients get the very best result.
        </h2>

        <Image
          src="/nature1.jpg"
          alt="Collaboration"
          width={1200}
          height={600}
          className="object-cover w-full max-w-5xl"
        />

        {/* Mission & Vision Section */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-2 w-full">
          
          {/* Mission */}
          <div className="flex-1 rounded-2xl p-8 text-center mx-20">
            <h3 className="text-lg font-medium mb-4 text-[#4B5320]">Our Mission</h3>
            <p className="text-sm text-gray-600">
              We are dedicated to fostering collaboration, driving innovation, 
              and building partnerships that positively impact communities and industries worldwide.
            </p>
          </div>

          {/* Vision */}
          <div className="flex-1 rounded-2xl p-8 text-center mx-20">
            <h3 className="text-lg font-medium mb-4 text-[#4B5320]">Our Vision</h3>
            <p className="text-sm text-gray-600">
              We strive to go above and beyond for our clients no matter the challenge. 
              We aim to deliver our very best work every single day across our services.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
