"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function PancardAllotment2() {
  return (
    <section className="bg-[#e8f0f7] rounded-xl flex flex-col md:flex-row justify-evenly items-start shadow-sm">

  <div className="">
        <Image src="/image/pancard-foreign3.png" width={430} height={430} alt="image" />
      </div>


         {/* Left Side */}
      <div className="max-w-xl p-12">
        <h2 className="text-4xl font-bold text-gray-900 leading-snug">
          Application for Allotment of New PAN (Form 49AA) <br />
          <span className="text-blue-900">for Foreign Citizens</span>
        </h2>

        <p className="text-gray-700 mt-6 leading-relaxed text-base relative">
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
          <span className="absolute left-0 bottom-[-25px] w-full h-[2px] bg-[#FFD84C] rounded-full"></span>
        </p>

        <div className="md:mt-18 w-full">
  <div className="flex flex-wrap justify-center gap-4">
    {[
      "Apply Now",
      "Read Guidelines",
      "Read Instructions",
      "Documents Required",
      "Do’s & Don’ts",
      "Designated Centers",
    ].map((item, i) => (
      <a
        key={i}
        href="#"
        className="flex justify-between items-center text-gray-900 font-medium border border-gray-300 rounded-lg shadow-md py-3 px-5 text-sm w-full sm:w-[45%] md:w-[30%] hover:text-[#3a6f82] transform transition-transform duration-500 hover:scale-105"
      >
        {item}
        <ArrowUpRight className="w-4 h-4" />
      </a>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}
