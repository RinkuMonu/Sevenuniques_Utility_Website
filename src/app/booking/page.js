"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import BookingFeatures from '../../../components/BookingFeatures';
import PromotionSlider from '../../../components/PromotionSlider';
import ServicesSection3 from '../../../components/ServicesSection3';
import TravelAssured from '../../../components/TravelAssured';
import BenefitsSection2 from '../../../components/BenefitsSection2';
import PartnersSection from '../../../components/PartnersSection';
import TestimonialSlider from '../../../components/TestimonialSlider';
import ContactBanner from '../../../components/ContactBanner';

function Page() {
 
    const tabs = [
        {
            id: "airlines",
            label: "Airlines",
            icon: "/booking/ait.png",
            data: {
                sliderImages: [
                    { id: 1, url: "/booking/s4.png", alt: "Black Friday travel sale with an airplane on a red and blue background." },
                    { id: 2, url: "/booking/s2.png", alt: 'A woman on vacation with text "Holiday Season!" and "50% Off".' },
                    { id: 3, url: "/booking/s3.png", alt: "A year-end travel promotion banner showing a hand holding a ticket through an airplane window." },
                    { id: 4, url: "/booking/s1.png", alt: "A year-end travel promotion banner showing a hand holding a ticket through an airplane window." },
                ],
                booking: {
                    title: "Book Smart,\nBook Sevenunique",
                    features: [
                        { cardBgImageUrl: "/booking/c1.png", iconUrl: "/booking/i1.png", text: "Best Deals, Best Service\nsirf Sevenunique par", boldWords: [], textColor: "text-white" },
                        { cardBgImageUrl: "/booking/c2.png", iconUrl: "/booking/i2.png", text: "Fast, Easy aur\nReliable Booking", boldWords: ["Reliable"], textColor: "text-white" },
                        { cardBgImageUrl: "/booking/c3.png", iconUrl: "/booking/i3.png", text: "Har Booking Par Trust,\nHar Journey Par Comfort", boldWords: ["Trust,", "Comfort"], textColor: "text-white" },
                        { cardBgImageUrl: "/booking/c4.png", iconUrl: "/booking/i4.png", text: "Sevenunique Jahan Har \nBooking Ho Assured", boldWords: ["Assured"], textColor: "text-white" },
                        { cardBgImageUrl: "/booking/c5.png", iconUrl: "/booking/i5.png", text: "24x7 \nCustomer support", boldWords: ["24x7"], textColor: "text-white" },
                    ],
                },
                aeps: {
                    subheading: "FLIGHT BOOKING",
                    heading: "Udaan bane easy, Sevenunique ke saath",
                    description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ",
                    features: [
                        "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et  ducimus odio dignissimos At vero eos et accusamus et ",
                        "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et  ducimus odio dignissimos At vero eos et accusamus et ",
                    ],
                },
                travel: {
                    title: "Air Travel Assured",
                    cards: [
                        { title: "Upto 150%\nRefund", description: "On Flight Cancellation" },
                        { title: "Upto 100%\nRefund", description: "For Bad Service Experience" },
                        { title: "Upto 100%\nRefund", description: "For Flight Delays" },
                        { title: "Upto 100%\nRefund", description: "If You Change Travel Plans" },
                    ],
                    imageUrl: "/booking/air1.png",
                },
                info: [
                    { title: "Book Today, Fly Tomorrow", description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus " },
                    { title: "Safe Aur Quick Mobile Recharge", description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus " },
                    { title: "Safe Aur Quick Mobile Recharge", description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus ." },
                   
                ],
            },
        },
        {
            id: "hotels",
            label: "Hotles",
            icon: "/booking/hotel.png",
            data: {
                sliderImages: [
                    { id: 1, url: "/booking/h3.png", alt: "Black Friday travel sale with an airplane on a red and blue background." },
                    { id: 2, url: "/booking/h2.png", alt: 'A woman on vacation with text "Holiday Season!" and "50% Off".' },
                    { id: 3, url: "/booking/h3.png", alt: "A year-end travel promotion banner showing a hand holding a ticket through an airplane window." },
                    { id: 4, url: "/booking/h4.png", alt: "A year-end travel promotion banner showing a hand holding a ticket through an airplane window." },
                ],
                booking: {
                    title: "Book Smart,\nBook Sevenunique",
                    features: [
                        { cardBgImageUrl: "/booking/c1.png", iconUrl: "/booking/i1.png", text: "Best Deals, Best Service\nsirf Sevenunique par", boldWords: [], textColor: "text-white" },
                        { cardBgImageUrl: "/booking/c2.png", iconUrl: "/booking/i2.png", text: "Fast, Easy aur\nReliable Booking", boldWords: ["Reliable"], textColor: "text-white" },
                        { cardBgImageUrl: "/booking/c3.png", iconUrl: "/booking/i3.png", text: "Har Booking Par Trust,\nHar Journey Par Comfort", boldWords: ["Trust,", "Comfort"], textColor: "text-white" },
                        { cardBgImageUrl: "/booking/c4.png", iconUrl: "/booking/i4.png", text: "Sevenunique Jahan Har \nBooking Ho Assured", boldWords: ["Assured"], textColor: "text-white" },
                        { cardBgImageUrl: "/booking/c5.png", iconUrl: "/booking/i5.png", text: "24x7 \nCustomer support", boldWords: ["24x7"], textColor: "text-white" },
                    ],
                },
                aeps: {
                    subheading: "AEPS",
                    heading: "Aadhaar Enabled Payment System",
                    description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et...",
                    features: [
                        "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos...",
                        "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos...",
                    ],
                },
                travel: {
                    title: "Air Travel Assured",
                    cards: [
                        { title: "Upto 150%\nRefund", description: "On Flight Cancellation" },
                        { title: "Upto 100%\nRefund", description: "For Bad Service Experience" },
                        { title: "Upto 100%\nRefund", description: "For Flight Delays" },
                        { title: "Upto 100%\nRefund", description: "If You Change Travel Plans" },
                    ],
                    imageUrl: "/booking/hotel1.png",
                },
                info: [
                    { title: "Safe Aur Quick Mobile Recharge", description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos..." },
                    { title: "Safe Aur Quick Mobile Recharge", description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos..." },
                    { title: "Safe Aur Quick Mobile Recharge", description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos..." },
                    { title: "Safe Aur Quick Mobile Recharge", description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos..." },
                    { title: "Safe Aur Quick Mobile Recharge", description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos..." },
                    { title: "Safe Aur Quick Mobile Recharge", description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos..." },
                ],
            },
        },
       
 {
            id: "trains",
            label: "Trains",
            icon: "/booking/train.png",
            data: {
                sliderImages: [
                    { id: 1, url: "/booking/t1.png", alt: "Black Friday travel sale with an airplane on a red and blue background." },
                    { id: 2, url: "/booking/t2.png", alt: 'A woman on vacation with text "Holiday Season!" and "50% Off".' },
                    { id: 3, url: "/booking/t3.png", alt: "A year-end travel promotion banner showing a hand holding a ticket through an airplane window." },
                    { id: 4, url: "/booking/t4.png", alt: "A year-end travel promotion banner showing a hand holding a ticket through an airplane window." },
                ],
                booking: {
                    title: "Book Smart,\nBook Sevenunique",
                    features: [
                        { cardBgImageUrl: "/booking/c1.png", iconUrl: "/booking/i1.png", text: "Best Deals, Best Service\nsirf Sevenunique par", boldWords: [], textColor: "text-white" },
                        { cardBgImageUrl: "/booking/c2.png", iconUrl: "/booking/i2.png", text: "Fast, Easy aur\nReliable Booking", boldWords: ["Reliable"], textColor: "text-white" },
                        { cardBgImageUrl: "/booking/c3.png", iconUrl: "/booking/i3.png", text: "Har Booking Par Trust,\nHar Journey Par Comfort", boldWords: ["Trust,", "Comfort"], textColor: "text-white" },
                        { cardBgImageUrl: "/booking/c4.png", iconUrl: "/booking/i4.png", text: "Sevenunique Jahan Har \nBooking Ho Assured", boldWords: ["Assured"], textColor: "text-white" },
                        { cardBgImageUrl: "/booking/c5.png", iconUrl: "/booking/i5.png", text: "24x7 \nCustomer support", boldWords: ["24x7"], textColor: "text-white" },
                    ],
                },
                aeps: {
                    subheading: "AEPS",
                    heading: "Aadhaar Enabled Payment System",
                    description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et...",
                    features: [
                        "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos...",
                        "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos...",
                    ],
                },
                travel: {
                    title: "Air Travel Assured",
                    cards: [
                        { title: "Upto 150%\nRefund", description: "On Flight Cancellation" },
                        { title: "Upto 100%\nRefund", description: "For Bad Service Experience" },
                        { title: "Upto 100%\nRefund", description: "For Flight Delays" },
                        { title: "Upto 100%\nRefund", description: "If You Change Travel Plans" },
                    ],
                    imageUrl: "/booking/train1.png",
                },
                info: [
                    { title: "Safe Aur Quick Mobile Recharge", description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos..." },
                    { title: "Safe Aur Quick Mobile Recharge", description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos..." },
                    { title: "Safe Aur Quick Mobile Recharge", description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos..." },
                    { title: "Safe Aur Quick Mobile Recharge", description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos..." },
                    { title: "Safe Aur Quick Mobile Recharge", description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos..." },
                    { title: "Safe Aur Quick Mobile Recharge", description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos..." },
                ],
            },
        },
         {
            id: "buses",
            label: "Buses",
            icon: "/booking/bus.png",
            data: {
                sliderImages: [
                    { id: 1, url: "/booking/b1.png", alt: "Black Friday travel sale with an airplane on a red and blue background." },
                    { id: 2, url: "/booking/b2.png", alt: 'A woman on vacation with text "Holiday Season!" and "50% Off".' },
                    { id: 3, url: "/booking/b3.png", alt: "A year-end travel promotion banner showing a hand holding a ticket through an airplane window." },
                    { id: 4, url: "/booking/b4.png", alt: "A year-end travel promotion banner showing a hand holding a ticket through an airplane window." },
                ],
                booking: {
                    title: "Book Smart,\nBook Sevenunique",
                    features: [
                        { cardBgImageUrl: "/booking/c1.png", iconUrl: "/booking/i1.png", text: "Best Deals, Best Service\nsirf Sevenunique par", boldWords: [], textColor: "text-white" },
                        { cardBgImageUrl: "/booking/c2.png", iconUrl: "/booking/i2.png", text: "Fast, Easy aur\nReliable Booking", boldWords: ["Reliable"], textColor: "text-white" },
                        { cardBgImageUrl: "/booking/c3.png", iconUrl: "/booking/i3.png", text: "Har Booking Par Trust,\nHar Journey Par Comfort", boldWords: ["Trust,", "Comfort"], textColor: "text-white" },
                        { cardBgImageUrl: "/booking/c4.png", iconUrl: "/booking/i4.png", text: "Sevenunique Jahan Har \nBooking Ho Assured", boldWords: ["Assured"], textColor: "text-white" },
                        { cardBgImageUrl: "/booking/c5.png", iconUrl: "/booking/i5.png", text: "24x7 \nCustomer support", boldWords: ["24x7"], textColor: "text-white" },
                    ],
                },
                aeps: {
                    subheading: "AEPS",
                    heading: "Aadhaar Enabled Payment System",
                    description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et...",
                    features: [
                        "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos...",
                        "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos...",
                    ],
                },
                travel: {
                    title: "Air Travel Assured",
                    cards: [
                        { title: "Upto 150%\nRefund", description: "On Flight Cancellation" },
                        { title: "Upto 100%\nRefund", description: "For Bad Service Experience" },
                        { title: "Upto 100%\nRefund", description: "For Flight Delays" },
                        { title: "Upto 100%\nRefund", description: "If You Change Travel Plans" },
                    ],
                    imageUrl: "/booking/bus1.png",
                },
                info: [
                    { title: "Safe Aur Quick Mobile Recharge", description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos..." },
                    { title: "Safe Aur Quick Mobile Recharge", description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos..." },
                    { title: "Safe Aur Quick Mobile Recharge", description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos..." },
                    { title: "Safe Aur Quick Mobile Recharge", description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos..." },
                    { title: "Safe Aur Quick Mobile Recharge", description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos..." },
                    { title: "Safe Aur Quick Mobile Recharge", description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos..." },
                ],
            },
        },
          ];

    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const activeData = tabs.find((tab) => tab.id === activeTab);

    // Static top-section data
    const data = {
        subheading: 'BUSINESS LOAN',
        heading: 'Apka Business, Hamari Support',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et ',
        bgImage: '/booking/bookingbg.png',
        centerImage: '/booking/book1.png',
    };

    return (
        <>
            {/* Hero Section */}
            <div className="relative flex flex-col md:flex-row items-center justify-between overflow-hidden lg:h-[70vh]">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.bgImage})` }}></div>
                <div className="z-10 mx-auto">
                    {/* Plane Path */}
                    <div className="path-container absolute -left-32 -top-40 -rotate-45 z-40">
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
                                <p className="text-sm font-bold uppercase tracking-widest text-[#0C3D4C]">{data.subheading}</p>
                                <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#0C3D4C] leading-tight">{data.heading}</h2>
                                <p className="mt-4 my-8 text-base text-[#5D5D5D] max-w-md">{data.description}</p>
                                <Link href="/" className="relative inline-block rounded-full border border-[#0C3D4C] p-[2px]">
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

          
            <section>
                <div className="py-5 md:py-0 overflow-visible" style={{ backgroundColor: "#FFE4FE" }}>
                    <div className="max-w-7xl mx-auto px-4 lg:px-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                            <div>
                                <Image src="/booking/book5.png" alt="loan-section" width={400} height={400} />
                            </div>
                            <div className="lg:h-[200px] hidden md:block overflow-hidden lg:overflow-visible relative">
                                <Image src="/booking/book4.png" alt="loan-section" width={500} height={500} className="lg:absolute -right-10 bottom-0 z-20" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tabs Section */}
            <section className="py-16">
                <div className="">
                    {/* Tab Buttons */}
                    <div className="flex gap-8 mb-10 max-w-7xl mx-auto px-4 lg:px-0">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative flex flex-col items-center transition-transform hover:scale-105 ${activeTab === tab.id ? "text-[#018EDE]" : "text-[#0C3D4C]"}`}
                            >
                                <div className={`w-12 h-12 md:w-20 md:h-20 flex items-center justify-center rounded-full ${activeTab === tab.id ? "border-2 border-[#018EDE] shadow-md" : "border border-gray-300"}`}>
                                    <Image src={tab.icon} width={40} height={40} alt={tab.label} className="object-cover" />
                                </div>
                                {activeTab === tab.id && <span className="absolute -bottom-3 w-12 h-[3px] bg-[#018EDE] rounded-full"></span>}
                                <p className="mt-3 text-sm font-medium">{tab.label}</p>
                            </button>
                        ))}
                    </div>

                    {/* Active Tab Content */}
                    <PromotionSlider sliderImages={activeData?.data.sliderImages} />
                    <BookingFeatures title={activeData?.data.booking.title} features={activeData?.data.booking.features} />
                    <BenefitsSection2/>
                    <ServicesSection3 data={activeData?.data.aeps} />

                    {/* Info Sections + Travel Assured */}
                    <section className="mt-10 mb-16">
                        <div>
                            {activeData?.data.info.slice(0, 2).map((item, index) => (
                                <div key={index} className={`bg-[#E6F6FE] rounded-2xl p-5 lg:p-16 max-w-6xl my-10 ${index % 2 === 0 ? "" : "ms-auto"}`}>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#043C5C] mb-4">{item.title}</h2>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>

                        <TravelAssured data={activeData?.data.travel} />

                        <div className="mt-24">
                            {activeData?.data.info.slice(2, 3).map((item, index) => (
                                <div key={index} className={`bg-[#E6F6FE] rounded-2xl p-5 lg:p-16 max-w-5xl my-10 ${index % 2 !== 0 ? "" : "ms-auto"}`}>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#043C5C] mb-4">{item.title}</h2>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </section>


            <PartnersSection/>
            <TestimonialSlider/>
            <ContactBanner/>
        </>
    )
}

export default Page;
