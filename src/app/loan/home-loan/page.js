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
        heading: 'Ab Banaye Apne Sapno Ka Ghar , Bina Kisi Fikar',
        description: 'You dream of buying, building, or renovating a home and we make that dream come true. With low interest rates, long repayment periods, and flexible EMIs.',
        bgImage: '/loan/homebg.png',
        centerImage: '/loan/home.png',
    }

    const aepsData = {
        subheading: 'Mortgage Loan',
        heading: 'Your Dream Home, Now a Reality Home Loans by SevenUnique',
        description: 'At SevenUnique Tech Solutions Private Limited, we bring the reality of homeownership to life. Our home loan solutions are based on simplicity, transparency, and ease of use. We offer rapid approvals, a low documentation burden, and competitive interest rates to make your home purchase process simple and stress-free.',
        features: [
            'If you want to purchase your first home, buy a newly constructed home, or renovate your existing home, SevenUnique has an array of personalized loan plans that align with your financial objectives. We offer flexible repayment and transparent processing for you to easily plan your finances.',
            'Our experienced team will guide you through the entire process from eligibility to documentation to final approval. We are heavily focused on helping you digitally to apply online, track your application through experienced real-time updates, and complete the process fast and with limited environmental impact. With SevenUnique, your dream of home ownership is closer than you think! ',
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
      At Sevenunique, <br />
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
        "Home Loan platform of Visit Sevenunique.",
        "Add the basic information: name, mobile number, Aadhaar, and PAN.",
        "Select location and type of property.",
        "Check the eligible amount of the loan instantly.",
      ],
    },
    {
      step: 2,
      title: "Upload Documents",
      image: "/loan/loan12.png",
      cta: "Submit Docs",
      details: [
        "pancard and Aadhaar card upload.",
        "Provide income documents—salary slips or bank statements.",
        "Present property records and valuation papers.",
        "Our system authenticates documents in a short time to process them fast.",
      ],
    },
    {
      step: 3,
      title: "Receive Your Loan",
      image: "/loan/loan13.png",
      cta: "Get Construction Equipment Loan Now",
      details: [
        "Secure approval within a short time.",
        "Deposit of loan directly to your account.",
        "Money changed in less than 24 hours of authorization.",
        "Set off on the home journey now.",
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
                                className="md:pt-4 pt-16 lg:absolute bottom-20 right-32 md:scale-150 z-20"

                            />
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className={`relativelg:pt-20`} style={{ backgroundColor: "#CEF5F5" }}>
                    <div className="max-w-7xl mx-auto px-4 lg:px-0 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 ">
                            <div className="relative ">
                                <div className="flex space-x-4 md:space-x-6">
                                    {letters.map((char) => (
                                        <LetterCircle key={char} letter={char} />
                                    ))}
                                </div>
                            </div>

                            <div className="hidden md:block  h-[200px] mt-10 md:mt-0 ">
                                <div className=" lg:absolute bottom-0 right-0  w-[42%] lg:h-[500px] z-20">
                                    <Image
                                        src={"/loan/home1.png"}
                                        alt="loan-section"
                                        fill
                                        className="object-cover right-0"
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
                scale= ""
            />
            <BenefitsSection />
                <LoanOptions />
            <PartnersSection />
            <TestimonialSlider />
            <ContactBanner />
        </>
    )
}

export default page
