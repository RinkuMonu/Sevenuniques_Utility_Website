// import React from 'react';
// import Instructions from '../../../../components/pancard/Instructions';


// export default function Instructionforeign () {
// const instructionsData = [
//     {
//         title: "Follow Community Rules",
//         desc: "Always adhere to the community rules and maintain a positive, respectful attitude.",
//     },
//     {
//         title: "Respect Others",
//         desc: "Treat all users kindly and respect their opinions, even when you disagree.",
//     },
//     {
//         title: "Be Clear & Concise",
//         desc: "Use simple and direct language to make your messages easy to understand.",
//     },
//     {
//         title: "Protect Privacy",
//         desc: "Never share personal or sensitive information in public discussions.",
//     },
//     {
//         title: "Report Responsibly",
//         desc: "If you encounter inappropriate content, report it calmly and responsibly.",
//     },
//     {
//         title: "Stay On Topic",
//         desc: "Keep your posts and replies relevant to the topic being discussed.",
//     },
// ];

//     return (

//                 <Instructions items={instructionsData} />
//     );
// }



import React from 'react';
import Instructions from '../../../../components/pancard/Instructions';

export default function Instructionforeign() {
    const instructionsData = [
        {
            title: "Read Instructions",
            desc: [
                "This form is only for persons who are not Indian citizens, except Qualified Foreign Investors (QFI), who must have to submit Form 49AA through a Depository Participant.",
                "The form must be filled in English.",
                "Fields marked with (*) are mandatory.",
                "Applicants shall leave a void space after each word/number/punctuation.",
                "Applicants who already have a 10-digit alphanumeric PAN shall not apply again. For corrections or reprints, Applicants can use the Request for New PAN/Correction form.",
                "AO Code (Area Code, AO Type, Range Code, AO Number) must be filled. If unknown, default AO code for International Taxation under Delhi RCC: DLC-C-35-1"
            ],
        },
        {
            title: "1. Full Name - Guidelines for Filling the Form",
            desc: [
                "Individuals must provide a full expanded name, no abbreviations or initials.",
                "Examples:",
                "• RAVIKANT → Last Name: R A V I K A N T",
                "• POONAM RAVI NARAYAN → Last Name: N A R A Y A N; First Name: P O O N A M; Middle Name: R A V I",
                "Non-Individuals: Full entity name starting in Last Name field.",
                "Example: XYZ DATA CORPORATION (INDIA) PRIVATE LIMITED",
                "Note: Use 'Private Limited' fully, no abbreviations like Pvt Ltd."
            ],
        },
        {
            title: "2. Name to be printed on pancard",
            desc: [
                "Individual: Can abbreviate, must include last name.",
                "Example: SATYAM VENKAT M. K. RAO → S. V. M. K. RAO or SATYAM V. M. K. RAO",
                "Non-Individual: Same as last name in Item 1.",
                "No prefixes like Shri, Smt, Dr., M/s etc."
            ],
        },
        {
            title: "3. Other Names",
            desc: [
                "If 'Yes,' provide details of other name using the same format as full name."
            ],
        },
        {
            title: "4. Gender",
            desc: [
                "Mandatory for Individuals; leave blank for others."
            ],
        },
        {
            title: "5. Date of Birth / Incorporation",
            desc: [
                "Format: DD MM YYYY",
                "Cannot be a future date.",
                "Relevant date:",
                "• Individual: Date of Birth",
                "• Company: Date of Incorporation",
                "• HUF: Date of creation (if unknown, use 01-01-0001)",
                "• Trust: Trust Deed date",
                "• Partnership / LLP: Registration date"
            ],
        },
        {
            title: "6. Parents' Details (Individuals only)",
            desc: [
                "Mother's name only if she is a single parent (Yes/No flag mandatory).",
                "Father's name mandatory unless mother-only flag selected.",
                "Married women must provide their father's name, not husband's name.",
                "Select which parent's name to print on the pancard."
            ],
        },
        {
            title: "7. Address – Residential & Office",
            desc: [
                "Residential address mandatory for Individuals, HUF, BOI, AOP, Artificial Juridical Person.",
                "Foreign addresses: Select 'outside India' and provide country name and ZIP code.",
                "Office address mandatory in certain cases (salary + business, Firms, Companies, Trusts)."
            ],
        },
        {
            title: "8. Address for Communication",
            desc: [
                "'R' = Residence, 'O' = Office.",
                "All future communication will be sent here."
            ],
        },
        {
            title: "9. Telephone Number & Email",
            desc: [
                "Include country code for telephone/mobile.",
                "Example: Delhi number 23555705 → 91 11 2 3 5 5 5 7 0 5",
                "Example: Mobile 9102511111 → 91 9102511111"
            ],
        },
        {
            title: "10. Status of Applicant",
            desc: [
                "Mandatory for all categories.",
                "LLPs: PAN allotted in Firm status."
            ],
        },
        {
            title: "11. Registration Number",
            desc: [
                "Mandatory for Companies (ROC registration number)."
            ],
        },
        {
            title: "12. Country of Citizenship",
            desc: [
                "Mandatory for all categories; provide ISD code."
            ],
        },
        {
            title: "13. Source of Income",
            desc: [
                "Must select at least one source.",
                "If Business/Profession, provide code from table:",
                "Code | Business / Profession",
                "01   | Medical",
                "02   | Engineering",
                "03   | Architecture",
                "04   | Chartered Accountant",
                "05   | Interior Decoration",
                "06   | Technical Consultancy",
                "07   | Company Secretary",
                "08   | Legal Practitioner",
                "09   | Government Contractors",
                "10   | Insurance Agency",
                "11   | Films / TV / Entertainment",
                "12   | Information Technology",
                "13   | Builders & Developers",
                "14   | Stock Exchange / Brokers",
                "15   | Performing Arts / Yatra",
                "16   | Ships, Aircraft, Helicopters",
                "17   | Commercial Vehicles",
                "18   | Horses / Jockeys",
                "19   | Cinema Halls / Theatres",
                "20   | Others"
            ],
        },
        {
            title: "14. Representative Assessee",
            desc: [
                "Mandatory if the applicant is minor, deceased, mentally incapacitated, or as per Section 160.",
                "Provide POI and POA for representatives.",
                "Foreign non-individuals with no Indian office can mention the care of tax consultants in India with notarized Power of Attorney."
            ],
        },
        {
            title: "15. Proof of Identity & Address",
            desc: [
                "Select from form dropdown.",
                "Documents must match the applicant's name in Item 1.",
                "Minors: parents'/guardian documents acceptable.",
                "HUF: affidavit by Karta + Karta's POI & POA."
            ],
        },
        {
            title: "16. Payment Details",
            desc: [
                "Options: Demand Draft / Credit Card / Debit Card / Net Banking."
            ],
        },
        {
            title: "17. Signature / Left Thumb Impression",
            desc: [
                "Sign by: applicant, Karta (HUF), Director (Company), Authorized Signatory (AOP/Body of Individuals/Artificial Juridical Person), Partner (Firm/LLP), Trustee, or Representative Assessee.",
                "Verifier's name, capacity, and place mandatory."
            ],
        },
    ];

    return (
        <Instructions items={instructionsData} />
    );
}