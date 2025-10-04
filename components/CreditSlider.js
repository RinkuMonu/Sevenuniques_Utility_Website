import Image from 'next/image';
import React, { useState } from 'react';

const stepsData = [
  {
    step: 1,
    title: 'Fill Application Form',
    description: 'Start by filling out the credit card application online through the bank\'s website/app or offline at the branch. Provide your basic details such as name, mobile number, email ID, and occupation.',
    image: '/credit/credits1.png',
  },
  {
    step: 2,
    title: 'Submit Documents',
    intro: 'Attach/upload the necessary documents for verification:',
    details: [
      '<strong>Identity Proof</strong> &ndash; Aadhaar, PAN, Passport, or Voter ID',
      '<strong>Address Proof</strong> &ndash; Utility Bill, Driving License, Rent Agreement',
      '<strong>Income Proof</strong> &ndash; Salary Slip, ITR, or Bank Statement',
    ],
    image: '/credit/credits2.png',
  },
  {
    step: 3,
    title: 'Get Approval',
    description: 'Once your documents are verified, the bank will review your application. If everything is in order, you will receive an approval notification, and your new credit card will be dispatched.',
    image: '/credit/credits3.png',
  },
];

const StepSelector = ({ step, title, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full text-left p-4 sm:p-6 border-2 rounded-3xl transition-all duration-300 ease-in-out flex flex-col justify-center align-middle h-full
        ${isActive ? ' border-[#018EDE] shadow-lg text-[#24576C]' : ' border-gray-200 hover:border-blue-300 hover:shadow-md'}
      `}
    >
      <div className="flex flex-col gap-4 sm:gap-6">
        <div
          className={`
            w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-md flex items-center justify-center font-bold text-lg sm:text-xl transition-colors duration-300 
            ${isActive ? 'bg-[#018EDE] border shadow-xl border-[#018EDE] text-white' : ' text-[#0C3D4C] shadow-lg border border-gray-200 '}
          `}
        >
          {step}
        </div>
        <h3 className="text-sm sm:text-lg font-semibold text-[#24576C]">{title}</h3>
      </div>
    </button>
  );
};

export default function App() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="px-4 sm:px-6 lg:px-0 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto w-full">
        <header className="mb-6 sm:mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Simple Steps, Instant Approval
          </h3>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 min-h-[75vh]">
          {/* Left column (buttons) */}
          <div className="col-span-1">
            <div className="flex flex-col gap-4 sm:gap-6 h-full">
              {stepsData.map((stepInfo) => (
                <div className="flex-1" key={stepInfo.step}>
                  <StepSelector
                    step={stepInfo.step}
                    title={stepInfo.title}
                    isActive={activeStep === stepInfo.step}
                    onClick={() => setActiveStep(stepInfo.step)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right column (content) */}
          <div className="col-span-2">
            <div className="relative overflow-hidden rounded-2xl h-full min-h-[300px] sm:min-h-[300px]">
              <div className='bg-gradient-to-t from-[#014D78] to-[#018EDE] px-4  text-white shadow-2xl transition-transform duration-500 ease-in-out h-[600px]'>

              {stepsData.map((item) => (
                <div
                  key={item.step}
                  className="absolute top-0 left-0 w-full h-full "
                  style={{
                    transform: `translateX(${(item.step - activeStep) * 100}%)`,
                    willChange: 'transform',
                  }}
                >
                 <div className='grid grid-cols-1 md:grid-cols-2 '>
                   <div className="  flex justify-center md:justify-start items-end md:items-end mb-4 md:mb-0">
                    {item.image && (
                      <Image
                        width={300}
                        height={300}
                        src={item.image}
                        alt={`Illustration for ${item.title}`}
                        className="absolute bottom-0 sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] object-contain"
                      />
                    )}
                  </div>
                  <div className="flex flex-col m md:mt-0 px-4 lg:px-0">
                    {item.description && (
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-10">
                        {item.description}
                      </p>
                    )}
                    {item.details && (
                      <div className="text-left max-w-md mt-2">
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">{item.intro}</p>
                        <ul className="space-y-2 sm:space-y-3">
                          {item.details.map((detail, index) => (
                            <li key={index} className="flex items-start text-sm sm:text-base md:text-base">
                              <span className="text-blue-200 mr-2 sm:mr-3 mt-1">&#8226;</span>
                              <span dangerouslySetInnerHTML={{ __html: detail }} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                 </div>
                </div>
              ))}
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
