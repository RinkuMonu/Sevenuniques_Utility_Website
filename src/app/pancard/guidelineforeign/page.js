import React from 'react';
import Guide from '../../../../components/Pancard/Guide';


export default function Guidelineforeign () {

   const guidelinesData = 
 [
  {
    title: "Proof of Identity (POI)—Attestation not required",
    desc: [
      "Copy of Passport",
      "Photo of Person of Indian Origin (PIO) card of the Government of India.",
      "Duplicate of the Overseas Citizen of India (OCI) card issued by the Government of India."
    ]
  },
  {
    title: "Proof of Identity (POI)—Attestation needed",
    desc: [
      "Duplicate of any other national or citizenship identification number or Taxpayer Identification Number, duly certified by Apostille (name of the country that is a signatory to the Hague Convention 1961) or the Indian Embassy/High Commission/Consulate of the country where the applicant is located or authorized officials of overseas branches of scheduled banks registered in India (in prescribed form)."
    ]
  },
  {
    title: "Proof of Address (POA)—Not required",
    desc: [
      "Copy of Passport",
      "copy of the Person of Indian Origin (PIO) card, which was issued by the Government of India.",
      "The Government of India issued a copy of the Overseas Citizen of India (OCI) card.",
      "Duplicate bank account statement in the nation of origin",
      "Indian Non-Resident External (NRE) bank account statement copy.",
      "Duplicate of Certificate of Residence in India or Residential Permit by State Police Authorities.",
      "Duplicate of the registration certificate with the Foreigners Registration Office with the address of the Indian.",
      "Visa issued, and a copy of the appointment letter/contract with the Indian company and the certificate (original) of the Indian address given by the employer."
    ]
  },
  {
    title: "Attestation required: Proof of Address (POA)",
    desc: [
      "Duplicates of any other national or citizenship identification numbers or Taxpayer Identification Number properly attested by Apostille or by the Indian embassy/high commission consulate or authorized officials of an overseas branch of a scheduled bank registered in India (in the prescribed format)"
    ]
  },
  {
    title: "Further Information for Foreign Citizens",
    desc: [
      "In case there is an office address in India that was mentioned in the application, the following additional documents are required:",
      "Duplicate of appointment letter/contract with Indian company.",
      "Indian address certificate (original) signed by the authorized signatory of the employer on company letterhead with reference to the PAN of the employer.",
      "Duplicate of PAN card of PAN in the certificate of employer.",
      "Illustration: An Indian national, Vivek Kumar Singh, can give a passport as POI and an electricity bill as POA."
    ]
  },
  {
    title: "Non-Individuals (company, firm, LLP, AOP, trust, local authority, artificial juridical person)",
    desc: [
      "Applicants with an office in India:",
      "Evidence of Identity: a copy of the certificate of registration issued in India or permission to open an office in India given by Indian authorities.",
      "Evidence of Address: copy of certificate of registration issued in India or permission to establish an office in India by the Indian government.",
      "Applicants who do not have an office in India:",
      "Identity Evidence: Certificate of Registration, issued in the country where the applicant is resident, duly attested by Apostille or Indian Embassy/High Commission/Consulate or other approved persons of overseas branches of the scheduled banks in India (in prescribed form)",
      "Evidence of Address: Above",
      "Example: Sevenunique Tech Solutions Private Limited would have to provide a Certificate of Incorporation issued by the Registrar of Companies as POI and POA in case the office is in India."
    ]
  }
];


    return (
   <>
   
  <section className='bg-gradient-to-br from-[#ebf7fa] to-[#fffaf0] '>
        <h1 className="text-3xl md:text-5xl font-bold text-[#176B87] mb-4 text-center tracking-tight mx-auto pt-10" >
          Application Form PAN (Form 49AA) - Document Guidelines.</h1>
      <p className='text-center text-gray-800 pb-6'>
        Individuals and Hindu Undivided Families (HUF).

      </p>
<Guide guidelines={guidelinesData} />
  </section>
</>

    );
}
