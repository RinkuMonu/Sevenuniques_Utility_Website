"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import React from "react";

export default function HomeCreditScoreSection() {
  const benefits = [
    "See Your Score",
    "Spot Overdues",
    "Track Loansls",
    "Get Better Deals",
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* LEFT CONTENT */}
        <div className="md:basis-[60%] space-y-6">
          {/* Header */}
          <div className="flex items-center gap-2">
            <Image
              src="/image/creditscoreimg2.png"
              alt="Credit Score Icon"
              width={50}
              height={50}
              className="shadow-md p-2"
            />
            <span className="text-gray-800 font-bold">Credit Score</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Stay on Top of Your<br />  Credit Health – Instantly!
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-lg">
           Monitor your credit score anytime, anywhere, and take control of your financial future. 

          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mt-4">
            {benefits.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle className="text-green-500 w-5 h-5" />
                <span className="text-gray-700 text-base">{item}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <Link href="https://play.google.com/store/apps/details?id=com.utility.finunique" target="blank" className="bg-[#f56600] text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#e35b00] transition">
              Download App

              <Image
                src="/image/logoplaystore.png"
                width={20}
                height={20}
                alt="img"
                className="invert brightness-0 saturate-0"
              />

            </Link>
            <Link href="/free-credit-score" className="border border-[#f56600] text-[#f56600] px-6 py-3 rounded-lg font-bold hover:bg-[#f56600] hover:text-white transition">
              Know More
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:basis-[40%] flex justify-center md:justify-end hidden md:flex">
          <Image
            src="/image/credit-score.png"
            alt="Credit Score Preview"
            width={300}
            height={600}
            className="w-full h-75"
          />
        </div>

      </div>
    </section>
  );
}