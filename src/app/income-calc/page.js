"use client";

import React, { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import {
  ArrowRightLeft,
  Fingerprint,
  CreditCard,
  ScrollText,
  Smartphone,
  Satellite,
  Bolt,
  Flame,
  FilePlus,
  ShieldCheck,
  Landmark,
  Banknote,
  Building2,
  Home,
  Wallet,
  IdCard,
  CalendarDays,
  ArrowRight,
  Car,
  Zap,
} from "lucide-react";
import Link from "next/link";





const serviceIcons = {
  // aeps: <Fingerprint className="w-5 h-5" />,
  microAtm: <CreditCard className="w-5 h-5" />,
  miniStatement: <ScrollText className="w-5 h-5" />,
  mobileRecharge: <Smartphone className="w-5 h-5" />,
  xpress: <Zap className="w-5 h-5" />,


  // Loan-related
  personalloan: <Wallet className="w-5 h-5" />,
  businessloan: <Banknote className="w-5 h-5" />,
  carloan: <Car className="w-5 h-5" />,
  homeloan: <Home className="w-5 h-5" />,
  constructionloan: <Building2 className="w-5 h-5" />,
  mortgageloan: <Landmark className="w-5 h-5" />,

  // Insurance
  BI: <ShieldCheck className="w-5 h-5" />,
  PCI: <ShieldCheck className="w-5 h-5" />,
  TCI: <ShieldCheck className="w-5 h-5" />,
  CVI: <ShieldCheck className="w-5 h-5" />,

  // Credit Card (generalized for all cards)
  SCB1: <IdCard className="w-5 h-5" />,
  SCB2: <IdCard className="w-5 h-5" />,
  Axis1: <IdCard className="w-5 h-5" />,
  Axis2: <IdCard className="w-5 h-5" />,
  Axis3: <IdCard className="w-5 h-5" />,
  Axis4: <IdCard className="w-5 h-5" />,
  IDFC1: <IdCard className="w-5 h-5" />,
  IDFC2: <IdCard className="w-5 h-5" />,
  AU1: <IdCard className="w-5 h-5" />,
  SBI1: <IdCard className="w-5 h-5" />,
  HSBC1: <IdCard className="w-5 h-5" />,
  RBL1: <IdCard className="w-5 h-5" />,
  Indus1: <IdCard className="w-5 h-5" />,
  Indus2: <IdCard className="w-5 h-5" />,
  Indus3: <IdCard className="w-5 h-5" />,
  HDFC1: <IdCard className="w-5 h-5" />,
  HDFC2: <IdCard className="w-5 h-5" />,
  HDFC3: <IdCard className="w-5 h-5" />,
  BOB1: <IdCard className="w-5 h-5" />,
  BOB2: <IdCard className="w-5 h-5" />,
  BOB3: <IdCard className="w-5 h-5" />,
  Kotak1: <IdCard className="w-5 h-5" />,
  Kotak2: <IdCard className="w-5 h-5" />,
  Amex1: <IdCard className="w-5 h-5" />,
  Amex2: <IdCard className="w-5 h-5" />,
  Amex3: <IdCard className="w-5 h-5" />,
  Amex4: <IdCard className="w-5 h-5" />,
};

// Service data structure
const serviceGroups = [
  {
    title: "Banking Services",
    items: [
      // { label: "Aadhaar ATM - AePS", key: "aeps", avgT: 5000 },
      { label: "Micro ATM", key: "microAtm", avgT: 5000 },
      // { label: "Mini Statement", key: "miniStatement", avgT: 5000 },
      // { label: "Money Transfer X-press DMT", key: "xpress", avgT: 250000 },
    ],
  },
  {
    title: "Recharge Services",
    items: [
      { label: "Mobile Recharge", key: "mobileRecharge", avgT: 500 },

    ],
  },

  // {
  //   title: "Insurance",
  //
  //   items: [
  //     { label: "Bike Insurance", key: "BI", avgT: 5000 },
  //     { label: "Private Car Insurance", key: "PCI", avgT: 5000 },
  //     { label: "Taxi Car Insurance", key: "TCI", avgT: 5000 },
  //     { label: "Commercial Vehicle Insurance", key: "CVI", avgT: 5000 },

  //   ],
  // },
  {
    title: "Loan",
    items: [
      { label: "Personal Loan", key: "personalloan", avgT: 1000000 },
      { label: "Business Loan", key: "businessloan", avgT: 1000000 },
      { label: "Car Loan", key: "carloan", avgT: 1000000 },
      { label: "Home Loan", key: "homeloan", avgT: 1000000 },
      { label: "Construction Loan", key: "constructionloan", avgT: 1000000 },
      { label: "Mortgage Loan", key: "mortgageloan", avgT: 1000000 },

    ],
  },
  {
    title: "Credit Card",
    items: [
      { label: "SCB Credit Cards - Platinum Rewards, Simply Cash, Rewards", key: "SCB1", avgT: 2700 },
      { label: "SCB Credit Cards - EaseMyTrip", key: "SCB2", avgT: 3700 },

      { label: "Axis Bank Credit Cards - True Affluent ", key: "Axis1", avgT: 2000 },
      { label: "Axis Bank Credit Cards - Emerging Affluent", key: "Axis2", avgT: 1500 },
      { label: "Axis Bank Credit Cards - Retail Card ", key: "Axis3", avgT: 1300 },
      { label: "Axis Bank Credit Cards - Lifetime Free ", key: "Axis4", avgT: 900 },

      { label: "IDFC First Bank Credit Cards", key: "IDFC1", avgT: 950 },
      { label: "IDFC First Bank WOW Secured", key: "IDFC2", avgT: 300 },

      { label: "AU Bank", key: "AU1", avgT: 1200 },
      { label: "SBI Credit Cards", key: "SBI1", avgT: 1750 },
      { label: "HSBC Credit Cards", key: "HSBC1", avgT: 2500 },
      { label: "Bajaj RBL Credit Card", key: "RBL1", avgT: 1300 },

      { label: "IndusInd Bank - Platinum Aura", key: "Indus1", avgT: 1200 },
      { label: "IndusInd Bank - Signature Legend", key: "Indus2", avgT: 1400 },
      { label: "IndusInd Bank - Nexxt / Eazy Diner", key: "Indus3", avgT: 1900 },

      { label: "HDFC Bank Credit Cards - Entry Level", key: "HDFC1", avgT: 1600 },
      { label: "HDFC Bank Credit Cards - Premium ", key: "HDFC2", avgT: 2100 },
      { label: "HDFC Bank Credit Cards - Super Premium ", key: "HDFC3", avgT: 2800 },

      { label: "Bank of Baroda Credit Cards - Easy, Select, Premier, Defence, Professional", key: "BOB1", avgT: 550 },
      { label: "Bank of Baroda Credit Cards - Cobrands", key: "BOB2", avgT: 750 },
      { label: "Bank of Baroda Credit Cards - Eterna", key: "BOB3", avgT: 1500 },

      { label: "Kotak Bank Credit Cards - Lifetime Free (League Platinum)", key: "Kotak1", avgT: 1100 },
      { label: "Kotak Bank Credit Cards - IOCL RuPay", key: "Kotak2", avgT: 1200 },

      { label: "Amex Bank Credit Cards - SmartEarn", key: "Amex1", avgT: 1100 },
      { label: "Amex Bank Credit Cards - Membership Rewards (MRCC)", key: "Amex2", avgT: 2100 },
      { label: "Amex Bank Credit Cards - Platinum Travel", key: "Amex3", avgT: 2800 },
      { label: "Amex Bank Credit Cards - Platinum RCP", key: "Amex4", avgT: 3700 },
    ],
  }

];
// Animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const rowListVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};





const cardsData = [
  {
    title: "Accurate Income Estimation",
    description:
      "Get a clear estimate of your expected earnings based on your transactions and services.",
    image: "/images/money-transfer.jpg",
  },
  {
    title: "Real-Time Calculation",
    description:
      "Instantly calculate your income and plan your business growth more effectively..",
    image: "/images/recharge-bills.jpg",
  },
  {
    title: "Easy & Smart Planning",
    description:
      "Track your potential earnings and make better financial decisions with smart calculations.",
    image: "/images/verification.jpg",
  },
];



export default function IncomeCalculator() {
  const [selectedTab, setSelectedTab] = useState("retailer");

  const [data, setData] = useState({
    // aeps: 1,
    microAtm: 1,
    // miniStatement: 1,
    mobileRecharge: 1,
    xpress: 1,
    personalloan: 1,
    businessloan: 1,
    carloan: 1,
    homeloan: 1,
    constructionloan: 1,
    mortgageloan: 1,
    BI: 1,
    PCI: 1,
    TCI: 1,
    CVI: 1,
    SCB1: 1,
    SCB2: 1,
    Axis1: 1,
    Axis2: 1,
    Axis3: 1,
    Axis4: 1,
    IDFC1: 1,
    IDFC2: 1,
    AU1: 1,
    SBI1: 1,
    HSBC1: 1,
    RBL1: 1,
    Indus1: 1,
    Indus2: 1,
    Indus3: 1,
    HDFC1: 1,
    HDFC2: 1,
    HDFC3: 1,
    BOB1: 1,
    BOB2: 1,
    BOB3: 1,
    Kotak1: 1,
    Kotak2: 1,
    Amex1: 1,
    Amex2: 1,
    Amex3: 1,
    Amex4: 1,
  });


  const retailerRates = {
    // aeps: 11,
    microAtm: 11,
    // miniStatement: 2,
    mobileRecharge: 20,
    xpress: 125,
    personalloan: 13500,
    businessloan: 9000,
    carloan: 18000,
    homeloan: 8500,
    constructionloan: 8500,
    mortgageloan: 8500,
    BI: 1,
    PCI: 1,
    TCI: 1,
    CVI: 1,
    SCB1: 2700,
    SCB2: 3700,
    Axis1: 2000,
    Axis2: 1500,
    Axis3: 1300,
    Axis4: 900,
    IDFC1: 950,
    IDFC2: 300,
    AU1: 1200,
    SBI1: 1750,
    HSBC1: 2500,
    RBL1: 1300,
    Indus1: 1200,
    Indus2: 1400,
    Indus3: 1900,
    HDFC1: 1600,
    HDFC2: 2100,
    HDFC3: 2800,
    BOB1: 550,
    BOB2: 750,
    BOB3: 1500,
    Kotak1: 1100,
    Kotak2: 1200,
    Amex1: 1100,
    Amex2: 2100,
    Amex3: 2800,
    Amex4: 3700,
  };

  const distributorRates = {
    // aeps: 2,
    microAtm: 2,
    // miniStatement: 3,
    mobileRecharge: 1,
    xpress: 12.50,
    personalloan: 13500,
    businessloan: 9000,
    carloan: 18000,
    homeloan: 8500,
    constructionloan: 8500,
    mortgageloan: 8500,
    BI: 1,
    PCI: 1,
    TCI: 1,
    CVI: 1,
    SCB1: 2200,
    SCB2: 3000,
    Axis1: 1600,
    Axis2: 1100,
    Axis3: 900,
    Axis4: 600,
    IDFC1: 650,
    IDFC2: 220,
    AU1: 900,
    SBI1: 1350,
    HSBC1: 2000,
    RBL1: 900,
    Indus1: 800,
    Indus2: 1000,
    Indus3: 1500,
    HDFC1: 1250,
    HDFC2: 1700,
    HDFC3: 2400,
    BOB1: 300,
    BOB2: 500,
    BOB3: 1100,
    Kotak1: 800,
    Kotak2: 900,
    Amex1: 800,
    Amex2: 1700,
    Amex3: 2400,
    Amex4: 3000,
  };

  const incomeRates = selectedTab === "retailer" ? retailerRates : distributorRates;


  const dailyIncome = Object.keys(data).reduce(
    (sum, key) => sum + data[key] * incomeRates[key],
    0
  );
  const monthlyIncome = dailyIncome * 30;

  const handleChange = (key, value) => {
    const numValue = Math.max(0, Number(value));
    setData((prev) => ({ ...prev, [key]: numValue }));
  };



  return (
    <>
      <section className="bg-gradient-to-r from-[#033047] to-[#0a81b0] text-white py-10 md:py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <p className="uppercase tracking-[0.2em] text-sm text-gray-200">
            Income Calculator
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            Ab Bill Payment Banega <br /> Easy & Smart Payment
          </h1>
          <p className="text-gray-200 max-w-lg mx-auto md:mx-0">
            Apni monthly income, commission aur earning ko easily calculate karein.
            Smart planning karein, better earning decisions lein aur apne business ko grow karein sab ek hi jagah par.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
          <div className="relative w-[280px] md:w-[380px] h-[220px] md:h-[280px]">
            <Image
              src="/image/income-calc-img.png"
              alt="creditscore"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>



      <section className="py-5 lg:py-10  px-6 lg:px-12 min-h-screen bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-0">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-slate-900  mb-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Estimate Your <span className="text-[#115D8E]">Earning Potential</span>
            <p className="text-sm font-normal mt-3">Calculate your income from bill payments and financial services with our smart income calculator. Get accurate earning estimates to make informed financial decisions.</p>
          </motion.h2>
          <div className="flex mb-4 gap-3">
            <button
              onClick={() => setSelectedTab("retailer")}
              className={`px-5 py-2 rounded-lg font-medium border transition-all ${selectedTab === "retailer"
                ? "bg-[#115D8E] text-white border-[#115D8E]"
                : "bg-white text-[#115D8E] border-[#115D8E]/30"
                }`}
            >
              Retailer
            </button>
            <button
              onClick={() => setSelectedTab("distributor")}
              className={`px-5 py-2 rounded-lg font-medium border transition-all ${selectedTab === "distributor"
                ? "bg-[#115D8E] text-white border-[#115D8E]"
                : "bg-white text-[#115D8E] border-[#115D8E]/30"
                }`}
            >
              Distributor
            </button>
          </div>


          <div className="grid lg:grid-cols-5 gap-10 md:gap-14">
            {/* LEFT SECTION */}
            <motion.div
              className="lg:col-span-3 space-y-8 overflow-x-scroll lg:overflow-x-hidden"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {serviceGroups.map((group) => (
                <motion.div
                  key={group.title}
                  variants={itemVariants}
                  className="bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-900/5 transition-shadow duration-300 overflow-hidden"
                >
                  <div className="px-6 py-4 border-b border-slate-100">
                    <h3 className="text-xl font-semibold text-slate-800">
                      {group.title}
                    </h3>
                    {/* <p className="text-sm text-gray-700 py-1">
                    {group.desc}
                  </p> */}
                  </div>

                  {/* Table Version */}
                  <div className="overflow-x-auto w-full">
                    <table className="w-full border-collapse text-sm">
                      <thead className="bg-slate-100/80 text-slate-500 uppercase text-xs tracking-wider border-b border-slate-100">
                        <tr>
                          <th className="px-6 py-3 text-left font-semibold">
                            Service
                          </th>
                          <th className="px-6 py-3 text-center font-semibold">
                            Daily Transactions
                          </th>
                          <th className="px-6 py-3 text-right font-semibold">
                            Daily Income
                          </th>
                        </tr>
                      </thead>
                      <motion.tbody
                        variants={rowListVariants}
                        initial="hidden"
                        animate="visible"
                        className="divide-y divide-slate-100"
                      >
                        {group.items.map((item) => (
                          <motion.tr
                            key={item.key}
                            variants={rowVariants}
                            className="border-b-0 hover:bg-slate-50/80 transition-all"
                          >
                            <td className="px-6 py-3">
                              <div className="flex items-center gap-3">
                                {/* --- COLOR CHANGE HERE --- */}
                                <span className="text-[#115D8E] bg-[#115D8E]/10 p-2 rounded-lg">
                                  {serviceIcons[item.key]}
                                </span>
                                <p className="font-medium text-slate-700 text-sm md:text-base">
                                  {item.label}
                                  <br />
                                  {group.title === "Credit Card" ? "" : (<span className="text-slate-500 text-sm">
                                    Avg transaction of ₹{item.avgT.toLocaleString("en-IN")}
                                  </span>)}


                                </p>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <input
                                type="number"
                                min="0"
                                value={data[item.key]}
                                onChange={(e) => {
                                  const value = e.target.value.slice(0, 3); // limit to 3 digits
                                  handleChange(item.key, value);
                                }}
                                className="w-20 text-center border border-slate-300 rounded-md text-sm py-1.5 shadow-sm focus:border-[#115D8E] focus:ring-2 focus:ring-[#115D8E]/30 outline-none transition-all"
                              />
                            </td>
                            <td className="px-6 py-4 text-right font-semibold text-[#115D8E] text-lg">
                              ₹
                              {(
                                data[item.key] * incomeRates[item.key]
                              ).toLocaleString()}
                            </td>
                          </motion.tr>
                        ))}
                      </motion.tbody>
                    </table>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* RIGHT SECTION */}
            <motion.div
              className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-white/80 to-sky-50/60 backdrop-blur-xl border border-sky-100 shadow-xl shadow-sky-100/50 p-6 md:p-8 sticky top-24 h-fit"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-4 text-center">
                {/* Per Day Income */}
                <div className="bg-[#115D8E]/10  rounded-xl py-4 px-5 border border-[#115D8E]/20 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[#115D8E] font-medium">
                    <CalendarDays className="w-6 h-6 text-[#115D8E]" />
                    <span>Per Day Income</span>
                  </div>
                  <span className="text-2xl font-bold text-[#115D8E]">
                    ₹{dailyIncome.toLocaleString()}
                  </span>
                </div>

                {/* Monthly Income */}
                <div>
                  <p className="text-sm text-slate-500 mb-1">Estimated Monthly Income</p>
                  <h3 className="text-4xl md:text-5xl font-extrabold text-[#115D8E] tracking-tight">
                    ₹{monthlyIncome.toLocaleString("en-IN")}
                  </h3>
                </div>

                {/* Wallet Icon */}
                <div className="flex justify-center">
                  <Wallet size={70} strokeWidth={1} className="text-[#115D8E]" />
                </div>

                {/* CTA Button */}
                <Link
                  className="w-full bg-[#115D8E]  text-white font-semibold py-3 rounded-xl hover:bg-[#115D8E]/90  transition-all duration-200 flex items-center justify-center gap-2 group"
                  href="https://utility.finuniques.in/register"
                >
                  Become a Partner
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>



      </section>


      <section className="max-w-8xl px-6 py-10 space-y-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row items-center md:items-stretch hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-full p-6 md:p-8">
              <h2 className="text-2xl font-semibold bg-[#1f718a] p-3 rounded-lg text-gray-200 mb-2">
                {card.title}
              </h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}