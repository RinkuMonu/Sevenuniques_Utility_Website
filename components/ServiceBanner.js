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
            <div className=" z-10 mx-auto">
                <div className='grid grid-cols-1 sm:grid-cols-2 w-full space-y-6 md:space-y-0 items-center'>

                    <div className=" px-10 py-10 lg:py-16 rounded-2xl overflow-hidden max-w-2xl w-full">
                        <div className=" z-10">
                            <p className="text-sm font-bold uppercase tracking-widest text-[#0C3D4C]">
                                {data?.subheading}
                            </p>
                            <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#0C3D4C] leading-tight">
                                {data.heading}
                            </h2>
                            <p className="mt-4 my-8 text-base text-[#5D5D5D] max-w-md">
                                {data.description}
                            </p>
                            <Link
                                href="https://utility.sevenuniques.in/register"
                                className="relative inline-block rounded-full border border-[#0C3D4C] p-[2px]"
                            >
                                <span className="block px-8 py-3 bg-[#0C3D4C] text-white font-semibold rounded-full transition-all duration-300 ease-in-out hover:bg-transparent hover:text-[#0d2f4d]">
                                    Register now
                                </span>
                            </Link>

                        </div>
                    </div>

                    <div className="w-full  flex justify-center items-end">

                    {data.centerImage ? (    <Image
                            src={data.centerImage }
                            height={500}
                            width={620}
                            alt="center image"
                            className="md:pt-4 lg:pt-16  lg:h-[70vh] z-20"

                        />) : ""}
                    </div>
                </div>
            </div>
        </div>


    );
}

export default ServiceBanner;
