import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const InfoCard = ({ title, benefits, imageUrl, imageAlt, reverse = false }) => {
  const directionClass = reverse ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <div className={`flex flex-col ${directionClass} items-stretch gap-8`}>
      <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 flex">
        <div className="w-full h-full pt-2 bg-gradient-to-t from-[#0F86D2] to-[#FFFFFF] rounded-2xl shadow-md flex">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={300}
            height={300}
            className=" object-cover rounded-2xl"
          />
        </div>
      </div>
      <div className="flex-grow w-full bg-[#E2F4FF] rounded-2xl px-10 py-4 text-[#0C3D4C] flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-3">{title}</h2>
          <ul className="space-y-1 list-disc list-inside">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <Link  href="https://utility.sevenuniques.in/register"  className="mt-6 w-fit bg-white text-[#018EDE] font-semibold py-2 px-8 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Join us as a {title.slice(0, -1)}
        </Link>
      </div>
    </div>
  );
};


 const Empowering = () => {
  const retailerBenefits = [
    'Earn More Money—Earn a commission on each individual AePS transaction that is made in your shop.',
    'Increase Footfall -Get more customers to come into your shop every day to get basic banking services.',
    'Provide a variety of services—cash withdrawal, deposits, fund transfer, and balance inquiries.',
    'Create Customer Loyalty—Become the dependable and reliable financial service hub within your locality.',
    'Low Investment, High Returns: Earn repeating income at a very small startup cost.',
    'Achieve Targets, Get Bonus—Receive extra bonus payments on meeting your targets of transactions monthly.',
  ];

  const distributorBenefits = [
    'Prepare a Network—Manage and build a network of retailers within your area of location.',
    'Get a commission on all transactions within your network—earn higher commissions.',
    'Exclusive Territory Rights – Operate and grow your business in a protected area.',
    'Business Development Support – We provide quality training, marketing and technical support exclusively for you.',
    'Scalable Model - The distributor model allows you to start out small and grow your distributor business in size.',
    'Base salary + Incentives - You have a monthly base salary + bonuses based on performance when you meet your targets.',
  ];

  return (
    <div className=" font-sans px-4 lg:px-0">
      <main className="max-w-7xl mx-auto">
        <h3 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-10 text-center">
          Empowering Retailers and Distributors
        </h3>

        <div className="space-y-12">
          <InfoCard
            title="Retailers"
            benefits={retailerBenefits}
            imageUrl="/aeps/retailer.png"
            imageAlt="Happy retailer in his shop"
          />
          <InfoCard
            title="Distributors"
            benefits={distributorBenefits}
              imageUrl="/aeps/distributor.png"
            imageAlt="Distributor managing his business"
            reverse={true}
          />
        </div>
      </main>
    </div>
  );
}
export default  Empowering;