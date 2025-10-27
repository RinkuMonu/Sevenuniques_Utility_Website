"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function GrowthOpportunities() {
  const [audience, setAudience] = useState("retailers");

  const kpis =
    audience === "retailers"
      ? [
        { label: "Earn Commission On Every AePS Withdrawal, Money Transfer, Recharge, And Bill Payment.", image: "/about/commision.jpg" },
        { label: "Attract More Customers To Your Shop By Offering Digital Banking Services.", image: "/about/custom.jpg" },
        { label: "Increase Monthly Income Without Any Heavy Investment Or Complex Setup.", image: "/about/incre.jpg" },
        { label: "Build Trust And Loyalty In Your Local Area With Reliable Services.", image: "/about/trust.jpg" },
      ]
      : [
        { label: "Expand Your Network By Connecting With More Retailers Across Towns And Villages.", image: "/about/network.jpg" },
        { label: "Earn Commission From Every Transaction Made By Your Retailer Network.", image: "/about/commision.jpg" },
        { label: "Receive A Fixed Monthly Salary If You Achieve Your Monthly Target.", image: "/about/ccs.jpg" },
        { label: "Earn An Additional Bonus For Every New Retailer You Onboard.", image: "/about/gift.jpg" },
        { label: "Grow A Consistent Income With Clear Slabs And Transparent Settlements.", image: "/about/iincre.jpg" },
        { label: "Strengthen Your Position As A Trusted Digital Service Provider In Your Region.", image: "/about/regional.jpg" },
      ];

  return (
    <section className="mx-auto max-w-7xl py-16 px-6 lg:px-0">
      <div className="grid gap-12 lg:gap-16 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-8">
          <div className="space-y-6">
            <p className="border-primary text-[#0C3D4C]  w-fit font-bold rounded-2xl bg-[#0C3D4C]/30 px-3 py-1"> Growth Opportunities </p>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 leading-tight mb-4">
              Unlock revenue for{" "}
              <span className="text-[#0C3D4C]  font-bold">
                {audience === "retailers" ? "retailers" : "distributors"}
              </span>{" "}
              with actionable insights
            </h2>

            <p className="text-lg text-gray-600 max-w-prose leading-relaxed">
              Launch data-driven playbooks that turn insights into results. Measure impact with transparent KPIs and
              iterate quickly.
            </p>
          </div>

          {/* Audience Switcher */}
          <div className="flex flex-col gap-6">
            <div className="inline-grid grid-cols-2 rounded-lg border border-gray-300 bg-gray-100 p-1 w-fit">
              {["retailers", "distributors"].map((v) => (
                <button
                  key={v}
                  onClick={() => setAudience(v)}
                  className={`rounded-md px-4 py-2.5 text-sm font-medium transition-all duration-200 ${audience === v
                      ? "bg-white shadow-sm text-gray-900"
                      : "text-gray-500 hover:text-gray-700"
                    }`}
                >
                  {v === "retailers" ? "Retailers" : "Distributors"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-8">
          {/* Image */}
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <div className="aspect-[2/1]">
              <Image
                src={
                  audience === "retailers"
                    ? "/about/retailer.jpg"
                    : "/about/dis.jpg"
                }
                alt={
                  audience === "retailers"
                    ? "Modern retail storefront showcasing merchandising and product displays."
                    : "Distributor warehouse with organized logistics and pallets."
                }
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute left-4 top-4 bg-white/90 backdrop-blur text-gray-800 text-sm font-medium px-3 py-1.5 rounded-lg">
              {audience === "retailers" ? "Retail execution" : "Distributor network"}
            </span>
          </div>

        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-10">
        {kpis.map((k) => (
          <div
            key={k.label}
            className="border border-gray-200 rounded-xl p-6 bg-white shadow-md hover:shadow-md transition-shadow duration-200"
          >
            <Image src={k.image} height={70} width={70} alt="benifit icon" className="mb-2" />
            <p className=" ">{k.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}