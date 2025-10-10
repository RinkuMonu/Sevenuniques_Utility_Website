"use client";
import React from "react";
import Image from "next/image";

const advantages = [
  {
    id: 1,
    title: "Easy Cash Withdrawals",
    description:
      "Customers can withdraw money securely from their bank accounts using Aadhaar authentication without needing an ATM or card.",
    icon: "/image/aeps1.png",
  },
  {
    id: 2,
    title: "Bank Balance Enquiry",
    description:
      "Check your bank balance instantly through AEPS with just your Aadhaar number and fingerprint verification.",
    icon: "/image/aeps2.png",
  },
  {
    id: 3,
    title: "Fund Transfer",
    description:
      "Transfer funds easily between banks using Aadhaar authentication — quick, safe, and hassle-free.",
    icon: "/image/aeps3.png",
  },
  {
    id: 4,
    title: "Mini Statement",
    description:
      "Get a quick mini statement of your bank account showing recent transactions through AEPS-enabled agents.",
    icon: "/image/aeps4.png",
  },
  {
    id: 5,
    title: "Increased Rural Reach",
    description:
      "Empowers rural and semi-urban customers to access basic banking services easily without visiting branches.",
    icon: "/image/aeps5.png",
  },
  {
    id: 6,
    title: "Secure & Paperless",
    description:
      "AEPS transactions are Aadhaar and biometric-based, ensuring security and eliminating paperwork.",
    icon: "/image/aeps6.png",
  },
];

const AepsAdvantages = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#e8f0f7] to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0C3D4C] mb-4">
          Advantages of AEPS Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Aadhaar Enabled Payment System (AEPS) brings convenience, security,
          and accessibility to financial transactions — empowering citizens
          across India.
        </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {advantages.map((item) => (
    <div
      key={item.id}
      className="group bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative w-16 h-16 mb-4 transform transition-transform duration-500 group-hover:rotate-30">
        <Image
          src={item.icon}
          alt={item.title}
          width={64}
          height={64}
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold text-[#033f7e] mb-2">
        {item.title}
      </h3>
      <p className="text-gray-600 text-sm">{item.description}</p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default AepsAdvantages;
