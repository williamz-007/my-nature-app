// app/about/components/AboutHero.tsx
import React from "react";
import Header from "@/components/Header";
import Image from "next/image";

export default function ServiceHero() {
  return (
    <section className="relative h-120 w-full bg-white">
      {/* Background image using Next.js Image for better performance */}
      <Image
        src="/mountain.jpg"
        alt="Nature background"
        fill
        className="object-cover"
        priority
        quality={85}
      />
      <div className="absolute inset-0 bg-black/20 z-10"></div> {/* Slightly darker overlay for better text readability */}

      {/* Header over hero */}
      <Header />

      {/* Hero content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center h-full px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl text-white font-medium mb-4 tracking-wide">
            Our Services
          </h1>
        </div>
        
        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
}