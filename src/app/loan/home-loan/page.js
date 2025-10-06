import React from 'react'
import VerticalSlider from '../../../../components/VerticalSlider';
import Eligibility from '../../../../components/Eligibility';
import ServicesSection3 from '../../../../components/ServicesSection3';
import StatsBanner from '../../../../components/StatsBanner';
import EMICal2 from '../../../../components/EMICal2';
import BenefitsSection from '../../../../components/BenefitsSection';
import PartnersSection from '../../../../components/PartnersSection';
import TestimonialSlider from '../../../../components/TestimonialSlider';
import ContactBanner from '../../../../components/ContactBanner';
import Image from 'next/image';
import Link from 'next/link';
import LoanBenefits from '../../../../components/LoanBenefits';
import LoanOptions from '../../../../components/LoanOptions';
import DocumentsRequired from '../../../../components/DocumentsRequired';




function page() {
    const data = {
        id: 1,
        subheading: 'Mortgage LOAN',
        heading: 'Ghar Bane Aasaan, Loan Se',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et ',
        bgImage: '/loan/homebg.png',
        centerImage: '/loan/home.png',
    }

    const aepsData = {
        subheading: 'Mortgage Loan',
        heading: 'Ghar Ka Value, Aapke Kaam',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et  ducimus odio dignissimos At vero eos et accusamus et ',
        features: [
            'At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ',
            'At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ',
        ]
    };

    const LetterCircle = ({ letter }) => (
        <div className="flex h-20 w-20 items-center justify-center rounded-full  p-1 md:shadow-inner md:h-24 md:w-24">
            <div className="flex h-full w-full items-center justify-center rounded-full md:border-4 border-[#2F8486]">
                <span className="font-sans text-6xl font-medium text-[#2F8486] md:text-6xl">
                    {letter}
                </span>
            </div>
        </div>
    );

    const letters = ['L', 'O', 'A', 'N'];

    return (
        <>
            <div className="relative flex flex-col md:flex-row items-center justify-between pt-10"
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
                                    href="/"
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
                                className="md:pt-4 pt-16 lg:absolute bottom-20 right-32 md:scale-150 z-20"

                            />
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className={`relative pt-20 overflow-visible`} style={{ backgroundColor: "#CEF5F5" }}>
                    <div className="max-w-7xl mx-auto px-4 lg:px-0 relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 ">
                            <div className="relative ">
                                <div className="flex space-x-4 md:space-x-6">
                                    {letters.map((char) => (
                                        <LetterCircle key={char} letter={char} />
                                    ))}
                                </div>
                            </div>

                            <div className="hidden md:block relative h-[200px] mt-10 md:mt-0 ">
                                <div className=" lg:absolute bottom-0 -right-30  w-[680px] lg:h-[500px] z-20  overflow-visible">
                                    <Image
                                        src={"/loan/home1.png"}
                                        alt="loan-section"
                                        fill
                                        className="object-cover right-0"
                                        style={{ objectPosition: 'right' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <VerticalSlider />
            <ServicesSection3 data={aepsData} />
            <StatsBanner />
           <LoanBenefits
  title="Drive Your Dream Car with Easy Loans"
  description="At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimoscusamus et iusto odio dignissimos ducimus odio dignissimos vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos "
  image="/loan/home2.png"
  benefits={[
    "Quick approval with minimal paperwork.",
    "Flexible EMI options as per budget.",
    "Loan available for new and used cars.",
    "Attractive and affordable interest rates.",
    "No hidden charges, fully transparent.",
    "Quick approval with minimal paperwork.",
    "Flexible EMI options as per budget.",
    "Loan available for new and used cars.",
    "Attractive and affordable interest rates.",
    "No hidden charges, fully transparent.",
  ]}
/>

            <EMICal2 />
               <DocumentsRequired />
            <Eligibility
                title="Check Your Loan Eligibility Instantly"
                infoData={[
                    { label: "Nationality", value: "Indian" },
                    { label: "Loan Tenure", value: "60 Months" },
                    { label: "Work Experience", value: "More than 1 year" },
                    { label: "Employment", value: "Self Employed" },
                ]}
                image="/loan/home4.png"
                scale= "125"
            />
            <BenefitsSection />
                <LoanOptions />
            <PartnersSection />
            <TestimonialSlider />
            <ContactBanner />
        </>
    )
}

export default page
