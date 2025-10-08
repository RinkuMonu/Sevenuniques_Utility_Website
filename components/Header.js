"use client";
import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { Mail, MapPin, MoveUpRight, Phone } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", dropdown: true },
    { name: "AEPS", href: "/aeps" },
    { name: "Bill Payments", href: "/bbps" },
    { name: "Loan", href: "/loan", dropdown: true },
    { name: "Contact us", href: "/contact" },
  ];

  const servicesDropdown = [
    { name: "Recharge", href: "/recharge" },
    { name: "Insurance", href: "/insurance" },
    { name: "Booking", href: "/booking" },
    { name: "Credit Card", href: "/credit-card" },
    { name: "PanCard", href: "/pancard" },
  ];

  const loanDropdown = [
    { name: "Business Loan", href: "/loan/business-loan" },
    { name: "Home Loan", href: "/loan/home-loan" },
    { name: "Personal Loan", href: "/loan/personal-loan" },
    { name: "Construction Loan", href: "/loan/construction-equipment-loan" },
    { name: "Car Loan", href: "/loan/car-loan" },
  ];

  return (
    <>
      <div className="bg-[#0C3D4C] text-white text-sm py-2 px-6 flex justify-between items-center mb-1  md:flex">
         <div className="flex items-center space-x-6 text-sm text-gray-200">
  <span className="flex items-center">
    <FaUser className="mr-2 w-4 h-4" /> 24x7 Technical Support
  </span>
  <span className="text-gray-400">|</span>
  <span className="flex items-center">
    <Mail className="mr-2 w-5 h-5" /> support@7unique.in
  </span>
  <span className="text-gray-400">|</span>
  <span className="flex items-center">
    <Phone className="mr-3 w-5 h-5" /> 0141-4511098
  </span>
</div>


           {/* Buttons (desktop) */}
          <div className="hidden md:flex items-center">
            <Link
              href="https://utility.finuniques.in/"
              className="px-6 py-2 bg-[#0C3D4C] text-white rounded-md flex justify-center gap-2 items-center font-medium hover:bg-gray-200 hover:text-[#0C3D4C] transition"
            >
              <FaUser className="w-4 h-4" />
              Login
            </Link>
            <Link
              href="https://utility.finuniques.in/register"
              className="px-4 py-2 bg-[#0C3D4C] text-white rounded-md flex justify-center gap-2 items-center font-medium hover:bg-gray-200 hover:text-[#0C3D4C] transition"
            >
          <FaUserPlus className="w-5 h-5" />
              Register
            </Link>
          </div>
        </div>
      <header className="bg-white shadow-lg sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="px-2 py-1 font-semibold">
            <Image
              src="/image/sevenunique-logo.png"
              width={66}
              height={66}
              alt="logo"
              className="pb-1"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="relative group transition-transform duration-300 ease-out hover:scale-105"
              >
                {link.dropdown ? (
                  <button
                    className={`relative flex items-center gap-1 text-lg font-medium transition group/btn
            ${["/services", "/loan"].some((path) => pathname.startsWith(path))
                        ? "text-[#0C3D4C] font-semibold before:w-full"
                        : "text-gray-700 group-hover:text-[#0C3D4C]"
                      }
            before:content-[''] before:absolute before:left-0 before:-bottom-1
            before:h-[2px] before:w-0 before:bg-[#0C3D4C] before:transition-all before:duration-300
            group-hover/btn:before:w-full
          `}
                  >
                    {link.name} <ChevronDown size={16} />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`relative font-medium text-lg transition group/link
            ${pathname === link.href
                        ? "text-[#0C3D4C] font-semibold before:w-full"
                        : "text-gray-700 hover:text-[#0C3D4C]"
                      }
            before:content-[''] before:absolute before:left-0 before:-bottom-1
            before:h-[2px] before:w-0 before:bg-[#0C3D4C] before:transition-all before:duration-300
            hover:before:w-full
          `}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown (desktop hover) */}
                {link.dropdown && (
                  <div className="absolute top-6 left-0 bg-white shadow-xl rounded-xl py-3 w-56 border border-gray-100 transform scale-95 opacity-0 invisible group-hover:scale-100 group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out origin-top">
                    {link.name.toLowerCase() === "services" &&
                      servicesDropdown.map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 hover:text-teal-700 transition rounded-lg"
                        >
                          <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                          {item.name}
                        </Link>
                      ))}

                    {link.name.toLowerCase() === "loan" &&
                      loanDropdown.map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 hover:text-teal-700 transition rounded-lg"
                        >
                          <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                          {item.name}
                        </Link>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-700"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu (Slide down) */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t shadow-md">
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setServiceOpen(!serviceOpen)}
                        className="flex items-center justify-between w-full font-medium text-gray-700 hover:text-teal-600"
                      >
                        {link.name} <ChevronDown size={16} />
                      </button>
                      {serviceOpen && (
                        <div className="pl-4 mt-2 space-y-2">
                          {servicesDropdown.map((item, i) => (
                            <Link
                              key={i}
                              href={item.href}
                              className="block text-gray-600 hover:text-teal-700 transition"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block font-medium ${pathname === link.href
                          ? "text-teal-700 font-semibold"
                          : "text-gray-700 hover:text-teal-600"
                        }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Buttons */}
              <div className="pt-4 flex flex-col gap-3">
                <Link
                  href="/login"
                  className="px-6 py-2 bg-teal-900 text-white rounded-full font-medium hover:bg-teal-700 transition text-center"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-6 py-2 border border-teal-900 text-teal-900 rounded-full font-medium hover:bg-teal-900 hover:text-white transition text-center"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
