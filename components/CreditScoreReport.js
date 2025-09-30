// CreditScoreReport.jsx
"use client"
import React, { useState } from 'react';
import CircularScoreIndicator from './CircularScoreIndicator';

// A dedicated component for the SVG gauge for reusability.
// const ScoreGauge = ({ score }) => {
//   const size = 280;
//   const strokeWidth = 20;
//   const center = size / 2;
//   const radius = center - strokeWidth;
//   const circumference = 2 * Math.PI * radius;

//   const progress = (score - 300) / (850 - 300);
//   const dashOffset = circumference * (1 - progress);

//   // Determine color based on score
//   const getScoreColor = (score) => {
//     if (score >= 740) return 'text-green-500';
//     if (score >= 670) return 'text-yellow-500';
//     return 'text-red-500';
//   };

//   // Calculate arrow position
//   const angle = 360 * progress - 90; // -90 because SVG is rotated
//   const angleRad = (angle * Math.PI) / 180;
//   const arrowX = center + radius * Math.cos(angleRad);
//   const arrowY = center + radius * Math.sin(angleRad);

//   return (
//     <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
//       <svg width={size} height={size}>
//         {/* Gradient definition */}
//         <defs>
//           <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#ef4444" /> {/* Red */}
//             <stop offset="50%" stopColor="#f59e0b" /> {/* Amber */}
//             <stop offset="100%" stopColor="#22c55e" /> {/* Green */}
//           </linearGradient>
//         </defs>

//         {/* Background circle */}
//         <circle
//           cx={center}
//           cy={center}
//           r={radius}
//           fill="none"
//           stroke="#e5e7eb"
//           strokeWidth={strokeWidth}
//         />

//         {/* Progress circle */}
//         <circle
//           cx={center}
//           cy={center}
//           r={radius}
//           fill="none"
//           stroke="url(#scoreGradient)"
//           strokeWidth={strokeWidth}
//           strokeDasharray={circumference}
//           strokeDashoffset={dashOffset}
//           strokeLinecap="round"
//           transform={`rotate(-90 ${center} ${center})`} // rotate to start from top
//         />

//         {/* Arrowhead */}
//         <circle
//           cx={arrowX}
//           cy={arrowY}
//           r={(strokeWidth*2 )/3} // adjust size
//           fill="white"
//           stroke="#22c55e"
//           strokeWidth="4"
//         />
//       </svg>

//       <div className="absolute flex flex-col items-center">
//         <span className="text-6xl font-bold text-gray-800">{score}</span>
//         <span className={`text-xl font-semibold ${getScoreColor(score)}`}>
//           Excellent
//         </span>
//       </div>
//     </div>
//   );
// };


// Main Component
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
            <h1 className="text-2xl md:text-5xl font-bold text-[#0C3D4C] text-center lg:text-left">
              Credit Score Check, <br/> Bilkul Free
            </h1>
        
              
          
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