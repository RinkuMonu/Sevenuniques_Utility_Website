"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { useState } from "react";

const homeFaqs = [
  {
    question: "Can I pay all my household bills in one place?",
    answer: "Yes. You can use Finunique for mobile and DTH recharge, electricity, water, gas, broadband, FASTag, loan EMI, credit card, insurance, and several other everyday payments.",
  },
  {
    question: "What should I do if money is deducted but my payment fails?",
    answer: "First check the transaction status in your account. Failed payments are generally reversed by the payment provider. If the amount is not returned, contact Finunique support with your transaction ID so the team can help you.",
  },
  {
    question: "How will I know whether my recharge or bill payment succeeded?",
    answer: "After completing a payment, you will receive its latest status and transaction reference. Keep the reference number available if you need help from support.",
  },
  {
    question: "Can I book bus, train, flight, and hotel services here?",
    answer: "Yes. Finunique provides access to bus, train, and flight booking as well as hotel stays. Select the booking service, enter your travel details, and continue through the Finunique app.",
  },
  {
    question: "Can I pay my vehicle insurance premium through Finunique?",
    answer: "Yes. Dedicated payment options are available for car, bike, taxi, and commercial vehicle insurance. Enter your policy and vehicle details to fetch the premium.",
  },
  {
    question: "Is it safe to enter my mobile number and payment details?",
    answer: "Finunique uses secure authentication and protected payment flows. Never share your OTP, password, or other confidential account information with anyone.",
  },
  {
    question: "Do I need the Finunique app to complete a payment?",
    answer: "You can explore services and enter the required details on the website. When an app is required to complete the transaction, a QR code and official app-store links will be shown.",
  },
  {
    question: "Where can I get help with my account or a transaction?",
    answer: "Use the Contact Us page or email support@finuniques.in with your registered mobile number and transaction reference. Support is available Monday to Saturday, 9:30 AM to 6:30 PM.",
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0289ad]">Help Centre</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">Clear answers to common questions about your payments, bookings, insurance, security, and account.</p>
        </div>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[.92fr_1.08fr] lg:gap-8">
          <div className="order-2 lg:pr-4">
            <div className="divide-y divide-[#dce9ed] border-y border-[#dce9ed]">
              {homeFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={faq.question}>
                    <button type="button" onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-5 py-5 text-left text-base font-semibold text-slate-800 transition hover:text-[#026381] sm:text-lg">
                      <span>{faq.question}</span>
                      <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${isOpen ? "rotate-45 bg-[#026381] text-white" : "bg-[#e8f6f9] text-[#026381]"}`}><Plus size={18} /></span>
                    </button>
                    <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden"><p className="max-w-2xl pb-5 pr-12 text-sm leading-6 text-slate-600">{faq.answer}</p></div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          <div className="relative order-1 mx-auto w-full max-w-[470px] overflow-hidden rounded-[22px]">
            <Image
              src="/image/faq-support-portrait.png"
              alt="Customer using Finunique services with payment and support assistance"
              width={1024}
              height={1536}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
