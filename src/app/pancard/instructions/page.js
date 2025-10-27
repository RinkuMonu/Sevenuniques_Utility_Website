"use client";

import Instructions from "../../../../components/pancard/Instructions";


export default function InstructionsIndianCitizens() {
    const instructionsData = [
        {
          title: "Follow Community Rules",
          desc: "Always adhere to the community rules and maintain a positive, respectful attitude.",
        },
        {
          title: "Respect Others",
          desc: "Treat all users kindly and respect their opinions, even when you disagree.",
        },
        {
          title: "Be Clear & Concise",
          desc: "Use simple and direct language to make your messages easy to understand.",
        },
        {
          title: "Protect Privacy",
          desc: "Never share personal or sensitive information in public discussions.",
        },
        {
          title: "Report Responsibly",
          desc: "If you encounter inappropriate content, report it calmly and responsibly.",
        },
        {
          title: "Stay On Topic",
          desc: "Keep your posts and replies relevant to the topic being discussed.",
        },
        // PAN Instructions
        {
          title: "PAN Instructions (Form 49A)",
          desc: "It is only an Indian citizen who can apply to this form. Indian citizens living outside India also need to apply via Form 49A.",
        },
        {
          title: "Language & Mandatory Fields",
          desc: "Form must be filled in English only. Fields marked with an asterisk (*) are mandatory. Leave a blank space after each word/number/punctuation mark.",
        },
        {
          title: "Multiple PAN Restriction",
          desc: "Those who already have a ten-digit alphanumeric PAN cannot reapply. Requests for a new PAN with the same number or corrections should be submitted in the corresponding form.",
        },
        {
          title: "AO Code",
          desc: "The AO code of the Jurisdictional Assessing Officer must be filled. These can be obtained from the Income Tax Office or via form search options.",
        },
        {
          title: "Full Name - Individual",
          desc: "Name: Vivek Kumar Singh\nLast Name/Surname: S I N G H\nFirst Name: V I V E K\nMiddle Name: K U M A R",
        },
        {
          title: "Full Name - Company",
          desc: "Name: Sevenunique Tech Solutions Private Limited.\nLast Name/Surname: S E V E N U N I Q U E T E C H S O L U T I O N S.\nFirst Name: P R I V A T E\nMiddle Name: L I M I T E D\nAvoid abbreviations like Pvt Ltd or P.Ltd. Titles like Shri, Smt., Dr. should not be used.",
        },
        {
          title: "Name on pancard",
          desc: "Individual alternatives: V I V E K K U M A R S I N G H, V. K. S I N G H, V I V E K K. S I N G H.\nCompany name: S E V E N U N I Q U E T E C H S O L U T I O N S P R I V A T E L I M I T E D.",
        },
        {
          title: "Previous Names",
          desc: "If identified by another name, choose Yes and write details in the same manner.",
        },
        {
          title: "Gender",
          desc: "For individuals: Transgender, Male, or Female. Leave blank for non-individuals.",
        },
        {
          title: "Date of Birth / Incorporation",
          desc: "Individual: date of birth (e.g., 02/08/1975). Company: date of incorporation.",
        },
        {
          title: "Parents' Information",
          desc: "Father's name is compulsory: R A M E S H P R A S A D S I N G H. Mother's name is optional: K A M L E S H K U M A R I S I N G H.",
        },
        {
          title: "Address",
          desc: "Residential address mandatory for individuals, HUFs, BOIs, AOPs. Complete town/city/district, state, PIN. Foreign addresses: select 'outside India' and indicate country name and ZIP.",
        },
        {
          title: "Office Address",
          desc: "Mandatory for businesses. Complete at least two of the first four fields. Foreign address: select 'outside India', country name, and ZIP.",
        },
        {
          title: "Address for Communication",
          desc: "Select either Residential (R) or Office (O). Further communication will be sent to this address.",
        },
        {
          title: "Telephone & Email",
          desc: "Include country code. Example: Delhi landline 91-11-23555705, mobile 91-91025111111.",
        },
        {
          title: "Status of Applicant",
          desc: "Required for all applicants. LLP considered a firm.",
        },
        {
          title: "Registration Number",
          desc: "Mandatory for companies. Not applicable to HUFs and individuals.",
        },
        {
          title: "Aadhaar Number (Individuals Only)",
          desc: "Provide Aadhaar number and attach a copy. Name should match Aadhaar.",
        },
        {
          title: "Source of Income",
          desc: "Choose one or more sources. Business/profession must provide code (e.g., 12 - Information Technology for Seven Unique Tech Solutions Private Limited).",
        },
        {
          title: "Representative Assessee",
          desc: "Applicable for minors, deceased, mentally challenged, or non-resident applicants without office in India. Provide ID and address evidence.",
        },
        {
          title: "Evidence",
          desc: "Submit proof of identity, address, and date of birth in the applicant's name. Parent/guardian proof sufficient for minors.",
        },
        {
          title: "Payment Details",
          desc: "Deposit via demand draft, credit/debit card, or net banking.",
        },
        {
          title: "Signature / Thumb Impression",
          desc: "To be signed by applicant or authorized person (Karta, Director, Partner, Trustee, Representative Assessee). Include name, capacity, and location of verifier.",
        },
      ];
  return (
    <>
        <Instructions items={instructionsData} />

    </>
  );
}
