"use client";
import React from "react";
import Link from "next/link";
import { FaAddressCard } from "react-icons/fa";
import { IoNewspaperSharp } from "react-icons/io5";
import { MdOutlineTrackChanges, MdOutlineBrowserUpdated } from "react-icons/md";
import { IoIosPrint } from "react-icons/io";

const features = [
  {
    id: 1,
    icon: <FaAddressCard className="w-10 h-10 text-orange-800" />,
    title: "PANCARD Correction",
    description:
      "Get your PAN card instantly with online verification and hassle-free documentation.",
    link: "/pancard/correction",
  },
  {
    id: 2,
    icon: <IoNewspaperSharp className="w-10 h-10 text-orange-800" />,
    title: "Apply for New",
    description:
      "All PAN card applications are processed through secure and authorized government channels.",
    link: "/pancard/pancardApplyNew",
  },
  {
    id: 3,
    icon: <MdOutlineTrackChanges className="w-10 h-10 text-orange-800" />,
    title: "Track PAN",
    description:
      "No need for physical paperwork — everything is managed digitally for faster approvals.",
    link: "/pancard/track",
  },
  {
    id: 4,
    icon: <MdOutlineBrowserUpdated className="w-10 h-10 text-orange-800" />,
    title: "Address Update",
    description:
      "Experience smooth and fast PAN processing with real-time status tracking.",
    link: "/pancard/address-update",
  },
  {
    id: 5,
    icon: <IoIosPrint className="w-10 h-10 text-orange-800" />,
    title: "Reprint Pan",
    description:
      "Easily apply for a PAN card from rural and urban areas with simple Aadhaar-based verification.",
    link: "/pancard/reprint",
  },
];

const PancardFeatures = () => {
  return (
    <section className="py-16 bg-[#F9EBDF]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">
          PAN Card Service Features
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Simplify your PAN card application with our secure, fast, and
          paperless services designed for everyone.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature) => (
            <Link
              key={feature.id}
              href={feature.link}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transform transition-transform duration-500 hover:scale-105 p-6 flex flex-col items-center text-center w-full sm:w-[45%] lg:w-[30%] max-w-sm"
            >
              <div className="mb-4 transform transition-transform duration-500 group-hover:rotate-[40deg]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-base">{feature.description}</p>
              <span className="text-orange-700 font-semibold mt-3 group-hover:underline">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PancardFeatures;
