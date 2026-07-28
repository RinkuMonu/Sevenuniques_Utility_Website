import React from 'react'
import VerticalSlider from '../../../../components/VerticalSlider';
import Eligibility from '../../../../components/Eligibility';
import ServicesSection3 from '../../../../components/ServicesSection3';
import StatsBanner from '../../../../components/StatsBanner';
import EMICal2 from '../../../../components/EMICal2';
import BenefitsSection from '../../../../components/BenefitsSection';
import PartnersSection from '../../../../components/PartnersSection';
import TestimonialSlider from '../../../../components/TestimonialSlider';
import ContactBanner from '../../../../components/ContactBanner';
import Image from 'next/image';
import Link from 'next/link';
import LoanBenefits from '../../../../components/LoanBenefits';
import LoanOptions from '../../../../components/LoanOptions';
import DocumentsRequired from '../../../../components/DocumentsRequired';




function page() {
  const data = {
    id: 1,
    subheading: 'Mortgage LOAN',
    heading: 'Ghar Ka Sapna, EMI se Hoga Apna',
    description: 'Make your dream home a reality with low interest rates, flexible EMIs, and easy repayment plans.',
    bgImage: '/loan/homebg.png',
    centerImage: '/loan/home1.png',
  }

  const aepsData = {
    subheading: 'Mortgage Loan',
    heading: 'From Dream to Doorstep, with Finunique',
    description: 'At Finunique Small Private Limited, we make home loans simple, transparent, and stress-free. Our mortgage loan solutions offer quick approvals, minimal documentation, and competitive interest rates to help you buy your home with confidence.',
    features: [
      'Whether you are purchasing your first home, buying a new property, or renovating your existing house, Finunique provides customized loan options to match your financial goals. With flexible repayment plans and a clear process, managing your home loan becomes easy.',
      'Our expert team supports you at every step from checking eligibility to final disbursement. Apply online, track your application in real time, and complete the process digitally with ease. With Finunique, owning your dream home is just a few steps away. ',
    ]
  };

  const LetterCircle = ({ letter }) => (
    <div className="flex h-20 w-20 items-center justify-center rounded-full  p-1 md:shadow-inner md:h-24 md:w-24">
      <div className="flex h-full w-full items-center justify-center rounded-full md:border-4 border-[#2F8486]">
        <span className="font-sans text-6xl font-medium text-[#2F8486] md:text-6xl">
          {letter}
        </span>
      </div>
    </div>
  );

  const letters = ['L', 'O', 'A', 'N'];
  const slide = {
    image: "/loan/hvs.png",
    heading: (
      <>
        At Finunique, <br />
        how to secure  <br />
        a <span className="text-blue-300">Home</span> loan.
      </>
    ),
    sliderData: [
      {
        step: 1,
        title: "Apply Online",
        image: "/loan/loan4.png",
        cta: "Request Calculations",
        details: [
          "Visit Finunique for a fast and simple home loan process.",
          "Enter basic details to start your application.",
          "Choose your property details in seconds.",
          "Know your loan eligibility instantly.",
        ],
      },
      {
        step: 2,
        title: "Upload Documents",
        image: "/loan/loan12.png",
        cta: "Submit Docs",
        details: [
          "Upload your PAN card and Aadhaar easily",
          "Submit income proof such as salary slips or bank statements.",
          "Add property documents and valuation details.",
          "Our system verifies documents quickly for faster processing.",
        ],
      },
      {
        step: 3,
        title: "Receive Your Loan",
        image: "/loan/loan13.png",
        cta: "Get Construction Equipment Loan Now",
        details: [
          "Get quick approval with minimal wait time.",
          "Loan amount credited directly to your bank account.",
          "Funds disbursed within 24 hours of approval.",
          "Start your homeownership journey today.",
        ],
      },
    ],
  };


  return (
    <>
      <div className="relative flex flex-col md:flex-row items-center justify-between pt-10 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center hidden md:block"
          style={{ backgroundImage: `url(${data?.bgImage})` }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className='grid grid-cols-1 md:grid-cols-2 w-full space-y-6 md:space-y-0 items-center'>

            <div className=" px-10 py-10 lg:py-16 rounded-2xl overflow-hidden max-w-2xl w-full">
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
                  href="/signup"
                  className="relative inline-block rounded-full border border-[#0C3D4C] p-[2px]"
                >
                  <span className="block px-8 py-3 bg-[#0C3D4C] text-white font-semibold rounded-full transition-all duration-300 ease-in-out hover:bg-transparent hover:text-[#0d2f4d]">
                    Register now
                  </span>
                </Link>

              </div>
            </div>

            <div className="w-full h-100">

<Image
  src={data.centerImage}
  width={450}
  height={450}
  alt="center image"
  className="
    mt-6 md:mt-5
    w-full
    max-w-[300px]
    md:max-w-[340px]
    h-auto
    object-contain
    mx-auto
    md:ml-6
    lg:ml-15
  "
/>        
            </div>
          </div>
        </div>
      </div>
      {/* <section>
        <div className={`relative lg:py-16`} style={{ backgroundColor: "#CEF5F5" }}>
          <div className="max-w-7xl mx-auto px-4 lg:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div className="flex space-x-4 md:space-x-6">
                {letters.map((char) => (
                  <LetterCircle key={char} letter={char} />
                ))}
              </div>

              <div className="hidden md:block absolute bottom-0 right-6 z-10">
                <Image
                  src={"/loan/home1.png"}
                  alt="loan-section"
                  width={380}
                  height={380}
                  className="w-[280px] lg:w-[350px] h-auto object-contain"
                  priority
                />
              </div>

            </div>
          </div>
        </div>
      </section> */}

      <ServicesSection3 data={aepsData} />


      <VerticalSlider slide={slide} />


      <StatsBanner />
      <LoanBenefits
        title="Home Loan Apna Sapna Ghar Ka"
        description="Our easy home loans will get you the dream house. We provide fast application and low interest rates and payment options to all."
        image="/loan/home2.png"
        benefits={[
          "Fast processing and little paperwork.",
          "Payment of EMI as per your budget.",
          "There are loans offered on new and old properties.",
          "Competitive and low rates of interest.",
          "No surcharges, just an absolutely transparent procedure.",
          "Online application—a 10-minute online application.",
          "Balance transfer—transfer your current loan easily.",
          "Top-up loan Take additional finances as required.",
          "Long tenure pay comfortably up to 30 years.",
          "Professional assistance special manager.",
        ]}
      />

      <EMICal2 />
      <DocumentsRequired />
      <Eligibility
        title="Check Your Loan Eligibility Instantly"
        infoData={[
          { label: "Nationality", value: "Indian" },
          { label: "Loan Tenure", value: "Up to 60 Months" },
          { label: "Work Experience", value: "Over 1 year." },
          { label: "Employment", value: "Salaried or Self-Employed." },
        ]}
        image="/loan/home4.png"
        scale=""
      />
      {/* <BenefitsSection /> */}
      <LoanOptions />
      <PartnersSection />
      <TestimonialSlider />
      <ContactBanner />
    </>
  )
}

export default page
