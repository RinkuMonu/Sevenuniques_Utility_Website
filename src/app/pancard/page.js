"use client";
import React from "react";
import ServiceBanner from "../../../components/ServiceBanner";
import Image from "next/image";
import OnboardingProcess from "../../../components/OnboardingProcess";
import BenefitsSection2 from "../../../components/BenefitsSection2";
import VerticalTimeline from "../../../components/VerticalTimeline";
import PartnersSection from "../../../components/PartnersSection";
import TestimonialSlider from "../../../components/TestimonialSlider";
import ContactBanner from "../../../components/ContactBanner";
import PancardFeatures from "../../../components/PancardFeatures";
import PancardApplyOnline from "../../../components/PancardApplyOnline";
import PancardAllotment from "../../../components/PancardAllotment";
import PancardAllotment2 from "../../../components/PancardAllotment2";
import PanMoreinfo from "../../../components/PanMoreinfo";
import ReprintOfPANCard from "../../../components/ReprintOfPANCard";
import PanCorrectionCard from "../../../components/PanCorrectionCard";
import DocumentsRequired2 from "../../../components/DocumentsRequired2";



function page() {
  const data = {
    id: 1,
    subheading: "PAN Card",
    heading: "Apki Pehchaan, Apki Power",
    description:
      "Get your PAN Card fast and easily with SevenUnique. Apply your PAN to do your financial transactions, tax filing, and identity verification in just a few steps.",
    bgImage: "/pan/panbg.png",
    centerImage: "/pan/pan1.png",
  };
  const LetterCircle = ({ letter, index }) => (
    <div
      className="flex  items-center justify-center rounded-full  lg:p-1 lg:h-12 lg:w-12"
      key={index}
    >
      <div className="flex h-full w-full items-center justify-center">
        <span className="font-aboreto  md:text-4xl font-medium lg:text-6xl">
          {letter}
        </span>
      </div>
    </div>
  );
const info = [
  {
    title: "Apply now, and get PAN immediately.",
    description:
      "Swipe your PAN Card with SevenUnique. Apply online, send your documents, and receive your acknowledgment within seconds, having a hassle-free experience. Whether you are filling in your personal information or attaching identity and address documents, our hassle-free system makes your application process without a hustle. Monitor your PAN application in real time, update it, and have your PAN delivered to your registered address easily and conveniently.",
    image: "/image/pan-sideimg1.png"
  },
  {
    title: "Your Identity, Your Power.",
    description:
      "This is done easily as you apply your PAN Card with SevenUnique. The entire application process is unfortunately very easy, as you do it online, attach the needed documents, and receive instant recognition. Have a safe and stable verification process. Be sure to enter both your personal and address information; this will help you to be on time with your PAN Card in hand. Keep in touch with real-time application tracking. Get your PAN at your registered address within the shortest time and begin using it to carry out financial transactions and taxes with confidence.",
    image: "/image/panimg-2.png"
  },
];
  const text = "PAN Card";
  return (
    <>
      <ServiceBanner data={data} />
      <section>
        <div
          className={`relative py-5 lg:pb-0 lg:pt-20 overflow-y-visible`}
          style={{ backgroundColor: "#F9EBDF" }}
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-0 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div className="relative ">
                <div className="flex flex-wrap gap-6">
                  {text.split(" ").map((word, wordIndex) => (
                    <div key={wordIndex} className="flex space-x-1 amiri-quran-regular">
                      {word.split("").map((char, index) => (
                        <LetterCircle key={index} letter={char} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden md:block relative h-[200px] mt-10 md:mt-0 ">
                <div
                  className=" lg:absolute bottom-0 right-0 lg:w-[700px] lg:h-[400px] z-20  "
                  style={{ overflow: "hidden" }} >

                  <Image
                    src={"/pan/pan2.png"}
                    alt="loan-section"
                    fill
                    className=" lg:right-0"
                    style={{ objectPosition: "right" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OnboardingProcess />
      <BenefitsSection2 />
      {/* <VerticalTimeline /> */}
        <PancardFeatures />
     <div className="strippps">
  {info.map((item, index) => (
    <div
      key={index}
      className={`flex flex-col lg:flex-row items-center gap-8 max-w-9xl my-10 ${
        index % 2 === 0 ? "" : "lg:flex-row-reverse ms-auto"
      }`}
    >
      {/* Text Content */}
      <div className="bg-[#E6F6FE] rounded-2xl py-3 px-14 lg:p-10 md:pl-16 flex-1">
        <h2 className="text-2xl  font-bold text-[#043C5C] mb-4">
          {item.title}
        </h2>
        <p className="text-gray-600  text-sm leading-relaxed">{item.description}</p>
      </div>

      {/* Image Section */}
      <div className="">

        <img
          src={item.image}
          alt={item.title}
          className="w-1/2 h-auto max-w-md mx-auto object-cover bg-[#E6F6FE] shadow-lg rounded-lg p-4"
        />
      </div>
    </div>
  ))}
</div>
        <PancardApplyOnline />
      <section className="px-10">
        <PancardAllotment />
      </section>
      <section className="p-10">
        <PancardAllotment2 />
      </section>

            <DocumentsRequired2/>
      <ReprintOfPANCard/>
      <section className="py-16">
        <PanCorrectionCard/>
      </section>

   <PartnersSection />

      <TestimonialSlider />

      <ContactBanner />
      <PanMoreinfo />
    </>
  );
}

export default page;
