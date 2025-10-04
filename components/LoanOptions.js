import React from 'react';

// You can replace this data with data from an API or other source.
const loanOptions = [
  {
    title: 'Commercial Vehicle Loan',
    // Replace with your image URL
     imageUrl: '/loan/loanb4.png',
  },
  {
    title: 'Car Loan',
     imageUrl: '/loan/loanb4.png',
  },
  {
    title: 'Home Renovation - Mortgage Loan',
     imageUrl: '/loan/loanb4.png',
  },
  {
    title: 'Personal Loan',
    imageUrl: '/loan/loanb4.png',
  },
];

const LoanCard = ({ title, imageUrl }) => {
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
      <button className="bg-[#1297E2] text-white font-bold py-2 px-8 rounded-full hover:bg-[#1297E2]/90 transition-colors duration-300">
        view more
      </button>
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
            <LoanCard key={index} title={loan.title} imageUrl={loan.imageUrl} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanOptions;