import Image from 'next/image';
import React from 'react';

const loanFeatures = [
  {
    number: 1,
    text: "Get immediate approval and fast disbursement with minimum paperwork.",
  },
  {
    number: 2,
    text: "Hassle-Free and Paperless Process.",
  },
  {
    number: 3,
    text: "Apply online with no paperwork.",
  },
  {
    number: 4,
    text: "Safe and Trusted Platform",
  },
  {
    number: 5,
    text: "Your information and finances are secured at a bank level.",
  },
];


const FeatureCard = ({ number, text }) => (
    <div className="flex items-center p-5 space-x-4 bg-[#e0f2ff] shadow-sm w-full ">
        <div className="flex items-center justify-center w-12 h-12 text-3xl font-semibold text-[#0C3D4C] bg-white  ">
            {number}
        </div>
        <p className="text-[#0C3D4C] text-lg font-semibold">{text}</p>
    </div>
);


const LoanStep = () => {
    return (
        <div className="  px-4 lg:px-0 pt-16 pb-20">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="">
                        <h3 className="text-2xl sm:text-4xl font-bold leading-tight mb-6 text-[#0C3D4C]">
                            Paise Ka Solution, Turant <br className="hidden sm:block" /> SevenUnique Se
                        </h3>
                        <p className="text-gray-500 leading-relaxed mb-8 ">
                            SevenUnique provides instant loans for all your requirements. It is easy and easygoing to borrow money through our fast, safe, and paperless system. Between application and approval, have experience banking your way.
                        </p>
                      <Image src="/loan/loan5.png" className="object-cover w-full lg:pe-4" width={400} height={400} alt='' />
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col items-start space-y-4">
                       {loanFeatures.map(feature => (
                           <FeatureCard key={feature.number} number={feature.number} text={feature.text} />
                       ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoanStep;
