"use client";
import React from 'react';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

// --- Data for the cards ---
// This makes the component easy to update and reuse.
const cardData = [
  {
    id: 1,
    title: "Protect Your Business Rides",
    buttonText: "Get covered now",
  },
  {
    id: 2,
    title: "Drive Worry-Free, Earn More",
    buttonText: "Protect my taxi",
  },
  {
    id: 3,
    title: "Your Car, Our Care",
    buttonText: "Insure my car",
  },
  {
    id: 4,
    title: "Ride Safe, Stay Protected",
    buttonText: "Insure my bike",
  },
];

// --- The Card Component ---
const InsuranceCard = ({ title, buttonText, bgImage }) => {
  return (
    <div
      className="relative w-full h-56 rounded-2xl overflow-hidden bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-105"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* It's good practice to have a semi-transparent overlay to ensure text is readable */}
      <div className="absolute inset-0 bg-blue-100/10"></div>

      <div className="relative h-full flex flex-col justify-between pt-6 ps-6 text-[#003366]">
        <h3 className="font-bold text-2xl">
          {title}
        </h3>
      <div className='bg-white w-48 ms-auto p-2 rounded-t-3xl rounded-bl-3xl'>
          <Link href="" className="mt-auto self-end flex items-center justify-center gap-2  py-2.5 bg-[#0077CC] text-white font-semibold rounded-full text-sm shadow-md hover:bg-[#005fa3] transition-colors duration-300">
          {buttonText}
          <MoveRight className="w-4 h-4" />
        </Link>
      </div>
      </div>
    </div>
  );
};


// --- Main Section Component ---
export default function GetInsurance() {
    // You can replace this with your actual background image URL
    const backgroundImageUrl = '/insurance/icbg.png';

  return (
    <section className=" py-10">
      <div className="max-w-7xl mx-auto px-4  lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card) => (
            <InsuranceCard
              key={card.id}
              title={card.title}
              buttonText={card.buttonText}
              bgImage={backgroundImageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}