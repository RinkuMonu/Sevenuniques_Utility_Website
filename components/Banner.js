"use client"

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import BannerCTA from './BannerCTA';
import BannerTestimonial from './BannerTestimonial';
import BannerActivities from './BannerActivities';

// Slide data with all related info
const slides = [
    {
        id: 1,
        subheading: 'DMT',
        heading: "Aapka Paisa, Aapke Apno Tak, Seedha!",
        centerImage: '/banner/bcenter1.png',
        bgImage: '/banner/bbg1.png',
        cta: {
            title: 'Send Money Easily',
            description: 'Quickly transfer funds to your loved ones anytime, anywhere.',
        },
        reviewers: [
            { id: 3, name: 'Jane Smith', imageUrl: '/banner/bt1.jpg' },
            { id: 4, name: 'Ken Williams', imageUrl: '/banner/bt2.jpg' },
            { id: 1, name: 'Jane Smith', imageUrl: '/banner/bt3.jpg' },
            { id: 2, name: 'Ken Williams', imageUrl: '/banner/bt4.jpg' },
        ],
        reviewData: {
            rating: 4.5,
            maxRating: 5,
            text: 'Excellent service and fast transactions!',
        },
        activities: [
            {
                id: 1,
                name: 'Kailash Choudhary',
                date: '21 Jun 2025 - 12.00 PM',
                amount: '1,500',
                currency: '₹',
                imageUrl: '/image/p1.jpg',
            }, {
                id: 4,
                name: 'Raju Gurjar',
                date: '23 Jul 2025 - 4.00 PM',
                amount: '1,200',
                currency: '₹',
                imageUrl: '/image/p2.jpg',
            }, {
                id: 5,
                name: 'Ramesh Jat',
                date: '2 Jun 2025 - 4.00 PM',
                amount: '1,760',
                currency: '₹',
                imageUrl: '/image/p3.jpg',
            },
        ],
    },
    {
        id: 2,
        subheading: 'AEPS',
        heading:" Aadhaar se Banking, Har Jagah Possible!",
        centerImage: '/banner/bcenter2.png',
        bgImage: '/banner/bbg2.png',
        cta: {
            title: 'One App for Everything',
            description: 'Pay bills, recharge phones, and manage payments seamlessly.',
        },
        reviewers: [
            { id: 3, name: 'Jane Smith', imageUrl: '/banner/bt1.jpg' },
            { id: 4, name: 'Ken Williams', imageUrl: '/banner/bt2.jpg' },
            { id: 1, name: 'Jane Smith', imageUrl: '/banner/bt3.jpg' },
            { id: 2, name: 'Ken Williams', imageUrl: '/banner/bt4.jpg' },
        ],
        reviewData: {
            rating: 4.0,
            maxRating: 5,
            text: 'Convenient and easy to use!',
        },
        activities: [
            {
                id: 2,
                name: 'RadheyShyam Kumar',
                date: '22 Aug 2025 - 2.00 PM',
                amount: '2,000',
                currency: '₹',
                imageUrl: '/image/p5.jpg',
            },
            {
                id: 4,
                name: 'Raghu Sharma',
                date: '7 Sept 2025 - 7.50 PM',
                amount: '1,475',
                currency: '₹',
                imageUrl: '/image/p6.jpg',
            },
            {
                id: 5,
                name: 'Mahendra',
                date: '17 Aug 2025 - 3.00 PM',
                amount: '1,200',
                currency: '₹',
                imageUrl: '/image/p11.jpg',
            },
        ],
    },
    {
        id: 3,
        subheading: 'M-ATM',
        heading:"Chhoti Machine, Badi Banking Suvidha!",
        centerImage: '/banner/bcenter3.png',
        bgImage: '/banner/bbg3.png',
        cta: {
            title: 'Safe & Secure',
            description: 'Your money is protected with industry-standard security measures.',
        },
        reviewers: [
         { id: 3, name: 'Jane Smith', imageUrl: '/banner/bt1.jpg' },
            { id: 4, name: 'Ken Williams', imageUrl: '/banner/bt2.jpg' },
            { id: 1, name: 'Jane Smith', imageUrl: '/banner/bt3.jpg' },
            { id: 2, name: 'Ken Williams', imageUrl: '/banner/bt4.jpg' },
        ],
        reviewData: {
            rating: 4.8,
            maxRating: 5,
            text: 'I feel confident sending money here!',
        },
        activities: [
            {
                id: 3,
                name: 'Bhupendra',
                date: '23 Jun 2025 - 4.43 PM',
                amount: '700',
                currency: '₹',
                imageUrl: '/image/p7.jpg',
            }, {
                id: 4,
                name: 'Suresh',
                date: '3 Jul 2025 - 6.17 PM',
                amount: '5500',
                currency: '₹',
                imageUrl: '/image/p8.jpg',
            }, {
                id: 5,
                name: 'Shankar',
                date: '19 Sept 2025 - 12.56 PM',
                amount: '1,800',
                currency: '₹',
                imageUrl: '/image/p9.jpg',
            },
        ],
    },
    {
        id: 4,
        subheading: 'BBPS',
        heading: "Har Bill, Har Payment, BBPS ke Saath!",
        centerImage: '/banner/bcenter4.png',
        bgImage: '/banner/bbg4.png',
        cta: {
            title: 'Safe & Secure',
            description: 'Your money is protected with industry-standard security measures.',
        },
        reviewers: [
         { id: 3, name: 'Jane Smith', imageUrl: '/banner/bt1.jpg' },
            { id: 4, name: 'Ken Williams', imageUrl: '/banner/bt2.jpg' },
            { id: 1, name: 'Jane Smith', imageUrl: '/banner/bt3.jpg' },
            { id: 2, name: 'Ken Williams', imageUrl: '/banner/bt4.jpg' },
        ],
        reviewData: {
            rating: 4.8,
            maxRating: 5,
            text: 'I feel confident sending money here!',
        },
        activities: [
            {
                id: 3,
                name: 'Hariom',
                date: '15 Jul 2025 - 1.34 PM',
                amount: '2600',
                currency: '₹',
                imageUrl: '/image/p10.jpg',
            },
            {
                id: 4,
                name: 'Devendra',
                date: '13 Aug 2025 - 2.30 PM',
                amount: '200',
                currency: '₹',
                imageUrl: '/image/p1.jpg',
            }, {
                id: 5,
                name: 'Keshav',
                date: '23 Jun 2022 - 4.00 PM',
                amount: '1,200',
                currency: '₹',
                imageUrl: '/image/p2.jpg',
            },
        ],
    },
];

const Banner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipe: true,
        pauseOnHover: false,
    };

    return (
        <div className=" ">
            <div className="w-full">
                <Slider {...settings}>
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className="relative flex flex-col md:flex-row items-center justify-between md:h-auto  text-center pt-10 md:pt-5"
                        >

                            <div
                                className="absolute inset-0 bg-cover bg-center md:h-[110vh]"
                                style={{ backgroundImage: `url(${slide.bgImage})` }}
                            ></div>



                            <div className="relative z-10 px-4 md:px-10 mx-auto">
                                <div className=" flex flex-col items-center justify-center">
                                    <p className="text-lg font-semibold tracking-widest text-[#0C3D4C] uppercase">
                                        {slide.subheading}
                                    </p>
                                    <h1 className="mt-1 text-2xl md:text-5xl font-bold text-[#0C3D4C] leading-tight md:max-w-xl">
                                        {slide.heading}
                                    </h1>
                                </div>
                                <div className='flex flex-col md:flex-row items-center justify-between w-full space-y-6 md:space-y-0'>

                                    <div className="w-full lg:w-1/3 hidden lg:flex justify-center">
                                        {slide.activities && <BannerActivities activities={slide.activities} />}
                                    </div>


                                    <div className="w-full md:w-1/2 lg:w-1/3  flex justify-center items-end">
                                        {slide.centerImage && (
                                            <Image
                                                src={slide.centerImage}
                                                height={500}
                                                width={500}
                                                alt="center image"
                                                className={`md:pt-4 pt-16 object-cover 
                                                ${slide.id === 3 ? "scale-105" : ""} 
                                                ${slide.id === 4 ? "md:pe-5" : ""}`}
                                            />

                                        )}
                                    </div>

                                    <div className="w-full md:w-1/2 lg:w-1/3  hidden md:flex flex-col justify-between items-center space-y-8">
                                        {slide.cta && <BannerCTA title={slide.cta.title} description={slide.cta.description} />}
                                        {slide.reviewers && slide.reviewData && (
                                            <BannerTestimonial reviewers={slide.reviewers} reviewData={slide.reviewData} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Banner;
