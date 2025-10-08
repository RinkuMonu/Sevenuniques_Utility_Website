"use client"
import React from 'react'
import ServiceBanner from '../../../components/ServiceBanner';
import Image from 'next/image';
import AboutService from '../../../components/AboutService';
import AboutSlider from '../../../components/AboutSlider';
import AboutArticle from '../../../components/AboutArticle';
import FaqAccordion from '../../../components/FaqAccordion';
import BenefitsSection2 from '../../../components/BenefitsSection2';
import PartnersSection from '../../../components/PartnersSection';
import TestimonialSlider from '../../../components/TestimonialSlider';
import ContactBanner from '../../../components/ContactBanner';
import ServicesSection3 from '../../../components/ServicesSection3';
import BenefitsDiagram from '../../../components/BenefitsDiagram';


function page() {
    const faqData = [
  {
    question: "What services does Sevenunique provide?",
    answer: "We offer BBPS, AePS, bill payments, recharges, insurances, bookings, credit and PAN card services, and various loan solutions, including business, home, personal, construction, and car loans."
  },
  {
    question: "How can I register for a service?",
    answer: "You can register via our website or contact our support team directly for guidance on signing up for any service."
  },
  {
    question: "Is Sevenunique’s payment system secure?",
    answer: "Yes, all transactions are encrypted and processed through secure channels to ensure safety and reliability."
  },
  {
    question: "Can I track my loan application?",
    answer: "Absolutely! Once you apply for a loan, you will receive updates via email or SMS and can also contact our support team for real-time tracking."
  },
  {
    question: "What are the office hours for support?",
    answer: "Our offices are open Monday–Friday, 9:30 AM to 6:30 PM. Saturday and Sunday are closed."
  },

];
    const data = {
        id: 1,
        subheading: 'ABOUT US',
        heading: 'Hamari Pehchaan, Aapka Vishwas',
        description: 'Send money quickly and securely to your loved ones anytime, anywhere. Experience fast, reliable, and hassle-free transfers.',
        bgImage: '/about/aboutbg.png',
        centerImage: '/about/about1.png',
    }
    const LetterCircle = ({ letter, index }) => (
        <div className="flex  items-center justify-center rounded-full  lg:p-1 lg:h-12 lg:w-12" key={index}>
            <div className="flex h-full w-full items-center justify-center">
                <span className=" md:text-4xl font-medium lg:text-6xl text-white">
                    {letter}
                </span>
            </div>
        </div>
    );

       const aepsData = {
        subheading: 'ABOUT',
        heading: 'Sevenunique – Trusted & Reliable',
        description: 'Sevenunique Tech Solution Pvt. Ltd. is dedicated to providing innovative and reliable solutions across India. With a focus on technology-driven growth, we aim to simplify operations and enhance business efficiency for our partners and clients.',
        features: [
            'Founded by Mr. Dinesh Kumar and Mr. Amit Balotiya, Sevenunique has established a strong network of over 120,000 retailers, 2,300 distributors, and 700+ field executives working across various districts. This widespread presence ensures seamless operations and consistent customer satisfaction.',
            'Our mission is to strengthen partnerships, expand reach, and deliver smart solutions that help our clients achieve growth and success. We continually strive to provide services that are efficient, reliable, and tailored to meet evolving business needs.',
        ]
    };
    
    const text = "About us";
    return (
        <>
            <ServiceBanner data={data} />
            <section>
                <div className={`relative py-5 lg:pb-0 lg:pt-20 overflow-y-visible`} style={{ backgroundColor: "#0188D5" }}>
                    <div className="max-w-7xl mx-auto px-4 lg:px-0 ">
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

                            <div className="hidden md:block  h-[200px] mt-10 md:mt-0 ">
                                <div className=" lg:absolute bottom-0 right-0 lg:w-[769px] lg:h-[500px] z-20  " style={{ "overflow": "hidden" }}>
                                    <Image
                                        src={"/about/about2.png"}
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
                 <ServicesSection3 data={aepsData} />
            <AboutService />
            <AboutSlider />
            <AboutArticle/>
            <BenefitsDiagram />
            <FaqAccordion faqData={faqData}/>
             <BenefitsSection2 />
             <div  className='pt-16'>
               <PartnersSection />
               </div>
            <TestimonialSlider />
            <ContactBanner />
        </>
    )
}

export default page
