import React from 'react';

// You can move this data to a separate file or fetch it from an API
const processSteps = [
  {
    step: 1,
    title: 'NDA Signing',
    description: 'The identity is required to sign a Non-Disclosure Agreement (NDA) before the onboarding process.',
    eta: '1 day',
  },
  {
    step: 2,
    title: 'Draft Agreement',
    description: 'The entity views the draft agreement provided and gives comments or recommendations on how to make amendments.',
    eta: '2 days',
  },
  {
    step: 3,
    title: 'Agreement Sign-Off',
    description: 'The agreement is signed by authorized representatives of both the parties and formally formalizes the partnership.',
    eta: '2 days',
  },
  {
    step: 4,
    title: 'Service Integration',
    description: ' Test and technically integrate the PAN Redirection Service so as to facilitate smooth functionality.',
    eta: '3 days',
  },
  {
    step: 5,
    title: 'Launch Of The Service',
    description: 'Formal introduction of the PAN Redirection Service, and it is live and accessible to users.',
    eta: '3 days',
  },
];

const ProcessStepCard = ({ step, title, description, eta }) => (
  <div className=" border border-[#018AD7] rounded-2xl p-6 flex flex-col h-full shadow-sm hover:shadow-lg transition-shadow duration-300">
    <div className="bg-[#018EDE] text-white w-12 h-12 flex items-center justify-center rounded-xl mb-5 font-bold text-2xl">
      {step}
    </div>
    <div className="flex-grow">
      <h3 className="text-lg font-bold text-[#24576C]">{title}</h3>
      <p className="mt-2 text-[#24576C] text-sm">{description}</p>
    </div>
    <p className="mt-4 text-[#24576C] text-sm font-medium">(ETA:- {eta})</p>
  </div>
);

const OnboardingProcess = () => {
  return (
    <div className=" flex items-center justify-center pt-16 py-30 px-4 lg:px-0">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-12 text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0C3D4C]">
            Easy Onboarding,
            <br />
            Fast Launch!
          </h2>
        </div>
        
        {/* Using a more robust grid layout that handles wrapping and centering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.slice(0, 3).map((item) => (
                <ProcessStepCard key={item.step} {...item} />
            ))}
        </div>
        <div className="mt-8 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-auto lg:max-w-[67%]">
                {processSteps.slice(3, 5).map((item) => (
                    <ProcessStepCard key={item.step} {...item} />
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default OnboardingProcess;