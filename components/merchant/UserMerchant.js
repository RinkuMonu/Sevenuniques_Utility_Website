"use client";

import { FaRegUser } from "react-icons/fa";

export default function UserMerchantSection() {
    return (
        <section id="#usersection" className='relative bg-cover bg-top bg-no-repeat'
  style={{ backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.45), rgba(0,0,0,0)),
      url('/image/user-image.JPG')
    ` }}>
              <div className="flex flex-col md:flex-row justify-between items-center gap-10 lg-4 md:px-6 max-w-6xl mx-auto px-6 py-8 lg:py-18" >
            {/* Left Content */}
            <div className="md:w-2/3 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center text-gray-200 border-2 p-2 rounded-lg  border-gray-200">
                 <FaRegUser className="text-2xl "  />

                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-200">
                  User
                </h3>
              </div>
      
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing .
              </p>
      
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet .
              </p>
      
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .
              </p>
            </div>
      
           
          </div>
        </section>
    );
}