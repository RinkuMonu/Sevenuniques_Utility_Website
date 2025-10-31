"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";


const Stat = ({ value, redWidth }) => (
<div>
  <p className="text-xl font-medium text-gray-800">{value}</p>
  <div className="w-full h-1.5 mt-2 flex">
    <div className={`h-2 bg-[#0C3D4C] ${redWidth} rounded`}></div>
    <div className="flex-1 bg-gray-300"></div>
  </div>
</div>

);



export default function WhatIsBBPS() {
  return (
   <div className=" px-4 lg:px-0">
      <div className="max-w-7xl   mx-auto rounded-lg grid grid-cols-1 md:grid-cols-5">
        
        {/* Left Column */}
        <div className="col-span-1 md:col-span-3 py-8 px-6 md:py-12 ">
          {/* Header */}
          <div className="flex items-center">
            <div className="w-6 h-0.5 bg-[#0C3D4C]  mr-3"></div>
            <p className="text-sm font-bold tracking-[0.2em] text-[#0C3D4C]">WHAT IS BBPS</p>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl lg:text-4xl font-bold text-[#0C3D4C] my-4">
            Crafting Words That Make a Difference.
          </h1>

          {/* Introduction Text */}
          <div className=" leading-relaxed my-5 space-y-3">
            <p>
              <span className="text-[#0C3D4C]  font-bold">*</span> A seasoned copywriter passionate about shaping ideas into compelling narratives. I work remotely from New York, serving clients worldwide.
            </p>
            <p>
              My journey began as a passionate writer and evolved into a strategic copywriting career. I specialize in creating website copy, blogs, and campaigns that engage and convert audiences.
            </p>
          </div>
          
          {/* Dashed Separator */}
          <div className="my-8 border-t-2 border-dashed border-[#0C3D4C]/50 "></div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-8">
            <Stat value="10+ years of experience" redWidth="w-2/5" />
            <Stat value="3 million words" redWidth="w-3/5" />
            <Stat value="30% higher engagement" redWidth="w-3/4" />
            <Stat value="100+ brands" redWidth="w-1/2" />
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-1 md:col-span-2 p-4 lg:p-6 flex flex-col">
 
          {/* Image */}
          <div className="flex-grow flex flex-col justify-center">
            <Image
              src="/bbps/bbps4.jpg" 
              width={200}
              height={200}
              alt="Sangvi working on a laptop"
              className="rounded-2xl object-cover w-full h-64"
            />
            {/* Name and Title */}
            <div className="mt-6 text-center md:text-left">
              <h2 className="text-3xl font-extrabold tracking-widest text-[#0C3D4C] ">Bhart Bill Payment System</h2>
            </div>
            {/* CTA */}
            <div className="mt-10 w-full text-center md:text-left">
              <Link href={"/contact"} className="mt-5 px-6 py-3 bg-gray-700 text-white font-bold tracking-wider relative transition-all duration-300 ease-in-out
              hover:shadow-none hover:translate-x-1 hover:translate-y-1
              shadow-[8px_8px_0_0_#0C3D4C]">
                LET&#39;S COLLABORATE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
