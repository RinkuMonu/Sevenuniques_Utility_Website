"use client";
import React from "react";
import Image from 'next/image';
import { Circle, CircleDot } from "lucide-react"; // you can use lucide icons for red icon look

const PancardApplyOnline = () => {
  return (
    <section id="pan-apply" className="scroll-mt-24 bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[28px] border border-[#d7e9ed] bg-[#f7fbfc] p-6 sm:p-9 lg:grid-cols-[1fr_.55fr] lg:p-12">
      {/* Left Content */}
      <div className="space-y-4">
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
          <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">Online Application</p>
          <h3 className="mt-2 text-3xl font-extrabold text-[#0C3D4C] sm:text-4xl">
            Apply for PAN with the correct form
          </h3>
          </div>
        </div>

        <p className="text-sm leading-7 text-slate-600">
          PAN applications must be submitted using the prescribed forms issued by the Income Tax Department (ITD). Indian citizens are required to apply using Form 49A, while foreign citizens must apply through Form 49AA.

        </p>

        <p className="text-sm leading-7 text-slate-600">
          For individual and HUF applicants who select an office address as the communication address, both office address proof and residential address proof must be submitted to Finunique.
        </p>

        <p className="text-sm leading-7 text-slate-600">
          As per RBI guidelines, all online payments require PIN authentication. Please ensure that your debit or credit card PIN is activated with your bank before making any payment.
        </p>
      </div>

      {/* Right Graphic */}
      <div className="relative flex min-h-[300px] items-center justify-center rounded-2xl bg-[#eaf6f9] p-5">
        <Image
          src="/image/apllyonline3d.png"
          alt="apply online"
          width={300}
          height={300}
          className="h-[280px] w-auto object-contain"
        />
      </div>
      </div>
    </section>
  );
};

export default PancardApplyOnline;
