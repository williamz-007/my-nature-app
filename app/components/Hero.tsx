// app/components/Hero.tsx
import React from "react";
import Header from "@/components/Header";

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-black">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/nature.jpg')", // replace with your image path
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
      </div>

      {/* Header over hero */}
      <Header />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
        <h2 className="text-[36px] md:text-[40px] leading-none text-white font-regular max-w-3xl mb-0">
          we all love
        </h2>
        <h1 className="text-[90px] md:text-[120px] leading-none text-white font-medium max-w-3xl">
          nature
        </h1>
        <p className="text-white text-sm md:text-xl mt-4 max-w-2xl">
          Look deep into nature, and you will 
          <br />understand everything better.
        </p>
        <button className="mt-8 px-12 py-3 bg-yellow-300 text-black rounded-lg font-regular w-48 hover:bg-gray-200 hover:text-black">
          Get Started
        </button>
      </div>
    </section>
  );
}
