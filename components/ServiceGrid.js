"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const services = [
  {
    category: "Digital & Communication Utilities",
    services: [
      {
        title: "Mobile Prepaid",
        icon: "/icons/mp.png",
        hoverIcon: "/white/mp.png",
        description: "Recharge any mobile number in seconds."
      },
      {
        title: "Mobile Postpaid",
        icon: "/icons/mpo.png",
        hoverIcon: "/white/mpo.png",
        description: "Pay postpaid mobile bills easily."
      },
      {
        title: "Broadband Postpaid",
        icon: "/icons/bp.png",
        hoverIcon: "/white/bp.png",
        description: "Pay your broadband bills in time."
      },
      {
        title: "Cable TV",
        icon: "/icons/tv.png",
        hoverIcon: "/white/tv.png",
        description: "No delayed cable television."
      },
      {
        title: "DTH",
        icon: "/icons/dth.png",
        hoverIcon: "/white/dth.png",
        description: "Instantly recharge your DTH services."
      },
      {
        title: "Landline Postpaid",
        icon: "/icons/lp.png",
        hoverIcon: "/white/lp.png",
        description: "Pay with ease the landline bills."
      },

    ],
  },
  {
    category: "Basic Household Utilities",
    services: [
      {
        title: "Electricity",
        icon: "/icons/elsecricity.png",
        hoverIcon: "/white/elsecricity.png",
        description: "Pay electricity bills immediately to all electricity providers."
      },
      {
        title: "Water Supply",
        icon: "/icons/water.png",
        hoverIcon: "/white/water.png",
        description: "Billing water online in seconds."
      },
      {
        title: "Gas Supply",
        icon: "/icons/gas.png",
        hoverIcon: "/white/gas.png",
        description: "Pay bills of Clear LPG and piped gas easily."
      },
      {
        title: "Prepaid Meter",
        icon: "/icons/meter.png",
        hoverIcon: "/white/x.png",
        description: "Prepaid meters are instantly recharged."
      },
    ],
  },

  {
    category: "Financial & Payment Utilities",
    services: [
      {
        title: "Credit Card Bill Payment",
        icon: "/icons/cc.png",
        hoverIcon: "/white/cc.png",
        description: "Pay your bills with credit cards."
      },
      {
        title: "Loan Repayment",
        icon: "/icons/lr.png",
        hoverIcon: "/white/lr.png",
        description: "Pay clear loan EMIs on schedule."
      },
      {
        title: "Recurring Deposit",
        icon: "/icons/rd.png",
        hoverIcon: "/white/rd.png",
        description: "You can run your RDs automatically."
      },
      {
        title: "Rental Payment",
        icon: "/icons/rent.png",
        hoverIcon: "/white/rent.png",
        description: "You can pay rent online easily."
      },
      {
        title: "Subscription Payment",
        icon: "/icons/sub.png",
        hoverIcon: "/white/sub.png",
        description: "Easily renew subscriptions."
      },
      {
        title: "Education Fees",
        icon: "/icons/ef.png",
        hoverIcon: "/white/ef.png",
        description: "Pay online school and college fees."
      },
      {
        title: "NPS",
        icon: "/icons/nps.png",
        hoverIcon: "/white/nps.png",
        description: "Easily contribute to the National Pension Scheme."
      },
      {
        title: "NCMC",
        icon: "/icons/ncmc.png",
        hoverIcon: "/white/ncmc.png",
        description: "Refill your National Common Mobility Card."
      },
    ],
  },
  {
    category: "Insurance & Health Utilities",
    services: [
      {
        title: "Insurance",
        icon: "/icons/insurance.png",
        hoverIcon: "/white/insurance.png",
        description: "Pay general insurance premiums."
      },
      {
        title: "Life Insurance",
        icon: "/icons/li.png",
        hoverIcon: "/white/li.png",
        description: "Renew life insurance."
      },
      {
        title: "Health Insurance",
        icon: "/icons/hi.png",
        hoverIcon: "/white/hi.png",
        description: "Unambiguous health insurance payments."
      },
    ],
  },
  {
    category: "Government & Municipal Utilities",
    services: [
      {
        title: "Fastag",
        icon: "/icons/fastag.png",
        hoverIcon: "/white/fastag.png",
        description: "Recharge FASTag to make smooth toll payments."
      },
      {
        title: "Housing Society Payments",
        icon: "/icons/hsp.png",
        hoverIcon: "/white/hsp.png",
        description: "Make online payment of maintenance."
      },
      {
        title: "Clubs & Associations Fees",
        icon: "/icons/caf.png",
        hoverIcon: "/white/caf.png",
        description: "It is easy to clear club memberships."
      },
      {
        title: "Municipal Services",
        icon: "/icons/ms.png",
        hoverIcon: "/white/ms.png",
        description: "Pay municipal services easily."
      },
      {
        title: "Municipal Taxes",
        icon: "/icons/tax.png",
        hoverIcon: "/white/tax.png",
        description: "Pay taxes on property online."
      },
      {
        title: "E-Challan",
        icon: "/icons/e-chalan.png",
        hoverIcon: "/white/e-chalan.png",
        description: "Pay the clearance e-challan immediately."
      },
      {
        title: "Donation",
        icon: "/icons/donate.png",
        hoverIcon: "/white/donate.png",
        description: "Give donations to credible organizations."
      },
    ],
  },
];

const ServiceGrid = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const router = useRouter();

  const handleClick = () => {
    router.push("http://localhost:3000/recharge"); // redirect on click
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pt-16 pb-10 space-y-8">
      <h3 className="text-4xl font-bold text-[#0C3D4C]">
        Bharat Bill Payment System - BBPS
      </h3>

      {services.map((category, catIdx) => (
        <div key={catIdx} className="space-y-6">
          <h3 className="text-xl font-bold text-[#0C3D4C]">
            {category.category}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-3 gap-y-10 my-10 relative">
            {category.services.map((service, idx) => {
              const isHovered = hoveredCard === `${catIdx}-${idx}`;

              return (
                <motion.div
                  key={idx}
                  className="relative h-40 cursor-pointer"
                  onHoverStart={() => setHoveredCard(`${catIdx}-${idx}`)}
                  onHoverEnd={() => setHoveredCard(null)}
                  onClick={handleClick} // Redirect on click
                >
                  {/* Top-left triangle */}
                  <motion.div
                    className="absolute w-18 h-18 bg-[#3CB4F8] rounded-tl-xl z-10"
                    style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                    initial={{ x: "50%", y: 20, opacity: 0 }}
                    animate={
                      isHovered
                        ? { x: 0, y: 0, opacity: 1, transition: { duration: 0.4 } }
                        : { x: "50%", y: 20, opacity: 0, transition: { duration: 0.4 } }
                    }
                  />



                  {/* Card Body */}
                  <div className="relative z-10 w-full h-full rounded-2xl border border-[#226787] group-hover:border-[#3CB4F8] flex flex-col items-center justify-center p-4 text-center">
                    <p className="text-md font-semibold">{service.title}</p>
                    {isHovered && (
                      <p className="text-sm text-gray-700 mt-2">{service.description}</p>
                    )}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="absolute z-10 -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-md"
                    style={{ background: "linear-gradient(to bottom, #066191, #01202A)" }}
                  >
                    <motion.div
                      animate={
                        isHovered
                          ? { rotateY: 360, scale: 1.1 }
                          : { rotateY: 0, scale: 1 }
                      }
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <Image
                        src={isHovered ? service.hoverIcon : service.icon}
                        alt={service.title}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </motion.div>
                  </motion.div>


                  {/* Right Triangle */}
                  <motion.div
                    className="absolute w-18 h-18 bg-[#3CB4F8] rounded-br-xl z-10"
                    style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 0)" }}
                    initial={{ top: "0%", left: "50%", opacity: 0, translateX: "-50%", translateY: "-50%" }}
                    animate={
                      isHovered
                        ? { top: "78%", left: "100%", opacity: 1, translateX: "-100%", translateY: "-50%", transition: { duration: 0.4 } }
                        : { top: "0%", left: "50%", opacity: 0, translateX: "-50%", translateY: "-50%", transition: { duration: 0.4 } }
                    }
                  />
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
