"use client";
import React from "react";
import { FileText, BookOpen, ClipboardList } from "lucide-react";

const guidelinepoints = [
{
  icon: <FileText size={22} className="text-[#0077b6]" />,
  question: "For Individuals & HUF",
  answer: (
    <>
      <table className="w-full border border-gray-300 mt-3 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-[#eaf4f5] text-[#0C3D4C]">
          <tr>
            <th className="p-3 text-left border-b border-gray-200 w-1/3 font-semibold">
              Type
            </th>
            <th className="p-3 text-left border-b border-gray-200 font-semibold">
              Acceptable Documents
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Proof of Identity */}
          <tr className="odd:bg-[#f9fafb] hover:bg-[#eef9fb] transition-colors align-top">
            <td className="p-3 border-b border-gray-100 font-medium text-[#0C3D4C]">
              Proof of Identity
            </td>
            <td className="p-3 border-b border-gray-100">
              <ul className="list-disc list-inside space-y-1">
                {[
                  "Aadhaar Card",
                  "Voter ID",
                  "Driving License",
                  "Passport",
                  "Ration card with photo",
                  "Arms license",
                  "Central/State Government or PSU ID card (Transgender: certificate from District Magistrate)",
                  "Pensioner card",
                  "CGHS / Ex-servicemen card",
                  "Certificate signed by MP/MLA/Municipal Councillor/Gazetted Officer",
                  "Bank certificate on branch letterhead with attested photo and account number",
                ].map((doc, i) => (
                  <li key={i}>{doc}</li>
                ))}
              </ul>
            </td>
          </tr>

          {/* Proof of Address */}
          <tr className="odd:bg-[#f9fafb] hover:bg-[#eef9fb] transition-colors align-top">
            <td className="p-3 border-b border-gray-100 font-medium text-[#0C3D4C]">
              Proof of Address
            </td>
            <td className="p-3 border-b border-gray-100">
              <ul className="list-disc list-inside space-y-1">
                {[
                  "Aadhaar Card",
                  "Voter ID",
                  "Driving License",
                  "Passport (or spouse’s passport)",
                  "Post Office passbook",
                  "Property tax assessment order",
                  "Domicile certificate",
                  "Government allotment letter (≤3 years old)",
                  "Property registration document",
                  "Pension payment order",
                  "Utility bills (≤3 months old) such as Electricity, Landline, Water, Gas",
                  "Bank / Depository / Credit card statements",
                  "Certificate signed by MP/MLA/Municipal Councillor/Gazetted Officer",
                  "Employer certificate in original",
                ].map((doc, i) => (
                  <li key={i}>{doc}</li>
                ))}
              </ul>
            </td>
          </tr>

          {/* Proof of Date of Birth */}
          <tr className="odd:bg-[#f9fafb] hover:bg-[#eef9fb] transition-colors align-top">
            <td className="p-3 border-b border-gray-100 font-medium text-[#0C3D4C]">
              Proof of Date of Birth
            </td>
            <td className="p-3 border-b border-gray-100">
              <ul className="list-disc list-inside space-y-1">
                {[
                  "Aadhaar Card",
                  "Voter ID",
                  "Driving License",
                  "Passport",
                  "Matriculation certificate/Marksheet",
                  "Birth certificate",
                  "Photo ID card issued by Government/PSU (Transgender: certificate from District Magistrate)",
                  "Domicile certificate",
                  "CGHS / Ex-servicemen card",
                  "Pension payment order",
                  "Marriage certificate",
                  "Affidavit sworn before magistrate stating DOB",
                ].map((doc, i) => (
                  <li key={i}>{doc}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Notes */}
      <h4 className="font-semibold mt-6 text-[#0C3D4C] border-l-4 border-[#0077b6] pl-3">
        Notes:
      </h4>
      <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
        <li>For minors, parents’/guardians’ documents may be used as a proof.</li>
        <li>
          For HUF, Karta’s affidavit with names, father’s names, and addresses of
          coparceners plus any of the above documents in Karta’s name is required.
        </li>
        <li>Proof of Address must match item no.7.</li>
        <li>
          Indian citizens abroad: Bank statement (local or NRE account, ≤3
          months old) may serve as proof of address.
        </li>
      </ul>
    </>
  ),
}

,
  {
    icon: <BookOpen size={22} className="text-[#00b4d8]" />,
    question:
      "For Other Categories (Firm, BOI, AOP, Trust, Local Authority, Company, LLP, Artificial Juridical Person)",
    answer: (
      <>
    <table className="w-full border border-gray-300 mt-3 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-[#eaf4f5] text-[#0C3D4C]">
          <tr>
            <th className="p-3 text-left border-b border-gray-200 w-1/3 font-semibold">
              Type
            </th>
            <th className="p-3 text-left border-b border-gray-200 font-semibold">
              Acceptable Documents
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Proof of Identity */}
          <tr className="odd:bg-[#f9fafb] hover:bg-[#eef9fb] transition-colors align-top">
            <td className="p-3 border-b border-gray-100 font-medium text-[#0C3D4C]">
              Proof of Identity
            </td>
            <td className="p-3 border-b border-gray-100 space-y-2">
              <p>
                <strong>No attestation required:</strong> Passport / PIO / OCI
                card / Bank statement (country of residence) / NRE account
                statement / Certificate of residence in India or Residential
                permit / Visa & appointment letter from Indian company with
                employer certificate (original)
              </p>
              <p>
                <strong>Attestation required:</strong> National ID / Taxpayer ID
                attested by Apostille (for Hague Convention countries) or Indian
                Embassy / High Commission / Consulate or authorized bank
                officials overseas
              </p>
            </td>
          </tr>

          {/* Proof of Address */}
          <tr className="odd:bg-[#f9fafb] hover:bg-[#eef9fb] transition-colors align-top">
            <td className="p-3 border-b border-gray-100 font-medium text-[#0C3D4C]">
              Proof of Address
            </td>
            <td className="p-3 border-b border-gray-100">
              Same as above; must match PAN application form.
            </td>
          </tr>

          {/* Additional (Office Address in India) */}
          <tr className="odd:bg-[#f9fafb] hover:bg-[#eef9fb] transition-colors align-top">
            <td className="p-3 border-b border-gray-100 font-medium text-[#0C3D4C]">
              Additional (Office Address in India for Foreign Citizens)
            </td>
            <td className="p-3 border-b border-gray-100">
              <ul className="list-disc list-inside space-y-1">
                {[
                  "Appointment letter / contract from Indian company",
                  "Certificate (original) of Indian address issued by employer with employer PAN",
                  "PAN card of employer mentioned in certificate",
                ].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

        <h4 className="font-semibold mt-6 text-[#0C3D4C] border-l-4 border-[#00b4d8] pl-3">
          2a. Applicants with Office in India
        </h4>
        <table className="w-full border border-gray-200 mt-3 text-sm rounded-lg overflow-hidden shadow-sm">
          <thead className="bg-[#f0f9ff] text-left">
            <tr>
              <th className="p-2">Applicant Type</th>
              <th className="p-2">Required Document</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-[#f9fafb]">
              <td className="p-2">Company</td>
              <td className="p-2">Certificate of registration from ROC</td>
            </tr>
            <tr className="odd:bg-[#f9fafb]">
              <td className="p-2">Partnership / LLP</td>
              <td className="p-2">Certificate of registration or revised partnership deed</td>
            </tr>
            <tr>
              <td className="p-2">Trust / AOP / BOI / Local Authority / AJP</td>
              <td className="p-2">
                Trust deed or registration certificate or government-issued document confirming identity and address
              </td>
            </tr>
          </tbody>
        </table>

        <h4 className="font-semibold mt-6 text-[#0C3D4C] border-l-4 border-[#00b4d8] pl-3">
          2b. Applicants without Office in India
        </h4>
        <p>
          Certificate of registration from the country of residence, attested by Apostille (Hague Convention countries) or Indian Embassy / High Commission / Consulate, or authorized bank officials, as per ITD guidelines.
        </p>
      </>
    ),
  },
  {
    icon: <ClipboardList size={22} className="text-[#9b5de5]" />,
    question: "Supporting Documents for PAN Data Changes",
    answer: (
      <>
        <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
          <thead className="bg-[#f6f3ff] text-left">
            <tr>
              <th className="p-2">Applicant Type</th>
              <th className="p-2">Documents Accepted</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Married women – name change due to marriage", "Marriage certificate, marriage invitation, passport showing husband’s name, gazette notification, or certificate from Gazetted officer"],
              ["Other Individuals", "Gazette notification or certificate from Gazetted officer"],
              ["Transgender", "Certificate from District Magistrate"],
              ["Companies", "ROC certificate for name change"],
              ["Firms / LLP", "Revised partnership deed or registrar certificate"],
              ["AOP / Trust / BOI / AJP / Local Authority", "Revised deed / agreement or revised registration certificate"],
            ].map(([type, doc], i) => (
              <tr key={i} className="odd:bg-[#f9fafb] hover:bg-[#f3f0ff] transition-colors">
                <td className="p-2 border-b border-gray-100">{type}</td>
                <td className="p-2 border-b border-gray-100">{doc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    ),
  },
];

export default function Reprintdocuments({ guidelinepoints: propsPoints }) {
  const points = propsPoints || guidelinepoints;
  return (
    <section className="pb-16 bg-gradient-to-b from-white to-[#f9fbfc]">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="absolute -left-4 top-0 w-[2px] h-full bg-[#0c3d4c]"></div>

        <div className="space-y-10 relative">
          {points.map((item, index) => (
            <div
              key={index}
              className="relative flex items-start gap-5 pl-10 border border-gray-100 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="absolute left-[7px] top-7 w-3 h-3 bg-[#0077b6] rounded-full shadow-md"></div>

              <div className="p-3 rounded-xl bg-[#f1f9fa] flex items-center justify-center shrink-0">
                {item.icon}
              </div>

              <div className="overflow-x-auto w-full">
                <h3 className="text-xl font-semibold text-[#0C3D4C] mb-4">
                  {item.question}
                </h3>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
