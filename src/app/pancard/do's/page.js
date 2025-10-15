
// import React from 'react';
// import Dos from '../../../../components/Pancard/Dos';


// export default function dosforeign() {

//     const dosList = [
//         {
//             title: "PAN C",
//             desc: "A valid PAN card is required for identity verification.",
//         },
//         {
//             title: "Aadhaar Card",
//             desc: "Aadhaar card is needed for address verification.",
//         },
//         {
//             title: "Bank Statement",
//             desc: "Recent bank statements to verify financial details.",
//         },
//         {
//             title: "Passport Photo",
//             desc: "A recent passport-sized photograph.",
//         },
//         {
//             title: "Utility Bill",
//             desc: "Proof of address such as electricity or water bill.",
//         },
//         {
//             title: "Signature Proof",
//             desc: "A scanned copy of your signature for documentation purposes.",
//         },
//     ];

//     return (


//         <Dos items={dosList} />
//     );
// }



import React from 'react';
import Dos from '../../../../components/Pancard/Dos';

export default function dosforeign() {

    const dosList = [
        {
            title: "Important Information for PAN Application (Form 49AA)",
            desc: "Please read all the instructions carefully before filling out the PAN application form.",
        },
        {
            title: "Do's",
            desc: [
                "Use Form 49AA to apply for PAN allotment.",
                "Fill the application in block letters in English.",
                "Paste two recent colour photographs (size 3.5 cm × 2.5 cm).",
                "Provide signature within the box.",
                "If using a left thumb impression, get it attested by a Magistrate, Notary Public, or Gazetted Officer under official seal and stamp.",
                "Provide the correct AO code in the application.",
                "Attach Proof of Identity (POI) and Proof of Address (POA) as per Rule 114 (4) of Income Tax Rules, 1962. POA must contain the address mentioned in the application.",
                "Ensure POI and POA names match exactly as written in the application.",
                "Provide details of Representative Assessee in column 14 (if applicable under Section 160 of Income Tax Act, 1961).",
                "Provide POI and POA for the Representative Assessee if appointed.",
                "Write the complete postal address, including landmarks.",
                "Mention the correct ZIP code in the address field.",
                "Provide telephone number and email ID."
            ],
        },
        {
            title: "Don'ts",
            desc: [
                "Do not overwrite or make corrections in the application.",
                "Do not pin or staple the photograph.",
                "Do not sign outside the box.",
                "Do not provide POI or POA not in the applicant's name.",
                "Do not write additional details (date, designation, rank, etc.) along with signature.",
                "Do not mention the husband's name in the father's name field (for female applicants).",
                "Do not abbreviate your name or use initials.",
                "Do not apply for a new PAN if you already have one (use the correction/reprint form instead)."
            ],
        },
        {
            title: "For Assistance",
            desc: [
                "Sevenunique Tech Solutions Private Limited",
                "Plot No. 97, Dakshinpuri – I, Shrikishan, Sanganer, Jagatpura, Jaipur, Shri Kishanpura, Rajasthan – 302017",
                "Phone: 0141 451 1098",
                "Website: www.sevenuniques.com"
            ],
        },
    ];

    return (
        <Dos items={dosList} />
    );
}