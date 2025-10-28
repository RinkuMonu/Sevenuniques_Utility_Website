"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function PancardAllotment() {
  const links = [
    { label: "Read Guidelines", href: "/pancard/guidelines" },
    { label: "Read Instructions", href: "/pancard/instructions" },
    { label: "Documents Required", href: "/pancard/documents-required" },
  ];

  return (
    <section className="relative bg-[#e8f0f7] rounded-xl gap-10 shadow-sm mt-10 md:mt-18 pt-10 overflow-hidden">
 <div className="max-w-7xl mx-auto grid md:grid-cols-2 px-8">
       {/* Left Side */}
      <div className="w-full z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug text-center md:text-left">
          Allotment of new PAN (Form 49A) <br />
          <span className="text-blue-900">Indian Citizens</span>
        </h2>

        <p className="text-gray-700 mt-6 leading-relaxed text-sm sm:text-base relative text-justify md:text-left">
          You should use this form in case you have not yet applied to obtain a PAN or you do not possess a PAN. There is a place on the Income Tax Department site where you can check whether a PAN has been allotted to you or not.
          <br />
          SevenUniques provides the service of online pancards, in which the digital PAN Card is provided within a limited time, and the entire online submission is done via our{" "}
          <span className="font-bold">online PAN service portal</span>. The{" "}
          <span className="font-bold">PAN Card online quick service</span> method
          is a paperless and smooth experience.
          <span className="absolute left-0 bottom-[-20px] w-full h-[2px] bg-[#FFD84C] rounded-full"></span>
        </p>

        <div className="mt-10 sm:mt-12 md:mt-16 flex flex-col sm:flex-row md:flex-col gap-3 sm:gap-4 w-full sm:w-auto md:w-72">
          {links.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="flex justify-between items-center text-gray-900 font-medium border border-gray-300 rounded-lg hover:bg-[#f9fbfd] hover:text-[#3a6f82] shadow-md px-4 py-3 transition-transform duration-300 hover:scale-105"
            >
              {item.label}
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </a>
          ))}
        </div>
      </div>

      {/* Right Image */}
       <div className="flex justify-center md:justify-center w-full relative z-10 ">
            <Image
             src="/image/pan-img1.png"
              width={360}
              height={360}
              alt="image"
              className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto object-contain"
            />
          </div>
 </div>
    </section>
  );
}
