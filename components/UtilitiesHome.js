import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const UtilitiesHome = () => {
  return (
<div className='bg-[#eaf5ff] pt-14 mt-20'>
      <div className=" rounded-2xl  relative px-4 lg:px-0 ">
 
        <div className="hidden md:block absolute top-8 right-16 opacity-80 bg-white p-4 rounded-full animate-bounce">
                     <Image src="/home/gashome.png" width={40}  height={40} alt='icon'/>
        </div>
        <div className=" hidden md:block absolute top-1/2 right-4 -translate-y-1/2 transform opacity-80 bg-white p-4 rounded-full animate-bounce">
                     <Image src="/home/bulbhome.png" width={40}  height={40} alt='icon'/>
        </div>
        <div className="hidden md:block absolute bottom-12 left-1/2 -translate-x-1/2 transform opacity-80 bg-white p-4 rounded-full animate-bounce">
                    <Image src="/home/screenhome.png" width={40}  height={40} alt='icon'/>
        </div>
         <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 transform opacity-80 bg-white p-4 rounded-full animate-bounce">
                     <Image src="/home/waterhome.png" width={40}  height={40} alt='icon'/>
        </div>

        {/* Flex container for content */}
        <div className="flex flex-col md:flex-row  justify-between gap-8 relative z-10 max-w-7xl mx-auto">
          
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 lg:w-2/5 space-y-6 text-center md:text-left ">
            <h3 className="text-4xl lg:text-5xl font-bold text-[#0d3d57]">
              Fast Utilities, Zero Hassle
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Sevenunique provides smooth and easy payment systems with the help of digital payment systems that are the most smooth and secure. Whether you are at home, on the move, or on the go, our platform offers you quick, dependable, and secure transactions.
            </p>
            
            {/* Feature buttons */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <p className="py-8 text-center text-lg border border-[#0063A2] text-[#0C3D4C] rounded-lg font-bold">
                Easy
              </p>
              <p className="py-8 text-center text-lg border border-[#0063A2] text-[#0C3D4C] rounded-lg font-bold">
                Fast
              </p>
              <p className="py-8 text-center text-lg  border border-[#0063A2] text-[#0C3D4C] rounded-lg  font-bold">
                Connectivity
              </p>
            </div>

            {/* View more button */}
            <div className="pt-6 pb-10">
              <Link href="/bbps" className="bg-[#0C3D4C] text-white font-semibold py-3 px-8 rounded-2xl shadow-md hover:bg-[#124068] transition-all duration-300">
                View more
              </Link>
            </div>
          </div>
          
          {/* Right: Image */}
          <div className=" hidden md:block w-full h-[-webkit-fill-available] md:w-1/2 lg:w-1/2 mt-8 md:mt-0 relative">
            <Image 
              src="/home/smilehome.png"
              width={600}
              height={400} 
              alt="Happy person using their phone for utility services" 
              className="rounded-lg  lg:absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
      </div>
  );
}
export default UtilitiesHome; 