// CreditScoreReport.jsx
"use client"
import React, { useState } from 'react';
import CircularScoreIndicator from './CircularScoreIndicator';

const CreditScoreReport = () => {
  const [score, setScore] = useState(806);

  const creditFactors = [
    { label: 'Credit Card Utilization', value: 25 },
    { label: 'Payment History', value: 99 },
    { label: 'Age of Credit History', value: 45 },
    { label: 'Total Accounts', value: 81 },
  ];

  return (
    <div className="   px-4 lg:px-0 py-16">
      <div className="w-full max-w-7xl mx-auto  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className=''>
            {/* Left Column */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-2xl md:text-5xl font-bold text-[#0C3D4C] text-center lg:text-left">
              Credit Score Check, <br/> Bilkul Free
            </h3>
        
              
          
            <div className="w-full ">
              {/* <ScoreGauge score={807} /> */}
           
                <div className=" rounded-full">
                  <CircularScoreIndicator score={score} maxScore={1000} />

              
              </div>
            </div>
          </div>
        </div>

           <div className=''>
            <div className="flex w-full  mx-auto lg:mx-0">
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="w-full px-4 py-3 text-gray-700 bg-[#E6F6FF] border border-[#E6F6FF] rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <button className="px-6 py-4 font-semibold w-[200px] text-white bg-[#0C3D4C] rounded-r-lg hover:bg-[#0C3D4C]/90 transition-colors">
                Get Started
              </button>
            </div>

            <div className="mt-12  lg:mx-0">
              <h2 className="text-2xl font-bold text-gray-700 mb-6">Credit Factors</h2>
              <div className="space-y-4">
                {creditFactors.map((factor, index) => (
                  <div key={index} className="flex items-center gap-6 p-4 bg-white border border-gray-200 rounded-xl">
                    <span className="text-xl font-bold text-[#018EDE] italic">{factor.value}%</span>
                    <span className="text-gray-600">{factor.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditScoreReport;