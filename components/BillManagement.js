"use client";

import React from 'react';
import {
  Zap,
  Droplets,
  Flame,
  Gauge,
  Router,
  Tv,
  SatelliteDish,
  Phone,
  GraduationCap,
  Landmark,
  CreditCard,
  Shield,
  HeartHandshake,
  Stethoscope,
  Car,
  Home
} from 'lucide-react';
import Image from 'next/image';


const billCategories = {
  left: [
    {
      icon: "/icons/elsecricity.png",
      title: "Electricity",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/water.png",
      title: "Water Supply",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/gas.png",
      title: "Gas Supply",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/meter.png",
      title: "Prepaid Meter",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/bp.png",
      title: "Broadband Postpaid",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/tv.png",
      title: "Cable TV",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/dth.png",
      title: "DTH",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/lp.png",
      title: "Landline Postpaid",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/mp.png",
      title: "Mobile Prepaid",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/mpo.png",
      title: "Mobile Postpaid",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    }, 
     {
      icon: "/icons/cc.png",
      title: "Credit Card Bill Payment",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/lr.png",
      title: "Loan Repayment",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/rd.png",
      title: "Recurring Deposit",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/rent.png",
      title: "Rental Payment",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
  ],
  right: [
  
    {
      icon: "/icons/sub.png",
      title: "Subscription Payment",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/ef.png",
      title: "Education Fees",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/nps.png",
      title: "NPS",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/ncmc.png",
      title: "NCMC",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/insurance.png",
      title: "Insurance",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/li.png",
      title: "Life Insurance",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/hi.png",
      title: "Health Insurance",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/fastag.png",
      title: "Fastag",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/hsp.png",
      title: "Housing Society Payments",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/caf.png",
      title: "Clubs & Associations Fees",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/ms.png",
      title: "Municipal Services",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/tax.png",
      title: "Municipal Taxes",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/e-chalan.png",
      title: "E-Challan",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
    {
      icon: "/icons/donate.png",
      title: "Donation",
      description:
        "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus",
    },
  ],
};


// Reusable component for each bill item
const BillItem = ({ icon, title, description }) => (
  <div className="flex items-start space-x-2 px-5 lg:px-10">
    <Image src={icon} width={40} height={40} className="flex-shrink-0 mt-1" />
    <div className="flex-1">
      <h3 className="text-base font-semibold text-gray-800">{title}</h3>
      <p className="mt-1 text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  </div>
);

const BillManagement = () => {
  return (
    <section className="py-10 ">
      <div className="max-w-7xl mx-auto px-2">
    
          <h3 className=" text-4xl font-bold text-[#0C3D4C] ">
            Hassle-Free Monthly Bill Management
          </h3>
      
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className=" border border-[#226787] rounded-2xl p-4 sm:p-6 divide-y divide-[#B5D8E8]">
            {billCategories.left.map((item, index) => (
              <div key={index} className="py-5 sm:py-6 first:pt-0 last:pb-0">
                <BillItem icon={item.icon} title={item.title} description={item.description} />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className=" border border-[#226787] rounded-2xl p-4 sm:p-6 divide-y divide-[#B5D8E8]">
            {billCategories.right.map((item, index) => (
              <div key={index} className="py-5 sm:py-6 first:pt-0 last:pb-0">
                <BillItem icon={item.icon} title={item.title} description={item.description} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillManagement;