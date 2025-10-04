import Image from 'next/image';
import React from 'react';

const loanFeatures = [
  {
    number: 1,
    text: "Loan Milega Turant, Bilkul Hassle-Free",
  },
  {
    number: 2,
    text: "Paperless and hassle-free process",
  },
  {
    number: 3,
    text: "Safe and trusted platform for your loans",
  },
  {
    number: 4,
    text: "Flexible eligibility and easy documentation",
  },
  {
    number: 5,
    text: "24/7 support for loan assistance",
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
                        <h1 className="text-2xl sm:text-4xl font-bold leading-tight mb-6 text-[#0C3D4C]">
                            Paise Ka Solution, Turant <br className="hidden sm:block" /> SevenUnique Se
                        </h1>
                        <p className="text-gray-500 leading-relaxed mb-8 ">
                            At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus Et At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos
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
