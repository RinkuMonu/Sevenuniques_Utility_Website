"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const ServiceBanner = ({ data }) => {
    return (

        <div className="relative flex flex-col md:flex-row items-center justify-between "
        >
            <div
                className="absolute inset-0 bg-cover bg-center "
                style={{ backgroundImage: `url(${data?.bgImage})` }}
            ></div>
            <div className=" z-1 mx-auto">
                <div className='grid grid-cols-1 sm:grid-cols-2 w-full space-y-6 md:space-y-0 items-center'>

                    <div className="w-full max-w-2xl overflow-hidden rounded-2xl px-4 py-8 sm:px-10 sm:py-10 lg:py-16">
                        <div className=" z-1">
                            <p className="text-sm font-bold uppercase tracking-widest text-[#0C3D4C]">
                                {data?.subheading}
                            </p>
                            <h2 className="mt-2 text-3xl font-bold leading-tight text-[#0C3D4C] sm:text-4xl md:text-5xl">
                                {data.heading}
                            </h2>
                            <p className="mt-4 my-8 text-base text-[#5D5D5D] max-w-md">
                                {data.description}
                            </p>
                            <Link
                                href={data?.buttonHref || "/signup"}
                                className="pan-hero-button"
                            >
                                {data?.buttonText || "Register now"}
                            </Link>

                        </div>
                    </div>

                    <div className="relative flex w-full items-end justify-center">

                        {data?.centerImage && (
                            <Image
                                src={data.centerImage}
                                width={450}
                                height={450}
                                alt="center image"
                                className="mt-6 md:mt-10 w-full h-auto max-w-[450px]"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>


    );
}

export default ServiceBanner;
