import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import WhatIsBBPS from '../../../components/bbps/WhatIsBBPS'
import HowItWorks from '../../../components/bbps/HowItWorks'
import BBPSFeatures from '../../../components/bbps/BBPSFeatures'
import FAQ from '../../../components/Bike Insurance/FAQ'

function page() {
  const logos = [
    { src: "/bank/instantpay.png", width: 120, height: 60 },
    { src: "/bank/nsdl.png", width: 150, height: 70 },
    { src: "/bank/paysprint.png", width: 100, height: 50 },
    // { src: "/bank/irctc.png", width: 70, height: 60 },
    { src: "/bank/ISERVEU-MAIN-LOGO.png", width: 150, height: 70 },
  ];


  const data =
  {
    id: 1,
    subheading: 'BBPS',
    heading: 'Ek System, Har Bill Ka Solution',
    description: 'Make all your payments hassle-free using the integrated bill payment system in India. Safe, quick, and hassle-free.',
    bgImage: '/bbps/bbpsbg.png',
    centerImage: '/bbps/bbps1.png',
  }

  const faqs = [
    {
      question: "What is BBPS?",
      answer: "BBPS (Bharat Bill Payment System) is an NPCI-developed, interoperable bill payment network that standardizes and secures bill payments across banks, apps, and agent outlets.",
    },
    {
      question: "How do I know if my biller is supported?",
      answer: "During biller selection, supported billers appear in the list. Many utilities, DTH, broadband, telecom, and loan repayment billers are already onboarded to BBPS.",
    },
    {
      question: "Is it safe to pay bills online?",
      answer: "Yes. BBPS uses secure, standardized rails backed by NPCI with strong controls, and it provides instant digital receipts with unique reference IDs.",
    },
    {
      question: "What happens if my payment fails?",
      answer: "If a payment fails, you’ll see an on-screen status. In most cases, reversals or refunds are processed per network and issuer rules. Keep your transaction reference for support.",
    },
    {
      question: "How can I get a payment receipt?",
      answer: "You receive an instant digital confirmation with a unique BBPS reference/transaction ID. You can also access receipts via your bank/app’s payments history.",
    },
    {
      question: "Where can I pay using BBPS?",
      answer: "You can pay through participating banks, agent outlets, and popular payment apps that support BBPS.",
    },
  ];
  return (
    <>
   <div className="relative flex flex-col md:flex-row items-center justify-between "
        >
            <div
                className="absolute inset-0 bg-cover bg-center hidden md:block"
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
                            width={360}
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

      <WhatIsBBPS />
      <HowItWorks />
      <BBPSFeatures />

      <section className="pt-10 pb-16 relative overflow-hidden">
        {/* Decorative floating circles */}
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-blue-100 rounded-full opacity-30 animate-pulse-slow"></div>
        <div className="absolute -bottom-16 -right-20 w-60 h-60 bg-blue-200 rounded-full opacity-20 animate-pulse-slow"></div>

        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-sm font-semibold text-[#24576C] tracking-widest uppercase">
            Our Network
          </p>
          <h3 className="mt-2 text-4xl font-bold text-[#0C3D4C]">
            Our API Partners
          </h3>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            We collaborate with leading APIs to provide seamless integrations and reliable services.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-8 px-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center p-6 bg-white rounded-2xl shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-2xl"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <Image
                src={logo.src}
                alt={`API Partner ${index + 1}`}
                width={logo.width}
                height={logo.height}
                className="object-contain relative z-10"
              />
            </div>
          ))}
        </div>

        {/* Animated floating logos */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-gray-300 rounded-full shadow-lg opacity-20 animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-16 w-32 h-32 bg-gray-300  rounded-full shadow-lg opacity-15 animate-bounce-slow"></div>
      </section>


      <FAQ faqs={faqs} />
    </>
  )
}

export default page
