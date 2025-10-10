import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Herobanner({data}) {
    return (
        <>
   <div className="relative flex flex-col md:flex-row items-center justify-between overflow-hidden lg:h-[70vh]">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data?.bgImage})` }}></div>
                <div className="z-10 mx-auto">
                    {/* Plane Path */}
                    <div className="path-container absolute -left-32 -top-36 -rotate-45 z-40">
                        <svg width="100%" height="300" viewBox="0 0 1000 300">
                            <path id="flightPath" d="M 0 100 C 300 -150, 300 250, 450 200 S 600 -150, 750 100" stroke="black" strokeWidth="3" fill="none" strokeDasharray="10,10" />
                        </svg>
                        <div className="plane">
                            <div className="light"></div>
                            <Image width={40} height={40} src="/booking/plane.png" alt="Plane" className="planeimg" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 w-full space-y-6 md:space-y-0 items-center">
                        <div className="px-10 py-10 lg:py-16 rounded-2xl overflow-hidden max-w-2xl w-full">
                            <div className="z-10">
                                <p className="text-sm font-bold uppercase tracking-widest text-[#0C3D4C]">{data?.subheading}</p>
                                <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#0C3D4C] leading-tight">{data.heading}</h2>
                                <p className="mt-4 my-8 text-base text-[#5D5D5D] max-w-md">{data.description}</p>
                                <Link href="https://utility.sevenuniques.in/register" className="relative inline-block rounded-full border border-[#0C3D4C] p-[2px]">
                                    <span className="block px-8 py-3 bg-[#0C3D4C] text-white font-semibold rounded-full transition-all duration-300 ease-in-out hover:bg-transparent hover:text-[#0d2f4d]">
                                        Register now
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <div className="w-full h-full">
                            <div className="flex gap-10 ms-auto w-fit">
                                <Image src="/booking/book2.png" height={200} width={200} alt="center image" className="md:pt-4 lg:pt-20 z-20" />
                                <Image src="/booking/book3.png" height={200} width={200} alt="center image" className="md:pt-4 lg:pb-20 z-20" />
                            </div>
                            <Image src={data.centerImage} height={500} width={500} alt="center image" className="md:pt-4 lg:pt-16 lg:absolute bottom-20 right-32 md:scale-150 z-20" />
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
