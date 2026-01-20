"use client";

import React from "react";
import Image from "next/image";
import { Gift, Wallet, Trophy, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function HomeCreditScoreSection() {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="rounded-2xl bg-[#e6f6ff] shadow-sm p-4 sm:p-6 lg:p-10">

          <div className="grid items-center gap-8 lg:grid-cols-12">

            {/* Left Image Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-[#b7dffc] p-4 sm:p-6 text-white shadow-sm">
                <Image
                  src="/image/ccs2.png"
                  alt="Credit Score Preview"
                  width={420}
                  height={420}
                  className="w-full h-auto object-contain"
                />
                <div className="pointer-events-none absolute -right-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-white/20" />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-8">

              {/* Title + Button */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold flex items-center gap-3 text-slate-900">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 ring-1 ring-orange-100">
                    <Image
                      src="/image/creditscoreimg2.png"
                      alt="Credit score"
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain"
                    />
                  </span>
                  Credit Score
                </h3>

                <Link
                  href="https://play.google.com/store/apps/details?id=com.utility.finunique"
                  className="inline-flex justify-center rounded-lg bg-[#1e5674] px-5 py-2.5 text-sm sm:text-base font-semibold text-white shadow-sm transition hover:bg-[#338cbd]"
                >
                  Download App
                </Link>
              </div>

              {/* Subtitle */}
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                Stay on top of your credit health instantly
              </p>

              {/* Info Items */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <InfoItem icon={Gift} label="See your score" value="Live score & report" />
                <InfoItem icon={Wallet} label="Track loans" value="Active loans & EMIs" />
                <InfoItem icon={Trophy} label="Get better deals" value="Offers matched to you" />
              </div>
            </div>
          </div>

          {/* More details */}
          <div className="mt-6 text-center">
            <Link
              href="/free-credit-score"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1e5674] hover:text-[#439ecf]"
            >
              More details <ChevronDown className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

const InfoItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4 rounded-xl bg-white/60 p-4 shadow-sm">
    <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-700">
      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
    </div>
    <div>
      <p className="text-sm sm:text-base text-slate-600">{label}</p>
      <p className="text-sm sm:text-base font-semibold text-gray-500">{value}</p>
    </div>
  </div>
);
