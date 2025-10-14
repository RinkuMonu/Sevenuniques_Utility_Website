"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdDownload } from "react-icons/io";
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
        <section
            className="px-4 lg:px-0 py-10 relative"
            style={{
                background:
                    "linear-gradient(90deg, #01202A 0%, #01202A 25%, #0B4051 50%, #095C8C 75%, #095C8C 100%)",
            }}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div className="text-white flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                        One-Click Signups, <br /> One Second Later.
                    </h3>

                    <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
                        <Link href="/" aria-label="Download on the App Store">
                            <Image
                                src="/loan/image7.png"
                                alt="logo-bbps"
                                width={160}
                                height={160}
                            />
                        </Link>
                        <Link href="/coming-soon" aria-label="Get it on Google Play">
                            <Image
                                src="/loan/image8.png"
                                alt="logo-bbps"
                                width={160}
                                height={160}
                            />
                        </Link>
                    </div>

                    <p className="text-lg text-gray-200">Or Get The Link On Your Phone</p>

                    <div className="flex w-full max-w-sm bg-white p-1 rounded-full items-center">
                        <div className="relative flex-grow">
                            <input
                                type="tel"
                                value={mobile}
                                onChange={handleChange}
                                placeholder="Enter Mobile Number"
                                className={`w-full pl-10 pr-4 py-2 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none border ${mobile && !isValidIndianNumber
                                        ? "border-red-500"
                                        : "border-gray-300 focus:border-blue-500"
                                    }`}
                            />
                            <IoCallOutline className="absolute text-black top-1/2 left-3 -translate-y-1/2" />
                        </div>

                        <Link
                            href="/coming-soon"
                            className="px-6 py-2 text-white font-semibold rounded-full transition-colors whitespace-nowrap"
                            style={{
                                background: "linear-gradient(90deg,#358EBA 0%, #24576C 100%)",
                            }}
                        >
                            Get App
                        </Link>
                    </div>
                </div>

                {/* Right Content */}
                <div className="relative w-full max-w-md mx-auto">
                    <Image
                        src="/image/mobile-qr.png"
                        width={600}
                        height={260}
                        alt="Mobile App Interface"
                        className="w-full h-auto"
                    />

                    {/* Download button below the image for mobile */}
                    <div className="mt-4 flex justify-center">
                        <Link
                            href="/coming-soon"
                            className="absolute left-1/2 -translate-x-1/2 inline-block
                            top-[60%] sm:top-[62%] md:top-[65%] lg:top-[51%]"
                        >
                            <span className="px-6 sm:px-4 py-2  bg-gradient-to-t from-[#A10000] to-[#F40000] text-sm sm:text-md md:text-md text-white font-semibold rounded-full inline-flex gap-2">
                                Download App <IoMdDownload className="text-2xl animate-bounce" />
                            </span>
                        </Link>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default BenefitsSection2;
