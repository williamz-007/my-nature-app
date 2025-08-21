"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Web Design",
    description1:
      "Tell your visitor how your service can improve their life. Connect with the problem that they’re trying to solve and address any objections you think they might have.",
    description2:
      "What is the biggest benefit your customer will get from this? Keep your target audience in mind.",
    description3:
      "From $99",
    image: "/work1.jpg",
    button: "Learn More  " ,
  },
  {
    title: "Mobile App Development",
    description1:
      "Tell your visitor how your service can improve their life. Connect with the problem that they’re trying to solve and address any objections you think they might have.",
    description2:
      "What is the biggest benefit your customer will get from this? Keep your target audience in mind.",
    description3:
      "From $96",
    image: "/work2.jpg",
    button: "Learn More",
  },
  {
    title: "Digital Marketing",
    description1:
      "Tell your visitor how your service can improve their life. Connect with the problem that they’re trying to solve and address any objections you think they might have.",
    description2:
      "What is the biggest benefit your customer will get from this? Keep your target audience in mind.",
    description3:
      "From $179",
    image: "/work3.jpg",
    button: "Learn More",
  },
  {
    title: "Brand Strategy",
    description1:
      "Tell your visitor how your service can improve their life. Connect with the problem that they’re trying to solve and address any objections you think they might have.",
    description2:
      "What is the biggest benefit your customer will get from this? Keep your target audience in mind.",
    description3:
      "From $92",
    image: "/work4.jpg",
    button: "Learn More",
  },
];

export default function WorkSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 ">
      <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>

      <div className="flex flex-col space-y-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-24 justify-center md:px-38"
          >
            {/* Left Image */}
            <div className="">
              <Image
                src={service.image}
                alt={service.title}
                width={200}
                height={800}
                className=" object-cover w-100 h-[400px] md:h-[500px]"
              />
            </div>

            {/* Right Text */}
            <div className="md:w-1/2 w-full flex flex-col justify-center pl-6 md:pl-0">
              <h3 className="text-2xl font-semibold font-serif mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 ">{service.description1}</p>
              <p className="text-gray-600 mb-6 ">{service.description2}</p>
              <p className="text-[#4B5320] text-xl font-medium mb-6 text-[] ">{service.description3}</p>
              <button className=" border border-[#4B5320] text-[#4B5320] px-6 py-3 rounded-lg hover:bg-[#f9fbed] hover:text-[#4B5320] transition w-fit">
                {service.button}
                {/* <ArrowRight className="w-5 h-5" /> */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
