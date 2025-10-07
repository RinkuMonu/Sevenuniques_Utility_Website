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
                    heading: "Flying Becomes Easy, with SevenUnique.",
                    description: "With SevenUnique, you can easily book your flights. We guarantee that your every journey is hassle-free and quick, whether your trips are domestic or international. ",
                    features: [
                        "Flights are just a few clicks away - search, select, and book the flights when you want. Get booked immediately, and fly without worries in a simple and hassle-free trip.",
                        "Travel smarter, with flexible options, real-time support, and reliable services with SevenUnique. Plan your escape, whether it is a business trip or a holiday, and trust that you will have an easy and confident journey ",
                    ],
                },
                travel: {
                    title: "Air Travel Assured",
                    cards: [
                        { title: "Booking Confirmation", description: "Book your tickets over the Internet with superior protection, no lines, no hassles." },
                        { title: "Flexible Rescheduling", description: "Changing your plans is simple, with no additional hassle, no nonrefundable fees. Best Price Guarantee" },
                        { title: "24/7 Customer Support", description: " Worry-free travel we provide you 24/7 Customer Support" },
                        { title: "Safe & Secure Payments", description: "Make bookings at the convenience of online secure payment." },
                    ],
                    imageUrl: "/booking/air1.png",
                },
                info: [
                    {
                        title: "Book Today, Fly Tomorrow",
                        description: [
                            "You have never had it easier planning your next trip. With SevenUnique, book flights instantly and receive confirmed tickets within minutes. Travel stress-free and enjoy your ride, whether it’s a business trip or a vacation.",
                            "We provide secure and fast booking, whether you’re on mobile or desktop. Search flights, compare fares, and choose the most convenient timings in just a few steps.",
                            "As a company that provides quality services and immediate response, SevenUnique ensures that your traveling process is stress-free throughout. Your journey with us is easy and comfortable, whenever you fly."
                        ]
                    },
                    {
                        title: "Fast and easy booking of flights.", description: [

                            "SevenUnique saves you a few clicks to book your flights. Local or overseas, experience immediate assurance and commute without any tension.",
                            "We identify, assess, and choose the best options as per your availability and budget. We offer a platform that promises easy booking, secure payment, and excellent support anytime, anywhere.",
                            "Experience quick, secure, and effortless travel with SevenUnique. Travel in style, and every trip is a trip worth a lifetime memory.",
                        ]
                    },
                    {
                        title: "Book your Flights Instantly", description: [

                            "SevenUnique allows you to book your flights within a few clicks. Local or global, find out immediately and relax.",
                            "Compare the airlines, select the most appropriate timings and fares, and pay online safely. The process of booking is easy, fast, and convenient with us at any time and any place.",
                            "While traveling with SevenUnique, there is no hassle at the beginning and end of the trip. Fly away with comfort, ease, and tranquility.",
                        ]
                    },

                ],
            },
        },
        {
            id: "hotels",
            label: "Hotals",
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
                    subheading: "HOTAL BOOKING",
                    heading: "Turant Confirmation, Aasaan Booking.",
                    description: "It has never been so easy to book your hotel stay. While booking with SevenUnique, one can search, compare, and book a room just by clicking a few times. From budget rooms to luxurious suites, we make booking a smooth and easy process for travelers.",
                    features: [
                        "All our reservations are instantly confirmed. You do not have to wait until email arrives or fear about the hotel being overbooked. You can arrange your travel at your own time because of flexible check-in and check-out, which will provide you with the maximum freedom.",
                        "We also provide the best deals and 24/7 customer service. Compare various hotels, get competitive prices, and be sure that our team is always at your service. Travel without the worry that you have a place to stay and be with you throughout the journey   .",
                    ],
                },
                travel: {
                    title: "Hotel Stay Assured",
                    cards: [
                        { title: "Instant Confirmation", description: " Book a hotel immediately and avoid waiting, no doubt." },
                        { title: "Flexible Cancellation", description: "Book or cancel or make changes to your stay in minutes, and have refunds within hours according to the policy." },
                        { title: "Best Price Guarantee", description: "Book and be sure that you are getting the best rates at your selected hotel." },
                        { title: "24/7 Customer Support", description: " You can always contact our group to help with booking problems or amendments." },
                    ],
                    imageUrl: "/booking/hotel1.png",
                },
                info: [
                    {
                        title: "Fast and easy hotel reservation", description: [
                            "Reserve a hotel in real time with SevenUnique. Whether it is a budget accommodation or luxury suites, search and book the ideal accommodation in a few clicks.",
                            "Book at several hotels, compare prices, and make the final decision in the shortest time possible. Make a booking in a secure, comfortable, and convenient way at any time and place.",
                            "Travel worry free and make your stay worry free with 24/7 support and flexibility in the check-in/check-out."
                        ]
                    },

                    {
                        title: "Your Perfect Stay, Just a Click Away",
                        description:
                            ["Booking a hotel has never been easier. With SevenUnique, you can find the ideal room in seconds whether it’s a cozy budget option or a luxurious suite.",
                                "Compare deals, choose your favorite, and get instant confirmation. Enjoy hassle-free payments, flexible check-in and check-out, and worry-free reservations.",
                                "Our friendly 24/7 support team ensures your trip is smooth, relaxing, and memorable from start to finish.",
                            ]

                    },
                    {
                        title: "Fast and stress-free hotel reservation.", description: [
                            " Reserve your hotel within a few clicks with SevenUnique. Whether it is budget accommodations or luxury suites, book the best accommodation to enjoy your trip immediately.",
                            "Check and compare hotels, select the most attractive deals, and receive confirmation. Have a comfortable, safe, and convenient booking process anywhere, anytime.",
                            "Travel without stress and make it a comfortable and stress-free stay with flexible check-in /check-out schedules and 24/7 customer care."

                        ]
                    },
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
                    subheading: "TRAINS BOOKING",
                    heading: "Turant Confirmation, Aasaan Booking.",
                    description: "With SevenUnique, booking your train tickets has become a simple affair. Local trains or long-distance trains: discover the best routes and seats in the shortest time possible with a few clicks.",
                    features: [
                        "Travel when you want and choose your coach to suit your schedule. Real-time confirmations make you travel without worries and on time.",
                        "Compare trains, best fares, and 24/7 customer support. You can travel without worrying that you will never see a face because help will always be there when you need it.",
                    ],
                },
                travel: {
                    title: "Train Travel Assured",
                    cards: [
                        { title: "Instant Confirmation", description: "Confirm your train tickets instantly no waiting, no uncertainty." },
                        { title: "Flexible Cancellation", description: " Easy cancellation or modification of booking and prompt refunds according to policy." },
                        { title: "On-Time Travel Guarantee", description: "We make certain to provide the schedule and train delays in time to have a smooth ride." },
                        { title: "24/7 Customer Support", description: "Our team will never fail to help you in case of any booking changes or travelling issues." },
                    ],
                    imageUrl: "/booking/train1.png",
                },
                info: [
                    { title: "Fast and Convenient Train ticket booking.", description:
                        [
                            "Book tickets instantly with SevenUnique. Whether it is a regional trip or long-distance travel, book your seat within a few clicks.",
                            "Compare trains, select the most suitable coach, and receive instant confirmation. Book smoothly, safely, and conveniently anywhere around the clock.",
                            "Flexible travel dates, 24/7 customer support, plan your trip without any stress, and travel with confidence."
                        ]
                        },
                    { title: "Fast & Reliable Train Tickets", 
                        description: [
                            "Make your train reservations fast with SevenUnique. Select among all the existing trains, classes, and times that will best fit your plans.",
                            "Get real-time seat availability, and bookings are confirmed. The waiting time is now over, and there is no doubt that your travel is booked in a few clicks.",
                            "Flexible cancellations, best fare offers, and 24/7 customer service. Always travel with confidence, stress-free, and smart enough whenever you get to the tracks."
                        ]

                     },
                    { title: "Fast & Easy Train Booking", 
                        description:[
                             "SevenUnique allows you to book your train tickets in a few clicks. Whether it is a local train or a long-distance ride, reserve your seat immediately.",
                             "Compare trains, choose a coach of your choice and timing, and get immediate confirmation to have a hassle-free ride",
                             "Bring your own dates, cancel without any difficulties, and with 24/7 customer service, you can plan your trip and travel without any worries.",
                            
                        ]},
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
                    subheading: "BUS BOOKING",
                    heading: "Turant Confirmation, Aasaan Booking.",
                    description: "Get your bus tickets with SevenUnique. From local routes to intercity travels, book your seat within a few clicks and travel without any hassles. Travel When You Want To",
                    features: [
                        "Enjoy the opportunity to travel at your time and in the seat or coach of your choice. Schedule your trip with quick bookings that will give you confidence in your travels.",
                        "Get real-time seat availability, and bookings are confirmed. The waiting time is now over, and there is no doubt that your travel is booked in a few clicks.",
                    ],
                },
                travel: {
                    title: "Bus Travel Guaranteed",
                    cards: [
                        { title: "Instant Confirmation", description: "Instantly confirm your bus tickets with no waiting or second-guessing." },
                        { title: "Adaptable Cancellation", description: "Instead of rescheduling, bookings can be canceled with simple refunds issued back through the app within the week." },
                        { title: "On-time Transit Alerts", description: "Real-time routing of bus schedules will be easily available to help you maximize your time." },
                        { title: "Prioritize Customer Support", description: "Staff is available at any hour of the day to assist you with booking changes or travel issues." },
                    ],
                    imageUrl: "/booking/bus1.png",
                },
                info: [
                    { title: "The Right Price, Always Here For You", description: "Compare buses, get offered the greatest price, and count on us 24/7 for customer care. Enjoy the freedom of travel knowing we are there to support you anytime." },
                    { title: "Fast & Hassle-Free Bus Booking", 
                        description: [
                            "SevenUnique provides the quickest experience with your bus booking. Reserve your bus tickets quickly and easily. If you are booking a local route or intercity travel, your tickets can be bought in 3-clicks or less, and travel without the stress of long wait times.",
                            "Compare buses, select your ideal premium seat and time, and receive immediate confirmation for your bus ticket. Enjoy personalized, convenient bus booking no matter where you go.",
                            "Plan your trip with confidence, and travel easily with flexible cancellations, easy refunds, and 24/7 customer care."
                        
                        ]},
                    { title: "Your Journey, Our Priority",
                         description: [
                            "At any time you travel, SevenUnique is there to get you there. Book your bus ticket now ,so that you can sit back and enjoy the ride, whether it is local or an intercity trip you'll stay relaxed on your journey.",
                            "Choose from several bus companies, select your seat and time of departure, and receive an instant confirmation to help provide you a pleasurable journey.",
                            "Flexible cancellations, secure payment processing, and customer support 24/7, all add to the comfort, peace of mind and stress-free travel that a SevenUnique traveler is accustomed to!"
                ]},
                ],
            },
        },
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const activeData = tabs.find((tab) => tab.id === activeTab);

    // Static top-section data
    const data = {
        subheading: 'BUSINESS LOAN',
        heading: 'Apka Safar, Hamara Support',
        description: 'Book your flights, hotels, trains, or buses easily and travel without worries, plan smart, and have fun throughout  your journey.',
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
                    <BenefitsSection2 />
                    <ServicesSection3 data={activeData?.data.aeps} />

                    {/* Info Sections + Travel Assured */}
                    <section className="mt-10 mb-16">
                        <div>
                            {activeData?.data.info.slice(0, 2).map((item, index) => (
                                <div
                                    key={index}
                                    className={`bg-[#E6F6FE] rounded-2xl p-5 lg:p-16 max-w-6xl my-10 ${index % 2 === 0 ? "" : "ms-auto"
                                        }`}
                                >
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#043C5C] mb-4">
                                        {item.title}
                                    </h2>

                                    {Array.isArray(item.description) ? (
                                        item.description.map((para, i) => (
                                            <p key={i} className="text-gray-600 leading-relaxed mb-4">
                                                {para}
                                            </p>
                                        ))
                                    ) : (
                                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                    )}
                                </div>
                            ))}

                        </div>

                        <TravelAssured data={activeData?.data.travel} />

                        <div className="mt-24">
                            {activeData?.data.info.slice(2, 6).map((item, index) => (
                                <div
                                    key={index}
                                    className={`bg-[#E6F6FE] rounded-2xl p-5 lg:p-16 max-w-5xl my-10 ${index % 2 !== 0 ? "" : "ms-auto"
                                        }`}
                                >
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#043C5C] mb-4">
                                        {item.title}
                                    </h2>

                                    {Array.isArray(item.description) ? (
                                        item.description.map((para, i) => (
                                            <p key={i} className="text-gray-600 leading-relaxed mb-4">
                                                {para}
                                            </p>
                                        ))
                                    ) : (
                                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>

                    </section>
                </div>
            </section>


            <PartnersSection />
            <TestimonialSlider />
            <ContactBanner />
        </>
    )
}

export default Page;
