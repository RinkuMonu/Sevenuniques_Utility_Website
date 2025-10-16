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
    heading: 'Apka Business , Hamara Support',
    description: 'Get the finance you need to expand your business in a safe and fast manner. Get a business loan today and have the flexibility and easy access to capital. ',
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
      At Sevenunique, <br />
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
        "The business loan platform of Visit Sevenunique.",
        "You will need to fill in your basic details: name, mobile number, Aadhaar, and PAN.",
        "Select the type of loan (business loan, working capital, expansion loan, etc.).",
        "Ask to calculate a loan in order to verify your eligibility.",
      ],
    },
    {
      step: 2,
      title: "Upload Documents",
      image: "/loan/loan12.png",
      cta: "Submit Docs",
      details: [
        "Add the required documents: pancard, Aadhaar Card, business financials, and income proof (bank statements or tax returns).",
        "Your documents will be instantly checked by our system, which will then be processed much faster.",
      ],
    },
    {
      step: 3,
      title: "Receive Your Loan",
      image: "/loan/loan13.png",
      cta: "Get Construction Equipment Loan Now",
      details: [
        "Upon the loan approval, the funds of the business loan will be transferred to your business account.",
        "You can get money within a few hours and use it immediately for the business.",
      ],
    },
  ],
};


  const datasteps = {
  heading: (
    <>
      Paise Ka Solution, Turant <br className="hidden sm:block" /> SevenUnique Se
    </>
  ),
  desc: " SevenUnique provides instant loans for all your requirements. It is easy and easygoing to borrow money through our fast, safe, and paperless system. Between application and approval, have experience banking your way",
  loanFeatures: [
    {
      number: 1,
      text: "Get immediate approval and fast disbursement with minimum paperwork.",
    },
    {
      number: 2,
      text: "Hassle-Free and Paperless Process.",
    },
    {
      number: 3,
      text: "Apply online with no paperwork.",
    },
    {
      number: 4,
      text: "Safe and Trusted Platform",
    },
    {
      number: 5,
      text: "Your information and finances are secured at a bank level.",
    },
  ],
};


  return (
    <>
      <ServiceBanner data={data} />

      <section>
        <div className={`relative lg:pt-20`} style={{ backgroundColor: "#FFE9D3" }}>
          <div className="max-w-7xl mx-auto px-4 lg:px-0 ">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div className="relative ">
                <div className="flex space-x-4 md:space-x-6">
                  {letters.map((char) => (
                    <LetterCircle key={char} letter={char} />
                  ))}
                </div>
              </div>

              <div className="block  md:h-[200px] mt-10 md:mt-0 ">
                <div className=" lg:absolute bottom-0 right-0 w-[42%] lg:h-[80vh] z-20  ">
                  <Image
                    src="/loan/loanb1.png"
                    alt="loan-section"
                    fill
                    className="w-64"
                  // style={{ objectPosition: 'right' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <VerticalSlider slide={slide}/>

 <LoanStep data={datasteps}/>
      <StatsBanner />
      <EMICal2 />
      <div className="bg-[#EFF9FF] mb-30">
        <div className=" px-4 lg:px-0 max-w-7xl mx-auto py-20 relative">
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
                className=" absolute bottom-18 scale-135"
              />
            </div>
          </div>
        </div>
      </div>

      <BenefitsSection />
      <LoanOptions />
      <PartnersSection />
      <TestimonialSlider />
      <ContactBanner />
    </>
  )
}

export default page
