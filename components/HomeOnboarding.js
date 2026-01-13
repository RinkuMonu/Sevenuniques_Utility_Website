"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Slider from 'react-slick';

// const sliderImages = [
//     '/banner/bcenter1.png', '/banner/bcenter2.png', '/banner/bcenter3.png', '/banner/bcenter4.png',
// ];


const onboardingData = {
    User: {
        image: [
            '/home/user13d.png', '/home/user23d.png', '/home/user33d.png', '/home/user43d.png',
        ],
        steps: [
            { id: 1, title: 'Download App', description: 'Install the Finunique app in a few seconds in either the Play Store or the App Store.' },
            { id: 2, title: 'Create Account', description: ' The only thing that you need to do is to create your account using just your mobile number, and that is it.' },
            { id: 3, title: 'Link Bank Account', description: 'Link your bank account without any risk and start experiencing hassle-free transactions.' },
            { id: 4, title: 'Start Transacting', description: 'Pay bills, transfer money, and recharge easily, simply by using one application.' },
        ],
    },
    Retailer: {
        image: [
            '/home/ret1.png', '/home/ret2.png', '/home/ret3.png', '/home/ret4.png',
        ],
        steps: [
            { id: 1, title: 'Easy Sign-up', description: 'Join our network in a very simple and smooth mobile-friendly system.' },
            { id: 2, title: 'Instant Verification', description: 'Check yourself with your distributor and have it all on demand.' },
            { id: 3, title: 'Load Wallet', description: ' Always keep the stuff in your wallet and be ready to serve your customers.' },
            { id: 4, title: 'Serve & Earn', description: 'Offer services like bill payment, AEPS, DMT, etc. growing your revenues each day.' },
        ],
    },
    Distributor: {
        image: [
            '/home/dis3d1.png', '/home/dis3d3.png', '/home/dis3d2.png', '/home/dis3d4.png',
        ],
        steps: [
            { id: 1, title: 'Register Online', description: 'Sign up in a few minutes through our easy-to-use and safe distributor portal.' },
            { id: 2, title: 'Complete KYC', description: ' It is easy to access your identity by simply confirming who you are through our fast system.' },
            { id: 3, title: 'Add Funds', description: 'Pay conveniently using a wide range of secure payment options.' },
            { id: 4, title: 'Start Transacting', description: 'Offer an extensive range of services to your clients and start to make commissions right away.' },
        ],
    },
    WhiteLabel: {
        image: [
            '/home/dis1.png', '/home/dis2.png', '/home/dis3.png', '/home/dis4.png',
        ],
        steps: [
            { id: 1, title: 'Initial Consultation', description: 'A dedicated Finunique representative connects with the client to understand their goals and explain the overall process.' },
            { id: 2, title: 'Requirement Analysis & Panel Demo', description: 'Client requirements are carefully analyzed, followed by a complete demonstration of the WhiteLabel panel and its features.' },
            { id: 3, title: 'Documentation & Compliance', description: 'All required documents and agreements are collected and verified to ensure a smooth onboarding process.' },
            { id: 4, title: 'Payment & Service Activation', description: 'After successful payment, the WhiteLabel solution is activated and the client is fully onboarded.' },
        ],
    },


};

const tabs = Object.keys(onboardingData);

const StepCard = ({ number, title, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-[0px_4px_24px_0px_#0000001A] relative w-full max-w-sm">
        <div className="absolute -top-4 -right-4 bg-[#0C3D4C] shadow-[-8px_7px_4px_2px_#00000026] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
            {number}
        </div>
        <h3 className="font-bold text-xl mb-2 text-[#0C3D4C]">{title}</h3>
        <p className="text-gray-500 mb-4">{description}</p>
        {/* <Link href="/" className="bg-[#24576C] hover:bg-[#24576C]/90 text-white font-semibold py-2 px-5 rounded-2xl transition-colors duration-300">
            Read More
        </Link> */}
    </div>
);

const HomeOnboarding = () => {
    const [activeTab, setActiveTab] = useState('User');
    const activeData = onboardingData[activeTab];

    return (
        <div className="py-10">
            <div className="max-w-7xl mx-auto px-4 ">

                {/* Header Text Section */}
                <p className="text-sm font-semibold text-[#24576C] tracking-widest uppercase text-center">PRODUCT & ONBOARDING</p>
                <h3 className="mt-2 text-4xl md:text-4xl font-bold text-[#0C3D4C] text-center">
                    Integration, infinite possibilities, and onboarding.
                </h3>

                {/* Tabs Section */}
                <div className="my-10 flex justify-center items-center gap-2 md:gap-4">
                    {tabs.map((tab) => (
                        <div
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-2 px-3 md:px-6 rounded-md w-50 text-center cursor-pointer font-semibold text-lg transition-all duration-300 ${activeTab === tab
                                ? 'bg-[#3080A6] text-white shadow-md'
                                : 'bg-white text-[#0C3D4C]  hover:bg-gray-100'
                                }`}
                        >
                            {tab}
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-gray-100 rounded-xl">

                    {/* ===== Left Side : All Steps ===== */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:ml-8">
  {activeData.steps.map((step) => (
    <StepCard
      key={step.id}
      number={step.id}
      title={step.title}
      description={step.description}
    />
  ))}
</div>


                    {/* ===== Right Side : Mobile Image / Slider ===== */}
                    <div className="flex justify-center">
                        <div
                            className="relative w-full max-w-md h-[480px] bg-center bg-no-repeat bg-contain flex  justify-center">
                            <div className="w-full max-w-xs mt-14">
                                <Slider
                                   
                                    infinite
                                    speed={700}
                                    autoplay
                                    slidesToShow={1}
                                    slidesToScroll={1}
                                    arrows={false}
                                    fade
                                >
                                    {activeData.image.map((img, index) => (
                                        <div key={index} className="flex justify-center">
                                            <Image
                                                src={img}
                                                alt={`slide-${index}`}
                                                width={300}
                                                height={600}
                                                className="object-contain"
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default HomeOnboarding;

