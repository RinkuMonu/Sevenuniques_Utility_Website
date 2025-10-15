"use client"
import React from "react"
import Reprintguide from "../../../../components/Reprint/Reprintguidelines";
import { Zap, Lightbulb, PenTool } from "lucide-react";

export default function Reprintguideline() {


     const instructionpoints = [
    {
      icon: <Zap size={22} className="text-[#0077b6]" />,
      question: "Instructions",
      answer:
       <>
<ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
    <li>
The form must be completed in English only.
    </li>
    <li>Fields marked with an asterisk (*) are mandatory</li>
    <li>Enter the correct 10-digit PAN.</li>
    <li>Do not tick checkboxes on the left if you are requesting only a new PAN. For any change/correction, mark the box corresponding to the field that requires updating</li>
</ul>
       </>,
    },
  {
  icon: <Lightbulb size={22} className="text-[#00b4d8]" />,
  question: "1. Full Name",
  answer: (
    <>
      <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
        <li>Choose the correct title</li>
        <li>Individuals should write full names in expanded form, avoiding abbreviations or initials.</li>
      </ul>
      <br />
      Example:
      <table className="table-auto  mt-2">
        <thead>
          <tr className="bg-gray-100">
            <th className=" px-6 py-2">Last Name/Surname</th>
            <th className=" px-6 py-2">First Name</th>
            <th className=" px-6 py-2">Middle Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" px-6 py-2">SINGH</td>
            <td className=" px-6 py-2">VIVEK</td>
            <td className=" px-6 py-2">KUMAR</td>
          </tr>
        </tbody>
      </table>
<ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
    <li>Non-individuals must write the full entity name starting from the Last Name/Surname field. If the name is too long, continue in First Name and Middle Name fields.</li>
</ul>
<br />
Example: XYZ DATA CORPORATION (INDIA) PRIVATE LIMITED

<table className="table-auto  mt-2">
        <thead>
          <tr className="bg-gray-100">
            <th className=" px-6 py-2">Last Name/Surname</th>
            <th className=" px-6 py-2">First Name</th>
            <th className=" px-6 py-2">Middle Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" px-6 py-2">X Y Z D A T A C O R P O R A T I O N ( I N D</td>
            <td className=" px-6 py-2">I A )</td>
            <td className=" px-6 py-2">P R I V A T E L I M I T E D</td>
          </tr>
        </tbody>
      </table>
      <br />
      <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
<li>Avoid abbreviations in company names. Use “Private Limited” instead of Pvt Ltd, P. Ltd., etc</li>
<li>Sole proprietors must apply in their own full name.</li>
<li>Do not use prefixes such as Shri, Smt, Kumari, Dr., Major, M/s, etc</li>
      </ul>
    </>
  ),
},

    {
      icon: <PenTool size={22} className="text-[#9b5de5]" />,
      question: "2. Name to be Printed on PAN Card",
      answer:
        <>
<ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]"><li>Individuals may provide full or abbreviated name, but the last name must appear.</li></ul>
<br />
Example: Vivek Kumar Singh
<ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
  <li><strong>Full:</strong> VIVEK KUMAR SINGH</li>
  <li><strong>Abbreviated:</strong> V. K. SINGH</li>
  <li>Non-individuals should use the same name as in Item 1.</li>
  <li>Avoid titles like <strong>Shri, Smt, Dr., M/s</strong></li>
</ul>

        </>,
    },
    {
      icon: <Zap size={22} className="text-[#0077b6]" />,
      question: "3. Details of Parents (Individuals Only)",
      answer:
       <>
       <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
  <li>Father’s name is mandatory; mother’s name is optional.</li>
  <li>Married women must provide their father's name, not husband’s.</li>
  <li>Choose which parent’s name appears on PAN; if not selected, father’s name is the default.</li>
</ul>

       </>,
    },
    {
      icon: <Lightbulb size={22} className="text-[#00b4d8]" />,
      question: "4. Date",
      answer:
        <>
<ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
    <li>Cannot be a future date</li>
    <li>Format: DD MM YYYY</li>

</ul>
  <br />
Example: 15th March 1990 → 1 5 0 3 1 9 9 0
<ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
    <li>Date varies by applicant type:</li>
    <ul className="list-decimal list-inside ml-6 space-y-1 marker:text-[#0077b6]">
      <li>Individual – Date of Birth</li>
      <li>Company – Date of Incorporation</li>
      <li>Partnership Firm/LLP – Date of Partnership Deed or Registration</li>
      <li>Trust – Date of Trust Deed or Registration</li>
      <li>Association/Body of Individuals – Date of Formation</li>
    </ul>
</ul>
        </>,
    },
    {
      icon: <PenTool size={22} className="text-[#9b5de5]" />,
      question: "Gender",
      answer:
       <>
<ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
<li>Required for Individuals.</li>
<li>Leave blank for other categories.</li>
</ul>
       </>,
    },

    {
      icon: <PenTool size={22} className="text-[#9b5de5]" />,
      question: "6 & 7. Photo / Signature Mismatch",
      answer:
       <>
<ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
<li>Tick if the existing PAN card has the wrong photo/signature.</li>
<li>Enclose original PAN card with acknowledgment.</li>
</ul>
       </>,
    },

     {
      icon: <PenTool size={22} className="text-[#9b5de5]" />,
      question: "8. Address for Communication",
      answer:
       <>
<ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
<li>Select Residential or Office.</li>
<li>Individuals/HUF/AOP may choose either.</li>
<li>Companies, LLPs, Trusts, Local Authorities: Office address mandatory.</li>
<li>Fill at least two of the first four address fields.</li>
<li></li>
</ul>
       </>,
    },

  ];


  return (
    <>
      <main className="min-h-screen bg-[#f9fcfd]">
        <div className="py-10">
          <h1 className="text-4xl font-bold text-center text-[#0C3D4C] mb-12">
           Guidance for Completing the Form
          </h1>
          <Reprintguide points={instructionpoints} />
        </div>
      </main>
    </>
  );
}
