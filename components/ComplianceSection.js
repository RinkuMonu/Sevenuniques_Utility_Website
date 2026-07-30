"use client";
import Image from "next/image";
import React from "react";

const logos = [
  // { src: "/home/hlogo1.png", width: 120, height: 60 },
  // { src: "/home/hlogo2.png", width: 150, height: 70 },
  // { src: "/home/hlogo3.png", width: 100, height: 50 },
  // { src: "/home/hlogo1.png", width: 120, height: 60 },
  // { src: "/home/hlogo2.png", width: 150, height: 70 },
  // { src: "/home/hlogo3.png", width: 100, height: 50 },
  { src: "/home/iaf-logo.png", width: 120, height: 60 },
  { src: "/home/iso-logo.png", width: 150, height: 70 },
  { src: "/home/kab-logo.png", width: 100, height: 50 },
  { src: "/home/EGAC-logo.png", width: 120, height: 60 },
  { src: "/home/CERTIFIED-logo.png", width: 150, height: 70 },
  { src: "/home/eu-logo.png", width: 100, height: 50 },
  { src: "/home/msme-logo.png", width: 100, height: 50 },
  { src: "/home/startupindia-logo.png", width: 100, height: 50 },
];

const ComplianceSection = () => {
  return (
    <section className="px-3 py-10 text-center sm:py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#24576C] sm:text-sm">
        KEY LICENSES
      </p>
      <h3 className="mx-auto mt-2 max-w-5xl pb-6 text-2xl font-bold leading-tight text-[#0C3D4C] sm:pb-10 md:px-8 md:text-4xl">
       Certified and Recognized by Govt. of India and leading digital platforms
      </h3>

      {/* Scrolling Container */}
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-xl bg-blue-50 py-3">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {logos.map((logo, index) => (
            <div key={index} className="mx-4 flex-shrink-0 sm:mx-8">
              <Image
                src={logo.src}
                alt="logo"
                width={logo.width}
                height={logo.height}
                className="h-11 w-auto object-contain sm:h-auto"
              />
            </div>
          ))}
          {/* duplicate for seamless effect */}
          {logos.map((logo, index) => (
            <div key={`dup-${index}`} className="mx-4 flex-shrink-0 sm:mx-8">
              <Image
                src={logo.src}
                alt="logo"
                width={logo.width}
                height={logo.height}
                className="h-11 w-auto object-contain sm:h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
