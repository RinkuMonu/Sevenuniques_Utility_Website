"use client";
import React from 'react';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

// --- Data for the document cards ---
// This approach makes it easy to add or modify cards later.
const documentCards = [
  {
    title: "ID & Address Proof",
    description: "Aadhaar, PAN, passport, driving license, utility bill, etc.",
  },
  {
    title: "Income Proof",
    description: "Salary Slip, ITR, and Bank Statement (where necessary for specific plans).",
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


// --- Reusable Card Sub-component ---
const DocumentCard = ({ title, description }) => (
  <div className="bg-white rounded-xl shadow-lg flex overflow-hidden w-full h-32  items-center border-s-8 border-[#018EDE]">
    <div className="p-5">
      <h4 className="font-bold text-lg text-[#018EDE]">{title}</h4>
      <p className="mt-1 text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);


// --- Main Section Component ---
export default function InsuranceDocumentsSection() {
  return (
    <section className="bg-white font-sans py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Easy Documents,<br /> Easy Insurance
            </h2>
            <p className="mt-6 text-gray-600 max-w-md mx-auto lg:mx-0">
              Insurance should not be a complex process. Provide minimal documents and obtain comprehensive coverage in no time.
            </p>
            <Link href='/conatct' className="mt-8 inline-flex items-center gap-2 px-6 py-2 font-semibold text-[#018EDE] border-2 border-[#018EDE] rounded-full hover:bg-cyan-50 hover:border-cyan-400 transition-all duration-300">
              Apply Now
              <MoveRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Column: Document Cards Grid */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* First column of cards */}
                <div className="flex flex-col gap-6">
                    <DocumentCard title={documentCards[0].title} description={documentCards[0].description} />
                    <DocumentCard title={documentCards[2].title} description={documentCards[2].description} />
                </div>
                {/* Second column of cards, staggered down */}
                <div className="flex flex-col gap-6 mt-0 sm:mt-10">
                    <DocumentCard title={documentCards[1].title} description={documentCards[1].description} />
                    <DocumentCard title={documentCards[3].title} description={documentCards[3].description} />
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}