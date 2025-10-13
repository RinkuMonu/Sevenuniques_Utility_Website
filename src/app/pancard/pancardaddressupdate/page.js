"use client";
import React from "react";
import { Share2 } from "lucide-react";
import Link from "next/link";

const page = () => {
  const cards = [
    {
      title: "Apply for a New PAN Card",
      desc: "Submit your application easily through our online system. Ensure all personal details are accurate before submission. Our process ensures you get your PAN quickly and securelySubmit your application easily through our online system. Ensure all personal details are accurate before submission. Our process ensures you get your PAN quickly and securelySubmit your application easily through our online system. Ensure all personal details are accurate before submission. Our process ensures you get your PAN quickly and securely.",
    },
    {
      title: "Fill Application Form",
      desc: "Provide your full name, date of birth, and contact information in the PAN form accurately to avoid delays. Ensure all information matches your supporting documentsSubmit your application easily through our online system. Ensure all personal details are accurate before submission. Our process ensures you get your PAN quickly and securelySubmit your application easily through our online system. Ensure all personal details are accurate before submission. Our process ensures you get your PAN quickly and securely.",
    },
    {
      title: "Upload Required Documents",
      desc: "Attach valid proof of identity, address, and a passport-size photo as per government guidelines. Make sure the uploaded files are clear and legibleSubmit your application easily through our online system. Ensure all personal details are accurate before submission. Our process ensures you get your PAN quickly and securelySubmit your application easily through our online system. Ensure all personal details are accurate before submission. Our process ensures you get your PAN quickly and securely.",
    },
    {
      title: "Make Payment Securely",
      desc: "Pay your PAN processing fee online through a secure payment gateway using UPI, debit/credit card, or net bankingSubmit your application easily through our online system. Ensure all personal details are accurate before submission. Our process ensures you get your PAN quickly and securelySubmit your application easily through our online system. Ensure all personal details are accurate before submission. Our process ensures you get your PAN quickly and securely.",
    },
    {
      title: "Application Processing",
      desc: "Once submitted, your PAN application will be reviewed and processed within 10–15 working days. You’ll receive status updates by email or SMSSubmit your application easily through our online system. Ensure all personal details are accurate before submission. Our process ensures you get your PAN quickly and securelySubmit your application easily through our online system. Ensure all personal details are accurate before submission. Our process ensures you get your PAN quickly and securely.",
    },
    {
      title: "Required Documents",
      desc: "Documents like Aadhaar Card, Passport, or Driving License are accepted as identity and address proof. Keep digital copies ready before applyingSubmit your application easily through our online system. Ensure all personal details are accurate before submission. Our process ensures you get your PAN quickly and securelySubmit your application easily through our online system. Ensure all personal details are accurate before submission. Our process ensures you get your PAN quickly and securely.",
    },
    {
      title: "Processing Fee",
      desc: "The application fee for a new PAN card is ₹107 (approx.). Additional convenience charges may apply depending on your chosen payment methodSubmit your application easily through our online system. Ensure all personal details are accurate before submission. Our process ensures you get your PAN quickly and securelySubmit your application easily through our online system. Ensure all personal details are accurate before submission. Our process ensures you get your PAN quickly and securely.",
    },
    {
      title: "Need Assistance?",
      desc: "If you face any issues during your application, feel free to reach out to our support team anytime. We’re here to help you complete the process easilySubmit your application easily through our online system. Ensure all personal details are accurate before submission. Our process ensures you get your PAN quickly and securelySubmit your application easily through our online system. Ensure all personal details are accurate before submission. Our process ensures you get your PAN quickly and securely.",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            PAN Card Address Update
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Apply for your PAN card effortlessly with our simplified online
            process. Each step below helps you understand the procedure better.
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
            Start your PAN card application today and get it delivered to your
            doorstep quickly and securely.
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
