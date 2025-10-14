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
    <section className="relative bg-[#e8f0f7] rounded-xl flex flex-col md:flex-row justify-between items-start gap-10 shadow-sm md:mt-18">
      {/* Left Side */}
      <div className="max-w-xl p-8 md:ml-6">
        <h2 className="text-4xl font-bold text-gray-900 leading-snug">
          Allotment of new PAN (Form 49A) <br />
          <span className="text-blue-900">Indian Citizens</span>
        </h2>

        <p className="text-gray-700 mt-6 leading-relaxed text-base relative">
          You should use this form in case you have not yet applied to obtain a PAN or you do not possess a PAN. There is a place on the Income Tax Department site where you can check whether a PAN has been allotted to you or not.
          <br />
          SevenUniques provides the service of online PAN cards, in which the digital PAN card is provided within a limited time, and the entire online submission is done via our{" "}
          <span className="font-bold">online PAN service portal</span>. The{" "}
          <span className="font-bold">PAN card online quick service</span> method
          is a paperless and smooth experience.
          <span className="absolute left-0 bottom-[-25px] w-full h-[2px] bg-[#FFD84C] rounded-full"></span>
        </p>

        <div className="md:mt-18 gap-4 text-sm flex w-full md:w-72">
          {links.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="flex justify-between items-center text-gray-900 font-medium border-b border-gray-400 hover:text-[#3a6f82] shadow-md p-3 transform transition-transform duration-500 hover:scale-105"
            >
              {item.label}
              <ArrowUpRight className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="absolute -top-14 right-30">
        <Image
          src="/image/pan-img1.png"
          width={600}
          height={600}
          alt="PAN illustration"
        />
      </div>
    </section>
  );
}
