"use client";
import Image from "next/image";
import React from "react";

const logos = [
  { src: "/home/hlogo1.png", width: 120, height: 60 },
  { src: "/home/hlogo2.png", width: 150, height: 70 },
  { src: "/home/hlogo3.png", width: 100, height: 50 },
  { src: "/home/hlogo1.png", width: 120, height: 60 },
  { src: "/home/hlogo2.png", width: 150, height: 70 },
  { src: "/home/hlogo3.png", width: 100, height: 50 },
];

const ComplianceSection = () => {
  return (
    <div className="text-center py-16">
      <p className="text-sm font-semibold text-[#24576C] tracking-widest uppercase">
        KEY LICENSES
      </p>
      <h3 className="mt-2 text-4xl font-bold text-[#0C3D4C] pb-10">
        Compliance that Builds Confidence
      </h3>

      {/* Scrolling Container */}
      <div className="relative w-full overflow-hidden bg-blue-50 py-2 max-w-7xl mx-auto rounded-xl">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {logos.map((logo, index) => (
            <div key={index} className="mx-8 flex-shrink-0">
              <Image
                src={logo.src}
                alt="logo"
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            </div>
          ))}
          {/* duplicate for seamless effect */}
          {logos.map((logo, index) => (
            <div key={`dup-${index}`} className="mx-8 flex-shrink-0">
              <Image
                src={logo.src}
                alt="logo"
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplianceSection;
