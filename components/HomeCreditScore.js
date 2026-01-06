"use client";

import React from "react";
import Image from "next/image";
import { Gift, Wallet, Trophy, ChevronDown, Star, CheckCircle2 } from "lucide-react";
import Link from "next/link";


export default function HomeCreditScoreSection() {
  const benefits = ["See your score", "Spot overdues", "Track loans", "Get better deals"];

  return (
    
    <>
       <section className="bg-white py-10">
      <div className="mx-auto px-4 sm:px-20">
        <div className="rounded-xl  bg-white p-5 sm:p-3 border border-slate-100 shadow-sm">
          <div className="grid items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700  to-[#b7dffc] p-6 text-white shadow-sm">
              <Image
              src="/image/ccs2.png"
              alt="Credit Score Preview"
              width={420}
              height={200}
              className="h-auto w-[300px] object-contain"
              // style={{ width: "100%", height: "auto" }}
            />
                <div className="pointer-events-none absolute -right-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-white/20" />
              </div>
            </div>

            <div className="lg:col-span-8">
            <div className="flex justify-between">

              <h3 className="text-2xl font-bold flex gap-3 text-slate-900 sm:text-3xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 ring-1 ring-orange-100">
              <Image
                src="/image/creditscoreimg2.png"
                alt="Credit score"
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            </span> Credit Score
              </h3>
              <div className="lg:col-span-2 lg:flex lg:justify-end">
              <Link href={"https://play.google.com/store/apps/details?id=com.utility.finunique"} className="w-full rounded-md bg-indigo-600 px-6 py-2 text-lg  text-white shadow-sm transition hover:bg-indigo-700 lg:w-auto">
                Download App
              </Link>
            </div>
            </div>

              <div className=" flex flex-wrap items-center gap-3">
                <span className="text-sm text-slate-600">Stay on top of your credit health instantly</span>
                {/* <Stars rating={4.8} /> */}
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                <InfoItem icon={Gift} label="See your score" value="Live score & report" />
                <InfoItem icon={Wallet} label="Track loans" value="Active loans & EMIs" />
                <InfoItem icon={Trophy} label="Get better deals" value="Offers matched to you" />
              </div>

            </div>

           
          </div>
              <Link href="/free-credit-score" className="mx-auto w-full text-center justify-center flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                More details <ChevronDown className="h-4 w-4" />
              </Link>
        </div>
      </div>
    </section>
    </>
  );
}

const InfoItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4 mt-10">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-700">
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <p className="text-[18px] text-slate-500">{label}</p>
      <p className="text-[16px] font-semibold text-[#dfdede]">{value}</p>
    </div>
  </div>
);

const Stars = ({ rating = 4.8 }) => (
  <div className="flex items-center gap-2">
    <span className="text-sm font-semibold text-slate-700">{rating}</span>
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 text-amber-400"
          fill="currentColor"
        />
      ))}
    </div>
  </div>
);
