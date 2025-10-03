import Image from 'next/image';
import React from 'react';
const InfoCard = ({ title, description }) => {
    return (
 <div
  className={`group p-8 rounded-3xl flex flex-col justify-between h-full bg-white text-[#24576C] 
  hover:bg-[#018EDE] hover:text-white hover:scale-105 shadow-lg border border-gray-300
  transition-all duration-300 ease-in-out`}
>
  <div>
    <h3 className="font-bold text-2xl mb-4">{title}</h3>
    <p className={`text-sm leading-relaxed mb-8`}>
      {description}
    </p>
  </div>

  <button
    className={`border font-bold py-3 px-8 rounded-full text-[#018EDE] border-[#018EDE] 
    group-hover:text-white group-hover:border-white transition-colors duration-300`}
  >
    Details
  </button>
</div>

    );
};

// Main App component
export default function CreditChoice() {
    const cardData = [
        {
            title: 'Credit Card Offers',
            description: 'At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At',
            isHighlighted: false,
        },
        {
            title: 'Pre-Approved Credit Card',
            description: 'At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At',
            isHighlighted: true,
        },
        {
            title: 'ICICI Bank Culinary Treats',
            description: 'At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At',
            isHighlighted: false,
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:p-6 lg:px-0">
                 <h3 className="text-2xl lg:text-4xl pb-10 font-bold text-[#0C3D4C]">
            Simple Steps, Instant Approval
          </h3>
            <div className="bg-white rounded-3xl w-full overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                    <div className="lg:col-span-3 lg:flex justify-end hidden ">
                        <Image
                        width={400}
                        height={400}
                            src="/credit/creditcard.png"
                            alt="Credit Cards"
                            className="w-full max-w-sm max-h-96 scale-105 mt-3"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-9 z-1">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {cardData.map((card, index) => (
                                <InfoCard
                                    key={index}
                                    title={card.title}
                                    description={card.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
