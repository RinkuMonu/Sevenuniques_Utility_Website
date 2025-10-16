"use client";
import React from "react";
import Image from 'next/image';
import { Circle, CircleDot } from "lucide-react"; // you can use lucide icons for red icon look

const PancardApplyOnline = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-10 lg-4 md:px-0 max-w-7xl mx-auto px-6 md:px-0">
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
          As of April 08, 2012, the PAN applications should be provided according to the revised forms published by the Income Tax Department (ITD).
Indian citizens are to apply with the help of Form 49A, and foreign citizens will fill out Form 49AA.

        </p>

        <p className="text-gray-700 leading-relaxed">
          In the case of an individual and HUF applicant, where the office address is chosen as a communication address, the office address proof and residential address proof should be given to SevenUniques.
        </p>

        <p className="text-gray-700 leading-relaxed">
          According to the RBI guidelines, any online payment requires that the applicants enter their Personal Identification Number (PIN). Always ensure that you verify that your card has the PIN activated before taking out the money using a debit or credit card with your bank.
        </p>
      </div>

      {/* Right Graphic */}
      <div className="relative md:w-1/3 flex md:pl-10 ">
<Image
src="/image/applyonline.jpg"
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
