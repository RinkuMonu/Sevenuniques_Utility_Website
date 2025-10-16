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
        heading: 'Apni Car Ka Sapna, Ab Aasaan',
        description: 'Our car loans are easy and affordable, and get you the car of your dreams. It could be a new car or an old car; we have a quick approval with low interest and repayment terms that are flexible to make your dream car come true. ',
        bgImage: '/loan/carbg.png',
        centerImage: '/loan/car1.png',
    }

    const aepsData = {
        subheading: 'CAR LOAN',
        heading: 'Owned Car Loan',
        description: 'Our owned car loans will get you the best deal on your next used car. We provide low-cost financing solutions on certified and non-certified used vehicles, with fast approvals and a flexible repayment schedule. ',
        features: [
            'We have loans that will allow you to purchase quality used cars without overworking your budget. Low interest rates, minimal paperwork, and quick processing will get you to drive home with the perfect car.',
            'We fund cars of every model and make and loan tenures that fit your budget. We have a clear and transparent process and no surprises ',
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
        "Sevenunique car loan sites.",
        "Fill in some basic information: Name, mobile number, Aadhaar, and PAN.",
        "Enter car model and loan.",
        "Determine the amount of a check-eligible loan immediately.",
      ],
    },
    {
      step: 2,
      title: "Upload Documents",
      image: "/loan/loan12.png",
      cta: "Submit Docs",
      details: [
        "Upload the pancard and Aadhaar Card.",
        "Provide evidence of income—bank statements or salary slips.",
        "Present address proving papers.",
        "Our system checks documents in a matter of seconds.",
      ],
    },
    {
      step: 3,
      title: "Receive Your Loan",
      image: "/loan/loan13.png",
      cta: "Get Construction Equipment Loan Now",
      details: [
        "Get immediate approval with the least paperwork",
        "Credit the loan into your account.",
        "Money is transferred in less than 24 hours.",
        "Get home to your dream car.",
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
                                className="md:pt-4 pt-16 lg:absolute bottom-5 right-32 scale-150 z-20"

                            />
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className={`relative lg:pt-20 overflow-visible`} style={{ backgroundColor: "#FFD7D6" }}>
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
                                <div className=" lg:absolute bottom-0  w-[42%] lg:h-[550px] z-20 ">
                                    <Image
                                        src={"/loan/car2.png"}
                                        alt="loan-section"
                                        fill
                                        className=""
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
  title="Easy Loans to Drive Your Dream Car."
  description="Drive your dream car with our low-cost and easy car loans. We provide prompt approvals, low interest rates, and easy repayment plans on new and used cars.
"
  image="/loan/car3.png"
  benefits={[
    "Fast application with limited documentation.",
    "Customize EMI according to your budget.",
    "New and used car loans",
    "Attractive and competitive interest rates.",
    "No sneaky fees, no strings attached.",
    " No prepayment penalties—even if a variable loan is more worth it than a fixed loan, you can pay it off without incurring any fees.",
    " Insurance assistance—you can ask us about potential car insurance options for you.",
    "Manage your loan online—access your loan anytime and from anywhere",
    "A vast dealer network—choose from our approved dealers.",
    "Get Your Loan Immediately—funds available near instantly.",
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
            <BenefitsSection />
                <LoanOptions />
            <PartnersSection />
            <TestimonialSlider />
            <ContactBanner />
        </>
    )
}

export default page
