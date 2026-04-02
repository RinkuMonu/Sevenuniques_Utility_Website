import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Herobannerbike({ data }) {
    return (
        <>
            <div className="relative flex flex-col md:flex-row items-center justify-between overflow-hidden lg:h-[70vh]">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data?.bgImage})` }}></div>
                <div className="z-10 mx-auto">

                    {/* <div className="path-container absolute -left-32 -top-36 -rotate-45 z-40">
                        <svg width="100%" height="300" viewBox="0 0 1000 300">
                            <path id="flightPath" d="M 0 100 C 300 -150, 300 250, 450 200 S 600 -150, 750 100" stroke="black" strokeWidth="3" fill="none" strokeDasharray="10,10" />
                        </svg>
                        <div className="plane">
                            <div className="light"></div>
                            <Image width={40} height={40} src="/booking/plane.png" alt="Plane" className="planeimg" />
                        </div>
                    </div> */}

                    <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center">

                        <div></div>

                        <div className="px-10 py-10 lg:py-16 max-w-2xl w-full ml-auto">
                            <p className="text-sm font-bold uppercase tracking-widest text-white">
                                {data?.subheading}
                            </p>

                            <h2 className="mt-2 text-4xl md:text-5xl font-bold text-white leading-tight">
                                {data.heading}
                            </h2>

                            <p className="mt-4 mb-8 text-base text-white/90 max-w-md">
                                {data.description}
                            </p>

                            <Link
                                href="https://utility.Finuniques.in/register"
                                className="inline-block rounded-full border border-white px-8 py-3 bg-[#0C3D46] text-white font-semibold hover:bg-white hover:text-[#0C3D4C] transition"
                            >
                                Register now
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
