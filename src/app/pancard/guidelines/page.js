"use client";

import Guide from "../../../../components/pancard/Guide";

export default function Guidelines() {

  const guidelinesData = [
    {
      title: "Online PAN Application Steps",
      desc: `At Sevenunique Tech Solutions Pvt. Ltd., we provide a digital pancard service for Indian citizens.
      Foreign nationals of Indian origin can also use this service. The first step is to pick Form 49A,
      select the appropriate category, and fill in general information. A token number is created and shown
      on screen once the form is submitted. This token is emailed as well, allowing applicants to save and
      edit the form before final submission. After completing all information, the system authenticates it.
      Any errors can be rectified before submission. Once successfully validated, a confirmation screen shows
      all entered information for review.`
    },
    {
      title: "Acknowledgment and Verification",
      desc: `After submission, an acknowledgement receipt is generated and emailed. Download, print, and sign
      the acknowledgment as instructed. The signature or left-hand thumb impression must partially cover the
      photograph. For non-individual applicants (companies, firms, trusts), the authorized signatory (director,
      partner, trustee, or karta) should sign. Thumb impressions must be verified by a notary, magistrate, or
      gazetted officer with an official seal and stamp.`
    },
    {
      title: "Submission of Documents",
      desc: `For physical submission, attach the signed acknowledgment and documents such as proof of identity,
      proof of address, and date of birth to our office. For paperless PAN online services (e-KYC, e-Sign,
      DSC-based applications), no physical copies are needed. Quoting an Aadhaar number in Form 49A is mandatory,
      and a copy of the Aadhaar allotment letter must be attached. Documents should reach us within 15 days.
      Customers can monitor status and download their e-PAN after approval.`
    },
    {
      title: "Contact Us",
      desc: `For assistance, contact Sevenunique Tech Solutions Pvt. Ltd. Head office: Plot No 97, Dakshinpuri-I,
      Shrikishan, Sanganer, Jagatpura, Jaipur, Rajasthan, India-302017. Email: support@7unique.in, info@7unique.in.
      Call: 0141-4511098. We provide reliable and professional online pancard services.`
    },
  ];

  return (
    <>
    <section className='bg-gradient-to-br from-[#ebf7fa] to-[#fffaf0] '>
            <h1 className="text-3xl md:text-5xl font-bold text-[#176B87] mb-4 text-center tracking-tight mx-auto pt-10" >
              Application Form PAN (Form 49A) - Document Guidelines.</h1>
          {/* <p className='text-center text-gray-800 pb-6'>
            Individuals and Hindu Undivided Families (HUF).

          </p> */}
    <Guide guidelines={guidelinesData} />
      </section>
    </>
  );
}
