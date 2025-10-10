"use client"
import React from 'react'
import ServiceBanner from '../../../components/ServiceBanner'
import Image from 'next/image'
import ServiceGrid from '../../../components/ServiceGrid'
import { Droplets, Lightbulb } from 'lucide-react';
import BillManagement from '../../../components/BillManagement'
import Link from 'next/link'

function page() {

    const data =
    {
        id: 1,
        subheading: 'DMT',
        heading: 'Ek System, Har Bill Ka Solution',
        description: 'Make all your payments hassle-free using the integrated bill payment system in India. Safe, quick, and hassle-free.',
        bgImage: '/bbps/bbpsbg.png',
        centerImage: '/bbps/bbps1.png',
    }
    return (
        <>

        <div className="relative flex flex-col md:flex-row items-center justify-between "
        >
            <div
                className="absolute inset-0 bg-cover bg-center "
                style={{ backgroundImage: `url(${data?.bgImage})` }}
            ></div>
            <div className=" z-10 mx-auto">
                <div className='grid grid-cols-1 sm:grid-cols-2 space-y-6 md:space-y-0 items-center w-7xl'>

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
                            width={400}
                            alt="center image"
                            className="md:pt-4 lg:pt-16  lg:h-[70vh] z-20"

                        />) : ""}
                    </div>
                </div>
            </div>
        </div>
            <div className="bg-[#FFE9DE] relative pt-20 overflow-visible">
                <div className="max-w-7xl mx-auto px-4 lg:px-0 relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <div className="relative z-10 ">
                            <Image src="/bbps/bbps.png" alt="logo-bbps" width={400} height={400} />
                        </div>
                        <div className="hidden md:block relative h-[200px] mt-10 md:mt-0 ">
                            <div className="bg-[#E6F6FF] border-8 border-white absolute -top-44  left-10 md:right-1/2 rounded-xl w-[220px] h-[240px] z-20 shadow-lg overflow-visible">
                                <Image
                                    src="/bbps/bbps2.png"
                                    alt="logo-bbps"
                                    fill
                                    className="object-cover scale-105 top-0 left-0"
                                    style={{ objectPosition: 'center' }}
                                />
                            </div>
                            <div className="bg-[#E6F6FF] border-8 border-white rounded-xl absolute -top-28 right-10 md:right-8 w-[220px] h-[240px] z-20 shadow-md overflow-visible">
                                <Image
                                    src="/bbps/bbps3.png"
                                    alt="logo-bbps"
                                    fill
                                    className="object-cover right-0"
                                    style={{ objectPosition: 'right' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         

          <ServiceGrid/>
          <BillManagement/>


        </>
    )
}

export default page