"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function Guide({ guidelines }) {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#ebf7fa] to-[#fffaf0] flex flex-col items-center py-10 px-4 md:px-8 relative">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="fixed top-6 left-6 flex items-center gap-2 px-4 py-2 bg-[#0C3D4C] text-white rounded-full shadow-2xl hover:bg-[#176B87] active:scale-95 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <div className="max-w-7xl w-full mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-[#176B87] mb-8 text-center tracking-tight">
          PAN Application Steps
        </h1>

        {/* Vertical Stepper */}
        <div className="relative py-6">
          {/* Step line */}
          <div className="absolute left-5 top-0 h-full w-1 bg-gradient-to-b from-[#33b0d6] to-[#fcf6eb] z-0 rounded"></div>
          <ul>
            {guidelines.map((item, index) => (
              <li key={index} className="relative flex items-start mb-14 last:mb-0">
                {/* Colorful Step Icon */}
                <span
                  className={`z-10 mt-1 w-10 h-10 flex items-center justify-center rounded-full border-4 border-white shadow-lg text-white font-semibold text-lg transition
                    ${
                      index % 3 === 0
                        ? "bg-[#2994ba]"
                        : index % 3 === 1
                        ? "bg-[#176B87]"
                        : "bg-[#f6c961]"
                    }`}
                >
                  {index + 1}
                </span>
                {/* Step Card */}
                <div className="ml-8 flex-1 p-5 rounded-xl shadow-lg border border-[#F4F4F5] bg-white">
                  <h3 className="text-lg md:text-2xl font-semibold text-[#24576C] mb-1">{item.title}</h3>
                  <p className="text-gray-700 text-base leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
