import React from 'react'
import Image from 'next/image'
import BenefitsSection2 from '../../../components/BenefitsSection2';
import ContactBanner from '../../../components/ContactBanner';
import TestimonialSlider from '../../../components/TestimonialSlider';
import PartnersSection from '../../../components/PartnersSection';
import ServiceBanner from '../../../components/ServiceBanner';
import Link from 'next/link';
import InsuranceCards from '../../../components/InsuranceCards';
import ServicesSection3 from '../../../components/ServicesSection3';
import GetInsurance from '../../../components/GetInsurance';
import InsuranceProcessSteps from '../../../components/InsuranceProcessSteps';
import InsuranceDocumentsSection from '../../../components/InsuranceDocumentsSection';
import InsuranceBenefitsSection from '../../../components/InsuranceBenefitsSection';



function page() {
    const data = {
        id: 1,
        subheading: 'BUSINESS LOAN',
        heading: 'Apka Business, Hamari Support',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et ',
        bgImage: '/insurance/ibg.png',
        centerImage: '/insurance/i3.png',

    }
    const aepsData = {
        subheading: 'Insurance',
        heading: 'Har Risk Ka Perfect Cover',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et  ducimus odio dignissimos At vero eos et accusamus et ',
        features: [
            'At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ',
            'At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ',
        ]
    };



    return (
        <>
            <div className="relative flex flex-col md:flex-row items-center justify-between pt-10 overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center "
                    style={{ backgroundImage: `url(${data.bgImage})` }}
                ></div>
                <div className=" z-10 mx-auto">
                    <div className='grid grid-cols-1 md:grid-cols-2 w-full space-y-6 md:space-y-0 items-center'>

                        <div className=" px-10 py-10 lg:py-16 rounded-2xl overflow-hidden max-w-2xl w-full">
                            <div className=" z-10">
                                <p className="text-sm font-bold uppercase tracking-widest text-[#0C3D4C]">
                                    {data.subheading}
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

                        <div className="w-full  ">

                            <Image
                                src={data.centerImage}
                                height={500}
                                width={500}
                                alt="center image"
                                className="md:pt-4 lg:pt-16 lg:absolute bottom-20 right-32 md:scale-150 z-20"

                            />
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className={`py-5 md:py-0 lg:pt-20 overflow-visible`} style={{ backgroundColor: "#E6F6FF" }}>
                    <div className="max-w-7xl mx-auto px-4 lg:px-0 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center">

                       <div>
                             <Image
                                src='/insurance/i1.png'
                                alt="loan-section"
                                width={400}
                                height={400}
                                className=""
                            />
                       </div>



                            <div className="lg:h-[200px] hidden md:block overflow-hidden lg:overflow-visible relative ">
                                <Image
                                    src='/insurance/i2.png'
                                    alt="loan-section"
                                    width={500}
                                    height={500}
                                    className="lg:absolute bottom-0 z-20"
                                // style={{ objectPosition: 'right' }}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <InsuranceCards />
            <ServicesSection3 data={aepsData} />

            <GetInsurance />
            <InsuranceProcessSteps />


            <BenefitsSection2 />
            <InsuranceDocumentsSection />
            <InsuranceBenefitsSection />

            <PartnersSection />
            <TestimonialSlider />
            <ContactBanner />
        </>
    )
}

export default page
