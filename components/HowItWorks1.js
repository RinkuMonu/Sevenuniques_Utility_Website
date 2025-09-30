import Image from 'next/image';
import React from 'react';

const timelineData = [
    {
        stepNumber: 1,
        title: 'Visit an AEPS Agent',
        description: 'The customer visits a local banking correspondent and provides their bank name and Aadhaar number to initiate a transaction.',
        imageUrl: '/aeps/p1.png',
    },
    {
        stepNumber: 2,
        title: 'Enter Transaction Details',
        description: 'The agent enters the transaction type (e.g., withdrawal) and the amount into their micro-ATM device.',
        imageUrl: '/aeps/p2.png',
    },
    {
        stepNumber: 3,
        title: 'Biometric Authentication',
        description: 'To authorize the transaction, the customer securely verifies their identity using their fingerprint on a biometric scanner.',
        imageUrl: '/aeps/p3.png',
    },
    {
        stepNumber: 4,
        title: 'Verification & Authorization',
        description: 'The banking system verifies the details and biometric data in real-time, then authorizes the transaction.',
        imageUrl: '/aeps/p4.png',
    },
    {
        stepNumber: 5,
        title: 'Withdraw Transaction',
        description: 'Once authorized, the agent receives a confirmation and provides the requested cash amount to the customer.',
        imageUrl: '/aeps/p5.png',
    },
];

const TimelineStep = ({ stepNumber, title, description, imageUrl, isReversed, isLast }) => {
    return (
        <div className={`flex flex-col lg:flex-row  gap-6 lg:gap-0`}>
            <div className={` lg:w-5/12 items-start ${isReversed ? 'flex justify-end align-top ' : 'flex justify-start'}`}>
                <Image src={imageUrl} alt={title} width={400} height={400} className="rounded-xl  object-contain" />
            </div>
            <div className="w-full lg:w-2/12 flex lg:flex-col items-center justify-center gap-y-10 lg:gap-y-0">
                <div className="w-12 h-12 flex-shrink-0 bg-slate-800 text-white font-bold text-xl rounded-full flex items-center justify-center z-10">
                    {stepNumber}
                </div>
                {!isLast && (
                    <div className={`hidden lg:block h-64 lg:h-56 w-32 lg:w-auto flex-grow svg1 ${isReversed ? 'lg:-scale-x-100' : ''}`}>
                        <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 250 350"
                            preserveAspectRatio="none"
                            className=""
                        >
                            <path
                                d="M 125 0 Q 300 175, 125 350"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="4"
                                strokeDasharray="2 12"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                )}
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-5/12 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
                <p className="mt-2 text-slate-600">{description}</p>
            </div>

        </div>
    );
};

const HowItWorks1 = () => {
    return (
        <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 mb-20">
                   <div className=''>
                     <h2 className=" text-[#0C3D4C] text-lg font-semibold">
                        How we Works
                    </h2>
                    <p className="text-4xl text-[#0C3D4C] font-bold">
                        Our process is fast, secure, and completely Aadhaar-based
                    </p>
                   </div>
                   <div>
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et 
                    </p>
                   </div>
                </div>

                <div className="flex flex-col gap-y-10 lg:gap-0">
                    {timelineData.map((step, index) => (
                        <TimelineStep
                            key={step.stepNumber}
                            {...step}
                            isReversed={index % 2 !== 0}
                            isLast={index === timelineData.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks1;