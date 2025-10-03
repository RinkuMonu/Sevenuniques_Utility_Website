"use client";
import React, { useState } from "react";

// --- Data for the Bank Logos ---
const banks = [
  { id: 1, name: "Axis", logoUrl: "/credit/axis.png" },
  { id: 2, name: "IDFC First Bank", logoUrl: "/credit/idfc.png" },
  { id: 3, name: "AU Bank", logoUrl: "/credit/au.png" },
  { id: 4, name: "HSBC Bank", logoUrl: "/credit/hsbc.png" },
];

const BankLogoGrid = () => {
  const [activeBank, setActiveBank] = useState(banks[0].id);

  return (
    <section className="w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-4 gap-y-8">
          {banks.map((bank) => (
            <button
              key={bank.id}
              onClick={() => setActiveBank(bank.id)}
              className="flex flex-col items-center justify-start text-center focus:outline-none"
            >
              <div
                className={`w-20 h-20 md:w-24 md:h-24 p-1.5 rounded-full border-2 flex items-center justify-center 
                  transition-all duration-300 transform hover:scale-110
                  ${
                    activeBank === bank.id
                      ? "border-blue-500 shadow-lg"
                      : "border-gray-200"
                  }
                `}
              >
                <img
                  src={bank.logoUrl}
                  alt={`${bank.name} logo`}
                  className="h-10 w-10 md:h-12 md:w-12 object-contain"
                />
              </div>
              <p
                className={`mt-3 text-sm font-medium ${
                  activeBank === bank.id ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {bank.name}
              </p>
            </button>
          ))}
        </div>
        <div className="mt-10 text-center">
          {activeBank === 1 && (
            <p className="text-lg font-semibold text-gray-700">
              Axis Bank offers exciting credit card options.
            </p>
          )}
          {activeBank === 2 && (
            <p className="text-lg font-semibold text-gray-700">
              IDFC First Bank provides smart financial solutions.
            </p>
          )}
          {activeBank === 3 && (
            <p className="text-lg font-semibold text-gray-700">
              AU Bank has great cashback rewards on cards.
            </p>
          )}
          {activeBank === 4 && (
            <p className="text-lg font-semibold text-gray-700">
              HSBC Bank gives you international credit card benefits.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BankLogoGrid;
