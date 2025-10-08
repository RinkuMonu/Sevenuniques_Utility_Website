import React from 'react';
import { ChevronRight } from 'lucide-react'; // Changed the import
import Link from 'next/link';

const ContactBanner = () => {
  return (
    <section className="bg-[#0099ff] text-white my-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-8 px-4 lg:px-0 py-16 md:flex-row md:gap-0">
        
        {/* Left Side: Text Content */}
        <div className="text-center md:text-left">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            We are Here to Help Contact Us
          </h2>
          <p className="max-w-lg text-white/90">
            Our Team Is Ready To Assist You With Any Queries Or Support You Need. Reach Out Today And Get A Quick Response.
          </p>
        </div>

        {/* Right Side: Button */}
        <div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full bg-white ps-6 pe-1 py-1 font-semibold text-[#0099ff] shadow-md transition-all hover:bg-gray-100 hover:scale-105"
          >
            <span>Talk to Our Support Team</span>
            {/* Replaced icon and added size classes */}
         <div className='bg-[#0099ff] rounded-full p-3'>
             <ChevronRight className="h-4 w-4 text-white " /> 
         </div>
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default ContactBanner;