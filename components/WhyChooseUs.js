import Image from 'next/image';
import React from 'react';

// You can replace these with your preferred icons, e.g., from a library like lucide-react
const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[#0C3D4C]">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const TagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[#0C3D4C]">
        <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
        <path d="M7 7h.01"></path>
    </svg>
);

const RefreshCwIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[#0C3D4C]">
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
        <path d="M21 3v5h-5"></path>
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
        <path d="M3 21v-5h5"></path>
    </svg>
);

const PackageCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[#0C3D4C]">
        <path d="m16 16 2 2 4-4"></path>
        <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
        <path d="M16.5 9.4 7.55 4.24"></path><path d="M3.29 7 12 12l8.71-5"></path>
        <path d="M12 22V12"></path>
    </svg>
);


const FeatureCard = ({ icon, title, children }) => (
  <div className="flex flex-col items-center md:items-start text-center md:text-left">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-zinc-800 mb-2">{title}</h3>
    <p className="text-zinc-600 max-w-xs">{children}</p>
  </div>
);

export default function WhyChooseUs() {
  const features = [
    {
      icon: <WrenchIcon />,
      title: '100% Transparency',
      description: 'Clear Commission Slabs And Guaranteed Settlements.',
      align: 'right'
    },
    {
      icon: <RefreshCwIcon />,
      title: 'Quick & Easy Setup',
      description: 'Start Services Instantly From Your Shop.',
      align: 'right'
    },
    {
      icon: <TagIcon />,
      title: 'Affordable Devices',
      description: 'Micro ATM available at just ₹1,300 + GST',
      align: 'right'
    },
    {
      icon: <PackageCheckIcon />,
      title: '24/7 Dedicated Support',
      description: ' Fast Help Whenever You Need It.',
      align: 'left'
    },
    {
      icon: <TagIcon />,
      title: 'Latest Technology',
      description: 'Secure, Reliable, And Smooth Digital Transactions.',
      align: 'left'
    },
    {
      icon: <PackageCheckIcon />,
      title: 'Trusted Nationwide',
      description: 'Partnered By Thousands Of Retailers & Distributors Across India.',
      align: 'left'
    }
  ];

  return (

      <div className="max-w-7xl mx-auto px-4 pb-10 ">
        <div className="text-center mb-8">
      <h2 className="text-2xl lg:text-4xl font-bold text-[#0C3D4C] leading-tight mb-4">
          Why Partner with SevenUnique
          </h2>
          <p className="text-lg text-zinc-600 mt-2 max-w-2xl mx-auto">
            From routine maintenance to major repairs, we’ve got your car covered with reliable and friendly service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-y-8 md:gap-x-8 lg:gap-x-16">
          {/* Left Features */}
          <div className="flex flex-col gap-6 ">
            {features.filter(f => f.align === 'right').map(feature => (
              <FeatureCard key={feature.title} icon={feature.icon} title={feature.title}>
                {feature.description}
              </FeatureCard>
            ))}
          </div>

          {/* Center Image */}
          <div className="relative w-full max-w-sm mx-auto px-6 py-8">
             <div className="absolute inset-0 bg-[#E6F6FF] transform -rotate-6 rounded-3xl"></div>
             <div className="absolute inset-0 bg-[#018EDE]/70 transform rotate-6 rounded-3xl"></div>
             <Image 
                src="/about/about.jpg" 
                alt="High-performance sports car" 
             width={600}
             height={600}
                className="relative w-full h-72 rounded-2xl shadow-2xl"
             />
          </div>

          {/* Right Features */}
          <div className="flex flex-col gap-12 lg:ms-auto">
             {features.filter(f => f.align === 'left').map(feature => (
              <FeatureCard key={feature.title} icon={feature.icon} title={feature.title}>
                {feature.description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>

  );
}
