"use client";
import React from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const documentCards = [
  {
    title: "ID & Address Proof",
    description: "Aadhaar, PAN, passport, driving license, utility bill, etc.",
  },
  {
    title: "Income Proof",
    description:
      "Salary Slip, ITR, and Bank Statement (where necessary for specific plans).",
  },
  {
    title: "Photographs",
    description: "Recent passport-size photos.",
  },
  {
    title: "Vehicle Documents",
    description: "RC, DL, Previous Policy (vehicle insurance).",
  },
];

const DocumentCard = ({ title, description }) => (
  <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-[#018EDE] via-[#7C3AED] to-[#06B6D4] shadow-[0_18px_55px_rgba(2,125,167,0.18)]">
    <div className="relative h-32 w-full rounded-2xl bg-white/80 backdrop-blur-xl px-5 py-5 overflow-hidden">
      {/* subtle pattern */}
      <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-gradient-to-br from-[#018EDE]/20 to-[#7C3AED]/15 blur-2xl" />
      <div className="pointer-events-none absolute -left-16 -bottom-16 h-44 w-44 rounded-full bg-gradient-to-br from-[#06B6D4]/20 to-[#018EDE]/10 blur-2xl" />

      <h4 className="text-lg font-bold text-[#0C3D4C]">{title}</h4>
      <p className="mt-1 text-sm text-slate-600 leading-6">{description}</p>

      {/* micro interaction */}
      <div className="mt-4 h-[3px] w-10 rounded-full bg-[#018EDE]/70 transition-all duration-300 group-hover:w-16" />
    </div>
  </div>
);

export default function InsuranceDocumentsSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* new background (overall UI change) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#F5FBFF] via-white to-white" />
      <div className="pointer-events-none absolute -left-28 top-20 -z-10 h-80 w-80 rounded-full bg-[#018EDE]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-8 -z-10 h-80 w-80 rounded-full bg-[#7C3AED]/12 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left Column (same structure, new style) */}
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 backdrop-blur">
              Documents checklist
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight text-[#0C3D4C]">
              Easy Documents,
              <br /> Easy Insurance
            </h2>

            <p className="mt-6 text-slate-600 max-w-md mx-auto lg:mx-0">
              Insurance should not be a complex process. Provide minimal
              documents and obtain comprehensive coverage in no time.
            </p>

            <Link
              href="/coming-soon"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0C3D4C] px-6 py-3 font-semibold text-white shadow-[0_16px_40px_rgba(12,61,76,0.22)] transition hover:bg-[#018EDE]"
            >
              Apply Now
              <MoveRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Column (same staggered grid) */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-6">
                <DocumentCard {...documentCards[0]} />
                <DocumentCard {...documentCards[2]} />
              </div>

              <div className="flex flex-col gap-6 mt-0 sm:mt-10">
                <DocumentCard {...documentCards[1]} />
                <DocumentCard {...documentCards[3]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
