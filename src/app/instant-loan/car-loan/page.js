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




function page() {
  const data = {
    id: 1,
    subheading: 'CAR LOAN',
    heading: 'Car Ka Plan, Ab krein Done!',
    description: 'Get your dream car with ease! Whether it’s brand new or pre-owned, our car loans offer quick approvals, low interest rates, and flexible repayment options designed to fit your budget. Fast, simple, and tailored just for you. ',
    bgImage: '/loan/carbg.png',
    centerImage: '/loan/car1.png',
  }

  const aepsData = {
    subheading: 'CAR LOAN',
    heading: 'Own Your Dream Car with Ease',
    description: 'Our car loans make buying your next vehicle simple and affordable. We offer financing solutions for both certified and non-certified used cars, with quick approvals and flexible repayment options.',
    features: [
      'Purchase quality cars without stretching your budget. Enjoy low interest rates, minimal paperwork, and fast processing so you can drive home your perfect car sooner',
      'We provide loans for all car makes and models, with tenures tailored to your budget. Our process is transparent, with no hidden charges or surprises. ',
    ]
  };

  const LetterCircle = ({ letter }) => (
    <div className="flex h-20 w-20 items-center justify-center rounded-full  p-1 md:shadow-inner md:h-24 md:w-24">
      <div className="flex h-full w-full items-center justify-center rounded-full md:border-4 border-[#9F0201]">
        <span className="font-sans text-6xl font-medium text-[#9F0201] md:text-6xl">
          {letter}
        </span>
      </div>
    </div>
  );

  const letters = ['L', 'O', 'A', 'N'];
  const slide = {
    image: "/loan/cvs.png",
    heading: (
      <>
        Apply Karo Abhi,

        <br />Paisa Milega
        <br />
        <span className="text-blue-300">Turant Account Mein</span>
      </>
    ),
    sliderData: [
  {
    step: 1,
    title: "Apply Online",
    image: "/loan/loan4.png",
    cta: "Request Calculations",
    details: [
      "Fill in your basic details such as Name, Mobile Number, Aadhaar, and PAN",
      "Select your desired car model and loan amount",
      "Get instant confirmation of your eligible loan amount",
    ],
  },
  {
    step: 2,
    title: "Upload Documents",
    image: "/loan/loan12.png",
    cta: "Submit Docs",
    details: [
      "Upload your PAN Card and Aadhaar Card",
      "Submit proof of income such as bank statements or salary slips",
      "Provide address verification documents",
      "Our system reviews all documents instantly for fast processing",
    ],
  },
  {
    step: 3,
    title: "Receive Your Loan",
    image: "/loan/loan13.png",
    cta: "Get Car Loan Now",
    details: [
      "Get quick approval with minimal paperwork",
      "The loan amount is credited directly to your account",
      "Funds are transferred in less than 24 hours",
      "Drive home your dream car without any delay",
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
                  href="https://utility.Finuniques.in/register"
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
                height={500}
                width={500}
                alt="center image"
                className="xs:pt-16 md:pt-4  lg:absolute bottom-20 right-32 lg:scale-150 z-20"

              />
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className={`relative lg:py-16 overflow-visible`} style={{ backgroundColor: "#FFD7D6" }}>
          <div className="max-w-7xl mx-auto px-4 lg:px-0 ">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div className="flex space-x-4 md:space-x-6">
                {letters.map((char) => (
                  <LetterCircle key={char} letter={char} />
                ))}
              </div>



              <div className="hidden md:block md:absolute bottom-0 right-0  z-11">
                <Image
                  src={"/loan/car2.png"}
                  alt="loan-section"
                  width={400}
                  height={300}

                />
              </div>

            </div>
          </div>
        </div>
      </section>
      <VerticalSlider slide={slide} />

      <ServicesSection3 data={aepsData} />
      <StatsBanner />
      <LoanBenefits
        title="Drive Your Dream, Pay with Ease"
        description="Turn your car dreams into reality with fast approvals, low interest rates, and hassle-free repayment plans on new and used cars.
"
        image="/loan/car3.png"
       benefits={[
  "Quick application with minimal documentation",
  "Flexible EMI options tailored to your budget",
  "Loans for new and used cars",
  "Competitive interest rates for affordable financing",
  "Transparent process with no hidden charges",
  "Repay early without extra fees",
  "Guidance on suitable car insurance options",
  "Access and track your loan anytime, anywhere",
  "Choose from our approved car dealers",
  "Receive your loan quickly and drive home your car",
]}

      />

      <EMICal2 />
      <Eligibility
        title="Check Your Loan Eligibility Instantly"
        infoData={[
          { label: "Nationality", value: "Indian" },
          { label: "Loan Tenure", value: "60 Months" },
          { label: "Work Experience", value: "More than 1 year" },
          { label: "Employment", value: "Self Employed" },
        ]}
        image="/loan/car4.png"
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
