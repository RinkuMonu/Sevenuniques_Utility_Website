"use client";
import React from "react";
import { Share2 } from "lucide-react";
import Link from "next/link";

const page = () => {
  const cards = [
    {
      title: "Apply for a New PAN Card online",
      desc: "Our simplified system allows individuals, HUFs, and non-residents to apply online with ease. Always make sure that all personal information, contact, and supporting data is correct and on par with official records. The process will enable you to apply for a new PAN card securely and expeditiously without delays or a number of submissions or verification errors in the issuance of your PAN.",
    },
    {
      title: "Fill out the PAN Card Application Form online with accuracy",
      desc: "Fill out your PAN card application form online carefully and fill in with  all your personal details, such as name, date of birth, and contact details, as they appear in your supporting documents. Correct details will help in saving time and rejection or hold-up of your application. This is done using our online PAN card application system whereby you can easily fill out the form correctly and securely, making the procedure hassle-free with the card being issued efficiently.",
    },
    {
      title: "PAN Apply Upload Clear and Valid Documents",
      desc: "Include a printed copy of reliable documents of identity and proof of address, like an Aadhaar Card, Passport, Driving License, OCI, or PIO card, etc., as required by the government. Make sure that every uploaded document is legible, clear and is similar to those in your PAN application. Properly uploaded documents save a lot of time on verification, avoid rejection, and enable one to seek a PAN card online, which is quick, safe, and in full compliance with the official requirements.",
    },
    {
      title: "Secure Payment of PAN Card Application",
      desc: "Pay the PAN processing fee via a secure gateway online by UPI, debit/credit card, or net banking. The default price of a new PAN card is ₹107 (without any convenience charges). Online payment is safe, makes the application recorded in real time, and avoids use of physical demand drafts, and it ensures hassle-free processing so that your experience of applying for a PAN card is safe, quick, and without any problem whatsoever, from beginning to end.",
    },
    {
      title: "PAN Card Application Processing Schedule.",
      desc: "Once you have filled out your PAN card application online along with all the necessary information and documents, your application will be considered through the process in 10-15 working days. Your application status will be updated to you in time either through email or SMS. Quick processing would mean that your new PAN card gets issued promptly, and with a lot of speed, you are in a position to do the financial, banking, or lawful transactions without the unnecessary delays.",
    },
    {
      title: "Application of documents required for a new PAN card",
      desc: "You should have some valid identity and address documents before you apply for a new PAN card online, including an Aadhaar card, passport, driving license, or OCI/PIO card. Ensure that your documents correspond with the information in the PAN card application to avoid confusion and time wastage. It is advisable to have the digital copies at hand when applying to be issued with a PAN card to save time and do it safely as well as to ensure that the verification is done efficiently and the process expedited.",
    },
    {
      title: "Application of PAN Card: Fees and Charges",
      desc: "The new PAN card application fee is approx. with other convenience fees depending on the option of payment, like UPI, debit/credit card, or net banking. Online payments can be made instantly, and this is a confirmation of your application submission in addition to the fact that your process of PAN card application process is quick and reliable. Payments are made on time, which means no delays, and you can easily be issued with your PAN card at your communication address.",
    },
    {
      title: "Require Help with PAN Applying Online?",
      desc: "In case of any problems during the online application of your PAN card, you can always contact our support team, and they will provide you with the necessary assistance at every step. Since it takes only the completion of the form and the provision of the documents and secure payments, we can guide you step-by-step so that your PAN card application is properly completed and processed without mistakes or redundant time-wasting.",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
 Apply to Start Your PAN Card.
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
           You can now apply online and get your new PAN card at your doorstep in just a matter of time and safely.


          </p>
        </div>
        {/* Cards */}
        <div className="space-y-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >

              <div className="flex items-center gap-3 bg-[#deebf2] px-5 py-4 border-b border-gray-100">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#deebf2] text-black">
                  <Share2 className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {card.title}
                </h2>
              </div>

              <div className="px-6 py-5">
                <p className="text-gray-700 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
           Apply to Start Your PAN Card.
          </h2>
          <p className="text-gray-600 mb-6">
         You can now apply online and get your new PAN card at your doorstep in just a matter of time and safely.
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
