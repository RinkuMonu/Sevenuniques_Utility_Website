import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const services = [
  { name: 'Gas Bill', src: '/home/gashome.png', position: 'top-8 right-12' },
  { name: 'Electricity Bill', src: '/home/bulbhome.png', position: 'top-1/2 -right-14 -translate-y-1/2' },
  { name: 'Broadband Bill', src: '/home/screenhome.png', position: 'bottom-12 left-1/2 -translate-x-1/2' },
  { name: 'Water Bill', src: '/home/waterhome.png', position: 'top-1/2 left-[42.8%]' }, 
  { name: 'Health Insurance', src: '/home/health.png', position: 'top-8 left-1/2 -translate-x-1/2' },
  { name: 'DTH', src: '/home/dth.png', position: 'top-1 right-36 -translate-x-1/2' },
  { name: 'Mobile Recharge', src: '/home/mobile.png', position: 'bottom-12 -right-12' },
  { name: 'Education', src: '/home/education.png', position: 'top-1/3 left-[57.1%]' }, 
];

const UtilitiesHome = () => {
  return (
    <div className='bg-[#eaf5ff] pt-14 mt-20 '>
      <div className="rounded-2xl relative px-4 lg:px-0 max-w-7xl mx-auto ">
        
<div className='relative'>
          {services.map((service) => (
          <div key={service.name} className={`hidden lg:block absolute ${service.position} group z-20`}>
            <span 
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap 
                         rounded bg-slate-800 px-3 py-1.5 text-sm text-white font-semibold
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible"
            >
              {service.name}
            </span>
            
            <div className="opacity-80 bg-white p-4 rounded-full animate-bounce">
              <Image src={service.src} width={40} height={40} alt={`${service.name} icon`} />
            </div>
          </div>
        ))}
</div>
        <div className="flex flex-col md:flex-row justify-between gap-8 relative z-10">
          
          <div className="w-full md:w-1/2 lg:w-2/5 space-y-6 text-center md:text-left">
            <h3 className="text-4xl lg:text-5xl font-bold text-[#0d3d57]">
              Fast Utilities, Zero Hassle
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Sevenunique provides smooth and easy payment systems with the help of digital payment systems that are the most smooth and secure. Whether you are at home, on the move, or on the go, our platform offers you quick, dependable, and secure transactions.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <p className="py-3 text-center text-lg border border-[#0063A2] text-[#0C3D4C] rounded-lg font-bold">
                Easy
              </p>
              <p className="py-3 text-center text-lg border border-[#0063A2] text-[#0C3D4C] rounded-lg font-bold">
                Fast
              </p>
              <p className="py-3 text-center text-lg border border-[#0063A2] text-[#0C3D4C] rounded-lg font-bold">
                Connectivity
              </p>
            </div>

            <div className="pt-6 pb-10">
              <Link href="/bbps" className="bg-[#0C3D4C] text-white font-semibold py-3 px-8 rounded-2xl shadow-md hover:bg-[#124068] transition-all duration-300">
                View more
              </Link>
            </div>
          </div>
          <div className="hidden md:block w-full md:w-1/2 lg:w-1/2 mt-8 md:mt-0">
             <div className="relative h-full">
                <Image 
                  src="/image/men-home.png"
                  width={600}
                  height={400} 
                  alt="Happy person using their phone for utility services" 
                  className="rounded-lg lg:absolute bottom-0 right-18"
                />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UtilitiesHome;