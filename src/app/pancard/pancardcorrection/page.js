"use client";
import React from "react";
import { Share2 } from "lucide-react";
import Link from "next/link";

const page = () => {
  const cards = [
    {
      title: "Correction of PAN card easily",
      desc: "It has made it very easy and safe to correct or update your PAN card. You may require the name correction in the PAN card, address correction, or any other detail; our service of PAN card correction online will be a hassle-free experience. You may amend your PAN details via the correct form (Form 49A or 49AA) and correct your e-PAN card (which is delivered electronically) online.",
    },
    {
      title: "Correction of PAN Card Online",
      desc: "Begin PAN card correction on the Internet by completing the correction form correctly. Make sure that all your personal information, i.e., full name, date of birth, and contact details, is consistent with supporting documents. We have PAN card correction services provision to enable you to make the application within a short time and follow up without any hassles.",
    },
    {
      title: "Fill the PAN Correction Form",
      desc: "Enter all the information accurate in the PAN correction form. Fill in Form 49A when the citizen is an Indian and Form 49AA when the citizen is a foreigner. Make sure that you provide your details twice because this will save you time. This involves changing your name or address, date of birth, or any other personal information in your PAN record.",
    },
    {
      title: "Upload Required Documents",
      desc: "Enclose valid documents as evidence of identity and evidence of address, and a recent passport-size photograph. The documents that are acceptable are Aadhaar Card, Passport, Driving License, and so on, according to the governmental regulations. Ensure that files are clear and legible. This is a requirement of e-KYC PAN card correction.",
    },
    {
      title: "Make Payment Securely",
      desc: "Make payments online through a secure gateway by paying the PAN processing fee. One can pay through UPI, debit/credit card, or net banking. The cost of a standard PAN card correction is approximately (in addition to taxes and convenience fees, which vary depending on the mode of payment).",
    },
    {
      title: "Documents needed to correct PAN.",
      desc: "Make sure that you have supportive documents to make the process go smoothly. The documents that are usually needed are an Aadhaar card, a passport, a driving license, or any other government-issued identity card. These are documents that are required for the correction of names in PAN cards, address correction, or any other corrections.",
    },
    {
      title: "Need Assistance?",
      desc: "In case you have any problems when filing your PAN correction application, our support staff is at your side to help. We have PAN card correction services, and your application gets done within a short time and in the right way, and in a safe manner.",
    },
    {
      title: "Ready to Apply?",
      desc: "Once you start a PAN card correction online, you will be ready. You can easily update your details through PAN card form 49A correction or form 49AA correction, and your corrected PAN card is delivered to your doorstep.",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            PAN Card Correction Made Simple
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Correct or modify PAN card details on the internet, like name,
            address, date of birth, and other personal details.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3 bg-[#deebf2] px-5 py-4 border-b border-gray-100">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#deebf2] text-black">
                  <Share2 className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {card.title}
                </h2>
              </div>

              {/* Paragraph */}
              <div className="px-6 py-5">
                <p className="text-gray-700 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Ready to Apply?
          </h2>
          <p className="text-gray-600 mb-6">
          Try hassle-free PAN correction services like e-PAN card correction online.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#206077] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4788a0] transition"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
