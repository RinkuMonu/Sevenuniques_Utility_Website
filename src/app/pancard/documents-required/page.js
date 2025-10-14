"use client";

import Documents from "../../../../components/Pancard/Documents";


export default function DocumentsRequired() {

const documentList = [
    {
        title: "PAN Card",
        desc: "A valid PAN card is required for identity verification.",
    },
    {
        title: "Aadhaar Card",
        desc: "Aadhaar card is needed for address verification.",
    },
    {
        title: "Bank Statement",
        desc: "Recent bank statements to verify financial details.",
    },
    {
        title: "Passport Photo",
        desc: "A recent passport-sized photograph.",
    },
    {
        title: "Utility Bill",
        desc: "Proof of address such as electricity or water bill.",
    },
    {
        title: "Signature Proof",
        desc: "A scanned copy of your signature for documentation purposes.",
    },
];

  return (
    <>
 <Documents items={documentList} />

    </>
  );
}
