"use client"
import React from 'react'
import ServiceBanner from '../../../components/ServiceBanner';
import Image from 'next/image';


function page() {
    const data = {
        id: 1,
        subheading: 'aBOUT US',
        heading: 'Hamari Pehchaan, Aapka Vishwas',
        description: 'Quickly transfer funds to your loved ones anytime, anywhere with our secure and reliable Domestic Money Transfer service.',
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
                                <div className=" lg:absolute bottom-0 right-0 lg:w-[700px] lg:h-[500px] z-20  " style={{ "overflow": "hidden" }}>
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

        </>
    )
}

export default page
