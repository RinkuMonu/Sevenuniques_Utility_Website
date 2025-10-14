import React from 'react';
import Guide from '../../../../components/Pancard/Guide';


export default function Guidelineforeign () {

   const guidelinesData = [
    {
      title: "Online PAN Application Steps",
      desc: "Lorem"
    },
    {
      title: "Acknowledgment and Verification",
      desc: "Lorem"
    },
    {
      title: "Submission of Documents",
      desc: "Lorem"
    },
    {
      title: "Contact Us",
      desc: "Lorem"
    },
  ];
    return (
<Guide guidelines={guidelinesData} />

    );
}
