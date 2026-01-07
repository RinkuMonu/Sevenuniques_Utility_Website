"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Mail, Phone } from "lucide-react";
import { FaUser, FaUserPlus } from "react-icons/fa";







export default function Header() {

  const [open, setOpen] = useState(false);


  return (
    <>
     <div className="bg-[#0C3D4C] text-white text-sm py-2 px-4 md:px-8 flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-1 text-gray-200">
          <span className="flex items-center">
            <FaUser className="mr-2 w-4 h-4"/> 24x7 Technical Support
          </span>
          <span className="hidden md:inline text-gray-100 ">-</span>
          <span className="flex items-center">
            <Mail className="mr-2 w-4 h-4" />
            <a href="mailto:support@7unique.in" className="hover:underline">
              support@7unique.in
            </a>
          </span>

          <span className="hidden md:inline text-gray-400">|</span>

          <span className="flex items-center">
            <Phone className="mr-2 w-4 h-4" />
            <a href="tel:01414511098" className="hover:underline">
              0141-4511098
            </a>
          </span>
        </div>

        {/* Buttons (desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          <Link
            href="https://utility.finuniques.in/"
            className="px-5 py-1.5 bg-white text-[#0C3D4C] rounded-md flex items-center gap-2 font-medium hover:bg-[#0C3D4C] hover:text-white border border-transparent hover:border-white transition"
          >
            <FaUser className="w-4 h-4" />
            Login
          </Link>
          <Link
            href="https://utility.finuniques.in/register"
            className="px-5 py-1.5 bg-white text-[#0C3D4C] rounded-md flex items-center gap-2 font-medium hover:bg-[#0C3D4C] hover:text-white border border-transparent hover:border-white transition"
          >
            <FaUserPlus className="w-4 h-4" />
            Register
          </Link>
        </div>
      </div>
    <header className="bg-white shadow-md sticky top-0 z-50">
     
      <div className="max-w-6xl mx-auto px-4 py-2  flex items-center justify-between ">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/image/sevenunique-logo1.png"
            width={65}
            height={55}
            alt="Finunique Logo"
          />
        </Link>

        {/* Main Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">

          <Link href="/" className="hover:text-[#026381] text-lg">Home</Link>
          <Link href="/about" className="hover:text-[#026381] text-lg">About</Link>

          {/* SERVICES – Mega Menu */}
          <div
  className="relative"
  onMouseEnter={() => setOpen(true)}
  onMouseLeave={() => setOpen(false)}
>
  <button
    className="flex items-center gap-1 hover:text-[#026381] text-lg"
    onClick={() => setOpen(!open)}
  >
    Services <ChevronDown size={16} />
  </button>


            {/* Mega Dropdown */}
         <div
  className={`absolute -left-20 -translate-x-1/2 top-10 w-[900px] bg-white shadow-xl rounded-xl p-8 transition-all duration-200
  ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}
  `}
>
<div className="absolute bottom-0 left-0">
  <Image
            src="/image/img-tower.png"
            width={300}
            height={300}
            alt="Finunique Logo"
          />
</div>
              <div className="grid grid-cols-4 gap-8">
                <div>
                  <h4 className="font-semibold text-lg bg-[#E6F3F7] text-[#026381] px-3 py-1 rounded-md mb-4">
                    Banking Services
                  </h4>
                  <ul className="space-y-2 text-base md:ml-4" onClick={() => setOpen(false)}>
                  <li className="hover:text-[#026381]"><Link href="/dmt">DMT</Link></li>
                  <li className="hover:text-[#026381]"><Link href="/matm">Micro ATM</Link></li>
                  <li className="hover:text-[#026381]"><Link href="/credit-card">Credit Card</Link></li>
                  <li className="hover:text-[#026381]"><Link href="/pan-card">PAN Card</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg bg-[#E6F3F7] text-[#026381] px-3 py-1 rounded-md  mb-4">
                    Utility Services
                  </h4>
                  <ul className="space-y-2 text-base md:ml-4"  onClick={() => setOpen(false)}>
                     <li className="hover:text-[#026381]"><Link href="/bill-payments">Bill Payments</Link></li>
                    <li className="hover:text-[#026381]"><Link href="/recharge">Recharges</Link></li>
                    <li className="hover:text-[#026381]"><Link href="/bbps">BBPS</Link></li>
                   
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg bg-[#E6F3F7] text-[#026381] px-3 py-1 rounded-md  mb-3">
                    Financial Services
                  </h4>
                  <Link href="/insurance" className="text-base font-semibold text-gray-600 mb-2 md:ml-4">
                    Insurance
                  </Link>
                  <ul className="space-y-1 text-base mb-3 md:ml-4"  onClick={() => setOpen(false)}>
                    <li className="hover:text-[#026381]"><Link href="/insurance/car-insurance">Car</Link></li>
                    <li className="hover:text-[#026381]"><Link href="/insurance/bike-insurance">Bike</Link></li>
                    <li className="hover:text-[#026381]"><Link href="/insurance/taxi-insurance">Taxi</Link></li>
                    <li className="hover:text-[#026381]"><Link href="/insurance/commercial-vechile">Commercial</Link></li>
                  </ul>
                  <Link href="/loan-emi" className="text-base font-semibold text-gray-600 mb-2 md:ml-4">
                    Loan
                  </Link>
                  <ul className="space-y-1 text-base md:ml-4"  onClick={() => setOpen(false)}>
                    <li className="hover:text-[#026381]"><Link href="/instant-loan/home-loan">Home</Link></li>
                    <li className="hover:text-[#026381]"><Link href="/instant-loan/business-loan">Business</Link></li>
                    <li className="hover:text-[#026381]"><Link href="/instant-loan/construction-equipment-loan">Construction</Link></li>
                    <li className="hover:text-[#026381]"><Link href="/instant-loan/personal-loan">Personal</Link></li>
                    <li className="hover:text-[#026381]"><Link href="/instant-loan/car-loan">Car</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg bg-[#E6F3F7] text-[#026381] px-3 py-1 rounded-md  mb-4">
                    Booking
                  </h4>
                  <ul className="space-y-2 text-base md:ml-4"  onClick={() => setOpen(false)}>
                    <li className="hover:text-[#026381]"><Link href="/booking">Bus Booking</Link></li>
                    <li className="hover:text-[#026381]"><Link href="/booking#train-booking">Train Booking</Link></li>
                    <li className="hover:text-[#026381]"><Link href="/booking#hotel-booking">Hotel Booking</Link></li>
                    <li className="hover:text-[#026381]"><Link href="/booking#flight-booking">Flight Booking</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Link href="/aeps"  className="hover:text-[#026381] text-lg">AEPS</Link>
          <Link href="/bbps" className="hover:text-[#026381] text-lg">Bill Payments</Link>
          <Link href="/contact" className="hover:text-[#026381] text-lg">Contact Us</Link>
        </nav>
      </div>
    </header>
    </>
  );
}
