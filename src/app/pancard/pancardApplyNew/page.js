"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Fill Application Form",
      desc: "Enter your details such as name, date of birth, and contact information correctly.",
    },
    {
      step: "Step 2",
      title: "Upload Required Documents",
      desc: "Upload valid identity proof, address proof, and passport-size photograph.",
    },
    {
      step: "Step 3",
      title: "Make Payment",
      desc: "Proceed with a secure online payment for your PAN application fee.",
    },
    {
      step: "Step 4",
      title: "Application Submission",
      desc: "Your application will be reviewed and submitted to NSDL/UTIITSL for processing.",
    },
  ];

  const documents = [
    "Aadhaar Card",
    "Voter ID Card",
    "Passport",
    "Driving License",
    "Birth Certificate (if applicable)",
  ];

  return (
    <section className="text-gray-800">
      {/* 🌟 Banner Section */}
      <div className="relative w-full h-72 md:h-96 bg-[#0C3D4C] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/pan-banner.jpg" // 🔄 Replace with your banner image path
          alt="PAN Card Service Banner"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
        <div className="relative z-10 px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Apply for New PAN Card
          </h1>
          <p className="text-white text-lg md:text-xl">
            Fast, Secure & Hassle-free PAN Application Service
          </p>
        </div>
      </div>

      {/* 🪜 How to Apply Section */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-[#0C3D4C] mb-12">
          How to Apply for PAN Card
        </h2>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-100 shadow-md rounded-2xl p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              {/* Step Icon Circle */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-r from-[#0C3D4C] to-[#0C5D6C] text-white text-2xl font-bold shadow-md">
                {index + 1}
              </div>

              {/* Step Title */}
              <h3 className="text-lg font-semibold text-[#0C3D4C] mb-2">
                {item.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-600 text-base">{item.desc}</p>

              {/* Connecting Arrow (Hidden on Last Card) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-[-25px] transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#0C3D4C"
                    className="w-8 h-8 animate-pulse"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 📄 Supporting Documents Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex">
            <div className="w-1/2  text-gray-800 p-6">
              <h2 className="text-3xl font-bold  text-[#0C3D4C] mb-8">
                Supporting Documents Required
              </h2>
              <ul className="list-disc pl-6 text-lg text-gray-700">
                {documents.map((doc, index) => (
                  <li key={index}>{doc}</li>
                ))}
              </ul>
            </div>
            <div className="w-1/2 p-6 justify-center items-center">
              <Image
                src="/image/pan-image.png"
                alt="img"
                width={450}
                height={450}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 💰 Processing Fee Section */}
<div className="flex flex-col md:flex-row justify-center items-stretch gap-8 px-6 py-16">
  {/* Processing Fee Card */}
  <div className="w-full md:w-1/2 flex">
    <div className="group bg-white rounded-2xl shadow-md p-8 text-center flex flex-col justify-center w-full transition-all duration-500 hover:bg-gradient-to-r hover:from-[#02394e] hover:to-[#026c9c] hover:text-white hover:shadow-xl">
      <h3 className="text-3xl font-bold text-[#0C3D4C] mb-6 group-hover:text-white transition-colors duration-300">
        Processing Fee
      </h3>
      <p className="text-lg text-gray-700 mb-2 group-hover:text-white transition-colors duration-300">
        The processing fee for a new PAN card application is:
      </p>
      <p className="text-2xl font-semibold text-[#0C3D4C] group-hover:text-white transition-colors duration-300">
        ₹107 (Approx.)
      </p>
      <p className="text-sm text-gray-500 mt-2 group-hover:text-white transition-colors duration-300">
        *Additional convenience fee may apply for online services.
      </p>
    </div>
  </div>

  {/* Processing Time Card */}
  <div className="w-full md:w-1/2 flex">
    <div className="group bg-white rounded-2xl shadow-md p-8 text-center flex flex-col justify-center w-full transition-all duration-500 hover:bg-gradient-to-r hover:from-[#02394e] hover:to-[#026c9c] hover:text-white hover:shadow-xl">
      <h3 className="text-3xl font-bold text-[#0C3D4C] mb-6 group-hover:text-white transition-colors duration-300">
        Processing Time
      </h3>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto group-hover:text-white transition-colors duration-300">
        Once your application and documents are verified, your PAN card will be
        processed and delivered within{" "}
        <span className="font-semibold text-[#0C3D4C] group-hover:text-white transition-colors duration-300">
          10 to 15 working days.
        </span>
      </p>
    </div>
  </div>
</div>





      {/* 📞 Call to Action */}
      <div className="py-16 text-center bg-[#0C3D4C] text-white">
        <h2 className="text-3xl font-bold mb-4">Get Your PAN Card Now!</h2>
        <p className="text-lg mb-6">
          Apply online in just a few steps and get your PAN delivered to your
          address.
        </p>
        <Link
          href="/contact"
          className="bg-white text-[#0C3D4C] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default page;
