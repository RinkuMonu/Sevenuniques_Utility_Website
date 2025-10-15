
import React from 'react';
import Dos from '../../../../components/Pancard/Dos';


export default function dosforeign() {

    const dosList = [
        {
            title: "PAN C",
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


        <Dos items={dosList} />
    );
}
