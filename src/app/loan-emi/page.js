"use client";

import React from "react";
import Image from "next/image";
import EMICal2 from "../../../components/EMICal2"
import ToolscardsContent from "../../../components/Toolscards";
export default function LoanEMIPage() {

  const data = [
    {
      title: "Accurate EMI Calculation",
      description:
        "Get precise EMI results based on loan amount, interest rate, and tenure for better financial planning.", image: "/images/money-transfer.jpg",
    },
    {
      title: "Instant EMI Results",
      description:
        "Calculate your monthly loan EMI instantly and plan your budget without confusion.",
      image: "/images/recharge-bills.jpg",
    },
    {
      title: "Smart Loan Planning",
      description:
        "Compare different loan options and choose the best EMI plan as per your financial needs.",
      image: "/images/verification.jpg",
    },
  ];


  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-[#033047] to-[#0a81b0] text-white py-10 md:py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <p className="uppercase tracking-[0.2em] text-sm text-gray-200">
            Loan EMI Calculator
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            Apni Loan EMI Easily<br />  Calculate Karein
          </h1>
          <p className="text-gray-200 max-w-lg mx-auto md:mx-0">
            Loan amount, interest rate aur tenure enter karke apni monthly EMI instantly calculate karein. Better loan planning karein aur apni financial budgeting ko easy banayein.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
          <div className="relative w-[280px] md:w-[380px] h-[220px] md:h-[280px]">
            <Image
              src="/image/loan-img.png"
              alt="Loan EMI Calculator"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12">
        <EMICal2 />
        <ToolscardsContent cardsData={data} />
      </section>


    </main>
  );
}
