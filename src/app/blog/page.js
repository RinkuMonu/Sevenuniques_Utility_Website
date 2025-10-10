"use client"
import React from 'react'
import ServiceBanner from '../../../components/ServiceBanner'
import Image from 'next/image';
import PartnersSection from '../../../components/PartnersSection';
import TestimonialSlider from '../../../components/TestimonialSlider';
import ContactBanner from '../../../components/ContactBanner';
import BlogC from '../../../components/BlogC';
import ServicesSection3 from '../../../components/ServicesSection3';
import FaqAccordion from '../../../components/FaqAccordion';

function page() {
    const data = {
        id: 1,
        subheading: 'PANCARD',
        heading: 'Apki Pehchaan, Apki Power',
        description: 'Quickly transfer funds to your loved ones anytime, anywhere with our secure and reliable Domestic Money Transfer service.',
        bgImage: '/blog/blogbg.png',
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
            question: "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos",
            answer: "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos DucimusAt Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Od At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus DucimusAt Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Od"
        },
        {
            question: "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos",
            answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        },
        {
            question: "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos",
            answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
        },
        {
            question: "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos",
            answer: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        },
        {
            question: "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos",
            answer: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
        },
        {
            question: "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos",
            answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
        }
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
            <FaqAccordion faqData={faqData} />

            <PartnersSection />
            <TestimonialSlider />
            <ContactBanner />
        </>
    )
}

export default page
