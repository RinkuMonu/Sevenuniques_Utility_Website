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
        heading: 'Machine Lo, Kaam Badhao. Construction Loan Se!',
        description: 'Excavator ho ya crane, apni machine khareedne ka sapna ab ho sakta hai poora. Kam paperwork, fast processing. Register Now!',
        bgImage: '/loan/constructbg.png',
        centerImage: '/loan/construct1.png',
    }

    const aepsData = {
        subheading: 'Construction EQUIPMENT Loan',
        heading: 'Strong Partner Apke Project Ka',
        description: 'Our Construction Equipment Loans can help you get the heavy machinery you require. We lend out excavators, cranes, concrete mixers, and any other equipment needed to energize your projects and expand your business.',
        features: [
            'Our customized repayment plans include both new and used machinery, which is financed flexibly. Get the benefit of competitive interest rates, fast approvals, and very few documents to fill in to have a hassle-free experience.',
            'We know construction deadlines and provide expedited processing to have equipment when you need it. Our professionals will guide you to select the most suitable financing option that will fulfill your business requirements.',
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
        "Construction Equipment Loan by Visit Sevenunique.",
        "Fill in personal information: Name, Mobile Number, Aadhaar, PAN",
        "Select the type of equipment and the amount of the loan",
        "Check the eligible loan amount on the fly.",
      ],
    },
    {
      step: 2,
      title: "Upload Documents",
      image: "/loan/loan12.png",
      cta: "Submit Docs",
      details: [
        "Add pancard and Aadhaar Card.",
        "Provide business documents—GST and business registration",
        "Give equipment quote and supplier information.",
        "Our system authenticates documents in a short time",
      ],
    },
    {
      step: 3,
      title: "Receive Your Loan",
      image: "/loan/loan13.png",
      cta: "Get Construction Equipment Loan Now",
      details: [
        "Get rapid approval with few documents.",
        "Direct deposit of the loan to your account.",
        "Money sent out in less than 48 hours",
        "Buy your building materials now.",
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
                                    href="https://utility.sevenuniques.in/register"
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
                                height={500}
                                width={500}
                                alt="center image"
                                className="md:pt-4 hidden md:block pt-16 lg:absolute bottom-10 right-32 lgscale-150 z-20"

                            />
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className={`relative lg:pt-20 overflow-visible`} style={{ backgroundColor: "#F2E6FF" }}>
                    <div className="max-w-7xl mx-auto px-4 lg:px-0 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 ">
                            <div className=" ">
                                <div className="flex space-x-4 md:space-x-6">
                                    {letters.map((char) => (
                                        <LetterCircle key={char} letter={char} />
                                    ))}
                                </div>
                            </div>

                            <div className="hidden md:block  h-[200px] mt-10 md:mt-0 ">
                                <div className=" lg:absolute bottom-0 right-10  lg:w-[500px] lg:h-[680px] z-20  ">
                                    <Image
                                        src={"/loan/construct2.png"}
                                        alt="loan-section"
                                        fill
                                        style={{ objectPosition: 'right' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <VerticalSlider slide={slide}/>


            <ServicesSection3 data={aepsData} />
            <EMICal2 />
            <StatsBanner />
            <LoanBenefits
                title="Get a machine, and get to work! This construction loan is the new way forward."
                description="Finance the heavy machinery your business needs to succeed. We can finance all the equipment you need – be it excavators, backhoes, or cranes—enabling you to efficiently carry out projects and grow your business faster. "
                image="/loan/construct4.png"
                benefits={[
                    "Rapid approvals with less paperwork.",
                    "Flexible repayment terms according to the project cash flow.",
                    "There are loans for new and used equipment",
                    "Appealing and competitive interest rates",
                    "No additional fees, all open.",
                    "Why should we use our equipment loans?",
                    "Quick processing of urgent needs.",
                    "Individualized financing options",
                    "Pan-India service coverage",
                    "No hidden charges, fully transparent.",
                ]}
            />


           <div className='pt-10 pb-30'>
             <BenefitsSection />
           </div>


  <div className="bg-[#EFF9FF] mb-10 relative">
        <div className=" px-4 lg:px-0 max-w-7xl mx-auto py-10 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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

            <div className="hidden lg:flex justify-center">
              <Image
                src="/loan/construct3.png"
                width={400}
                height={400}
                alt="Eligibility section illustration"
                className=" absolute bottom-0 right-0 "
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
