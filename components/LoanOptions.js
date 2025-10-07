import Link from 'next/link';
import React from 'react';

const loanOptions = [
  {
    title: 'Home Loan',
     imageUrl: '/loan/loanb4.jpg',
     link:"/loan/home-loan"
  },
  {
    title: 'Personal Loan',
     imageUrl: '/loan/1.jpg',
     link:"/loan/personal-loan"
  },
  {
    title: 'Construction Loan',
     imageUrl: '/loan/2.jpg',
     link:"/loan/construction-equipment-loan"
  },
  {
    title: 'Car Loan',
    imageUrl: '/loan/3.jpg',
    link:"/loan/car-loan"
  },
];

const LoanCard = ({ title, imageUrl, link }) => {
  return (
    <div className="border border-[#1297E2] rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="w-full mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4 h-14 flex items-center">{title}</h3>
      <Link href={link} className="bg-[#1297E2] text-white font-bold py-2 px-8 rounded-full hover:bg-[#1297E2]/90 transition-colors duration-300">
        view more
      </Link>
    </div>
  );
};

const LoanOptions = () => {
  return (
    <section className="my-30 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold text-[#0C3D4C] mb-8">More Options</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loanOptions.map((loan, index) => (
            <LoanCard key={index} title={loan.title} imageUrl={loan.imageUrl}  link={loan.link}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanOptions;