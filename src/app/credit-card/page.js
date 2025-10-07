"use client"
import React from 'react'
import ServiceBanner from '../../../components/ServiceBanner'
import Image from 'next/image';
import BankLogoGrid from '../../../components/BankLogoGrid';
import CreditSlider from '../../../components/CreditSlider';
import BenefitsSection2 from '../../../components/BenefitsSection2';
import CardGrid from '../../../components/CardGrid';
import CreditComp from '../../../components/CreditComp';
import CreditChoice from '../../../components/CreditChoice';
import PartnersSection from '../../../components/PartnersSection';
import TestimonialSlider from '../../../components/TestimonialSlider';
import ContactBanner from '../../../components/ContactBanner';

function page() {
    const data = {
        id: 1,
        subheading: 'Credit Card',
        heading: 'Har Swipe Pe Extra Benefits',
        description: 'Quickly transfer funds to your loved ones anytime, anywhere with our secure and reliable Domestic Money Transfer service.',
        bgImage: '/credit/creditbg.png',
        centerImage: '/credit/credit1.png',
    }
    const LetterCircle = ({ letter, index }) => (
        <div className="flex  items-center justify-center rounded-full  lg:p-1 lg:h-12 lg:w-12" key={index}>
            <div className="flex h-full w-full items-center justify-center">
                <span className="font-aboreto  md:text-4xl font-medium lg:text-6xl">
                    {letter}
                </span>
            </div>
        </div>
    );
    const info = [
        { title: "Safe Aur Quick Mobile Recharge", description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos..." },
        { title: "Safe Aur Quick Mobile Recharge", description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos..." },
    ]
    const text = "CREDIT CARD";

    const creditdata ={
  heading :" Simple Steps, Instant Approval" , 
   stepsData : [
  {
    step: 1,
    title: 'Fill Application Form',
    description: 'Start by filling out the credit card application online through the bank\'s website/app or offline at the branch. Provide your basic details such as name, mobile number, email ID, and occupation.',
    image: '/credit/credits1.png',
  },
  {
    step: 2,
    title: 'Submit Documents',
    intro: 'Attach/upload the necessary documents for verification:',
    details: [
      '<strong>Identity Proof</strong> &ndash; Aadhaar, PAN, Passport, or Voter ID',
      '<strong>Address Proof</strong> &ndash; Utility Bill, Driving License, Rent Agreement',
      '<strong>Income Proof</strong> &ndash; Salary Slip, ITR, or Bank Statement',
    ],
    image: '/credit/credits2.png',
  },
  {
    step: 3,
    title: 'Get Approval',
    description: 'Once your documents are verified, the bank will review your application. If everything is in order, you will receive an approval notification, and your new credit card will be dispatched.',
    image: '/credit/credits3.png',
  },
]
}
    return (
        <>
            <ServiceBanner data={data} />
            <section>
                <div className={`relative py-5 lg:pb-0 lg:pt-20 overflow-y-visible`} style={{ backgroundColor: "#CEF5F5" }}>
                    <div className="max-w-7xl mx-auto px-4 lg:px-0 relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 ">
                            <div className="relative ">
                                <div className="flex flex-wrap gap-6">
                                    {text.split(" ").map((word, wordIndex) => (
                                        <div key={wordIndex} className="flex space-x-1">
                                            {word.split("").map((char, index) => (
                                                <LetterCircle key={index} letter={char} />
                                            ))}
                                        </div>
                                    ))}
                                </div>

                            </div>

                            <div className="hidden md:block relative h-[200px] mt-10 md:mt-0 ">
                                <div className=" lg:absolute bottom-0 right-0 lg:w-[500px] lg:h-[600px] z-20  " style={{ "overflow": "hidden" }}>
                                    <Image
                                        src={"/credit/credit2.png"}
                                        alt="loan-section"
                                        fill
                                        className=" lg:right-0"
                                        style={{ objectPosition: 'right' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BankLogoGrid />
            <CreditSlider  />
            <div className='mt-20 pb-10 lg:pb-40'>
                <BenefitsSection2 />
            </div>
            <CardGrid />
            <CreditComp />
            <CreditChoice />

            <div>
                {info.map((item, index) => (
                    <div key={index} className={`bg-[#E6F6FE] rounded-2xl p-5 lg:p-16 max-w-6xl my-10 ${index % 2 === 0 ? "" : "ms-auto"}`}>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#043C5C] mb-4">{item.title}</h2>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                ))}
            </div>

            <PartnersSection />
            <TestimonialSlider />
            <ContactBanner />
        </>
    )
}

export default page
