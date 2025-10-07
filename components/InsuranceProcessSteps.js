"use client";

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Data for the steps
const stepsData = [
    {
        id: 1,
        title: 'Apply online',
        description: 'Complete a form and select the insurance plan that suits you.'
    },
    {
        id: 2,
        title: 'Document upload',
        description: 'Get your documents verified fast and safely.'
    },
    {
        id: 3,
        title: 'Get Coverage',
        description: 'Get complete protection on the spot—drive, ride, or live without worry.'
    }
];

// Component for the active step's number icon
const ActiveStepIcon = ({ number }) => (
    <div className="w-12 h-12 bg-[#028CCA] rounded-xl flex items-center justify-center absolute -top-6 left-1/2 -translate-x-1/2 shadow-lg">
        <span className="text-2xl font-bold text-white">{number}</span>
    </div>
);

// Component for an inactive step's number icon
const InactiveStepIcon = ({ number }) => (
    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center absolute -top-6 left-1/2 -translate-x-1/2 shadow-lg ">
        <span className="text-2xl font-bold text-[#0C3D4C]">{number}</span>
    </div>
);

export default function InsuranceProcessSteps() {
    const [activeStep] = useState(2);

    return (
        <section className="w-full mb-16">
            <div className="max-w-7xl mx-auto py-16 px-4 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                    {/* Left Side */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-2xl md:text-4xl font-bold text-[#24576C] leading-tight">
                            Abhi Apply Karo,
                            <br />
                            Khadi Kadam Uthaiye
                            <br />
                             Apni Suraksha.
                        </h2>
                        <p className="mt-6 text-gray-600 max-w-lg mx-auto lg:mx-0">
                           Get protected it's a smart step to have entire protection of yourself, your family, and your assets be a worry-free person today.
                        </p>
                        <Link
                            href="/coming-soon"
                            className="mt-8 inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1297E2] text-[#1297E2] font-semibold rounded-full hover:bg-[#33B5E5] hover:text-white transition-colors duration-300"
                        >
                            Apply Now
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                    {/* Right Side: Step Cards */}
                    <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center items-center gap-6 lg:justify-end w-full">
                        {stepsData.map((step) => {
                            const isActive = step.id === activeStep;
                            return (
                                <div
                                    key={step.id}
                                    className={`
                                        relative pt-10 px-4 sm:px-6 pb-8 rounded-2xl w-full sm:w-48 lg:w-52 text-center
                                        transition-all duration-300 ease-in-out transform
                                        ${isActive
                                            ? 'bg-[#027DA7] text-white shadow-[0px_14px_32px_rgba(0,0,0,0.1)] scale-105'
                                            : 'bg-white text-gray-700 shadow-[0px_14px_32px_rgba(0,0,0,0.1)] scale-100'
                                        }
                                    `}
                                >
                                    {isActive ? <ActiveStepIcon number={step.id} /> : <InactiveStepIcon number={step.id} />}
                                    <h3 className="text-md sm:text-lg font-bold mb-2 mt-4">{step.title}</h3>
                                    <p className={`text-xs sm:text-sm ${isActive ? 'text-blue-100' : 'text-gray-500'}`}>
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
