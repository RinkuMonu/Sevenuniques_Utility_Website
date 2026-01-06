"use client";
import React from "react";
import {
  ShieldCheck,
  IndianRupee,
  Headphones,
  Zap,
  Users,
  LineChart,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "RBI & NPCI Compliant",
    desc: "Finunique Micro ATM services operate under strict RBI and NPCI guidelines, ensuring secure and compliant transactions.",
  },
  {
    icon: IndianRupee,
    title: "High Commission Structure",
    desc: "Earn attractive commissions on every cash withdrawal, balance enquiry, and mini statement transaction.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable Transactions",
    desc: "Instant transaction processing with high success rates and minimal downtime across all banks.",
  },
  {
    icon: Headphones,
    title: "24×7 Technical Support",
    desc: "Dedicated support team available round-the-clock to resolve transaction and device-related issues.",
  },
  {
    icon: Users,
    title: "Wide Bank Coverage",
    desc: "Serve customers of multiple banks using a single Micro ATM device with Aadhaar-based authentication.",
  },
  {
    icon: LineChart,
    title: "Business Growth Opportunity",
    desc: "Increase footfall and grow your retail business by offering essential banking services in your locality.",
  },
];

export default function WhyMicroATM() {
  return (
    <section className="bg-[#F5FAFB] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C3D4C]">
            Why Choose Finunique for Micro ATM?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Empower your retail business with secure, profitable, and reliable Micro ATM services backed by Finunique.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#EAF4F6] text-[#0C3D4C] group-hover:bg-[#0C3D4C] group-hover:text-white transition">
                <item.icon size={26} />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
