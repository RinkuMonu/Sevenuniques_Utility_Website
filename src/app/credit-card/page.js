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
        heading: 'Swipe Karein, Rewards Paayein!',
        description: 'Unlock a world of rewards every time you swipe. Earn points, enjoy cashback, and access exclusive lifestyle perks tailored just for you. Spend smart, live better, and make every transaction count',
        bgImage: '/credit/creditbg.png',
        centerImage: '/credit/credit2.png',
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
        { title: "Fast Application, Quick Approval.", description: "Apply for your credit card in just a few minutes online or at a branch. Submit basic details, upload documents, and get approved quickly to enjoy instant benefits. " },
        { title: "Rewards, Cashback & Lifestyle Privileges", description: "Earn rewards and cashback on every swipe while enjoying exclusive offers on dining, shopping, travel, and more. Unlock premium lifestyle benefits such as lounge access, partner discounts, and curated experiences." },
        { title: "Flexible Payments with 24/7 Support ", description: "Enjoy secure online and offline payments with the freedom to convert purchases into easy EMIs. Manage your credit limit effortlessly and rely on round-the-clock support whenever you need assistance. " },

    ]
    const text = "CREDIT CARD";


    return (
        <>
            <ServiceBanner data={data} />
            {/* <section>
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
                                <div className=" lg:absolute bottom-0 right-0 lg:w-[400px] lg:h-[500px] z-20  " style={{ "overflow": "hidden" }}>
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
            </section> */}
            <CreditComp />
            {/* <BankLogoGrid /> */}
            <CreditSlider />


            <div className="max-w-7xl mx-auto px-4 py-12 mb-8">
                <h3 className='text-3xl md:text-4xl py-12 text-center font-bold text-[#043C5C]'>Features of Credit Card</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {info.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#E6F6FE]"
                        >
                            {/* Optional top accent */}
                            <div className="w-12 h-1 bg-[#026381] rounded-full mb-4"></div>

                            <h2 className="text-xl md:text-2xl font-bold text-[#043C5C] mb-3 group-hover:text-[#026381] transition">
                                {item.title}
                            </h2>

                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className='mt-20 pb-10 lg:pb-40'>
                <BenefitsSection2 />
            </div> */}
            <CardGrid />

            {/* <CreditChoice /> */}




            {/* <PartnersSection />
            <TestimonialSlider />
            <ContactBanner /> */}
        </>
    )
}

export default page
