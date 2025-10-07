"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdDownload } from 'react-icons/io';

import { IoCallOutline } from "react-icons/io5";

const BenefitsSection2 = () => {
    const [mobile, setMobile] = useState("");

    const handleChange = (e) => {
        let value = e.target.value;

        // Remove all non-digit characters
        value = value.replace(/\D/g, "");

        // Limit to 10 digits
        if (value.length > 10) value = value.slice(0, 10);

        setMobile(value);
    };

    const isValidIndianNumber = /^[6-9]\d{9}$/.test(mobile);
    return (
        <section className=" px-4 lg:px-0 py-10 relative"
            style={{
                background: "linear-gradient(90deg, #01202A 0%, #01202A 25%, #0B4051 50%, #095C8C 75%, #095C8C 100%)"
            }}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-white flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-8">
                        One App, Endless <br /> Benefits
                    </h3>

                    <div className="flex sm:flex-row flex-col space-y-4 mb-8">
                        <Link href="/" aria-label="Download on the App Store">
                            <Image
                                src="/loan/image7.png"
                                alt="logo-bbps"
                                width={200}
                                height={200}

                            />
                        </Link>
                        <Link href="/" aria-label="Get it on Google Play">
                            <Image
                                src="/loan/image8.png"
                                alt="logo-bbps"
                                width={200}
                                height={200}

                            />
                        </Link>
                    </div>

                    <p className="text-lg text-gray-200 mb-4">
                        Or Get The Link On Your Phone
                    </p>

                    <div className="flex w-full max-w-sm bg-white p-1 rounded-4xl   items-center">
                        <div className="relative flex-grow">
                            <input
                                type="tel"
                                value={mobile}
                                onChange={handleChange}
                                placeholder="Enter Mobile Number"
                                className={`w-full pl-3 md:pl-12 pr-4  rounded-4xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none  ${mobile && !isValidIndianNumber
                                        ? "border-red-500"
                                        : " focus:border-blue-500"
                                    }`}
                            />
                           
                            <IoCallOutline className='absolute text-black top-1 left-2.5' />
                        </div>
                        
                      <Link href="/coming-soon"  className="px-6 py-3 text-white font-semibold rounded-4xl transition-colors" style={{
                            background: "linear-gradient(90deg,#358EBA  0%, #24576C 100%)"
                        }}>
                            Get app
                        </Link>

                    </div>
                </div>


                <div className='relative lg:h-[50vh] flex justify-center items-center align-middle '>
                    <div>
                        <Image
                            src="/recharge/r5.png"
                            width={300}
                            height={400}
                            alt="Mobile App Interface"
                            className="h-[80vh] "
                        />

                        <Link
                             href="/coming-soon"
                            className="absolute top-4/5 left-1/2 -translate-x-1/2 -translate-y-1/2   inline-block rounded-full border border-white p-[2px] z-10"
                        >
                            <span className=" px-8 py-3 bg-gradient-to-t from-[#A10000] to-[#F40000] text-xl text-white font-semibold rounded-full inline-flex gap-2">
                                Download App <IoMdDownload className='text-2xl animate-bounce' />
                            </span>
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default BenefitsSection2;