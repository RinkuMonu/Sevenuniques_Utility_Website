"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    category: "Basic Household Utilities",
    services: [
      { title: "Electricity", icon: "/icons/elsecricity.png" },
      { title: "Water Supply", icon: "/icons/water.png" },
      { title: "Gas Supply", icon: "/icons/gas.png" },
      { title: "Prepaid Meter", icon: "/icons/meter.png" },
    ],
  },
  {
    category: "Digital & Communication Utilities",
    services: [
      { title: "Broadband Postpaid", icon: "/icons/bp.png" },
      { title: "Cable TV", icon: "/icons/tv.png" },
      { title: "DTH", icon: "/icons/dth.png" },
      { title: "Landline Postpaid", icon: "/icons/lp.png" },
      { title: "Mobile Prepaid", icon: "/icons/mp.png" },
      { title: "Mobile Postpaid", icon: "/icons/mpo.png" },
    ],
  },
  {
    category: "Financial & Payment Utilities",
    services: [
      { title: "Credit Card Bill Payment", icon: "/icons/cc.png" },
      { title: "Loan Repayment", icon: "/icons/lr.png" },
      { title: "Recurring Deposit", icon: "/icons/rd.png" },
      { title: "Rental Payment", icon: "/icons/rent.png" },
      { title: "Subscription Payment", icon: "/icons/sub.png" },
      { title: "Education Fees", icon: "/icons/ef.png" },
      { title: "NPS", icon: "/icons/nps.png" },
      { title: "NCMC", icon: "/icons/ncmc.png" },
    ],
  },
  {
    category: "Insurance & Health Utilities",
    services: [
      { title: "Insurance", icon: "/icons/insurance.png" },
      { title: "Life Insurance", icon: "/icons/li.png" },
      { title: "Health Insurance", icon: "/icons/hi.png" },
    ],
  },
  {
    category: "Government & Municipal Utilities",
    services: [
      { title: "Fastag", icon: "/icons/fastag.png" },
      { title: "Housing Society Payments", icon: "/icons/hsp.png" },
      { title: "Clubs & Associations Fees", icon: "/icons/caf.png" },
      { title: "Municipal Services", icon: "/icons/ms.png" },
      { title: "Municipal Taxes", icon: "/icons/tax.png" },
      { title: "E-Challan", icon: "/icons/e-chalan.png" },
      { title: "Donation", icon: "/icons/donate.png" },
    ],
  },
];

const ServiceGrid = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 pt-16 pb-10 space-y-8">
      <h3 className=" text-4xl font-bold text-[#0C3D4C] ">
        BBPS - Bharat Bill Payment System
      </h3>
      {services.map((category, catIdx) => (
        <div key={catIdx} className="space-y-6">
          <h3 className="text-xl font-bold text-[#0C3D4C]">
            {category.category}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-3 gap-y-10 my-10">
            {category.services.map((service, idx) => {
              const isHovered = hoveredCard === `${catIdx}-${idx}`;

              return (
                <motion.div
                  key={idx}
                  className="relative h-40 cursor-pointer"
                  onHoverStart={() => setHoveredCard(`${catIdx}-${idx}`)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  {/* Top-left triangle */}
                  <motion.div
                    className="absolute top-0 left-0 w-20 h-20 bg-[#3CB4F8] rounded-tl-xl z-40"
                    style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                    initial={{ x: -50, y: -50, opacity: 0 }}
                    animate={
                      isHovered
                        ? { x: 0, y: 0, opacity: 1, transition: { duration: 0.4 } }
                        : { x: -50, y: -50, opacity: 0, transition: { duration: 0.4 } }
                    }
                  />

                  {/* Bottom-right triangle */}
                  {/* <motion.div
                    className="absolute bottom-0 right-0 w-20 h-20 bg-[#3CB4F8] rounded-br-xl  z-40"
                    style={{
                      clipPath: "polygon(100% 100%, 100% 0, 0 100%)",
                    }}
                    initial={{ x: 50, y: 50, opacity: 0 }}
                    animate={
                      isHovered
                        ? { x: 0, y: 0, opacity: 1, transition: { duration: 0.4 } }
                        : { x: 50, y: 50, opacity: 0, transition: { duration: 0.4 } }
                    }
                  /> */}

                  {/* Card Body */}
                  <div className="relative z-10 w-full h-full rounded-2xl border border-[#226787] group-hover:border-[#3CB4F8] flex items-center justify-center p-4">
                    <p className="text-md font-semibold text-center">{service.title}</p>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="absolute z-10 -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-md"
                    animate={
                      isHovered
                        ? {
                          scale: 1.1,
                          rotate: 15,
                          background: "linear-gradient(to bottom, #014D78, #3CB4F8)",
                        }
                        : {
                          scale: 1,
                          rotate: 0,
                          background: "linear-gradient(to bottom, #066191, #01202A)",
                        }
                    }
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;
