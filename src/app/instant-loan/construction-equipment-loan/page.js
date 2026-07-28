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
    subheading: 'Construction Loan',
    heading: 'Machine Lo, Kaam Ko Boost Karo!',
    description: 'Excavator ho ya crane, apni machine ka sapna ab ho sakta hai poora. Kam paperwork, fast approval, aur easy registration ab apna kaam turbo speed pe le jao!',
    bgImage: '/loan/constructbg.png',
    centerImage: '/loan/construct2.png',
  }

  const aepsData = {
    subheading: 'Construction EQUIPMENT Loan',
    heading: 'Heavy Kaam, Light Loan!',
    description: 'Our Construction Equipment Loans help you get the heavy machinery you need. We provide financing for excavators, cranes, concrete mixers, and any other equipment to power up your projects and grow your business',
    features: [
      'Choose from flexible repayment plans for both new and used machinery. Enjoy competitive interest rates, fast approvals, and minimal paperwork for a smooth, hassle-free experience.',
      'We understand construction deadlines and ensure quick processing so your equipment is ready when you need it. Our experts guide you to pick the best financing option to perfectly suit your business needs.',
    ]
  };

  const LetterCircle = ({ letter }) => (
    <div className="flex h-20 w-20 items-center justify-center rounded-full  p-1 md:shadow-inner md:h-24 md:w-24">
      <div className="flex h-full w-full items-center justify-center rounded-full md:border-4 border-[#5F12D2]">
        <span className="font-sans text-6xl font-medium text-[#5F12D2] md:text-6xl">
          {letter}
        </span>
      </div>
    </div>
  );

  const infoData = [
    { label: "Nationality", value: "Indian" },
    { label: "Loan Tenure", value: "60 Months" },
    { label: "Work Experience", value: "More than 1 year" },
    { label: "Employment", value: "Self Employed" },
  ]


  const letters = ['L', 'O', 'A', 'N'];
  const slide = {
    image: "/loan/covs.png",
    heading: (
      <>
        Apply Karo Abhi,   <br />
        <span className="text-blue-300">Paisa Milega Turant</span> Account Mein.
      </>
    ),
    sliderData: [
      {
        step: 1,
        title: "Apply Online",
        image: "/loan/loan4.png",
        cta: "Request Calculations",
        details: [
          "Fill in your details like Name, Mobile Number, Aadhaar, and PAN",
          "Choose your equipment such as Excavator, Crane, or other machinery",
          "Select your loan amount and check eligibility instantly",
          "Fast approval with minimal paperwork",
        ],

      },
      {
        step: 2,
        title: "Upload Documents",
        image: "/loan/loan12.png",
        cta: "Submit Docs",
        details: [
          "Upload your PAN and Aadhaar card",
          "Submit business documents like GST and business registration",
          "Provide the equipment quote and supplier details",
          "Our system verifies all documents quickly and securely",
        ],

      },
      {
        step: 3,
        title: "Receive Your Loan",
        image: "/loan/loan13.png",
        cta: "Get Construction Equipment Loan Now",
        details: [
          "Get fast approval with minimal documentation",
          "Loan amount credited directly to your account",
          "Receive funds in under 48 hours",
          "Start purchasing your construction equipment immediately",
        ],

      },
    ],
  };


  return (
    <>
      <div className="relative flex flex-col md:flex-row items-center justify-between pt-10"
      >
        <div
          className="absolute inset-0 bg-cover bg-center hidden md:block"
          style={{ backgroundImage: `url(${data?.bgImage})` }}
        ></div>
        <div className=" z-10 mx-auto">
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

            <div className="w-full  ">

<Image
  src={data.centerImage}
  width={350}
  height={350}
  alt="center image"
  className="
    w-[220px]
    sm:w-[260px]
    md:w-[300px]
    lg:w-[340px]
    h-auto
    object-contain
    mx-auto
    md:mx-0
  "
/>

            </div>
          </div>
        </div>
      </div>
      {/* <section>
        <div className={`relative py-10`} style={{ backgroundColor: "#F2E6FF" }}>
          <div className="max-w-7xl mx-auto px-4 lg:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex space-x-4 md:space-x-6">
                {letters.map((char) => (
                  <LetterCircle key={char} letter={char} />
                ))}
              </div>

              <div className="hidden md:block absolute bottom-0 right-6 z-10">
                <Image
                  src={"/loan/construct2.png"}
                  alt="loan-section"
                  width={350}
                  height={350}
                  className="w-[220px] md:w-[280px] lg:w-[320px] h-auto object-contain"
                  priority
                />
              </div>

            </div>
          </div>
        </div>
      </section> */}

      <VerticalSlider slide={slide} />


      <ServicesSection3 data={aepsData} />
      <EMICal2 />
      <StatsBanner />
      <LoanBenefits
        title="Our Construction Equipment Loan is designed to help your business move forward."
        description="Finance the heavy machinery you need: excavators, backhoes, cranes, and more so you can complete projects efficiently and accelerate your business growth."
        image="/loan/construct4.png"
        benefits={[
          "Rapid approvals with minimal documentation",
          "Flexible repayment options that suit your project cash flow",
          "Finance for both new and used machinery",
          "Competitive interest rates you can trust",
          "No extra charges, fully transparent",
          "Fast processing for urgent equipment needs",
          "Tailored loan options for every project",
          "Pan-India support for all your sites",
        ]}

      />


      {/* <div className='pt-10 pb-30'>
        <BenefitsSection />
      </div> */}

      <div className="bg-[#EFF9FF] mb-10 relative">
        <div className=" px-4 lg:px-0 max-w-6xl mx-auto py-10 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-4xl font-bold text-[#0C3D4C] max-w-lg">
                Eligibility Check, Loan Approve Quick
              </h3>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {infoData.map((item, index) => (
                  <div key={index} className="rounded-lg border border-[#0063A2] px-4 py-6 w-full text-center hover:shadow-lg transition-shadow duration-300">
                    <p className="font-semibold text-[#0C3D4C] py-3">{item.label}</p>
                    <p className="font-bold text-lg text-[#0C3D4C]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <Image
                src="/loan/construct3.png"
                width={400}
                height={400}
                alt="Eligibility section illustration"
                className="absolute bottom-0 right-0"
              />
            </div>
          </div>
        </div>
      </div>


      <DocumentsRequired />
      <LoanOptions />
      <PartnersSection />
      <TestimonialSlider />
      <ContactBanner />
    </>
  )
}

export default page
