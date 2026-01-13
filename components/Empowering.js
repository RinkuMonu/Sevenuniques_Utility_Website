import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const InfoCard = ({ id, title, benefits, imageUrl, imageAlt, reverse = false }) => {
  const directionClass = reverse ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <div id={id} className={`flex flex-col ${directionClass} items-stretch gap-8`}>
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
        <Link  href="https://utility.Finuniques.in/register"  className="mt-6 w-fit bg-white text-[#018EDE] font-semibold py-2 px-8 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Join us as a {title.slice(0, -1)}
        </Link>
      </div>
    </div>
  );
};


 const Empowering = () => {
  const retailerBenefits = [
  'Earn More with Every Transaction – Get a commission for every AePS transaction done at your shop.',
  'Attract More Customers – Bring in more footfall as people visit your shop for essential banking services.',
  'Offer a Range of Services – From cash withdrawals and deposits to fund transfers and balance checks.',
  'Build Customer Trust – Become the go-to financial service hub in your neighborhood.',
  'Small Investment, Big Rewards – Start with minimal cost and enjoy recurring income.',
  'Hit Targets, Earn Bonuses – Get extra incentives when you achieve your monthly transaction goals.',
];


const distributorBenefits = [
  'Build Your Network – Connect with and manage retailers in your area.',
  'Earn More – Get commissions on all transactions within your network.',
  'Protected Territory – Operate your business in an exclusive area.',
  'Full Support – Receive training, marketing, and technical assistance just for you.',
  'Grow at Your Pace – Start small and expand your distributor business over time.',
  'Salary + Rewards – Enjoy a fixed monthly salary plus performance-based bonuses.',
];



  return (
    <div className="font-sans px-4 lg:px-20 py-8 lg:py-12 md:mt-16">
      <main className="max-w-7xl mx-auto">
        <h3 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-10 text-center">
          Empowering Retailers and Distributors
        </h3>

        <div className="space-y-12 text-[15px]">
         <InfoCard
  id="retailersection"
  title="Retailers"
  benefits={retailerBenefits}
  imageUrl="/aeps/retailer.png"
  imageAlt="Happy retailer in his shop"
/>

<InfoCard
  id="distributorsection"
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