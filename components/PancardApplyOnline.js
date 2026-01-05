"use client";
import React from "react";
import Image from 'next/image';
import { Circle, CircleDot } from "lucide-react"; // you can use lucide icons for red icon look

const PancardApplyOnline = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-10 lg-4 md:px-6 max-w-6xl mx-auto px-6 ">
      {/* Left Content */}
      <div className="md:w-2/3 space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center text-[#133845]">
            <Image
              src="/image/thumbprint.png"
              alt="Thumbprint Icon"
              width={50}
              height={50}
              className="-ml-2 "
            />
          </div>
          <h3 className="text-3xl md:text-4xl mb-4 font-bold text-[#0C3D4C]">
            Apply Online
          </h3>
        </div>

        <p className="text-gray-700 leading-relaxed">
          PAN applications must be submitted using the prescribed forms issued by the Income Tax Department (ITD). Indian citizens are required to apply using Form 49A, while foreign citizens must apply through Form 49AA.

        </p>

        <p className="text-gray-700 leading-relaxed">
          For individual and HUF applicants who select an office address as the communication address, both office address proof and residential address proof must be submitted to Finunique.
        </p>

        <p className="text-gray-700 leading-relaxed">
          As per RBI guidelines, all online payments require PIN authentication. Please ensure that your debit or credit card PIN is activated with your bank before making any payment.
        </p>
      </div>

      {/* Right Graphic */}
      <div className="relative md:w-1/3 flex md:pl-10 ">
        <Image
          src="/image/apllyonline3d.png"
          alt="apply online"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default PancardApplyOnline;
