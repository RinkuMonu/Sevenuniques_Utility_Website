"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PancardAllotment2() {
  const menuItems = [
    { label: "Read Guidelines", link: "/pan-card/guideline-foreign" },
    { label: "Read Instructions", link: "/pan-card/instruction-foreign" },
    { label: "Documents Required", link: "/pan-card/documents-foreign" },
    { label: "Do’s & Don’ts", link: "/pan-card/do's" },
  ];

  return (
    <section className="relative  bg-[#e8f0f7] rounded-xl justify-between items-center md:items-start gap-10 shadow-sm px-4 lg:px-0 pt-10 overflow-hidden">

      <div className="max-w-7xl mx-auto  grid md:grid-cols-2">
        {/* Left Image */}
        <div className="flex justify-center md:justify-center w-full relative z-10 ">
          <Image
            src="/image/newpan.png"
            width={360}
            height={160}
            alt="image"
            className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]   hidden md:block"
          />
        </div>

        {/* Right Content */}
        <div className="w-full relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug text-center md:text-left">
            Application for Allotment of New PAN (Form 49AA) <br />
            <span className="text-blue-900">for Foreign Citizens</span>
          </h2>

          <p className="text-gray-700 mt-6 leading-relaxed text-sm sm:text-base relative text-justify md:text-left">
           Form 49AA is intended for foreign individuals and entities who have not previously been allotted a PAN.

            <br />
           With Finunique’s e-PAN service, you can apply online, upload your documents, and receive your PAN number without visiting any office. Our online process is simple, secure, and reliable for international applicants.

           
            <span className="absolute left-0 bottom-[-20px] w-full h-[2px] bg-[#FFD84C] rounded-full"></span>
          </p>

          {/* Buttons */}
          <div className="mt-10 sm:mt-12 grid grid-cols-2  gap-3 sm:gap-4">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="flex justify-between items-center text-gray-900 font-medium border border-gray-300 rounded-lg  shadow-md py-3 px-5 text-sm sm:text-base w-full  hover:text-[#3a6f82] hover:bg-[#f9fbfd] transform transition-transform duration-300 hover:scale-105"
              >
                {item.label}
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
