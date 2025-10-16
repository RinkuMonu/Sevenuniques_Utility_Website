"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function PancardAllotment2() {
  const menuItems = [
    { label: "Read Guidelines", link: "/pancard/guidelineforeign" },
    { label: "Read Instructions", link: "/pancard/instructionforeign" },
    { label: "Documents Required", link: "/pancard/documentsforeign" },
    { label: "Do’s & Don’ts", link: "/pancard/do's" },
  ];

  return (
    <section className="relative bg-[#e8f0f7] rounded-xl flex flex-col md:flex-row justify-between items-center md:items-start gap-10 shadow-sm px-5 sm:px-8 py-10 overflow-hidden">

      {/* Left Image */}
      <div className="flex justify-center md:justify-center w-full md:w-1/2 relative z-10 ">
        <Image
          src="/image/pancard-foreign3.png"
          width={360}
          height={360}
          alt="image"
          className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto object-contain hidden md:block"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 max-w-xl p-4 sm:p-6 md:p-10 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug text-center md:text-left">
          Application for Allotment of New PAN (Form 49AA) <br />
          <span className="text-blue-900">for Foreign Citizens</span>
        </h2>

        <p className="text-gray-700 mt-6 leading-relaxed text-sm sm:text-base relative text-justify md:text-left">
          This type is assigned to foreign individuals and entities that did not
          receive a PAN previously.
          <br />
          SevenUniques <span className="font-bold">e PAN card service</span>:
          You can apply online by using the SevenUniques{" "}
          <span className="font-bold">e PAN card service</span> and upload your
          documents and be given the PAN number without setting foot in any
          office.
          <br />
          It is easy, clear, and trustworthy to the international user through
          our online PAN services.
          <span className="absolute left-0 bottom-[-20px] w-full h-[2px] bg-[#FFD84C] rounded-full"></span>
        </p>

        {/* Buttons */}
        <div className="mt-10 sm:mt-12 flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
          {menuItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="flex justify-between items-center text-gray-900 font-medium border border-gray-300 rounded-lg  shadow-md py-3 px-5 text-sm sm:text-base w-full sm:w-[45%] md:w-[48%] lg:w-[45%] hover:text-[#3a6f82] hover:bg-[#f9fbfd] transform transition-transform duration-300 hover:scale-105"
            >
              {item.label}
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
