"use client";

import React, { useState } from "react";
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
  Wallet,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

// Icon mapping
const serviceIcons = {
  moneyTransfer: <ArrowRightLeft className="w-5 h-5" />,
  aeps: <Fingerprint className="w-5 h-5" />,
  microAtm: <CreditCard className="w-5 h-5" />,
  miniStatement: <ScrollText className="w-5 h-5" />,
  mobileRecharge: <Smartphone className="w-5 h-5" />,
  dthRecharge: <Satellite className="w-5 h-5" />,
  electricity: <Bolt className="w-5 h-5" />,
  gas: <Flame className="w-5 h-5" />,
  licNewPolicy: <FilePlus className="w-5 h-5" />,
  licPremium: <ShieldCheck className="w-5 h-5" />,
};

// Service data structure
const serviceGroups = [
  {
    title: "Banking Services",
    desc : '“Lorem Ipsum” generator. “Lorem ipsum” dummy text is used by many web-developers to test how their HTML templates will look with real data.',
    items: [
      { label: "Money Transfer", key: "moneyTransfer" },
      { label: "Aadhaar ATM - AePS", key: "aeps" },
      { label: "Micro ATM", key: "microAtm" },
      { label: "Mini Statement", key: "miniStatement" },
    ],
  },
  {
    title: "Utility Services",
    desc : '“Lorem Ipsum” generator. “Lorem ipsum” dummy text is used by many web-developers to test how their HTML templates will look with real data.',
    items: [
      { label: "Mobile Recharge", key: "mobileRecharge" },
      { label: "DTH Recharge", key: "dthRecharge" },
      { label: "Electricity BP", key: "electricity" },
      { label: "Gas BP", key: "gas" },
    ],
  },
  {
    desc : '“Lorem Ipsum” generator. “Lorem ipsum” dummy text is used by many web-developers to test how their HTML templates will look with real data.',
    title: "Insurance",
    items: [
      { label: "LIC New Policy", key: "licNewPolicy" },
      { label: "LIC Premium", key: "licPremium" },
    ],
  },
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

export default function IncomeCalculator() {
  const [data, setData] = useState({
    moneyTransfer: 1,
    aeps: 1,
    microAtm: 1,
    miniStatement: 1,
    mobileRecharge: 1,
    dthRecharge: 1,
    electricity: 1,
    gas: 1,
    licNewPolicy: 1,
    licPremium: 1,
  });

  const incomeRates = {
    moneyTransfer: 5,
    aeps: 8,
    microAtm: 5,
    miniStatement: 2,
    mobileRecharge: 3,
    dthRecharge: 3,
    electricity: 2,
    gas: 5,
    licNewPolicy: 3,
    licPremium: 4,
  };

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
    <section className="py-10 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-slate-900  mb-10 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Estimate Your <span className="text-[#115D8E]">Earning Potential</span>
        </motion.h2>

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
                  <p className="text-sm text-gray-700 py-1">
                    {group.desc}
                  </p>
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
                              <span className="font-medium text-slate-700 text-sm md:text-base">
                                {item.label}
                              </span>
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
                              // --- COLOR CHANGE HERE ---
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
                                    ₹{monthlyIncome.toLocaleString()}
                                </h3>
                            </div>

                            {/* Wallet Icon */}
                            <div className="flex justify-center">
                                <Wallet size={70} strokeWidth={1} className="text-[#115D8E]" />
                            </div>

                            {/* CTA Button */}
                            <motion.button
                                className="w-full bg-[#115D8E]  text-white font-semibold py-3 rounded-xl hover:bg-[#115D8E]/90  transition-all duration-200 flex items-center justify-center gap-2 group"
                                whileTap={{ scale: 0.97 }}
                            >
                                Withdraw Money
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </motion.button>
                        </div>
                    </motion.div>
        </div>
      </div>
    </section>
  );
}