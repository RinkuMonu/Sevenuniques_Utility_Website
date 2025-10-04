"use client";
import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", dropdown: true },
    { name: "Contact us", href: "/contact" },
  ];

const servicesDropdown = [
  { name: "AEPS", href: "/aeps" },
  { name: "BBPS", href: "/bbps" },
  { name: "DMT", href: "/dmt" },
    { name: "Loan", href: "/loan" },
  { name: "Business Loan", href: "/loan/business-loan" },
  { name: "Home Loan", href: "/loan/home-loan" },
  { name: "Personal Loan", href: "/loan/personal-loan" },
  { name: "Construction Loan", href: "/loan/construction-equipment-loan" },
  { name: "Car Loan", href: "/loan/car-loan" },
    { name: "Recharge", href: "/recharge" },
      { name: "Insurance", href: "/insurance" },

];


  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="bg-gray-300 px-4 py-2 rounded-lg font-semibold">
          LOGO
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group">
              {link.dropdown ? (
                <button
                  className={`flex items-center gap-1 font-medium transition ${
                    pathname.startsWith("/services")
                      ? "text-teal-700 font-semibold"
                      : "text-gray-700 group-hover:text-teal-600"
                  }`}
                >
                  {link.name} <ChevronDown size={16} />
                </button>
              ) : (
                <Link
                  href={link.href}
                  className={`font-medium transition ${
                    pathname === link.href
                      ? "text-teal-700 font-semibold"
                      : "text-gray-700 hover:text-teal-600"
                  }`}
                >
                  {link.name}
                </Link>
              )}

              {/* Dropdown (desktop hover) */}
              {link.dropdown && (
                <div className="absolute top-6 left-0 bg-white shadow-xl rounded-xl py-3 w-56 border border-gray-100 transform scale-95 opacity-0 invisible group-hover:scale-100 group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out origin-top">
                  {servicesDropdown.map((item, i) => (
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

        {/* Buttons (desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className="px-6 py-2 bg-teal-900 text-white rounded-full font-medium hover:bg-teal-700 transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-6 py-2 border border-teal-900 text-teal-900 rounded-full font-medium hover:bg-teal-900 hover:text-white transition"
          >
            Register
          </Link>
        </div>

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
                    className={`block font-medium ${
                      pathname === link.href
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
  );
}
