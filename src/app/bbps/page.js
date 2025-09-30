"use client"
import React from 'react'
import ServiceBanner from '../../../components/ServiceBanner'
import Image from 'next/image'
import ServiceGrid from '../../../components/ServiceGrid'
import { Droplets, Lightbulb } from 'lucide-react';
import BillManagement from '../../../components/BillManagement'

function page() {

    const data =
    {
        id: 1,
        subheading: 'DMT',
        heading: 'Aapka Paisa, Aapke Apno Tak, Seedha!',
        description: 'Quickly transfer funds to your loved ones anytime, anywhere with our secure and reliable Domestic Money Transfer service.',
        bgImage: '/bbps/bbpsbg.png',
        centerImage: '/bbps/bbps1.png',
    }
    return (
        <>
            <ServiceBanner data={data} />
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
                                    className="object-cover scale-125 pb-4 right-0"
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