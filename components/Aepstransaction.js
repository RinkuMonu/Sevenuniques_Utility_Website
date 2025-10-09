"use client";
import React from "react";

const transactions = [
  {
    id: 1,
    level: "USFBL & Other Bank Terminal",
    type: "Withdrawal Transactions",
    limit: "Maximum 5/Aadhaar/Terminal/Day",
  },
  {
    id: 2,
    level: "Other Banks Terminal",
    type: "Withdrawal Transactions",
    limit:
      "Maximum 10 Txn or ₹50,000 per month value whichever is breached earlier.",
  },
  {
    id: 3,
    level: "USFBL Bank Terminal",
    type: "Withdrawal Transactions",
    limit:
      "Maximum 10 Txn or ₹50,000 per month value whichever is breached earlier.",
  },
  {
    id: 4,
    level: "Other Banks Terminal",
    type: "Offus Mini Statement",
    limit: "Maximum 5 Txn per Month",
  },
  {
    id: 5,
    level: "USFBL Bank Terminal",
    type: "Offus Mini Statement",
    limit: "Maximum 5 Txn per Month",
  },
  {
    id: 6,
    level: "USFBL & Other Bank Terminal",
    type: "Cash Withdrawal",
    limit: "Maximum ₹10,000/Transaction",
  },
  {
    id: 7,
    level: "USFBL & Other Bank Terminal",
    type: "Cash Deposit",
    limit: "Maximum ₹10,000/Transaction",
  },
];

const Aepstransaction = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#0C3D4C] mb-8 text-center">
          AEPS Transactional Limits
        </h2>

        <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#eef2f8] text-left text-gray-700 text-sm md:text-base">
                <th className="px-6 py-3 font-semibold border-b">Sr.no</th>
                <th className="px-6 py-3 font-semibold border-b">Level</th>
                <th className="px-6 py-3 font-semibold border-b">
                  Transaction Type
                </th>
                <th className="px-6 py-3 font-semibold border-b">
                  USFBL Transactional Limit
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((row) => (
                <tr
                  key={row.id}
                  className="odd:bg-white even:bg-[#f7f8fc] hover:bg-[#eef4ff] transition"
                >
                  <td className="px-6 py-4 border-b text-gray-700">{row.id}</td>
                  <td className="px-6 py-4 border-b text-gray-700">
                    {row.level}
                  </td>
                  <td className="px-6 py-4 border-b text-gray-700">
                    {row.type}
                  </td>
                  <td className="px-6 py-4 border-b text-gray-700">
                    {row.limit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Aepstransaction;
