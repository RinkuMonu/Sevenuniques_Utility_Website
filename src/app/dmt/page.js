"use client"
import React from 'react'
import ServiceBanner from '../../../components/ServiceBanner'
import ServicesSection2 from '../../../components/ServicesSection2'
import ServicesSection3 from '../../../components/ServicesSection3'
import BenefitsDMT from '../../../components/BenefitsDMT'
import Link from 'next/link'
import Image from 'next/image'
import AdvantageDMT from '../../../components/AdvantageDMT'
import ContactBanner from '../../../components/ContactBanner'
import DmtWork from '../../../components/DmtWork'


const StepCard = ({ number, title, text, icon }) => (
  <div className="bg-sky-100/50 border border-sky-200/60  p-6 relative overflow-hidden">
    <div className='shadow-md rounded bg-white w-fit px-6 py-3'>
      <p className='font-bold text-[#24576C] text-3xl'>{number}</p>
    </div>
    <div className="relative z-10">
      <h3 className="font-semibold text-sky-800 text-lg my-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    </div>
    <Image
      src={icon}
      width={80}
      height={80}
      alt="Happy professional with a tablet"
      className="rounded-lg  absolute top-2 right-2"
    />
  </div>
);


// Data for the steps
const steps = [
  { number: 1, title: 'Basic Detail Verification', text: 'At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odioducimus Odio', icon: "/dmt/e1.png" },
  { number: 2, title: 'Documents upload & Verification', text: 'At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odioducimus Odio', icon: "/dmt/e2.png" },
  { number: 3, title: 'Video KYC', text: 'At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odioducimus Odio', icon: "/dmt/e3.png" },
  { number: 4, title: 'Select Plan', text: 'At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odioducimus Odio', icon: "/dmt/e4.png" },
];

function page() {
  const data = {
    id: 1,
    subheading: 'DMT',
    heading: 'Paisa pohchaaye, rishton ko jode',
    description: 'Quickly transfer funds to your loved ones anytime, anywhere with our secure and reliable Domestic Money Transfer service.',
    bgImage: '/dmt/dmtbg.png',
    centerImage: '/dmt/dmt1.png',
  }

  const section2data = {
    img1: "/dmt/dmt.png",
    img2: "/dmt/dmt2.png",
    color: "#CDFFEF"
  }
  const dmtData = {
    subheading: 'DMT',
    heading: 'Domestic money transfer',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et  ducimus odio dignissimos At vero eos et accusamus et ',
    features: [
      'At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et  ducimus odio dignissimos At vero eos et accusamus et ',
      'At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et  ducimus odio dignissimos At vero eos et accusamus et ',
    ]
  };

  return (
    <>
      <ServiceBanner data={data} />
      <ServicesSection2 section2data={section2data} />
      <ServicesSection3 data={dmtData} />
      <BenefitsDMT />
      <section>
        <div className="px-4 lg:px-0 py-16 relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 ">
            <Image
              src="/dmt/earnbg.png"
              width={400}
              height={500}
              alt="Happy professional with a tablet"
              className="rounded-lg absolute top-53 -left-10 object-contain w-2/3 h-3/4"
            />

            <div className="relative md:col-span-3">

              <div className="relative z-10 h-full">
                <div className='max-w-xl'>
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Earn More, Grow More With Religare</h1>
                  <p className="text-gray-500 mb-8 leading-relaxed">
                    At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio
                    Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus Et At
                    Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos
                    At Vero Eos Et Accusamus Et At Vero Eos Et Accusamus Odio Dignissimos.
                  </p>
                </div>
                <div className=" max-w-md mx-auto lg:mx-0" >
                  <Image
                    src="/dmt/earn.png"
                    width={600}
                    height={600}
                    alt="Happy professional with a tablet"
                    className="rounded-lg md:absolute bottom-10 left-0  flex align-bottom  items-baseline"
                  />
                  <div className="hidden  absolute top-1/3 right-40 w-16 h-16 bg-white rounded-lg shadow-lg md:flex items-center justify-center animate-bounce"> <Image src="/icons/dmt1.png" width={70} height={70} alt='icons' className='pb-2' />
                  </div>
                  <div className="absolute top-1/2 right-20 w-16 h-16 bg-white rounded-lg shadow-lg hidden md:flex items-center justify-center animate-pulse"> <Image src="/icons/dmt2.png" width={70} height={70} alt='icons' className='pb-2' /></div>
                  <div className="absolute bottom-1/3 right-50 w-16 h-16 bg-white rounded-lg shadow-lg hidden md:flex  items-center justify-center animate-bounce">  <Image src="/icons/dmt3.png" width={70} height={70} alt='icons' className='pb-2' /></div>
                  <div className="absolute top-1/2 left-0 w-16 h-16 bg-white rounded-lg shadow-lg hidden md:flex  items-center justify-center animate-pulse">  <Image src="/icons/dmt4.png" width={70} height={70} alt='icons' className='pb-2' /></div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 md:col-span-2 bg-white z-10 pb-10">
              {steps.map((step) => (
                <StepCard
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  text={step.text}
                  icon={step.icon}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      <div
        className="w-full "
        style={{
          background: "linear-gradient(90deg, #01202A 0%, #01202A 25%, #0B4051 50%, #095C8C 75%, #095C8C 100%)"
        }}
      >
        <div className='grid md:grid-cols-2 max-w-7xl mx-auto px-4 md:px-0'>
          <div className=" text-white flex items-center justify-center " >
            <div className="container mx-auto py-12 max-w-4xl">
              <div className="text-left mb-12">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  Paise bhejo instantly, <br />kahin bhi kabhi bhi
                </h1>
                <p className="mt-6 max-w-2xl text-gray-400">
                  At Vero Eos Et Accusamus vero eos et accusamus et iusto odio dignissimos ducimus  Et Iusto Odio Dignissimos Ducimus Odio DignissimosAt Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio
                </p>
              </div>
              <div className="mb-12">
                <Link href="/contact" className=" text-white font-bold py-3 px-8 rounded-full transition-colors duration-300" style={{
                  background: "linear-gradient(90deg,#358EBA  0%, #24576C 100%)"
                }}>
                  Register now
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Image src="/dmt/dmtbanner.png" width={400} height={400} alt='homesecutity' className='object-contain w-full h-full pt-8' />
          </div>
        </div>

      </div>





<DmtWork/>










      <AdvantageDMT />
      <ContactBanner />
    </>
  )
}

export default page