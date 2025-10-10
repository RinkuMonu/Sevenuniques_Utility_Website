"use client";
import React from "react";
import Image from 'next/image';
import { Circle, CircleDot } from "lucide-react"; // you can use lucide icons for red icon look

const PancardApplyOnline = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-10 px-6 md:px-16 py-16 bg-white">
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
          With effect from April 08, 2012, PAN applications are required to be
          furnished in the new forms prescribed by ITD. Indian citizens will
          have to submit their ‘Application for allotment of new PAN’ in revised
          Form 49A only. Foreign citizens will have to submit their ‘Application
          for allotment of new PAN’ in newly notified Form 49AA only.
        </p>

        <p className="text-gray-700 leading-relaxed">
          For New PAN applications, in case of Individual and HUF applicants if
          Address for Communication is selected as Office, then Proof of Office
          Address along with Proof of residential address is to be submitted to
          Protean w.e.f. applications made on and after 1st November 2009.
        </p>

        <p className="text-gray-700 leading-relaxed">
          As per RBI guidelines, the entities making e-commerce transactions are
          required to provide PIN (Personal Identification Number) while
          executing an online transaction. Accordingly, before making payment
          for online PAN/TAN applications using credit/debit card, please ensure
          that the PIN is obtained from your respective Banks.
        </p>
      </div>

      {/* Right Graphic */}
      <div className="relative md:w-1/3 flex  ">
<Image
src="/image/applyonline.jpg"
alt="apply online"
width={300}
height={300}
className="rounded-lg shadow-md"
/>
      </div>
    </section>
  );
};

export default PancardApplyOnline;
