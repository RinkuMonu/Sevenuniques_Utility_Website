"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const stepsData = [
  {
    id: 1,
    title: "Apply online",
    description: "Choose your ideal insurance plan in just a few simple steps.",
    stepimg: "/aeps/onlineapply.svg",
    stepalt: "Apply online",
  },
  {
    id: 2,
    title: "Document upload",
    description: "Submit your documents for quick and secure verification.",
    stepimg: "/aeps/document.svg",
    stepalt: "Document upload",
  },
  {
    id: 3,
    title: "Get Coverage",
    description:
      "Enjoy instant protection and move forward with complete peace of mind.",
    stepimg: "/aeps/payment.svg",
    stepalt: "Get coverage",
  },
];

function StepIconChip({ stepimg, stepalt }) {
  return (
    <div className="relative mx-auto mb-6 flex items-center justify-center">
      {/* make this relative so Image fill works */}
      <div className="relative flex h-50 w-50 items-center justify-center ">
        {!!stepimg && (
          <Image
            src={stepimg}
            alt={stepalt || ""}
            fill
            className="object-contain p-1"
          />
        )}
      </div>
    </div>
  );
}

export default function InsuranceProcessSteps() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-0">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#24576C] leading-tight">
            How it works
          </h2>
          <p className="mt-4 text-gray-600">
            Apply now because your future deserves protection—finish in a few
            simple steps.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute left-1/2 top-8 hidden w-[92%] -translate-x-1/2 lg:block">
            <svg viewBox="0 0 1000 200" className="h-36 w-full" preserveAspectRatio="none">
              <path
                d="M 40 120 C 250 10, 450 210, 660 110 S 920 110, 960 70"
                fill="none"
                stroke="rgba(156, 163, 175, 0.55)"
                strokeWidth="2.5"
                strokeDasharray="2 10"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {stepsData.map((step) => (
              <div key={step.id} className="relative text-center">
                <StepIconChip stepimg={step.stepimg} stepalt={step.stepalt} />

                <h3 className="text-xl font-semibold text-[#0C3D4C]">
                  {step.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/coming-soon"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#1297E2] px-6 py-3 font-semibold text-[#1297E2] transition-colors duration-300 hover:bg-[#33B5E5] hover:text-white"
          >
            Apply Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
