"use client";
import Image from "next/image";

export default function Stats() {
  return (
    <section className="max-w-full mx-auto px-10 md:px-46 md:pl-10 py-16 bg-[#f6f8f5]">
      <div className="flex flex-col md:flex-row gap-12 md:gap-60 items-center md:items-end justify-left">
        
        {/* Left Text Section */}
        <div className="md:w-1/2 text-left flex flex-col gap-4 md:pl-24 ">
          <h2 className="text-3xl font-semibold mb-6 text-[#4B5320] font-serif">
            Why Love Nature
          </h2>
          <p className="text-lg text-[#4B5320] mb-4">
            Your customers just learned what services you offer. Tell them why they should work with you or your team, for example you could highlight your experience and positive client reviews.
          </p>
          <p className="text-lg text-[#4B5320]">
            Ohe badges illustrate this.  We also focus on key benefits they will get while using our services, namely quick turnaround times and dedicated support. You could also use them to show awards you won for your best work.
          </p>
        </div>

        {/* Right Icons Grid */}
        <div className="md:w-100 grid grid-cols-2 gap-10 justify-items-center ">
          {[
            { icon: "/award.svg", text: "High Quality" },
            { icon: "/star.svg", text: "Trusted Team" },
            { icon: "/refresh.svg", text: "Great Support" },
            { icon: "/support.svg", text: "Affordable" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                <Image 
                  src={item.icon} 
                  alt={item.text} 
                  width={40} 
                  height={40} 
                  className="object-contain" 
                />
              </div>
              <p className="mt-3 text-[#4B5320] text-center text-sm">{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
