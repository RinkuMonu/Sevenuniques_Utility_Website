"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function PancardAllotment() {
  const links = [
    { label: "Read Guidelines", href: "/pan-card/guidelines" },
    { label: "Read Instructions", href: "/pan-card/instructions" },
    { label: "Documents Required", href: "/pan-card/documents-required" },
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
         This form should be used if you have not previously applied for a PAN or do not currently possess one. You can also verify whether a PAN has already been allotted to you through the official Income Tax Department portal.
          <br />
          Finunique offers a seamless online PAN application service, providing a digital PAN within a short turnaround time. The entire submission process is paperless, secure, and completed through our online PAN service portal for a smooth and hassle-free experience.
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
