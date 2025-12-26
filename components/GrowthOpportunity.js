"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function GrowthOpportunities() {
  const [audience, setAudience] = useState("retailers");

  const kpis =
    audience === "retailers"
      ? [
        { label: "Earn commissions on every transaction including AePS withdrawals, money transfers, recharges, and bill payments.", image: "/about/commision.jpg" },
        { label: "Bring more customers to your shop by offering easy and reliable digital banking services.", image: "/about/custom.jpg" },
        { label: "Boost your monthly income without heavy investment or complicated setup.", image: "/about/incre.jpg" },
        { label: "Strengthen trust and build long-term customer loyalty in your local area.", image: "/about/trust.jpg" },
      ]
      : [
        { label: "Connect with more retailers in nearby towns and villages.", image: "/about/network.jpg" },
        { label: "Get commission from every transaction made by your retailer network.", image: "/about/commision.jpg" },
        { label: "Receive a fixed monthly salary when you meet your targets.", image: "/about/ccs.jpg" },
        { label: "Earn additional bonuses for every retailer you onboard.", image: "/about/gift.jpg" },
        { label: "Enjoy steady income with clear slabs and transparent settlements.", image: "/about/iincre.jpg" },
      ];

  return (
    <section className="mx-auto max-w-7xl py-16 px-6 lg:px-14">
      <div className="grid gap-12 lg:gap-16 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-8">
          <div className="space-y-6">
            <p className="border-primary text-[#0C3D4C]  w-fit font-bold rounded-2xl bg-[#0C3D4C]/30 px-3 py-1"> Growth Opportunities </p>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 leading-tight mb-4">
              Designed to Increase{" "}
              <span className="text-[#0C3D4C]  font-bold">
                {audience === "retailers" ? "retailers" : "distributors"}
              </span>{" "}
           Retailer Revenue
            </h2>
            <p className="text-lg text-gray-600 max-w-prose leading-relaxed">
              We provide easy-to-use insights that help retailers take the right actions, measure success transparently, and grow faster.
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