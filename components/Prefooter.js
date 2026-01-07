"use client";

import Link from "next/link";
import React from "react";

export default function PreFooterSection() {
  const columns = [
    {
      title: "Money Transfer & other Services",
      links: [
        { name: "AePS", href: "/aeps" },
        { name: "DMT", href: "/dmt" },
        { name: "Credit Card", href: "/credit-card" },
        { name: "PAN Card", href: "/pan-card" },
      ],
    },
    {
      title: "Financial Services",
      links: [
    { name: "Business Loan", href: "/instant-loan/business-loan" },
    { name: "Home Loan", href: "/instant-loan/home-loan" },
    { name: "Personal Loan", href: "/instant-loan/personal-loan" },
    { name: "Construction Loan", href: "/instant-loan/construction-equipment-loan" },
    { name: "Car Loan", href: "/instant-loan/car-loan" },
    { name: "Instant Loan", href: "/instant-loan" },
    { name: "Insurance", href: "/insurance" },
      ],
    },
    {
      title: "Recharge & Bills",
      links: [
        { name: "Mobile Recharge", href: "/recharge" },
        { name: "FasTag Recharge", href: "/coming-soon" },
        { name: "Mobile Bill Payment", href: "/coming-soon" },
        { name: "Book Cylinder", href: "/coming-soon" },
        { name: "Landline", href: "/coming-soon" },
        { name: "Broadband", href: "/coming-soon" },
        { name: "Eletricity", href: "/coming-soon" },
      ],
    },
    {
      title: "Booking Services",
      links: [
        { name: "Bus Booking", href: "/booking" },
        { name: "Train Booking", href: "/booking" },
        { name: "Hotel Booking", href: "/booking" },
        { name: "Flight Booking", href: "/booking" },

      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-10">
        {columns.map((col, i) => (
          <div key={i} className="space-y-3">
            <h3 className="font-semibold text-gray-900">{col.title}</h3>
            <ul className="space-y-2">
              {col.links.map((link, j) => (
                <li key={j}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-[#5cacc4] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
