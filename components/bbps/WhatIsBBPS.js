"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const StatCard = ({ label, value }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
    <p className="text-xs font-semibold tracking-[0.22em] text-slate-500">
      {label}
    </p>
    <p className="mt-2 text-lg sm:text-xl font-extrabold text-slate-900">
      {value}
    </p>
  </div>
);

export default function WhatIsBBPS() {
  return (
    <section className="px-6 lg:px-24 mt-20">
      <div className="mx-auto ">
        <div className="relative overflow-hidden rounded-none border border-slate-200 bg-white">
          {/* subtle top accent for “sharp” look */}
          <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#0C3D4C] via-teal-600 to-cyan-600" />

          <div className="grid grid-cols-1 gap-0 md:grid-cols-5">
            {/* Left */}
            <div className="md:col-span-3 p-6 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#0C3D4C]" />
                <p className="text-xs font-bold tracking-[0.28em] text-[#0C3D4C]">
                  WHAT IS BBPS
                </p>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900">
                Bharat Bill Payment System (BBPS)
              </h1>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
              BBPS is India’s unified bill payment network, making it simple, secure, and seamless to pay your bills through multiple channels.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <StatCard label="EXPERIENCE" value="10+ years" />
                <StatCard label="WORDS WRITTEN" value="3 million+" />
                <StatCard label="ENGAGEMENT" value="30% higher" />
                <StatCard label="BRANDS" value="100+" />
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[#0C3D4C] px-6 py-3 text-sm font-bold tracking-wider text-white hover:-translate-y-px hover:shadow-[0_14px_40px_rgba(12,61,76,0.28)] transition"
                >
                  LET&#39;S COLLABORATE
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="md:col-span-2 border-t md:border-t-0 md:border-l border-slate-200 p-6 sm:p-10">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <div className="absolute inset-0 bg-linear-to-br from-white/0 via-white/0 to-[#0C3D4C]/10" />
                <Image
                  src="/bbps/Crafting3d.png"
                  width={900}
                  height={700}
                  alt="BBPS illustration"
                  className="relative h-72 w-full object-cover"
                  priority
                />
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold tracking-[0.22em] text-slate-500">
                  TITLE
                </p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-wide text-slate-900">
                  Bharat Bill Payment System
                </h2>

                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm leading-relaxed text-slate-600">
                  A modern and well-structured design featuring clear boundaries, gentle depth effects, and informative stat tiles focused more on a functional product experience than a showcase portfolio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* bottom padding strip for a “panel” feel */}
          <div className="h-3 bg-slate-50 border-t border-slate-200" />
        </div>
      </div>
    </section>
  );
}
