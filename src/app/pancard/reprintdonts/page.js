"use client"
import React from "react"
import Reprintguide from "../../../../components/Reprint/Reprintguidelines";
import { Zap, Lightbulb, PenTool } from "lucide-react";

export default function Reprintguideline() {


     const dontspoints = [
    {
      icon: <Zap size={22} className="text-[#0077b6]" />,
      question: "Do's",
      answer:
        <>
<ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
  <li>Use the form <strong>Request for New PAN Card or/and Changes or Correction in PAN Data</strong> for reprint of PAN card or for making changes/correction in PAN data.</li>
  <li>Fill the application in block letters in English, preferably with black ink.</li>
  <li>Paste two recent colour photographs (size 3.5 cm × 2.5 cm).</li>
  <li>Provide the signature within the box.</li>
  <li>Mention the correct PAN.</li>
  <li>If a thumb impression is provided, get it attested by a Magistrate, Notary Public, or Gazetted Officer, under official seal and stamp.</li>
  <li>Attach Proof of Identity (POI), Proof of Address (POA), and Proof of Date of Birth (PODB - for Individual & HUF) as per applicable rules.</li>
  <li>Ensure that the name in the application matches exactly with POI and POA. POA should contain the address mentioned in the application.</li>
  <li>Tick the column where change is required.</li>
  <li>Provide proof to support the requested change.</li>
  <li>Write the complete postal address in the application including landmark.</li>
  <li>Mention the correct PIN code.</li>
  <li>Mention telephone number / e-mail ID.</li>
  <li>Attach proof of PAN (copy of PAN card or PAN allotment letter issued by Income Tax Department, if any).</li>
</ul>

        </>,
    },
    {
      icon: <Lightbulb size={22} className="text-[#00b4d8]" />,
      question: "Don'ts",
      answer:
        <>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
  <li>Do not overwrite or make corrections in the application.</li>
  <li>Do not pin or staple the photograph.</li>
  <li>Do not sign across the box (signature should be within the box).</li>
  <li>Do not provide POI and POA which are not in the name of the applicant.</li>
  <li>Do not write any additional details (date, designation, rank, etc.) along with the signature in the box.</li>
  <li>Do not mention husband's name in the Father's Name column.</li>
  <li>Do not abbreviate your name or use initials.</li>
  <li>Do not apply for a new PAN if you already have one.</li>
</ul>

        </>,
    },
    {
      icon: <PenTool size={22} className="text-[#9b5de5]" />,
      question: "For Further Assistance",
      answer:
        <>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 marker:text-[#0077b6]">
  <li>Call PAN/TDS Call Centre: <strong>0141 451 1098</strong></li>
  <li>E-mail: <a href="mailto:info@7unique.in" className="text-blue-600 hover:underline">info@7unique.in</a></li>
  <li>Postal Address: Plot No 97, Dakshinpuri - I Shrikishan, Sanganer, Jagatpura, Jaipur, Shri Kishanpura, Rajasthan 302017</li>
  <li>Track Status / SMS Status: Send <strong>Sevenuniques 15-digit Acknowledgement No.</strong> to <strong>57575</strong> to obtain application status.</li>
</ul>

        </>,
    },

  ];



  return (
    <>
      <main className="min-h-screen bg-[#f9fcfd]">
        <div className="py-10">
          <h1 className="text-3xl font-bold w-3/4 mx-auto text-center text-[#0C3D4C] mb-12">
           Important Information for Persons Making Application for Reprint or Correction in PAN Data
          </h1>
          <Reprintguide points={dontspoints} />
        </div>
      </main>
    </>
  );
}
