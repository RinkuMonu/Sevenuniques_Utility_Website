import React from 'react';

// SVG Icon Component for the map pin
const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 20l-4.95-6.05a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);

// A reusable component for each statistic card
const StatCard = ({ value, label }) => (
    <div className="flex items-center justify-center p-4">
        <MapPinIcon />
        <div className="ml-4">
            <p className="text-2xl md:text-3xl font-bold text-gray-800">{value}</p>
            <p className="text-sm text-gray-600">{label}</p>
        </div>
    </div>
);


 const HomeMap = () => {
  const stats = [
    { value: '100K +', label: 'Customer Base' },
    { value: '206K +', label: 'Adhikari Network' },
    { value: '218K +', label: 'Villages Covered' },
    { value: '100K +', label: 'Customer Base' },
    { value: '206K +', label: 'Adhikari Network' },
    { value: '218K +', label: 'Villages Covered' },
  ];

  return (
 <div className='pt-16 pb-32'>
    <h1 className="text-3xl  font-bold text-[#21484F] text-center mb-8">
        Empowering everyone with easy financial access
      </h1>
    <div 
      className="bg-cover bg-center py-40 w-full flex flex-col items-center justify-center p-4"
      style={{ backgroundImage: "url('/home/map.png')" }}
    >
    
      <div className="w-full max-w-4xl bg-white/50 backdrop-blur-sm rounded-2xl border py-5 border-white/30 shadow-2xl overflow-hidden">
        
        {/* Grid for stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-y sm:divide-y-0 md:divide-x divide-gray-300">
          {stats.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
        
      </div>
    </div>
    </div>
  );
}


export default  HomeMap ;