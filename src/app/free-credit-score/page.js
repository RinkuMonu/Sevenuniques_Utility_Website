"use client";

import React from "react";
import Image from "next/image";

import ToolscardsContent from "../../../components/Toolscards";
import CreditScoreReport from "../../../components/CreditScoreReport";


export default function FreeCreditScorePage() {

  const data = [
    {
      title: "Instant Credit Score Check",
      description:
        "Check your credit score instantly from trusted credit bureau data with a secure and simple process.",
      image: "/images/money-transfer.jpg",
    },
    {
      title: "Detailed Credit Insights",
      description:
        "Understand your credit health, score factors, and improvement suggestions easily.",
      image: "/images/recharge-bills.jpg",
    },
    {
      title: "Safe & Secure Access",
      description:
        "Your data stays fully protected with encrypted and secure verification systems.",
      image: "/images/verification.jpg",
    },
  ];


  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-[#033047] to-[#0a81b0] text-white py-10 md:py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <p className="uppercase tracking-[0.2em] text-sm text-gray-200">
            Free Credit Score
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            Apna Credit Score   <br />Check Karein Bilkul Free
          </h1>
          <p className="text-gray-200 max-w-lg mx-auto md:mx-0">
            Instant apna credit score check karein, apni credit health samjhein aur loans ya credit approvals ke chances ko better banayein fast, secure aur simple process ke saath.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
          <div className="relative w-[280px] md:w-[380px] h-[220px] md:h-[280px]">
            <Image
              src="/image/credit-score-img.png"
              alt="creditscore"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12">
        <CreditScoreReport />
        <ToolscardsContent cardsData={data} />
      </section>


    </main>
  );
}
