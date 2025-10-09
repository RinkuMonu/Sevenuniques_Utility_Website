import Image from 'next/image';
import React from 'react';

const timelineData = [
    {
        stepNumber: 1,
        title: 'Visit an AePS Agent',
        description: 'The customer goes to a local banking Agent that provides the AePS services. To initiate the transaction process, they give their bank name and Aadhaar number.',
        imageUrl: '/aeps/p1.png',
    },
    {
        stepNumber: 2,
        title: 'Enter Transaction Details',
        description: 'The user inserts the type of transaction (withdrawal) and the amount in his micro-ATM machine to initiate the transaction.',
        imageUrl: '/aeps/p2.png',
    },
    {
        stepNumber: 3,
        title: 'Biometric Authentication',
        description: 'The customer will check who he is by scanning his finger on a biometric scanner, and this will assure a secure and authorized transaction.',
        imageUrl: '/aeps/p3.png',
    },
    {
        stepNumber: 4,
        title: 'Checking/Approving',
        description: 'The real-time verification of the details and biometric data by the banking system authenticates the transaction and authorizes the transaction.',
        imageUrl: '/aeps/p4.png',
    },
    {
        stepNumber: 5,
        title: 'Withdraw Transaction',
        description: 'After approving the transaction, the agent is informed, and the desired sum is given to the customer, and this is where the process is completed.',
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

<div className="text-center pb-10 pt-6">
      <p className="text-2xl font-semibold text-[#24576C] tracking-widest uppercase">
        HOW DOES AEPS WORKS ?
      </p>
      {/* <h3 className="mt-2 text-4xl font-bold text-[#175369] pb-10">
       Aadhaar Enabled Payment System works ?
      </h3> */}
      </div>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 mb-20">
                    <div className=''>
                        <h2 className=" text-[#0C3D4C] text-lg font-semibold">
                            How AePS Works
                        </h2>
                        <p className="text-4xl text-[#0C3D4C] font-bold">
                            Banking Made Simple using Aadhaar—Safe, Fast, and Easy.
                        </p>
                    </div>
                    <div>
                        <p>
                            AePS brings the much-needed banking services to your community with a well-thought-out 5-step process that encompasses your Aadhaar identity and biometric fingerprint recognition, which provides not only full security but also unmatched convenience to all users.
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