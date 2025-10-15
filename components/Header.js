"use client";
import React, { useState } from "react";
import { ChevronDown, Menu, X, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [loanOpen, setLoanOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", dropdown: true },
    { name: "AePS", href: "/aeps" },
    { name: "Bill Payments", href: "/bbps" },
    { name: "Loan", href: "/loan", dropdown: true },
    { name: "Contact us", href: "/contact" },
  ];

  const servicesDropdown = [
    { name: "Recharge & Bill Payments", href: "/bbps" },
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
    { name: "Instant Loan", href: "/loan" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0C3D4C] text-white text-sm py-2 px-4 md:px-6 flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-1 text-gray-200">
          <span className="flex items-center">
            <FaUser className="mr-2 w-4 h-4" /> 24x7 Technical Support
          </span>
          <span className="hidden md:inline text-gray-400">|</span>
          <span className="flex items-center">
            <Mail className="mr-2 w-4 h-4" /> support@7unique.in
          </span>
          <span className="hidden md:inline text-gray-400">|</span>
          <span className="flex items-center">
            <Phone className="mr-2 w-4 h-4" /> 0141-4511098
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

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/image/sevenunique-logo.png"
              width={66}
              height={60}
              alt="7Unique Logo"
              className="h-[55px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.dropdown ? (
                  <button
                    className={`flex items-center gap-1 font-medium text-[17px] transition ${
                      pathname.startsWith(link.href)
                        ? "text-[#0C3D4C]"
                        : "text-gray-700 hover:text-[#0C3D4C]"
                    }`}
                  >
                    {link.name} <ChevronDown size={15} />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`font-medium text-[17px] ${
                      pathname === link.href
                        ? "text-[#0C3D4C]"
                        : "text-gray-700 hover:text-[#0C3D4C]"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown (desktop) */}
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
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t shadow-lg max-h-[80vh] overflow-y-auto transition-all duration-300 ease-in-out">
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          link.name === "Services"
                            ? setServicesOpen(!servicesOpen)
                            : setLoanOpen(!loanOpen)
                        }
                        className="flex items-center justify-between w-full text-gray-800 font-medium py-2"
                      >
                        {link.name} <ChevronDown size={16} />
                      </button>

                      {/* Services dropdown (mobile) */}
                      {link.name === "Services" && servicesOpen && (
                        <div className="pl-4 space-y-2 mt-1">
                          {servicesDropdown.map((item, i) => (
                            <Link
                              key={i}
                              href={item.href}
                              className="flex items-center gap-3 text-gray-700 hover:text-[#0C3D4C] transition"
                            >
                              <span className="w-2 h-2 bg-[#0C3D4C] rounded-full"></span>
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}

                      {/* Loan dropdown (mobile) */}
                      {link.name === "Loan" && loanOpen && (
                        <div className="pl-4 space-y-2 mt-1">
                          {loanDropdown.map((item, i) => (
                            <Link
                              key={i}
                              href={item.href}
                              className="flex items-center gap-3 text-gray-700 hover:text-[#0C3D4C] transition"
                            >
                              <span className="w-2 h-2 bg-[#0C3D4C] rounded-full"></span>
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block font-medium py-2 ${
                        pathname === link.href
                          ? "text-[#0C3D4C] font-semibold"
                          : "text-gray-800 hover:text-[#0C3D4C]"
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
                  href="https://utility.finuniques.in/"
                  className="w-full text-center px-5 py-2 bg-[#0C3D4C] text-white rounded-full font-medium hover:bg-[#145E6E] transition"
                >
                  Login
                </Link>
                <Link
                  href="https://utility.finuniques.in/register"
                  className="w-full text-center px-5 py-2 border border-[#0C3D4C] text-[#0C3D4C] rounded-full font-medium hover:bg-[#0C3D4C] hover:text-white transition"
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
