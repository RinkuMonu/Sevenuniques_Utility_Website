import React from 'react'
import Image from 'next/image'
import ServiceBanner from '../../../../components/ServiceBanner';
import LoanStep from '../../../../components/LoanStep';
import StatsBanner from '../../../../components/StatsBanner';
import BenefitsSection from '../../../../components/BenefitsSection';
import PartnersSection from '../../../../components/PartnersSection';
import VerticalSlider from '../../../../components/VerticalSlider';
import EMICal2 from '../../../../components/EMICal2';
import Eligibility from '../../../../components/Eligibility';
import LoanOptions from '../../../../components/LoanOptions';
import TestimonialSlider from '../../../../components/TestimonialSlider';
import ContactBanner from '../../../../components/ContactBanner';



function page() {
  const data = {
    id: 1,
    subheading: 'BUSINESS LOAN',
    heading: 'Apka Kaam, Hamara Saath',
    description: 'Get fast and reliable financing to expand your business. Enjoy flexibility and hassle-free access to funds with our business loans. ',
    bgImage: '/loan/loanbbg.png',

  }

  const LetterCircle = ({ letter }) => (
    <div className="flex h-20 w-20 items-center justify-center rounded-full  p-1 lg:shadow-inner md:h-24 md:w-24">
      <div className="flex h-full w-full items-center justify-center rounded-full lg:border-4 border-[#9D734A]">
        <span className="font-sans text-6xl font-medium text-[#9D734A] md:text-6xl">
          {letter}
        </span>
      </div>
    </div>
  );

  const letters = ['L', 'O', 'A', 'N'];

  const infoData = [
    { label: "Nationality", value: "Indian" },
    { label: "Loan Tenure", value: "60 Months" },
    { label: "Work Experience", value: "More than 1 year" },
    { label: "Employment", value: "Self Employed" },
  ]
  const slide = {
    image: "/loan/bvs.png",
    heading: (
      <>
        At Finunique, <br />
        how to secure  <br />
        a <span className="text-blue-300">business</span> loan.
      </>
    ),
    sliderData: [
      {
        step: 1,
        title: "Apply Online",
        image: "/loan/loan4.png",
        cta: "Request Calculations",
        details: [
          "Start your business loan application with Finunique. Fill in your basic details like name, mobile number, Aadhaar, and PAN.",
          "Select the type of loan you need, such as a business loan, working capital, or expansion loan.",
          "Use the eligibility calculator to check your loan options instantly",
        ],
      },
      {
        step: 2,
        title: "Upload Documents",
        image: "/loan/loan12.png",
        cta: "Submit Docs",
        details: [
          "Submit your PAN, Aadhaar, business financials, and income proof.",
          "Documents are quickly verified to speed up your loan approval.",
        ],
      },
      {
        step: 3,
        title: "Receive Your Loan",
        image: "/loan/loan13.png",
        cta: "Get Construction Equipment Loan Now",
        details: [
          "Once your loan is approved, the funds will be transferred directly to your business account.",
          "You can access the money within a few hours and use it immediately to grow or manage your business.",
        ],
      },
    ],
  };


  const datasteps = {
    heading: (
      <>
        Funds Ho Quick,<br className="hidden sm:block" />  Growth Ho Thick
      </>
    ),
    desc: "Get instant business loans with Finunique. Our fast, safe, and paperless process makes borrowing easy and hassle-free. Experience seamless funding from application to approval, and access your money when you need it most.",
    loanFeatures: [
      {
        number: 1,
        text: "Get quick approval and instant fund transfer with minimal documentation.",
      },
      {
        number: 2,
        text: "Enjoy a completely hassle-free and paperless loan process.",
      },
      {
        number: 3,
        text: "Apply online easily with no physical paperwork required",
      },
      {
        number: 4,
        text: "A safe and trusted platform for all your business loan needs.",
      },
      {
        number: 5,
        text: "Your personal and financial information is secured at the highest banking standards.",
      },
    ],
  };


  return (
    <>
      <ServiceBanner data={data} />

      <section>
        <div className={`relative lg:pt-20`} style={{ backgroundColor: "#FFE9D3" }}>
          <div className="max-w-6xl mx-auto px-4 lg:px-0 ">
            <div className="grid grid-cols-1 md:grid-cols-2">

              <div className="flex space-x-4 md:space-x-6 md:mb-16">
                {letters.map((char) => (
                  <LetterCircle key={char} letter={char} />
                ))}
              </div>


              <div className="hidden md:block md:absolute bottom-10 right-50 mt-10 md:mt-0 ">

                <Image
                  src="/loan/loanb1.png"
                  alt="loan-section"
                  width={500}
                  height={300}
                  className="lg:h-[500px] w-auto"
                />

              </div>
            </div>
          </div>
        </div>
      </section>



      <VerticalSlider slide={slide} />

      <LoanStep data={datasteps} />
      <StatsBanner />
      <EMICal2 />
      <div className="bg-[#EFF9FF] mb-30">
        <div className=" px-4 lg:px-0 max-w-6xl mx-auto py-20 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-4xl font-bold text-[#0C3D4C] max-w-lg">
                Eligibility Check, Loan Approve Quick
              </h3>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {infoData.map((item, index) => (
                  <div key={index} className="rounded-lg border border-[#0063A2] px-4 py-6 w-full text-center hover:shadow-lg transition-shadow duration-300">
                    <p className=" font-semibold text-[#0C3D4C] py-3">{item.label}</p>
                    <p className="font-bold text-lg text-[#0C3D4C]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Image */}
            <div className="hidden md:flex justify-center">
              <Image
                src="/loan/loanb3.png"
                width={400}
                height={400}
                alt="Eligibility section illustration"
                className=" absolute bottom-18 xl:scale-135"
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
  )
}

export default page
