"use client"
import React from 'react'
import ServiceBanner from '../../../components/ServiceBanner'
import Image from 'next/image';
import PartnersSection from '../../../components/PartnersSection';
import TestimonialSlider from '../../../components/TestimonialSlider';
import ContactBanner from '../../../components/ContactBanner';
import BlogC from '../../../components/BlogC';
import ServicesSection3 from '../../../components/ServicesSection3';
import FAQ from '../../../components/Bike Insurance/FAQ';

function page() {
    const data = {
        id: 1,
        subheading: 'Blog',
        heading: 'Jaankaari jo banaye, Aapko Smart',
        description: 'Quickly transfer funds to your loved ones anytime, anywhere with our secure and reliable service.',
        bgImage: '/blog/blogbg.png',
          centerImage: '/blog/blog2.png',
    }
    const LetterCircle = ({ letter, index }) => (
        <div className="flex  items-center justify-center rounded-full  lg:p-1 lg:h-12 lg:w-12" key={index}>
            <div className="flex h-full w-full items-center justify-center">
                <span className="allerta-stencil-regular md:text-4xl font-medium lg:text-8xl text-white">
                    {letter}
                </span>
            </div>
        </div>
    ); 
    const aepsData = {
        subheading: 'BLOG',
        heading: 'Ideas Ki Duniya, Blog Pe Sabka Saath',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et  ducimus odio dignissimos At vero eos et accusamus et ',
        features: [
            'At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ',
            'At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ',
        ]
    };

    const faqData = [
    {
      question: "What is BBPS?",
      answer: "BBPS is a secure bill payment system by NPCI that lets you pay all types of bills through banks, apps, and agent outlets.",
    },
    {
      question: "How do I know if my biller is available?",
      answer: "Supported billers appear in the list while selecting a biller. Most utilities, telecom, DTH, broadband, and loan billers are already covered.",
    },
    {
      question: "Is paying bills online safe?",
      answer: "Yes. BBPS uses NPCI-backed secure systems and provides instant digital receipts for every payment.",
    },
    {
      question: "What if my payment fails?",
      answer: "You’ll see the payment status instantly. If needed, refunds or reversals are processed as per BBPS guidelines.",
    },
    {
      question: "How do I get a receipt?",
      answer: "A digital receipt with a unique transaction ID is generated instantly and can be viewed anytime in payment history.",
    },
    {
      question: "Where can I use BBPS?",
      answer: "You can pay bills via BBPS using banks, authorized agents, and popular payment apps.",
    },
  ];

    const text = "Blog";
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
                                <div className=" lg:absolute bottom-0 right-0 lg:w-[700px] lg:h-[500px] z-20  " style={{ "overflow": "hidden" }}>
                                    <Image
                                        src={"/blog/blog1.png"}
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

            <BlogC />
             <FAQ faqs={faqData} subheading={" Find answers to common questions about bike insurance. Can&'t find what you're looking for? Contact our support team."} />

            <PartnersSection />
            <TestimonialSlider />
            <ContactBanner />
        </>
    )
}

export default page
