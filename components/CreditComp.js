import Link from 'next/link';
import React from 'react';

// You can replace this with the actual URL of your background image.
// I've used a placeholder that matches the dark theme.
const backgroundImageUrl = '/credit/crediti.png';

// Reusable component for the feature cards on the right
const FeatureCard = ({ children, className }) => {
  return (
    <div className={`bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-4 md:p-6 text-center flex items-center justify-center ${className}`}>
      <p className="text-white font-medium text-sm md:text-base">{children}</p>
    </div>
  );
};

export default function CreditComp() {
  return (
    <div 
      className=" bg-cover bg-center font-sans flex items-center justify-center p-4 sm:p-6 lg:p-8 my-16"
      style={{ 
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundColor: '#0a192f' // Fallback color
      }}
    >
      <main className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* Left Content Section */}
        <div className="text-white text-center lg:text-left animate-fade-in-up">
          <h1 className="text-2xl lg:text-4xl  font-bold leading-tight mb-4">
            Ek Card, <br />
            Multiple Fayde
          </h1>
          <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
            At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos Et Accusamus Et At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio Dignissimos At Vero Eos
          </p>
          <Link href="/" className=" text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105"  style={{
                            background: "linear-gradient(90deg,#358EBA  0%, #24576C 100%)"
                        }}>
            Apply Now
          </Link>
        </div>

        {/* Right Grid Section */}
        <div className="relative w-full  max-w-2xl mx-auto lg:mx-0 flex flex-col gap-2 md:block lg:h-[400px] md:h-[500px] animate-fade-in">
          {/* Using absolute positioning for a more flexible and overlapping layout */}
          <FeatureCard className="md:absolute top-0 right-1/4 md:w-1/3 h-1/4">Build Credit Score</FeatureCard>
          <FeatureCard className="md:absolute top-[5%] left-0 md:w-1/3 h-1/4">Extra Benefits</FeatureCard>
          <FeatureCard className="md:absolute top-1/2 -left-[10%] md:w-2/5 h-1/4">Rewards & <br/> Cashback</FeatureCard>
          <FeatureCard className="md:absolute top-1/3 right-1/3 md:w-1/3 h-1/4">Easy & Cashless <br/>Payments</FeatureCard>
          <FeatureCard className="md:absolute top-1/3 -right-[5%] md:w-1/3 h-1/4">Credit Facility</FeatureCard>
          <FeatureCard className="md:absolute -bottom-[5%] left-1/8 md:w-2/5 h-1/4">Emergency Support</FeatureCard>
          <FeatureCard className="md:absolute bottom-0 right-0 md:w-2/5 h-1/4 ">Online Shopping & EMI Option</FeatureCard>
        </div>

      </main>
      
      {/* Basic animation styles - can be included here or in a style tag in index.html */}
      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in {
            animation: fade-in 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
