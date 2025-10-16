import React from "react";
import {
  FileText,
  CreditCard,
  FileCheck,
  Info,
  ChevronRight,
  Clock,
  Shield,
  Truck,
  BookOpen,
  CheckSquare,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { MdIntegrationInstructions } from "react-icons/md";
import Link from "next/link";

export default function PanCorrectionCard() {
  const features = [
    {
      icon: <Clock className="h-6 w-6 text-[#0C3D4C]" />,
      title: "Quick Process",
      description: "Get your PAN card reprinted in minutes.",
    },
    {
      icon: <Shield className="h-6 w-6 text-[#0C3D4C]" />,
      title: "Secure & Safe",
      description: "Your data is protected with top-level security.",
    },
    {
      icon: <Truck className="h-6 w-6 text-[#0C3D4C]" />,
      title: "Home Delivery",
      description: "Receive your PAN card at your doorstep.",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-[#0C3D4C]" />,
      title: "Easy Payment",
      description: "Convenient and secure online payments.",
    },
  ];

  const links = [
    { name: "Apply Now", icon: <FileText size={16} /> },
    { name: "Read Guidelines", icon: <BookOpen size={16} /> },
    { name: "Read Instructions", icon: <MdIntegrationInstructions size={16} /> },
    { name: "Documents Required", icon: <FileCheck size={16} /> },
    { name: "Do’s & Don’ts", icon: <CheckSquare size={16} /> },
    { name: "Designated Centers", icon: <MapPin size={16} /> },
  ];

  return (
    <section className="max-w-9xl py-16 px-5 sm:px-8 lg:px-24 bg-amber-50">
      {/* Heading */}
      <div className="text-center mb-10">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0C3D4C] leading-snug">
          Alteration or Amendment of PAN Data
        </h3>
        <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Update or correct your PAN details easily with our fast and secure process.
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Card Container */}
        <div className="w-full bg-gradient-to-br from-white to-[#F8FAFB] border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8 flex flex-col md:flex-row justify-between">

          {/* Left Section */}
          <div className="w-full md:w-1/2 p-2 sm:p-4 flex flex-col justify-between">
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-8 text-justify md:text-left">
              Select this option in case you already have a PAN, yet you would
              like to change or amend your information (e.g., name, father name
              or date of birth). <br />
              You will be issued with a new PAN card of the same number with
              updated details. <br />
              In the case of the SevenUniques PAN service portal, it is 100%
              online verification and a 100% online process. Our PAN card
              service online is fast and provides accuracy on data.
            </p>

            <div className="flex justify-center md:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#0C3D4C] text-white font-semibold px-6 sm:px-7 py-3 rounded-xl shadow-md hover:bg-[#094657] hover:shadow-lg transition-all duration-300 group"
              >
                Apply Now
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Right Section (Quick Links) */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0 rounded-2xl p-4 sm:p-6">
            <h3 className="font-semibold text-gray-900 mb-6 flex items-center gap-2 text-base sm:text-lg">
              <Info size={20} className="text-[#0C3D4C]" /> Quick Links
            </h3>

            <div className="divide-y divide-gray-100">
              {links.map((link, i) => (
                <button
                  key={i}
                  className="w-full flex items-center justify-between py-3 px-2 sm:px-3 rounded-lg hover:bg-[#F3FAFB] text-gray-700 font-medium transition-all duration-200 group text-sm sm:text-base"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#0C3D4C]">{link.icon}</span>
                    <span>{link.name}</span>
                  </div>
                  <ChevronRight
                    size={16}
                    className="text-gray-400 group-hover:text-[#0C3D4C] group-hover:translate-x-1 transition-transform"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
