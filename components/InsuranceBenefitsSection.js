"use client";
import React from 'react';
import { HandCoins, BrainCircuit, Briefcase, Sparkles } from 'lucide-react';
import Image from 'next/image';

// --- Data for the benefit icons ---
const benefits = [
  {
    icon: "/insurance/b1.png",
    text: "Financial Protection",
  },
  {
    icon: "/insurance/b2.png",
    text: "Peace of Mind",
  },
  {
    icon:"/insurance/b3.png",
    text: "Business Security",
  },
  {
    icon: "/insurance/b4.png",
    text: "Extra Benefits",
  },
];

// --- The Main Component ---
export default function InsuranceBenefitsSection() {
  const sectionBackgroundImage = "/insurance/ibbg.png"; 

  return (
    <section
      className="relative w-full py-16 bg-cover bg-center mb-20"
      style={{ backgroundImage: `url(${sectionBackgroundImage})` }}
    >

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Benefit Icons */}
          <div className="flex flex-row flex-wrap justify-center lg:flex-col lg:justify-start lg:items-start gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-white/90 rounded-full shadow-lg flex flex-col items-center justify-center p-4 transition-transform duration-300 hover:scale-110">
                <Image width={40} height={40} alt='' src={benefit.icon} />
                  <p className="mt-2 font-semibold text-cyan-700">{benefit.text}</p>
                </div>
              </div>
            ))}
          </div>


              <div className="text-white text-right lg:mt-40">
                <h2 className="font-light">
                  <span className="text-3xl md:text-4xl">Har </span>
                  <span className="font-extrabold text-5xl md:text-7xl">Risk</span>
                  <span className="text-3xl md:text-4xl"> Cover</span>
                  <br />
                  <span className="text-3xl md:text-4xl">OR</span>
                  <br />
                  <span className="text-3xl md:text-4xl">Extra </span>
                  <span className="font-extrabold text-5xl md:text-7xl">Benefits</span>
                  <span className="text-3xl md:text-4xl"> Bhi</span>
                </h2>
              </div>
            </div>
          </div>

     
    </section>
  );
}