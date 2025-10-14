"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Slider from 'react-slick';

// const sliderImages = [
//     '/banner/bcenter1.png', '/banner/bcenter2.png', '/banner/bcenter3.png', '/banner/bcenter4.png',
// ];


const onboardingData = {
        User: {
        image:[
    '/home/user1.png', '/home/user2.png', '/home/user3.png', '/home/user4.png',
],
        steps: [
            { id: 1, title: 'Download App', description: 'Install the Sevenunique app in a few seconds in either the Play Store or the App Store.' },
            { id: 2, title: 'Create Account', description: ' The only thing that you need to do is to create your account using just your mobile number, and that is it.' },
            { id: 3, title: 'Link Bank Account', description: 'Link your bank account without any risk and start experiencing hassle-free transactions.' },
            { id: 4, title: 'Start Transacting', description: ' Pay bills, transfer money, and recharge easily, simply by using one application.' },
        ],
    },
        Retailer: {
        image:[
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
    '/home/dis1.png', '/home/dis2.png', '/home/dis3.png', '/home/dis4.png',
],
        steps: [
            { id: 1, title: 'Register Online', description: 'Sign up in a few minutes through our easy-to-use and safe distributor portal.' },
            { id: 2, title: 'Complete KYC', description: ' It is easy to access your identity by simply confirming who you are through our fast system.' },
            { id: 3, title: 'Add Funds', description: 'Pay conveniently using a wide range of secure payment options.' },
            { id: 4, title: 'Start Transacting', description: 'Offer an extensive range of services to your clients and start to make commissions right away.' },
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
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-2 px-3 md:px-6 rounded-full font-semibold text-lg transition-all duration-300 ${activeTab === tab
                                ? 'bg-[#3080A6] text-white shadow-md'
                                : 'bg-white text-[#0C3D4C] border border-[#3080A6] hover:bg-gray-100'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-4">
                    {/* Left Column Steps */}
                    <div className="flex flex-col gap-8 items-center lg:items-end">
                        <StepCard number={activeData.steps[0].id} title={activeData.steps[0].title} description={activeData.steps[0].description} />
                        <StepCard number={activeData.steps[1].id} title={activeData.steps[1].title} description={activeData.steps[1].description} />
                    </div>

                    {/* Center Column Image */}
                    <div>
                        <div
                            className="relative w-full h-[450px]  bg-center bg-no-repeat bg-cover hidden lg:flex items-center justify-center  "
                            style={{ backgroundImage: `url('/home/mobilebg.png')` }}
                        >
                            <div className="w-full max-w-4xl mt-40 ">
                                <Slider
                                    dots={true}
                                    infinite={true}
                                    speed={800}
                                    autoplay={true}
                                    slidesToShow={1}
                                    slidesToScroll={1}
                                    arrows={true}
                                    slide={false}
                                    fade={true}
                                >
                                    {activeData.image.map((img, index) => (
                                        <div key={index} className="mt-10 ">
                                            <img
                                                src={img}
                                                alt={`slide-${index}`}
                                                className="max-w-[250px] h-full  mx-auto flex items-baseline align-bottom justify-baseline "
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>

                    </div>

                    {/* Right Column Steps */}
                    <div className="flex flex-col gap-8 items-center lg:items-start">
                        <StepCard number={activeData.steps[2].id} title={activeData.steps[2].title} description={activeData.steps[2].description} />
                        <StepCard number={activeData.steps[3].id} title={activeData.steps[3].title} description={activeData.steps[3].description} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeOnboarding;

