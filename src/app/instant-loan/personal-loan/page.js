"use client";
import React from "react";
import VerticalSlider from "../../../../components/VerticalSlider";
import StatsBanner from "../../../../components/StatsBanner";
import EMICal2 from "../../../../components/EMICal2";
import BenefitsSection from "../../../../components/BenefitsSection";
import PartnersSection from "../../../../components/PartnersSection";
import TestimonialSlider from "../../../../components/TestimonialSlider";
import ContactBanner from "../../../../components/ContactBanner";
import Image from "next/image";
import Link from "next/link";
import LoanBenefits from "../../../../components/LoanBenefits";
import LoanOptions from "../../../../components/LoanOptions";
import DocumentsRequired from "../../../../components/DocumentsRequired";

function page() {
  const data = {
    id: 1,
    subheading: "PERSONAL LOAN",
    heading: "Simple Loan, Smart Solution Sirf Aapke Liye!",
    description:
      "Get quick approval with minimal paperwork and a hassle-free online process. Flexible repayment options and transparent terms make managing your finances easier than ever. Take control of your financial goals with Finunique.",
    bgImage: "/loan/perbg.png",
    images: [
      "/loan/fl1.png",
      "/loan/fl2.png",
      "/loan/fl3.png",
      "/loan/fl4.png",
    ],
  };

  const LetterCircle = ({ letter }) => (
    <div className="flex h-20 w-20 items-center justify-center rounded-full  p-1 lg:shadow-inner md:h-24 md:w-24">
      <div className="flex h-full w-full items-center justify-center rounded-full lg:border-4 border-[#006F64]">
        <span className="font-sans text-6xl font-medium text-[#006F64] md:text-6xl">
          {letter}
        </span>
      </div>
    </div>
  );

  const letters = ["L", "O", "A", "N"];

  const infoData = [
    { label: "Nationality", value: "Indian" },
    { label: "Loan Tenure", value: "Up to 60 Months" },
    { label: "Experience", value: "Over 1 year" },
    { label: "Occupation", value: "Paid or Freelance" },
  ];

  const slide = {
    image: "/loan/pvs.png",
    heading: (
      <>
        At Finunique, <br />
        how to secure <br />a <span className="text-blue-300">
          Personal
        </span>{" "}
        loan.
      </>
    ),
    sliderData: [
      {
        step: 1,
        title: "Apply Online",
        image: "/loan/loan4.png",
        cta: "Request Calculations",
        details: [
          "Fill in basic details such as your name, mobile number, Aadhaar, and PAN",
          "Select your preferred loan amount and repayment tenure.",
          "Instantly view the loan amount you’re eligible for.",
        ],
      },
      {
        step: 2,
        title: "Upload Documents",
        image: "/loan/loan12.png",
        cta: "Submit Docs",
        details: [
          "Upload your Aadhaar and PAN card details securely",
          "Submit income proof such as salary slips or bank statements.",
          "Provide address proof for verification.",
          "Our system verifies your documents quickly and securely.",
        ],
      },
      {
        step: 3,
        title: "Receive Your Loan",
        image: "/loan/loan13.png",
        cta: "Get Construction Equipment Loan Now",
        details: [
          "Get quick approval with minimal documentation.",
          "Once approved, the loan amount is credited directly to your bank account",
          "Funds are usually disbursed within 24 hours",
          "Use the money to meet your personal financial needs.",
        ],
      },
    ],
  };

  return (
    <>
      <div className="relative flex flex-col md:flex-row items-center justify-between pt-10">
        <div
          className="absolute inset-0 bg-cover "
          style={{ backgroundImage: `url(${data?.bgImage})` }}
        ></div>
        <div className=" z-10 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full space-y-6 md:space-y-0 items-center">
            <div className=" px-10 py-10 lg:py-16 rounded-2xl  max-w-2xl w-full">
              <div className=" z-10">
                <p className="text-sm font-bold uppercase tracking-widest text-[#0C3D4C]">
                  {data?.subheading}
                </p>
                <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#0C3D4C] leading-tight">
                  {data.heading}
                </h2>
                <p className="mt-4 my-8 text-base text-[#5D5D5D] max-w-md">
                  {data.description}
                </p>
                <Link
                  href="https://utility.Finuniques.in/register"
                  className="relative inline-block rounded-full border border-[#0C3D4C] p-[2px]"
                >
                  <span className="block px-8 py-3 bg-[#0C3D4C] text-white font-semibold rounded-full transition-all duration-300 ease-in-out hover:bg-transparent hover:text-[#0d2f4d]">
                    Register now
                  </span>
                </Link>
              </div>
            </div>
            <div className="relative w-full lg:h-[400px]  flex lg:items-center justify-center">
              <style jsx>{`
                @keyframes floatUp {
                  0%,
                  120% {
                    transform: translateY(0);
                  }
                  50% {
                    transform: translateY(-20px);
                  }
                }
                @keyframes floatDown {
                  0%,
                  120% {
                    transform: translateY(0);
                  }
                  50% {
                    transform: translateY(20px);
                  }
                }
                @keyframes floatLeft {
                  0%,
                  120% {
                    transform: translateX(0);
                  }
                  50% {
                    transform: translateX(-20px);
                  }
                }
                @keyframes floatRight {
                  0%,
                  120% {
                    transform: translateX(0);
                  }
                  50% {
                    transform: translateX(20px);
                  }
                }

                .float-up {
                  animation: floatUp 4s ease-in-out infinite;
                }
                .float-down {
                  animation: floatDown 4s ease-in-out infinite;
                }
                .float-left {
                  animation: floatLeft 4s ease-in-out infinite;
                }
                .float-right {
                  animation: floatRight 4s ease-in-out infinite;
                }
              `}</style>

              {/* Icon 1 - floating UP */}
              <div className="lg:absolute top-0 right-30 float-up">
                <div className="p-4  rounded-xl ">
                  <Image src="/loan/fl1.png" width={120} height={120} alt="" />
                </div>
              </div>

              {/* Icon 2 - floating DOWN */}
              <div className="lg:absolute bottom-20 right-0 float-down ">
                <div className="p-4  rounded-xl ">
                  <Image src="/loan/fl2.png" width={120} height={120} alt="" />
                </div>
              </div>

              {/* Icon 3 - floating LEFT */}
              <div className="lg:absolute top-1/4 left-10 float-left">
                <div className="p-4  rounded-xl ">
                  <Image src="/loan/fl3.png" width={120} height={120} alt="" />
                </div>
              </div>

              {/* Icon 4 - floating RIGHT */}
              <div className="lg:absolute top-0 left-40 float-right">
                <div className="p-4  rounded-xl ">
                  <Image src="/loan/fl4.png" width={120} height={120} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div
          className={`relative lg:pt-20 `}
          style={{ backgroundColor: "#E1F8DC" }}
        >
          <div className="max-w-7xl mx-auto px-4 lg:pb-16 lg:px-0 ">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div className=" ">
                <div className="flex space-x-4 md:space-x-6">
                  {letters.map((char) => (
                    <LetterCircle key={char} letter={char} />
                  ))}
                </div>
              </div>

              <div className="hidden lg:block absolute bottom-0 right-6">
                <Image
                  src={"/loan/per2.png"}
                  alt="loan-section"
                  width={380}
                  height={380}
                  className="
    w-[220px]
    sm:w-[260px]
    lg:w-[350px]
    left-1/2
    -translate-x-1/2
    h-auto
    object-contain
  "
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <VerticalSlider slide={slide} /> */}

      <LoanBenefits
        title="You can borrow funds for any personal need or project."
        description="We ensure quick approvals, minimal paperwork, and a smooth, customer-friendly experience."
        image="/loan/per3.png"
        benefits={[
          "Fast processing with minimal paperwork",
          "Flexible EMI options to suit your budget",
          "Loans for any personal purpose",
          "Competitive and low interest rates",
          "Completely transparent with no hidden charges",
          "Apply online anytime, anywhere",
          "No collateral and no guarantor required",
          "Personalized loan offers tailored to your profile",
          "Instant fund transfer — receive money within 24 hours",
          "Easy top-up — increase your loan limit with ease",
        ]}
      />

      <EMICal2 />
      <StatsBanner />
      <DocumentsRequired />
      <div className="bg-[#EFF9FF] mb-30 relative">
        <div className=" px-4 lg:px-0 max-w-6xl mx-auto py-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-4xl font-bold text-[#0C3D4C] max-w-lg">
                Eligibility Check, Loan Approve Quick
              </h3>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {infoData.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-[#0063A2] px-4 py-6 w-full text-center hover:shadow-lg transition-shadow duration-300"
                  >
                    <p className=" font-semibold text-[#0C3D4C] py-3">
                      {item.label}
                    </p>
                    <p className="font-bold text-lg text-[#0C3D4C]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Image */}
            <div className="hidden md:flex justify-center">
              <Image
                src="/loan/per4.png"
                width={400}
                height={400}
                alt="Eligibility section illustration"
                className="object-cover lg:absolute right-30 bottom-0"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <BenefitsSection /> */}
      <LoanOptions />
      <PartnersSection />
      <TestimonialSlider />
      <ContactBanner />
    </>
  );
}

export default page;
