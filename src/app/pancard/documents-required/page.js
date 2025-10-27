"use client";

import Documents from "../../../../components/pancard/Documents";


export default function DocumentsRequired() {

const documentList = [
    {
        title: "These are the following documents needed in the PAN application",
        desc: "In the case of Indian citizens who request the digital pancard service by Sevenunique, valid identity evidence, address, and date of birth evidence are obligatory. Single applicants will be required to provide documents that depict their residential address. Any parental or guardian document can be taken as valid proof of identity and address in the case of an underage (under 18 years of age).",
    },
    {
        title: "For Individuals and HUF",
        desc: <>
        Indian citizens living both within and outside India may use Aadhaar card, voter ID, driving license, passport, ration card with a photograph, or a government-issued photo ID as identification. To prove address, the applicants can provide an Aadhaar card, voter ID, driving license, passport, spouse passport, post office passbook, property tax order, domicile certificate, or recent utility bills like electricity and water or a broadband bill not more than three months old. Address proof can also be presented by bank statements or credit card statements.
        <br />
        As evidence of date of birth, the applicants can provide an Aadhaar card, voter ID, passport, birth certificate, matriculation certificate, marriage certificate, or a government-issued photo identity card. The documents of parents or guardians are deemed as valid evidence in the case of minors. In the case of a Hindu Undivided Family (HUF) applicant, an affidavit is needed with the signatures of the Karta with the names of all family members and addresses.
        <br />
        The Indian citizens who are not in India are allowed to provide a recent foreign bank account statement or Non-Resident External (NRE) account statement (not older than three months) as address proof.
        </>,
    },
    {
        title: "To Companies and Firms and Other Entities",
        desc: <>In the case of companies, firms, trusts, and organizations using our portal of online PAN service, it is necessary to submit such documents as a certificate of registration issued by the corresponding government authority. The companies should present a registration certificate from the Registrar of Companies, and the partnership firms should present a partnership deed or a registration certificate from the Registrar of Firms. Limited Liability Partnerships (LLPs) are supposed to offer a registration certificate issued by the Registrar of LLPs. Trusts must provide a trust deed or a registration certificate from the Charity Commissioner. Other parties, like associations, local authorities, or artificial juridical persons, shall have to submit a document or certificate issued by a competent government authority that substantiates their identity and address.
        <br />The entities, which are not registered in India, are expected to submit the attested copy of their registration certificate in the country of their location. This certificate should be signed by Apostille (Hague Convention countries) or signed by the Indian Embassy, High Commission, or Consulate in that nation. Moreover, the copy of the permission issued by the Indian authorities to open up an office in India should also be provided.
</>,
    },

];

  return (
    <>
 <Documents items={documentList} />

    </>
  );
}
